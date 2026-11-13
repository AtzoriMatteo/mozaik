/**
 * Spaced repetition, kept deliberately simple (a Leitner-style ladder).
 *
 * Each word sits on a stage. After each review the learner rates it, Anki
 * style:
 * - Again: forgot it. Back to the start, shown again in 10 minutes.
 * - Hard:  got it with effort. Stays on its stage, back in half the wait.
 * - Good:  got it. One stage up.
 * - Easy:  instantly. Two stages up.
 * A word counts as *learned* (a glazed tile in the mosaic) from stage 3:
 * about three successful reviews spread over a week.
 */

/** Wait before the next review, by stage (in days). Stage 0 = due now. */
export const INTERVAL_DAYS = [0, 1, 3, 7, 16, 35, 90] as const;
export const MAX_STAGE = INTERVAL_DAYS.length - 1;
export const LEARNED_STAGE = 3;

/** "Again" brings a word back after this many minutes. */
export const RETRY_MINUTES = 10;

export const REVIEW_RESULTS = ["again", "hard", "good", "easy"] as const;
export type ReviewResult = (typeof REVIEW_RESULTS)[number];

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

export function schedule(stage: number, result: ReviewResult, now: Date): ReviewState {
  switch (result) {
    case "again":
      return { stage: 0, dueAt: new Date(now.getTime() + RETRY_MINUTES * MINUTE_MS) };
    case "hard": {
      // Not promoted; comes back in half the current wait (a new word: in an hour).
      const days = Math.floor(INTERVAL_DAYS[stage] / 2);
      return days < 1
        ? { stage, dueAt: new Date(now.getTime() + HOUR_MS) }
        : { stage, dueAt: inDays(now, days) };
    }
    case "good":
    case "easy": {
      const next = Math.min(stage + (result === "easy" ? 2 : 1), MAX_STAGE);
      return { stage: next, dueAt: inDays(now, INTERVAL_DAYS[next]) };
    }
  }
}

/** Short label for when a rating would bring the word back: "10 min", "3 d". */
export function describeWait(stage: number, result: ReviewResult, now: Date): string {
  const ms = schedule(stage, result, now).dueAt.getTime() - now.getTime();
  if (ms < HOUR_MS) return `${Math.round(ms / MINUTE_MS)} min`;
  if (ms < DAY_MS / 2) return `${Math.round(ms / HOUR_MS)} h`;
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
  return (stage ?? 0) >= LEARNED_STAGE;
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
  return (stage ?? 0) < 2 ? "recognise" : "recall";
}
