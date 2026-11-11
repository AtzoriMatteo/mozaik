"use client";

import { useSyncExternalStore } from "react";

/**
 * Reads text aloud with the browser's built-in voice for the language.
 * Free and private: speech is generated on the device, nothing is sent
 * anywhere. Hidden when the device has no voice for the language.
 */

function subscribe(onChange: () => void) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return () => {};
  window.speechSynthesis.addEventListener("voiceschanged", onChange);
  return () => window.speechSynthesis.removeEventListener("voiceschanged", onChange);
}

function findVoice(lang: string): SpeechSynthesisVoice | undefined {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return undefined;
  const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith(lang));
  // Prefer a voice from the Netherlands/Belgium etc. that sounds natural.
  return voices.find((v) => /natural|enhanced|premium|google/i.test(v.name)) ?? voices[0];
}

export function useHasVoice(lang: string): boolean {
  return useSyncExternalStore(
    subscribe,
    () => !!findVoice(lang),
    () => false,
  );
}

export function speak(lang: string, text: string, rate = 0.9) {
  const voice = findVoice(lang);
  if (!voice) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = rate;
  window.speechSynthesis.speak(u);
}

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
