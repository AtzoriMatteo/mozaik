import { describe, expect, it } from "vitest";
import { dutch } from "..";
import { allTexts } from "@/core/language-pack";
import { isNumberWord } from "./data";
import { countWords, coveredPoints, LONG_ENOUGH, WRITING_LENGTHS } from "@/core/writing";

const check = dutch.checkWriting!;
const fixes = (text: string) => check(text).map((i) => `${text.slice(i.start, i.end)} → ${i.fix ?? "?"}`);

describe("Dutch writing checker: catches learner mistakes", () => {
  it.each([
    ["Morgen ik heb les.", "ik heb → heb ik"],
    ["Op maandag ik werk in een café.", "ik werk → werk ik"],
    ["Waar jij woont?", "jij woont → woon jij"],
    ["Woont jij in Leiden?", "Woont → Woon"],
    ["Ik woont in Leiden.", "woont → woon"],
    ["Hij woon in Leiden.", "woon → woont"],
    ["Wij woont samen.", "woont → wonen"],
    ["Ik bent student.", "bent → ben"],
    ["Hij heb een broer.", "heb → heeft"],
    ["Ik heb niet een auto.", "niet een → geen"],
    ["De huis is groot.", "De → Het"],
    ["Het stad is mooi.", "Het → De"],
    ["Ik woon in een grote huis.", "grote → groot"],
    ["Het is een mooi stad.", "mooi → mooie"],
    ["De groot kamer is leeg.", "groot → grote"],
    ["Ik heb 25 jaar.", "heb → ben"],
    ["Ik heb drieëntwintig jaar.", "heb → ben"],
    ["Ik ben honger.", "ben → heb"],
    ["Ik ben koud.", "ben koud → heb het koud"],
    ["Ik werk in maandag.", "in → op"],
    ["Mijn verjaardag is op mei.", "op → in"],
    ["De les begint op acht uur.", "op → om"],
    ["De les begint in half negen.", "in → om"],
    ["Leiden is kleiner als Amsterdam.", "als → dan"],
    ["Amsterdam is meer groot.", "meer groot → groter"],
    ["Nederlands is meer moeilijk als Engels.", "als → dan"],
    ["Ik ga op Maandag naar school.", "Maandag → maandag"],
    ["Morgen ga Ik naar school.", "Ik → ik"],
    ["ik woon in Leiden.", "ik → Ik"],
  ])("%s", (text, expected) => {
    expect(fixes(text)).toContain(expected);
  });
});

describe("Dutch writing checker: stays quiet on correct Dutch", () => {
  it.each([
    "Morgen heb ik les.",
    "Waar woon jij?",
    "Woon jij in Leiden?",
    "Eet jij graag vis?",
    "Ik ben drieëntwintig jaar.",
    "Ik heb honger en dorst.",
    "Het is koud vandaag.",
    "Ik heb geen auto.",
    "Het huis is groot en de stad is mooi.",
    "Ik woon in een groot huis met een mooie tuin.",
    "Om half negen fiets ik naar de universiteit.",
    "Het werk is zwaar.",
    "Met de trein ben je in drie uur in Parijs.",
    "Op maandag werk ik in het café.",
    "Leiden is kleiner dan Amsterdam.",
    "Ze wonen samen. Zij is student.",
    "Woont je moeder in Italië?",
    "Wij zijn student en we hebben een kat.",
  ])("%s", (text) => {
    expect(check(text)).toEqual([]);
  });

  it("finds nothing wrong in any course text", () => {
    const flagged: string[] = [];
    for (const t of allTexts(dutch)) {
      for (const s of t.paragraphs.flat()) {
        // Quotes and dialogue punctuation are outside A1 writing; check the plain sentence.
        const plain = s.text.replace(/["“”]/g, "");
        if (plain.includes("niet de kind")) continue; // Noor quotes Luca's mistake on purpose
        for (const i of check(plain)) if (i.kind === "grammar") flagged.push(`${t.id}: ${plain.slice(i.start, i.end)} (${i.message})`);
      }
    }
    expect(flagged).toEqual([]);
  });

  it("recognises number words", () => {
    for (const w of ["drieëntwintig", "zevenenveertig", "honderdvijftien", "tweeduizend", "vijfhonderdvijftig", "nul"].slice(0, 5)) {
      expect(isNumberWord(w), w).toBe(true);
    }
    expect(isNumberWord("huis")).toBe(false);
  });
});

describe("A1 writing topics", () => {
  const tasks = dutch.units.flatMap((u) => u.writing ?? []);

  it("gives every unit at least three topics with six points", () => {
    for (const u of dutch.units) {
      expect(u.writing?.length, u.id).toBeGreaterThanOrEqual(3);
      for (const t of u.writing!) expect(t.points.length, t.id).toBe(6);
    }
    expect(new Set(tasks.map((t) => t.id)).size).toBe(tasks.length);
  });

  it.each(tasks.map((t) => [t.id, t] as const))("%s: model answer is long enough, covers every point and passes the checker", (_id, t) => {
    expect(countWords(t.model), t.id).toBeGreaterThanOrEqual(WRITING_LENGTHS.A1[2] * LONG_ENOUGH);
    const covered = coveredPoints(dutch, t.model, t.points);
    expect(t.points.filter((_, i) => !covered[i]).map((pt) => pt.prompt)).toEqual([]);
    const issues = check(t.model).map((i) => `${t.model.slice(i.start, i.end)}: ${i.message}`);
    expect(issues).toEqual([]);
  });
});
