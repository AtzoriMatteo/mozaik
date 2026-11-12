"use client";

import { useSyncExternalStore } from "react";

/**
 * Text-to-speech with the device's built-in voices. Free and private:
 * speech is generated on the device and nothing is sent anywhere.
 */

const supported = () => typeof window !== "undefined" && "speechSynthesis" in window;

function subscribe(onChange: () => void) {
  if (!supported()) return () => {};
  window.speechSynthesis.addEventListener("voiceschanged", onChange);
  return () => window.speechSynthesis.removeEventListener("voiceschanged", onChange);
}

/** Voices for a language, the most natural-sounding first. */
export function voicesFor(lang: string): SpeechSynthesisVoice[] {
  if (!supported()) return [];
  const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith(lang));
  const quality = (v: SpeechSynthesisVoice) => (/natural|enhanced|premium|neural|google/i.test(v.name) ? 0 : 1);
  return voices.sort((a, b) => quality(a) - quality(b));
}

export function useHasVoice(lang: string): boolean {
  return useSyncExternalStore(subscribe, () => voicesFor(lang).length > 0, () => false);
}

export function stopSpeaking() {
  if (supported()) window.speechSynthesis.cancel();
}

export function speak(lang: string, text: string, rate = 0.9) {
  const [voice] = voicesFor(lang);
  if (!voice) return;
  stopSpeaking();
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = rate;
  window.speechSynthesis.speak(u);
}

export type PlayOptions = {
  rate: number;
  /** Called with the index of the line being spoken, then null when done. */
  onLine?: (index: number | null) => void;
};

/**
 * Speak lines one after another. Different speakers get different voices
 * when the device has several; otherwise a different pitch.
 * Returns a function that stops playback.
 */
export function playLines(
  lang: string,
  lines: { speaker?: string; text: string }[],
  { rate, onLine }: PlayOptions,
): () => void {
  const voices = voicesFor(lang);
  if (voices.length === 0) return () => {};
  stopSpeaking();

  const speakers = [...new Set(lines.map((l) => l.speaker ?? ""))];
  const PITCHES = [1, 0.8, 1.2, 0.95];
  let cancelled = false;

  const sayLine = (i: number) => {
    if (cancelled) return;
    if (i >= lines.length) {
      onLine?.(null);
      return;
    }
    const s = speakers.indexOf(lines[i].speaker ?? "");
    const u = new SpeechSynthesisUtterance(lines[i].text);
    u.voice = voices[s % voices.length];
    u.lang = u.voice.lang;
    u.rate = rate;
    u.pitch = voices.length > s ? 1 : PITCHES[s % PITCHES.length];
    u.onend = () => window.setTimeout(() => sayLine(i + 1), 350);
    u.onerror = () => onLine?.(null);
    onLine?.(i);
    window.speechSynthesis.speak(u);
  };

  sayLine(0);
  return () => {
    cancelled = true;
    stopSpeaking();
    onLine?.(null);
  };
}
