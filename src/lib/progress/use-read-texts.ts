"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Which texts the learner has finished, per language. Kept in this browser
 * for now; moves to the account together with other progress later.
 */

const key = (language: string) => `mozaik:read:${language}`;
const listeners = new Set<() => void>();
const cache = new Map<string, { raw: string | null; ids: ReadonlySet<string> }>();
const EMPTY: ReadonlySet<string> = new Set();

function read(language: string): ReadonlySet<string> {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(key(language));
  } catch {
    return EMPTY;
  }
  const hit = cache.get(language);
  if (hit && hit.raw === raw) return hit.ids;
  let ids: ReadonlySet<string> = EMPTY;
  try {
    ids = new Set(JSON.parse(raw ?? "[]") as string[]);
  } catch {
    ids = EMPTY;
  }
  cache.set(language, { raw, ids });
  return ids;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function useReadTexts(language: string | null) {
  const ids = useSyncExternalStore(
    subscribe,
    () => (language ? read(language) : EMPTY),
    () => EMPTY,
  );

  const markRead = useCallback(
    (textId: string) => {
      if (!language) return;
      const next = new Set(read(language));
      if (next.has(textId)) return;
      next.add(textId);
      try {
        window.localStorage.setItem(key(language), JSON.stringify([...next]));
      } catch {
        // Storage unavailable: progress lasts this visit only.
      }
      listeners.forEach((l) => l());
    },
    [language],
  );

  return { readIds: ids, markRead };
}
