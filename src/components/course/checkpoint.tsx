"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ReadingText, Task, Unit } from "@/core/content";
import type { LanguagePack } from "@/core/language-pack";
import { nextActivity } from "@/core/course";
import { getPack } from "@/core/registry";
import { noVerbIssues } from "@/core/writing";
import { ReaderView } from "@/components/reader/reader";
import { TaskRunner } from "@/components/exercises/task-runner";
import { NextActivityLink } from "@/components/course/next-activity-link";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { playLines, useHasVoice } from "@/lib/speech";

type Part = "intro" | "read" | "listen" | "write" | "result";
type Score = { right: number; total: number };

/** What counts as passing: most questions right and every writing point said. */
export const PASS = 0.7;

/**
 * The end of a unit (Matteo: rewarding checkpoints, never a wall): the
 * story's last scene in three short parts, then the unit's can-do goals
 * ticked with your own results.
 */
export function CheckpointView({ lang, unitId }: { lang: string; unitId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = pack.units.find((u) => u.id === unitId)!;
  const cp = unit.checkpoint!;
  const progress = useCourseProgress(pack);
  const [part, setPart] = useState<Part>("intro");
  const [read, setRead] = useState<Score | null>(null);
  const [heard, setHeard] = useState<Score | null>(null);
  const [wrote, setWrote] = useState<Score | null>(null);
  const top = useRef<HTMLDivElement>(null);
  useEffect(() => {
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [part]);

  const text: ReadingText = { id: `check-${unit.id}`, level: unit.level, title: cp.title, titleTranslation: cp.titleTranslation, paragraphs: cp.text, grammar: [], words: cp.words };
  const back = { href: `/course/${pack.code}/${unit.id}`, label: `Back to ${unit.titleTranslation}` };
  const kicker = <Kicker unit={unit} part={part} />;

  if (part === "read") {
    return (
      <div ref={top}>
        <ReaderView pack={pack} text={text} unit={unit} flagKind="text" back={back} kicker={kicker}>
          <footer className="reader-end">
            {read ? null : <h2>Did you get it?</h2>}
            {read ? (
              <div className="check-invite">
                <p className="score-line">{read.right} of {read.total} right.</p>
                <button type="button" className="button" onClick={() => setPart("listen")}>Next: listen</button>
              </div>
            ) : (
              <TaskRunner tasks={cp.textTasks} lang={pack.code} seed={text.id} onDone={(right, total) => setRead({ right, total })} />
            )}
          </footer>
        </ReaderView>
      </div>
    );
  }

  return (
    <article className="checkpoint" ref={top}>
      <Link href={back.href} className="back-link">{back.label}</Link>
      {kicker}
      <header className="reader-head">
        <h1 lang={pack.code}>{cp.title}</h1>
        <p className="reader-subtitle">{cp.titleTranslation}</p>
      </header>

      {part === "intro" ? (
        <section className="check-invite">
          <h2>The end of the unit</h2>
          <p>
            The story&apos;s last scene, in three short parts: read it, listen to a message, write a few lines. About ten minutes.
            It isn&apos;t a wall: whatever happens, you can go on.
          </p>
          <ul className="checkpoint-goals">
            {unit.canDo.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <button type="button" className="button" onClick={() => setPart("read")}>Start</button>
        </section>
      ) : null}

      {part === "listen" ? (
        <ListenPart
          pack={pack}
          unit={unit}
          onDone={(s) => {
            setHeard(s);
            setPart("write");
          }}
        />
      ) : null}

      {part === "write" ? (
        <WritePart
          pack={pack}
          unit={unit}
          onDone={(s) => {
            setWrote(s);
            const total = (read?.total ?? 0) + (heard?.total ?? 0);
            const right = (read?.right ?? 0) + (heard?.right ?? 0);
            progress.markChecked(unit.id);
            if (total && right / total >= PASS && s.right === s.total) progress.markCheckPassed(unit.id);
            setPart("result");
          }}
        />
      ) : null}

      {part === "result" ? <Result pack={pack} unit={unit} read={read} heard={heard} wrote={wrote} onAgain={() => setPart("read")} /> : null}
    </article>
  );
}

function Kicker({ unit, part }: { unit: Unit; part: Part }) {
  const parts: Part[] = ["read", "listen", "write"];
  return (
    <p className="reader-unit">
      <span className="level-tag">{unit.level}</span>
      <span>Checkpoint</span>
      {parts.includes(part) ? <span>· part {parts.indexOf(part) + 1} of 3</span> : null}
    </p>
  );
}

function ListenPart({ pack, unit, onDone }: { pack: LanguagePack; unit: Unit; onDone: (s: Score) => void }) {
  const cp = unit.checkpoint!;
  const hasVoice = useHasVoice(pack.code);
  const [playing, setPlaying] = useState(false);
  const [plays, setPlays] = useState(0);
  const [score, setScore] = useState<Score | null>(null);
  const stop = useRef<(() => void) | null>(null);
  useEffect(() => () => stop.current?.(), []);
  const tasks: Task[] = cp.listening.questions.map((q) => ({ kind: "choice", prompt: q.prompt, options: q.options, answer: q.answer }));
  const play = () => {
    if (playing) {
      stop.current?.();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    setPlays((n) => n + 1);
    stop.current = playLines(pack.code, cp.listening.lines, { rate: 0.9, onLine: (i) => i === null && setPlaying(false) });
  };
  return (
    <section className="checkpoint-part">
      <h2>Listen</h2>
      <p>{cp.listening.situation}</p>
      {hasVoice ? (
        <button type="button" className="button" onClick={play}>
          {playing ? "Stop" : plays ? "Play it again" : "Play the message"}
        </button>
      ) : (
        <p className="lede">There&apos;s no Dutch voice on this device; read the message below instead.</p>
      )}
      {plays > 0 || !hasVoice ? (
        score ? (
          <>
            <p className="score-line">{score.right} of {score.total} right.</p>
            <details className="checkpoint-transcript">
              <summary>Read the message</summary>
              {cp.listening.lines.map((l, i) => (
                <p key={i} lang={pack.code}>{l.text} <span className="example-translation">{l.translation}</span></p>
              ))}
            </details>
            <button type="button" className="button" onClick={() => onDone(score)}>Next: write</button>
          </>
        ) : (
          <TaskRunner tasks={tasks} lang={pack.code} seed={`check-listen-${unit.id}`} onDone={(right, total) => setScore({ right, total })} />
        )
      ) : null}
    </section>
  );
}

function WritePart({ pack, unit, onDone }: { pack: LanguagePack; unit: Unit; onDone: (s: Score) => void }) {
  const w = unit.checkpoint!.write;
  const [texts, setTexts] = useState(() => w.points.map(() => ""));
  const [checked, setChecked] = useState(false);
  // A point counts when it's a real sentence, longer than its frame's fixed words.
  const said = texts.map((t, i) => {
    const fixed = (w.points[i].frame ?? "").replace(/…/g, "").replace(/[.!?,]/g, " ").split(/\s+/).filter(Boolean).length;
    const words = t.trim().split(/\s+/).filter(Boolean).length;
    return words >= Math.max(2, fixed + 1) && noVerbIssues(pack, t).length === 0;
  });
  const issues = checked ? texts.map((t) => (t.trim() ? (pack.checkWriting?.(t) ?? []) : [])) : [];
  return (
    <section className="checkpoint-part">
      <h2>Write</h2>
      <p>{w.situation}</p>
      {w.points.map((p, i) => (
        <div key={i} className="checkpoint-point">
          <label htmlFor={`cp-${i}`}>{p.prompt}</label>
          {p.frame ? <p className="say-frame" lang={pack.code}>{p.frame}</p> : null}
          <textarea
            id={`cp-${i}`}
            lang={pack.code}
            rows={2}
            value={texts[i]}
            onChange={(e) => {
              const next = [...texts];
              next[i] = e.target.value;
              setTexts(next);
            }}
          />
          {checked && !said[i] ? <p className="field-error">Write a whole sentence for this one.</p> : null}
          {issues[i]?.map((x, k) => (
            <p key={k} className="checkpoint-issue">
              <span lang={pack.code}>{texts[i].slice(x.start, x.end)}</span>: {x.message}
            </p>
          ))}
        </div>
      ))}
      <div className="button-row">
        <button type="button" className="button" onClick={() => setChecked(true)}>Check</button>
        {checked ? (
          <button type="button" className="button button-quiet" onClick={() => onDone({ right: said.filter(Boolean).length, total: said.length })}>
            Finish
          </button>
        ) : null}
      </div>
      {checked ? (
        <details className="checkpoint-transcript">
          <summary>See an example</summary>
          <p lang={pack.code}>{w.model}</p>
          <p className="example-translation">{w.modelTranslation}</p>
        </details>
      ) : null}
    </section>
  );
}

function Result({
  pack,
  unit,
  read,
  heard,
  wrote,
  onAgain,
}: {
  pack: LanguagePack;
  unit: Unit;
  read: Score | null;
  heard: Score | null;
  wrote: Score | null;
  onAgain: () => void;
}) {
  const progress = useCourseProgress(pack);
  const passed = progress.checkPassed.has(unit.id);
  const next = nextActivity(pack, { kind: "check", id: unit.id });
  return (
    <section className="checkpoint-result" data-passed={passed || undefined}>
      <h2>{passed ? "You can now…" : "Nearly there"}</h2>
      <ul className="checkpoint-goals" data-done={passed || undefined}>
        {unit.canDo.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p className="checkpoint-scores">
        Reading {read?.right ?? 0}/{read?.total ?? 0} · Listening {heard?.right ?? 0}/{heard?.total ?? 0} · Writing {wrote?.right ?? 0}/{wrote?.total ?? 0}
      </p>
      <p>
        {passed
          ? "This unit's piece of the mosaic is glazed. On to the next one."
          : "Have another look at the parts you missed, and try again whenever you like. You can go on to the next unit either way."}
      </p>
      <div className="button-row">
        {next ? <NextActivityLink pack={pack} next={next} onDone={() => {}} /> : <Link href="/course" className="button">The course</Link>}
        {!passed ? (
          <button type="button" className="button button-quiet" onClick={onAgain}>Try again</button>
        ) : null}
      </div>
    </section>
  );
}
