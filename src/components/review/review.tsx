"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { LanguagePack } from "@/core/language-pack";
import { cardKind, describeWait, isDue, isLearned, REVIEW_RESULTS, type ReviewResult } from "@/core/srs";
import { LanguagePicker } from "@/components/language-picker";
import { useLearningLanguage } from "@/components/learning-language";
import { Mosaic } from "@/components/mosaic";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";
import type { SavedWord } from "@/lib/saved-words/types";
import { SpeakButton } from "@/components/speak-button";
import { useNow } from "@/lib/use-now";

/** Short sessions by default; you can always stop earlier. */
const SESSION_SIZE = 10;

export function Review() {
  const { pack } = useLearningLanguage();
  const saved = useSavedWords(pack?.code ?? null);
  const [done, setDone] = useState(0);
  // Re-checked every minute, so "Not yet" words come back.
  const clock = useNow();
  const now = clock ?? 0;

  const due = useMemo(
    () =>
      saved.words
        .filter((w) => isDue(w.dueAt, new Date(now)))
        .sort((a, b) => (a.dueAt ?? "").localeCompare(b.dueAt ?? "")),
    [saved.words, now],
  );

  if (!pack) return <LanguagePicker />;
  if (!saved.loaded || clock === null) return <p className="lede">Loading your words…</p>;

  const learned = saved.words.filter((w) => isLearned(w.stage)).length;

  if (!saved.reviewReady) {
    return (
      <Message title="One setup step left">
        Reviewing needs a small database update. It&apos;s in the summary Claude left for you.
      </Message>
    );
  }

  if (saved.words.length === 0) {
    return (
      <Message title="Nothing to review yet">
        Save words while you read and they&apos;ll come back here, in the sentence you found them in.
        <Link href="/read" className="button">Start reading</Link>
      </Message>
    );
  }

  const current = due[0];
  if (!current || done >= SESSION_SIZE) {
    const nextDue = saved.words
      .map((w) => w.dueAt)
      .filter((d): d is string => !!d && new Date(d).getTime() > now)
      .sort()[0];
    return (
      <div>
        <h1 className="page-title">{done > 0 ? "Done for now" : "All caught up"}</h1>
        <p className="lede">
          {done > 0 ? `You reviewed ${done} ${done === 1 ? "word" : "words"}. ` : ""}
          {due.length > 0
            ? `${due.length} more ${due.length === 1 ? "is" : "are"} waiting whenever you like.`
            : nextDue
              ? `Next review ${describeWhen(nextDue, now)}.`
              : ""}
        </p>
        <div className="mosaic-block">
          <Mosaic learned={learned} />
          <p className="mosaic-caption">
            {learned} {learned === 1 ? "word" : "words"} learned so far.
          </p>
        </div>
        <div className="button-row">
          {due.length > 0 ? (
            <button type="button" className="button" onClick={() => setDone(0)}>
              Review {Math.min(due.length, SESSION_SIZE)} more
            </button>
          ) : null}
          <Link href="/read" className={due.length > 0 ? "button button-quiet" : "button"}>
            Keep reading
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="review-progress" aria-live="polite">
        {done + 1} of {Math.min(due.length + done, SESSION_SIZE)}
        <Link href="/" className="review-stop">Stop for now</Link>
      </p>
      <Card
        key={`${current.word}:${current.dueAt}`}
        pack={pack}
        word={current}
        onAnswer={(result) => {
          void saved.review(current.word, result);
          setDone((d) => d + 1);
        }}
      />
      {saved.error ? <p className="error" role="alert">{saved.error}</p> : null}
    </div>
  );
}

function Card({
  pack,
  word,
  onAnswer,
}: {
  pack: LanguagePack;
  word: SavedWord;
  onAnswer: (r: ReviewResult) => void;
}) {
  const [revealed, setRevealed] = useState(false);
  const kind = cardKind(word.stage);
  const tokens = pack.tokenize(word.sentence);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (!revealed && (e.key === " " || e.key === "Enter")) setRevealed(true);
      else if (revealed && ["1", "2", "3", "4"].includes(e.key)) onAnswer(REVIEW_RESULTS[Number(e.key) - 1]);
      else if (revealed && (e.key === " " || e.key === "Enter")) onAnswer("good");
      else return;
      e.preventDefault();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [revealed, onAnswer]);

  return (
    <section className="review-card" aria-label="Review card">
      <p className="review-prompt">
        {kind === "recognise" ? "What does the highlighted word mean?" : (
          <>Which word means <strong>{word.meaning}</strong>?</>
        )}
      </p>

      <p className="review-sentence" lang={pack.code}>
        {tokens.map((tok, i) => {
          const isTarget = tok.kind === "word" && tok.normalized === word.word;
          if (!isTarget) return <span key={i}>{tok.text}</span>;
          if (kind === "recall" && !revealed) {
            return (
              <span
                key={i}
                className="review-gap"
                aria-label="missing word"
                style={{ width: `${Math.max(3, tok.text.length) * 0.62}em` }}
              />
            );
          }
          return <mark key={i} className="review-target">{tok.text}</mark>;
        })}
      </p>

      {!revealed ? (
        <button type="button" className="button" onClick={() => setRevealed(true)}>
          Show answer
        </button>
      ) : (
        <>
          <div className="review-answer">
            <p className="review-word">
              <span lang={pack.code}>{word.surface}</span>
              {word.base && word.base !== word.word ? (
                <span className="word-panel-base">
                  from <span lang={pack.code}>{word.base}</span>
                </span>
              ) : null}
              <SpeakButton lang={pack.code} text={word.surface} label={`Hear ${word.surface}`} />
            </p>
            <p className="review-meaning">{word.meaning}</p>
          </div>
          <p className="review-question">How well did you know it?</p>
          <div className="rating-row" role="group" aria-label="Rate how well you knew it">
            {RATINGS.map((r, i) => (
              <button
                key={r.result}
                type="button"
                className={r.result === "good" ? "rating rating-main" : "rating"}
                onClick={() => onAnswer(r.result)}
                title={`${r.hint} (key ${i + 1})`}
              >
                <span className="rating-label">{r.label}</span>
                <span className="rating-wait">{describeWait(word.stage ?? 0, r.result, new Date())}</span>
              </button>
            ))}
          </div>
          <p className="shortcut-hint">Keys 1–4, or Space for Good</p>
        </>
      )}
    </section>
  );
}

const RATINGS: { result: ReviewResult; label: string; hint: string }[] = [
  { result: "again", label: "Again", hint: "Didn't know it" },
  { result: "hard", label: "Hard", hint: "Knew it, with effort" },
  { result: "good", label: "Good", hint: "Knew it" },
  { result: "easy", label: "Easy", hint: "Knew it instantly" },
];

function Message({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="page-title">{title}</h1>
      <div className="lede stack-loose">{children}</div>
    </div>
  );
}

function describeWhen(iso: string, now: number): string {
  const minutes = Math.round((new Date(iso).getTime() - now) / 60_000);
  if (minutes < 60) return `in ${Math.max(1, minutes)} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `in ${hours} ${hours === 1 ? "hour" : "hours"}`;
  const days = Math.round(hours / 24);
  return days === 1 ? "tomorrow" : `in ${days} days`;
}
