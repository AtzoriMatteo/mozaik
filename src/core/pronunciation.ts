import { checkDictation, normalizeWords } from "./dictation";

/**
 * Pronunciation feedback built on plain speech-to-text.
 *
 * Whisper only returns words, so we infer *which sound* went wrong by
 * comparing what you meant with what it heard: if you meant "huis" and it
 * heard "hoes", the spelling that differs (ui ↔ oe) points at the sound.
 * Minimal pairs make this precise: both words are real, so the model has
 * to decide on the sound itself.
 */

export type Sound = {
  id: string;
  /** How it's written, e.g. "ui". */
  title: string;
  /** Spellings of this sound (regex sources), used to spot it in words. */
  spellings: string[];
  /** How to make it: one or two short sentences, mouth first. */
  how: string;
  /** Words to listen to and repeat. */
  examples: string[];
  /** Minimal pairs: [word with this sound, word it gets confused with]. */
  pairs: [string, string][];
};

export type WordFeedback =
  | { word: string; status: "ok" }
  | { word: string; status: "misheard"; heardAs: string; sound?: Sound }
  | { word: string; status: "missed" };

export type AttemptFeedback = {
  words: WordFeedback[];
  /** Share of words understood, 0–1. */
  understood: number;
  /** The first sound to work on, if any. */
  focus?: Sound;
};

const has = (word: string, spelling: string) => new RegExp(spelling).test(word);

function editDistance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return row[b.length];
}

/** Close enough that one was probably an attempt at the other (huis/hoes yes, tomaten/mag no). */
export function soundsAlike(a: string, b: string): boolean {
  return editDistance(a, b) <= Math.ceil(Math.max(a.length, b.length) / 2);
}

/** Which sound most likely explains hearing `heard` instead of `target`. */
export function soundBehind(target: string, heard: string, sounds: readonly Sound[]): Sound | undefined {
  const t = target.toLowerCase();
  const h = heard.toLowerCase();
  // A sound spelled in one word but not the other is the likely culprit.
  return sounds.find((s) => s.spellings.some((sp) => has(t, sp) !== has(h, sp)));
}

export function analyzeAttempt(target: string, heard: string, sounds: readonly Sound[]): AttemptFeedback {
  const { parts } = checkDictation(target, heard);
  const words: WordFeedback[] = [];

  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (p.kind === "correct" || p.kind === "almost") {
      words.push({ word: p.word, status: "ok" });
    } else if (p.kind === "missing") {
      // A missing word right next to an extra one = heard as something else.
      const neighbour = parts[i + 1]?.kind === "extra" ? parts[i + 1] : undefined;
      if (neighbour && neighbour.kind === "extra" && soundsAlike(p.word, neighbour.typed)) {
        words.push({
          word: p.word,
          status: "misheard",
          heardAs: neighbour.typed,
          sound: soundBehind(p.word, neighbour.typed, sounds),
        });
        i++;
      } else {
        words.push({ word: p.word, status: "missed" });
      }
    } else if (p.kind === "extra") {
      const prev = words[words.length - 1];
      const next = parts[i + 1];
      // extra before missing: pair them the other way round
      if (next?.kind === "missing" && soundsAlike(next.word, p.typed)) {
        words.push({
          word: next.word,
          status: "misheard",
          heardAs: p.typed,
          sound: soundBehind(next.word, p.typed, sounds),
        });
        i++;
      } else if (!prev) {
        continue;
      }
    }
  }

  const ok = words.filter((w) => w.status === "ok").length;
  const focus = words.find((w): w is Extract<WordFeedback, { status: "misheard" }> => w.status === "misheard" && !!w.sound)?.sound;
  return { words, understood: words.length ? ok / words.length : 0, focus };
}

export type PairVerdict = "right" | "other" | "unclear";

/** For a minimal pair: did the model hear the word you aimed for, the other one, or neither? */
export function judgePair(target: string, contrast: string, heard: string): PairVerdict {
  const words = normalizeWords(heard);
  if (words.includes(target.toLowerCase())) return "right";
  if (words.includes(contrast.toLowerCase())) return "other";
  return "unclear";
}

/** Whisper sometimes "hears" stock phrases in silence or noise. */
const PHANTOMS = /ondertitel|amara|bedankt voor het kijken|abonneer|tv gelderland|www\.|\.nl\b/i;

export function isPhantom(text: string): boolean {
  return !text.trim() || PHANTOMS.test(text);
}
