import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import { dialoguePieces, layoutDialogue, parseSpeakers, turnCount } from "./dialogue";
import { dutch } from "@/packs/nl";

describe("dialogue in reading texts", () => {
  it("splits narration and quoted turns, across sentences too", () => {
    const pieces = dialoguePieces(['"Wat moet ik doen?" vraagt Noor.', 'Hij zegt: "Eerst dit.', 'Dan dat."']);
    expect(pieces[0].map((p) => p.turn)).toEqual([0, null]);
    expect(pieces[1].map((p) => p.turn)).toEqual([null, 1]);
    expect(pieces[2].map((p) => p.turn)).toEqual([1]);
  });

  it("names a speaker for every quoted turn in every text (Matteo: hard to follow who's talking)", () => {
    for (const pack of listPacks()) {
      for (const u of pack.units) {
        for (const t of [...u.texts, ...(u.story?.episodes ?? [])]) {
          const n = turnCount(t.paragraphs.flat().map((s) => s.text));
          const line = pack.speakers?.[t.id];
          if (n === 0) {
            expect(line, `${pack.code}/${t.id} has no quotes`).toBeUndefined();
            continue;
          }
          expect(line, `${pack.code}/${t.id}: ${n} turns need speakers`).toBeDefined();
          expect(parseSpeakers(line!).length, `${pack.code}/${t.id}`).toBe(n);
        }
      }
      for (const id of Object.keys(pack.speakers ?? {})) {
        expect(pack.units.some((u) => [...u.texts, ...(u.story?.episodes ?? [])].some((t) => t.id === id)), `${pack.code}/${id} is not a text`).toBe(true);
      }
    }
  });

  it("puts each speaker on their own line, keeping 'zegt Noor' with Noor", () => {
    const sentences = ['"Wie is dat?" vraagt Noor.', '"Ik weet het niet."'];
    const tokens = sentences.map((s) => dutch.tokenize(s));
    const [blocks] = layoutDialogue([tokens], [sentences], ["Noor", "Luca"]);
    expect(blocks!.map((b) => b.speaker)).toEqual(["Noor", "Luca"]);
    const noor = blocks![0].parts.map((p) => tokens[p.sentence].slice(p.from, p.to).map((t) => t.text).join("")).join("");
    expect(noor).toBe('"Wie is dat?" vraagt Noor.');
  });

  it("leaves paragraphs without speech as plain prose", () => {
    const sentences = ['Zeg dan "dag".'];
    expect(layoutDialogue([sentences.map((s) => dutch.tokenize(s))], [sentences], [null])).toEqual([null]);
  });
});
