import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import { joinPoints, noVerbIssues, pointExamples, pointStatus, sentenceSpans } from "./writing";
import { unitWords } from "./unit-words";
import { SKIP } from "./review-items";
import { dutch } from "@/packs/nl";
import { italian } from "@/packs/it";
import { buildPrompt, parseFeedback } from "@/lib/writing/ai-feedback";

const packs = listPacks();

describe("point by point writing", () => {
  it("gives every point of every task an example sentence from the model", () => {
    for (const pack of packs)
      for (const unit of pack.units)
        for (const task of unit.writing ?? []) {
          const ex = pointExamples(pack, task);
          ex.forEach((e, i) => expect(e, `${task.id} point ${i + 1}`).not.toBe(""));
        }
  });

  it("never says a model answer or a course sentence has no verb", () => {
    for (const pack of packs) {
      const lines = [
        ...pack.units.flatMap((u) => (u.writing ?? []).map((t) => t.model)),
        ...pack.units.flatMap((u) => u.texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text))),
      ];
      const flagged = lines.flatMap((l) => noVerbIssues(pack, l).map((i) => l.slice(i.start, i.end)));
      // Course texts have the odd heading-like line ("Groetjes, Noor"); model answers must be clean.
      const models = pack.units.flatMap((u) => (u.writing ?? []).map((t) => t.model));
      const inModels = models.flatMap((l) => noVerbIssues(pack, l).map((i) => l.slice(i.start, i.end)));
      expect(inModels, pack.code).toEqual([]);
      expect(flagged.length / lines.length, pack.code).toBeLessThan(0.02);
    }
  });

  it("catches word lists and verbless sentences", () => {
    expect(noVerbIssues(dutch, "Ik 25 jaar.")).toHaveLength(1);
    expect(noVerbIssues(dutch, "Mijn naam Luca.")).toHaveLength(1);
    expect(noVerbIssues(dutch, "jaar")).toHaveLength(1);
    expect(noVerbIssues(italian, "Io 25 anni.")).toHaveLength(1);
  });

  it("lets greetings, label lines and unknown words pass", () => {
    for (const ok of ["Tot ziens!", "Hallo Sanne,", "Naam: Luca Bianchi", "Groeten van Luca.", "Ik fiets naar school.", "Ik zwem graag.", "Ik geef een cadeau."])
      expect(noVerbIssues(dutch, ok), ok).toEqual([]);
    for (const ok of ["Ciao Giulia!", "Mi chiamo Emma.", "Grazie mille!"]) expect(noVerbIssues(italian, ok), ok).toEqual([]);
  });

  it("judges a point by a real sentence that says it", () => {
    const task = dutch.units.find((u) => u.id === "a1-kennismaken")!.writing!.find((w) => w.id === "w-over-mij")!;
    const age = task.points[1];
    const ex = pointExamples(dutch, task)[1];
    expect(pointStatus(dutch, "", age)).toBe("empty");
    expect(pointStatus(dutch, "jaar", age)).toBe("no-sentence");
    expect(pointStatus(dutch, "Ik 25 jaar.", age)).toBe("no-sentence");
    expect(pointStatus(dutch, "Ik ben student.", age)).toBe("missing");
    expect(pointStatus(dutch, "Ik ben vijfentwintig jaar oud.", age)).toBe("ok");
    expect(pointStatus(dutch, ex, age, ex)).toBe("copied");
  });

  it("splits and joins sentences", () => {
    expect(sentenceSpans("Hallo! Ik ben Luca.\nTot ziens").map((s) => s.text)).toEqual(["Hallo!", "Ik ben Luca.", "Tot ziens"]);
    expect(joinPoints(["Ik ben Luca", " Ik woon hier. ", ""])).toBe("Ik ben Luca. Ik woon hier.");
  });
});

describe("unit words", () => {
  it("lists every word once, in the unit that brings it in", () => {
    for (const pack of packs) {
      const all = pack.units.flatMap((u) => unitWords(pack, u).map((w) => w.lemma));
      expect(new Set(all).size, `${pack.code} duplicates`).toBe(all.length);
      const listed = new Set(all);
      for (const level of pack.levels) {
        const core = (pack.coreVocabulary[level] ?? []).filter((w) => !SKIP.has(w) && !w.includes(" ") && !pack.isNumberWord?.(w));
        if (!core.length) continue;
        const missing = core.filter((w) => !listed.has(w));
        // A few core words only appear inside names; nearly all must be listed somewhere up to their level.
        expect(missing.length / core.length, `${pack.code} ${level}: ${missing.slice(0, 10).join(", ")}`).toBeLessThan(0.05);
      }
    }
  });

  it("gives every unit some words", () => {
    for (const pack of packs) for (const u of pack.units) expect(unitWords(pack, u).length, u.id).toBeGreaterThan(8);
  });
});

describe("AI feedback", () => {
  const task = dutch.units[1].writing![0];
  it("asks about every point", () => {
    const prompt = buildPrompt(dutch, task, ["Say your name", "Say your age"], ["Ik heet Matteo.", ""]);
    expect(prompt).toContain("Learner wrote: Ik heet Matteo.");
    expect(prompt).toContain("Learner wrote: (nothing)");
    expect(prompt).toContain("exactly 2 entries");
  });
  it("reads a reply, even with text around the JSON, and fills gaps", () => {
    const reply = 'Here you go:\n{"points":[{"said":true,"note":"Good"}],"corrections":[{"original":"Ik heb 25 jaar","corrected":"Ik ben 25 jaar","why":"You are an age","kind":"grammar"},{"original":"x","corrected":"x","why":"","kind":"grammar"}],"natural":"Ik ben 25.","summary":"Nice."}';
    const f = parseFeedback(reply, 2);
    expect(f.points).toEqual([{ said: true, note: "Good" }, { said: false, note: "" }]);
    expect(f.corrections).toHaveLength(1);
    expect(f.natural).toBe("Ik ben 25.");
  });
  it("fails clearly on a reply that isn't JSON", () => {
    expect(() => parseFeedback("Sorry, I can't.", 1)).toThrow(/understands/);
  });
});
