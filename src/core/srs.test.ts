import { describe, expect, it } from "vitest";
import {
  cardKind, describeWait, GRADUATED_STAGE, isDue, isLearned, MAX_STAGE, REVIEW_RESULTS, rungOf, schedule, storedStage,
} from "./srs";

const now = new Date("2026-11-12T15:30:00");
const rung = (r: number) => storedStage(r);

describe("spaced repetition", () => {
  it("moves a word up one rung when you get it", () => {
    expect(rungOf(schedule(0, "good", now).stage)).toBe(1);
    expect(rungOf(schedule(rung(3), "good", now).stage)).toBe(4);
  });

  it("moves only one rung on Easy, so no card type is skipped", () => {
    for (let r = 0; r < MAX_STAGE; r++) expect(rungOf(schedule(rung(r), "easy", now).stage)).toBe(r + 1);
  });

  it("pushes the next review out by the rung's wait, early in the day", () => {
    const { dueAt } = schedule(rung(1), "good", now); // rung 2 → 2 days
    expect(dueAt.getDate()).toBe(14);
    expect(dueAt.getHours()).toBe(4);
  });

  it("sends a forgotten word back to the start, due again in minutes", () => {
    const { stage, dueAt } = schedule(rung(5), "again", now);
    expect(stage).toBe(0);
    expect(dueAt.getTime() - now.getTime()).toBe(10 * 60 * 1000);
  });

  it("keeps a hard word on its rung, with the same wait again", () => {
    const hard = schedule(rung(3), "hard", now); // rung 3 waits 4 days
    expect(rungOf(hard.stage)).toBe(3);
    expect(hard.dueAt.getDate()).toBe(16);
  });

  it("brings a hard new word back in an hour", () => {
    const { stage, dueAt } = schedule(0, "hard", now);
    expect(stage).toBe(0);
    expect(dueAt.getTime() - now.getTime()).toBe(60 * 60 * 1000);
  });

  it("gives the four buttons growing, close waits", () => {
    expect(REVIEW_RESULTS.map((r) => describeWait(0, r, now))).toEqual(["10 min", "1 h", "1 d", "2 d"]);
    expect(REVIEW_RESULTS.map((r) => describeWait(rung(1), r, now))).toEqual(["10 min", "1 d", "2 d", "3 d"]);
    expect(REVIEW_RESULTS.map((r) => describeWait(rung(3), r, now))).toEqual(["10 min", "4 d", "7 d", "11 d"]);
    for (let r = 0; r <= MAX_STAGE; r++) {
      const ms = REVIEW_RESULTS.map((res) => schedule(rung(r), res, now).dueAt.getTime());
      for (let i = 1; i < ms.length; i++) expect(ms[i]).toBeGreaterThan(ms[i - 1]);
    }
  });

  it("says 1 d, not 10 h, for early tomorrow morning", () => {
    expect(describeWait(0, "good", new Date("2026-11-12T18:00:00"))).toBe("1 d");
  });

  it("never goes past the last rung", () => {
    expect(rungOf(schedule(rung(MAX_STAGE), "good", now).stage)).toBe(MAX_STAGE);
  });

  it("reads schedules saved on the old ladder on the rung with the closest wait", () => {
    expect([0, 1, 2, 3, 4, 5, 6].map(rungOf)).toEqual([0, 1, 3, 4, 5, 7, 8]);
    expect(rungOf(GRADUATED_STAGE)).toBe(0);
  });

  it("treats a word without a due date as due", () => {
    expect(isDue(undefined, now)).toBe(true);
    expect(isDue("2026-11-13T00:00:00", now)).toBe(false);
  });

  it("counts a word as learned from rung 4 (about a week)", () => {
    expect(isLearned(rung(3))).toBe(false);
    expect(isLearned(rung(4))).toBe(true);
    expect(isLearned(3)).toBe(true); // old ladder: 7 days
  });

  it("starts with recognition cards, then recall", () => {
    expect(cardKind(0)).toBe("recognise");
    expect(cardKind(rung(3))).toBe("recall");
  });
});
