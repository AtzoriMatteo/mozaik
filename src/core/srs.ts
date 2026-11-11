/**
 * Spaced repetition, kept deliberately simple (a Leitner-style ladder).
 *
 * Each word sits on a stage. "Got it" moves it one stage up and pushes the
 * next review further out; "Not yet" drops it back to the start and shows it
 * again soon. A word counts as *learned* (a glazed tile in the mosaic) once
 * it has been recalled correctly at stage 3 or higher: three successful
 * reviews spread over about a week.
 */

/** Wait before the next review, by stage (in days). Stage 0 = due now. */
export const INTERVAL_DAYS = [0, 1, 3, 7, 16, 35, 90] as const;
export const MAX_STAGE = INTERVAL_DAYS.length - 1;
export const LEARNED_STAGE = 3;

/** "Not yet" brings a word back after this many minutes. */
export const RETRY_MINUTES = 10;

export type ReviewResult = "again" | "good";

export type ReviewState = { stage: number; dueAt: Date };

const DAY_MS = 24 * 60 * 60 * 1000;

export function schedule(stage: number, result: ReviewResult, now: Date): ReviewState {
  if (result === "again") {
    return { stage: 0, dueAt: new Date(now.getTime() + RETRY_MINUTES * 60 * 1000) };
  }
  const next = Math.min(stage + 1, MAX_STAGE);
  // Review early in the day rather than at the exact minute: due at 04:00 local.
  const due = new Date(now.getTime() + INTERVAL_DAYS[next] * DAY_MS);
  if (INTERVAL_DAYS[next] > 0) due.setHours(4, 0, 0, 0);
  return { stage: next, dueAt: due };
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

/** Which card to show: recognise the word first, then recall it from a gap. */
export function cardKind(stage: number | undefined): "recognise" | "recall" {
  return (stage ?? 0) < 2 ? "recognise" : "recall";
}
