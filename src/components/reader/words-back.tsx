"use client";

import type { ReadingText, Unit } from "@/core/content";
import type { LanguagePack } from "@/core/language-pack";
import { wordsThatComeBack } from "@/core/story";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";

/**
 * After a text in a story unit: the words this story keeps using, offered as
 * cards with the sentence they came from (Matteo: words come from the story,
 * not in batches before it). Nothing shows when there are none.
 */
export function WordsBack({ pack, unit, text }: { pack: LanguagePack; unit: Unit; text: ReadingText }) {
  const saved = useSavedWords(pack.code);
  const words = wordsThatComeBack(pack, unit, text);
  if (words.length === 0) return null;
  return (
    <section className="story-words" aria-labelledby="words-back-title">
      <h2 id="words-back-title">Words that keep coming back</h2>
      <p>This story uses these again and again. Keep the ones you don&apos;t know yet: the card shows the sentence they came from.</p>
      <ul>
        {words.map((w) => {
          const base = w.lemma === w.word ? undefined : w.lemma;
          const on = saved.isSaved(w.word, base);
          return (
            <li key={w.lemma}>
              <span lang={pack.code} className="story-word">{w.lemma}</span>
              <span className="story-word-meaning">{w.meaning}</span>
              <button
                type="button"
                className="chip"
                aria-pressed={on}
                onClick={() =>
                  void saved.toggle({ language: pack.code, word: w.word, surface: w.surface, base, meaning: w.meaning, sentence: w.sentence, textId: text.id })
                }
              >
                {on ? "Kept" : "Keep"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
