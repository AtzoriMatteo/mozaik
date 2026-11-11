import { describe, expect, it } from "vitest";
import { helpFor } from "@/core/content";
import { dutch } from ".";

describe("Dutch reading texts", () => {
  it("have unique ids", () => {
    const ids = dutch.texts.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("only use levels the pack offers", () => {
    for (const t of dutch.texts) expect(dutch.levels).toContain(t.level);
  });

  // Every tappable word must have help, so a tap never comes up empty.
  it.each(dutch.texts.map((t) => [t.id, t] as const))("%s: every word has help", (_id, text) => {
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

  it("every sentence has a translation", () => {
    for (const t of dutch.texts) {
      for (const s of t.paragraphs.flat()) expect(s.translation.trim()).not.toBe("");
    }
  });
});

describe("Dutch word help", () => {
  // Calm by design: each layer is one short line.
  it("keeps every help line short", () => {
    for (const [word, help] of Object.entries(dutch.lexicon)) {
      for (const line of [help.meaning, help.closer, help.local]) {
        if (line) expect(line.length, `${word}: "${line}"`).toBeLessThanOrEqual(80);
      }
    }
  });

  it("text-specific help wins over the lexicon", () => {
    const train = dutch.texts.find((t) => t.id === "met-de-trein")!;
    expect(helpFor(dutch.lexicon, train, "zijn")?.meaning).toBe("his");
  });
});
