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

  it("sends a forgotten word two rungs down, due again in minutes (Matteo)", () => {
    const { stage, dueAt } = schedule(rung(9), "again", now);
    expect(rungOf(stage)).toBe(7);
    expect(dueAt.getTime() - now.getTime()).toBe(10 * 60 * 1000);
    expect(rungOf(schedule(rung(1), "again", now).stage)).toBe(0);
    expect(schedule(0, "again", now).stage).toBe(0);
  });

  it("keeps a hard word on its rung, with the same wait again", () => {
    const hard = schedule(rung(2), "hard", now); // rung 2: Hard is 2 days
    expect(rungOf(hard.stage)).toBe(2);
    expect(hard.dueAt.getDate()).toBe(14);
  });

  it("brings a hard new word back in an hour", () => {
    const { stage, dueAt } = schedule(0, "hard", now);
    expect(stage).toBe(0);
    expect(dueAt.getTime() - now.getTime()).toBe(60 * 60 * 1000);
  });

  it("gives the four buttons growing, close waits", () => {
    expect(REVIEW_RESULTS.map((r) => describeWait(0, r, now))).toEqual(["10 min", "1 h", "1 d", "2 d"]);
    expect(REVIEW_RESULTS.map((r) => describeWait(rung(1), r, now))).toEqual(["10 min", "1 d", "2 d", "3 d"]);
    expect(REVIEW_RESULTS.map((r) => describeWait(rung(9), r, now))).toEqual(["10 min", "7 d", "12 d", "18 d"]);
    for (let r = 0; r <= MAX_STAGE; r++) {
      const ms = REVIEW_RESULTS.map((res) => schedule(rung(r), res, now).dueAt.getTime());
      for (let i = 1; i < ms.length; i++) expect(ms[i]).toBeGreaterThanOrEqual(ms[i - 1]);
      expect(ms[3]).toBeGreaterThan(ms[1]);
    }
  });

  it("starts the waits small again whenever a word moves to a new kind of card (Matteo)", () => {
    // Rung 3: on its own. Rung 4: on its own, a gap or heard. Rung 5: typing.
    for (const r of [3, 4, 5]) {
      expect(REVIEW_RESULTS.map((res) => describeWait(rung(r), res, now)), `rung ${r}`).toEqual(["10 min", "1 d", "1 d", "2 d"]);
    }
    for (let r = 0; r <= MAX_STAGE; r++) {
      const easy = schedule(rung(r), "easy", now).dueAt.getTime() - now.getTime();
      if (r < 6) expect(easy, `rung ${r}`).toBeLessThan(6.5 * 24 * 3600 * 1000);
    }
  });

  it("says 1 d, not 10 h, for early tomorrow morning", () => {
    expect(describeWait(0, "good", new Date("2026-11-12T18:00:00"))).toBe("1 d");
  });

  it("never goes past the last rung", () => {
    expect(rungOf(schedule(rung(MAX_STAGE), "good", now).stage)).toBe(MAX_STAGE);
  });

  it("reads schedules saved on the old ladder on the rung with the closest wait", () => {
    expect([0, 1, 2, 3, 4, 5, 6].map(rungOf)).toEqual([0, 1, 3, 4, 10, 11, 12]);
    // 16 Nov ladder (10 + rung): same card, closest wait. The word Matteo saw
    // on "just the Dutch word" (rung 3) stays there, now with 1 d / 1 d / 2 d.
    expect([10, 11, 12, 13, 14, 15, 16, 17, 18].map(rungOf)).toEqual([0, 1, 2, 3, 4, 10, 11, 12, 12]);
    expect(describeWait(13, "hard", now)).toBe("1 d");
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

describe("wait labels count calendar days", () => {
  it("never shows two different waits as the same day, late in the evening or after midnight", () => {
    for (const at of ["2026-11-12T08:00:00", "2026-11-12T18:00:00", "2026-11-12T23:30:00", "2026-11-13T01:30:00"]) {
      const now = new Date(at);
      for (let r = 0; r <= MAX_STAGE; r++) {
        const [, good, easy] = REVIEW_RESULTS.slice(1).map((res) => describeWait(storedStage(r), res, now));
        if (good === easy && r < MAX_STAGE) throw new Error(`${at}, rung ${r}: Good and Easy both ${good}`);
      }
    }
    expect(describeWait(storedStage(3), "easy", new Date("2026-11-12T23:30:00"))).toBe("2 d");
  });
});
