import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import { PROPS } from "@/components/pictures/props";
import { SCENES } from "@/components/pictures/scenes";

/** A related picture in every text (Matteo, 21 Nov 2026). */
describe("text pictures", () => {
  for (const pack of listPacks()) {
    const pics = pack.pictures ?? {};
    const ids = pack.units.flatMap((u) => [...u.texts.map((t) => t.id), ...(u.checkpoint ? [`check-${u.id}`] : [])]);

    it(`${pack.code}: every text, episode and checkpoint scene has a picture`, () => {
      expect(ids.filter((id) => !pics[id])).toEqual([]);
    });

    it(`${pack.code}: no picture for a text that doesn't exist`, () => {
      expect(Object.keys(pics).filter((id) => !ids.includes(id))).toEqual([]);
    });

    it(`${pack.code}: pictures use only scenes and things that can be drawn, and say what they show`, () => {
      const kinds = new Set(["wheelchair", "baby"]);
      for (const [id, spec] of Object.entries(pics)) {
        expect(SCENES[spec.scene], `${id}: scene ${spec.scene}`).toBeDefined();
        expect(spec.alt.length, `${id}: alt`).toBeGreaterThan(20);
        for (const item of spec.items) {
          const ok = item.k.startsWith("p:") || kinds.has(item.k) || !!PROPS[item.k];
          expect(ok, `${id}: ${item.k}`).toBe(true);
        }
      }
    });
  }
});
