"use client";

import { LearningTip } from "@/components/learning-tip";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPack } from "@/core/registry";
import type { LanguagePack } from "@/core/language-pack";
import { nextActivity } from "@/core/course";
import {
  countWords, cueHints, guidanceFor, lengthsFor, LONG_ENOUGH, mergeIssues, noVerbIssues, pointExamples, pointStatus, POINTS_PER_LENGTH,
  WRITING_REQUIRED, type PointStatus, type WritingIssue, type WritingTask,
} from "@/core/writing";
import { unitWords } from "@/core/unit-words";
import type { Unit } from "@/core/content";
import { askForFeedback, AI_KEY_STORAGE, type AiCorrection, type AiFeedback } from "@/lib/writing/ai-feedback";
import { SpeakButton } from "@/components/speak-button";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { useSpelling } from "@/lib/writing/use-spelling";
import { checkWithLanguageTool } from "@/lib/writing/languagetool";
import { NextActivityLink } from "@/components/course/next-activity-link";

const FORM_LABEL: Record<WritingTask["form"], string> = {
  message: "Message",
  email: "Email",
  form: "Note",
  description: "Description",
  story: "Story",
  opinion: "Opinion",
  diary: "Diary",
};

/* ---------------------------------------------------------------- */
/* A unit's writing topics                                           */
/* ---------------------------------------------------------------- */

export function WritingHub({ lang, unitId }: { lang: string; unitId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = pack.units.find((u) => u.id === unitId)!;
  const progress = useCourseProgress(pack);
  const tasks = unit.writing ?? [];
  const done = tasks.filter((t) => progress.writingDone.has(t.id)).length;

  return (
    <article className="writing">
      <Link href={`/course/${lang}/${unit.id}`} className="back-link">Back to {unit.titleTranslation}</Link>
      <header className="unit-page-head">
        <p className="reader-unit">
          <span className="level-tag">{unit.level}</span>
          Writing
        </p>
        <h1 className="page-title">Write about…</h1>
        <p className="lede">
          Pick a topic and how long you want to write. Each topic shows you an example and useful words first, then you
          write one point at a time. Finish {WRITING_REQUIRED} of these {tasks.length} to glaze this
          unit&apos;s writing tile. {done >= WRITING_REQUIRED ? "Done: the tile is yours." : `${done} of ${WRITING_REQUIRED} so far.`}
        </p>
      </header>
      <ol className="activity-list" data-skill="write">
        {tasks.map((t) => (
          <li key={t.id}>
            <Link href={`/write/${lang}/${unit.id}/${t.id}`} className="activity-row" data-done={progress.writingDone.has(t.id) || undefined}>
              <span className="activity-title">{t.titleTranslation}</span>
              <span className="activity-meta">
                <span>{FORM_LABEL[t.form]}</span>
                <span>{t.situation}</span>
              </span>
              {progress.writingDone.has(t.id) ? (
                <span className="activity-done"><span className="sr-only">Done</span></span>
              ) : null}
            </Link>
          </li>
        ))}
      </ol>
      <LearningTip pack={pack} place="write" />
    </article>
  );
}

/* ---------------------------------------------------------------- */
/* One writing task: get ready, write point by point, check, compare */
/* ---------------------------------------------------------------- */

const draftKey = (lang: string, id: string) => `mozaik:writing-draft:${lang}:${id}`;
const namesKey = (lang: string) => `mozaik:writing-names:${lang}`;
const LT_KEY = "mozaik:writing-languagetool";
const AI_ON_KEY = "mozaik:writing-ai";
const LENGTH_KEY = "mozaik:writing-length";

function readLocal(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function writeLocal(key: string, value: string | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch {
    // Storage unavailable: settings last this visit only.
  }
}

const POINTS = 6;
const blank = () => Array.from({ length: POINTS }, () => "");

/**
 * The words this topic needs: the ones its example text and frames use,
 * from this unit and the units before (this unit's first). Skips tiny words.
 */
function topicWords(pack: LanguagePack, unit: Unit, task: WritingTask) {
  const text = [task.model, ...task.points.map((p) => p.frame ?? "")].join(" ");
  const used = new Set(
    pack
      .tokenize(text)
      .filter((t) => t.kind === "word")
      .flatMap((t) => [t.normalized, (pack.lexicon[t.normalized]?.base ?? "").toLowerCase(), pack.verbFor?.(t.normalized) ?? ""]),
  );
  const upTo = pack.units.slice(0, pack.units.indexOf(unit) + 1).reverse();
  return upTo
    .flatMap((u) => unitWords(pack, u))
    .filter((w) => used.has(w.lemma) && (w.group !== "other" || w.unitId === unit.id))
    .slice(0, 24);
}

/** Names in the task itself (capitals mid-sentence): never spelling mistakes. */
function taskNames(pack: LanguagePack, task: WritingTask): Set<string> {
  const out = new Set<string>();
  for (const text of [task.situation, task.model]) {
    let start = true;
    for (const t of pack.tokenize(text)) {
      if (t.kind === "punctuation" && /[.!?:]/.test(t.text)) start = true;
      if (t.kind !== "word") continue;
      if (!start && /^\p{Lu}/u.test(t.text)) out.add(t.normalized);
      start = false;
    }
  }
  return out;
}

type Checked = {
  parts: string[];
  issues: WritingIssue[][];
  status: PointStatus[];
  ai: AiFeedback | null;
};

const STATUS_NOTE: Record<Exclude<PointStatus, "ok">, string> = {
  empty: "Nothing here yet.",
  "no-sentence": "This point needs at least one full sentence: who does what?",
  missing: "Mozaik can't see this point in your sentence yet.",
  copied: "That's the example word for word. Keep the pattern, but make it about you.",
};

export function WritingTaskView({ lang, unitId, taskId }: { lang: string; unitId: string; taskId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = pack.units.find((u) => u.id === unitId)!;
  const task = unit.writing!.find((t) => t.id === taskId)!;
  const progress = useCourseProgress(pack);
  const spelling = useSpelling(pack);
  const lengths = lengthsFor(pack, task);
  // Cheap to work out (unit words are cached), so plain calls rather than memos.
  const examples = pointExamples(pack, task);
  const keyWords = topicWords(pack, unit, task);
  const fromTask = taskNames(pack, task);
  const guide = guidanceFor(pack, task);
  const [showEnglish, setShowEnglish] = useState(false);

  const [lengthIndex, setLengthIndex] = useState<number | null>(null);
  const [parts, setParts] = useState<string[]>(blank);
  const [checked, setChecked] = useState<Checked | null>(null);
  const [checking, setChecking] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [useLt, setUseLt] = useState(false);
  const [useAi, setUseAi] = useState(false);
  const [aiKey, setAiKey] = useState("");
  const [names, setNames] = useState<Set<string>>(new Set());
  const [shown, setShown] = useState<Set<number>>(new Set());
  const [override, setOverride] = useState<Set<number>>(new Set());
  const [finished, setFinished] = useState(false);

  // Restore the draft and settings (browser storage, after mount).
  useEffect(() => {
    const saved = readLocal(draftKey(lang, task.id));
    const len = readLocal(LENGTH_KEY);
    /* eslint-disable react-hooks/set-state-in-effect */
    if (saved) {
      try {
        const d = JSON.parse(saved) as { parts?: string[]; text?: string; length: number };
        // Drafts from before point-by-point writing: the whole text goes into the first box.
        setParts(d.parts ? [...d.parts, ...blank()].slice(0, POINTS) : [d.text ?? "", ...blank()].slice(0, POINTS));
        setLengthIndex(d.length);
      } catch {
        // ignore a broken draft
      }
    } else if (len !== null) setLengthIndex(Number(len));
    setUseLt(readLocal(LT_KEY) === "on");
    const key = readLocal(AI_KEY_STORAGE) ?? "";
    setAiKey(key);
    setUseAi(!!key && readLocal(AI_ON_KEY) !== "off");
    try {
      setNames(new Set(JSON.parse(readLocal(namesKey(lang)) ?? "[]") as string[]));
    } catch {
      // ignore
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [lang, task.id]);

  useEffect(() => {
    if (lengthIndex === null) return;
    writeLocal(draftKey(lang, task.id), JSON.stringify({ parts, length: lengthIndex }));
  }, [lang, task.id, parts, lengthIndex]);

  const target = lengthIndex === null ? 0 : lengths[lengthIndex];
  const count = lengthIndex === null ? 0 : POINTS_PER_LENGTH[lengthIndex];
  const points = task.points.slice(0, count);
  const mine = parts.slice(0, count);
  const words = mine.reduce((n, p) => n + countWords(p), 0);
  const longEnough = words >= Math.round(target * LONG_ENOUGH);
  const stale = !checked || checked.parts.slice(0, count).join("\u0000") !== mine.join("\u0000") || checked.status.length !== count;
  const covered = points.map((_, i) => {
    if (!checked || stale) return false;
    if (override.has(i)) return true;
    if (checked.status[i] === "copied") return false;
    return checked.ai ? checked.ai.points[i]?.said : checked.status[i] === "ok";
  });
  const allCovered = covered.every(Boolean);

  async function runCheck(values: string[], extraNames = names) {
    setChecking(true);
    setErrors([]);
    const boxes = values.slice(0, count);
    // One text for the checkers, each box ending in a full stop, then the issues go back to their boxes.
    const offsets: number[] = [];
    let joined = "";
    for (const b of boxes) {
      offsets.push(joined.length);
      joined += b + (b.trim() && !/[.!?]\s*$/.test(b) ? "." : "") + "\n";
    }
    const ignore = new Set([...fromTask, ...extraNames]);
    const errs: string[] = [];
    // A missing verb matters more than a capital letter in the same place, so it comes first.
    const own = [...noVerbIssues(pack, joined), ...(pack.checkWriting?.(joined) ?? [])];
    const spell = await spelling.check(joined, ignore);
    let lt: WritingIssue[] = [];
    if (useLt && pack.languageTool) {
      try {
        lt = await checkWithLanguageTool(joined, pack.languageTool);
      } catch (e) {
        errs.push((e as Error).message);
      }
    }
    // A name the learner marked shouldn't come back from LanguageTool either.
    const isName = (i: WritingIssue) => i.kind === "spelling" && ignore.has(joined.slice(i.start, i.end).toLowerCase());
    const all = mergeIssues(own, spell, lt.filter((i) => !isName(i)));
    const issues = boxes.map((b, k) =>
      all
        // An issue may reach into the full stop added after the box: cut it at the box's end.
        .filter((i) => i.start >= offsets[k] && i.start < offsets[k] + b.length)
        .map((i) => ({ ...i, start: i.start - offsets[k], end: Math.min(i.end, offsets[k] + b.length) - offsets[k] })),
    );
    const status = boxes.map((b, k) => pointStatus(pack, b, task.points[k], examples[k]));
    let ai: AiFeedback | null = null;
    if (useAi && aiKey) {
      try {
        ai = await askForFeedback(aiKey, pack, task, task.points.slice(0, count).map((p) => p.prompt), boxes);
      } catch (e) {
        errs.push((e as Error).message);
      }
    }
    setChecked({ parts: [...values], issues, status, ai });
    setErrors(errs);
    setChecking(false);
  }

  function edit(i: number, value: string) {
    setParts((p) => p.map((x, k) => (k === i ? value : x)));
    setOverride((o) => {
      if (!o.has(i)) return o;
      const next = new Set(o);
      next.delete(i);
      return next;
    });
  }

  function applyFix(k: number, issue: WritingIssue) {
    if (issue.fix === undefined) return;
    const next = parts.map((p, i) => (i === k ? p.slice(0, issue.start) + issue.fix + p.slice(issue.end) : p));
    setParts(next);
    void runCheck(next);
  }

  function markName(word: string) {
    const next = new Set(names).add(word.toLowerCase());
    setNames(next);
    writeLocal(namesKey(lang), JSON.stringify([...next]));
    void runCheck(parts, next);
  }

  function finish() {
    progress.markWritten(task.id);
    setFinished(true);
  }

  const others = (unit.writing ?? []).filter((t) => t.id !== task.id && !progress.writingDone.has(t.id));
  const issueCount = checked && !stale ? checked.issues.reduce((n, l) => n + l.length, 0) : 0;
  const todo = points.map((p, i) => (covered[i] ? null : i + 1)).filter((x): x is number => x !== null);

  return (
    <article className="writing">
      <Link href={`/write/${lang}/${unit.id}`} className="back-link">All writing topics</Link>
      <header className="unit-page-head">
        <p className="reader-unit">
          <span className="level-tag">{task.level}</span>
          {FORM_LABEL[task.form]}
        </p>
        <h1 className="page-title">{task.titleTranslation}</h1>
        {guide.instructions !== "en" && task.situationTarget ? (
          <>
            <p className="lede" lang={lang}>{task.situationTarget}</p>
            {guide.instructions === "both" || showEnglish ? <p className="lede-translation">{task.situation}</p> : null}
            {guide.instructions === "target" ? (
              <button type="button" className="link-button" onClick={() => setShowEnglish((v) => !v)}>
                {showEnglish ? "Hide the English" : "Show in English"}
              </button>
            ) : null}
          </>
        ) : (
          <p className="lede">{task.situation}</p>
        )}
      </header>

      <fieldset className="length-picker">
        <legend>How much do you want to write?</legend>
        <div className="length-options">
          {lengths.map((n, i) => (
            <button
              key={n}
              type="button"
              aria-pressed={lengthIndex === i}
              onClick={() => {
                setLengthIndex(i);
                writeLocal(LENGTH_KEY, String(i));
              }}
            >
              <strong>about {n} words</strong>
              <span>{["Short", "Medium", "Long"][i]}: {POINTS_PER_LENGTH[i]} things to say</span>
            </button>
          ))}
        </div>
      </fieldset>

      {lengthIndex !== null ? (
        <>
          <section className="write-ready" aria-labelledby="ready-title">
            <h2 id="ready-title">Get ready</h2>
            <p>
              Write a sentence or two for each point below. Stuck? Open its example, keep the pattern and make it about you.
            </p>
            {keyWords.length > 0 ? (
              <details>
                <summary>Words for this topic ({keyWords.length})</summary>
                <ul className="ready-words">
                  {keyWords.map((w) => (
                    <li key={w.lemma}>
                      <span lang={lang}>{w.label}</span> <small>{w.meaning}</small>
                    </li>
                  ))}
                </ul>
                <Link href={`/words/${lang}/${unit.id}`} className="link-button" target="_blank">
                  All words of this unit
                </Link>
              </details>
            ) : null}
            <details>
              <summary>Read a whole example text first</summary>
              <p lang={lang} className="ready-model">{task.model}</p>
              <p className="setting-note">The long version. Read it, then close it and write your own.</p>
            </details>
          </section>

          <ol className="write-points">
            {points.map((pt, i) => {
              const status = checked && !stale ? checked.status[i] : null;
              const ai = checked && !stale ? checked.ai?.points[i] : undefined;
              const open = shown.has(i);
              const hints = cueHints(pt).map((c) => ({ c, m: pack.lexicon[c]?.meaning }));
              return (
                <li key={i} className="write-point" data-covered={covered[i] || undefined} data-status={status ?? undefined}>
                  <label htmlFor={`point-${i}`} className="write-point-prompt">
                    <span className="write-point-num" aria-hidden="true">{i + 1}</span>
                    {guide.instructions !== "en" && pt.promptTarget ? (
                      <span>
                        <span lang={lang}>{pt.promptTarget}</span>
                        {guide.instructions === "both" || showEnglish ? <small className="prompt-translation">{pt.prompt}</small> : null}
                      </span>
                    ) : (
                      pt.prompt
                    )}
                    {covered[i] ? <span className="sr-only"> (done)</span> : null}
                  </label>
                  {pt.frame && guide.frames === "shown" && !finished ? (
                    <Frame lang={lang} frame={pt.frame} onUse={parts[i].trim() ? undefined : () => edit(i, pt.frame!)} />
                  ) : null}
                  <textarea
                    id={`point-${i}`}
                    lang={lang}
                    value={parts[i]}
                    rows={2}
                    spellCheck={false}
                    autoCapitalize="sentences"
                    readOnly={finished}
                    onChange={(e) => edit(i, e.target.value)}
                  />
                  {examples[i] && (guide.examples || (pt.frame && guide.frames === "tap")) ? (
                    <button
                      type="button"
                      className="link-button write-hint-toggle"
                      aria-expanded={open}
                      onClick={() => setShown((s) => { const n = new Set(s); if (open) n.delete(i); else n.add(i); return n; })}
                    >
                      {open ? "Hide the help" : guide.examples ? "Show an example" : "Show a frame"}
                    </button>
                  ) : null}
                  {open ? (
                    <div className="write-example">
                      {pt.frame && guide.frames === "tap" ? (
                        <Frame lang={lang} frame={pt.frame} onUse={parts[i].trim() || finished ? undefined : () => edit(i, pt.frame!)} />
                      ) : null}
                      {guide.examples ? (
                        <p lang={lang}>
                          {examples[i]} <SpeakButton lang={lang} text={examples[i]} label="Hear the example" />
                        </p>
                      ) : null}
                      {hints.length ? (
                        <p className="setting-note">
                          Useful words:{" "}
                          {hints.map((h, k) => (
                            <span key={h.c}>
                              {k ? " · " : ""}
                              <span lang={lang}>{h.c}</span>
                              {h.m ? ` (${h.m})` : ""}
                            </span>
                          ))}
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {status && status !== "ok" && !override.has(i) && !(ai?.said && status !== "copied") ? (
                    <p className="write-point-note">
                      {STATUS_NOTE[status]}
                      {status === "missing" && hints.length ? (
                        <> Words like <span lang={lang}>{hints.map((h) => h.c).join(", ")}</span> would show it.</>
                      ) : null}
                      {(status === "missing" || status === "no-sentence") && !finished ? (
                        <>
                          {" "}
                          <button type="button" className="link-button" onClick={() => setOverride((o) => new Set(o).add(i))}>
                            I did say it
                          </button>
                        </>
                      ) : null}
                    </p>
                  ) : null}
                  {ai && ai.note ? <p className="write-point-note ai-note" data-said={ai.said || undefined}><span className="issue-kind">AI</span>{ai.note}</p> : null}
                  {checked && !stale && checked.issues[i].length ? (
                    <Marks
                      pack={pack}
                      text={checked.parts[i]}
                      issues={checked.issues[i]}
                      onFix={(iss) => applyFix(i, iss)}
                      onName={markName}
                      readOnly={finished}
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>

          <p className="word-count" data-enough={longEnough || undefined}>
            {words} of about {target} words
            {!longEnough && words > 0 ? `: ${Math.round(target * LONG_ENOUGH) - words} more to go` : ""}
          </p>

          {!finished ? (
            <div className="check-row">
              <button type="button" className="button" disabled={checking || words === 0} onClick={() => void runCheck(parts)}>
                {checking ? "Checking…" : checked && !stale ? "Check again" : "Check my text"}
              </button>
              {pack.languageTool ? (
                <label className="check lt-toggle">
                  <input
                    type="checkbox"
                    checked={useLt}
                    onChange={(e) => {
                      setUseLt(e.target.checked);
                      writeLocal(LT_KEY, e.target.checked ? "on" : "off");
                    }}
                  />
                  Also check with{" "}
                  <a href="https://languagetool.org" target="_blank" rel="noopener">LanguageTool</a>
                  <small> (sends your text to languagetool.org)</small>
                </label>
              ) : null}
              {aiKey ? (
                <label className="check lt-toggle">
                  <input
                    type="checkbox"
                    checked={useAi}
                    onChange={(e) => {
                      setUseAi(e.target.checked);
                      writeLocal(AI_ON_KEY, e.target.checked ? "on" : "off");
                    }}
                  />
                  Also ask the AI teacher
                  <small> (meaning and naturalness, with your own key)</small>
                </label>
              ) : null}
            </div>
          ) : null}

          {spelling.state === "loading" ? <p className="setting-note">Loading the spelling dictionary (once)…</p> : null}
          {spelling.state === "error" ? <p className="error">The spelling dictionary couldn&apos;t load; grammar is still checked.</p> : null}
          {errors.map((e) => <p key={e} className="error" role="alert">{e}</p>)}

          {checked && !stale && checked.ai ? <AiPanel lang={lang} ai={checked.ai} /> : null}

          {!finished && checked && !stale ? (
            <div className="finish-box">
              {allCovered && longEnough ? (
                <>
                  <p>
                    Every point is there.{" "}
                    {issueCount === 0 ? "No mistakes found." : `${issueCount} ${issueCount === 1 ? "thing" : "things"} marked: fix what you agree with.`}{" "}
                    When you&apos;re happy, finish it.
                  </p>
                  <button type="button" className="button" onClick={finish}>Finish this text</button>
                </>
              ) : (
                <p>
                  {todo.length ? `Still to do: point ${todo.join(", ")}. ` : ""}
                  {!longEnough ? `Write a little more (${Math.round(target * LONG_ENOUGH)} words or more). ` : ""}
                  {issueCount ? `${issueCount} ${issueCount === 1 ? "thing" : "things"} marked in your sentences.` : ""}
                </p>
              )}
            </div>
          ) : null}

          {finished ? (
            <>
              <Compare lang={lang} points={points.map((p) => p.prompt)} mine={checked?.parts ?? parts} examples={examples} />
              <div className="finish-box">
                <p>
                  <strong>Done.</strong>{" "}
                  {(unit.writing ?? []).filter((t) => progress.writingDone.has(t.id)).length >= WRITING_REQUIRED
                    ? "This unit's writing tile is glazed."
                    : `One more topic in this unit glazes its writing tile.`}
                </p>
                <div className="button-row">
                  {others[0] ? (
                    <Link href={`/write/${lang}/${unit.id}/${others[0].id}`} className="button">
                      Next topic: {others[0].titleTranslation}
                    </Link>
                  ) : (
                    <NextActivityLink pack={pack} next={nextActivity(pack, { kind: "write", id: unit.id })} onDone={() => {}} />
                  )}
                </div>
              </div>
            </>
          ) : null}

          <AiSettings
            aiKey={aiKey}
            onSave={(k) => {
              setAiKey(k);
              writeLocal(AI_KEY_STORAGE, k || null);
              setUseAi(!!k);
              writeLocal(AI_ON_KEY, k ? "on" : null);
            }}
          />

          <p className="setting-note credits">
            Grammar rules are Mozaik&apos;s own; spelling uses a free dictionary, right on your device. Rules check that each
            point is said in a real sentence, not whether it sounds natural: for that, use the AI teacher or ask a native
            speaker.
          </p>
        </>
      ) : null}
    </article>
  );
}

/* ---------------------------------------------------------------- */

/** A sentence frame: the learner's own parts shown as blanks. */
function Frame({ lang, frame, onUse }: { lang: string; frame: string; onUse?: () => void }) {
  const parts = frame.split("…");
  return (
    <div className="write-frame">
      <p lang={lang}>
        {parts.map((p, i) => (
          <span key={i}>
            {p}
            {i < parts.length - 1 ? <span className="frame-gap" aria-label="your words">…</span> : null}
          </span>
        ))}
      </p>
      {onUse ? (
        <button type="button" className="chip" onClick={onUse}>
          Start from this
        </button>
      ) : null}
    </div>
  );
}

/** One box's text with its mistakes marked, and the list of them. */
function Marks({
  pack,
  text,
  issues,
  onFix,
  onName,
  readOnly,
}: {
  pack: LanguagePack;
  text: string;
  issues: WritingIssue[];
  onFix: (i: WritingIssue) => void;
  onName: (word: string) => void;
  readOnly: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const parts: { text: string; issue?: number }[] = [];
  let pos = 0;
  issues.forEach((iss, n) => {
    if (iss.start > pos) parts.push({ text: text.slice(pos, iss.start) });
    parts.push({ text: text.slice(iss.start, iss.end), issue: n });
    pos = iss.end;
  });
  if (pos < text.length) parts.push({ text: text.slice(pos) });

  const lessonHref = (id?: string) =>
    id && pack.grammar.some((g) => g.id === id && g.lesson) ? `/grammar/${pack.code}/${id}` : null;

  return (
    <div className="point-marks">
      <p className="marked-text" lang={pack.code}>
        {parts.map((p, i) =>
          p.issue === undefined ? (
            <span key={i}>{p.text}</span>
          ) : (
            <button
              key={i}
              type="button"
              className="mark"
              data-kind={issues[p.issue].kind}
              aria-pressed={selected === p.issue}
              onClick={() => setSelected(selected === p.issue ? null : p.issue!)}
            >
              {p.text}
            </button>
          ),
        )}
      </p>
      <ol className="issue-list">
        {issues.map((iss, n) => {
          const href = lessonHref(iss.lesson);
          const word = text.slice(iss.start, iss.end);
          return (
            <li key={n} data-kind={iss.kind} data-selected={selected === n || undefined}>
              <p>
                <span className="issue-kind">{iss.kind === "spelling" ? "Spelling" : iss.kind === "grammar" ? "Grammar" : "Style"}</span>
                {iss.rule === "no-verb" ? null : <span lang={pack.code} className="issue-word">{word}</span>}
                {iss.fix !== undefined ? (
                  <>
                    {" → "}
                    <span lang={pack.code} className="issue-fix">{iss.fix}</span>
                  </>
                ) : null}
              </p>
              <p className="issue-message">{iss.message}</p>
              <div className="issue-actions">
                {iss.fix !== undefined && !readOnly ? (
                  <button type="button" className="chip" onClick={() => onFix(iss)}>Use this fix</button>
                ) : null}
                {iss.kind === "spelling" && !readOnly && !/\s/.test(word) ? (
                  <button type="button" className="chip" onClick={() => onName(word)}>It&apos;s a name</button>
                ) : null}
                {href ? <Link href={href} className="link-button" target="_blank">See the lesson</Link> : null}
                {iss.source === "languagetool" ? <small>from LanguageTool</small> : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

const AI_KIND: Record<AiCorrection["kind"], string> = {
  grammar: "Grammar",
  word: "Word choice",
  meaning: "Meaning",
  natural: "Sounds more natural",
};

function AiPanel({ lang, ai }: { lang: string; ai: AiFeedback }) {
  return (
    <section className="feedback-panel ai-panel" aria-labelledby="ai-title">
      <h2 id="ai-title">AI teacher</h2>
      {ai.summary ? <p>{ai.summary}</p> : null}
      {ai.corrections.length ? (
        <ol className="issue-list">
          {ai.corrections.map((c, i) => (
            <li key={i} data-kind={c.kind === "natural" ? "style" : "grammar"}>
              <p>
                <span className="issue-kind">{AI_KIND[c.kind]}</span>
                <span lang={lang} className="issue-word">{c.original}</span>
                {" → "}
                <span lang={lang} className="issue-fix">{c.corrected}</span>
              </p>
              {c.why ? <p className="issue-message">{c.why}</p> : null}
            </li>
          ))}
        </ol>
      ) : null}
      {ai.natural ? (
        <details>
          <summary>Your text as a native speaker might write it</summary>
          <p lang={lang} className="ready-model">
            {ai.natural} <SpeakButton lang={lang} text={ai.natural} label="Hear it" />
          </p>
        </details>
      ) : null}
      <p className="setting-note">AI can be wrong too. If something looks odd, check the lesson or ask a native speaker.</p>
    </section>
  );
}

function Compare({ lang, points, mine, examples }: { lang: string; points: string[]; mine: string[]; examples: string[] }) {
  return (
    <section className="compare" aria-labelledby="compare-title">
      <h2 id="compare-title">Compare with the example</h2>
      <ol>
        {points.map((p, i) => (
          <li key={i}>
            <p className="compare-prompt">{p}</p>
            <div className="compare-pair">
              <div>
                <span className="compare-label">You</span>
                <p lang={lang}>{mine[i]?.trim() || "—"}</p>
              </div>
              {examples[i] ? (
                <div>
                  <span className="compare-label">Example</span>
                  <p lang={lang}>{examples[i]}</p>
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
      <p className="setting-note">One way to say each point. Yours can be completely different and still right.</p>
    </section>
  );
}

function AiSettings({ aiKey, onSave }: { aiKey: string; onSave: (key: string) => void }) {
  const [draft, setDraft] = useState("");
  return (
    <details className="ai-settings">
      <summary>AI teacher (optional){aiKey ? ": on" : ""}</summary>
      <p>
        Mozaik&apos;s own rules check the shape of your sentences. An AI teacher can also tell you whether they mean what
        you wanted and sound natural. It uses your own{" "}
        <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">Anthropic API key</a>, so
        Mozaik stays free: a check costs you a fraction of a cent.
      </p>
      <ul className="setting-note">
        <li>Your key is kept in this browser only. It never goes to Mozaik&apos;s servers or your account.</li>
        <li>When you check, your text goes straight from this browser to Anthropic (Claude Haiku).</li>
      </ul>
      {aiKey ? (
        <div className="button-row">
          <span className="setting-note">Key saved: …{aiKey.slice(-4)}</span>
          <button type="button" className="button button-quiet" onClick={() => onSave("")}>Remove the key</button>
        </div>
      ) : (
        <form
          className="ai-key-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (draft.trim()) onSave(draft.trim());
            setDraft("");
          }}
        >
          <label htmlFor="ai-key">API key</label>
          <input
            id="ai-key"
            type="password"
            autoComplete="off"
            spellCheck={false}
            placeholder="sk-ant-…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <button type="submit" className="button" disabled={!draft.trim().startsWith("sk-")}>Save</button>
        </form>
      )}
    </details>
  );
}
