"use client";

import { useCallback, useEffect, useState } from "react";
import { schedule, type ReviewResult } from "@/core/srs";
import { isAuthEnabled } from "@/lib/supabase/config";
import { listSavedWords, recordReview, saveWord, unsaveWord } from "./actions";
import type { SavedWord } from "./types";
import { lemmaFor } from "@/core/dictionary";

/**
 * A learner's saved words for one language, with their review schedule.
 * Logged in: stored in the database. Preview mode: stored in this browser,
 * so everything still works while trying things out.
 */

const localKey = (language: string) => `mozaik:saved:${language}`;

function readLocal(language: string): SavedWord[] {
  try {
    return JSON.parse(window.localStorage.getItem(localKey(language)) ?? "[]");
  } catch {
    return [];
  }
}

function writeLocal(language: string, words: SavedWord[]) {
  try {
    window.localStorage.setItem(localKey(language), JSON.stringify(words));
  } catch {
    // Storage unavailable: words last for this visit only.
  }
}

export type SavedWordsState = {
  words: SavedWord[];
  loaded: boolean;
  /** False when the database still needs the review setup step. */
  reviewReady: boolean;
  error: string | null;
  /** Saved in any form: grachten counts as saved when gracht is. */
  isSaved: (word: string, base?: string) => boolean;
  toggle: (word: SavedWord) => Promise<void>;
  review: (word: string, result: ReviewResult) => Promise<void>;
};

export function useSavedWords(language: string | null): SavedWordsState {
  const [words, setWords] = useState<SavedWord[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [reviewReady, setReviewReady] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const remote = isAuthEnabled();

  useEffect(() => {
    if (!language) return;
    let cancelled = false;
    const load = remote
      ? listSavedWords(language)
      : Promise.resolve({ words: readLocal(language), reviewReady: true });
    load
      .then((r) => {
        if (cancelled) return;
        setWords(r.words);
        setReviewReady(r.reviewReady);
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
  }, [language, remote]);

  const isSaved = useCallback(
    (w: string, base?: string) => {
      const lemma = lemmaFor({ word: w, base });
      return words.some((x) => x.word === w || lemmaFor(x) === lemma);
    },
    [words],
  );

  const toggle = useCallback(
    async (word: SavedWord) => {
      if (!language) return;
      const lemma = lemmaFor(word);
      const existing = words.find((x) => x.word === word.word || lemmaFor(x) === lemma);
      const fresh: SavedWord = { ...word, stage: 0, dueAt: new Date().toISOString() };
      const next = existing ? words.filter((x) => x !== existing) : [...words, fresh];
      const previous = words;
      setWords(next); // update instantly; roll back if the server says no
      setError(null);
      try {
        if (!remote) writeLocal(language, next);
        else if (existing) await unsaveWord(language, existing.word);
        else await saveWord(word);
      } catch (e) {
        setWords(previous);
        setError((e as Error).message);
      }
    },
    [language, remote, words],
  );

  const review = useCallback(
    async (word: string, result: ReviewResult) => {
      if (!language) return;
      const current = words.find((x) => x.word === word);
      if (!current) return;
      const { stage, dueAt } = schedule(current.stage ?? 0, result, new Date());
      const next = words.map((x) =>
        x.word === word ? { ...x, stage, dueAt: dueAt.toISOString() } : x,
      );
      setWords(next);
      try {
        if (!remote) writeLocal(language, next);
        else await recordReview(language, word, stage, dueAt.toISOString());
      } catch (e) {
        setError((e as Error).message);
      }
    },
    [language, remote, words],
  );

  return { words, loaded, reviewReady, error, isSaved, toggle, review };
}
