import { helpFor, lemmaOf, type Exercise } from "./content";
import { allTexts, type LanguagePack } from "./language-pack";
import { isDue } from "./srs";

/**
 * Everything that can come back in Review. Items appear on their own once
 * you've done the activity they come from: read a text → its core words;
 * finish a grammar lesson → its exercises; listen → its short lines;
 * speaking practice → its words and sentences. Saved words are added too.
 */

export type ReviewKind = "word" | "grammar" | "listen" | "speak";
export const REVIEW_KINDS: readonly ReviewKind[] = ["word", "grammar", "listen", "speak"];

export type WordItem = {
  kind: "word";
  id: string;
  /** Lower-cased form as it appears in the sentence. */
  word: string;
  surface: string;
  base?: string;
  meaning: string;
  sentence: string;
  translation?: string;
  source: "course" | "saved";
};
export type GrammarItem = { kind: "grammar"; id: string; pointId: string; pointTitle: string; exercise: Exercise };
export type ListenItem = { kind: "listen"; id: string; text: string; translation: string };
export type SpeakItem = { kind: "speak"; id: string; text: string; translation?: string; contrast?: string; soundId?: string };
export type ReviewItem = WordItem | GrammarItem | ListenItem | SpeakItem;

export type Schedule = { stage: number; dueAt: string; introducedAt: string };

export type Done = {
  read: ReadonlySet<string>;
  listen: ReadonlySet<string>;
  grammar: ReadonlySet<string>;
  speak: ReadonlySet<string>;
};

/** Words too small or too common to be worth a flashcard. */
const SKIP = new Set([
  "de", "het", "een", "en", "of", "maar", "want", "dus", "ik", "jij", "je", "u", "hij", "zij", "ze",
  "wij", "we", "jullie", "die", "dat", "dit", "deze", "er", "is", "zijn", "ben", "niet", "ook",
  "al", "nog", "in", "op", "aan", "van", "om", "te", "me", "mij", "mijn", "ja", "nee",
]);

const MAX_LINE_WORDS = 12;

export function eligibleItems(
  pack: LanguagePack,
  done: Done,
  opts: { courseWords: boolean; savedWords?: Omit<WordItem, "kind" | "id" | "source">[] },
): ReviewItem[] {
  const items: ReviewItem[] = [];
  const saved = opts.savedWords ?? [];
  const savedForms = new Set(saved.flatMap((w) => [w.word, w.base?.toLowerCase()].filter(Boolean) as string[]));

  // Words: first meeting of each core word in the texts you've read.
  if (opts.courseWords) {
    const seen = new Set<string>();
    for (const text of allTexts(pack)) {
      if (!done.read.has(text.id)) continue;
      const core = new Set(pack.coreVocabulary[text.level] ?? []);
      for (const sentence of text.paragraphs.flat()) {
        for (const tok of pack.tokenize(sentence.text)) {
          if (tok.kind !== "word") continue;
          const help = helpFor(pack.lexicon, text, tok.normalized);
          const lemma = lemmaOf(help, tok.normalized);
          if (!help || !core.has(lemma) || SKIP.has(lemma) || seen.has(lemma)) continue;
          if (savedForms.has(lemma) || savedForms.has(tok.normalized)) continue;
          seen.add(lemma);
          items.push({
            kind: "word",
            id: `w:${lemma}`,
            word: tok.normalized,
            surface: tok.text,
            base: help.base,
            meaning: help.meaning,
            sentence: sentence.text,
            translation: sentence.translation,
            source: "course",
          });
        }
      }
    }
  }
  for (const w of saved) items.push({ ...w, kind: "word", id: `saved:${w.word}`, source: "saved" });

  // Grammar: every exercise of the lessons you've finished.
  for (const g of pack.grammar) {
    if (!done.grammar.has(g.id) || !g.lesson) continue;
    g.lesson.exercises.forEach((exercise, i) =>
      items.push({ kind: "grammar", id: `g:${g.id}:${i}`, pointId: g.id, pointTitle: g.title, exercise }),
    );
  }

  for (const unit of pack.units) {
    // Listening: short lines from pieces you've listened to.
    for (const l of unit.listening) {
      if (!done.listen.has(l.id)) continue;
      l.lines.forEach((line, i) => {
        if (line.text.split(/\s+/).length <= MAX_LINE_WORDS) {
          items.push({ kind: "listen", id: `l:${l.id}:${i}`, text: line.text, translation: line.translation });
        }
      });
    }
    // Speaking: the unit's pair words and sentences, once practised.
    if (unit.speaking && done.speak.has(unit.id)) {
      for (const soundId of unit.speaking.sounds) {
        const sound = pack.sounds.find((s) => s.id === soundId);
        for (const [a, b] of sound?.pairs ?? []) {
          items.push({ kind: "speak", id: `sp:${soundId}:${a}`, text: a, contrast: b, soundId });
        }
      }
      unit.speaking.shadowing.forEach((s, i) =>
        items.push({ kind: "speak", id: `s:${unit.id}:${i}`, text: s.text, translation: s.translation }),
      );
    }
  }
  return items;
}

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

/** How many items were reviewed for the first time today. */
export function introducedToday(schedules: ReadonlyMap<string, Schedule>, now: Date): number {
  let n = 0;
  for (const s of schedules.values()) if (sameDay(new Date(s.introducedAt), now)) n++;
  return n;
}

export type SessionOptions = {
  kinds: ReadonlySet<ReviewKind>;
  size: number;
  newPerDay: number;
  now: Date;
};

export type SessionCounts = Record<ReviewKind, { due: number; fresh: number }>;

/** Due and new counts per kind, before any session limits. */
export function countItems(
  items: readonly ReviewItem[],
  schedules: ReadonlyMap<string, Schedule>,
  now: Date,
): SessionCounts {
  const counts = Object.fromEntries(REVIEW_KINDS.map((k) => [k, { due: 0, fresh: 0 }])) as SessionCounts;
  for (const item of items) {
    const s = schedules.get(item.id);
    if (!s) counts[item.kind].fresh++;
    else if (isDue(s.dueAt, now)) counts[item.kind].due++;
  }
  return counts;
}

/**
 * Pick a short session: due items first (oldest first), then new ones within
 * today's allowance, mixed so kinds alternate instead of coming in blocks.
 */
export function buildSession(
  items: readonly ReviewItem[],
  schedules: ReadonlyMap<string, Schedule>,
  opts: SessionOptions,
): ReviewItem[] {
  const wanted = items.filter((i) => opts.kinds.has(i.kind));
  const due = wanted
    .filter((i) => {
      const s = schedules.get(i.id);
      return s && isDue(s.dueAt, opts.now);
    })
    .sort((a, b) => schedules.get(a.id)!.dueAt.localeCompare(schedules.get(b.id)!.dueAt));
  const allowance = Math.max(0, opts.newPerDay - introducedToday(schedules, opts.now));
  const fresh = wanted.filter((i) => !schedules.has(i.id));

  const picked = due.slice(0, opts.size);
  const room = Math.min(opts.size - picked.length, allowance);
  picked.push(...interleave(fresh).slice(0, room));
  return interleave(picked);
}

/** Round-robin by kind, keeping the order within each kind. */
export function interleave(items: readonly ReviewItem[]): ReviewItem[] {
  const queues = REVIEW_KINDS.map((k) => items.filter((i) => i.kind === k)).filter((q) => q.length);
  const out: ReviewItem[] = [];
  while (queues.some((q) => q.length)) {
    for (const q of queues) {
      const next = q.shift();
      if (next) out.push(next);
    }
  }
  return out;
}

/** Which way to show a word: meaning first, then recall or listening, varied. */
export function wordCardFor(
  stage: number,
  id: string,
  enabled: { recall: boolean; listen: boolean },
): "meaning" | "recall" | "listen" {
  if (stage < 2) return "meaning";
  const options: ("meaning" | "recall" | "listen")[] = ["meaning"];
  if (enabled.recall) options.push("recall");
  if (enabled.listen) options.push("listen");
  let h = stage;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return options[h % options.length];
}
