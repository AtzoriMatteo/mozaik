import { describe, expect, it } from "vitest";
import { CEFR_LEVELS, type LanguagePack } from "./language-pack";
import { chooseLearningPack, getPack, listPacks } from "./registry";

const fakePack = (code: string): LanguagePack => ({
  code,
  name: code,
  nativeName: code,
  accent: { light: "#000", dark: "#fff" },
  levels: ["A1"],
  tokenize: () => [],
  greeting: () => ({ text: "", meaning: "" }),
  units: [],
  lexicon: {},
  grammar: [],
  coreVocabulary: {},
});

describe("language pack registry", () => {
  it("has Dutch installed", () => {
    expect(getPack("nl")?.name).toBe("Dutch");
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

describe("choosing the language a learner is in", () => {
  const nl = fakePack("nl");
  const es = fakePack("es");

  it("uses the learner's saved choice", () => {
    expect(chooseLearningPack([nl, es], "es")).toBe(es);
  });

  it("uses the only pack when there is just one", () => {
    expect(chooseLearningPack([nl], null)).toBe(nl);
  });

  it("asks the learner when there are several and no saved choice", () => {
    expect(chooseLearningPack([nl, es], null)).toBeNull();
  });

  it("ignores a saved choice for a pack that is no longer installed", () => {
    expect(chooseLearningPack([nl, es], "fr")).toBeNull();
    expect(chooseLearningPack([nl], "fr")).toBe(nl);
  });
});
