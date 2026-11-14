import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import { assignVoices, clipSpecs, textKey } from "./audio";

const VOICES = [
  ...["F1", "F2", "F3", "F4", "F5"].map((name) => ({ name, gender: "f" as const })),
  ...["M1", "M2", "M3", "M4", "M5"].map((name) => ({ name, gender: "m" as const })),
];

describe("course audio", () => {
  const specs = clipSpecs(dutch);

  it("records every sentence once", () => {
    expect(new Set(specs.map((s) => textKey(s.text))).size).toBe(specs.length);
  });

  it("knows every speaker in the listening material", () => {
    const unknown = dutch.units.flatMap((u) => u.listening.flatMap((l) => l.lines.map((x) => x.speaker ?? ""))).filter((s) => s && !(s in dutch.cast!.gender));
    expect([...new Set(unknown)]).toEqual([]);
  });

  it("gives characters a voice of their gender, different from others in the same dialogue", () => {
    const cast = assignVoices(specs, VOICES, {});
    for (const s of specs) {
      const v = cast[s.role];
      expect(v, s.role).toBeTruthy();
      if (s.gender !== "any") expect(v.startsWith(s.gender === "f" ? "F" : "M"), s.role).toBe(true);
    }
    const byGroup = new Map<string, Set<string>>();
    for (const s of specs) if (s.role !== "narrator") byGroup.set(s.group, (byGroup.get(s.group) ?? new Set()).add(s.role));
    for (const [group, roles] of byGroup) {
      const voices = [...roles].map((r) => cast[r]);
      expect(new Set(voices).size, group).toBe(voices.length);
    }
    expect(cast.Luca).toBe(assignVoices(specs, VOICES, cast).Luca);
  });
});
