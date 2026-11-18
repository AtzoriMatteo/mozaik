import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import { italian } from "@/packs/it";
import { courseWordId, eligibleItems, type Done, type ReviewItem, type Schedule } from "./review-items";
import { inScope, levelUnits, unitOfItem } from "./review-scope";
import { unitWords } from "./unit-words";

const sched: Schedule = { stage: 0, dueAt: "2026-11-12T08:00:00", introducedAt: "2026-11-12T08:00:00" };

describe("review by unit", () => {
  for (const pack of [dutch, italian]) {
    it(`${pack.code}: a word card belongs to the unit whose Words page lists it`, () => {
      for (const unit of pack.units) {
        const words = unitWords(pack, unit).filter((w) => w.core).slice(0, 3);
        for (const w of words) {
          const item: ReviewItem = { kind: "word", id: courseWordId(w.lemma), ...w, source: "course" };
          expect(unitOfItem(pack, item)).toBe(unit.id);
        }
      }
    });

    it(`${pack.code}: grammar and listening cards belong to their unit`, () => {
      const done: Done = {
        read: new Set(),
        listen: new Set(pack.units.flatMap((u) => u.listening.map((l) => l.id))),
        grammar: new Set(pack.grammar.map((g) => g.id)),
        speak: new Set(),
      };
      const items = eligibleItems(pack, done, {});
      for (const item of items) {
        if (item.kind === "listen") {
          const unit = pack.units.find((u) => u.listening.some((l) => item.id.startsWith(`l:${l.id}:`)));
          expect(unitOfItem(pack, item)).toBe(unit?.id);
        }
        if (item.kind === "grammar") {
          expect(unitOfItem(pack, item)).toBe(pack.grammar.find((g) => g.id === item.pointId)?.unit ?? null);
        }
      }
    });
  }

  it("keeps only the chosen units, and saved words when asked", () => {
    const [u1, u2] = dutch.units;
    const w1 = unitWords(dutch, u1).find((w) => w.core)!;
    const w2 = unitWords(dutch, u2).find((w) => w.core)!;
    const items = eligibleItems(dutch, { read: new Set(), listen: new Set(), grammar: new Set(), speak: new Set() }, {
      schedules: new Map([[courseWordId(w1.lemma), sched], [courseWordId(w2.lemma), sched]]),
      savedWords: [{ word: "xyzzy", surface: "xyzzy", meaning: "nothing", sentence: "xyzzy." }],
    });
    const only1 = items.filter((i) => inScope(dutch, i, { units: new Set([u1.id]), saved: false }));
    expect(only1.map((i) => i.id)).toEqual([courseWordId(w1.lemma)]);
    const saved = items.filter((i) => inScope(dutch, i, { units: new Set(), saved: true }));
    expect(saved.map((i) => i.id)).toEqual(["saved:xyzzy"]);
    expect(items.filter((i) => inScope(dutch, i, null))).toHaveLength(3);
  });

  it("lists a level's units in order", () => {
    expect(levelUnits(dutch, "A1")).toEqual(dutch.units.filter((u) => u.level === "A1").map((u) => u.id));
  });
});
