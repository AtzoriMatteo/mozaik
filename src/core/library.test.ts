import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import { LIBRARY_LEVELS, libraryPrompts, parsePrompts } from "./library";

describe("parsePrompts", () => {
  it("reads topic, header, situation and points", () => {
    const [p] = parsePrompts("# Home\nA2 email | Een kamer | A room\nWrite to the landlord.\n- Say who you are\n- Ask the rent");
    expect(p).toMatchObject({ id: "lib-a2-een-kamer", level: "A2", form: "email", topic: "Home", situation: "Write to the landlord." });
    expect(p.points.map((x) => x.prompt)).toEqual(["Say who you are", "Ask the rent"]);
  });
  it("refuses a header it can't read", () => {
    expect(() => parsePrompts("A7 email | x | y\nz\n- a")).toThrow();
  });
});

describe.each(listPacks().map((p) => [p.code, p] as const))("%s Library prompts", (_code, pack) => {
  const all = libraryPrompts(pack);
  it("has plenty at every level", () => {
    for (const level of LIBRARY_LEVELS) expect(libraryPrompts(pack, level).length, level).toBeGreaterThanOrEqual(10);
  });
  it("has unique ids, none shared with unit writing", () => {
    const unitIds = new Set(pack.units.flatMap((u) => (u.writing ?? []).map((t) => t.id)));
    const ids = all.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.filter((id) => unitIds.has(id))).toEqual([]);
  });
  it("gives every prompt a topic, a situation and 4–6 points", () => {
    for (const p of all) {
      expect(p.topic, p.id).toBeTruthy();
      expect(p.situation.length, p.id).toBeGreaterThan(10);
      expect(p.points.length, p.id).toBeGreaterThanOrEqual(4);
      expect(p.points.length, p.id).toBeLessThanOrEqual(6);
    }
  });
});
