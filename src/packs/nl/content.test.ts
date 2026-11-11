import { describe, expect, it } from "vitest";
import { countWords, helpFor, lemmaOf } from "@/core/content";
import { allTexts } from "@/core/language-pack";
import { dutch } from ".";

const texts = allTexts(dutch);

describe("Dutch course structure", () => {
  it("has unique unit and text ids", () => {
    const unitIds = dutch.units.map((u) => u.id);
    const textIds = texts.map((t) => t.id);
    expect(new Set(unitIds).size).toBe(unitIds.length);
    expect(new Set(textIds).size).toBe(textIds.length);
  });

  it("gives every unit can-do goals and at least two different texts", () => {
    for (const unit of dutch.units) {
      expect(unit.canDo.length, unit.id).toBeGreaterThan(0);
      expect(unit.texts.length, unit.id).toBeGreaterThanOrEqual(2);
      for (const t of unit.texts) expect(t.level).toBe(unit.level);
    }
  });

  it("only uses levels the pack offers", () => {
    for (const t of texts) expect(dutch.levels).toContain(t.level);
  });

  it("keeps A1 texts substantial but readable (120–320 words)", () => {
    for (const t of texts.filter((t) => t.level === "A1")) {
      const n = countWords(t);
      expect(n, t.id).toBeGreaterThanOrEqual(120);
      expect(n, t.id).toBeLessThanOrEqual(320);
    }
  });

  it("gives every sentence a translation", () => {
    for (const t of texts) {
      for (const s of t.paragraphs.flat()) expect(s.translation.trim(), s.text).not.toBe("");
    }
  });
});

describe("Dutch word help", () => {
  // Every tappable word must have help, so a tap never comes up empty.
  it.each(texts.map((t) => [t.id, t] as const))("%s: every word has help", (_id, text) => {
    const missing = new Set<string>();
    for (const sentence of text.paragraphs.flat()) {
      for (const tok of dutch.tokenize(sentence.text)) {
        if (tok.kind === "word" && !helpFor(dutch.lexicon, text, tok.normalized)) {
          missing.add(tok.normalized);
        }
      }
    }
    expect([...missing]).toEqual([]);
  });

  // Calm by design: each layer is one short line.
  it("keeps every help line short", () => {
    for (const [word, help] of Object.entries(dutch.lexicon)) {
      for (const line of [help.meaning, help.closer, help.local]) {
        if (line) expect(line.length, `${word}: "${line}"`).toBeLessThanOrEqual(80);
      }
    }
  });
});

describe("A1 coverage", () => {
  const a1 = texts.filter((t) => t.level === "A1");

  it("every A1 core word appears in at least one A1 text", () => {
    const met = new Set<string>();
    for (const t of a1) {
      for (const s of t.paragraphs.flat()) {
        for (const tok of dutch.tokenize(s.text)) {
          if (tok.kind !== "word") continue;
          met.add(tok.normalized);
          met.add(lemmaOf(helpFor(dutch.lexicon, t, tok.normalized), tok.normalized));
        }
      }
    }
    const missing = (dutch.coreVocabulary.A1 ?? []).filter((w) => !met.has(w));
    expect(missing).toEqual([]);
  });

  it("every A1 grammar point is featured by at least one A1 text", () => {
    const featured = new Set(a1.flatMap((t) => t.grammar));
    const missing = dutch.grammar.filter((g) => g.level === "A1" && !featured.has(g.id));
    expect(missing.map((g) => g.id)).toEqual([]);
  });

  it("texts only tag grammar points that exist", () => {
    const ids = new Set(dutch.grammar.map((g) => g.id));
    for (const t of texts) for (const g of t.grammar) expect(ids, `${t.id}: ${g}`).toContain(g);
  });
});
