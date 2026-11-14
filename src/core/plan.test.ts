import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import {
  addDays,
  defaultSettings,
  finishDate,
  minutesFor,
  minutesNeeded,
  remainingActivities,
  schedule,
  weekStart,
  weekdayOf,
} from "./plan";

const MONDAY = "2026-11-16";
const none = () => false;

describe("plans", () => {
  it("knows the weekdays", () => {
    expect(weekdayOf(MONDAY)).toBe(1);
    expect(weekStart("2026-11-22")).toBe(MONDAY);
    expect(addDays(MONDAY, 7)).toBe("2026-11-23");
  });

  it("mixes kinds within a unit and keeps writing last", () => {
    const list = remainingActivities(dutch, "A1", none, false);
    const firstUnit = list.filter((a) => a.unit.id === list[0].unit.id);
    expect(firstUnit.slice(0, 3).map((a) => a.kind)).toEqual(["read", "listen", "grammar"]);
    expect(firstUnit.at(-1)!.kind).toBe("write");
    expect(list.some((a) => a.kind === "speak")).toBe(false);
  });

  it("only schedules study days, within the minutes, with review first", () => {
    const s = { ...defaultSettings(MONDAY), minutesPerDay: 20, days: [1, 3, 5] };
    const days = schedule(dutch, s, remainingActivities(dutch, "A1", none, false), MONDAY);
    for (const d of days) {
      if (!s.days.includes(d.weekday)) expect(d.items).toEqual([]);
      else {
        expect(d.items[0].kind).toBe("review");
        const work = d.items.filter((x) => x.kind !== "review");
        if (work.length > 1) expect(d.minutes).toBeLessThanOrEqual(22);
      }
    }
  });

  it("schedules every remaining activity exactly once", () => {
    const s = defaultSettings(MONDAY);
    const remaining = remainingActivities(dutch, "A1", none, false);
    const days = schedule(dutch, s, remaining, MONDAY, 400);
    const keys = days.flatMap((d) => d.items.filter((x) => x.kind !== "review").map((x) => x.key));
    expect(keys.length).toBe(remaining.length);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("finishes sooner with more time, and adapts to what's done", () => {
    const remaining = remainingActivities(dutch, "A1", none, false);
    const slow = finishDate(schedule(dutch, { ...defaultSettings(MONDAY), minutesPerDay: 10 }, remaining, MONDAY, 800))!;
    const fast = finishDate(schedule(dutch, { ...defaultSettings(MONDAY), minutesPerDay: 45 }, remaining, MONDAY, 800))!;
    expect(fast < slow).toBe(true);
    const half = remaining.slice(remaining.length / 2);
    const later = finishDate(schedule(dutch, defaultSettings(MONDAY), half, MONDAY, 800))!;
    expect(later < finishDate(schedule(dutch, defaultSettings(MONDAY), remaining, MONDAY, 800))!).toBe(true);
  });

  it("works out the minutes needed for a target date", () => {
    const remaining = remainingActivities(dutch, "A1", none, false);
    const s = { ...defaultSettings(MONDAY), strictness: "strict" as const, targetDate: addDays(MONDAY, 70) };
    const need = minutesNeeded(dutch, s, remaining, MONDAY)!;
    const total = remaining.reduce((n, a) => n + minutesFor(dutch, a), 0);
    expect(need).toBeGreaterThan(total / 50);
    expect(need).toBeLessThan(total / 40 + 15);
  });
});
