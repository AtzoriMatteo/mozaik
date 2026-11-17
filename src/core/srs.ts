/**
 * Spaced repetition, kept deliberately simple (a Leitner-style ladder).
 *
 * Each word sits on a rung, and each rung shows one kind of card (see
 * review-items.wordCardFor): in its sentence (0–2), on its own (3), on its
 * own / as a gap / heard (4), then typing the Dutch (5+). After each review
 * the learner rates it, Anki style:
 * - Again: forgot it. Back to the start, shown again in 10 minutes.
 * - Hard:  got it with effort. Stays on its rung.
 * - Good:  got it. One rung up.
 * - Easy:  instantly. One rung up too (no card type is ever skipped), a
 *          little later.
 * Matteo: every time a word moves to a new kind of card, the waits start
 * small again (Hard 1 d, Easy at most 2 d), because the new card is harder.
 * Only within a kind of card do they grow. A word counts as *learned*
 * (a glazed tile) from rung 4: about a week of successful reviews.
 */

/** Waits in days for [Hard, Good, Easy] on each rung. Hard on rung 0 is an hour. */
export const WAITS: readonly (readonly [number, number, number])[] = [
  [1 / 24, 1, 2], // 0  new: in its sentence
  [1, 2, 3], //      1  in its sentence
  [2, 4, 6], //      2  in its sentence
  [1, 1, 2], //      3  on its own: new card, short waits again
  [1, 1, 2], //      4  on its own, a gap or heard: new card again
  [1, 1, 2], //      5  type the Dutch: new card again
  [1, 2, 3], //      6
  [2, 4, 6], //      7
  [4, 7, 11], //     8
  [7, 12, 18], //    9
  [12, 21, 32], //  10
  [21, 40, 60], //  11
  [45, 90, 90], //  12  top
];
export const MAX_STAGE = WAITS.length - 1;
export const LEARNED_STAGE = 4;

/**
 * Stages as stored, so no ladder change ever needs a database migration.
 * - 0 new, 99 graduated.
 * - 30 + n: rung n of this ladder.
 * - 10 + n: rung n of the 16 Nov ladder (waits 1, 2, 4, 7, 12, 21, 40, 90).
 * - 1–6: the first ladder (waits 1, 3, 7, 16, 35, 90).
 * Old stages are read on the rung with the same card and the closest wait.
 */
const STORED_OFFSET = 30;
const NOV16_OFFSET = 10;
const NOV16_LADDER = [0, 1, 2, 3, 4, 10, 11, 12, 12] as const;
const FIRST_LADDER = [0, 1, 3, 4, 10, 11, 12] as const;

/** The rung (0–12) of a stored stage. */
export function rungOf(stored: number | undefined): number {
  const s = stored ?? 0;
  if (s >= STORED_OFFSET && s < GRADUATED_STAGE) return Math.min(s - STORED_OFFSET, MAX_STAGE);
  if (s >= NOV16_OFFSET && s < STORED_OFFSET) return NOV16_LADDER[Math.min(s - NOV16_OFFSET, NOV16_LADDER.length - 1)];
  if (s >= 0 && s < FIRST_LADDER.length) return FIRST_LADDER[s];
  return 0;
}

/** The stage to store for a rung. */
export function storedStage(rung: number): number {
  return rung === 0 ? 0 : STORED_OFFSET + rung;
}

/** "Again" brings a word back after this many minutes. */
export const RETRY_MINUTES = 10;

export const REVIEW_RESULTS = ["again", "hard", "good", "easy"] as const;
export type ReviewResult = (typeof REVIEW_RESULTS)[number];

/** stage is the stored stage (see storedStage). */
export type ReviewState = { stage: number; dueAt: Date };

const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

/** Due after whole days: early in the day rather than at the exact minute. */
function inDays(now: Date, days: number): Date {
  const due = new Date(now.getTime() + days * DAY_MS);
  due.setHours(4, 0, 0, 0);
  return due;
}

/** The next review, from the stored stage; returns a stored stage. */
export function schedule(stage: number, result: ReviewResult, now: Date): ReviewState {
  const rung = rungOf(stage);
  const [hard, good, easy] = WAITS[rung];
  switch (result) {
    case "again":
      return { stage: 0, dueAt: new Date(now.getTime() + RETRY_MINUTES * MINUTE_MS) };
    case "hard":
      // Not promoted. A new word comes back in an hour, the rest in whole days.
      return rung === 0
        ? { stage: 0, dueAt: new Date(now.getTime() + hard * DAY_MS) }
        : { stage: storedStage(rung), dueAt: inDays(now, hard) };
    case "good":
    case "easy": {
      const next = Math.min(rung + 1, MAX_STAGE);
      return { stage: storedStage(next), dueAt: inDays(now, result === "easy" ? easy : good) };
    }
  }
}

/** Short label for when a rating would bring the word back: "10 min", "3 d". */
export function describeWait(stage: number, result: ReviewResult, now: Date): string {
  const ms = schedule(stage, result, now).dueAt.getTime() - now.getTime();
  if (ms < HOUR_MS) return `${Math.round(ms / MINUTE_MS)} min`;
  if (ms < DAY_MS / 2 && ms < 3 * HOUR_MS) return `${Math.round(ms / HOUR_MS)} h`;
  // Due early tomorrow morning: "1 d", not "10 h".
  if (ms < 1.5 * DAY_MS) return "1 d";
  const days = Math.max(1, Math.round(ms / DAY_MS));
  return days < 30 ? `${days} d` : `${Math.round(days / 30)} mo`;
}

/** Clocks in the UI tick per minute, so allow a minute of slack. */
const SLACK_MS = 60 * 1000;

export function isDue(dueAt: Date | string | undefined, now: Date): boolean {
  if (!dueAt) return true;
  return new Date(dueAt).getTime() <= now.getTime() + SLACK_MS;
}

export function isLearned(stage: number | undefined): boolean {
  return isGraduated(stage) || rungOf(stage) >= LEARNED_STAGE;
}

/**
 * A graduated word is known and never comes back. It's stored as a schedule
 * on this stage, due in the far future, so no extra table is needed.
 */
export const GRADUATED_STAGE = 99;
export const GRADUATED_DUE = "9999-12-31T00:00:00.000Z";

export function isGraduated(stage: number | undefined): boolean {
  return (stage ?? 0) >= GRADUATED_STAGE;
}

/** Which card to show: recognise the word first, then recall it from a gap. */
export function cardKind(stage: number | undefined): "recognise" | "recall" {
  return rungOf(stage) < 3 ? "recognise" : "recall";
}
