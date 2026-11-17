import type { SlangItem, SlangPart, SlangRegister, WordHelp } from "./content";
import type { LanguagePack } from "./language-pack";

/** How each register is labelled, and when it fits. */
export const REGISTER: Record<SlangRegister, { label: string; when: string }> = {
  everyone: { label: "Everyday", when: "Informal, fine with almost anyone you call je." },
  casual: { label: "Casual", when: "Friends, housemates, colleagues you know well. Not with strangers or your boss." },
  young: { label: "Young people", when: "Mostly people under about 35." },
  teens: { label: "Teens", when: "Mostly teenagers. From an adult it sounds like trying too hard." },
  street: { label: "Straattaal", when: "Young people in cities and beyond. Recognise it; don't copy it yet." },
  chat: { label: "Chat only", when: "Written in chats and texts, not said." },
  rude: { label: "Swearing", when: "Not at work, with children or strangers." },
  rare: { label: "Rarely said", when: "In textbooks, but people hardly say it." },
};

export const STRENGTH = { 1: "mild", 2: "strong", 3: "very offensive" } as const;

/** The label to show for an item: "Swearing · strong", "Straattaal". */
export function registerLabel(item: Pick<SlangItem, "who" | "strength">): string {
  const base = REGISTER[item.who].label;
  return item.strength ? `${base} · ${STRENGTH[item.strength]}` : base;
}

export function slangParts(pack: LanguagePack): readonly SlangPart[] {
  return pack.slang ?? [];
}

export function slangForUnit(pack: LanguagePack, unitId: string): SlangPart[] {
  return slangParts(pack).filter((p) => p.unit === unitId);
}

export function findSlang(pack: LanguagePack, id: string): SlangPart | undefined {
  return slangParts(pack).find((p) => p.id === id);
}

/** Lower-cased word sequences an item can appear as in the lines. */
export function itemShapes(pack: LanguagePack, it: SlangItem): string[][] {
  return [it.form, ...(it.forms ?? [])]
    .map((f) => words(pack, f))
    .filter((w) => w.length > 0);
}

function words(pack: LanguagePack, text: string): string[] {
  return pack.tokenize(text).filter((t) => t.kind === "word").map((t) => t.normalized);
}

/**
 * Which item each word of a line belongs to (by index into the line's words),
 * longest match first, so "nee joh" wins over "joh".
 */
export function itemsInLine(pack: LanguagePack, part: SlangPart, lineWords: readonly string[]): (SlangItem | null)[] {
  const out: (SlangItem | null)[] = lineWords.map(() => null);
  const shapes = part.items
    .filter((it) => !it.heardOnly)
    .flatMap((it) => itemShapes(pack, it).map((shape) => ({ it, shape })))
    .sort((a, b) => b.shape.length - a.shape.length);
  for (const { it, shape } of shapes) {
    for (let start = 0; start + shape.length <= lineWords.length; start++) {
      if (!shape.every((w, k) => lineWords[start + k] === w)) continue;
      if (out.slice(start, start + shape.length).some(Boolean)) continue;
      for (let k = 0; k < shape.length; k++) out[start + k] = it;
    }
  }
  return out;
}

/** Help for a slang item, shaped like word help so the word panel can show it. */
export function slangHelp(it: SlangItem): WordHelp {
  return {
    meaning: it.standard ? `${it.meaning} (= ${it.standard})` : it.meaning,
    local: it.note,
    closer: it.origin,
  };
}

/**
 * Help for a word in a slang part: the part's own words, then the pack
 * lexicon, then a one-word slang item met in another part (ff, da's, x).
 */
export function slangWordHelp(pack: LanguagePack, part: SlangPart, normalized: string): WordHelp | undefined {
  const own = part.words?.[normalized] ?? pack.lexicon[normalized];
  if (own) return own;
  const met = slangParts(pack)
    .flatMap((p) => p.items)
    .find((it) => itemShapes(pack, it).some((shape) => shape.length === 1 && shape[0] === normalized));
  return met ? slangHelp(met) : undefined;
}

/** Every slang item's words, for checking they stay out of the regular course. */
export function slangOnlyItems(part: SlangPart): SlangItem[] {
  return part.items.filter((it) => it.who === "young" || it.who === "teens" || it.who === "street" || it.who === "chat" || it.who === "rude");
}
