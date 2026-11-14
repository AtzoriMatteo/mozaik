"use client";

import { useState } from "react";
import type { LanguagePack } from "@/core/language-pack";
import type { Activity } from "@/core/course";
import {
  MINUTE_CHOICES,
  WEEKDAYS,
  WEEKDAY_SHORT,
  addDays,
  averageMinutes,
  finishDate,
  longDate,
  minutesNeeded,
  remainingActivities,
  minutesOn,
  minutesPerWeek,
  schedule,
  timeLabel,
  variesByDay,
  type Goal,
  type PlanSettings,
  type Strictness,
} from "@/core/plan";

const goals = (pack: LanguagePack): { id: Goal; label: string; hint: string }[] => [
  { id: "living", label: "I live in the country, or will soon", hint: `Everyday ${pack.name}: shops, neighbours, the doctor, the town hall.` },
  { id: "travel", label: "Travel", hint: "Getting around, ordering, small talk. Speaking practice switched on." },
  { id: "work", label: "Work or study", hint: "Steady progress, with writing kept in." },
  { id: "exam", label: "An exam", hint: `${pack.exams ? pack.exams + ": a" : "A"} fixed finish date and a strict plan.` },
  { id: "fun", label: "Just for fun", hint: "No pressure. A gentle plan you can drop any day." },
];

/** Per-day choices go a bit longer than the usual ones, for a long weekend session. */
const DAY_CHOICES = [5, 10, 15, 20, 30, 45, 60, 90, 120] as const;

const STRICTNESS: { id: Strictness; label: string; hint: string }[] = [
  { id: "relaxed", label: "Relaxed", hint: "Suggestions for each day. Skip a day and it simply moves on." },
  { id: "steady", label: "Steady", hint: "A daily plan with an expected finish date that updates as you go." },
  { id: "strict", label: "Strict", hint: "You pick a finish date; the plan shows if you're on track and how to catch up." },
];

/** Sensible defaults that follow from the goal. */
function afterGoal(s: PlanSettings, goal: Goal): PlanSettings {
  return {
    ...s,
    goal,
    includeSpeaking: goal === "travel" ? true : s.includeSpeaking,
    strictness: goal === "exam" ? "strict" : goal === "fun" ? "relaxed" : s.strictness === "strict" ? "steady" : s.strictness,
  };
}

/**
 * Making (or changing) a plan: one question per screen, so it never asks
 * for more than one decision at a time. Advanced options are tucked away.
 */
export function PlanSetup({
  pack,
  initial,
  today,
  isDone,
  onSave,
  onCancel,
}: {
  pack: LanguagePack;
  initial: PlanSettings;
  today: string;
  isDone: (a: Activity) => boolean;
  onSave: (s: PlanSettings) => void;
  onCancel?: () => void;
}) {
  const [s, setS] = useState<PlanSettings>(initial);
  const [step, setStep] = useState(0);
  const set = (patch: Partial<PlanSettings>) => setS((prev) => ({ ...prev, ...patch }));

  const remaining = remainingActivities(pack, s.level, isDone, s.includeSpeaking);
  const finish = finishDate(schedule(pack, s, remaining, today, 3000));
  const perWeek = minutesPerWeek(s);
  const [perDay, setPerDay] = useState(variesByDay(initial));
  /** Set one weekday's minutes; the same as the usual time clears the exception. */
  const setDayMinutes = (d: number, m: number) => {
    const rest = { ...(s.minutesByDay ?? {}) };
    if (m === s.minutesPerDay) delete rest[d];
    else rest[d] = m;
    set({ minutesByDay: Object.keys(rest).length ? rest : undefined });
  };
  const need = s.strictness === "strict" ? minutesNeeded(pack, s, remaining, today) : null;

  const steps = ["goal", "days", "time", "strictness", "extras"] as const;
  const last = step === steps.length - 1;
  const canNext = steps[step] !== "days" || s.days.length > 0;

  return (
    <section className="plan-setup" aria-labelledby="plan-setup-title">
      <div className="plan-steps" aria-hidden="true">
        {steps.map((name, i) => (
          <span key={name} data-state={i < step ? "done" : i === step ? "current" : undefined} />
        ))}
      </div>

      {steps[step] === "goal" ? (
        <>
          <h1 id="plan-setup-title" className="plan-question">Why are you learning {pack.name}?</h1>
          <div className="plan-options">
            {goals(pack).map((g) => (
              <button
                key={g.id}
                type="button"
                className="plan-option"
                aria-pressed={s.goal === g.id}
                onClick={() => setS(afterGoal(s, g.id))}
              >
                <span className="plan-option-label">{g.label}</span>
                <span className="plan-option-hint">{g.hint}</span>
              </button>
            ))}
          </div>
        </>
      ) : null}

      {steps[step] === "time" ? (
        <>
          <h1 id="plan-setup-title" className="plan-question">How much time on a study day?</h1>
          <div className="plan-chips">
            {MINUTE_CHOICES.map((m) => (
              <button key={m} type="button" className="plan-chip" aria-pressed={s.minutesPerDay === m} onClick={() => set({ minutesPerDay: m })}>
                {m} min
              </button>
            ))}
          </div>
          {perDay ? (
            <div className="plan-per-day">
              {WEEKDAYS.filter((d) => s.days.includes(d)).map((d) => (
                <label key={d} className="plan-per-day-row">
                  <span>{WEEKDAY_SHORT[d]}</span>
                  <select value={minutesOn(s, d)} onChange={(e) => setDayMinutes(d, Number(e.target.value))}>
                    {DAY_CHOICES.map((m) => (
                      <option key={m} value={m}>
                        {m} min{m === s.minutesPerDay ? " (usual)" : ""}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  set({ minutesByDay: undefined });
                  setPerDay(false);
                }}
              >
                Same time every day
              </button>
            </div>
          ) : (
            <p className="plan-shortcuts">
              <button type="button" className="text-button" onClick={() => setPerDay(true)}>
                Different time on some days
              </button>
            </p>
          )}
          <p className="plan-estimate">
            {finish ? (
              <>
                {timeLabel(s)} ({s.days.length} {s.days.length === 1 ? "day" : "days"} a week, about{" "}
                {perWeek >= 60 ? `${Math.round(perWeek / 6) / 10} hours` : `${perWeek} minutes`} in total): you&apos;d finish {s.level} around{" "}
                <strong>{longDate(finish, today)}</strong>.
              </>
            ) : (
              `You've done everything in ${s.level}.`
            )}{" "}
            Short and regular beats long and rare. Times are estimates; the plan re-plans from whatever you actually finish.
          </p>
        </>
      ) : null}

      {steps[step] === "days" ? (
        <>
          <h1 id="plan-setup-title" className="plan-question">Which days do you want to study?</h1>
          <div className="plan-days">
            {WEEKDAYS.map((d) => (
              <button
                key={d}
                type="button"
                className="plan-day-toggle"
                aria-pressed={s.days.includes(d)}
                onClick={() => set({ days: s.days.includes(d) ? s.days.filter((x) => x !== d) : [...s.days, d].sort() })}
              >
                {WEEKDAY_SHORT[d]}
              </button>
            ))}
          </div>
          <p className="plan-shortcuts">
            <button type="button" className="text-button" onClick={() => set({ days: [1, 2, 3, 4, 5] })}>
              Weekdays
            </button>
            <button type="button" className="text-button" onClick={() => set({ days: [0, 1, 2, 3, 4, 5, 6] })}>
              Every day
            </button>
            <button type="button" className="text-button" onClick={() => set({ days: [1, 3, 5] })}>
              Three days a week
            </button>
          </p>
          {s.days.length === 0 ? (
            <p className="error">Pick at least one day.</p>
          ) : (
            <p className="plan-estimate">
              {s.days.length} {s.days.length === 1 ? "day" : "days"} a week. Next: how long on each of those days.
            </p>
          )}
        </>
      ) : null}

      {steps[step] === "strictness" ? (
        <>
          <h1 id="plan-setup-title" className="plan-question">How strict should the plan be?</h1>
          <div className="plan-options">
            {STRICTNESS.map((o) => (
              <button
                key={o.id}
                type="button"
                className="plan-option"
                aria-pressed={s.strictness === o.id}
                onClick={() => set({ strictness: o.id, targetDate: o.id === "strict" ? (s.targetDate ?? finish ?? addDays(today, 90)) : s.targetDate })}
              >
                <span className="plan-option-label">{o.label}</span>
                <span className="plan-option-hint">{o.hint}</span>
              </button>
            ))}
          </div>
          {s.strictness === "strict" ? (
            <div className="field plan-date">
              <label htmlFor="plan-target">Finish {s.level} by</label>
              <input
                id="plan-target"
                type="date"
                min={addDays(today, 7)}
                value={s.targetDate ?? ""}
                onChange={(e) => set({ targetDate: e.target.value || undefined })}
              />
              {need !== null ? (
                <p className="plan-estimate">
                  That needs about <strong>{need} minutes</strong> on each study day{variesByDay(s) ? ", on average" : ""}.
                  {need > averageMinutes(s) + 2
                    ? ` That's more than the ${averageMinutes(s)} you picked${variesByDay(s) ? " on average" : ""}: add time or a day, or choose a later date.`
                    : " That fits your time."}
                </p>
              ) : null}
            </div>
          ) : null}
        </>
      ) : null}

      {steps[step] === "extras" ? (
        <>
          <h1 id="plan-setup-title" className="plan-question">Last details</h1>
          <p className="plan-estimate">The defaults are fine; change anything you like.</p>
          <div className="plan-extras">
            {pack.levels.length > 1 ? (
              <label className="plan-check">
                <span>Level</span>
                <select value={s.level} onChange={(e) => set({ level: e.target.value as PlanSettings["level"] })}>
                  {pack.levels.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}
            <label className="plan-check">
              <input type="checkbox" checked={s.dailyReview} onChange={(e) => set({ dailyReview: e.target.checked })} />
              <span>Start each study day with a few minutes of review</span>
            </label>
            <label className="plan-check">
              <input type="checkbox" checked={s.includeSpeaking} onChange={(e) => set({ includeSpeaking: e.target.checked })} />
              <span>Include speaking practice</span>
            </label>
            <fieldset className="plan-check plan-view-choice">
              <legend>Show the plan as</legend>
              <label>
                <input type="radio" name="view" checked={s.view === "week"} onChange={() => set({ view: "week" })} /> a week
              </label>
              <label>
                <input type="radio" name="view" checked={s.view === "calendar"} onChange={() => set({ view: "calendar" })} /> a month calendar
              </label>
            </fieldset>
            <label className="plan-check">
              <span>Start on</span>
              <input type="date" value={s.startDate} min={today} onChange={(e) => set({ startDate: e.target.value || today })} />
            </label>
          </div>
        </>
      ) : null}

      <div className="plan-nav">
        {step > 0 ? (
          <button type="button" className="button button-quiet" onClick={() => setStep(step - 1)}>
            Back
          </button>
        ) : onCancel ? (
          <button type="button" className="button button-quiet" onClick={onCancel}>
            Cancel
          </button>
        ) : null}
        {last ? (
          <button type="button" className="button" onClick={() => onSave(s)}>
            {onCancel ? "Save my plan" : "Make my plan"}
          </button>
        ) : (
          <button type="button" className="button" disabled={!canNext} onClick={() => setStep(step + 1)}>
            Next
          </button>
        )}
      </div>
    </section>
  );
}
