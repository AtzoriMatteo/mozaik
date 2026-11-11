import { describe, expect, it } from "vitest";
import { cardKind, isDue, isLearned, MAX_STAGE, schedule } from "./srs";

const now = new Date("2026-11-12T15:30:00");

describe("spaced repetition", () => {
  it("moves a word up one stage when you get it", () => {
    expect(schedule(0, "good", now).stage).toBe(1);
    expect(schedule(3, "good", now).stage).toBe(4);
  });

  it("pushes the next review out by the stage's interval, early in the day", () => {
    const { dueAt } = schedule(1, "good", now); // stage 2 → 3 days
    expect(dueAt.getDate()).toBe(15);
    expect(dueAt.getHours()).toBe(4);
  });

  it("sends a forgotten word back to the start, due again in minutes", () => {
    const { stage, dueAt } = schedule(4, "again", now);
    expect(stage).toBe(0);
    expect(dueAt.getTime() - now.getTime()).toBe(10 * 60 * 1000);
  });

  it("never goes past the last stage", () => {
    expect(schedule(MAX_STAGE, "good", now).stage).toBe(MAX_STAGE);
  });

  it("treats a word without a due date as due", () => {
    expect(isDue(undefined, now)).toBe(true);
    expect(isDue("2026-11-13T00:00:00", now)).toBe(false);
  });

  it("counts a word as learned from stage 3", () => {
    expect(isLearned(2)).toBe(false);
    expect(isLearned(3)).toBe(true);
  });

  it("starts with recognition cards, then recall", () => {
    expect(cardKind(0)).toBe("recognise");
    expect(cardKind(2)).toBe("recall");
  });
});
