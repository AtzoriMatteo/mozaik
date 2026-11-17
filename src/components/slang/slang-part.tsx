"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SlangItem, WordHelp } from "@/core/content";
import type { LanguagePack } from "@/core/language-pack";
import { getPack } from "@/core/registry";
import { findSlang, itemsInLine, REGISTER, registerLabel, slangHelp, slangWordHelp } from "@/core/slang";
import { glueTokens } from "@/core/glue";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";
import { useProgress } from "@/lib/progress/use-read-texts";
import { playLines, useHasVoice } from "@/lib/speech";
import { WordPanel } from "@/components/reader/word-panel";
import { TaskRunner } from "@/components/exercises/task-runner";

type WordRef = {
  key: string;
  line: number;
  surface: string;
  normalized: string;
  item: SlangItem | null;
  help: WordHelp | undefined;
};

/**
 * A "Zo praten we echt" part: a chat or a talk in real-life Dutch, with the
 * slang marked, the textbook version one tap away, and what each bit means,
 * who says it and when not to.
 */
export function SlangPartView({ lang, partId }: { lang: string; partId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const part = findSlang(pack, partId)!;
  const unit = pack.units.find((u) => u.id === part.unit);
  const saved = useSavedWords(pack.code);
  const progress = useProgress("slang", pack.code);
  const [textbook, setTextbook] = useState(false);
  const [english, setEnglish] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [check, setCheck] = useState<"idle" | "running" | { right: number; total: number }>("idle");
  const done = progress.doneIds.has(part.id);

  const lines = useMemo(
    () =>
      part.lines.map((line, l) => {
        const tokens = pack.tokenize(line.text);
        const wordTokens = tokens.filter((t) => t.kind === "word");
        const items = itemsInLine(pack, part, wordTokens.map((t) => t.normalized));
        let w = 0;
        const refs = tokens.map((tok, t) => {
          if (tok.kind !== "word") return null;
          const item = items[w++];
          const ref: WordRef = {
            key: `${l}.${t}`,
            line: l,
            surface: tok.text,
            normalized: tok.normalized,
            item,
            help: item ? slangHelp(item) : slangWordHelp(pack, part, tok.normalized),
          };
          return ref;
        });
        return { line, tokens, refs };
      }),
    [pack, part],
  );
  const selected = lines.flatMap((l) => l.refs).find((r) => r?.key === selectedKey) ?? null;
  const speakers = [...new Set(part.lines.map((l) => l.speaker))];
  const inLines = part.items.filter((it) => !it.heardOnly);
  const heardOnly = part.items.filter((it) => it.heardOnly);

  const wordFor = (r: WordRef) => (r.item ? r.item.form.toLowerCase() : r.normalized);
  const toggleSave = (r: WordRef) => {
    if (!r.help) return;
    const sentence = part.lines[r.line].text;
    void saved.toggle({
      language: pack.code,
      word: wordFor(r),
      surface: r.item ? r.item.form : r.surface,
      base: r.item ? undefined : r.help.base,
      // Cards say who uses it, so slang never passes for textbook Dutch.
      meaning: r.item ? `${r.item.meaning} (${registerLabel(r.item).toLowerCase()})` : r.help.meaning,
      sentence,
      textId: part.id,
    });
  };

  return (
    <article className="reader slang" data-kind={part.kind}>
      <Link href={unit ? `/course/${pack.code}/${unit.id}` : "/course"} className="back-link">
        {unit ? `Back to ${unit.titleTranslation}` : "Course"}
      </Link>
      <p className="reader-unit">
        <span className="level-tag">{part.level}</span>
        <span>Zo praten we echt · bonus</span>
      </p>
      <header className="reader-head">
        <h1 lang={pack.code}>{part.title}</h1>
        <p className="reader-subtitle">{part.titleTranslation}</p>
      </header>

      <p className="slang-situation">
        <span className="slang-kind">{part.kind === "chat" ? "Chat" : "Spoken"}</span> {part.situation}
      </p>

      <div className="reader-tools slang-tools">
        <p className="reader-hint">
          <span className="slang-word slang-sample">Marked words</span> are the real-life bits. Tap any word.
        </p>
        <div className="button-row">
          <button type="button" className="chip" aria-pressed={textbook} onClick={() => setTextbook(!textbook)}>
            Textbook Dutch
          </button>
          <button type="button" className="chip" aria-pressed={english} onClick={() => setEnglish(!english)}>
            English
          </button>
          {part.kind === "talk" ? <PlayAll lang={pack.code} lines={part.lines} /> : null}
        </div>
      </div>

      <ol className={part.kind === "chat" ? "slang-chat" : "slang-talk"} lang={pack.code}>
        {lines.map(({ line, tokens, refs }, l) => (
          <li key={l} className="slang-line" data-speaker={speakers.indexOf(line.speaker) % 4}>
            <span className="slang-speaker">{line.speaker}</span>
            <span className="slang-text">
              {glueTokens(tokens).map((g, gi) =>
                g.kind === "gap" ? (
                  <span key={gi}>{g.text}</span>
                ) : (
                  <span key={gi} className="nobr">
                    {g.pieces.map((piece, pi) => {
                      const ref = piece.kind === "word" ? refs[piece.index] : null;
                      if (!ref) return <span key={pi}>{piece.kind === "word" ? piece.token.text : piece.text}</span>;
                      return (
                        <button
                          key={pi}
                          type="button"
                          className={ref.item ? "word slang-word" : "word"}
                          data-who={ref.item?.who}
                          data-selected={ref.key === selectedKey || (selected?.item && ref.item === selected.item && ref.line === selected.line) || undefined}
                          data-saved={saved.isSaved(wordFor(ref), ref.item ? undefined : ref.help?.base) || undefined}
                          onClick={() => setSelectedKey(ref.key === selectedKey ? null : ref.key)}
                        >
                          {piece.kind === "word" ? piece.token.text : ""}
                        </button>
                      );
                    })}
                  </span>
                ),
              )}
            </span>
            {textbook ? (
              <span className="slang-textbook">
                <span className="sr-only">Textbook: </span>
                {line.textbook}
              </span>
            ) : null}
            {english ? (
              <span className="slang-english" lang="en">
                {line.translation}
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <section className="slang-items" aria-labelledby="slang-items-title">
        <h2 id="slang-items-title">What&apos;s in it</h2>
        <ul>
          {inLines.map((it) => (
            <ItemCard key={it.form} lang={pack.code} item={it} />
          ))}
        </ul>
        {heardOnly.length ? (
          <>
            <h3>Also good to recognise</h3>
            <ul>
              {heardOnly.map((it) => (
                <ItemCard key={it.form} lang={pack.code} item={it} />
              ))}
            </ul>
          </>
        ) : null}
      </section>

      <footer className="reader-end">
        {check === "idle" ? (
          <div className="check-invite">
            <h2>Would you get it?</h2>
            <p>{part.tasks.length} quick questions, about meaning and when to say what.</p>
            <div className="button-row">
              <button type="button" className="button" onClick={() => setCheck("running")}>
                Check yourself
              </button>
              {!done ? (
                <button type="button" className="button button-quiet" onClick={() => progress.markDone(part.id)}>
                  Mark as done
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
        {check === "running" ? (
          <TaskRunner
            tasks={part.tasks}
            lang={pack.code}
            seed={part.id}
            onDone={(right, total) => {
              setCheck({ right, total });
              progress.markDone(part.id);
            }}
          />
        ) : null}
        {typeof check === "object" ? (
          <p className="score-line">
            {check.right} of {check.total} right.
            {check.right / check.total >= 0.7 ? " You'd follow this one in real life." : " Read it once more with the textbook Dutch on."}
          </p>
        ) : null}
        {done ? <p className="slang-done">Done. This is a bonus: it doesn&apos;t change your course progress.</p> : null}
        {unit && (done || typeof check === "object") ? (
          <Link href={`/course/${pack.code}/${unit.id}`} className="button">
            Back to the unit
          </Link>
        ) : null}
      </footer>

      {selected ? (
        <WordPanel
          key={selected.key}
          lang={pack.code}
          surface={selected.item ? selected.item.form : selected.surface}
          help={selected.help}
          translation={part.lines[selected.line].translation}
          sentence={part.lines[selected.line].text}
          saved={saved.isSaved(wordFor(selected), selected.item ? undefined : selected.help?.base)}
          error={saved.error}
          onToggleSave={() => toggleSave(selected)}
          onClose={() => setSelectedKey(null)}
          flag={{ language: pack.code, itemKind: "slang", itemId: part.id }}
        >
          {selected.item ? <WhoLine item={selected.item} /> : null}
        </WordPanel>
      ) : null}
    </article>
  );
}

function WhoLine({ item }: { item: SlangItem }) {
  return (
    <p className="slang-who" data-who={item.who}>
      <span className="slang-badge" data-who={item.who}>{registerLabel(item)}</span>
      <span>{REGISTER[item.who].when}</span>
      {item.where ? <span>{item.where}</span> : null}
    </p>
  );
}

function ItemCard({ lang, item }: { lang: string; item: SlangItem }) {
  return (
    <li className="slang-item" data-who={item.who}>
      <p className="slang-item-head">
        <span className="slang-item-form" lang={lang}>{item.form}</span>
        <span className="slang-badge" data-who={item.who}>{registerLabel(item)}</span>
      </p>
      <p className="slang-item-meaning">
        {item.meaning}
        {item.standard ? (
          <>
            {" "}· textbook: <span lang={lang}>{item.standard}</span>
          </>
        ) : null}
      </p>
      {item.where ? <p className="slang-item-note">{item.where}</p> : null}
      {item.note ? <p className="slang-item-note">{item.note}</p> : null}
      {item.origin ? <p className="slang-item-note slang-item-origin">{item.origin}</p> : null}
    </li>
  );
}

/** Play the whole talk, each speaker in their own voice. */
function PlayAll({ lang, lines }: { lang: string; lines: { speaker: string; text: string }[] }) {
  const hasVoice = useHasVoice(lang);
  const [playing, setPlaying] = useState(false);
  const stop = useRef<(() => void) | null>(null);
  useEffect(() => () => stop.current?.(), []);
  if (!hasVoice) return null;
  return (
    <button
      type="button"
      className="chip"
      aria-pressed={playing}
      onClick={() => {
        if (playing) {
          stop.current?.();
          stop.current = null;
          setPlaying(false);
          return;
        }
        setPlaying(true);
        stop.current = playLines(lang, lines, { rate: 1, onLine: (i) => i === null && setPlaying(false) });
      }}
    >
      {playing ? "Stop" : "Listen"}
    </button>
  );
}
