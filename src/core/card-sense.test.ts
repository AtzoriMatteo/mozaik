import { describe, expect, it } from "vitest";
import { getPack, listPacks } from "./registry";
import { cardArticle, cardSense, dictionaryLabel } from "./dictionary";
import { wordIndex } from "./review-items";
import { notAWordToLearn, unitWords } from "./unit-words";

const nl = getPack("nl")!;
const card = (form: string, sentence: string) => {
  const { lemma, meaning } = cardSense(nl, form, nl.lexicon[form] ?? { meaning: "" }, sentence);
  return `${dictionaryLabel(nl, lemma, meaning)} = ${meaning}`;
};

describe("the sentence decides a card's sense", () => {
  it("eten: the verb after a pronoun, the noun after het", () => {
    expect(card("eten", "Wat eten we vanavond?")).toBe("eten = to eat");
    expect(card("eten", "Het eten is klaar.")).toBe("het eten = food, meal");
  });
  it("weg, weer, fout: adverb or adjective unless a noun is clearly meant", () => {
    expect(card("weg", "Na twee weken was de pijn weg.")).toBe("weg = away");
    expect(card("weg", "De weg naar huis is lang.")).toBe("de weg = road, way");
    expect(card("weer", "Zie je iemand morgen weer?")).toBe("weer = again");
    expect(card("weer", "Het weer is slecht.")).toBe("het weer = weather");
  });
  it("a plural noun that is also a verb: the verb when conjugated, the noun as a plural", () => {
    expect(card("geboekt", "We hebben een hotel geboekt.")).toBe("boeken = to book");
    expect(card("boeken", "Ik lees twee boeken.")).toBe("het boek = book");
  });
  it("an adjective between the article and the noun", () => {
    expect(card("reden", "Toch is er een goede reden.")).toBe("de reden = reason");
  });
  it("a verb used as a noun (het schaatsen) is still the verb's card", () => {
    expect(card("uitstappen", "Bij het uitstappen checkt u uit.")).toBe("uitstappen = to get off, to get out");
  });
  it("names, nationalities and languages take a capital", () => {
    expect(dictionaryLabel(nl, "nederlands", "Dutch")).toBe("Nederlands");
    expect(dictionaryLabel(nl, "nederland", "the Netherlands")).toBe("Nederland");
    expect(dictionaryLabel(nl, "maandag", "Monday")).toBe("maandag");
    expect(dictionaryLabel(nl, "tv", "TV")).toBe("de tv");
  });
});

describe("every card", () => {
  for (const pack of listPacks()) {
    const cards = [
      ...pack.levels.flatMap((lv) => [...wordIndex(pack, lv)].map(([lemma, i]) => ({ lemma, meaning: i.meaning }))),
      ...pack.units.flatMap((u) => unitWords(pack, u).map((w) => ({ lemma: w.lemma, meaning: w.meaning }))),
    ];
    it(`${pack.code}: a noun card never has a verb meaning`, () => {
      const bad = cards.filter((c) => cardArticle(pack, c.lemma, c.meaning) && /(^|; )to /.test(c.meaning));
      expect(bad.map((c) => `${c.lemma}: ${c.meaning}`)).toEqual([]);
    });
    it(`${pack.code}: no "to" glued onto a non-verb (to books, to nine)`, () => {
      const bad = cards.filter((c) => /^to (books|countries|bags|jokes|worries|bins|nine|easy|leiden)/i.test(c.meaning));
      expect(bad).toEqual([]);
    });
    it(`${pack.code}: unit word lists have no names, letters or sounds`, () => {
      const bad = pack.units.flatMap((u) => unitWords(pack, u)).filter((w) => notAWordToLearn(w.lemma, w.meaning));
      expect(bad.map((w) => w.lemma)).toEqual([]);
    });
  }
});
