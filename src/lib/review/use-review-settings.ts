"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { ReviewKind } from "@/core/review-items";

/**
 * How review works for this learner. Defaults are meant to be good enough
 * that nobody has to open the settings. Kept in this browser for now.
 */
export type ReviewSettings = {
  /** Cards per session. */
  size: number;
  /** New items per day, across all parts. */
  newPerDay: number;
  /** Parts included in the mixed review. */
  mix: Record<ReviewKind, boolean>;
  /** Add each text's core words automatically (saved words always come back). */
  courseWords: boolean;
  /** Word card directions beyond "what does it mean?". */
  recallCards: boolean;
  listenCards: boolean;
};

export const DEFAULT_SETTINGS: ReviewSettings = {
  size: 10,
  newPerDay: 10,
  mix: { word: true, grammar: true, listen: true, speak: false },
  courseWords: true,
  recallCards: true,
  listenCards: true,
};

const KEY = "mozaik:review-settings";
const listeners = new Set<() => void>();
let cache: { raw: string | null; value: ReviewSettings } | null = null;

function read(): ReviewSettings {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return DEFAULT_SETTINGS;
  }
  if (cache && cache.raw === raw) return cache.value;
  let value = DEFAULT_SETTINGS;
  try {
    const parsed = JSON.parse(raw ?? "{}") as Partial<ReviewSettings>;
    value = { ...DEFAULT_SETTINGS, ...parsed, mix: { ...DEFAULT_SETTINGS.mix, ...parsed.mix } };
  } catch {
    value = DEFAULT_SETTINGS;
  }
  cache = { raw, value };
  return value;
}

function subscribe(l: () => void) {
  listeners.add(l);
  window.addEventListener("storage", l);
  return () => {
    listeners.delete(l);
    window.removeEventListener("storage", l);
  };
}

export function useReviewSettings() {
  const settings = useSyncExternalStore(subscribe, read, () => DEFAULT_SETTINGS);
  const update = useCallback((patch: Partial<ReviewSettings>) => {
    const next = { ...read(), ...patch };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      // Storage unavailable: settings last for this visit only.
    }
    listeners.forEach((l) => l());
  }, []);
  const reset = useCallback(() => {
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      // ignore
    }
    listeners.forEach((l) => l());
  }, []);
  return { settings, update, reset };
}
