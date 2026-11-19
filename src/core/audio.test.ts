import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import { assignVoices, clipSpecs, textKey } from "./audio";

const VOICES = [
  ...["F1", "F2", "F3", "F4", "F5"].map((name) => ({ name, gender: "f" as const })),
  ...["M1", "M2", "M3", "M4", "M5"].map((name) => ({ name, gender: "m" as const })),
];

describe("course audio", () => {
  const specs = clipSpecs(dutch);

  it("records every sentence once", () => {
    expect(new Set(specs.map((s) => textKey(s.text))).size).toBe(specs.length);
  });

  it("knows every speaker in the listening material", () => {
    const unknown = dutch.units.flatMap((u) => u.listening.flatMap((l) => l.lines.map((x) => x.speaker ?? ""))).filter((s) => s && !(s in dutch.cast!.gender));
    expect([...new Set(unknown)]).toEqual([]);
  });

  it("gives characters a voice of their gender, different from others in the same dialogue", () => {
    const cast = assignVoices(specs, VOICES, {});
    for (const s of specs) {
      const v = cast[s.role];
      expect(v, s.role).toBeTruthy();
      if (s.gender !== "any") expect(v.startsWith(s.gender === "f" ? "F" : "M"), s.role).toBe(true);
    }
    const byGroup = new Map<string, Set<string>>();
    for (const s of specs) if (s.role !== "narrator") byGroup.set(s.group, (byGroup.get(s.group) ?? new Set()).add(s.role));
    for (const [group, roles] of byGroup) {
      const voices = [...roles].map((r) => cast[r]);
      expect(new Set(voices).size, group).toBe(voices.length);
    }
    expect(cast.Luca).toBe(assignVoices(specs, VOICES, cast).Luca);
  });
});

describe("every flashcard can be heard", () => {
  it("records each card's word, the form met and its sentence, and every Words-page line", async () => {
    const { dutch } = await import("@/packs/nl");
    const { italian } = await import("@/packs/it");
    const { wordIndex } = await import("./review-items");
    const { unitWords } = await import("./unit-words");
    const { dictionaryLabel } = await import("./dictionary");
    for (const pack of [dutch, italian]) {
      const keys = new Set(clipSpecs(pack).map((c) => textKey(c.text)));
      const missing: string[] = [];
      const need = (t: string) => {
        if (t && !/\d/.test(t) && !keys.has(textKey(t))) missing.push(t);
      };
      for (const level of pack.levels) {
        for (const [lemma, info] of wordIndex(pack, level)) {
          need(dictionaryLabel(pack, lemma, info.meaning));
          need(info.surface);
          need(info.sentence);
        }
      }
      for (const unit of pack.units) for (const w of unitWords(pack, unit)) (need(w.label), need(w.sentence));
      expect(missing, pack.code).toEqual([]);
    }
  });
});
