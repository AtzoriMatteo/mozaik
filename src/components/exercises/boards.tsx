"use client";

import { useMemo, useState } from "react";
import { judge, shuffleTiles, type Verdict } from "@/core/answers";
import { capsFor } from "@/core/caps";

/**
 * Interactive exercise boards shared by reading, listening, grammar and
 * review. Each one reports a verdict once through `onCheck`, then locks and
 * shows what was right.
 */

type BoardProps = { locked: boolean; onCheck: (v: Verdict) => void };

/* ---------- True or false ---------- */

export function TrueFalseBoard({
  statement,
  lang,
  answer,
  locked,
  onCheck,
}: BoardProps & { statement: string; lang: string; answer: boolean }) {
  const [picked, setPicked] = useState<boolean | null>(null);
  return (
    <div className="board">
      <p className="tf-statement" lang={lang}>{statement}</p>
      <div className="choice-row">
        {[true, false].map((v) => (
          <button
            key={String(v)}
            type="button"
            className="option option-wide"
            disabled={locked}
            data-state={locked ? (v === answer ? "right" : v === picked ? "wrong" : undefined) : undefined}
            onClick={() => {
              setPicked(v);
              onCheck(v === answer ? "right" : "wrong");
            }}
          >
            {v ? "True" : "False"}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Put in order ---------- */

export function OrderBoard({
  items,
  seed,
  lang,
  locked,
  onCheck,
}: BoardProps & { items: string[]; seed: string; lang?: string }) {
  const shuffled = useMemo(() => shuffleTiles(items.map((t, i) => ({ t, i })), seed), [items, seed]);
  const [placed, setPlaced] = useState<number[]>([]);
  const [error, setError] = useState(false);

  return (
    <div className="board">
      <ol className="order-answer" lang={lang}>
        {placed.map((i, pos) => (
          <li key={i}>
            <button
              type="button"
              className="order-item"
              disabled={locked}
              data-state={locked ? (i === pos ? "right" : "wrong") : undefined}
              onClick={() => setPlaced(placed.filter((p) => p !== i))}
            >
              <span className="order-num">{pos + 1}</span>
              {items[i]}
            </button>
          </li>
        ))}
        {placed.length === 0 ? <li className="build-placeholder">Tap what happens first</li> : null}
      </ol>
      {!locked ? (
        <div className="order-pool" lang={lang}>
          {shuffled.map(({ t, i }) =>
            placed.includes(i) ? null : (
              <button
                key={i}
                type="button"
                className="order-item"
                onClick={() => {
                  setPlaced([...placed, i]);
                  setError(false);
                }}
              >
                {t}
              </button>
            ),
          )}
        </div>
      ) : null}
      {error ? <p className="error" role="alert">Place every item first.</p> : null}
      {!locked ? (
        <button
          type="button"
          className="button"
          onClick={() => {
            if (placed.length < items.length) return setError(true);
            onCheck(placed.every((i, pos) => i === pos) ? "right" : "wrong");
          }}
        >
          Check
        </button>
      ) : null}
    </div>
  );
}

/* ---------- Match pairs ---------- */

export function MatchBoard({
  pairs,
  seed,
  leftLang,
  rightLang,
  locked,
  onCheck,
}: BoardProps & { pairs: [string, string][]; seed: string; leftLang?: string; rightLang?: string }) {
  const right = useMemo(() => shuffleTiles(pairs.map((p, i) => ({ t: p[1], i })), seed), [pairs, seed]);
  // links[leftIndex] = rightIndex (index into pairs)
  const [links, setLinks] = useState<(number | null)[]>(() => pairs.map(() => null));
  const [active, setActive] = useState<number | null>(0);
  const [error, setError] = useState(false);

  function pickRight(i: number) {
    if (active === null) return;
    const next = links.map((l) => (l === i ? null : l));
    next[active] = i;
    setLinks(next);
    setError(false);
    const free = next.findIndex((l) => l === null);
    setActive(free >= 0 ? free : null);
  }

  return (
    <div className="board match-board">
      <ul className="match-col">
        {pairs.map(([l], li) => {
          const r = links[li];
          return (
            <li key={li}>
              <button
                type="button"
                className="match-item"
                lang={leftLang}
                disabled={locked}
                aria-pressed={active === li}
                data-state={locked ? (r !== null && pairs[r][1] === pairs[li][1] ? "right" : "wrong") : undefined}
                onClick={() => setActive(active === li ? null : li)}
              >
                <span>{l}</span>
                <span className="match-link" lang={rightLang}>
                  {r !== null ? pairs[r][1] : locked ? "" : active === li ? "pick below" : "…"}
                </span>
              </button>
              {locked && (r === null || pairs[r][1] !== pairs[li][1]) ? (
                <span className="match-fix" lang={rightLang}>{pairs[li][1]}</span>
              ) : null}
            </li>
          );
        })}
      </ul>
      {!locked ? (
        <div className="match-pool" lang={rightLang}>
          {right.map(({ t, i }) => (
            <button
              key={i}
              type="button"
              className="chip"
              disabled={active === null}
              data-used={links.includes(i) || undefined}
              onClick={() => pickRight(i)}
            >
              {t}
            </button>
          ))}
        </div>
      ) : null}
      {!locked ? (
        <p className="step-hint">{active === null ? "Tap an item on the left." : "Now tap its match."}</p>
      ) : null}
      {error ? <p className="error" role="alert">Connect every item first.</p> : null}
      {!locked ? (
        <button
          type="button"
          className="button"
          onClick={() => {
            if (links.some((l) => l === null)) return setError(true);
            onCheck(links.every((l, i) => l !== null && pairs[l][1] === pairs[i][1]) ? "right" : "wrong");
          }}
        >
          Check
        </button>
      ) : null}
    </div>
  );
}

/* ---------- Sort into groups ---------- */

export function SortBoard({
  groups,
  items,
  lang,
  locked,
  onCheck,
}: BoardProps & { groups: string[]; items: [string, number][]; lang: string }) {
  const [picks, setPicks] = useState<(number | null)[]>(() => items.map(() => null));
  const [error, setError] = useState(false);
  return (
    <div className="board">
      <ul className="sort-list">
        {items.map(([word, group], i) => (
          <li key={word} data-state={locked ? (picks[i] === group ? "right" : "wrong") : undefined}>
            <span className="sort-word" lang={lang}>{word}</span>
            <span className="segmented" role="group" aria-label={`Group for ${word}`}>
              {groups.map((g, gi) => (
                <button
                  key={g}
                  type="button"
                  lang={lang}
                  disabled={locked}
                  aria-pressed={picks[i] === gi}
                  data-answer={locked && gi === group ? true : undefined}
                  onClick={() => {
                    setPicks(picks.map((p, j) => (j === i ? gi : p)));
                    setError(false);
                  }}
                >
                  {g}
                </button>
              ))}
            </span>
          </li>
        ))}
      </ul>
      {error ? <p className="error" role="alert">Sort every word first.</p> : null}
      {!locked ? (
        <button
          type="button"
          className="button"
          onClick={() => {
            if (picks.some((p) => p === null)) return setError(true);
            onCheck(picks.every((p, i) => p === items[i][1]) ? "right" : "wrong");
          }}
        >
          Check
        </button>
      ) : null}
    </div>
  );
}

/* ---------- Spot the mistake ---------- */

export function SpotBoard({
  sentence,
  wrong,
  fix,
  lang,
  locked,
  onCheck,
}: BoardProps & { sentence: string; wrong: string; fix: string[]; lang: string }) {
  const words = sentence.split(" ");
  const wrongIndex = words.findIndex((w) => w.replace(/[.,!?"]/g, "") === wrong);
  const [picked, setPicked] = useState<number | null>(null);
  const [typed, setTyped] = useState("");
  const before = picked === null ? "" : words.slice(0, picked).join(" ");

  return (
    <div className="board">
      <p className="spot-sentence" lang={lang}>
        {words.map((w, i) => (
          <button
            key={i}
            type="button"
            className="spot-word"
            disabled={locked || (picked !== null && picked === wrongIndex)}
            aria-pressed={picked === i}
            data-state={
              locked ? (i === wrongIndex ? "right" : i === picked ? "wrong" : undefined) : picked === i && i !== wrongIndex ? "wrong" : undefined
            }
            onClick={() => {
              setPicked(i);
              if (i !== wrongIndex) onCheck("wrong");
            }}
          >
            {w}
          </button>
        ))}
      </p>
      {picked === wrongIndex && !locked ? (
        <div className="field">
          <label htmlFor="spot-fix">Right: what should it be?</label>
          <input
            id="spot-fix"
            className="gap-input gap-input-wide"
            lang={lang}
            value={typed}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize={capsFor(before)}
            spellCheck={false}
            autoFocus
            onChange={(e) => setTyped(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && typed.trim()) onCheck(judge(typed, fix));
            }}
          />
          <button type="button" className="button" onClick={() => typed.trim() && onCheck(judge(typed, fix))}>
            Check
          </button>
        </div>
      ) : null}
      {picked === null && !locked ? <p className="step-hint">Tap the word that&apos;s wrong.</p> : null}
    </div>
  );
}

/* ---------- Gaps in a line (listening) ---------- */

/** Splits `text` around the given words (first occurrence each, in order). */
export function splitGaps(text: string, words: string[]): { parts: string[]; gaps: string[] } {
  const parts: string[] = [];
  const gaps: string[] = [];
  let rest = text;
  for (const w of words) {
    const re = new RegExp(`(^|[^\\p{L}])(${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(?![\\p{L}])`, "u");
    const m = re.exec(rest);
    if (!m) continue;
    const start = m.index + m[1].length;
    parts.push(rest.slice(0, start));
    gaps.push(m[2]);
    rest = rest.slice(start + m[2].length);
  }
  parts.push(rest);
  return { parts, gaps };
}

export function GapsBoard({
  text,
  words,
  lang,
  locked,
  onCheck,
}: BoardProps & { text: string; words: string[]; lang: string }) {
  const { parts, gaps } = useMemo(() => splitGaps(text, words), [text, words]);
  const [typed, setTyped] = useState<string[]>(() => gaps.map(() => ""));
  const [verdicts, setVerdicts] = useState<Verdict[] | null>(null);
  const [error, setError] = useState(false);

  function check() {
    if (typed.some((t) => !t.trim())) return setError(true);
    const v = gaps.map((g, i) => judge(typed[i], [g]));
    setVerdicts(v);
    onCheck(v.every((x) => x === "right") ? "right" : v.every((x) => x !== "wrong") ? "almost" : "wrong");
  }

  return (
    <div className="board">
      <p className="exercise-sentence" lang={lang}>
        {parts.map((p, i) => (
          <span key={i}>
            {p}
            {i < gaps.length ? (
              locked && verdicts?.[i] !== "right" ? (
                <mark className="gap-fixed">{gaps[i]}</mark>
              ) : (
                <input
                  className="gap-input"
                  lang={lang}
                  value={typed[i]}
                  readOnly={locked}
                  size={Math.max(4, gaps[i].length + 1)}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize={capsFor(parts.slice(0, i + 1).join(" "))}
                  spellCheck={false}
                  aria-label={`Missing word ${i + 1}`}
                  data-verdict={verdicts?.[i]}
                  onChange={(e) => {
                    setTyped(typed.map((t, j) => (j === i ? e.target.value : t)));
                    setError(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !locked) check();
                  }}
                />
              )
            ) : null}
          </span>
        ))}
      </p>
      {error ? <p className="error" role="alert">Fill every gap first.</p> : null}
      {!locked ? (
        <button type="button" className="button" onClick={check}>
          Check
        </button>
      ) : null}
    </div>
  );
}

/* ---------- Which word did you hear? ---------- */

export function ChoiceBoard({
  options,
  answer,
  lang,
  locked,
  onCheck,
}: BoardProps & { options: string[]; answer: number; lang?: string }) {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div className="board">
      <div className="option-stack" lang={lang}>
        {options.map((o, i) => (
          <button
            key={o}
            type="button"
            className="option"
            disabled={locked}
            data-state={locked ? (i === answer ? "right" : i === picked ? "wrong" : undefined) : undefined}
            onClick={() => {
              setPicked(i);
              onCheck(i === answer ? "right" : "wrong");
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
