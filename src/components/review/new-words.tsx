"use client";

import { dictionaryLabel } from "@/core/dictionary";
import { useEffect, useState } from "react";
import type { LanguagePack } from "@/core/language-pack";
import type { ReviewItem, Schedule, WordInfo } from "@/core/review-items";
import { isGraduated, isLearned } from "@/core/srs";
import { SpeakButton } from "@/components/speak-button";

type NewWord = WordInfo & { lemma: string };

/**
 * New words: meet the level's words, most common first. Known ones graduate
 * straight away; the rest go into My words for spaced review.
 */
export function NewWordsSession({
  pack,
  words: offered,
  onMeet,
  onEnd,
}: {
  pack: LanguagePack;
  words: NewWord[];
  onMeet: (lemma: string, known: boolean) => Promise<void>;
  onEnd: () => void;
}) {
  // Freeze the list: meeting a word removes it from the live list.
  const [words] = useState(offered);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [tally, setTally] = useState({ known: 0, added: 0 });
  const word = words[index];
  const lang = pack.code;

  function answer(known: boolean) {
    void onMeet(word.lemma, known);
    setTally((t) => (known ? { ...t, known: t.known + 1 } : { ...t, added: t.added + 1 }));
    setRevealed(false);
    setIndex((i) => i + 1);
  }

  useEffect(() => {
    if (!word) return;
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "1" || e.key.toLowerCase() === "k") answer(true);
      else if (revealed && e.key === "2") answer(false);
      else if (!revealed && (e.key === " " || e.key === "Enter")) setRevealed(true);
      else return;
      e.preventDefault();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!word) {
    return (
      <div>
        <h1 className="page-title">Nice work</h1>
        <p className="lede">
          {tally.known} {tally.known === 1 ? "word" : "words"} you already knew: graduated.{" "}
          {tally.added} new to you: they&apos;re in My words now and come back in your reviews.
        </p>
        <button type="button" className="button" onClick={onEnd}>
          Back to Review
        </button>
      </div>
    );
  }

  const dictionary = dictionaryLabel(pack, word.lemma);
  return (
    <div>
      <p className="review-progress" aria-live="polite">
        <span>
          New words: {index + 1} of {words.length}
        </span>
        <button type="button" className="link-button" onClick={onEnd}>
          Stop for now
        </button>
      </p>
      <div className="session-meter" aria-hidden="true">
        <span style={{ width: `${(index / words.length) * 100}%` }} />
      </div>

      <section className="review-card new-word-card" aria-label="New word">
        <p className="new-word" lang={lang}>
          {dictionary}
          <SpeakButton lang={lang} text={dictionary} label={`Hear ${dictionary}`} />
        </p>
        <p className="review-sentence" lang={lang}>
          {pack.tokenize(word.sentence).map((tok, i) =>
            tok.kind === "word" && tok.normalized === word.word ? (
              <mark key={i} className="review-target">{tok.text}</mark>
            ) : (
              <span key={i}>{tok.text}</span>
            ),
          )}
        </p>

        {revealed ? (
          <div className="review-answer">
            <p className="review-meaning">{word.meaning}</p>
            {word.translation ? <p className="example-translation">{word.translation}</p> : null}
          </div>
        ) : null}

        <div className="new-word-actions">
          <button type="button" className="button button-quiet" onClick={() => answer(true)}>
            {revealed ? "I knew it" : "I know this"}
            <small>graduates: won&apos;t come back</small>
          </button>
          {revealed ? (
            <button type="button" className="button" onClick={() => answer(false)} autoFocus>
              New to me
              <small>add to My words</small>
            </button>
          ) : (
            <button type="button" className="button" onClick={() => setRevealed(true)}>
              Show the meaning
            </button>
          )}
        </div>
        <p className="shortcut-hint">K or 1: I know it · Space: show the meaning · 2: new to me</p>
      </section>
    </div>
  );
}

/** Where your words stand, and the graduated list with undo. */
export function WordStats({
  pack,
  items,
  schedules,
  graduated,
  onUndo,
}: {
  pack: LanguagePack;
  items: readonly ReviewItem[];
  schedules: ReadonlyMap<string, Schedule>;
  graduated: string[];
  onUndo: (id: string) => Promise<void>;
}) {
  const words = items.filter((i) => i.kind === "word");
  const stageOf = (id: string) => schedules.get(id)?.stage;
  const learning = words.filter((w) => !isGraduated(stageOf(w.id)) && !isLearned(stageOf(w.id))).length;
  const learned = words.filter((w) => !isGraduated(stageOf(w.id)) && isLearned(stageOf(w.id))).length;
  const label = (id: string) => id.replace(/^(w|saved):/, "");

  if (words.length === 0 && graduated.length === 0) return null;
  return (
    <section className="word-stats" aria-labelledby="word-stats-title">
      <h2 id="word-stats-title">Your words</h2>
      <dl className="word-stat-row">
        <div>
          <dt>Known for good</dt>
          <dd>{graduated.length}</dd>
        </div>
        <div>
          <dt>Learned</dt>
          <dd>{learned}</dd>
        </div>
        <div>
          <dt>Learning</dt>
          <dd>{learning}</dd>
        </div>
      </dl>
      {graduated.length > 0 ? (
        <details className="graduated-list">
          <summary>Graduated words ({graduated.length})</summary>
          <p className="setting-note">Changed your mind? Undo puts a word back into My words.</p>
          <ul>
            {graduated
              .slice()
              .sort((a, b) => label(a).localeCompare(label(b)))
              .map((id) => (
                <li key={id}>
                  <span lang={pack.code}>{label(id)}</span>
                  <button type="button" className="link-button" onClick={() => void onUndo(id)}>
                    Undo
                  </button>
                </li>
              ))}
          </ul>
        </details>
      ) : null}
    </section>
  );
}
