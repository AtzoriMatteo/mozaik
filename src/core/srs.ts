/**
 * Spaced repetition, kept deliberately simple (a Leitner-style ladder).
 *
 * Each word sits on a rung. After each review the learner rates it, Anki
 * style:
 * - Again: forgot it. Back to the start, shown again in 10 minutes.
 * - Hard:  got it with effort. Stays on its rung, same wait again.
 * - Good:  got it. One rung up.
 * - Easy:  instantly. One rung up too (no card type is ever skipped), with
 *          half as long again to wait.
 * The waits grow gently (1, 2, 4, 7, 12 days…), so the four buttons sit
 * close together. A word counts as *learned* (a glazed tile) from rung 4:
 * about a week of successful reviews.
 */

/** Wait before the next review, by rung (in days). Rung 0 = due now. */
export const INTERVAL_DAYS = [0, 1, 2, 4, 7, 12, 21, 40, 90] as const;
export const MAX_STAGE = INTERVAL_DAYS.length - 1;
export const LEARNED_STAGE = 4;

/**
 * Stages as stored. The first ladder (0, 1, 3, 7, 16, 35, 90 days) stored
 * its rungs as 0–6; this one stores rung n as 10 + n, so schedules saved
 * before the change are read on the rung with the closest wait, with no
 * database migration. 0 still means new, 99 graduated.
 */
const STORED_OFFSET = 10;
const OLD_LADDER = [0, 1, 3, 4, 5, 7, 8] as const;

/** The rung (0–8) of a stored stage. */
export function rungOf(stored: number | undefined): number {
  const s = stored ?? 0;
  if (s >= STORED_OFFSET && s < GRADUATED_STAGE) return Math.min(s - STORED_OFFSET, MAX_STAGE);
  if (s >= 0 && s < OLD_LADDER.length) return OLD_LADDER[s];
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
  switch (result) {
    case "again":
      return { stage: 0, dueAt: new Date(now.getTime() + RETRY_MINUTES * MINUTE_MS) };
    case "hard":
      // Not promoted; the same wait again (a new word: in an hour; the top rung: half of it).
      return rung === 0
        ? { stage: 0, dueAt: new Date(now.getTime() + HOUR_MS) }
        : { stage: storedStage(rung), dueAt: inDays(now, rung === MAX_STAGE ? INTERVAL_DAYS[rung] / 2 : INTERVAL_DAYS[rung]) };
    case "good":
    case "easy": {
      const next = Math.min(rung + 1, MAX_STAGE);
      const days = INTERVAL_DAYS[next];
      return { stage: storedStage(next), dueAt: inDays(now, result === "easy" ? Math.round(days * 1.5) : days) };
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
