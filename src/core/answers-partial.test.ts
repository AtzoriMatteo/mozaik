import { describe, expect, it } from "vitest";
import { judgeFill, judgeTransform } from "./answers";
import { normalizeWords } from "./dictation";
import { listPacks } from "./registry";

describe("rewrite exercises accept just the part that changes", () => {
  it("accepts the whole sentence or only the changed part", () => {
    const from = "Vieni con Giulia?";
    const answers = ["Vieni con lei?"];
    expect(judgeTransform("Vieni con lei?", from, answers)).toBe("right");
    expect(judgeTransform("lei", from, answers)).toBe("right");
    expect(judgeTransform("con lei", from, answers)).toBe("right");
    expect(judgeTransform("lui", from, answers)).toBe("wrong");
    expect(judgeTransform("Giulia", from, answers)).toBe("wrong");
  });
  it("still counts a missing accent as almost", () => {
    expect(judgeTransform("perche", "Lo faccio per questo.", ["Lo faccio perché."])).toBe("almost");
  });
  it("gap exercises also accept the whole sentence", () => {
    expect(judgeFill("Per me il B1 è difficile.", "Per ", " il B1 è difficile.", ["me"])).toBe("right");
    expect(judgeFill("me", "Per ", " il B1 è difficile.", ["me"])).toBe("right");
    expect(judgeFill("Per io il B1 è difficile.", "Per ", " il B1 è difficile.", ["me"])).toBe("wrong");
  });

  for (const pack of listPacks()) {
    it(`${pack.code}: in every rewrite exercise, typing only the changed words counts`, () => {
      const bad: string[] = [];
      for (const g of pack.grammar ?? []) {
        for (const ex of g.lesson?.exercises ?? []) {
          if (ex.kind !== "transform") continue;
          const f = normalizeWords(ex.from);
          const a = normalizeWords(ex.answers[0]);
          let p = 0;
          while (p < f.length && p < a.length && f[p] === a[p]) p++;
          let s = 0;
          while (s < f.length - p && s < a.length - p && f[f.length - 1 - s] === a[a.length - 1 - s]) s++;
          const middle = a.slice(p, a.length - s);
          if (!middle.length) continue; // a pure deletion: the whole sentence is needed
          if (judgeTransform(middle.join(" "), ex.from, ex.answers) !== "right") bad.push(`${g.id}: ${ex.from} → ${middle.join(" ")}`);
        }
      }
      expect(bad).toEqual([]);
    });
  }
});
