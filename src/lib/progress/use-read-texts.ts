"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Which activities the learner has finished, per kind and language
 * ("read" texts, "listen" items, "grammar" lessons). Kept in this browser for now; moves to
 * the account together with other progress later.
 */

export type { ActivityKind } from "@/core/course";
import type { ActivityKind } from "@/core/course";

const key = (kind: ActivityKind, language: string) => `mozaik:${kind}:${language}`;
const listeners = new Set<() => void>();
const cache = new Map<string, { raw: string | null; ids: ReadonlySet<string> }>();
const EMPTY: ReadonlySet<string> = new Set();

function read(storageKey: string): ReadonlySet<string> {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(storageKey);
  } catch {
    return EMPTY;
  }
  const hit = cache.get(storageKey);
  if (hit && hit.raw === raw) return hit.ids;
  let ids: ReadonlySet<string> = EMPTY;
  try {
    ids = new Set(JSON.parse(raw ?? "[]") as string[]);
  } catch {
    ids = EMPTY;
  }
  cache.set(storageKey, { raw, ids });
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

export function useProgress(kind: ActivityKind, language: string | null) {
  const storageKey = language ? key(kind, language) : null;
  const ids = useSyncExternalStore(
    subscribe,
    () => (storageKey ? read(storageKey) : EMPTY),
    () => EMPTY,
  );

  const markDone = useCallback(
    (id: string) => {
      if (!storageKey) return;
      const next = new Set(read(storageKey));
      if (next.has(id)) return;
      next.add(id);
      try {
        window.localStorage.setItem(storageKey, JSON.stringify([...next]));
      } catch {
        // Storage unavailable: progress lasts this visit only.
      }
      listeners.forEach((l) => l());
    },
    [storageKey],
  );

  return { doneIds: ids, markDone };
}

/** Reading progress (kept for existing callers). */
export function useReadTexts(language: string | null) {
  const { doneIds, markDone } = useProgress("read", language);
  return { readIds: doneIds, markRead: markDone };
}
