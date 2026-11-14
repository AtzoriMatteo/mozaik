"use client";

import { useSyncExternalStore } from "react";
import { legacyTextKey, textKey, type AudioManifest } from "@/core/audio";

/**
 * Speech. Course sentences play from recordings made with natural voices
 * (one voice per character, see scripts/generate-audio.ts). Anything without
 * a recording, like a single word, uses the device's built-in voice: free and
 * private, generated on the device.
 */

const supported = () => typeof window !== "undefined" && "speechSynthesis" in window;

/* ---------- Recorded audio ---------- */

const manifests = new Map<string, AudioManifest | null>();
const manifestListeners = new Set<() => void>();

/** Starts loading a language's recordings list (once). Until it's there, the device voice is used. */
function loadManifest(lang: string) {
  if (typeof window === "undefined" || manifests.has(lang)) return;
  manifests.set(lang, null);
  fetch(`/audio/${lang}/manifest.json`)
    .then((r) => (r.ok ? (r.json() as Promise<AudioManifest>) : null))
    .then((m) => {
      if (m?.clips) {
        manifests.set(lang, m);
        manifestListeners.forEach((l) => l());
      }
    })
    .catch(() => {});
}

function recordingFor(lang: string, text: string): string | null {
  loadManifest(lang);
  const clips = manifests.get(lang)?.clips;
  const id = clips?.[textKey(text)] ?? clips?.[legacyTextKey(text)];
  return id ? `/audio/${lang}/${id}.mp3` : null;
}

const hasRecordings = (lang: string) => Object.keys(manifests.get(lang)?.clips ?? {}).length > 0;

let current: HTMLAudioElement | null = null;

/** Recordings are at natural speed; the device voice's 0.9 counts as normal. */
const playbackRate = (rate: number) => Math.max(0.5, Math.min(1, rate / 0.9));

function playRecording(url: string, rate: number, onEnd?: () => void, onError?: () => void) {
  current?.pause();
  const audio = new Audio(url);
  audio.playbackRate = playbackRate(rate);
  audio.onended = () => onEnd?.();
  audio.onerror = () => onError?.();
  current = audio;
  audio.play().catch(() => onError?.());
  return audio;
}

function subscribe(onChange: () => void) {
  manifestListeners.add(onChange);
  if (!supported()) return () => manifestListeners.delete(onChange);
  window.speechSynthesis.addEventListener("voiceschanged", onChange);
  return () => {
    manifestListeners.delete(onChange);
    window.speechSynthesis.removeEventListener("voiceschanged", onChange);
  };
}

/** Voices for a language, the most natural-sounding first. */
export function voicesFor(lang: string): SpeechSynthesisVoice[] {
  if (!supported()) return [];
  const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith(lang));
  const quality = (v: SpeechSynthesisVoice) => (/natural|enhanced|premium|neural|google/i.test(v.name) ? 0 : 1);
  return voices.sort((a, b) => quality(a) - quality(b));
}

export function useHasVoice(lang: string): boolean {
  loadManifest(lang);
  return useSyncExternalStore(subscribe, () => hasRecordings(lang) || voicesFor(lang).length > 0, () => false);
}

export function stopSpeaking() {
  current?.pause();
  current = null;
  if (supported()) window.speechSynthesis.cancel();
}

export function speak(lang: string, text: string, rate = 0.9) {
  const url = recordingFor(lang, text);
  if (url) {
    stopSpeaking();
    playRecording(url, rate, undefined, () => speakWithDevice(lang, text, rate));
    return;
  }
  speakWithDevice(lang, text, rate);
}

function speakWithDevice(lang: string, text: string, rate: number) {
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
  const urls = lines.map((l) => recordingFor(lang, l.text));
  if (urls.every(Boolean)) return playRecordings(urls as string[], { rate, onLine });
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

/** Plays recorded lines one after another, with a short pause between them. */
function playRecordings(urls: string[], { rate, onLine }: PlayOptions): () => void {
  stopSpeaking();
  let cancelled = false;
  let timer = 0;
  const playLine = (i: number) => {
    if (cancelled) return;
    if (i >= urls.length) {
      onLine?.(null);
      return;
    }
    onLine?.(i);
    playRecording(
      urls[i],
      rate,
      () => {
        timer = window.setTimeout(() => playLine(i + 1), 350);
      },
      () => onLine?.(null),
    );
  };
  playLine(0);
  return () => {
    cancelled = true;
    window.clearTimeout(timer);
    stopSpeaking();
    onLine?.(null);
  };
}
