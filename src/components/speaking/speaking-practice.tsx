"use client";

import Link from "next/link";
import { useRef, useState, useSyncExternalStore } from "react";
import { nextActivity } from "@/core/course";
import type { Sentence } from "@/core/content";
import type { LanguagePack } from "@/core/language-pack";
import { analyzeAttempt, isPhantom, judgePair, type AttemptFeedback, type PairVerdict, type Sound } from "@/core/pronunciation";
import { getPack } from "@/core/registry";
import { micSupported, startRecording, isSilent, type Recording } from "@/lib/asr/recorder";
import { useAsr, WHISPER_LANGUAGE, type AsrStatus } from "@/lib/asr/use-asr";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { speak, useHasVoice } from "@/lib/speech";
import { NextActivityLink } from "@/components/course/next-activity-link";

const noSubscribe = () => () => {};

export type Step =
  | { kind: "sound"; sound: Sound }
  | { kind: "pair"; sound: Sound; target: string; contrast: string }
  | { kind: "word"; sound: Sound; target: string }
  | { kind: "shadow"; sentence: Sentence };

/** Build the session: per sound an intro and its drills, then shadowing. */
function buildSteps(pack: LanguagePack, soundIds: string[], shadowing: Sentence[]): Step[] {
  const steps: Step[] = [];
  for (const id of soundIds) {
    const sound = pack.sounds.find((s) => s.id === id);
    if (!sound) continue;
    steps.push({ kind: "sound", sound });
    if (sound.pairs.length > 0) {
      for (const [a, b] of sound.pairs) {
        steps.push({ kind: "pair", sound, target: a, contrast: b });
        steps.push({ kind: "pair", sound, target: b, contrast: a });
      }
    } else {
      for (const w of sound.examples.slice(0, 3)) steps.push({ kind: "word", sound, target: w });
    }
  }
  for (const sentence of shadowing) steps.push({ kind: "shadow", sentence });
  return steps;
}

export function SpeakingPractice({ lang, unitId }: { lang: string; unitId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = pack.units.find((u) => u.id === unitId)!;
  const speaking = unit.speaking!;
  const steps = buildSteps(pack, speaking.sounds, speaking.shadowing);
  const asr = useAsr(WHISPER_LANGUAGE[lang] ?? lang);
  const progress = useCourseProgress(pack);
  const [index, setIndex] = useState(0);
  const hasMic = useSyncExternalStore(noSubscribe, micSupported, () => true);

  const step = steps[index];
  const done = index >= steps.length;
  const practised = steps.filter((s) => s.kind !== "sound").length;
  const practiceIndex = steps.slice(0, index + 1).filter((s) => s.kind !== "sound").length;

  return (
    <article className="speaking">
      <Link href={`/course/${lang}/${unit.id}`} className="back-link">
        Back to {unit.titleTranslation}
      </Link>
      <header className="unit-page-head">
        <p className="reader-unit">
          <span className="level-tag">{unit.level}</span>
          Speaking
        </p>
        <h1 className="page-title">Say it aloud</h1>
      </header>

      {!hasMic ? (
        <div className="notice-box">
          <p>
            <strong>This browser can&apos;t record audio.</strong> Try Chrome, Edge or Safari, and allow
            the microphone when asked.
          </p>
        </div>
      ) : asr.status.state !== "ready" ? (
        <ModelGate status={asr.status} onLoad={asr.load} />
      ) : done ? (
        <section className="step-body">
          <h2 className="done-title">Nicely done</h2>
          <p className="lede">
            Saying things aloud is what makes them stick. Come back to these whenever you like.
          </p>
          <div className="button-row">
            <NextActivityLink
              pack={pack}
              next={nextActivity(pack, { kind: "speak", id: unit.id })}
              onDone={() => progress.markSpoken(unit.id)}
            />
            <button type="button" className="button button-quiet" onClick={() => setIndex(0)}>
              Practise again
            </button>
          </div>
        </section>
      ) : (
        <>
          {step.kind !== "sound" ? (
            <p className="review-progress">
              {practiceIndex} of {practised}
              <button type="button" className="link-button" onClick={() => setIndex(index + 1)}>
                Skip
              </button>
            </p>
          ) : null}

          {step.kind === "sound" ? (
            <SoundIntro lang={lang} sound={step.sound} onStart={() => setIndex(index + 1)} />
          ) : (
            <PracticeCard
              key={index}
              lang={lang}
              step={step}
              sounds={pack.sounds}
              transcribe={asr.transcribe}
              onNext={() => {
                if (index + 1 >= steps.length) progress.markSpoken(unit.id);
                setIndex(index + 1);
              }}
            />
          )}
        </>
      )}
    </article>
  );
}

/* ---------------------------------------------------------------- */

export function ModelGate({ status, onLoad }: { status: AsrStatus; onLoad: () => void }) {
  const mb = (n: number) => Math.max(1, Math.round(n / 1_000_000));
  return (
    <section className="model-gate">
      <h2>Mozaik listens on your device</h2>
      <p>
        Speaking practice uses an AI speech model that runs inside your browser. It&apos;s free, has no
        limits, and your voice never leaves your device. It downloads once (around 100–150 MB, best
        on Wi-Fi) and is kept for next time.
      </p>
      {status.state === "loading" ? (
        <div className="download" role="status" aria-live="polite">
          <div className="unit-meter" aria-hidden="true">
            <span style={{ width: status.total ? `${(status.loaded / status.total) * 100}%` : "5%" }} />
          </div>
          <p>
            {status.total
              ? `Downloading: ${mb(status.loaded)} of ${mb(status.total)} MB`
              : "Getting ready…"}
          </p>
        </div>
      ) : (
        <>
          {status.state === "error" ? (
            <p className="error" role="alert">
              The download stopped: {status.message}. Check your connection and try again.
            </p>
          ) : null}
          <button type="button" className="button" onClick={onLoad}>
            {status.state === "error" ? "Try again" : "Download the speech model"}
          </button>
        </>
      )}
    </section>
  );
}

function SoundIntro({ lang, sound, onStart }: { lang: string; sound: Sound; onStart: () => void }) {
  const hasVoice = useHasVoice(lang);
  return (
    <section className="step-body">
      <h2 className="sound-title" lang={lang}>{sound.title}</h2>
      <p className="lesson-text">{sound.how}</p>
      <ul className="sound-examples" lang={lang}>
        {sound.examples.map((w) => (
          <li key={w}>
            {hasVoice ? (
              <button type="button" className="tile" onClick={() => speak(lang, w, 0.75)}>
                {w}
              </button>
            ) : (
              <span className="tile">{w}</span>
            )}
          </li>
        ))}
      </ul>
      {hasVoice ? <p className="step-hint">Tap a word to hear it.</p> : null}
      <button type="button" className="button" onClick={onStart}>
        {sound.pairs.length ? "Test yourself with word pairs" : "Practise these words"}
      </button>
    </section>
  );
}

type Result =
  | { kind: "pair"; verdict: PairVerdict; heard: string }
  | { kind: "attempt"; feedback: AttemptFeedback; heard: string }
  | { kind: "silent" };

export function PracticeCard({
  lang,
  step,
  sounds,
  transcribe,
  onNext,
  onScored,
  nextLabel = "Next",
}: {
  lang: string;
  step: Exclude<Step, { kind: "sound" }>;
  sounds: readonly Sound[];
  transcribe: (a: Float32Array) => Promise<string>;
  onNext: () => void;
  /** Called with how well it went, for review scheduling. */
  onScored?: (r: "again" | "hard" | "good") => void;
  nextLabel?: string;
}) {
  const hasVoice = useHasVoice(lang);
  const [phase, setPhase] = useState<"idle" | "recording" | "thinking" | "done">("idle");
  const [result, setResult] = useState<Result | null>(null);
  const [recording, setRecording] = useState<Recording | null>(null);
  const [error, setError] = useState<string | null>(null);
  const stopRef = useRef<(() => void) | null>(null);

  const target = step.kind === "shadow" ? step.sentence.text : step.target;
  const rate = step.kind === "shadow" ? 0.85 : 0.75;

  async function start() {
    setError(null);
    setResult(null);
    try {
      const r = await startRecording(step.kind === "shadow" ? 8000 : 3500);
      stopRef.current = r.stop;
      setPhase("recording");
      await finish(await r.done); // ends on "Done speaking" or after the time limit
    } catch {
      setPhase("idle");
      setError("Mozaik couldn't use the microphone. Allow it in your browser and try again.");
    }
  }

  async function finish(rec: Recording) {
    setRecording(rec);
    if (isSilent(rec)) {
      setResult({ kind: "silent" });
      setPhase("done");
      return;
    }
    setPhase("thinking");
    try {
      const raw = await transcribe(rec.audio16k);
      const heard = isPhantom(raw) ? "" : raw;
      if (!heard) setResult({ kind: "silent" });
      else if (step.kind === "pair") {
        const verdict = judgePair(step.target, step.contrast, heard);
        setResult({ kind: "pair", verdict, heard });
        onScored?.(verdict === "right" ? "good" : "again");
      } else {
        const feedback = analyzeAttempt(target, heard, sounds);
        setResult({ kind: "attempt", feedback, heard });
        onScored?.(feedback.understood >= 0.8 ? "good" : feedback.understood >= 0.5 ? "hard" : "again");
      }
    } catch (e) {
      setError(`Something went wrong while listening: ${(e as Error).message}`);
    }
    setPhase("done");
  }

  return (
    <section className="step-body speak-card">
      <p className="exercise-prompt">
        {step.kind === "pair" ? (
          <>
            Say this word. Careful: it sounds close to <span lang={lang}>{step.contrast}</span>.
          </>
        ) : step.kind === "word" ? (
          "Say this word:"
        ) : (
          "Listen, then say the sentence:"
        )}
      </p>
      <p className={step.kind === "shadow" ? "speak-target speak-sentence" : "speak-target"} lang={lang}>
        {target}
      </p>
      {step.kind === "shadow" ? <p className="example-translation">{step.sentence.translation}</p> : null}

      <div className="button-row">
        {hasVoice ? (
          <button type="button" className="button button-quiet" onClick={() => speak(lang, target, rate)}>
            Hear it
          </button>
        ) : null}
        {phase === "recording" ? (
          <button type="button" className="button record-button" data-recording onClick={() => stopRef.current?.()}>
            <span className="record-dot" aria-hidden="true" /> Done speaking
          </button>
        ) : (
          <button type="button" className="button record-button" disabled={phase === "thinking"} onClick={start}>
            <span className="record-dot" aria-hidden="true" />
            {phase === "thinking" ? "Listening…" : result ? "Try again" : "Speak"}
          </button>
        )}
      </div>

      {error ? <p className="error" role="alert">{error}</p> : null}

      {result ? (
        <div className="feedback speak-feedback" role="status">
          <Feedback lang={lang} step={step} result={result} />
          <div className="button-row">
            {recording ? (
              <button type="button" className="button button-quiet" onClick={() => new Audio(recording.url).play()}>
                Play yours
              </button>
            ) : null}
            {hasVoice ? (
              <button type="button" className="button button-quiet" onClick={() => speak(lang, target, rate)}>
                Play the model
              </button>
            ) : null}
            <button type="button" className="button" onClick={onNext}>
              {nextLabel}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Feedback({ lang, step, result }: { lang: string; step: Exclude<Step, { kind: "sound" }>; result: Result }) {
  if (result.kind === "silent") {
    return <p>Mozaik didn&apos;t catch anything. Speak a little louder or closer to the microphone, and try again.</p>;
  }

  if (result.kind === "pair" && step.kind === "pair") {
    if (result.verdict === "right") {
      return (
        <p className="verdict-good">
          Clear. Mozaik heard <strong lang={lang}>{step.target}</strong>.
        </p>
      );
    }
    return (
      <>
        <p>
          {result.verdict === "other" ? (
            <>
              Mozaik heard <strong lang={lang}>{step.contrast}</strong>, the other word.
            </>
          ) : (
            <>
              Mozaik heard “<span lang={lang}>{result.heard}</span>”, not quite either word.
            </>
          )}
        </p>
        <p className="tip">
          <strong lang={lang}>{step.sound.title}</strong>: {step.sound.how}
        </p>
      </>
    );
  }

  if (result.kind === "attempt") {
    const { feedback } = result;
    const misheard = feedback.words.filter((w) => w.status !== "ok");
    return (
      <>
        <p className={misheard.length === 0 ? "verdict-good" : undefined}>
          {misheard.length === 0
            ? "Understood, every word."
            : `Understood ${feedback.words.length - misheard.length} of ${feedback.words.length} words.`}
        </p>
        <p className="example-translation">
          Mozaik heard: “<span lang={lang}>{result.heard}</span>”
        </p>
        <p className="heard-words" lang={lang}>
          {feedback.words.map((w, i) => (
            <span key={i} className={`heard-${w.status}`} title={w.status === "misheard" ? `heard “${w.heardAs}”` : undefined}>
              {w.word}
              {w.status === "misheard" ? <small> heard “{w.heardAs}”</small> : null}
            </span>
          ))}
        </p>
        {feedback.focus ? (
          <p className="tip">
            Work on <strong lang={lang}>{feedback.focus.title}</strong>: {feedback.focus.how}
          </p>
        ) : misheard.length > 0 ? (
          <p className="tip">Listen to the model once more and copy its rhythm, a bit slower.</p>
        ) : null}
      </>
    );
  }
  return null;
}
