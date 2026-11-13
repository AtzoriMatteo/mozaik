"use client";

import { getBrowserSupabase } from "@/lib/supabase/browser";
import { mergeProgress, slot, type LocalProgress, type ProgressRow } from "./merge";
import { PROGRESS_KINDS, notifyProgress, progressKey, type ProgressKind } from "./use-read-texts";

/**
 * Mirrors course progress between this browser and the account
 * (table `progress`, migration 0004). Without login, or before the
 * migration is run, it quietly does nothing and progress stays on the device.
 */

// Postgres "undefined table": migration 0004 hasn't been run yet.
const MISSING_TABLE = "42P01";

async function signedInClient() {
  const supabase = getBrowserSupabase();
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session ? supabase : null;
}

/** Save one change to the account. Failures are fine: the next sync uploads it. */
export function pushProgress(language: string, kind: ProgressKind, itemId: string, done: boolean) {
  void (async () => {
    const supabase = await signedInClient();
    if (!supabase) return;
    await supabase.from("progress").upsert(
      { language, kind, item_id: itemId, done, updated_at: new Date().toISOString() },
      { onConflict: "user_id,language,kind,item_id" },
    );
  })().catch(() => {});
}

function readLocal(): LocalProgress {
  // Built here, not at load time: this module and use-read-texts import each other.
  const PATTERN = new RegExp(`^mozaik:(${PROGRESS_KINDS.join("|")}):([a-z-]+)$`);
  const local: LocalProgress = new Map();
  for (let i = 0; i < window.localStorage.length; i++) {
    const k = window.localStorage.key(i);
    const m = k ? PATTERN.exec(k) : null;
    if (!m) continue;
    try {
      local.set(slot(m[2], m[1]), new Set(JSON.parse(window.localStorage.getItem(k!) ?? "[]") as string[]));
    } catch {
      // A damaged entry: the account's copy replaces it below.
    }
  }
  return local;
}

let running: Promise<void> | null = null;

/** Fetch the account's progress, merge it in, and upload what only this device knew. */
export function syncProgress(): Promise<void> {
  running ??= (async () => {
    const supabase = await signedInClient();
    if (!supabase) return;
    const { data, error } = await supabase.from("progress").select("language, kind, item_id, done");
    if (error) {
      if (error.code !== MISSING_TABLE) console.warn("Mozaik: couldn't sync progress", error.message);
      return;
    }
    const local = readLocal();
    const { next, upload } = mergeProgress(local, (data ?? []) as ProgressRow[]);
    for (const [k, ids] of next) {
      const [language, kind] = k.split("|");
      window.localStorage.setItem(progressKey(kind as ProgressKind, language), JSON.stringify([...ids]));
    }
    notifyProgress();
    if (upload.length) {
      const now = new Date().toISOString();
      await supabase
        .from("progress")
        .upsert(upload.map((r) => ({ ...r, updated_at: now })), { onConflict: "user_id,language,kind,item_id" });
    }
  })()
    .catch((e) => console.warn("Mozaik: couldn't sync progress", e))
    .finally(() => {
      running = null;
    });
  return running;
}
