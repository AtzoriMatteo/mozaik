"use client";

import { useSyncExternalStore } from "react";

/**
 * Today's session, kept on this device for the day: whether the review is
 * done, which episode was today's, and which extra one (if any). It starts
 * empty every morning.
 */
export type DayLog = { date: string; review?: boolean; episode?: string; more?: string };

const KEY = "mozaik.today.log";
const LENGTH_KEY = "mozaik.today.length";
const listeners = new Set<() => void>();
const today = () => new Date().toLocaleDateString("sv");

function read(): DayLog {
  try {
    const log = JSON.parse(window.localStorage.getItem(KEY) ?? "null") as DayLog | null;
    return log && log.date === today() ? log : { date: today() };
  } catch {
    return { date: today() };
  }
}

let cache: { raw: string | null; log: DayLog } | null = null;
function snapshot(): DayLog {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {}
  if (!cache || cache.raw !== raw || cache.log.date !== today()) cache = { raw, log: read() };
  return cache.log;
}

function write(change: Partial<DayLog>) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ ...read(), ...change, date: today() }));
  } catch {}
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
const EMPTY: DayLog = { date: "" };

export function useDayLog(): DayLog {
  return useSyncExternalStore(subscribe, snapshot, () => EMPTY);
}

export const markReviewDone = () => write({ review: true });

/** A story episode was read today: the first one is today's, the next one is "one more". */
export function noteEpisode(id: string) {
  const log = read();
  if (!log.episode) write({ episode: id });
  else if (log.episode !== id && !log.more) write({ more: id });
}

/** The session length chosen on this device ("none" = no limit), or null. */
export function readLength(): string | null {
  try {
    return window.localStorage.getItem(LENGTH_KEY);
  } catch {
    return null;
  }
}
export function writeLength(v: string) {
  try {
    window.localStorage.setItem(LENGTH_KEY, v);
  } catch {}
  listeners.forEach((l) => l());
}
