"use client";

import { useState } from "react";
import type { WordHelp } from "@/core/content";
import { SpeakButton } from "@/components/speak-button";
import { FlagSentence } from "@/components/flag-sentence";
import type { FlagTarget } from "@/lib/flags/flags";

type Layer = "closer" | "local" | "sentence";

/**
 * Calm help for one word: just the meaning, with small optional buttons for
 * the extra layers. Only one layer is open at a time, and each is one line.
 */
export function WordPanel(props: {
  lang: string;
  surface: string;
  help: WordHelp | undefined;
  translation: string;
  sentence: string;
  saved: boolean;
  error: string | null;
  onToggleSave: () => void;
  onClose: () => void;
  /** Where the sentence is, so it can be flagged as sounding odd. */
  flag?: FlagTarget;
}) {
  const { lang, surface, help, translation, saved, error } = props;
  const [open, setOpen] = useState<Layer | null>(null);

  const layers: { id: Layer; label: string; line: string | undefined }[] = [
    { id: "closer", label: "Look closer", line: help?.closer },
    { id: "local", label: "Like a local", line: help?.local },
    { id: "sentence", label: "Whole sentence", line: translation },
  ];
  const openLine = layers.find((l) => l.id === open)?.line;

  return (
    <aside className="word-panel" aria-live="polite" aria-label={`Help for ${surface}`}>
      <div className="word-panel-inner">
        <div className="word-panel-head">
          <p className="word-panel-word">
            <span lang={lang}>{surface}</span>
            {help?.base && help.base.toLowerCase() !== surface.toLowerCase() ? (
              <span className="word-panel-base">
                from <span lang={lang}>{help.base}</span>
              </span>
            ) : null}
            <SpeakButton lang={lang} text={surface} label={`Hear ${surface}`} />
          </p>
          <button type="button" className="icon-button" aria-label="Close" onClick={props.onClose}>
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <p className="word-panel-meaning">{help?.meaning ?? "No help for this word yet."}</p>

        <div className="word-panel-actions">
          {layers
            .filter((l) => l.line)
            .map((l) => (
              <button
                key={l.id}
                type="button"
                className="chip"
                aria-expanded={open === l.id}
                onClick={() => setOpen(open === l.id ? null : l.id)}
              >
                {l.label}
              </button>
            ))}
          {help ? (
            <button
              type="button"
              className="chip chip-save"
              aria-pressed={saved}
              onClick={props.onToggleSave}
              title="Shortcut: S"
            >
              {saved ? "Saved" : "Save"}
            </button>
          ) : null}
        </div>

        {openLine ? (
          <p className="word-panel-layer">
            {openLine}
            {open === "sentence" ? (
              <SpeakButton lang={lang} text={props.sentence} label="Hear the sentence" rate={0.85} />
            ) : null}
          </p>
        ) : null}
        {open === "sentence" && props.flag ? <FlagSentence key={props.sentence} target={props.flag} sentence={props.sentence} /> : null}
        {error ? <p className="error" role="alert">{error}</p> : null}
      </div>
    </aside>
  );
}
