import { describe, expect, it } from "vitest";
import { checkDictation, normalizeWords } from "./dictation";

describe("dictation check", () => {
  it("ignores capitals and punctuation", () => {
    const r = checkDictation("Hoe heet jij?", "hoe heet jij");
    expect(r.perfect).toBe(true);
    expect(r.score).toBe(1);
  });

  it("marks a missing accent as almost right", () => {
    const r = checkDictation("Ik heb één zus.", "ik heb een zus");
    expect(r.perfect).toBe(false);
    expect(r.score).toBe(1);
    expect(r.parts[2]).toEqual({ kind: "almost", word: "één", typed: "een" });
  });

  it("shows missing and extra words", () => {
    const r = checkDictation("De trein vertrekt om negen uur.", "de trein vertrekt negen uur uur");
    expect(r.parts.map((p) => p.kind)).toEqual([
      "correct", "correct", "correct", "missing", "correct", "correct", "extra",
    ]);
    expect(r.score).toBeCloseTo(4 / 6);
  });

  it("keeps Dutch short forms and plural apostrophes", () => {
    expect(normalizeWords("'s Ochtends, twee auto's!")).toEqual(["'s", "ochtends", "twee", "auto's"]);
  });

  it("treats curly and straight apostrophes the same", () => {
    expect(checkDictation("auto's", "auto’s").perfect).toBe(true);
  });
});
