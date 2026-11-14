"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import type { PlanSettings } from "@/core/plan";
import { getBrowserSupabase } from "@/lib/supabase/browser";
import { mergeLogs, readLog, subscribeLog, writeLog, type StudyLog } from "./log";

/**
 * The learner's plan for one language: settings plus the study log. Kept in
 * this browser (instant, works offline) and on the account when the `plans`
 * table exists (migration 0006); before that, quietly device-only.
 */

const settingsKey = (lang: string) => `mozaik:plan:${lang}`;
const EMPTY: StudyLog = {};

function readSettings(lang: string): PlanSettings | null {
  try {
    const raw = window.localStorage.getItem(settingsKey(lang));
    return raw ? (JSON.parse(raw) as PlanSettings) : null;
  } catch {
    return null;
  }
}

async function remote() {
  const supabase = getBrowserSupabase();
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session ? supabase : null;
}

async function pushPlan(lang: string, settings: PlanSettings | null, log: StudyLog) {
  const supabase = await remote();
  if (!supabase) return;
  await supabase
    .from("plans")
    .upsert({ language: lang, settings, log, updated_at: new Date().toISOString() }, { onConflict: "user_id,language" });
}

let logSnapshot: StudyLog = EMPTY;
function snapshotLog(): StudyLog {
  const next = readLog();
  // Keep the same object while nothing changed, as useSyncExternalStore needs.
  if (JSON.stringify(next) !== JSON.stringify(logSnapshot)) logSnapshot = next;
  return logSnapshot;
}

export function usePlan(lang: string | null) {
  const [settings, setSettings] = useState<PlanSettings | null>(null);
  const [loaded, setLoaded] = useState(false);
  const log = useSyncExternalStore(subscribeLog, snapshotLog, () => EMPTY);

  useEffect(() => {
    if (!lang) return;
    let alive = true;
    (async () => {
      const local = readSettings(lang);
      let chosen = local;
      try {
        const supabase = await remote();
        if (supabase) {
          const { data, error } = await supabase.from("plans").select("settings, log").eq("language", lang).maybeSingle();
          if (!error) {
            const merged = mergeLogs(readLog(), (data?.log as StudyLog) ?? {});
            writeLog(merged);
            chosen = (data?.settings as PlanSettings | null) ?? local;
            // First sync from this device: upload what it had.
            if (!data || (!data.settings && local)) await pushPlan(lang, chosen, merged);
          }
        }
      } catch {
        // No account table yet: stay on this device.
      }
      if (!alive) return;
      if (chosen) {
        try {
          window.localStorage.setItem(settingsKey(lang), JSON.stringify(chosen));
        } catch {
          // Storage unavailable.
        }
      }
      setSettings(chosen);
      setLoaded(true);
    })();
    return () => {
      alive = false;
    };
  }, [lang]);

  // Mirror log changes (activities finished elsewhere on the site) to the account.
  useEffect(() => {
    if (!lang || !loaded) return;
    const t = setTimeout(() => void pushPlan(lang, settings, log).catch(() => {}), 1500);
    return () => clearTimeout(t);
  }, [lang, loaded, settings, log]);

  const save = useCallback(
    (next: PlanSettings | null) => {
      if (!lang) return;
      try {
        if (next) window.localStorage.setItem(settingsKey(lang), JSON.stringify(next));
        else window.localStorage.removeItem(settingsKey(lang));
      } catch {
        // Storage unavailable: the plan lasts this visit only.
      }
      setSettings(next);
      void pushPlan(lang, next, readLog()).catch(() => {});
    },
    [lang],
  );

  return { settings, loaded, log, save };
}
