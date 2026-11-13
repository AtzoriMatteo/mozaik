"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { helpFor, type ListeningItem, type Question } from "@/core/content";
import { nextActivity } from "@/core/course";
import type { LanguagePack } from "@/core/language-pack";
import { getPack } from "@/core/registry";
import { checkDictation, type DictationResult } from "@/core/dictation";
import { playLines, speak, stopSpeaking, useHasVoice } from "@/lib/speech";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";
import { NextActivityLink } from "@/components/course/next-activity-link";
import { WordPanel } from "@/components/reader/word-panel";
import { TaskRunner } from "@/components/exercises/task-runner";

type Step = "listen" | "gist" | "details" | "practice" | "dictation" | "transcript";
const ALL_STEPS: { id: Step; label: string }[] = [
  { id: "listen", label: "Listen" },
  { id: "gist", label: "Gist" },
  { id: "details", label: "Details" },
  { id: "practice", label: "Close listening" },
  { id: "dictation", label: "Dictation" },
  { id: "transcript", label: "Transcript" },
];

/**
 * A listening exercise, one step at a time: listen without text, answer
 * what it's about, then details, write down a few lines, and only then
 * read the transcript (with tap-for-help on every word).
 */
export function ListeningExercise({ lang, itemId }: { lang: string; itemId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = pack.units.find((u) => u.listening.some((l) => l.id === itemId))!;
  const item = unit.listening.find((l) => l.id === itemId)!;
  const hasVoice = useHasVoice(lang);
  const progress = useCourseProgress(pack);
  const tasks = item.tasks ?? [];
  const STEPS = ALL_STEPS.filter((s) => s.id !== "practice" || tasks.length > 0);

  const [step, setStep] = useState<Step>("listen");
  const [score, setScore] = useState({ right: 0, total: 0 });
  const addScore = (right: number, total: number) =>
    setScore((s) => ({ right: s.right + right, total: s.total + total }));

  const [slow, setSlow] = useState(false);
  const player = usePlayer(lang, item, slow ? 0.7 : 0.9);

  // Stop the audio when changing step or leaving.
  useEffect(() => player.stop, [step, player.stop]);

  return (
    <article className="listening">
      <Link href={`/course/${lang}/${unit.id}`} className="back-link">
        Back to {unit.titleTranslation}
      </Link>
      <header className="reader-head">
        <h1 lang={lang}>{item.title}</h1>
        <p className="reader-subtitle">{item.titleTranslation}</p>
      </header>

      <ol className="step-track" aria-label="Steps">
        {STEPS.map((s, i) => (
          <li key={s.id} aria-current={s.id === step ? "step" : undefined}>
            <span className="step-dot">{i + 1}</span>
            <span className="step-label">{s.label}</span>
          </li>
        ))}
      </ol>

      {step !== "transcript" ? (
        <div className="player-bar">
          {hasVoice ? (
            <>
              <button type="button" className="button" onClick={player.toggle}>
                {player.playing ? "Stop" : step === "listen" ? "Play" : "Play again"}
              </button>
              <label className="slow-toggle">
                <input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} />
                Slow
              </label>
            </>
          ) : (
            <NoVoiceNotice onSkip={() => setStep("transcript")} />
          )}
        </div>
      ) : null}

      {step === "listen" ? (
        <section className="step-body">
          <p className="situation">{item.situation}</p>
          <p className="step-hint">
            Listen without reading first. Play it as often as you like, then continue.
          </p>
          <button type="button" className="button button-quiet" onClick={() => setStep("gist")}>
            I&apos;ve listened
          </button>
        </section>
      ) : null}

      {step === "gist" ? (
        <QuestionStep
          key="gist"
          questions={[item.gist]}
          onDone={(right) => {
            addScore(right, 1);
            setStep("details");
          }}
        />
      ) : null}

      {step === "details" ? (
        <QuestionStep
          key="details"
          questions={item.details}
          onDone={(right) => {
            addScore(right, item.details.length);
            setStep(tasks.length > 0 ? "practice" : "dictation");
          }}
        />
      ) : null}

      {step === "practice" ? (
        <TaskRunner
          tasks={tasks}
          lang={lang}
          seed={item.id}
          lines={item.lines}
          rate={slow ? 0.7 : 0.85}
          onDone={(right, total) => {
            addScore(right, total);
            setStep("dictation");
          }}
        />
      ) : null}

      {step === "dictation" ? (
        <DictationStep
          lang={lang}
          item={item}
          hasVoice={hasVoice}
          rate={slow ? 0.7 : 0.85}
          onDone={(right, total) => {
            addScore(right, total);
            setStep("transcript");
          }}
        />
      ) : null}

      {step === "transcript" ? (
        <TranscriptStep pack={pack} item={item} player={player} slow={slow} setSlow={setSlow} hasVoice={hasVoice}>
          {score.total > 0 ? (
            <p className="score-line">
              You got {Math.round(score.right)} of {score.total} right.
              {score.right / score.total >= 0.7 ? " Nicely done." : " Worth another listen tomorrow."}
            </p>
          ) : null}
          <NextActivityLink
            pack={pack}
            next={nextActivity(pack, { kind: "listen", id: item.id })}
            onDone={() => progress.markListened(item.id)}
          />
        </TranscriptStep>
      ) : null}
    </article>
  );
}

/* ---------------------------------------------------------------- */

function usePlayer(lang: string, item: ListeningItem, rate: number) {
  const [current, setCurrent] = useState<number | null>(null);
  const stopRef = useRef<(() => void) | null>(null);

  const stop = useCallback(() => {
    stopRef.current?.();
    stopRef.current = null;
  }, []);

  const playFrom = useCallback(
    (lines: ListeningItem["lines"], offset = 0) => {
      stop();
      stopRef.current = playLines(lang, lines, {
        rate,
        onLine: (i) => setCurrent(i === null ? null : i + offset),
      });
    },
    [lang, rate, stop],
  );

  const toggle = useCallback(() => {
    if (current !== null) stop();
    else playFrom(item.lines);
  }, [current, stop, playFrom, item.lines]);

  const playLine = useCallback(
    (i: number) => playFrom([item.lines[i]], i),
    [playFrom, item.lines],
  );

  return { playing: current !== null, current, toggle, stop, playLine };
}

type Player = ReturnType<typeof usePlayer>;

function NoVoiceNotice({ onSkip }: { onSkip: () => void }) {
  return (
    <div className="notice-box">
      <p>
        <strong>Your device has no Dutch voice yet.</strong> Mozaik uses the free voice built into
        your device. Add one in your settings: on Windows, Time &amp; language → Speech; on a Mac,
        Accessibility → Spoken content → System voice; on Android, Google speech services. iPhones
        have one already.
      </p>
      <button type="button" className="button button-quiet" onClick={onSkip}>
        Read the transcript instead
      </button>
    </div>
  );
}

function QuestionStep({
  questions,
  onDone,
}: {
  questions: Question[];
  onDone: (right: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [right, setRight] = useState(0);
  const q = questions[index];
  const answered = picked !== null;
  const correct = picked === q.answer;

  function next() {
    const total = right + (correct ? 1 : 0);
    if (index + 1 < questions.length) {
      setRight(total);
      setIndex(index + 1);
      setPicked(null);
    } else {
      onDone(total);
    }
  }

  return (
    <section className="step-body">
      {questions.length > 1 ? (
        <p className="step-hint">
          Question {index + 1} of {questions.length}. Replay as often as you like.
        </p>
      ) : null}
      <fieldset className="question" disabled={answered}>
        <legend>{q.prompt}</legend>
        {q.options.map((opt, i) => (
          <button
            key={opt}
            type="button"
            className="option"
            data-state={
              answered ? (i === q.answer ? "right" : i === picked ? "wrong" : undefined) : undefined
            }
            onClick={() => setPicked(i)}
          >
            {opt}
          </button>
        ))}
      </fieldset>
      {answered ? (
        <div className="feedback" role="status">
          <p>{correct ? "Right." : `Not quite: it's "${q.options[q.answer]}".`}</p>
          <button type="button" className="button" onClick={next}>
            Continue
          </button>
        </div>
      ) : null}
    </section>
  );
}

function DictationStep({
  lang,
  item,
  hasVoice,
  rate,
  onDone,
}: {
  lang: string;
  item: ListeningItem;
  hasVoice: boolean;
  rate: number;
  onDone: (right: number, total: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [result, setResult] = useState<DictationResult | null>(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const line = item.lines[item.dictation[index]];

  function check() {
    if (!typed.trim()) {
      setError("Type what you hear first.");
      return;
    }
    setResult(checkDictation(line.text, typed));
  }

  function next() {
    const sum = total + (result?.score ?? 0);
    if (index + 1 < item.dictation.length) {
      setTotal(sum);
      setIndex(index + 1);
      setTyped("");
      setResult(null);
    } else {
      onDone(sum, item.dictation.length);
    }
  }

  return (
    <section className="step-body">
      <p className="step-hint">
        Sentence {index + 1} of {item.dictation.length}. Listen, then write what you hear.
        Capitals and punctuation don&apos;t matter.
      </p>
      {hasVoice ? (
        <div className="button-row">
          <button type="button" className="button button-quiet" onClick={() => speak(lang, line.text, rate)}>
            Play the sentence
          </button>
        </div>
      ) : null}
      <div className="field dictation-field">
        <label htmlFor="dictation">What do you hear?</label>
        <input
          id="dictation"
          lang={lang}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          value={typed}
          readOnly={result !== null}
          aria-describedby={error ? "dictation-error" : undefined}
          onChange={(e) => {
            setTyped(e.target.value);
            setError(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") (result ? next : check)();
          }}
        />
        {error ? <p id="dictation-error" className="error">{error}</p> : null}
      </div>

      {result ? (
        <div className="feedback" role="status">
          <p className="diff" lang={lang}>
            {result.parts.map((p, i) => (
              <span key={i} className={`diff-${p.kind}`}>
                {p.kind === "extra" ? p.typed : p.word}
              </span>
            ))}
          </p>
          <p>
            {result.perfect
              ? "Perfect."
              : result.parts.some((p) => p.kind === "almost")
                ? "Almost: check the accents."
                : `The sentence: "${line.text}"`}
          </p>
          <button type="button" className="button" onClick={next}>
            Continue
          </button>
        </div>
      ) : (
        <button type="button" className="button" onClick={check}>
          Check
        </button>
      )}
    </section>
  );
}

function TranscriptStep({
  pack,
  item,
  player,
  slow,
  setSlow,
  hasVoice,
  children,
}: {
  pack: LanguagePack;
  item: ListeningItem;
  player: Player;
  slow: boolean;
  setSlow: (v: boolean) => void;
  hasVoice: boolean;
  children: React.ReactNode;
}) {
  const [showTranslations, setShowTranslations] = useState(false);
  const [selected, setSelected] = useState<{ line: number; token: number } | null>(null);
  const saved = useSavedWords(pack.code);

  const selectedLine = selected ? item.lines[selected.line] : null;
  const selectedToken = selected && selectedLine ? pack.tokenize(selectedLine.text)[selected.token] : null;
  const help =
    selectedToken && selectedToken.kind === "word"
      ? helpFor(pack.lexicon, item, selectedToken.normalized)
      : undefined;

  return (
    <section className="step-body">
      <div className="reader-tools">
        <p className="reader-hint">Now read along. Tap any word for help.</p>
        <div className="listen-controls">
          {hasVoice ? (
            <>
              <button type="button" className="chip" onClick={player.toggle} aria-pressed={player.playing}>
                {player.playing ? "Stop" : "Play all"}
              </button>
              <label className="slow-toggle">
                <input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} />
                Slow
              </label>
            </>
          ) : null}
          <label className="slow-toggle">
            <input
              type="checkbox"
              checked={showTranslations}
              onChange={(e) => setShowTranslations(e.target.checked)}
            />
            Translations
          </label>
        </div>
      </div>

      <ol className="transcript" lang={pack.code}>
        {item.lines.map((line, li) => (
          <li key={li} data-current={player.current === li || undefined}>
            {line.speaker && item.kind === "dialogue" ? (
              <span className="speaker">{line.speaker}</span>
            ) : null}
            <span className="line-text">
              {pack.tokenize(line.text).map((tok, ti) =>
                tok.kind === "word" ? (
                  <button
                    key={ti}
                    type="button"
                    className="word"
                    data-selected={(selected?.line === li && selected.token === ti) || undefined}
                    data-saved={saved.isSaved(tok.normalized) || undefined}
                    onClick={() =>
                      setSelected(selected?.line === li && selected.token === ti ? null : { line: li, token: ti })
                    }
                  >
                    {tok.text}
                  </button>
                ) : (
                  <span key={ti}>{tok.text}</span>
                ),
              )}
              {hasVoice ? (
                <button
                  type="button"
                  className="icon-button line-play"
                  aria-label="Play this line"
                  onClick={() => player.playLine(li)}
                >
                  <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                    <path d="M6 4.5v11l9-5.5z" fill="currentColor" />
                  </svg>
                </button>
              ) : null}
            </span>
            {showTranslations ? (
              <span className="line-translation" lang="en">{line.translation}</span>
            ) : null}
          </li>
        ))}
      </ol>

      <footer className="reader-end">{children}</footer>

      {selected && selectedToken && selectedLine ? (
        <WordPanel
          key={`${selected.line}.${selected.token}`}
          lang={pack.code}
          surface={selectedToken.text}
          help={help}
          translation={selectedLine.translation}
          sentence={selectedLine.text}
          saved={saved.isSaved(selectedToken.kind === "word" ? selectedToken.normalized : "")}
          error={saved.error}
          onToggleSave={() => {
            if (!help || selectedToken.kind !== "word") return;
            void saved.toggle({
              language: pack.code,
              word: selectedToken.normalized,
              surface: selectedToken.text,
              base: help.base,
              meaning: help.meaning,
              sentence: selectedLine.text,
              textId: item.id,
            });
          }}
          onClose={() => setSelected(null)}
        />
      ) : null}
    </section>
  );
}

// Keep the browser from speaking after navigating away mid-sentence.
if (typeof window !== "undefined") window.addEventListener("pagehide", stopSpeaking);
