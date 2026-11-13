import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import { MOSAIC_TILES, mosaicActivities, revealOrder, tilesRevealed } from "./mosaic";

describe("level mosaic", () => {
  it("is built from reading, listening and grammar, not speaking", () => {
    const list = mosaicActivities(dutch, "A1");
    expect(list.length).toBeGreaterThan(50);
    expect(list.some((a) => a.kind === "speak")).toBe(false);
  });

  it("reveals tiles in proportion, and the whole picture only at the end", () => {
    expect(tilesRevealed(0, 94)).toBe(0);
    expect(tilesRevealed(1, 105)).toBe(1);
    expect(tilesRevealed(104, 105)).toBe(MOSAIC_TILES - 1);
    expect(tilesRevealed(47, 94)).toBe(MOSAIC_TILES / 2);
    expect(tilesRevealed(93, 94)).toBeLessThan(MOSAIC_TILES);
    expect(tilesRevealed(94, 94)).toBe(MOSAIC_TILES);
  });

  it("uses every tile exactly once, starting near the middle", () => {
    const order = revealOrder("nl-A1");
    expect(new Set(order).size).toBe(MOSAIC_TILES);
    const first = order[0];
    const x = first % 12;
    const y = Math.floor(first / 12);
    expect(Math.abs(x - 5.5)).toBeLessThan(4);
    expect(Math.abs(y - 3.5)).toBeLessThan(3);
  });
});
