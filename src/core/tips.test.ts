import { describe, expect, it } from "vitest";
import { GENERAL_TIPS, pickTip, tipOrder, tipsFor } from "./tips";

describe("tips", () => {
  it("puts the pack's tips first and only shows tips for the place", () => {
    const own = [{ id: "x", text: "Own", places: ["review" as const] }];
    const list = tipsFor("review", own);
    expect(list[0].id).toBe("x");
    expect(list.every((t) => !t.places || t.places.includes("review"))).toBe(true);
    expect(tipsFor("listen", own).some((t) => t.id === "x")).toBe(false);
  });

  it("picks the same tip all day, and a different one when asked", () => {
    const list = tipsFor("home");
    expect(pickTip(list, 100, "home")).toEqual(pickTip(list, 100, "home"));
    expect(pickTip(list, 100, "home", 1)).not.toEqual(pickTip(list, 100, "home"));
    expect(pickTip([], 1, "home")).toBeNull();
  });

  it("keeps tips short enough to read at a glance", () => {
    for (const t of GENERAL_TIPS) expect(t.text.length, t.id).toBeLessThanOrEqual(170);
    expect(new Set(GENERAL_TIPS.map((t) => t.id)).size).toBe(GENERAL_TIPS.length);
  });
});

describe("tip order", () => {
  const list = tipsFor("read");
  it("shows unseen tips before ones seen recently", () => {
    const seen = Object.fromEntries(list.slice(0, -1).map((t, i) => [t.id, 1000 + i]));
    expect(tipOrder(list, seen, 0.3)[0].id).toBe(list.at(-1)!.id);
  });
  it("shuffles differently on different visits", () => {
    const firsts = new Set([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8].map((seed) => tipOrder(list, {}, seed)[0].id));
    expect(firsts.size).toBeGreaterThan(2);
  });
});
