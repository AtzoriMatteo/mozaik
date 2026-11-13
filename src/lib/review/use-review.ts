"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  courseWordId, eligibleItems, newWords, type ReviewItem, type Schedule,
} from "@/core/review-items";
import type { LanguagePack } from "@/core/language-pack";
import { GRADUATED_DUE, GRADUATED_STAGE, isGraduated, schedule, type ReviewResult } from "@/core/srs";
import { isAuthEnabled } from "@/lib/supabase/config";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";
import { listSchedules, saveSchedule } from "./actions";
import type { ReviewSettings } from "./use-review-settings";

/**
 * Everything Review needs: which items exist (from what you've done and
 * what you saved), their schedules, and a way to record a rating.
 */

/** introducedAt for words that came in through New words or an undo. */
const OUTSIDE_ALLOWANCE = "1970-01-01T00:00:00.000Z";

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
      schedules: own,
      savedWords: saved.words.map((w) => ({
        word: w.word,
        surface: w.surface,
        base: w.base,
        meaning: w.meaning,
        sentence: w.sentence,
      })),
    });
  }, [pack, done, own, saved.words]);

  // Saved words keep their schedule in their own table; merge them in
  // (unless you graduated one: that's kept with the other schedules).
  const schedules = useMemo(() => {
    const all = new Map(own);
    for (const w of saved.words) {
      if (w.dueAt && !isGraduated(own.get(`saved:${w.word}`)?.stage)) {
        all.set(`saved:${w.word}`, { stage: w.stage ?? 0, dueAt: w.dueAt, introducedAt: "1970-01-01T00:00:00Z" });
      }
    }
    return all;
  }, [own, saved.words]);

  const store = useCallback(
    async (entries: [string, string, Schedule][]) => {
      if (!lang) return;
      const map = new Map(own);
      for (const [id, , sch] of entries) map.set(id, sch);
      setOwn(map);
      try {
        if (remote && ready) for (const [id, kind, sch] of entries) await saveSchedule(lang, id, kind, sch);
        else window.localStorage.setItem(localKey(lang), JSON.stringify([...map]));
      } catch (e) {
        setError((e as Error).message);
      }
    },
    [lang, own, remote, ready],
  );

  const rate = useCallback(
    async (item: ReviewItem, result: ReviewResult) => {
      if (!lang) return;
      if (item.kind === "word" && item.source === "saved") {
        await saved.review(item.word, result);
        return;
      }
      const prev = own.get(item.id);
      const next = schedule(prev?.stage ?? 0, result, new Date());
      await store([[item.id, item.kind, {
        stage: next.stage,
        dueAt: next.dueAt.toISOString(),
        introducedAt: prev?.introducedAt ?? new Date().toISOString(),
      }]]);
    },
    [lang, own, saved, store],
  );

  /** Known for good: the word never comes back (undo from the graduated list). */
  const graduate = useCallback(
    (itemId: string) =>
      store([[itemId, "word", {
        stage: GRADUATED_STAGE,
        dueAt: GRADUATED_DUE,
        introducedAt: own.get(itemId)?.introducedAt ?? new Date().toISOString(),
      }]]),
    [own, store],
  );

  /**
   * Into My words, due now. New words has its own session size, so these
   * don't use up the daily allowance for new grammar and listening cards.
   */
  const ungraduate = useCallback(
    (itemId: string) =>
      store([[itemId, "word", { stage: 0, dueAt: new Date().toISOString(), introducedAt: OUTSIDE_ALLOWANCE }]]),
    [store],
  );

  /** A word met in New words: known → graduated; not known → into My words, due now. */
  const meet = useCallback(
    (lemma: string, known: boolean) =>
      known ? graduate(courseWordId(lemma)) : ungraduate(courseWordId(lemma)),
    [graduate, ungraduate],
  );

  const savedForms = useMemo(
    () => new Set(saved.words.flatMap((w) => [w.word, w.base?.toLowerCase()].filter(Boolean) as string[])),
    [saved.words],
  );
  const fresh = useMemo(
    () => (pack ? newWords(pack, settings.newWordLevels.filter((l) => pack.levels.includes(l)), own, savedForms) : []),
    [pack, settings.newWordLevels, own, savedForms],
  );

  /** Words you've finished with: graduated, in any deck. */
  const graduated = useMemo(
    () => [...schedules].filter(([id, sch]) => isGraduated(sch.stage) && (id.startsWith("w:") || id.startsWith("saved:"))).map(([id]) => id),
    [schedules],
  );

  return {
    items,
    schedules,
    loaded: loaded && saved.loaded,
    ready,
    error: error ?? saved.error,
    rate,
    graduate,
    ungraduate,
    meet,
    newWords: fresh,
    graduated,
    savedWords: saved.words,
  };
}
