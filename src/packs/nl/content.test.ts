import { describe, expect, it } from "vitest";
import { countWords, helpFor, lemmaOf, type Task } from "@/core/content";
import { splitGaps } from "@/components/exercises/boards";
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

describe("Dutch listening material", () => {
  const items = dutch.units.flatMap((u) => u.listening);

  it("gives every unit at least one listening item", () => {
    for (const unit of dutch.units) expect(unit.listening.length, unit.id).toBeGreaterThan(0);
  });

  it("has unique ids, distinct from text ids", () => {
    const ids = [...items.map((i) => i.id), ...texts.map((t) => t.id)];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(items.map((i) => [i.id, i] as const))("%s: every word has help", (_id, item) => {
    const missing = new Set<string>();
    for (const line of item.lines) {
      for (const tok of dutch.tokenize(line.text)) {
        if (tok.kind === "word" && !helpFor(dutch.lexicon, item, tok.normalized)) missing.add(tok.normalized);
      }
    }
    expect([...missing]).toEqual([]);
  });

  it("has well-formed questions and dictation lines", () => {
    for (const item of items) {
      for (const q of [item.gist, ...item.details]) {
        expect(q.options.length, `${item.id}: ${q.prompt}`).toBeGreaterThanOrEqual(2);
        expect(q.answer, `${item.id}: ${q.prompt}`).toBeLessThan(q.options.length);
      }
      expect(item.details.length, item.id).toBeGreaterThan(0);
      expect(item.dictation.length, item.id).toBeGreaterThan(0);
      for (const i of item.dictation) expect(item.lines[i], `${item.id} line ${i}`).toBeDefined();
      for (const line of item.lines) expect(line.translation.trim()).not.toBe("");
    }
  });

  it("only tags grammar points that exist", () => {
    const ids = new Set(dutch.grammar.map((g) => g.id));
    for (const item of items) for (const g of item.grammar) expect(ids, `${item.id}: ${g}`).toContain(g);
  });
});

describe("Dutch grammar lessons", () => {
  const units = new Set(dutch.units.map((u) => u.id));
  const sentences = [
    ...texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text)),
    ...dutch.units.flatMap((u) => u.listening.flatMap((l) => l.lines.map((x) => x.text))),
  ].map((s) => s.replace(/"/g, ""));

  it.each(dutch.grammar.filter((g) => g.level === "A1").map((g) => [g.id, g] as const))(
    "%s: has a unit and a full lesson",
    (_id, g) => {
      expect(units).toContain(g.unit);
      expect(g.lesson, g.id).toBeDefined();
      expect(g.lesson!.blocks.length).toBeGreaterThan(0);
      expect(g.lesson!.examples.length).toBeGreaterThanOrEqual(2);
      expect(g.lesson!.exercises.length).toBeGreaterThanOrEqual(5);
    },
  );

  it("quotes examples from the course and highlights words that are in them", () => {
    for (const g of dutch.grammar) {
      for (const ex of g.lesson?.examples ?? []) {
        expect(sentences.some((s) => s.includes(ex.text)), `${g.id}: "${ex.text}"`).toBe(true);
        for (const h of ex.highlight) expect(ex.text, `${g.id}: ${h}`).toContain(h);
      }
    }
  });

  it("has well-formed exercises", () => {
    for (const g of dutch.grammar) {
      for (const ex of g.lesson?.exercises ?? []) {
        const where = `${g.id}: ${JSON.stringify(ex).slice(0, 60)}`;
        if (ex.kind === "choice") expect(ex.answer, where).toBeLessThan(ex.options.length);
        if (ex.kind === "build") expect(ex.tiles.length, where).toBeGreaterThanOrEqual(3);
        if (ex.kind === "fill" || ex.kind === "transform") expect(ex.answers.length, where).toBeGreaterThan(0);
        expect(ex.translation.trim(), where).not.toBe("");
      }
    }
  });
});

describe("Dutch speaking practice", () => {
  const soundIds = new Set(dutch.sounds.map((s) => s.id));
  const sentences = [
    ...texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text)),
    ...dutch.units.flatMap((u) => u.listening.flatMap((l) => l.lines.map((x) => x.text))),
  ].map((s) => s.replace(/"/g, ""));

  it("gives every unit sounds to drill and sentences to shadow", () => {
    for (const unit of dutch.units) {
      expect(unit.speaking, unit.id).toBeDefined();
      expect(unit.speaking!.sounds.length, unit.id).toBeGreaterThan(0);
      expect(unit.speaking!.shadowing.length, unit.id).toBeGreaterThanOrEqual(3);
      for (const id of unit.speaking!.sounds) expect(soundIds, unit.id).toContain(id);
    }
  });

  it("teaches every sound somewhere", () => {
    const used = new Set(dutch.units.flatMap((u) => u.speaking?.sounds ?? []));
    expect(dutch.sounds.filter((s) => !used.has(s.id)).map((s) => s.id)).toEqual([]);
  });

  it("quotes shadowing sentences from the unit's own material", () => {
    for (const unit of dutch.units) {
      const own = [
        ...unit.texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text)),
        ...unit.listening.flatMap((l) => l.lines.map((x) => x.text)),
      ].map((s) => s.replace(/"/g, ""));
      for (const s of unit.speaking?.shadowing ?? []) {
        expect(own.some((o) => o.includes(s.text)), `${unit.id}: "${s.text}"`).toBe(true);
      }
    }
    expect(sentences.length).toBeGreaterThan(0);
  });

  it("uses minimal pairs where the sound really is the difference", () => {
    for (const s of dutch.sounds) {
      for (const [word, other] of s.pairs) {
        const inWord = s.spellings.some((sp) => new RegExp(sp).test(word));
        const inOther = s.spellings.some((sp) => new RegExp(sp).test(other));
        expect(inWord || inOther, `${s.id}: ${word}/${other}`).toBe(true);
        expect(word).not.toBe(other);
      }
    }
  });
});

describe("Comprehension and practice tasks", () => {
  const words = (s: string) => dutch.tokenize(s).filter((t) => t.kind === "word").map((t) => t.normalized);

  function checkTask(where: string, t: Task, lines?: { text: string }[]) {
    switch (t.kind) {
      case "choice":
        expect(t.answer, where).toBeLessThan(t.options.length);
        expect(new Set(t.options).size, where).toBe(t.options.length);
        break;
      case "truefalse":
        expect(t.statement.trim(), where).not.toBe("");
        expect(t.translation.trim(), where).not.toBe("");
        break;
      case "order":
        expect(t.items.length, where).toBeGreaterThanOrEqual(3);
        expect(new Set(t.items).size, where).toBe(t.items.length);
        break;
      case "match":
        expect(t.pairs.length, where).toBeGreaterThanOrEqual(2);
        for (const p of t.pairs) expect(p.length, `${where}: ${p}`).toBe(2);
        break;
      case "gaps": {
        expect(lines, where).toBeDefined();
        const l = lines![t.line];
        expect(l, `${where} line ${t.line}`).toBeDefined();
        expect(splitGaps(l.text, t.words).gaps, `${where}: ${l.text}`).toEqual(t.words);
        break;
      }
      case "heard": {
        expect(lines, where).toBeDefined();
        const l = lines![t.line];
        expect(l, `${where} line ${t.line}`).toBeDefined();
        const inLine = words(l.text);
        t.options.forEach((o, i) =>
          expect(inLine.includes(o.toLowerCase()), `${where}: "${o}" in "${l.text}"`).toBe(i === t.answer),
        );
        break;
      }
    }
  }

  it.each(texts.map((t) => [t.id, t] as const))("%s: has varied comprehension tasks", (_id, text) => {
    const tasks = text.tasks ?? [];
    expect(tasks.length, text.id).toBeGreaterThanOrEqual(4);
    expect(new Set(tasks.map((t) => t.kind)).size, text.id).toBeGreaterThanOrEqual(2);
    for (const t of tasks) {
      expect(["gaps", "heard"], text.id).not.toContain(t.kind);
      checkTask(text.id, t);
    }
  });

  it.each(dutch.units.flatMap((u) => u.listening).map((l) => [l.id, l] as const))(
    "%s: has close-listening tasks",
    (_id, item) => {
      const tasks = item.tasks ?? [];
      expect(tasks.length, item.id).toBeGreaterThanOrEqual(2);
      for (const t of tasks) checkTask(item.id, t, item.lines);
    },
  );

  it("gives every unit at least three texts and two listening items", () => {
    for (const u of dutch.units) {
      expect(u.texts.length, u.id).toBeGreaterThanOrEqual(3);
      expect(u.listening.length, u.id).toBeGreaterThanOrEqual(2);
      expect(u.look, u.id).toBeDefined();
    }
  });

  it("has well-formed match, sort and spot exercises", () => {
    for (const g of dutch.grammar) {
      for (const ex of g.lesson?.exercises ?? []) {
        if (ex.kind === "spot") {
          expect(ex.sentence.split(" ").map((w) => w.replace(/[.,!?"]/g, "")), `${g.id}: ${ex.sentence}`).toContain(ex.wrong);
          expect(ex.correct, g.id).not.toBe(ex.sentence);
        }
        if (ex.kind === "sort") {
          for (const [, i] of ex.items) expect(i, `${g.id}: ${ex.prompt}`).toBeLessThan(ex.groups.length);
          expect(new Set(ex.items.map(([, i]) => i)).size, `${g.id}: every group used`).toBe(ex.groups.length);
        }
        if (ex.kind === "match") expect(ex.pairs.length, g.id).toBeGreaterThanOrEqual(3);
      }
      const kinds = new Set((g.lesson?.exercises ?? []).map((e) => e.kind));
      if (g.lesson) expect(kinds.size, `${g.id}: varied exercise kinds`).toBeGreaterThanOrEqual(3);
    }
  });
});

describe("Beyond the course", () => {
  const list = dutch.resources ?? [];
  it("has plain https links with unique ids, for units that exist", () => {
    const unitIds = new Set(dutch.units.map((u) => u.id));
    expect(new Set(list.map((r) => r.id)).size).toBe(list.length);
    for (const r of list) {
      expect(r.url, r.id).toMatch(/^https:\/\//);
      expect(r.why.length, r.id).toBeLessThanOrEqual(120);
      for (const u of r.units ?? []) expect(unitIds, r.id).toContain(u);
    }
  });
});
