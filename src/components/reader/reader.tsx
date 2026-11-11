"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { helpFor, type WordHelp } from "@/core/content";
import type { LanguagePack } from "@/core/language-pack";
import { getPack } from "@/core/registry";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";
import { WordPanel } from "./word-panel";

type WordRef = {
  key: string;
  surface: string;
  normalized: string;
  sentence: string;
  translation: string;
  help: WordHelp | undefined;
};

/** The reading screen: a text where every word can be tapped for help. */
export function Reader({ lang, textId }: { lang: string; textId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const index = pack.texts.findIndex((t) => t.id === textId);
  const text = pack.texts[index];
  const next = pack.texts[index + 1];
  const saved = useSavedWords(pack.code);

  // Tokenise once and give every word a stable key, so the arrow keys can
  // move through them in reading order.
  const { paragraphs, words } = useMemo(() => {
    const words: WordRef[] = [];
    const paragraphs = text.paragraphs.map((sentences, p) =>
      sentences.map((sentence, s) =>
        pack.tokenize(sentence.text).map((tok, t) => {
          if (tok.kind !== "word") return { tok, ref: null };
          const ref: WordRef = {
            key: `${p}.${s}.${t}`,
            surface: tok.text,
            normalized: tok.normalized,
            sentence: sentence.text,
            translation: sentence.translation,
            help: helpFor(pack.lexicon, text, tok.normalized),
          };
          words.push(ref);
          return { tok, ref };
        }),
      ),
    );
    return { paragraphs, words };
  }, [pack, text]);

  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const selected = words.find((w) => w.key === selectedKey) ?? null;

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
      <Link href="/read" className="back-link">All texts</Link>
      <header className="reader-head">
        <h1 lang={pack.code}>{text.title}</h1>
        <p className="reader-subtitle">{text.titleTranslation}</p>
      </header>

      <p className="reader-hint">Tap any word for help.</p>

      <div className="reader-body" lang={pack.code}>
        {paragraphs.map((sentences, p) => (
          <p key={p}>
            {sentences.map((tokens, s) => (
              <span key={s}>
                {tokens.map(({ tok, ref }, t) =>
                  ref ? (
                    <button
                      key={t}
                      type="button"
                      className="word"
                      data-selected={ref.key === selectedKey || undefined}
                      data-saved={saved.isSaved(ref.normalized) || undefined}
                      aria-pressed={ref.key === selectedKey}
                      onClick={() => setSelectedKey(ref.key === selectedKey ? null : ref.key)}
                    >
                      {tok.text}
                    </button>
                  ) : (
                    <span key={t}>{tok.text}</span>
                  ),
                )}{" "}
              </span>
            ))}
          </p>
        ))}
      </div>

      <footer className="reader-end">
        {next ? (
          <Link href={`/read/${pack.code}/${next.id}`} className="button">
            Next text: <span lang={pack.code}>{next.title}</span>
          </Link>
        ) : (
          <Link href="/read" className="button">Back to all texts</Link>
        )}
      </footer>

      {selected ? (
        <WordPanel
          key={selected.key}
          lang={pack.code}
          surface={selected.surface}
          help={selected.help}
          translation={selected.translation}
          saved={saved.isSaved(selected.normalized)}
          error={saved.error}
          onToggleSave={() => toggleSave(selected)}
          onClose={() => setSelectedKey(null)}
        />
      ) : null}
    </article>
  );
}
