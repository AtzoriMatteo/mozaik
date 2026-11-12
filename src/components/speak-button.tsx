"use client";

import { speak, useHasVoice } from "@/lib/speech";

export { speak, useHasVoice };

/** Small speaker button: hear a word or sentence. Hidden without a voice. */
export function SpeakButton({
  lang,
  text,
  label,
  rate,
}: {
  lang: string;
  text: string;
  label: string;
  rate?: number;
}) {
  const hasVoice = useHasVoice(lang);
  if (!hasVoice) return null;
  return (
    <button
      type="button"
      className="icon-button speak-button"
      aria-label={label}
      title={label}
      onClick={() => speak(lang, text, rate)}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
        <path
          d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
