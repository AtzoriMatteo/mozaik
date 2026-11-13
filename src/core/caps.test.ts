import { describe, expect, it } from "vitest";
import { capsFor, gapStartsSentence } from "./caps";

describe("gapStartsSentence", () => {
  it("is true at the start and after a full stop", () => {
    expect(gapStartsSentence("")).toBe(true);
    expect(gapStartsSentence("Bram werkt in een café. ")).toBe(true);
    expect(gapStartsSentence("Echt? ")).toBe(true);
    expect(gapStartsSentence('"')).toBe(true);
    expect(gapStartsSentence('Ze zegt: "Hallo." "')).toBe(true);
  });

  it("is false in the middle of a sentence", () => {
    expect(gapStartsSentence("Ik ")).toBe(false);
    expect(gapStartsSentence("Noor, ")).toBe(false);
    expect(gapStartsSentence("Ze zegt: ")).toBe(false);
    expect(capsFor("Wij ")).toBe("none");
  });
});
