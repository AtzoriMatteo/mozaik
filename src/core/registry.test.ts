import { describe, expect, it } from "vitest";
import { CEFR_LEVELS } from "./language-pack";
import { getDefaultPack, getPack, listPacks } from "./registry";

describe("language pack registry", () => {
  it("has Dutch as the default pack", () => {
    expect(getDefaultPack().code).toBe("nl");
  });

  it("returns undefined for a language that isn't installed", () => {
    expect(getPack("xx")).toBeUndefined();
  });

  it("every pack has a unique code and valid CEFR levels", () => {
    const codes = listPacks().map((p) => p.code);
    expect(new Set(codes).size).toBe(codes.length);
    for (const pack of listPacks()) {
      for (const level of pack.levels) expect(CEFR_LEVELS).toContain(level);
    }
  });
});
