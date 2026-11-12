import { describe, expect, it } from "vitest";
import { cardKind, describeWait, isDue, isLearned, MAX_STAGE, schedule } from "./srs";

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

  it("keeps a hard word on its stage and brings it back sooner", () => {
    const hard = schedule(3, "hard", now); // stage 3 waits 7 days; hard → 3
    expect(hard.stage).toBe(3);
    expect(hard.dueAt.getDate()).toBe(15);
  });

  it("brings a hard new word back in an hour", () => {
    const { stage, dueAt } = schedule(0, "hard", now);
    expect(stage).toBe(0);
    expect(dueAt.getTime() - now.getTime()).toBe(60 * 60 * 1000);
  });

  it("jumps two stages when it was easy", () => {
    expect(schedule(1, "easy", now).stage).toBe(3);
  });

  it("labels each rating with when the word comes back", () => {
    expect(describeWait(0, "again", now)).toBe("10 min");
    expect(describeWait(0, "hard", now)).toBe("1 h");
    expect(describeWait(0, "good", now)).toBe("1 d");
    expect(describeWait(0, "easy", now)).toBe("3 d");
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
