"use client";

import { logStudy } from "@/lib/plan/log";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  courseWordId, eligibleItems, newWords, type ReviewItem, type Schedule,
} from "@/core/review-items";
import type { LanguagePack } from "@/core/language-pack";
import { GRADUATED_DUE, GRADUATED_STAGE, isGraduated, isLearned, schedule, type ReviewResult } from "@/core/srs";
import { lemmaFor } from "@/core/dictionary";
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

/** The review kind from an item id (see core/review-items). */
function kindOfId(id: string): string {
  if (id.startsWith("g:")) return "grammar";
  if (id.startsWith("l:")) return "listen";
  if (id.startsWith("s:") || id.startsWith("sp:")) return "speak";
  return "word";
}

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

  const [own, setOwnState] = useState<Map<string, Schedule>>(new Map());
  // The latest schedules, so two quick ratings in a row never undo each other.
  const ownRef = useRef(own);
  const setOwn = useCallback((map: Map<string, Schedule>) => {
    ownRef.current = map;
    setOwnState(map);
  }, []);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!lang) return;
    let cancelled = false;
    const load = remote ? listSchedules(lang) : Promise.resolve({ schedules: readLocal(lang), ready: true });
    load
      .then(async (r) => {
        if (cancelled) return;
        // Until the database is set up (or with no accounts at all), keep progress on this device.
        if (!remote || !r.ready) {
          setOwn(new Map(readLocal(lang)));
        } else {
          // Once it is: upload what this device kept meanwhile, then forget it.
          const server = new Map(r.schedules);
          const pending = readLocal(lang).filter(([id]) => !server.has(id));
          for (const [id, sch] of pending) {
            server.set(id, sch);
            await saveSchedule(lang, id, kindOfId(id), sch).catch(() => {});
          }
          try {
            window.localStorage.removeItem(localKey(lang));
          } catch {
            // Nothing to clear.
          }
          if (cancelled) return;
          setOwn(server);
        }
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
  }, [lang, remote, setOwn]);

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
      const map = new Map(ownRef.current);
      for (const [id, , sch] of entries) map.set(id, sch);
      setOwn(map);
      try {
        if (remote && ready) for (const [id, kind, sch] of entries) await saveSchedule(lang, id, kind, sch);
        else window.localStorage.setItem(localKey(lang), JSON.stringify([...map]));
      } catch (e) {
        setError((e as Error).message);
      }
    },
    [lang, remote, ready, setOwn],
  );

  const rate = useCallback(
    async (item: ReviewItem, result: ReviewResult) => {
      if (!lang) return;
      logStudy("review");
      if (item.kind === "word" && item.source === "saved") {
        await saved.review(item.word, result);
        return;
      }
      const prev = ownRef.current.get(item.id);
      const next = schedule(prev?.stage ?? 0, result, new Date());
      await store([[item.id, item.kind, {
        stage: next.stage,
        dueAt: next.dueAt.toISOString(),
        introducedAt: prev?.introducedAt ?? new Date().toISOString(),
      }]]);
    },
    [lang, saved, store],
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
   * "I know these" on a unit's Words page: graduate many words at once, each on
   * the card it already has (a course card, or the card of a word you saved).
   */
  const graduateWords = useCallback(
    (words: { lemma: string; word: string }[]) => {
      const at = new Date().toISOString();
      const entries: [string, string, Schedule][] = words.map(({ lemma, word }) => {
        const courseId = courseWordId(lemma);
        const sw = own.has(courseId) ? undefined : (saved.words.find((w) => lemmaFor(w) === lemma) ?? saved.words.find((w) => w.word === word));
        const id = sw ? `saved:${sw.word}` : courseId;
        return [id, "word", { stage: GRADUATED_STAGE, dueAt: GRADUATED_DUE, introducedAt: own.get(id)?.introducedAt ?? at }];
      });
      return store(entries);
    },
    [own, saved.words, store],
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
    (lemma: string, known: boolean) => {
      logStudy("review");
      return known ? graduate(courseWordId(lemma)) : ungraduate(courseWordId(lemma));
    },
    [graduate, ungraduate],
  );

  const savedForms = useMemo(
    () => new Set(saved.words.flatMap((w) => [w.word, lemmaFor(w)].filter(Boolean) as string[])),
    [saved.words],
  );

  /**
   * One word, one card, wherever it came from: a course word met in New words
   * or a unit's Words, or a word saved while reading. Where does it stand?
   */
  const savedByLemma = useMemo(() => new Map(saved.words.map((w) => [lemmaFor(w), w])), [saved.words]);
  const savedByForm = useMemo(() => new Map(saved.words.map((w) => [w.word, w])), [saved.words]);
  const wordState = useCallback(
    (lemma: string, form?: string): "new" | "learning" | "learned" | "known" => {
      const course = own.get(courseWordId(lemma));
      const sw = savedByLemma.get(lemma) ?? (form ? savedByForm.get(form) : undefined);
      const stage = course ? course.stage : sw ? (schedules.get(`saved:${sw.word}`)?.stage ?? sw.stage ?? 0) : undefined;
      if (stage === undefined) return "new";
      if (isGraduated(stage)) return "known";
      return isLearned(stage) ? "learned" : "learning";
    },
    [savedByLemma, savedByForm, schedules, own],
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
    graduateWords,
    ungraduate,
    meet,
    newWords: fresh,
    wordState,
    graduated,
    savedWords: saved.words,
  };
}
