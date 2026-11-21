import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import { activities } from "./course";
import { helpFor } from "./content";
import { correctAnswer } from "@/components/grammar/grammar-lesson";

const norm = (s: string) => s.toLowerCase().replace(/["“”„«»]/g, "").replace(/[.!?,;:…]/g, "").replace(/\s+/g, " ").trim();

describe("story units (Matteo, 17 Nov 2026)", () => {
  for (const pack of listPacks()) {
    const storyUnits = pack.units.filter((u) => u.story);

    it(`${pack.code}: a story unit's activities follow its sequence, every id real`, () => {
      for (const u of storyUnits) {
        // The grammar mix goes in just before the checkpoint, whatever the sequence says.
        const ids = activities(pack).filter((a) => a.unit.id === u.id && !a.id.startsWith("mix-")).map((a) => (a.kind === "write" ? "write" : a.kind === "words" ? "words" : a.kind === "check" ? "check" : a.id));
        for (const id of u.sequence ?? []) expect(ids, `${u.id}: ${id}`).toContain(id);
        expect(ids.slice(0, (u.sequence ?? []).length)).toEqual(u.sequence);
      }
    });

    it(`${pack.code}: never three of the same kind in a row while another kind is waiting`, () => {
      for (const u of pack.units) {
        const kinds = activities(pack).filter((a) => a.unit.id === u.id).map((a) => a.kind);
        for (let i = 2; i < kinds.length; i++) {
          if (kinds[i] !== kinds[i - 1] || kinds[i] !== kinds[i - 2]) continue;
          const waiting = kinds.slice(i + 1).some((k) => k !== kinds[i] && (k === "read" || k === "listen" || k === "grammar"));
          expect(waiting, `${u.id}: three ${kinds[i]} in a row at ${i}`).toBe(false);
        }
      }
    });

    it(`${pack.code}: grammar exercises make you think, not copy a sentence from the unit's texts`, () => {
      const copied: string[] = [];
      for (const u of pack.units) {
        const own = new Set(u.texts.flatMap((t) => t.paragraphs.flat().map((s) => norm(s.text))));
        for (const g of pack.grammar.filter((x) => x.unit === u.id)) {
          for (const ex of g.lesson?.exercises ?? []) {
            const full = norm(correctAnswer(ex));
            if (own.has(full) && full.split(" ").length > 3) copied.push(`${g.id}: ${full}`);
          }
        }
      }
      expect(copied).toEqual([]);
    });

    it(`${pack.code}: checkpoints are complete and every word has help`, () => {
      for (const u of pack.units.filter((x) => x.checkpoint)) {
        const cp = u.checkpoint!;
        expect(cp.textTasks.length, u.id).toBeGreaterThanOrEqual(2);
        expect(cp.listening.questions.length, u.id).toBeGreaterThanOrEqual(2);
        for (const q of cp.listening.questions) expect(q.answer, u.id).toBeLessThan(q.options.length);
        expect(cp.write.points.length, u.id).toBeGreaterThanOrEqual(2);
        const missing: string[] = [];
        for (const s of [...cp.text.flat(), ...cp.listening.lines])
          for (const t of pack.tokenize(s.text))
            if (t.kind === "word" && !helpFor(pack.lexicon, { words: cp.words }, t.normalized) && !pack.isNumberWord?.(t.normalized)) missing.push(t.normalized);
        expect(missing, u.id).toEqual([]);
      }
    });
  }
});
