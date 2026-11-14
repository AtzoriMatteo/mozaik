"use client";

/**
 * A small study log: which activities were finished (and whether you
 * reviewed) on which day, so the plan can show what each day held.
 * Kept in this browser and mirrored to the account with the plan.
 */

export type StudyLog = Record<string, string[]>;

const KEY = "mozaik:study-log";
const listeners = new Set<() => void>();

export const todayIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export function readLog(): StudyLog {
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "{}") as StudyLog;
  } catch {
    return {};
  }
}

export function writeLog(log: StudyLog) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(log));
  } catch {
    // Storage unavailable: the log lasts this visit only.
  }
  listeners.forEach((l) => l());
}

/** Record that something was done today ("read:op-de-markt", "review"). */
export function logStudy(key: string) {
  const log = readLog();
  const day = todayIso();
  const list = log[day] ?? [];
  if (list.includes(key)) return;
  writeLog({ ...log, [day]: [...list, key] });
}

/** Merge two logs (this device and the account): every entry from both. */
export function mergeLogs(a: StudyLog, b: StudyLog): StudyLog {
  const out: StudyLog = { ...a };
  for (const [day, keys] of Object.entries(b)) out[day] = [...new Set([...(out[day] ?? []), ...keys])];
  return out;
}

export function subscribeLog(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}
