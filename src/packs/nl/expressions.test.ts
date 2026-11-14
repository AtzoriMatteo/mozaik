import { describe, expect, it } from "vitest";
import { expressionsAt } from "@/core/content";
import { dutch } from ".";

const sentences = dutch.units.flatMap((u) => [
  ...u.texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text)),
  ...u.listening.flatMap((l) => l.lines.map((x) => x.text)),
]);
const wordsOf = (s: string) => dutch.tokenize(s).filter((t) => t.kind === "word").map((t) => t.normalized);

describe("Dutch expressions", () => {
  it("each one appears somewhere in the course", () => {
    const all = sentences.map(wordsOf);
    const missing = dutch.expressions!.filter(
      (e) => !all.some((w) => w.some((_, i) => expressionsAt([e], w, i).length > 0)),
    );
    expect(missing.map((e) => e.phrase)).toEqual([]);
  });

  it("finds the expression around a tapped word, longest first", () => {
    const w = wordsOf("Mag ik er een nachtje over slapen?");
    const found = expressionsAt(dutch.expressions!, w, w.indexOf("nachtje"));
    expect(found[0].expression.phrase).toBe("er een nachtje over slapen");
    expect(found[0].from).toBe(2);
  });
});
