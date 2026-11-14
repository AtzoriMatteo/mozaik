"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { activities, type Activity } from "@/core/course";
import type { LanguagePack } from "@/core/language-pack";
import { currentLevel } from "@/core/mosaic";
import {
  WEEKDAY_SHORT,
  addDays,
  defaultSettings,
  finishDate,
  longDate,
  minutesFor,
  minutesNeeded,
  remainingActivities,
  reviewMinutes,
  schedule,
  shortDate,
  weekStart,
  weekdayOf,
  type Goal,
  type PlanDay,
  type PlanItem,
  type PlanSettings,
} from "@/core/plan";
import { useLearningLanguage } from "@/components/learning-language";
import { LanguagePicker } from "@/components/language-picker";
import { NextStep } from "@/components/next-step";
import { SkillGlyph, type Skill } from "@/components/unit-tile";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { todayIso, type StudyLog } from "@/lib/plan/log";
import { usePlan } from "@/lib/plan/use-plan";
import { PlanSetup } from "./plan-setup";

const noop = () => () => {};

const GOAL_LABEL: Record<Goal, string> = {
  living: "everyday life in the Netherlands",
  travel: "travel",
  work: "work or study",
  exam: "an exam",
  fun: "fun",
};

const SKILL: Record<string, Skill> = { read: "read", listen: "listen", grammar: "grammar", write: "write", speak: "speak", review: "review" };

function daysLabel(days: number[]): string {
  const sorted = [1, 2, 3, 4, 5, 6, 0].filter((d) => days.includes(d));
  if (sorted.length === 7) return "every day";
  if (sorted.join() === "1,2,3,4,5") return "Monday to Friday";
  return sorted.map((d) => WEEKDAY_SHORT[d]).join(", ");
}

/** Plan: set it up once, then see today, the week and how it's going. */
export function PlanHub() {
  const { pack } = useLearningLanguage();
  const progress = useCourseProgress(pack);
  const plan = usePlan(pack?.code ?? null);
  const today = useSyncExternalStore(noop, todayIso, () => "");
  const [editing, setEditing] = useState(false);

  if (!pack) return <LanguagePicker />;
  if (!today || !plan.loaded) return <p className="lede">Loading your plan…</p>;

  if (!plan.settings || editing) {
    const initial = plan.settings ?? defaultSettings(today, currentLevel(pack, progress.isDone));
    return (
      <PlanSetup
        pack={pack}
        initial={initial}
        today={today}
        isDone={progress.isDone}
        onSave={(s) => {
          plan.save(s);
          setEditing(false);
        }}
        onCancel={plan.settings ? () => setEditing(false) : undefined}
      />
    );
  }

  return (
    <PlanView
      pack={pack}
      settings={plan.settings}
      log={plan.log}
      today={today}
      isDone={progress.isDone}
      onEdit={() => setEditing(true)}
      onRemove={() => plan.save(null)}
    />
  );
}

/** Done today: finished today according to the study log. */
function doneToday(log: StudyLog, today: string, item: PlanItem): boolean {
  const keys = log[today] ?? [];
  if (item.kind === "review") return keys.includes("review");
  if (item.kind === "write") {
    const tasks = new Set((item.activity.unit.writing ?? []).map((t) => `writing:${t.id}`));
    return keys.some((k) => tasks.has(k));
  }
  return keys.includes(item.key);
}

function PlanView({
  pack,
  settings,
  log,
  today,
  isDone,
  onEdit,
  onRemove,
}: {
  pack: LanguagePack;
  settings: PlanSettings;
  log: StudyLog;
  today: string;
  isDone: (a: Activity) => boolean;
  onEdit: () => void;
  onRemove: () => void;
}) {
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);

  // Things finished today stay on today's list (ticked) instead of vanishing.
  const todayKeys = new Set(log[today] ?? []);
  const doneBeforeToday = (a: Activity) =>
    isDone(a) &&
    !todayKeys.has(`${a.kind}:${a.id}`) &&
    !(a.kind === "write" && (a.unit.writing ?? []).some((t) => todayKeys.has(`writing:${t.id}`)));
  const from = settings.startDate > today ? settings.startDate : today;
  const remaining = remainingActivities(pack, settings.level, doneBeforeToday, settings.includeSpeaking);
  const days = schedule(pack, settings, remaining, from, 3000);
  const finish = finishDate(days);
  const todayPlan = days.find((d) => d.date === today);
  const nextStudy = days.find((d) => d.date > today && d.items.length);

  const levelActivities = activities(pack).filter((a) => a.unit.level === settings.level && (a.kind !== "speak" || settings.includeSpeaking));
  const levelDone = levelActivities.filter((a) => isDone(a)).length;

  const need = settings.strictness === "strict" ? minutesNeeded(pack, settings, remainingActivities(pack, settings.level, isDone, settings.includeSpeaking), today) : null;

  const todayItems = todayPlan?.items ?? [];
  const firstOpen = todayItems.find((i) => !(i.kind === "review" ? doneToday(log, today, i) : doneToday(log, today, i) || isDone(i.activity)));
  const anyDoneToday = todayItems.some((i) => (i.kind === "review" ? doneToday(log, today, i) : doneToday(log, today, i) || isDone(i.activity)));

  return (
    <div className="plan">
      <header className="plan-head">
        <h1 className="page-title">Your plan</h1>
        <p className="plan-summary">
          {settings.minutesPerDay} minutes, {daysLabel(settings.days)}, for {GOAL_LABEL[settings.goal]}.{" "}
          {settings.strictness !== "relaxed" && finish ? (
            <>
              {settings.level} done around <strong>{longDate(finish, today)}</strong>.
            </>
          ) : null}
        </p>
      </header>

      {settings.strictness === "strict" && settings.targetDate && need !== null ? (
        <StrictStatus need={need} settings={settings} today={today} finish={finish} />
      ) : null}

      <section className="plan-today" aria-labelledby="plan-today-title">
        <h2 id="plan-today-title">
          Today <span className="plan-date-label">{shortDate(today)}</span>
        </h2>
        {settings.startDate > today ? (
          <p className="plan-rest">Your plan starts on {shortDate(settings.startDate)}.</p>
        ) : todayItems.length === 0 ? (
          <>
            <p className="plan-rest">
              Rest day: nothing planned.
              {nextStudy ? ` Next study day is ${shortDate(nextStudy.date)}. Feel like starting early? Go ahead; the plan will move up.` : ""}
            </p>
            {nextStudy ? (
              <>
                <div className="plan-start">
                  {(() => {
                    const first = nextStudy.items.find((i) => i.kind !== "review") ?? nextStudy.items[0];
                    return (
                      <NextStep href={itemHref(pack, first)} skill={SKILL[first.kind]} quiet detail={`${first.minutes} min`}>
                        Start early
                      </NextStep>
                    );
                  })()}
                </div>
                <h3 className="plan-next-title">{shortDate(nextStudy.date)}</h3>
                <ol className="plan-list">
                  {nextStudy.items.map((item) => (
                    <PlanRow key={item.key} pack={pack} item={item} done={false} />
                  ))}
                </ol>
              </>
            ) : null}
          </>
        ) : (
          <>
            {firstOpen ? (
              <div className="plan-start">
                <NextStep href={itemHref(pack, firstOpen)} skill={SKILL[firstOpen.kind]} detail={`${firstOpen.minutes} min`}>
                  {anyDoneToday ? "Carry on with today's plan" : "Start today's plan"}
                </NextStep>
              </div>
            ) : (
              <p className="plan-done-today">All done for today. Nice work: that&apos;s exactly how it adds up.</p>
            )}
            <ol className="plan-list">
              {todayItems.map((item) => {
                const done = item.kind === "review" ? doneToday(log, today, item) : doneToday(log, today, item) || isDone(item.activity);
                return <PlanRow key={item.key} pack={pack} item={item} done={done} />;
              })}
            </ol>
          </>
        )}
      </section>

      {settings.view === "calendar" ? (
        <MonthCalendar days={days} log={log} today={today} settings={settings} picked={picked} onPick={setPicked} pack={pack} />
      ) : (
        <WeekStrip days={days} log={log} today={today} settings={settings} picked={picked} onPick={setPicked} pack={pack} />
      )}

      <section className="plan-progress" aria-labelledby="plan-progress-title">
        <h2 id="plan-progress-title">How it&apos;s going</h2>
        <div className="plan-bar" aria-hidden="true">
          <span style={{ width: `${(levelDone / Math.max(1, levelActivities.length)) * 100}%` }} />
        </div>
        <p>
          {levelDone} of {levelActivities.length} {settings.level} activities done.{" "}
          <StudyDaysSince log={log} since={settings.startDate} today={today} />
        </p>
      </section>

      <div className="plan-actions">
        <button type="button" className="button button-quiet" onClick={onEdit}>
          Change plan
        </button>
        {confirmRemove ? (
          <span className="plan-confirm">
            Remove the plan? Your progress stays.{" "}
            <button type="button" className="text-button" onClick={onRemove}>
              Yes, remove it
            </button>{" "}
            <button type="button" className="text-button" onClick={() => setConfirmRemove(false)}>
              Keep it
            </button>
          </span>
        ) : (
          <button type="button" className="text-button" onClick={() => setConfirmRemove(true)}>
            Remove plan
          </button>
        )}
      </div>
    </div>
  );
}

function itemHref(pack: LanguagePack, item: PlanItem): string {
  return item.kind === "review" ? "/review" : item.activity.href;
}

function itemLabel(item: PlanItem): { title: string; sub: string } {
  if (item.kind === "review") return { title: "Review", sub: "Your cards for today" };
  const a = item.activity;
  const verb = { read: "Read", listen: "Listen", grammar: "Grammar", write: "Write", speak: "Speak" }[a.kind];
  if (a.kind === "write") return { title: `Write: ${a.unit.title}`, sub: "Two short topics of your choice" };
  return { title: `${verb}: ${a.title}`, sub: a.kind === "grammar" ? a.unit.title : a.titleTranslation };
}

function PlanRow({ pack, item, done }: { pack: LanguagePack; item: PlanItem; done: boolean }) {
  const { title, sub } = itemLabel(item);
  return (
    <li>
      <Link href={itemHref(pack, item)} className="plan-row" data-done={done || undefined}>
        <span className="plan-check-box" aria-hidden="true" />
        <SkillGlyph skill={SKILL[item.kind]} />
        <span className="plan-row-text">
          <span className="plan-row-title" lang={item.kind === "review" || item.kind === "grammar" || item.kind === "write" ? undefined : pack.code}>
            {title}
          </span>
          <span className="plan-row-sub">{sub}</span>
        </span>
        <span className="plan-row-min">{item.kind !== "review" && item.total ? `${item.minutes} of ${item.total} min` : `${item.minutes} min`}</span>
        {done ? <span className="sr-only">Done</span> : null}
      </Link>
    </li>
  );
}

/** Minutes actually studied on a past day, estimated from the log. */
function minutesLogged(pack: LanguagePack, settings: PlanSettings, log: StudyLog, date: string): number {
  const keys = log[date] ?? [];
  const byKey = new Map(activities(pack).map((a) => [`${a.kind}:${a.id}`, a]));
  let m = 0;
  for (const k of keys) {
    if (k === "review") m += reviewMinutes(settings) || 5;
    else if (k.startsWith("writing:")) m += 10;
    else {
      const a = byKey.get(k);
      if (a) m += minutesFor(pack, a);
    }
  }
  return m;
}

type CalendarProps = {
  pack: LanguagePack;
  days: PlanDay[];
  log: StudyLog;
  today: string;
  settings: PlanSettings;
  picked: string | null;
  onPick: (d: string | null) => void;
};

/** One week as seven tiles: planned minutes ahead, what you did behind. */
function WeekStrip({ pack, days, log, today, settings, picked, onPick }: CalendarProps) {
  const [offset, setOffset] = useState(0);
  const monday = addDays(weekStart(today), offset * 7);
  const week = Array.from({ length: 7 }, (_, i) => addDays(monday, i));
  return (
    <section className="plan-week" aria-labelledby="plan-week-title">
      <div className="plan-week-head">
        <h2 id="plan-week-title">{offset === 0 ? "This week" : offset === 1 ? "Next week" : offset === -1 ? "Last week" : `Week of ${shortDate(monday)}`}</h2>
        <span className="plan-week-nav">
          <button type="button" className="text-button" onClick={() => setOffset(offset - 1)} aria-label="Previous week">
            Earlier
          </button>
          <button type="button" className="text-button" onClick={() => setOffset(offset + 1)} aria-label="Next week">
            Later
          </button>
        </span>
      </div>
      <ol className="plan-week-days">
        {week.map((date) => (
          <DayTile key={date} date={date} {...{ pack, days, log, today, settings, picked, onPick }} />
        ))}
      </ol>
      <DayDetail {...{ pack, days, log, today, settings, picked }} />
    </section>
  );
}

/** A month of tiles, Monday first. */
function MonthCalendar({ pack, days, log, today, settings, picked, onPick }: CalendarProps) {
  const [offset, setOffset] = useState(0);
  const first = new Date(`${today.slice(0, 7)}-01T12:00:00Z`);
  first.setUTCMonth(first.getUTCMonth() + offset);
  const monthIso = first.toISOString().slice(0, 10);
  const start = weekStart(monthIso);
  const cells = Array.from({ length: 42 }, (_, i) => addDays(start, i)).filter((d, i) => i < 35 || d.slice(0, 7) === monthIso.slice(0, 7));
  const title = first.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
  return (
    <section className="plan-week" aria-labelledby="plan-month-title">
      <div className="plan-week-head">
        <h2 id="plan-month-title">{title}</h2>
        <span className="plan-week-nav">
          <button type="button" className="text-button" onClick={() => setOffset(offset - 1)}>
            Earlier
          </button>
          <button type="button" className="text-button" onClick={() => setOffset(offset + 1)}>
            Later
          </button>
        </span>
      </div>
      <div className="plan-month-labels" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 0].map((d) => (
          <span key={d}>{WEEKDAY_SHORT[d]}</span>
        ))}
      </div>
      <ol className="plan-month">
        {cells.map((date) => (
          <DayTile key={date} date={date} compact outside={date.slice(0, 7) !== monthIso.slice(0, 7)} {...{ pack, days, log, today, settings, picked, onPick }} />
        ))}
      </ol>
      <DayDetail {...{ pack, days, log, today, settings, picked }} />
    </section>
  );
}

function DayTile({
  date,
  pack,
  days,
  log,
  today,
  settings,
  picked,
  onPick,
  compact,
  outside,
}: CalendarProps & { date: string; compact?: boolean; outside?: boolean }) {
  const planned = days.find((d) => d.date === date);
  const isPast = date < today;
  const studied = minutesLogged(pack, settings, log, date);
  const plannedMin = planned?.minutes ?? 0;
  const studyDay = settings.days.includes(weekdayOf(date));
  const state = isPast
    ? studied > 0
      ? "done"
      : studyDay && date >= settings.startDate
        ? "missed"
        : "rest"
    : date === today
      ? studied > 0 && studied >= plannedMin
        ? "done"
        : "today"
      : plannedMin > 0
        ? "planned"
        : "rest";
  const fill = date === today && plannedMin ? Math.min(1, studied / plannedMin) : state === "done" ? 1 : 0;
  return (
    <li>
      <button
        type="button"
        className="plan-day"
        data-state={state}
        data-compact={compact || undefined}
        data-outside={outside || undefined}
        aria-pressed={picked === date}
        onClick={() => onPick(picked === date ? null : date)}
      >
        <span className="plan-day-fill" style={{ height: `${fill * 100}%` }} aria-hidden="true" />
        <span className="plan-day-name">{compact ? Number(date.slice(8)) : WEEKDAY_SHORT[weekdayOf(date)]}</span>
        {!compact ? <span className="plan-day-date">{Number(date.slice(8))}</span> : null}
        <span className="plan-day-min">
          {isPast || (date === today && studied) ? (studied ? `${studied}′` : "") : plannedMin ? `${plannedMin}′` : ""}
        </span>
      </button>
    </li>
  );
}

/** What a picked day held (past) or holds (future). */
function DayDetail({ pack, days, log, today, settings, picked }: Omit<CalendarProps, "onPick">) {
  if (!picked) return <p className="plan-hint">Tap a day to see what&apos;s on it.</p>;
  if (picked < today) {
    const keys = log[picked] ?? [];
    const byKey = new Map(activities(pack).map((a) => [`${a.kind}:${a.id}`, a]));
    const done = keys.map((k) => (k === "review" ? "Review" : k.startsWith("writing:") ? "A writing topic" : byKey.get(k)?.title)).filter(Boolean);
    return (
      <div className="plan-detail">
        <h3>{shortDate(picked)}</h3>
        {done.length ? (
          <ul>
            {done.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        ) : (
          <p>{settings.days.includes(weekdayOf(picked)) ? "Nothing logged that day. No problem: the plan has moved on with you." : "A rest day."}</p>
        )}
      </div>
    );
  }
  const day = days.find((d) => d.date === picked);
  return (
    <div className="plan-detail">
      <h3>{shortDate(picked)}</h3>
      {day?.items.length ? (
        <ol className="plan-list plan-list-compact">
          {day.items.map((item) => (
            <PlanRow key={item.key} pack={pack} item={item} done={false} />
          ))}
        </ol>
      ) : (
        <p>{day?.studyDay === false || !day ? "A rest day." : "Nothing left to plan for this level."}</p>
      )}
    </div>
  );
}

function StudyDaysSince({ log, since, today }: { log: StudyLog; since: string; today: string }) {
  const n = Object.entries(log).filter(([d, keys]) => d >= since && d <= today && keys.length > 0).length;
  if (!n) return null;
  return (
    <>
      You&apos;ve studied on {n} {n === 1 ? "day" : "days"} since {shortDate(since)}.
    </>
  );
}

/** Strict plans: on track or not, said calmly, with ways to catch up. */
function StrictStatus({ need, settings, today, finish }: { need: number; settings: PlanSettings; today: string; finish: string | null }) {
  const target = settings.targetDate!;
  const onTrack = need <= settings.minutesPerDay + 2;
  return (
    <section className="plan-status" data-state={onTrack ? "ok" : "behind"}>
      <p className="plan-status-title">{onTrack ? "On track" : "A little behind"}</p>
      <p>
        {onTrack
          ? `To finish ${settings.level} by ${longDate(target, today)} you need about ${need} minutes on each study day. You've planned ${settings.minutesPerDay}.`
          : `To finish ${settings.level} by ${longDate(target, today)} you'd need about ${need} minutes on each study day; you've planned ${settings.minutesPerDay}. ${finish ? `At this pace you'd finish around ${longDate(finish, today)}.` : ""} Add a few minutes or a day, or move the date: all fine.`}
      </p>
    </section>
  );
}
