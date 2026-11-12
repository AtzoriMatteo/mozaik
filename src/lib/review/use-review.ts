"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  eligibleItems, type ReviewItem, type Schedule,
} from "@/core/review-items";
import type { LanguagePack } from "@/core/language-pack";
import { schedule, type ReviewResult } from "@/core/srs";
import { isAuthEnabled } from "@/lib/supabase/config";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";
import { listSchedules, saveSchedule } from "./actions";
import type { ReviewSettings } from "./use-review-settings";

/**
 * Everything Review needs: which items exist (from what you've done and
 * what you saved), their schedules, and a way to record a rating.
 */

const localKey = (lang: string) => `mozaik:review:${lang}`;

function readLocal(lang: string): [string, Schedule][] {
  try {
    return JSON.parse(window.localStorage.getItem(localKey(lang)) ?? "[]");
  } catch {
    return [];
  }
}

export function useReview(pack: LanguagePack | null, settings: ReviewSettings) {
  const lang = pack?.code ?? null;
  const saved = useSavedWords(lang);
  const progress = useCourseProgress(pack);
  const remote = isAuthEnabled();

  const [own, setOwn] = useState<Map<string, Schedule>>(new Map());
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!lang) return;
    let cancelled = false;
    const load = remote ? listSchedules(lang) : Promise.resolve({ schedules: readLocal(lang), ready: true });
    load
      .then((r) => {
        if (cancelled) return;
        // Until the database is set up, keep progress on this device.
        setOwn(new Map(r.ready ? r.schedules : readLocal(lang)));
        setReady(r.ready);
        setLoaded(true);
      })
      .catch((e: Error) => {
        if (cancelled) return;
        setError(e.message);
        setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, [lang, remote]);

  const done = progress.done;
  const items = useMemo<ReviewItem[]>(() => {
    if (!pack) return [];
    return eligibleItems(pack, done, {
      courseWords: settings.courseWords,
      savedWords: saved.words.map((w) => ({
        word: w.word,
        surface: w.surface,
        base: w.base,
        meaning: w.meaning,
        sentence: w.sentence,
      })),
    });
  }, [pack, done, settings.courseWords, saved.words]);

  // Saved words keep their schedule in their own table; merge them in.
  const schedules = useMemo(() => {
    const all = new Map(own);
    for (const w of saved.words) {
      if (w.dueAt) {
        all.set(`saved:${w.word}`, { stage: w.stage ?? 0, dueAt: w.dueAt, introducedAt: "1970-01-01T00:00:00Z" });
      }
    }
    return all;
  }, [own, saved.words]);

  const rate = useCallback(
    async (item: ReviewItem, result: ReviewResult) => {
      if (!lang) return;
      if (item.kind === "word" && item.source === "saved") {
        await saved.review(item.word, result);
        return;
      }
      const prev = own.get(item.id);
      const next = schedule(prev?.stage ?? 0, result, new Date());
      const s: Schedule = {
        stage: next.stage,
        dueAt: next.dueAt.toISOString(),
        introducedAt: prev?.introducedAt ?? new Date().toISOString(),
      };
      const map = new Map(own);
      map.set(item.id, s);
      setOwn(map);
      try {
        if (remote && ready) await saveSchedule(lang, item.id, item.kind, s);
        else window.localStorage.setItem(localKey(lang), JSON.stringify([...map]));
      } catch (e) {
        setError((e as Error).message);
      }
    },
    [lang, own, remote, ready, saved],
  );

  return {
    items,
    schedules,
    loaded: loaded && saved.loaded,
    ready,
    error: error ?? saved.error,
    rate,
    savedWords: saved.words,
  };
}
