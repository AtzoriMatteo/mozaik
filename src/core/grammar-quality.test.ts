import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import type { GrammarPoint } from "./content";
import { dutch } from "@/packs/nl";

/**
 * Grammar lessons in the textbook shape (Matteo, 21 Nov 2026): explained step
 * by step, with real mistakes, a short text, a summary card, and exercises you
 * can't answer by guessing the same word every time.
 */
const textbook = (g: GrammarPoint) => g.lesson?.blocks.some((b) => b.kind === "summary");

describe("grammar lessons in the textbook shape", () => {
  it("covers every Dutch A1 lesson", () => {
    const missing = dutch.grammar.filter((g) => g.level === "A1" && !textbook(g)).map((g) => g.id);
    expect(missing).toEqual([]);
  });

  for (const pack of listPacks()) {
    const lessons = pack.grammar.filter(textbook);

    it.each(lessons.map((g) => [`${pack.code} ${g.id}`, g] as const))("%s: has every part", (_id, g) => {
      const kinds = g.lesson!.blocks.map((b) => b.kind);
      expect(kinds[0], "starts with a step").toBe("step");
      expect(kinds.filter((k) => k === "step").length, "explained in steps").toBeGreaterThanOrEqual(2);
      expect(kinds, "has a table or a sentence diagram").toEqual(expect.arrayContaining([expect.stringMatching(/^(table|slots)$/)]));
      expect(kinds, "has the mistakes learners make").toContain("mistakes");
      expect(kinds, "ends the explanation with a summary card").toContain("summary");
      for (const b of g.lesson!.blocks) {
        if (b.kind === "mistakes") {
          expect(b.items.length).toBeGreaterThanOrEqual(2);
          for (const m of b.items) {
            expect(m.wrong, m.right).not.toBe(m.right);
            expect(m.why.trim()).not.toBe("");
          }
        }
        if (b.kind === "passage") {
          expect(b.sentences.length).toBeGreaterThanOrEqual(3);
          for (const s of b.sentences) expect(s.translation.trim(), s.text).not.toBe("");
          for (const h of b.highlight) expect(b.sentences.some((s) => s.text.includes(h)), `${g.id}: highlight "${h}"`).toBe(true);
        }
      }
    });

    it.each(lessons.map((g) => [`${pack.code} ${g.id}`, g] as const))("%s: exercises go from easy to harder and can't be guessed", (_id, g) => {
      const ex = g.lesson!.exercises;
      expect(ex.length, "enough practice").toBeGreaterThanOrEqual(9);
      expect(new Set(ex.map((e) => e.kind)).size, "varied kinds").toBeGreaterThanOrEqual(4);
      const choices = ex.filter((e) => e.kind === "choice");
      for (const c of choices) {
        expect(new Set(c.options).size, `${c.before}___${c.after}`).toBe(c.options.length);
        expect(c.options.length, `${c.before}___${c.after}`).toBeGreaterThanOrEqual(2);
      }
      // The een problem: one answer for most of the choices.
      if (choices.length >= 4) {
        const counts = new Map<string, number>();
        for (const c of choices) {
          const a = c.options[c.answer].toLowerCase();
          counts.set(a, (counts.get(a) ?? 0) + 1);
        }
        const top = Math.max(...counts.values());
        expect(top / choices.length, `${g.id}: one answer dominates ${JSON.stringify([...counts])}`).toBeLessThanOrEqual(0.6);
      }
    });
  }
});
