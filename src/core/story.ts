import type { Episode, Story, Unit } from "./content";
import { helpFor } from "./content";
import type { LanguagePack } from "./language-pack";
import { cardSense } from "./dictionary";
import { SKIP } from "./review-items";
import { notAWordToLearn } from "./unit-words";
import { isTaught, taughtSets } from "./coherence";

/** Units that have a story, in course order. */
export function storyUnits(pack: LanguagePack): (Unit & { story: Story })[] {
  return pack.units.filter((u): u is Unit & { story: Story } => !!u.story);
}

export function findEpisode(pack: LanguagePack, id: string): { unit: Unit & { story: Story }; story: Story; episode: Episode; index: number } | undefined {
  for (const unit of storyUnits(pack)) {
    const index = unit.story.episodes.findIndex((e) => e.id === id);
    if (index >= 0) return { unit, story: unit.story, episode: unit.story.episodes[index], index };
  }
  return undefined;
}

export function allEpisodes(pack: LanguagePack): Episode[] {
  return storyUnits(pack).flatMap((u) => u.story.episodes);
}

export type StoryWord = { lemma: string; word: string; surface: string; meaning: string; sentence: string; translation: string; count: number };

/**
 * Words worth a card from this episode: new in this unit (not met in an
 * earlier one), used at least three times across the story, and offered in
 * the episode where they first appear. Most frequent first. Tiny words,
 * names and sounds are left out. Matteo: words come from the story, not
 * before it.
 */
export function wordsThatComeBack(pack: LanguagePack, unit: Unit & { story: Story }, episode: Episode, max = 6): StoryWord[] {
  const u = pack.units.findIndex((x) => x.id === unit.id);
  const before = u > 0 ? taughtSets(pack)[u - 1] : new Set<string>();
  const counts = new Map<string, number>();
  const first = new Map<string, Omit<StoryWord, "count"> & { episode: string }>();
  for (const e of unit.story.episodes) {
    for (const sentence of e.paragraphs.flat()) {
      for (const tok of pack.tokenize(sentence.text)) {
        if (tok.kind !== "word") continue;
        const help = helpFor(pack.lexicon, e, tok.normalized);
        if (!help || (/^\p{Lu}/u.test(tok.text) && /^\p{Lu}/u.test(help.meaning))) continue;
        const { lemma, meaning } = cardSense(pack, tok.normalized, help, sentence.text);
        if (SKIP.has(lemma) || notAWordToLearn(lemma, meaning) || pack.isNumberWord?.(lemma)) continue;
        // Names of dishes that are the same in English (tiramisu) aren't worth a card.
        if (meaning.toLowerCase() === lemma) continue;
        if (isTaught(pack, before, lemma) || isTaught(pack, before, tok.normalized)) continue;
        counts.set(lemma, (counts.get(lemma) ?? 0) + 1);
        if (!first.has(lemma)) {
          first.set(lemma, { lemma, word: tok.normalized, surface: tok.text, meaning, sentence: sentence.text, translation: sentence.translation, episode: e.id });
        }
      }
    }
  }
  return [...first.values()]
    .filter((w) => w.episode === episode.id)
    .map((w) => ({ lemma: w.lemma, word: w.word, surface: w.surface, meaning: w.meaning, sentence: w.sentence, translation: w.translation, count: counts.get(w.lemma) ?? 0 }))
    .filter((w) => w.count >= 3)
    .sort((a, b) => b.count - a.count || a.lemma.localeCompare(b.lemma))
    .slice(0, max);
}

/** Minutes a session can be: the learner's choice (Matteo: customisable). null = no limit. */
export const SESSION_LENGTHS = [5, 10, 15, 30, null] as const;
export type SessionLength = (typeof SESSION_LENGTHS)[number];

export type SessionStep = "review" | "episode" | "replay" | "more";

/**
 * What a session of this length holds, in order: review and the next
 * episode always come first; longer sessions add a replay of the last
 * episode (fluency: easy material, no stopping) and then another episode.
 */
export function sessionSteps(length: SessionLength): { steps: SessionStep[]; reviewCards: number } {
  switch (length) {
    case 5:
      return { steps: ["review", "episode"], reviewCards: 5 };
    case 10:
      return { steps: ["review", "episode"], reviewCards: 10 };
    case 15:
      return { steps: ["review", "episode", "replay"], reviewCards: 12 };
    case 30:
      return { steps: ["review", "episode", "replay", "more"], reviewCards: 25 };
    default:
      return { steps: ["review", "episode", "replay", "more"], reviewCards: 200 };
  }
}
