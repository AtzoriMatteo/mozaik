import { describe, expect, it } from "vitest";
import { dutch } from ".";
import { itemShapes, itemsInLine, slangOnlyItems, slangWordHelp } from "@/core/slang";
import { clipSpecs } from "@/core/audio";

const parts = dutch.slang ?? [];
const wordsOf = (text: string) => dutch.tokenize(text).filter((t) => t.kind === "word").map((t) => t.normalized);
const has = (ws: string[], shape: string[]) => ws.some((_, i) => shape.every((w, k) => ws[i + k] === w));

/**
 * Words that were slang once and now sound dated or try-hard. Matteo: no
 * cringe old stuff. If one of these is current again, take it off the list
 * with a source.
 */
const DATED = ["vet", "gaaf", "swag", "kweenie", "w8", "lit", "relaxed", "skibidi", "yolo", "sma", "mieters", "te gek", "hartstikke vet", "fawaka"];

describe("Zo praten we echt (Dutch slang parts)", () => {
  it("has parts at A1 and A2, each in a real unit of its level", () => {
    expect(parts.filter((p) => p.level === "A1").length).toBeGreaterThanOrEqual(5);
    expect(parts.filter((p) => p.level === "A2").length).toBeGreaterThanOrEqual(8);
    for (const p of parts) {
      const unit = dutch.units.find((u) => u.id === p.unit);
      expect(unit, p.id).toBeDefined();
      expect(unit!.level, p.id).toBe(p.level);
    }
    expect(new Set(parts.map((p) => p.id)).size).toBe(parts.length);
  });

  it("gives every line a textbook version and a translation", () => {
    for (const p of parts) {
      for (const l of p.lines) {
        expect(l.textbook.trim(), `${p.id}: ${l.text}`).not.toBe("");
        expect(l.translation.trim(), `${p.id}: ${l.text}`).not.toBe("");
      }
    }
  });

  it("has help for every word", () => {
    const missing: string[] = [];
    for (const p of parts) {
      for (const l of p.lines) {
        const ws = wordsOf(l.text);
        const items = itemsInLine(dutch, p, ws);
        ws.forEach((w, i) => {
          if (!items[i] && !/\d/.test(w) && !slangWordHelp(dutch, p, w)) missing.push(`${p.id}: ${w}`);
        });
      }
    }
    expect(missing).toEqual([]);
  });

  it("explains only what's in the lines, and shows every explained item", () => {
    for (const p of parts) {
      const lines = p.lines.map((l) => wordsOf(l.text));
      for (const it of p.items) {
        const found = itemShapes(dutch, it).some((shape) => lines.some((ws) => has(ws, shape)));
        expect(found, `${p.id}: ${it.form}`).toBe(!it.heardOnly);
      }
    }
  });

  it("rates every swear word, and nothing else", () => {
    for (const p of parts) for (const it of p.items) expect(!!it.strength, `${p.id}: ${it.form}`).toBe(it.who === "rude");
  });

  it("keeps straattaal for A2 and up", () => {
    for (const p of parts) if (p.level === "A1") expect(p.items.filter((it) => it.who === "street" || it.who === "rude"), p.id).toEqual([]);
  });

  it("never lets slang into the regular course", () => {
    const course = dutch.units.flatMap((u) => [
      ...u.texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text)),
      ...u.listening.flatMap((l) => l.lines.map((x) => x.text)),
      ...(u.speaking?.shadowing ?? []).map((s) => s.text),
    ]).map(wordsOf);
    const leaks: string[] = [];
    for (const p of parts) {
      for (const it of slangOnlyItems(p)) {
        for (const shape of itemShapes(dutch, it)) if (course.some((ws) => has(ws, shape))) leaks.push(`${p.id}: ${it.form}`);
      }
    }
    expect(leaks).toEqual([]);
  });

  it("uses no dated slang", () => {
    for (const p of parts) {
      for (const l of p.lines) {
        const ws = wordsOf(l.text);
        for (const d of DATED) expect(has(ws, wordsOf(d)), `${p.id}: "${d}" in ${l.text}`).toBe(false);
      }
      for (const it of p.items) expect(DATED.includes(it.form.toLowerCase()), `${p.id}: ${it.form}`).toBe(false);
    }
  });

  it("has well-formed checks", () => {
    for (const p of parts) {
      expect(p.tasks.length, p.id).toBeGreaterThanOrEqual(2);
      for (const t of p.tasks) {
        if (t.kind === "choice") expect(t.answer, p.id).toBeLessThan(t.options.length);
        if (t.kind === "match") expect(t.pairs.every(([a, b]) => a && b), p.id).toBe(true);
        // Slang parts are read, not listened to: no tasks tied to audio lines.
        expect(["gaps", "heard"].includes(t.kind), p.id).toBe(false);
      }
    }
  });

  it("records spoken parts, not chats", () => {
    const specs = clipSpecs(dutch);
    for (const p of parts) {
      for (const l of p.lines) {
        const spec = specs.find((s) => s.text === l.text);
        if (p.kind === "talk") expect(spec, `${p.id}: ${l.text}`).toBeDefined();
      }
    }
  });

  it("keeps 'k as one word", () => {
    expect(wordsOf("'k spreek")).toEqual(["'k", "spreek"]);
  });
});
