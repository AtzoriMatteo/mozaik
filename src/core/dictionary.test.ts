import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import { cardMeaning, dictionaryLabel, lemmaFor, singular } from "./dictionary";
import { eligibleItems } from "./review-items";

const none = { read: new Set<string>(), listen: new Set<string>(), grammar: new Set<string>(), speak: new Set<string>() };

describe("dictionary form", () => {
  it("shows nouns with their article and other words bare", () => {
    expect(dictionaryLabel(dutch, "gracht")).toBe("de gracht");
    expect(dictionaryLabel(dutch, "huis")).toBe("het huis");
    expect(dictionaryLabel(dutch, "kopje")).toBe("het kopje");
    expect(dictionaryLabel(dutch, "wonen")).toBe("wonen");
    expect(lemmaFor({ word: "grachten", base: "gracht" })).toBe("gracht");
  });

  it("gives every core A1 noun of the writing lists an article", () => {
    for (const w of ["fiets", "station", "ziekenhuis", "tafel", "kind"]) {
      expect(dutch.nounArticle?.(w), w).not.toBeNull();
    }
  });

  it("makes one card for grachten and gracht", () => {
    const word = (w: string, base?: string) => ({ word: w, surface: w, base, meaning: "canal", sentence: `De ${w}.` });
    const items = eligibleItems(dutch, none, { savedWords: [word("grachten", "gracht"), word("gracht")] });
    expect(items.filter((i) => i.kind === "word")).toHaveLength(1);
  });
});

describe("flashcard meanings", () => {
  it("gives verbs as 'to …' and nouns in the singular", () => {
    expect(cardMeaning(dutch, "tellen", "counts")).toBe("to count");
    expect(cardMeaning(dutch, "getal", "numbers")).toBe("number");
    expect(cardMeaning(dutch, "keuken", "kitchens")).toBe("kitchen");
  });
  it("makes English plurals singular", () => {
    expect(["cities", "boxes", "children", "buses", "news", "glasses"].map(singular)).toEqual(["city", "box", "child", "bus", "news", "glass"]);
  });
});
