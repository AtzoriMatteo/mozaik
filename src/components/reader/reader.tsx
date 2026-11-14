"use client";

import { LearningTip } from "@/components/learning-tip";
import { glueTokens } from "@/core/glue";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { expressionsAt, helpFor, type WordHelp } from "@/core/content";
import { allTexts, type LanguagePack } from "@/core/language-pack";
import { nextActivity } from "@/core/course";
import { NextActivityLink } from "@/components/course/next-activity-link";
import { getPack } from "@/core/registry";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";
import { useReadTexts } from "@/lib/progress/use-read-texts";
import { WordPanel } from "./word-panel";
import { ExpressionBox, type Phrase } from "./expression-box";
import { ListenControls } from "./listen-controls";
import { TaskRunner } from "@/components/exercises/task-runner";

type WordRef = {
  key: string;
  /** Which sentence (paragraph.sentence) and which word in it. */
  sentenceKey: string;
  wordIndex: number;
  surface: string;
  normalized: string;
  sentence: string;
  translation: string;
  help: WordHelp | undefined;
};

/** The reading screen: a text where every word can be tapped for help. */
export function Reader({ lang, textId }: { lang: string; textId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const texts = allTexts(pack);
  const index = texts.findIndex((t) => t.id === textId);
  const text = texts[index];
  const next = nextActivity(pack, { kind: "read", id: textId });
  const unit = pack.units.find((u) => u.texts.some((t) => t.id === textId));
  const saved = useSavedWords(pack.code);
  const { markRead } = useReadTexts(pack.code);

  // Tokenise once and give every word a stable key, so the arrow keys can
  // move through them in reading order.
  const { paragraphs, words } = useMemo(() => {
    const words: WordRef[] = [];
    const paragraphs = text.paragraphs.map((sentences, p) =>
      sentences.map((sentence, s) => {
        let w = 0;
        return pack.tokenize(sentence.text).map((tok, t) => {
          if (tok.kind !== "word") return { tok, ref: null };
          const ref: WordRef = {
            key: `${p}.${s}.${t}`,
            sentenceKey: `${p}.${s}`,
            wordIndex: w++,
            surface: tok.text,
            normalized: tok.normalized,
            sentence: sentence.text,
            translation: sentence.translation,
            help: helpFor(pack.lexicon, text, tok.normalized),
          };
          words.push(ref);
          return { tok, ref };
        });
      }),
    );
    return { paragraphs, words };
  }, [pack, text]);

  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [check, setCheck] = useState<"idle" | "running" | { right: number; total: number }>("idle");
  const tasks = text.tasks ?? [];
  const selected = words.find((w) => w.key === selectedKey) ?? null;
  // A phrase: picked by tapping its first and last word (or a known expression).
  const [picking, setPicking] = useState(false);
  const [range, setRange] = useState<{ sentenceKey: string; from: number; to: number } | null>(null);
  const inRange = (ref: WordRef) =>
    !!range && ref.sentenceKey === range.sentenceKey && ref.wordIndex >= range.from && ref.wordIndex <= range.to;

  const sentenceWords = (sentenceKey: string) => words.filter((w) => w.sentenceKey === sentenceKey);
  const known = selected
    ? expressionsAt(pack.expressions ?? [], sentenceWords(selected.sentenceKey).map((w) => w.normalized), selected.wordIndex)
    : [];
  const phrase: Phrase | null = (() => {
    if (!range) return null;
    const ws = sentenceWords(range.sentenceKey).slice(range.from, range.to + 1);
    if (ws.length < 2) return null;
    const sentence = ws[0].sentence;
    const start = sentence.indexOf(ws[0].surface);
    const lastAt = sentence.indexOf(ws.at(-1)!.surface, start + 1);
    const surface = start >= 0 && lastAt > start ? sentence.slice(start, lastAt + ws.at(-1)!.surface.length) : ws.map((w) => w.surface).join(" ");
    const normalized = ws.map((w) => w.normalized).join(" ");
    const match = known.find((k) => k.from === range.from && k.to === range.to)?.expression;
    return { normalized, surface, sentence, base: match?.phrase, meaning: match?.meaning ?? "" };
  })();

  const clickWord = (ref: WordRef) => {
    if (picking && selected && ref.sentenceKey === selected.sentenceKey) {
      const a = selected.wordIndex;
      setRange({ sentenceKey: ref.sentenceKey, from: Math.min(a, ref.wordIndex), to: Math.max(a, ref.wordIndex) });
      setPicking(false);
      return;
    }
    setPicking(false);
    setRange(null);
    setSelectedKey(ref.key === selectedKey ? null : ref.key);
  };

  const savePhrase = (p: Phrase, meaning: string) => {
    void saved.toggle({
      language: pack.code,
      word: p.normalized,
      surface: p.surface,
      base: p.base,
      meaning,
      sentence: p.sentence,
      textId: text.id,
    });
  };

  const toggleSave = useCallback(
    (w: WordRef) => {
      if (!w.help) return;
      void saved.toggle({
        language: pack.code,
        word: w.normalized,
        surface: w.surface,
        base: w.help.base,
        meaning: w.help.meaning,
        sentence: w.sentence,
        textId: text.id,
      });
    },
    [pack.code, saved, text.id],
  );

  // Keyboard: ← → move between words, S saves, Esc closes the panel.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const i = words.findIndex((w) => w.key === selectedKey);
      if (e.key === "Escape") setSelectedKey(null);
      else if (e.key === "ArrowRight") setSelectedKey(words[Math.min(i + 1, words.length - 1)].key);
      else if (e.key === "ArrowLeft" && i > 0) setSelectedKey(words[i - 1].key);
      else if (e.key.toLowerCase() === "s" && selected) toggleSave(selected);
      else return;
      e.preventDefault();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [words, selectedKey, selected, toggleSave]);

  return (
    <article className="reader">
      <Link href={unit ? `/course/${pack.code}/${unit.id}` : "/course"} className="back-link">
        {unit ? `Back to ${unit.titleTranslation}` : "Course"}
      </Link>
      {unit ? (
        <p className="reader-unit">
          <span className="level-tag">{unit.level}</span>
          <span lang={pack.code}>{unit.title}</span>
        </p>
      ) : null}
      <header className="reader-head">
        <h1 lang={pack.code}>{text.title}</h1>
        <p className="reader-subtitle">{text.titleTranslation}</p>
      </header>

      <div className="reader-tools">
        <p className="reader-hint">Tap any word for help.</p>
        <ListenControls lang={pack.code} sentences={text.paragraphs.flat().map((s) => s.text)} />
      </div>

      <div className="reader-body" lang={pack.code}>
        {paragraphs.map((sentences, p) => (
          <p key={p}>
            {sentences.map((tokens, s) => (
              <span key={s}>
                {glueTokens(tokens.map((x) => x.tok)).map((g, gi) =>
                  g.kind === "gap" ? (
                    <span key={gi}>{g.text}</span>
                  ) : (
                    <span key={gi} className="nobr">
                      {g.pieces.map((piece, pi) => {
                        const ref = piece.kind === "word" ? tokens[piece.index].ref : null;
                        if (!ref) return <span key={pi}>{piece.kind === "word" ? piece.token.text : piece.text}</span>;
                        return (
                          <button
                            key={pi}
                            type="button"
                            className="word"
                            data-selected={ref.key === selectedKey || inRange(ref) || undefined}
                            data-saved={saved.isSaved(ref.normalized, ref.help?.base) || undefined}
                            aria-pressed={ref.key === selectedKey}
                            onClick={() => clickWord(ref)}
                          >
                            {piece.kind === "word" ? piece.token.text : ""}
                          </button>
                        );
                      })}
                    </span>
                  ),
                )}{" "}
              </span>
            ))}
          </p>
        ))}
      </div>

      <footer className="reader-end">
        {tasks.length > 0 && check === "idle" ? (
          <div className="check-invite">
            <h2>Did you get it?</h2>
            <p>{tasks.length} quick questions about the text. You can look back at it anytime.</p>
            <div className="button-row">
              <button type="button" className="button" onClick={() => setCheck("running")}>
                Check your understanding
              </button>
              <NextActivityLink pack={pack} next={next} onDone={() => markRead(text.id)} quiet />
            </div>
          </div>
        ) : null}
        {check === "running" ? (
          <TaskRunner
            tasks={tasks}
            lang={pack.code}
            seed={text.id}
            onDone={(right, total) => {
              setCheck({ right, total });
              // Finishing the questions counts as reading it, wherever you go next.
              markRead(text.id);
            }}
          />
        ) : null}
        {typeof check === "object" ? (
          <p className="score-line">
            {check.right} of {check.total} right.
            {check.right / check.total >= 0.7 ? " You understood this text well." : " Read it once more tomorrow: it gets easier."}
          </p>
        ) : null}
        {tasks.length === 0 || typeof check === "object" ? (
          <>
            <NextActivityLink pack={pack} next={next} onDone={() => markRead(text.id)} />
            <LearningTip pack={pack} place="read" />
          </>
        ) : null}
      </footer>

      {selected ? (
        <WordPanel
          key={selected.key}
          lang={pack.code}
          surface={selected.surface}
          help={selected.help}
          translation={selected.translation}
          sentence={selected.sentence}
          saved={saved.isSaved(selected.normalized, selected.help?.base)}
          error={saved.error}
          onToggleSave={() => toggleSave(selected)}
          onClose={() => {
            setSelectedKey(null);
            setRange(null);
            setPicking(false);
          }}
          flag={{ language: pack.code, itemKind: "text", itemId: text.id }}
        >
          <ExpressionBox
            key={`${selected.key}-${range?.from}-${range?.to}`}
            lang={pack.code}
            known={known.map((k) => k.expression)}
            phrase={phrase}
            picking={picking}
            isSaved={(w, base) => saved.isSaved(w, base)}
            onPick={() => {
              setRange(null);
              setPicking(true);
            }}
            onShowKnown={(i) => setRange({ sentenceKey: selected.sentenceKey, from: known[i].from, to: known[i].to })}
            onSave={savePhrase}
          />
        </WordPanel>
      ) : null}
    </article>
  );
}
