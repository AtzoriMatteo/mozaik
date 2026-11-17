"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { LanguagePack } from "@/core/language-pack";
import { getPack } from "@/core/registry";
import { findEpisode, wordsThatComeBack } from "@/core/story";
import { ReaderView } from "@/components/reader/reader";
import { TaskRunner } from "@/components/exercises/task-runner";
import { ExerciseRunner } from "@/components/grammar/grammar-lesson";
import { SpeakButton } from "@/components/speak-button";
import { useProgress } from "@/lib/progress/use-read-texts";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";
import { noteEpisode } from "@/lib/today";
import { useNow } from "@/lib/use-now";

type Step = "read" | "questions" | "notice" | "say" | "words" | "done";

/** YYYY-MM-DD in the learner's own time zone. */
export const dayKey = (ms: number) => new Date(ms).toLocaleDateString("sv");

/**
 * One story episode: read it while hearing it, then (one step at a time)
 * check you got it, notice one pattern from it, say something back, and keep
 * the words the story keeps using. Finishing the reading is what counts; every
 * later step can be skipped (Matteo: stop anytime, no penalty).
 */
export function EpisodeView({ lang, episodeId, replay = false }: { lang: string; episodeId: string; replay?: boolean }) {
  const pack = getPack(lang) as LanguagePack;
  const found = findEpisode(pack, episodeId)!;
  const { unit, story, episode, index } = found;
  const done = useProgress("story", pack.code);
  const replays = useProgress("replay", pack.code);
  const [step, setStep] = useState<Step>("read");
  const now = useNow();
  const footer = useRef<HTMLElement>(null);
  // Each new step starts in view.
  useEffect(() => {
    if (step !== "read") footer.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);
  const [score, setScore] = useState<{ right: number; total: number } | null>(null);
  const next = story.episodes[index + 1];
  const back = { href: `/today`, label: "Back to Today" };
  const kicker = (
    <p className="reader-unit">
      <span className="level-tag">{unit.level}</span>
      <span lang={pack.code}>{story.title}</span>
      <span>· episode {index + 1} of {story.episodes.length}</span>
    </p>
  );

  if (replay) {
    const id = now === null ? "" : `${episode.id}@${dayKey(now)}`;
    return (
      <ReaderView pack={pack} text={episode} unit={unit} flagKind="story" back={back} kicker={kicker} flow onListenEnd={() => id && replays.markDone(id)}>
        <footer className="reader-end story-step">
          {id && replays.doneIds.has(id) ? (
            <>
              <p className="score-line">Replayed. Easy reading like this is what makes Dutch feel fast.</p>
              <Link href="/today" className="button">Back to Today</Link>
            </>
          ) : (
            <button type="button" className="button button-quiet" onClick={() => id && replays.markDone(id)}>
              I read it through
            </button>
          )}
        </footer>
      </ReaderView>
    );
  }

  const finishReading = (to: Step) => {
    done.markDone(episode.id);
    noteEpisode(episode.id);
    setStep(to);
  };

  return (
    <ReaderView pack={pack} text={episode} unit={unit} flagKind="story" back={back} kicker={kicker}>
      <footer className="reader-end story-step" data-step={step} ref={footer}>
        <StepDots step={step} />

        {step === "read" ? (
          <div className="check-invite">
            <h2>Read it, and listen</h2>
            <p>Play it and read along. Tap a word when you&apos;re stuck. Read it twice if you like: that&apos;s how it sticks.</p>
            <div className="button-row">
              <button type="button" className="button" onClick={() => finishReading(episode.tasks?.length ? "questions" : "notice")}>
                I&apos;ve read it
              </button>
            </div>
          </div>
        ) : null}

        {step === "questions" ? (
          score ? (
            <div className="check-invite">
              <p className="score-line">
                {score.right} of {score.total} right.{score.right / score.total >= 0.7 ? " You followed the story." : " Read it once more later: it gets easier."}
              </p>
              <button type="button" className="button" onClick={() => setStep("notice")}>Next: one thing to notice</button>
            </div>
          ) : (
            <>
              <h2>Did you follow it?</h2>
              <TaskRunner tasks={episode.tasks ?? []} lang={pack.code} seed={episode.id} onDone={(right, total) => setScore({ right, total })} />
              <Skip onClick={() => setStep("notice")} />
            </>
          )
        ) : null}

        {step === "notice" ? <NoticeStep pack={pack} episodeId={episode.id} onNext={() => setStep("say")} /> : null}

        {step === "say" ? (
          <SayStep pack={pack} episodeId={episode.id} onNext={() => setStep(wordsThatComeBack(pack, unit, episode).length ? "words" : "done")} />
        ) : null}

        {step === "words" ? <WordsStep pack={pack} episodeId={episode.id} onNext={() => setStep("done")} /> : null}

        {step === "done" ? (
          <div className="check-invite">
            <h2>Episode {index + 1} done</h2>
            <p>{next ? `Next time: ${next.title} (${next.titleTranslation}).` : "That's the end of the story."}</p>
            <div className="button-row">
              <Link href="/today" className="button">Back to Today</Link>
              {next ? <Link href={`/story/${pack.code}/${next.id}`} className="button button-quiet">Read the next one now</Link> : null}
            </div>
          </div>
        ) : null}
      </footer>
    </ReaderView>
  );
}

const STEPS: { id: Step; label: string }[] = [
  { id: "read", label: "Read" },
  { id: "questions", label: "Follow" },
  { id: "notice", label: "Notice" },
  { id: "say", label: "Say" },
  { id: "words", label: "Keep" },
];

function StepDots({ step }: { step: Step }) {
  const at = step === "done" ? STEPS.length : STEPS.findIndex((s) => s.id === step);
  return (
    <ol className="step-dots" aria-label="Steps">
      {STEPS.map((s, i) => (
        <li key={s.id} data-state={i < at ? "done" : i === at ? "now" : "later"}>
          {s.label}
        </li>
      ))}
    </ol>
  );
}

function Skip({ onClick, label = "Skip this" }: { onClick: () => void; label?: string }) {
  return (
    <button type="button" className="link-button story-skip" onClick={onClick}>
      {label}
    </button>
  );
}

function NoticeStep({ pack, episodeId, onNext }: { pack: LanguagePack; episodeId: string; onNext: () => void }) {
  const { episode } = findEpisode(pack, episodeId)!;
  const n = episode.notice;
  const lesson = pack.grammar.find((g) => g.id === n.grammar);
  const [practising, setPractising] = useState(false);
  const [right, setRight] = useState<number | null>(null);
  if (practising && right === null) {
    return (
      <>
        <ExerciseRunner lang={pack.code} seed={episode.id} exercises={n.exercises} onBack={() => setPractising(false)} onDone={setRight} />
        <Skip onClick={onNext} />
      </>
    );
  }
  return (
    <section className="story-notice">
      <p className="notice-kicker">One thing to notice</p>
      <h2>{n.title}</h2>
      <p>{n.explain}</p>
      <ul className="notice-examples" lang={pack.code}>
        {n.examples.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      {right !== null ? (
        <p className="score-line">
          {right} of {n.exercises.length} right.
        </p>
      ) : null}
      <div className="button-row">
        {right === null ? (
          <button type="button" className="button" onClick={() => setPractising(true)}>
            Try {n.exercises.length} quick ones
          </button>
        ) : (
          <button type="button" className="button" onClick={onNext}>Next: say it back</button>
        )}
        {lesson ? (
          <Link href={`/grammar/${pack.code}/${lesson.id}`} className="button button-quiet">
            The full lesson
          </Link>
        ) : null}
      </div>
      {right === null ? <Skip onClick={onNext} /> : null}
    </section>
  );
}

function SayStep({ pack, episodeId, onNext }: { pack: LanguagePack; episodeId: string; onNext: () => void }) {
  const { episode } = findEpisode(pack, episodeId)!;
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(false);
  const item = episode.say[i];
  const last = i === episode.say.length - 1;
  return (
    <section className="say-back">
      <p className="notice-kicker">
        Say it back · {i + 1} of {episode.say.length}
      </p>
      <h2>{item.prompt}</h2>
      {item.frame ? (
        <p className="say-frame" lang={pack.code}>
          {item.frame}
        </p>
      ) : null}
      <p className="say-hint">Say it out loud first. Then compare.</p>
      {shown ? (
        <div className="say-model">
          <p lang={pack.code}>
            <strong>{item.model}</strong> <SpeakButton lang={pack.code} text={item.model} label="Hear it" />
          </p>
          <p className="example-translation">{item.translation}</p>
          <p className="say-hint">Yours can be different: any true sentence counts.</p>
          <button
            type="button"
            className="button"
            onClick={() => {
              if (last) onNext();
              else {
                setI(i + 1);
                setShown(false);
              }
            }}
          >
            {last ? "Next" : "Next one"}
          </button>
        </div>
      ) : (
        <button type="button" className="button" onClick={() => setShown(true)}>
          Show an answer
        </button>
      )}
      <Skip onClick={onNext} />
    </section>
  );
}

function WordsStep({ pack, episodeId, onNext }: { pack: LanguagePack; episodeId: string; onNext: () => void }) {
  const { unit, episode } = findEpisode(pack, episodeId)!;
  const saved = useSavedWords(pack.code);
  const words = wordsThatComeBack(pack, unit, episode);
  return (
    <section className="story-words">
      <p className="notice-kicker">Words that keep coming back</p>
      <h2>Keep any as cards?</h2>
      <p>These come back again and again in this story. Add the ones you don&apos;t know yet: the card shows the sentence they came from.</p>
      <ul>
        {words.map((w) => {
          const on = saved.isSaved(w.word, w.lemma === w.word ? undefined : w.lemma);
          return (
            <li key={w.lemma}>
              <span lang={pack.code} className="story-word">{w.lemma}</span>
              <span className="story-word-meaning">{w.meaning}</span>
              <button
                type="button"
                className="chip"
                aria-pressed={on}
                onClick={() =>
                  void saved.toggle({
                    language: pack.code,
                    word: w.word,
                    surface: w.surface,
                    base: w.lemma === w.word ? undefined : w.lemma,
                    meaning: w.meaning,
                    sentence: w.sentence,
                    textId: episode.id,
                  })
                }
              >
                {on ? "Added" : "Add"}
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" className="button" onClick={onNext}>Done</button>
    </section>
  );
}
