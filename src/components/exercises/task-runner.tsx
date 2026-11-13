"use client";

import { useState } from "react";
import type { Verdict } from "@/core/answers";
import type { Task } from "@/core/content";
import { speak, useHasVoice } from "@/lib/speech";
import { ChoiceBoard, GapsBoard, MatchBoard, OrderBoard, TrueFalseBoard } from "./boards";

const TITLE: Record<Task["kind"], string> = {
  choice: "Choose the answer",
  truefalse: "True or false?",
  order: "Put it in order",
  match: "Match them up",
  gaps: "Listen and fill the gaps",
  heard: "Which word do you hear?",
};

/**
 * Runs comprehension tasks one at a time with calm feedback, then reports
 * how many were right. Listening tasks get a play button for their line.
 */
export function TaskRunner({
  tasks,
  lang,
  seed,
  lines,
  rate = 0.85,
  onDone,
}: {
  tasks: Task[];
  lang: string;
  seed: string;
  /** The listening lines, for "gaps" and "heard" tasks. */
  lines?: { text: string; translation: string }[];
  rate?: number;
  onDone: (right: number, total: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [right, setRight] = useState(0);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const hasVoice = useHasVoice(lang);
  const task = tasks[index];
  const line = task.kind === "gaps" || task.kind === "heard" ? lines?.[task.line] : undefined;

  function next() {
    const total = right + (verdict === "right" || verdict === "almost" ? 1 : 0);
    if (index + 1 < tasks.length) {
      setRight(total);
      setIndex(index + 1);
      setVerdict(null);
    } else onDone(total, tasks.length);
  }

  return (
    <section className="step-body task" data-kind={task.kind}>
      <p className="review-progress">
        <span className="task-kind">{TITLE[task.kind]}</span>
        <span>
          {index + 1} of {tasks.length}
        </span>
      </p>

      {line && hasVoice ? (
        <div className="button-row">
          <button type="button" className="button button-quiet" onClick={() => speak(lang, line.text, rate)}>
            Play the line
          </button>
          <button type="button" className="button button-quiet" onClick={() => speak(lang, line.text, 0.65)}>
            Slower
          </button>
        </div>
      ) : null}

      <TaskBoard
        key={index}
        task={task}
        lang={lang}
        seed={`${seed}-${index}`}
        lineText={line?.text}
        locked={verdict !== null}
        onCheck={setVerdict}
      />

      {verdict ? (
        <div className="feedback" role="status">
          <p>
            {verdict === "right" ? "Right." : verdict === "almost" ? "Almost: check the accents." : "Not quite."}{" "}
            {explain(task)}
          </p>
          {line ? <p className="example-translation"><span lang={lang}>{line.text}</span> · {line.translation}</p> : null}
          <button type="button" className="button" onClick={next} autoFocus>
            Continue
          </button>
        </div>
      ) : null}
    </section>
  );
}

function explain(task: Task): string {
  switch (task.kind) {
    case "choice":
      return `It's "${task.options[task.answer]}".`;
    case "truefalse":
      return `It's ${task.answer ? "true" : "false"}: ${task.translation}`;
    case "heard":
      return `You heard "${task.options[task.answer]}".`;
    default:
      return "";
  }
}

function TaskBoard({
  task,
  lang,
  seed,
  lineText,
  locked,
  onCheck,
}: {
  task: Task;
  lang: string;
  seed: string;
  lineText?: string;
  locked: boolean;
  onCheck: (v: Verdict) => void;
}) {
  switch (task.kind) {
    case "choice":
      return (
        <>
          <p className="exercise-prompt">{task.prompt}</p>
          <ChoiceBoard options={task.options} answer={task.answer} locked={locked} onCheck={onCheck} />
        </>
      );
    case "truefalse":
      return <TrueFalseBoard statement={task.statement} lang={lang} answer={task.answer} locked={locked} onCheck={onCheck} />;
    case "order":
      return (
        <>
          <p className="exercise-prompt">{task.prompt}</p>
          <OrderBoard items={task.items} seed={seed} lang={task.inTarget ? lang : undefined} locked={locked} onCheck={onCheck} />
        </>
      );
    case "match":
      return (
        <>
          <p className="exercise-prompt">{task.prompt}</p>
          <MatchBoard
            pairs={task.pairs}
            seed={seed}
            leftLang={task.leftInTarget ? lang : undefined}
            rightLang={task.rightInTarget ? lang : undefined}
            locked={locked}
            onCheck={onCheck}
          />
        </>
      );
    case "gaps":
      return <GapsBoard text={lineText ?? ""} words={task.words} lang={lang} locked={locked} onCheck={onCheck} />;
    case "heard":
      return (
        <>
          <p className="exercise-prompt">Play the line. Which of these words is in it?</p>
          <ChoiceBoard options={task.options} answer={task.answer} lang={lang} locked={locked} onCheck={onCheck} />
        </>
      );
  }
}
