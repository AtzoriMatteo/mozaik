"use client";

import { useCallback, useEffect, useState } from "react";
import { isAuthEnabled } from "@/lib/supabase/config";
import { listSavedWords, saveWord, unsaveWord } from "./actions";
import type { SavedWord } from "./types";

/**
 * A learner's saved words for one language.
 * Logged in: stored in the database. Preview mode: stored in this browser,
 * so saving still works while trying things out.
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
  error: string | null;
  isSaved: (word: string) => boolean;
  toggle: (word: SavedWord) => Promise<void>;
};

export function useSavedWords(language: string | null): SavedWordsState {
  const [words, setWords] = useState<SavedWord[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const remote = isAuthEnabled();

  useEffect(() => {
    if (!language) return;
    let cancelled = false;
    const load = remote ? listSavedWords(language) : Promise.resolve(readLocal(language));
    load
      .then((w) => {
        if (!cancelled) {
          setWords(w);
          setLoaded(true);
        }
      })
      .catch((e: Error) => {
        if (!cancelled) {
          setError(e.message);
          setLoaded(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [language, remote]);

  const isSaved = useCallback((w: string) => words.some((x) => x.word === w), [words]);

  const toggle = useCallback(
    async (word: SavedWord) => {
      if (!language) return;
      const already = words.some((x) => x.word === word.word);
      const next = already ? words.filter((x) => x.word !== word.word) : [...words, word];
      const previous = words;
      setWords(next); // update instantly; roll back if the server says no
      setError(null);
      try {
        if (!remote) writeLocal(language, next);
        else if (already) await unsaveWord(language, word.word);
        else await saveWord(word);
      } catch (e) {
        setWords(previous);
        setError((e as Error).message);
      }
    },
    [language, remote, words],
  );

  return { words, loaded, error, isSaved, toggle };
}
