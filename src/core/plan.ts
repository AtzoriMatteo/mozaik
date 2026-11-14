import { minutesToRead } from "./content";
import { activities, type Activity } from "./course";
import type { CefrLevel, LanguagePack } from "./language-pack";

/**
 * Study plans: how much time, which days, how strict. The schedule is always
 * recalculated from what is still left to do, so it adapts by itself when
 * you do more (or less) than planned. Pure functions, so it can be tested and
 * reused for any language pack.
 */

export type Goal = "travel" | "living" | "work" | "exam" | "fun";
export type Strictness = "relaxed" | "steady" | "strict";
export type PlanView = "week" | "calendar";

export type PlanSettings = {
  goal: Goal;
  minutesPerDay: number;
  /** 0 = Sunday … 6 = Saturday. */
  days: number[];
  strictness: Strictness;
  /** The level the plan works towards. */
  level: CefrLevel;
  /** Strict plans: finish the level by this date (YYYY-MM-DD). */
  targetDate?: string;
  includeSpeaking: boolean;
  /** A few minutes of review at the start of every study day. */
  dailyReview: boolean;
  view: PlanView;
  /** YYYY-MM-DD: when the plan started (for progress since then). */
  startDate: string;
};

export const MINUTE_CHOICES = [5, 10, 15, 20, 30, 45, 60] as const;
export const WEEKDAYS = [1, 2, 3, 4, 5, 6, 0] as const;
export const WEEKDAY_SHORT: Record<number, string> = { 0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat" };

export function defaultSettings(today: string, level: CefrLevel = "A1"): PlanSettings {
  return {
    goal: "living",
    minutesPerDay: 15,
    days: [1, 2, 3, 4, 5],
    strictness: "steady",
    level,
    includeSpeaking: false,
    dailyReview: true,
    view: "week",
    startDate: today,
  };
}

export type PlanItem =
  | { kind: "review"; key: string; minutes: number }
  | { kind: Activity["kind"]; key: string; minutes: number; activity: Activity };

export type PlanDay = { date: string; weekday: number; studyDay: boolean; items: PlanItem[]; minutes: number };

/** Rough minutes for one activity, including its questions. */
export function minutesFor(pack: LanguagePack, a: Activity): number {
  switch (a.kind) {
    case "read": {
      const text = a.unit.texts.find((t) => t.id === a.id);
      return (text ? minutesToRead(text) : 3) + (text?.tasks?.length ? 3 : 1) + 2;
    }
    case "listen":
      return 7;
    case "grammar":
      return 10;
    case "write":
      return 20;
    case "speak":
      return 8;
    default:
      return 8;
  }
}

/**
 * The activities still to do for a level, in course order but mixed within
 * each unit (a text, a clip, a grammar point, another text…) so a study day
 * has some variety. Writing stays at the end of its unit.
 */
export function remainingActivities(
  pack: LanguagePack,
  level: CefrLevel,
  isDone: (a: Activity) => boolean,
  includeSpeaking: boolean,
): Activity[] {
  const byUnit = new Map<string, Activity[]>();
  for (const a of activities(pack)) {
    if (a.unit.level !== level || isDone(a)) continue;
    if (a.kind === "speak" && !includeSpeaking) continue;
    byUnit.set(a.unit.id, [...(byUnit.get(a.unit.id) ?? []), a]);
  }
  const out: Activity[] = [];
  for (const list of byUnit.values()) {
    const lanes = ["read", "listen", "grammar", "speak"].map((k) => list.filter((a) => a.kind === k));
    while (lanes.some((l) => l.length)) for (const lane of lanes) if (lane.length) out.push(lane.shift()!);
    out.push(...list.filter((a) => a.kind === "write"));
  }
  return out;
}

const DAY_MS = 86_400_000;
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const addDays = (iso: string, n: number) => isoDate(new Date(Date.parse(`${iso}T12:00:00Z`) + n * DAY_MS));
export const weekdayOf = (iso: string) => new Date(`${iso}T12:00:00Z`).getUTCDay();

/** Minutes of review on a study day: about a quarter of the time, 3 to 10 minutes. */
export function reviewMinutes(s: PlanSettings): number {
  return s.dailyReview ? Math.max(3, Math.min(10, Math.round(s.minutesPerDay / 4))) : 0;
}

/**
 * Lays the remaining activities over the coming study days. A day takes
 * activities while they fit; an empty day always takes at least one, so a
 * long activity never blocks the plan.
 */
export function schedule(pack: LanguagePack, s: PlanSettings, remaining: Activity[], from: string, horizonDays = 120): PlanDay[] {
  const queue = [...remaining];
  const days: PlanDay[] = [];
  const studyDays = new Set(s.days.length ? s.days : [1, 2, 3, 4, 5]);
  for (let i = 0; i < horizonDays && (queue.length || days.length < 7); i++) {
    const date = addDays(from, i);
    const weekday = weekdayOf(date);
    const studyDay = studyDays.has(weekday);
    const items: PlanItem[] = [];
    let used = 0;
    if (studyDay) {
      const r = reviewMinutes(s);
      if (r) {
        items.push({ kind: "review", key: `review:${date}`, minutes: r });
        used += r;
      }
      while (queue.length) {
        const m = minutesFor(pack, queue[0]);
        const fits = used + m <= s.minutesPerDay + 2;
        const nothingYet = items.every((x) => x.kind === "review");
        if (!fits && !nothingYet) break;
        const a = queue.shift()!;
        items.push({ kind: a.kind, key: `${a.kind}:${a.id}`, minutes: m, activity: a });
        used += m;
      }
    }
    days.push({ date, weekday, studyDay, items, minutes: used });
  }
  return days;
}

/** The last day with course work on it: when the level should be finished. */
export function finishDate(days: PlanDay[]): string | null {
  for (let i = days.length - 1; i >= 0; i--) if (days[i].items.some((x) => x.kind !== "review")) return days[i].date;
  return null;
}

/** Strict plans: minutes a day needed to finish everything by the target date. */
export function minutesNeeded(pack: LanguagePack, s: PlanSettings, remaining: Activity[], from: string): number | null {
  if (!s.targetDate) return null;
  let studyDays = 0;
  for (let d = from; d <= s.targetDate; d = addDays(d, 1)) if (s.days.includes(weekdayOf(d))) studyDays++;
  if (studyDays === 0) return null;
  const work = remaining.reduce((sum, a) => sum + minutesFor(pack, a), 0);
  return Math.ceil(work / studyDays) + reviewMinutes(s);
}

/** The Monday of the week a date falls in. */
export function weekStart(iso: string): string {
  const wd = weekdayOf(iso);
  return addDays(iso, wd === 0 ? -6 : 1 - wd);
}

/** A friendly date: "Mon 17 Nov". */
export function shortDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
}

/** A friendly date with year when it isn't this year: "12 January" / "3 March 2027". */
export function longDate(iso: string, today: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  const sameYear = iso.slice(0, 4) === today.slice(0, 4);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", ...(sameYear ? {} : { year: "numeric" }), timeZone: "UTC" });
}
