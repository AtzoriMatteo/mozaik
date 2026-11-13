"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { judge, shuffleTiles, type Verdict } from "@/core/answers";
import type { Example, Exercise, LessonBlock } from "@/core/content";
import { nextActivity } from "@/core/course";
import type { LanguagePack } from "@/core/language-pack";
import { getPack } from "@/core/registry";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { NextActivityLink } from "@/components/course/next-activity-link";
import { SpeakButton } from "@/components/speak-button";
import { MatchBoard, SortBoard, SpotBoard } from "@/components/exercises/boards";
import { capsFor } from "@/core/caps";

/**
 * A grammar lesson: the pattern (visual), examples quoted from the unit's
 * texts, then a short set of exercises, one at a time.
 */
export function GrammarLessonView({ lang, pointId }: { lang: string; pointId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const point = pack.grammar.find((g) => g.id === pointId)!;
  const lesson = point.lesson!;
  const unit = pack.units.find((u) => u.id === point.unit)!;
  const progress = useCourseProgress(pack);
  const [mode, setMode] = useState<"learn" | "practise" | "done">("learn");
  const [score, setScore] = useState(0);

  return (
    <article className="grammar">
      <Link href={`/course/${lang}/${unit.id}`} className="back-link">
        Back to {unit.titleTranslation}
      </Link>
      <header className="unit-page-head">
        <p className="reader-unit">
          <span className="level-tag">{point.level}</span>
          Grammar
        </p>
        <h1 className="page-title">{point.title}</h1>
        <p className="lede">{point.summary}</p>
      </header>

      {mode === "learn" ? (
        <>
          {lesson.blocks.map((b, i) => (
            <Block key={i} block={b} lang={lang} />
          ))}

          <section className="examples" aria-labelledby="examples-title">
            <h2 id="examples-title">From your texts</h2>
            <ul>
              {lesson.examples.map((e) => (
                <ExampleLine key={e.text} example={e} lang={lang} />
              ))}
            </ul>
          </section>

          <button type="button" className="button" onClick={() => setMode("practise")}>
            Practise ({lesson.exercises.length} exercises)
          </button>
        </>
      ) : null}

      {mode === "practise" ? (
        <ExerciseRunner
          lang={lang}
          seed={point.id}
          exercises={lesson.exercises}
          onBack={() => setMode("learn")}
          onDone={(right) => {
            setScore(right);
            setMode("done");
          }}
        />
      ) : null}

      {mode === "done" ? (
        <section className="step-body">
          <h2 className="done-title">
            {score} of {lesson.exercises.length} right
          </h2>
          <p className="lede">
            {score / lesson.exercises.length >= 0.8
              ? "You've got this pattern. You'll keep meeting it in the texts."
              : "Good start. This one takes a few rounds: look at the pattern again whenever you like."}
          </p>
          <div className="button-row">
            <NextActivityLink
              pack={pack}
              next={nextActivity(pack, { kind: "grammar", id: point.id })}
              onDone={() => progress.markGrammar(point.id)}
            />
            <button
              type="button"
              className="button button-quiet"
              onClick={() => {
                progress.markGrammar(point.id);
                setMode("learn");
              }}
            >
              See the pattern again
            </button>
          </div>
        </section>
      ) : null}
    </article>
  );
}

/* ---------------------------------------------------------------- */

function Block({ block, lang }: { block: LessonBlock; lang: string }) {
  if (block.kind === "text") return <p className="lesson-text">{block.text}</p>;

  if (block.kind === "table") {
    return (
      <figure className="lesson-figure">
        {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        <div className="table-scroll">
          <table className="lesson-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} scope="col">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row">{cell}</th>
                    ) : (
                      <td key={c} lang={lang}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </figure>
    );
  }

  return (
    <figure className="lesson-figure">
      {block.caption ? <figcaption>{block.caption}</figcaption> : null}
      <div className="slot-rows">
        {block.rows.map((row, r) => (
          <div key={r} className="slot-row-wrap">
            <div className="slot-row" lang={lang}>
              {row.slots.map((s, i) => (
                <span key={i} className="slot" data-focus={s.focus || undefined}>
                  <span className="slot-text">{s.text}</span>
                  {s.label ? <span className="slot-label" lang="en">{s.label}</span> : null}
                </span>
              ))}
            </div>
            {row.translation ? <p className="slot-translation">{row.translation}</p> : null}
          </div>
        ))}
      </div>
    </figure>
  );
}

/** Splits a sentence so the highlighted words can be marked. */
function highlightParts(text: string, highlight: string[]) {
  const ranges: [number, number][] = [];
  for (const h of highlight) {
    let from = 0;
    while (from <= text.length) {
      const i = text.indexOf(h, from);
      if (i < 0) break;
      const before = text[i - 1];
      const after = text[i + h.length];
      const isWord = (c?: string) => !!c && /[\p{L}\p{N}]/u.test(c);
      if (!isWord(before) && !isWord(after)) ranges.push([i, i + h.length]);
      from = i + h.length;
    }
  }
  ranges.sort((a, b) => a[0] - b[0]);
  const parts: { text: string; mark: boolean }[] = [];
  let pos = 0;
  for (const [s, e] of ranges) {
    if (s < pos) continue;
    if (s > pos) parts.push({ text: text.slice(pos, s), mark: false });
    parts.push({ text: text.slice(s, e), mark: true });
    pos = e;
  }
  if (pos < text.length) parts.push({ text: text.slice(pos), mark: false });
  return parts;
}

function ExampleLine({ example, lang }: { example: Example; lang: string }) {
  return (
    <li className="example">
      <span className="example-text" lang={lang}>
        {highlightParts(example.text, example.highlight).map((p, i) =>
          p.mark ? <mark key={i}>{p.text}</mark> : <span key={i}>{p.text}</span>,
        )}
        <SpeakButton lang={lang} text={example.text} label="Hear this sentence" rate={0.85} />
      </span>
      <span className="example-translation">{example.translation}</span>
    </li>
  );
}

/* ---------------------------------------------------------------- */

function ExerciseRunner({
  lang,
  seed,
  exercises,
  onBack,
  onDone,
}: {
  lang: string;
  seed: string;
  exercises: Exercise[];
  onBack: () => void;
  onDone: (right: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [right, setRight] = useState(0);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const ex = exercises[index];

  function next() {
    const total = right + (verdict === "right" || verdict === "almost" ? 1 : 0);
    if (index + 1 < exercises.length) {
      setRight(total);
      setIndex(index + 1);
      setVerdict(null);
    } else {
      onDone(total);
    }
  }

  return (
    <section className="step-body">
      <p className="review-progress">
        Exercise {index + 1} of {exercises.length}
        <button type="button" className="link-button" onClick={onBack}>
          See the pattern
        </button>
      </p>
      <ExerciseCard key={index} lang={lang} seed={`${seed}-${index}`} exercise={ex} verdict={verdict} onCheck={setVerdict} />
      {verdict ? (
        <div className="feedback" role="status">
          <p>
            {verdict === "right" ? "Right." : verdict === "almost" ? "Almost: check the accents." : "Not quite."}{" "}
            <span className="feedback-answer" lang={lang}>{correctAnswer(ex)}</span>
          </p>
          <p className="example-translation">{ex.translation}</p>
          <button type="button" className="button" onClick={next} autoFocus>
            Continue
          </button>
        </div>
      ) : null}
    </section>
  );
}

export function correctAnswer(ex: Exercise): string {
  switch (ex.kind) {
    case "fill":
      return `${ex.before}${ex.answers[0]}${ex.after}`;
    case "choice":
      return `${ex.before}${ex.options[ex.answer]}${ex.after}`;
    case "transform":
      return ex.answers[0];
    case "build":
      return ex.tiles.join(" ");
    case "spot":
      return ex.correct;
    case "match":
      return ex.pairs.map(([a, b]) => `${a} – ${b}`).join(", ");
    case "sort":
      return ex.groups.map((g, gi) => `${g}: ${ex.items.filter(([, i]) => i === gi).map(([w]) => w).join(", ")}`).join(" · ");
  }
}

export function ExerciseCard({
  lang,
  seed,
  exercise,
  verdict,
  onCheck,
}: {
  lang: string;
  seed: string;
  exercise: Exercise;
  verdict: Verdict | null;
  onCheck: (v: Verdict) => void;
}) {
  const [typed, setTyped] = useState("");
  const [picked, setPicked] = useState<number | null>(null);
  const [placed, setPlaced] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const shuffled = useMemo(
    () => (exercise.kind === "build" ? shuffleTiles(exercise.tiles.map((t, i) => ({ t, i })), seed) : []),
    [exercise, seed],
  );
  const locked = verdict !== null;

  function check() {
    if (exercise.kind === "fill" || exercise.kind === "transform") {
      if (!typed.trim()) return setError("Type your answer first.");
      onCheck(judge(typed, exercise.answers));
    } else if (exercise.kind === "build") {
      if (placed.length < exercise.tiles.length) return setError("Use all the tiles first.");
      const sentence = placed.map((i) => exercise.tiles[i]).join(" ");
      onCheck(judge(sentence, [exercise.tiles.join(" "), ...(exercise.alsoCorrect ?? [])]));
    }
  }

  const input = (
    <input
      className="gap-input"
      lang={lang}
      value={typed}
      readOnly={locked}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize={exercise.kind === "fill" ? capsFor(exercise.before) : "sentences"}
      spellCheck={false}
      aria-label="Your answer"
      onChange={(e) => {
        setTyped(e.target.value);
        setError(null);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !locked) check();
      }}
      data-verdict={verdict ?? undefined}
    />
  );

  return (
    <div className="exercise">
      {exercise.kind === "fill" ? (
        <>
          <p className="exercise-prompt">Fill the gap{exercise.hint ? ` (${exercise.hint})` : ""}:</p>
          <p className="exercise-sentence" lang={lang}>
            {exercise.before}
            {input}
            {exercise.after}
          </p>
        </>
      ) : null}

      {exercise.kind === "choice" ? (
        <>
          <p className="exercise-prompt">Choose what fits:</p>
          <p className="exercise-sentence" lang={lang}>
            {exercise.before}
            <span className="gap">{picked === null ? "___" : exercise.options[picked]}</span>
            {exercise.after}
          </p>
          <div className="choice-row">
            {exercise.options.map((o, i) => (
              <button
                key={o}
                type="button"
                className="option"
                lang={lang}
                disabled={locked}
                data-state={locked ? (i === exercise.answer ? "right" : i === picked ? "wrong" : undefined) : undefined}
                onClick={() => {
                  setPicked(i);
                  onCheck(i === exercise.answer ? "right" : "wrong");
                }}
              >
                {o}
              </button>
            ))}
          </div>
        </>
      ) : null}

      {exercise.kind === "transform" ? (
        <>
          <p className="exercise-prompt">{exercise.instruction}</p>
          <p className="exercise-sentence" lang={lang}>{exercise.from}</p>
          <div className="field">{input}</div>
        </>
      ) : null}

      {exercise.kind === "build" ? (
        <>
          <p className="exercise-prompt">Put the tiles in order:</p>
          <div className="build-answer" lang={lang} aria-label="Your sentence">
            {placed.length === 0 ? <span className="build-placeholder">Tap the tiles below</span> : null}
            {placed.map((i) => (
              <button
                key={i}
                type="button"
                className="tile"
                disabled={locked}
                onClick={() => setPlaced(placed.filter((p) => p !== i))}
              >
                {exercise.tiles[i]}
              </button>
            ))}
          </div>
          <div className="build-pool" lang={lang}>
            {shuffled.map(({ t, i }) => (
              <button
                key={i}
                type="button"
                className="tile"
                disabled={locked || placed.includes(i)}
                onClick={() => {
                  setPlaced([...placed, i]);
                  setError(null);
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </>
      ) : null}

      {exercise.kind === "spot" ? (
        <>
          <p className="exercise-prompt">One word is wrong. Find it and fix it:</p>
          <SpotBoard sentence={exercise.sentence} wrong={exercise.wrong} fix={exercise.fix} lang={lang} locked={locked} onCheck={onCheck} />
        </>
      ) : null}

      {exercise.kind === "match" ? (
        <>
          <p className="exercise-prompt">{exercise.prompt}</p>
          <MatchBoard pairs={exercise.pairs} seed={seed} leftLang={lang} rightLang={lang} locked={locked} onCheck={onCheck} />
        </>
      ) : null}

      {exercise.kind === "sort" ? (
        <>
          <p className="exercise-prompt">{exercise.prompt}</p>
          <SortBoard groups={exercise.groups} items={exercise.items} lang={lang} locked={locked} onCheck={onCheck} />
        </>
      ) : null}

      {error ? <p className="error" role="alert">{error}</p> : null}
      {!locked && (exercise.kind === "fill" || exercise.kind === "transform" || exercise.kind === "build") ? (
        <button type="button" className="button" onClick={check}>
          Check
        </button>
      ) : null}
    </div>
  );
}
