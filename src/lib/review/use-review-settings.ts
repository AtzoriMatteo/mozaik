"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { CardDirection, ReviewKind } from "@/core/review-items";
import type { CefrLevel } from "@/core/language-pack";

/**
 * How review works for this learner. Defaults are meant to be good enough
 * that nobody has to open the settings. Kept in this browser for now.
 */
export type ReviewSettings = {
  /** Cards per session. */
  size: number;
  /** New items per day, across all parts. */
  newPerDay: number;
  /** Parts included in the main review. By default only words and expressions. */
  mix: Record<ReviewKind, boolean>;
  /** Bumped when the default mix changes, so older saved settings pick it up once. */
  mixVersion?: number;
  /** Levels New words draws from (only levels the pack has are used). */
  newWordLevels: CefrLevel[];
  /** Cards per New words session. */
  newWordsSize: number;
  /** Which way word cards go: the ladder (mixed), only Dutch → English, or only English → Dutch. */
  direction: CardDirection;
  /** Word card directions beyond "what does it mean?". */
  recallCards: boolean;
  listenCards: boolean;
};

export const DEFAULT_SETTINGS: ReviewSettings = {
  size: 10,
  newPerDay: 10,
  mix: { word: true, grammar: false, listen: false, speak: false },
  mixVersion: 2,
  newWordLevels: ["A1"],
  newWordsSize: 20,
  direction: "mixed",
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
    // Before version 2 the main review mixed in grammar and listening; now it's
    // words and expressions unless the learner chooses more.
    const mix = parsed.mixVersion === DEFAULT_SETTINGS.mixVersion ? { ...DEFAULT_SETTINGS.mix, ...parsed.mix } : DEFAULT_SETTINGS.mix;
    value = { ...DEFAULT_SETTINGS, ...parsed, mix, mixVersion: DEFAULT_SETTINGS.mixVersion };
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
