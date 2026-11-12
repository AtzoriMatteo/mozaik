import { describe, expect, it } from "vitest";
import { judge, shuffleTiles } from "./answers";

describe("judging answers", () => {
  it("ignores capitals and punctuation", () => {
    expect(judge("woon jij in leiden", ["Woon jij in Leiden?"])).toBe("right");
  });
  it("accepts any of several answers", () => {
    expect(judge("Woon je in Leiden?", ["Woon jij in Leiden?", "Woon je in Leiden?"])).toBe("right");
  });
  it("counts a missing accent as almost", () => {
    expect(judge("een", ["één"])).toBe("almost");
  });
  it("rejects wrong or empty answers", () => {
    expect(judge("woont", ["woon"])).toBe("wrong");
    expect(judge("  ", ["woon"])).toBe("wrong");
  });
});

describe("shuffling tiles", () => {
  const tiles = ["Morgen", "ga", "ik", "naar Utrecht"];
  it("is stable for the same seed", () => {
    expect(shuffleTiles(tiles, "x")).toEqual(shuffleTiles(tiles, "x"));
  });
  it("keeps every tile and never returns the solution", () => {
    for (const seed of ["a", "b", "c", "d", "e"]) {
      const s = shuffleTiles(tiles, seed);
      expect([...s].sort()).toEqual([...tiles].sort());
      expect(s).not.toEqual(tiles);
    }
  });
});
