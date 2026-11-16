import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import { helpFor, lemmaOf } from "./content";
import { cardMeaning, isVerb } from "./dictionary";

/**
 * Cards show the dictionary form ("lachen"), so its meaning must be written
 * for that form: built from an inflected meaning it comes out as "to laughs"
 * or "potatoe".
 */
describe("card meanings", () => {
  for (const pack of listPacks()) {
    it(`${pack.code}: every inflected word in the course has an entry for its dictionary form`, () => {
      const missing = new Set<string>();
      for (const u of pack.units)
        for (const owner of [...u.texts, ...u.listening]) {
          const lines = "paragraphs" in owner ? owner.paragraphs.flat() : owner.lines;
          for (const s of lines)
            for (const t of pack.tokenize(s.text)) {
              if (t.kind !== "word") continue;
              const help = helpFor(pack.lexicon, owner, t.normalized);
              if (!help) continue;
              const lemma = lemmaOf(help, t.normalized);
              if (lemma !== t.normalized && !pack.lexicon[lemma]) missing.add(`${lemma} (from ${t.normalized})`);
            }
        }
      expect([...missing]).toEqual([]);
    });

    it(`${pack.code}: verb cards read "to …"`, () => {
      const bad: string[] = [];
      for (const [w, h] of Object.entries(pack.lexicon)) {
        // Homographs (eten = to eat / food) take their sense from the sentence: see card-sense.test.ts.
        if (h.base || pack.homographs?.[w] || !(isVerb(pack, w) || pack.verbFor?.(w) === w)) continue;
        const m = cardMeaning(pack, w, h.meaning);
        for (const part of m.split(/;\s*|,\s*(?![^(]*\))/)) {
          const head = part.replace(/^to /, "").split(/[ (]/)[0];
          if (!/^to /.test(part) && !/^(shall|will|can|may|must|be |get |have |\()/.test(part)) bad.push(`${w}: ${m}`);
          else if (/^(is|was|were|has|had|does|did|went|got|made|took|been|gone|done)$/.test(head) || /[^e]ed$|ies$/.test(head)) bad.push(`${w}: ${m}`);
        }
      }
      expect([...new Set(bad)]).toEqual([]);
    });
  }
});
