"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Which activities the learner has finished, per kind and language
 * ("read" texts, "listen" items, "grammar" lessons, ...). Kept in this browser
 * so clicks stay instant, and mirrored to the account by ./sync so every
 * device shows the same progress.
 */

export type { ActivityKind } from "@/core/course";
import type { ActivityKind } from "@/core/course";

import { pushProgress } from "./sync";
import { logStudy } from "@/lib/plan/log";

export type ProgressKind = ActivityKind | "beyond" | "writing";

/** Every kind that is stored (and synced). "write" is derived from "writing". */
export const PROGRESS_KINDS: ProgressKind[] = ["read", "listen", "grammar", "speak", "beyond", "writing"];

export const progressKey = (kind: ProgressKind, language: string) => `mozaik:${kind}:${language}`;
const key = progressKey;
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

/** Tell every open view that stored progress changed (used after a sync). */
export function notifyProgress() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function useProgress(kind: ProgressKind, language: string | null) {
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
      pushProgress(language!, kind, id, true);
      logStudy(`${kind}:${id}`);
    },
    [storageKey, language, kind],
  );

  const toggle = useCallback(
    (id: string) => {
      if (!storageKey) return;
      const next = new Set(read(storageKey));
      const done = !next.has(id);
      if (done) next.add(id);
      else next.delete(id);
      try {
        window.localStorage.setItem(storageKey, JSON.stringify([...next]));
      } catch {
        // Storage unavailable: the mark lasts this visit only.
      }
      listeners.forEach((l) => l());
      pushProgress(language!, kind, id, done);
    },
    [storageKey, language, kind],
  );

  return { doneIds: ids, markDone, toggle };
}

/** Reading progress (kept for existing callers). */
export function useReadTexts(language: string | null) {
  const { doneIds, markDone } = useProgress("read", language);
  return { readIds: doneIds, markRead: markDone };
}
