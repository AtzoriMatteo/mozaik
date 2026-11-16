import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import { coherenceGaps, isTaught, taughtSets } from "./coherence";
import { guidanceFor } from "./writing";
import { dutch } from "@/packs/nl";

/**
 * The textbook rule: everything a learner writes, says or answers in the
 * language uses only words and grammar taught in that unit or before.
 */
describe("taught before it's asked for", () => {
  for (const pack of listPacks()) {
    it(`${pack.code}: no task needs an untaught word or grammar point`, () => {
      const gaps = coherenceGaps(pack).map((g) => `${g.unitId} · ${g.where} · ${g.kind === "grammar" ? `${g.item} (${g.word})` : g.word}`);
      expect(gaps).toEqual([]);
    });

    it(`${pack.code}: A1 writing gives a sentence frame for every point`, () => {
      const missing = pack.units
        .filter((u) => u.level === "A1")
        .flatMap((u) => (u.writing ?? []).flatMap((t) => t.points.filter((p) => !p.frame && p.cues?.length).map((p) => `${t.id}: ${p.prompt}`)));
      expect(missing).toEqual([]);
    });
  }

  it("moves late-A2 instructions into Dutch, with English underneath", () => {
    const late = dutch.units.filter((u) => u.level === "A2").slice(5);
    for (const u of late)
      for (const t of u.writing ?? []) {
        expect(t.situationTarget, t.id).toBeTruthy();
        expect(t.points.every((p) => p.promptTarget), t.id).toBe(true);
        expect(guidanceFor(dutch, t).instructions, t.id).toBe("both");
      }
    const early = dutch.units.find((u) => u.level === "A1")!.writing![0];
    expect(guidanceFor(dutch, early)).toMatchObject({ frames: "shown", instructions: "en" });
  });

  it("knows a word's forms and compounds once the word is taught", () => {
    const taught = taughtSets(dutch).at(-1)!;
    for (const w of ["groter", "katten", "gekookt", "regende", "lievelingsmuziek"]) expect(isTaught(dutch, taught, w), w).toBe(true);
    const first = taughtSets(dutch)[0];
    expect(isTaught(dutch, first, "ziekenhuis")).toBe(false);
  });
});
