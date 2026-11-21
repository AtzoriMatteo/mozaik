import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import { activities } from "./course";
import { hasMix, mixedReview, mixId } from "./mix";

describe("grammar mix (Matteo, 21 Nov 2026)", () => {
  for (const pack of listPacks()) {
    it(`${pack.code}: every unit with grammar ends with a mix of its own and earlier lessons`, () => {
      const order = pack.units.map((u) => u.id);
      for (const [i, u] of pack.units.entries()) {
        if (!pack.grammar.some((g) => g.unit === u.id && g.lesson)) continue;
        if (i === 0) continue;
        expect(hasMix(pack, u), u.id).toBe(true);
        const items = mixedReview(pack, u);
        // Only lessons already taught: this unit or earlier.
        for (const it of items) expect(order.indexOf(it.point.unit!), `${u.id}: ${it.point.id}`).toBeLessThanOrEqual(i);
        expect(items.some((it) => it.point.unit === u.id), u.id).toBe(true);
        // The mix comes before the checkpoint.
        const acts = activities(pack).filter((a) => a.unit.id === u.id);
        const mix = acts.findIndex((a) => a.id === mixId(u));
        const check = acts.findIndex((a) => a.kind === "check");
        expect(mix, u.id).toBeGreaterThanOrEqual(0);
        if (check >= 0) expect(mix, u.id).toBeLessThan(check);
      }
    });
  }
});
