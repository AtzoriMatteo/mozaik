import { helpFor, lemmaOf, type Exercise } from "./content";
import type { CefrLevel, LanguagePack } from "./language-pack";
import { isDue, rungOf } from "./srs";
import { cardMeaning, cardSense, lemmaFor, withArticle } from "./dictionary";
import { formInSentence } from "./coherence";
import { normalizeWords } from "./dictation";

/**
 * Everything that can come back in Review.
 * Words: only the ones you chose (saved while reading) or didn't know when
 * you met them in New words; graduated words never come back.
 * Grammar, listening and speaking: what you've finished in the course.
 */

export type ReviewKind = "word" | "grammar" | "listen" | "speak";
/** Speaking was taken out (17 Nov 2026), so it never comes up in review. */
export const REVIEW_KINDS: readonly ReviewKind[] = ["word", "grammar", "listen"];

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
  /** The unit where the course first uses this word. */
  unitId?: string;
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
  write?: ReadonlySet<string>;
  speak: ReadonlySet<string>;
};

/** Words too small or too common to be worth a flashcard. */
export const SKIP = new Set([
  "de", "het", "een", "en", "of", "maar", "want", "dus", "ik", "jij", "je", "u", "hij", "zij", "ze",
  "wij", "we", "jullie", "die", "dat", "dit", "deze", "er", "is", "zijn", "ben", "niet", "ook",
  "al", "nog", "in", "op", "aan", "van", "om", "te", "me", "mij", "mijn", "ja", "nee",
]);

const MAX_LINE_WORDS = 12;

/** Where a core word first appears in the course: its sentence and help. */
export type WordInfo = Omit<WordItem, "kind" | "id" | "source">;

/**
 * Every drillable core word of a level, keyed by dictionary form, with the
 * first course sentence it appears in. Tiny words (de, en, ik…) are left out.
 */
const indexCache = new WeakMap<LanguagePack, Map<CefrLevel, ReadonlyMap<string, WordInfo>>>();

export function wordIndex(pack: LanguagePack, level: CefrLevel): ReadonlyMap<string, WordInfo> {
  // Built once per level: Review asks for it after every rating.
  let byLevel = indexCache.get(pack);
  if (!byLevel) indexCache.set(pack, (byLevel = new Map()));
  const cached = byLevel.get(level);
  if (cached) return cached;
  const index = buildWordIndex(pack, level);
  byLevel.set(level, index);
  return index;
}

function buildWordIndex(pack: LanguagePack, level: CefrLevel): Map<string, WordInfo> {
  const index = new Map<string, WordInfo>();
  const core = new Set(pack.coreVocabulary[level] ?? []);
  // A word belongs to the first level that has it, so it never gets a second card at a later level.
  const lower = pack.levels.slice(0, Math.max(0, pack.levels.indexOf(level))).map((l) => wordIndex(pack, l));
  const earlier = (lemma: string) => lower.some((ix) => ix.has(lemma));
  for (const unit of pack.units) for (const text of unit.texts) {
    if (text.level !== level) continue;
    for (const sentence of text.paragraphs.flat()) {
      for (const tok of pack.tokenize(sentence.text)) {
        if (tok.kind !== "word") continue;
        const help = helpFor(pack.lexicon, text, tok.normalized);
        if (!help) continue;
        // The sense of the word in this very sentence: "iets te eten" is the verb, "het eten" the noun.
        const { lemma, meaning } = cardSense(pack, tok.normalized, help, sentence.text);
        if (!core.has(lemma) || SKIP.has(lemma) || index.has(lemma) || earlier(lemma)) continue;
        index.set(lemma, {
          word: tok.normalized,
          surface: tok.text,
          base: lemma === tok.normalized ? undefined : lemma,
          meaning,
          sentence: sentence.text,
          translation: sentence.translation,
          unitId: unit.id,
        });
      }
    }
  }
  // Words units teach directly (for their writing and speaking) are drillable too.
  for (const unit of pack.units) {
    if (unit.level !== level) continue;
    for (const t of unit.teach ?? []) {
      if (t.phrase) continue;
      const { lemma, meaning } = taughtCard(pack, t, (l) => index.has(l));
      if (index.has(lemma) || earlier(lemma) || lemma.includes(" ") || lemma.endsWith("-")) continue;
      const form = formInSentence(pack, t);
      index.set(lemma, {
        word: form,
        surface: form,
        base: form === lemma ? undefined : lemma,
        meaning,
        sentence: t.text,
        translation: t.translation,
        unitId: unit.id,
      });
    }
  }
  return index;
}

export const courseWordId = (lemma: string) => `w:${lemma}`;

/**
 * A word a unit teaches on purpose, as its card: taught as a form (comincio,
 * pomodori), drilled as its dictionary form (cominciare, il pomodoro). Only
 * when it's really a form of it: "sveglia = alarm clock" stays a noun.
 */
export function taughtCard(
  pack: LanguagePack,
  t: { word: string; meaning: string },
  known: (lemma: string) => boolean,
): { lemma: string; meaning: string } {
  const taught = t.word.toLowerCase();
  const base = pack.lexicon[taught]?.base?.toLowerCase();
  const formOf =
    !!base &&
    base !== taught &&
    (!!pack.lexicon[base] || known(base)) &&
    (t.meaning.includes(base) || !!pack.nounArticle?.(base) || /^(I|you|he|she|it|we|they) |^\w+ed\b/.test(t.meaning));
  if (!formOf) return { lemma: taught, meaning: t.meaning };
  return { lemma: base, meaning: cardMeaning(pack, base, pack.lexicon[base]?.meaning ?? t.meaning) };
}

/**
 * New words to meet, most common first: core words of the chosen levels that
 * you haven't seen in New words yet and haven't saved.
 */
export function newWords(
  pack: LanguagePack,
  levels: readonly CefrLevel[],
  schedules: ReadonlyMap<string, Schedule>,
  savedForms: ReadonlySet<string> = new Set(),
): (WordInfo & { lemma: string })[] {
  const out: (WordInfo & { lemma: string })[] = [];
  for (const level of levels) {
    for (const [lemma, info] of wordIndex(pack, level)) {
      if (schedules.has(courseWordId(lemma)) || savedForms.has(lemma) || savedForms.has(info.word)) continue;
      out.push({ lemma, ...info });
    }
  }
  const freq = pack.wordFrequency ?? {};
  return out.sort((a, b) => (freq[b.lemma] ?? 0) - (freq[a.lemma] ?? 0));
}

export function eligibleItems(
  pack: LanguagePack,
  done: Done,
  opts: {
    savedWords?: Omit<WordItem, "kind" | "id" | "source">[];
    /** Schedules so far: course words you met in New words are in My words. */
    schedules?: ReadonlyMap<string, Schedule>;
  },
): ReviewItem[] {
  const items: ReviewItem[] = [];
  const saved = opts.savedWords ?? [];

  // My words, part 1: course words you didn't know in New words.
  if (opts.schedules?.size) {
    for (const level of pack.levels) {
      for (const [lemma, info] of wordIndex(pack, level)) {
        const id = courseWordId(lemma);
        // A course card you already have wins over saving the same word later: its progress stays.
        if (!opts.schedules.has(id)) continue;
        items.push({ kind: "word", id, ...info, source: "course" });
      }
    }
  }
  // My words, part 2: words you saved while reading.
  // One card per dictionary form: saving grachten and gracht gives one card.
  const seen = new Set<string>();
  for (const w of saved) {
    // The sense the word had where it was saved; a word saved inflected gets its dictionary form's meaning.
    // The sense also picks the dictionary form: "we fietsen" is fietsen, "twee fietsen" is de fiets.
    const sense = w.word.includes(" ") ? null : cardSense(pack, w.word, { meaning: w.meaning, base: w.base ?? undefined }, w.sentence);
    const lemma = sense?.lemma ?? lemmaFor(w);
    if (seen.has(lemma) || opts.schedules?.has(courseWordId(lemma))) continue;
    seen.add(lemma);
    const meaning = sense?.meaning ?? w.meaning;
    const base = sense && lemma !== w.word.toLowerCase() ? lemma : sense ? undefined : w.base;
    items.push({ ...w, base, meaning, kind: "word", id: `saved:${w.word}`, source: "saved" });
  }

  // Grammar: every exercise of the lessons you've finished.
  for (const g of pack.grammar) {
    if (!done.grammar.has(g.id) || !g.lesson) continue;
    g.lesson.exercises.forEach((exercise, i) =>
      items.push({ kind: "grammar", id: `g:${g.id}:${i}`, pointId: g.id, pointTitle: g.title, exercise }),
    );
  }

  // The same line in two clips ("Wij wensen u een goede reis") is one card.
  const lines = new Set<string>();
  for (const unit of pack.units) {
    // Listening: short lines from pieces you've listened to.
    for (const l of unit.listening) {
      if (!done.listen.has(l.id)) continue;
      l.lines.forEach((line, i) => {
        const key = normalizeWords(line.text).join(" ");
        if (lines.has(key)) return;
        lines.add(key);
        if (line.text.split(/\s+/).length <= MAX_LINE_WORDS) {
          items.push({ kind: "listen", id: `l:${l.id}:${i}`, text: line.text, translation: line.translation });
        }
      });
    }
    // Speaking was taken out (Matteo, 17 Nov 2026): no speaking cards.
  }
  // One card per id, whatever path it came from.
  const ids = new Set<string>();
  return items.filter((i) => !ids.has(i.id) && !!ids.add(i.id));
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
  /**
   * Give a random source (Math.random) when a session really starts: the due
   * pile is then drawn in a new random order every time, and the cards come in
   * a new order. Left out, the order is fixed (for counts and tests).
   */
  random?: () => number;
};

/** Fisher–Yates shuffle into a new array. */
export function shuffled<T>(items: readonly T[], random: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

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
 * Pick a short session: due items first, then new ones within today's
 * allowance, mixed so kinds alternate instead of coming in blocks. With a
 * random source the due items are drawn at random and every session comes in
 * a fresh order; without one, oldest due first.
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

  const { random } = opts;
  const picked = (random ? shuffled(due, random) : due).slice(0, opts.size);
  const room = Math.min(opts.size - picked.length, allowance);
  picked.push(...interleave(fresh).slice(0, room));
  return random ? interleave(shuffled(picked, random), random) : interleave(picked);
}

/**
 * Round-robin by kind, keeping the order within each kind. With a random
 * source the kinds take turns in a random order each round.
 */
export function interleave(items: readonly ReviewItem[], random?: () => number): ReviewItem[] {
  const queues = REVIEW_KINDS.map((k) => items.filter((i) => i.kind === k)).filter((q) => q.length);
  const out: ReviewItem[] = [];
  while (queues.some((q) => q.length)) {
    for (const q of random ? shuffled(queues, random) : queues) {
      const next = q.shift();
      if (next) out.push(next);
    }
  }
  return out;
}

export type CardDirection = "mixed" | "nl-en" | "en-nl";
export type WordCardKind = "context" | "word" | "recall" | "listen" | "produce";

/**
 * Which way to show a word. In mixed review words climb a ladder as you know
 * them better, one rung at a time, so no step is ever skipped:
 *   rungs 0–2  the Dutch word in its sentence → what it means
 *   rung 3     the Dutch word on its own → what it means ("de lente")
 *   rung 4     on its own, a gap in the sentence, or heard
 *   rung 5+    the English → type the Dutch yourself
 * A miss (Again) moves the word two rungs down, so it climbs back quickly.
 * "nl-en" never asks you to produce; "en-nl" always does.
 * stage is the stored stage (see srs.rungOf).
 */
export function wordCardFor(
  stage: number,
  id: string,
  opts: { direction?: CardDirection; recall: boolean; listen: boolean },
): WordCardKind {
  const direction = opts.direction ?? "mixed";
  if (direction === "en-nl") return "produce";
  const rung = rungOf(stage);
  let h = rung;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const pick = (options: WordCardKind[]) => options[h % options.length];
  if (rung < 3) return "context";
  if (rung === 3) return "word";
  if (rung === 4 || direction === "nl-en") {
    const options: WordCardKind[] = ["word", "word"];
    if (opts.recall) options.push("recall");
    if (opts.listen) options.push("listen");
    return pick(options);
  }
  const options: WordCardKind[] = ["produce", "produce", "produce"];
  if (opts.listen) options.push("listen");
  return pick(options);
}

export type ProduceVerdict = { verdict: "right" | "almost" | "wrong"; note?: string };

const plain = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.!?,;:]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();

function distance(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}

/**
 * Checks a typed Dutch answer. Nouns want their article (de/het): the word
 * without it, or with the wrong one, is "almost". One letter off, or a
 * missing accent, is also "almost". Anything else is wrong.
 */
const DUTCH_ARTICLES = { definite: ["de", "het"], indefinite: ["een"] } as const;

export function checkProduced(
  typed: string,
  lemma: string,
  article: string | null,
  articles: { definite: readonly string[]; indefinite: readonly string[] } = DUTCH_ARTICLES,
): ProduceVerdict {
  // An apostrophe ends a word on its own: "l'acqua" and "l' acqua" are both "l' acqua".
  const tidy = (s: string) => s.trim().toLowerCase().replace(/’/g, "'").replace(/'\s*/g, "' ").replace(/\s+/g, " ").replace(/[.!?]+$/, "");
  const answer = tidy(typed);
  if (!answer) return { verdict: "wrong" };
  const target = article ? withArticle(article, lemma) : lemma;
  if (answer === tidy(target)) return { verdict: "right" };
  const [first, ...rest] = answer.split(" ");
  const bare = [...articles.definite, ...articles.indefinite].includes(first) ? rest.join(" ") : answer;
  const typedArticle = articles.definite.includes(first) ? first : null;
  const word = tidy(lemma);
  if (bare === word || plain(bare) === plain(word)) {
    if (!article) return plain(answer) === plain(lemma) ? { verdict: "almost", note: "Check the accents." } : { verdict: "right" };
    if (!typedArticle) return { verdict: "almost", note: `Right word. Learn it with its article: ${target}.` };
    if (typedArticle !== article) return { verdict: "almost", note: `Right word, but it's ${target}.` };
    return { verdict: "almost", note: "Check the accents." };
  }
  if (distance(plain(bare), plain(word)) === 1 && lemma.length > 3) {
    return { verdict: "almost", note: `Nearly: it's spelled ${target}.` };
  }
  return { verdict: "wrong" };
}
