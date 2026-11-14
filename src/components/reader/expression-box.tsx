"use client";

import { useState } from "react";
import type { Expression } from "@/core/content";

export type Phrase = {
  /** Lower-case words, joined by spaces: the card's key. */
  normalized: string;
  /** As written in the sentence. */
  surface: string;
  sentence: string;
  /** The expression's dictionary form, when Mozaik knows it. */
  base?: string;
  /** Known meaning, or "" for a phrase you picked yourself. */
  meaning: string;
};

/**
 * In the word panel: the expression this word belongs to, and a way to save
 * any phrase from the sentence (tap "Save a phrase", then its last word).
 */
export function ExpressionBox({
  lang,
  known,
  phrase,
  picking,
  isSaved,
  onPick,
  onShowKnown,
  onSave,
}: {
  lang: string;
  known: Expression[];
  phrase: Phrase | null;
  picking: boolean;
  isSaved: (word: string, base?: string) => boolean;
  onPick: () => void;
  onShowKnown: (index: number) => void;
  onSave: (p: Phrase, meaning: string) => void;
}) {
  const [meaning, setMeaning] = useState(phrase?.meaning ?? "");

  if (phrase) {
    const saved = isSaved(phrase.normalized, phrase.base);
    return (
      <div className="expression-box">
        <p className="expression-label">Phrase</p>
        <p className="expression-phrase" lang={lang}>
          {phrase.base ?? phrase.surface}
        </p>
        {saved ? (
          <p className="expression-meaning">{phrase.meaning || meaning}</p>
        ) : (
          <label className="expression-meaning-field">
            <span>What it means</span>
            <input
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
              placeholder="in your own words"
              autoFocus={!phrase.meaning}
            />
          </label>
        )}
        <button
          type="button"
          className="chip chip-save"
          aria-pressed={saved}
          disabled={!saved && !meaning.trim()}
          onClick={() => onSave(phrase, meaning.trim())}
        >
          {saved ? "Saved" : "Save phrase"}
        </button>
      </div>
    );
  }

  return (
    <div className="expression-box">
      {known.map((e, i) => (
        <div key={e.phrase} className="expression-known">
          <p className="expression-label">Part of an expression</p>
          <p className="expression-phrase" lang={lang}>
            {e.phrase}
          </p>
          <p className="expression-meaning">{e.meaning}</p>
          {e.local ? <p className="expression-local">{e.local}</p> : null}
          <button type="button" className="chip" onClick={() => onShowKnown(i)}>
            {isSaved(e.phrase.toLowerCase(), e.phrase) ? "Saved" : "Select the whole expression"}
          </button>
        </div>
      ))}
      {picking ? (
        <p className="expression-hint" role="status">
          Now tap the last word of the phrase.
        </p>
      ) : (
        <button type="button" className="link-button expression-pick" onClick={onPick}>
          Save a phrase with this word
        </button>
      )}
    </div>
  );
}
