import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import { italian } from "@/packs/it";
import { helpFor } from "./content";
import { cardArticle, dictionaryLabel, lemmaFor } from "./dictionary";
import { eligibleItems, type WordItem } from "./review-items";

/**
 * Every card a learner can make: each word of every text, clip and checkpoint,
 * saved on its own, exactly as Review would show it.
 */
function savedCards(pack: typeof dutch) {
  const out: { form: string; base?: string; lemma: string; label: string; meaning: string; sentence: string }[] = [];
  const done = { read: new Set<string>(), listen: new Set<string>(), grammar: new Set<string>(), speak: new Set<string>() };
  const seen = new Set<string>();
  const scan = (owner: { words?: Record<string, { meaning: string; base?: string }> }, sentence: string) => {
    for (const tok of pack.tokenize(sentence)) {
      if (tok.kind !== "word") continue;
      const help = helpFor(pack.lexicon, owner, tok.normalized);
      if (!help) continue;
      const key = `${tok.normalized}|${help.base ?? ""}|${help.meaning}|${sentence}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const saved = { word: tok.normalized, surface: tok.text, base: help.base, meaning: help.meaning, sentence };
      const [item] = eligibleItems(pack, done, { savedWords: [saved] }) as WordItem[];
      if (!item) continue;
      const lemma = lemmaFor(item);
      out.push({ form: tok.normalized, base: help.base, lemma, label: dictionaryLabel(pack, lemma, item.meaning), meaning: item.meaning, sentence });
    }
  };
  for (const unit of pack.units) {
    for (const text of unit.texts) for (const s of text.paragraphs.flat()) scan(text, s.text);
    for (const clip of unit.listening) for (const line of clip.lines) scan(clip as never, line.text);
    if (unit.checkpoint) for (const s of unit.checkpoint.text.flat()) scan(unit.checkpoint, s.text);
  }
  return out;
}

describe("every card a learner can save", () => {
  for (const pack of [dutch, italian]) {
    const cards = savedCards(pack);

    it(`${pack.code}: a card with an article is never a verb`, () => {
      const bad = cards.filter((c) => cardArticle(pack, c.lemma, c.meaning) && /^to /.test(c.meaning)).map((c) => c.label);
      expect([...new Set(bad)]).toEqual([]);
    });

    it(`${pack.code}: names and places never take an article, unless they really do`, () => {
      const bad = cards.filter((c) => /^\S+ \p{Lu}/u.test(c.label) && !pack.properArticles?.has(c.lemma)).map((c) => c.label);
      expect([...new Set(bad)]).toEqual([]);
    });

    it(`${pack.code}: every dictionary form a word points to has its own entry`, () => {
      const missing = cards.filter((c) => c.base && c.base.toLowerCase() !== c.form && !pack.lexicon[c.base.toLowerCase()]).map((c) => c.base);
      expect([...new Set(missing)]).toEqual([]);
    });

    it(`${pack.code}: no meaning reads "to" + a noun plural or an adverb`, () => {
      const bad = cards.filter((c) => /^to (early|late|bikes|books|answers|checks)\b/.test(c.meaning)).map((c) => `${c.label} = ${c.meaning}`);
      expect([...new Set(bad)]).toEqual([]);
    });
  }

  it("the sentence picks the right dictionary form for a homograph", () => {
    const cards = savedCards(dutch);
    const find = (form: string, sentence: RegExp) => cards.find((c) => c.form === form && sentence.test(c.sentence));
    const verb = cards.find((c) => c.form === "fietst");
    if (verb) expect(verb.label).toBe("fietsen");
    const city = find("leiden", /\bLeiden\b/);
    if (city) expect(city.label).toBe("Leiden");
  });
});
