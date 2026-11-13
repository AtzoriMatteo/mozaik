"use client";

import { LearningTip } from "@/components/learning-tip";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPack } from "@/core/registry";
import type { LanguagePack } from "@/core/language-pack";
import { nextActivity } from "@/core/course";
import {
  countWords, coveredPoints, LONG_ENOUGH, mergeIssues, POINTS_PER_LENGTH, WRITING_LENGTHS, WRITING_REQUIRED,
  type WritingIssue, type WritingTask,
} from "@/core/writing";
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
          Pick a topic and how long you want to write. Finish {WRITING_REQUIRED} of these {tasks.length} to glaze this
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
/* One writing task                                                  */
/* ---------------------------------------------------------------- */

const draftKey = (lang: string, id: string) => `mozaik:writing-draft:${lang}:${id}`;
const LT_KEY = "mozaik:writing-languagetool";
const LENGTH_KEY = "mozaik:writing-length";

function readLocal(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function writeLocal(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage unavailable: drafts last this visit only.
  }
}

export function WritingTaskView({ lang, unitId, taskId }: { lang: string; unitId: string; taskId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = pack.units.find((u) => u.id === unitId)!;
  const task = unit.writing!.find((t) => t.id === taskId)!;
  const progress = useCourseProgress(pack);
  const spelling = useSpelling(pack);
  const lengths = WRITING_LENGTHS[task.level];

  const [lengthIndex, setLengthIndex] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [issues, setIssues] = useState<WritingIssue[] | null>(null);
  const [checking, setChecking] = useState(false);
  const [ltError, setLtError] = useState<string | null>(null);
  const [useLt, setUseLt] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [ticked, setTicked] = useState<Set<number>>(new Set());
  const [finished, setFinished] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [checkedText, setCheckedText] = useState<string | null>(null);

  // Restore the draft, the length and the LanguageTool choice (browser storage, after mount).
  useEffect(() => {
    const saved = readLocal(draftKey(lang, task.id));
    const len = readLocal(LENGTH_KEY);
    /* eslint-disable react-hooks/set-state-in-effect */
    if (saved) {
      try {
        const d = JSON.parse(saved) as { text: string; length: number };
        setText(d.text);
        setLengthIndex(d.length);
      } catch {
        // ignore a broken draft
      }
    } else if (len !== null) setLengthIndex(Number(len));
    setUseLt(readLocal(LT_KEY) === "on");
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [lang, task.id]);

  useEffect(() => {
    if (lengthIndex === null) return;
    writeLocal(draftKey(lang, task.id), JSON.stringify({ text, length: lengthIndex }));
  }, [lang, task.id, text, lengthIndex]);

  const target = lengthIndex === null ? 0 : lengths[lengthIndex];
  const points = lengthIndex === null ? [] : task.points.slice(0, POINTS_PER_LENGTH[lengthIndex]);
  const words = countWords(text);
  const longEnough = words >= Math.round(target * LONG_ENOUGH);
  const auto = coveredPoints(pack, text, points);
  const covered = points.map((_, i) => auto[i] || ticked.has(i));
  const stale = checkedText !== text;

  async function runCheck(value: string) {
    setChecking(true);
    setLtError(null);
    setSelected(null);
    const own = pack.checkWriting?.(value) ?? [];
    const spell = await spelling.check(value);
    let lt: WritingIssue[] = [];
    if (useLt && pack.languageTool) {
      try {
        lt = await checkWithLanguageTool(value, pack.languageTool);
      } catch (e) {
        setLtError((e as Error).message);
      }
    }
    setCheckedText(value);
    setIssues(mergeIssues(own, spell, lt));
    setChecking(false);
  }

  function applyFix(i: WritingIssue) {
    if (i.fix === undefined) return;
    const next = text.slice(0, i.start) + i.fix + text.slice(i.end);
    setText(next);
    void runCheck(next);
  }

  function finish() {
    progress.markWritten(task.id);
    setFinished(true);
    setShowModel(true);
  }

  const others = (unit.writing ?? []).filter((t) => t.id !== task.id && !progress.writingDone.has(t.id));

  return (
    <article className="writing">
      <Link href={`/write/${lang}/${unit.id}`} className="back-link">All writing topics</Link>
      <header className="unit-page-head">
        <p className="reader-unit">
          <span className="level-tag">{task.level}</span>
          {FORM_LABEL[task.form]}
        </p>
        <h1 className="page-title">{task.titleTranslation}</h1>
        <p className="lede">{task.situation}</p>
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
          <section className="write-points" aria-labelledby="points-title">
            <h2 id="points-title">In your text</h2>
            <ul>
              {points.map((pt, i) => (
                <li key={i} data-covered={covered[i] || undefined}>
                  <label>
                    <input
                      type="checkbox"
                      checked={covered[i]}
                      disabled={auto[i]}
                      onChange={(e) => {
                        const next = new Set(ticked);
                        if (e.target.checked) next.add(i);
                        else next.delete(i);
                        setTicked(next);
                      }}
                    />
                    {pt.prompt}
                  </label>
                </li>
              ))}
            </ul>
            <p className="setting-note">Ticks itself when Mozaik spots it; tick it yourself if you said it another way.</p>
          </section>

          <div className="field write-field">
            <label htmlFor="write-text">Your text</label>
            <textarea
              id="write-text"
              lang={lang}
              value={text}
              rows={Math.max(6, Math.round(target / 12))}
              spellCheck={false}
              autoCapitalize="sentences"
              readOnly={finished}
              onChange={(e) => setText(e.target.value)}
            />
            <p className="word-count" data-enough={longEnough || undefined}>
              {words} of about {target} words
              {!longEnough && words > 0 ? `: ${Math.round(target * LONG_ENOUGH) - words} more to go` : ""}
            </p>
          </div>

          {!finished ? (
            <div className="button-row">
              <button type="button" className="button" disabled={checking || words === 0} onClick={() => void runCheck(text)}>
                {checking ? "Checking…" : issues && !stale ? "Check again" : "Check my text"}
              </button>
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
            </div>
          ) : null}

          {spelling.state === "loading" ? <p className="setting-note">Loading the spelling dictionary (once, about 2.5 MB)…</p> : null}
          {spelling.state === "error" ? <p className="error">The spelling dictionary couldn&apos;t load; grammar is still checked.</p> : null}
          {ltError ? <p className="error" role="alert">{ltError}</p> : null}

          {issues ? (
            <Feedback
              pack={pack}
              text={checkedText ?? ""}
              issues={issues}
              stale={stale}
              selected={selected}
              onSelect={setSelected}
              onFix={applyFix}
            />
          ) : null}

          {!finished && issues && !stale ? (
            <div className="finish-box">
              {longEnough ? (
                <>
                  <p>
                    {issues.length === 0 ? "Clean text." : `${issues.length} ${issues.length === 1 ? "thing" : "things"} to look at: fix what you agree with.`}{" "}
                    When you&apos;re happy, finish it.
                  </p>
                  <button type="button" className="button" onClick={finish}>Finish this text</button>
                </>
              ) : (
                <p>Write a little more ({Math.round(target * LONG_ENOUGH)} words or more) to finish this text.</p>
              )}
            </div>
          ) : null}

          {finished ? (
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
          ) : null}

          <p className="setting-note credits">
            Spelling uses the free <a href="https://www.opentaal.org" target="_blank" rel="noopener">OpenTaal</a> word list
            (BSD / CC BY 3.0), right on your device.
          </p>

          {issues ? (
            <details className="model-answer" open={showModel}>
              <summary>See an example text</summary>
              <p lang={lang}>{task.model}</p>
              <p className="setting-note">One way to do it, for the long version. Yours can be completely different.</p>
            </details>
          ) : null}
        </>
      ) : null}
    </article>
  );
}

/* ---------------------------------------------------------------- */

function Feedback({
  pack,
  text,
  issues,
  stale,
  selected,
  onSelect,
  onFix,
}: {
  pack: LanguagePack;
  text: string;
  issues: WritingIssue[];
  stale: boolean;
  selected: number | null;
  onSelect: (i: number | null) => void;
  onFix: (i: WritingIssue) => void;
}) {
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
    <section className="feedback-panel" aria-labelledby="feedback-title" data-stale={stale || undefined}>
      <h2 id="feedback-title">
        {issues.length === 0 ? "No mistakes found" : `${issues.length} to look at`}
      </h2>
      {stale ? <p className="setting-note">You changed the text since this check. Check again to update.</p> : null}
      {issues.length > 0 ? (
        <>
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
                  onClick={() => onSelect(selected === p.issue ? null : p.issue!)}
                >
                  {p.text}
                </button>
              ),
            )}
          </p>
          <ol className="issue-list">
            {issues.map((iss, n) => {
              const href = lessonHref(iss.lesson);
              return (
                <li key={n} data-kind={iss.kind} data-selected={selected === n || undefined}>
                  <p>
                    <span className="issue-kind">{iss.kind === "spelling" ? "Spelling" : iss.kind === "grammar" ? "Grammar" : "Style"}</span>
                    <span lang={pack.code} className="issue-word">{text.slice(iss.start, iss.end)}</span>
                    {iss.fix !== undefined ? (
                      <>
                        {" → "}
                        <span lang={pack.code} className="issue-fix">{iss.fix}</span>
                      </>
                    ) : null}
                  </p>
                  <p className="issue-message">{iss.message}</p>
                  <div className="issue-actions">
                    {iss.fix !== undefined && !stale ? (
                      <button type="button" className="chip" onClick={() => onFix(iss)}>Use this fix</button>
                    ) : null}
                    {href ? <Link href={href} className="link-button" target="_blank">See the lesson</Link> : null}
                    {iss.source === "languagetool" ? <small>from LanguageTool</small> : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </>
      ) : (
        <p>
          Spelling and the A1 grammar Mozaik knows look right: word order, verb forms, de/het, adjective endings,
          geen/niet and more. A teacher might still suggest other words, and that&apos;s fine.
        </p>
      )}
    </section>
  );
}
