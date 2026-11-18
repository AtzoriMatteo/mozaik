import type { CefrLevel, LanguagePack } from "./language-pack";
import { lemmaFor } from "./dictionary";
import type { ReviewItem } from "./review-items";
import { unitWords } from "./unit-words";

/**
 * Which part of the course a review covers: everything, or only some units.
 * A unit's cards are the ones its Words page lists, its grammar lessons and
 * its listening. Saved words count for the unit whose word list has them;
 * "saved" picks every word saved while reading, wherever it's from.
 */
export type ReviewScope = { units: ReadonlySet<string>; saved: boolean } | null;

const cache = new WeakMap<LanguagePack, { words: Map<string, string>; listen: Map<string, string> }>();

function index(pack: LanguagePack) {
  let idx = cache.get(pack);
  if (!idx) {
    const words = new Map<string, string>();
    const listen = new Map<string, string>();
    for (const unit of pack.units) {
      for (const w of unitWords(pack, unit)) if (!words.has(w.lemma)) words.set(w.lemma, unit.id);
      for (const l of unit.listening) listen.set(l.id, unit.id);
    }
    idx = { words, listen };
    cache.set(pack, idx);
  }
  return idx;
}

/** The unit a review card belongs to, or null (a saved word no unit lists). */
export function unitOfItem(pack: LanguagePack, item: ReviewItem): string | null {
  const idx = index(pack);
  switch (item.kind) {
    case "word": {
      const lemma = lemmaFor(item);
      return idx.words.get(lemma) ?? idx.words.get(item.word.toLowerCase()) ?? item.unitId ?? null;
    }
    case "grammar":
      return pack.grammar.find((g) => g.id === item.pointId)?.unit ?? null;
    case "listen":
      return idx.listen.get(item.id.split(":")[1]) ?? null;
    default:
      return null;
  }
}

export function inScope(pack: LanguagePack, item: ReviewItem, scope: ReviewScope): boolean {
  if (!scope) return true;
  if (scope.saved && item.kind === "word" && item.source === "saved") return true;
  const unit = unitOfItem(pack, item);
  return unit !== null && scope.units.has(unit);
}

/** Every unit of a level, for the level chips. */
export function levelUnits(pack: LanguagePack, level: CefrLevel): string[] {
  return pack.units.filter((u) => u.level === level).map((u) => u.id);
}
