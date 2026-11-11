import { describe, expect, it } from "vitest";
import { dutch } from ".";

const words = (text: string) =>
  dutch.tokenize(text).filter((t) => t.kind === "word").map((t) => t.text);

describe("Dutch tokeniser", () => {
  it("splits a simple sentence into words", () => {
    expect(words("Ik woon in Leiden.")).toEqual(["Ik", "woon", "in", "Leiden"]);
  });

  it("keeps plural apostrophes inside the word", () => {
    expect(words("Twee auto's en drie baby's")).toEqual([
      "Twee", "auto's", "en", "drie", "baby's",
    ]);
  });

  it("keeps short forms like 's and 't as one word", () => {
    expect(words("'s Ochtends drink ik koffie")).toEqual([
      "'s", "Ochtends", "drink", "ik", "koffie",
    ]);
    expect(words("Hoe gaat 't?")).toContain("'t");
  });

  it("treats the typographic apostrophe the same", () => {
    expect(words("auto’s")).toEqual(["auto's"]);
  });

  it("can rebuild the original text from its tokens", () => {
    const text = "Hallo! Hoe gaat het met je?";
    expect(dutch.tokenize(text).map((t) => t.text).join("")).toBe(text);
  });

  it("lower-cases the lookup form", () => {
    const [first] = dutch.tokenize("Ziekenhuis");
    expect(first).toMatchObject({ kind: "word", normalized: "ziekenhuis" });
  });
});

describe("Dutch greeting", () => {
  it.each([
    [8, "Goedemorgen"],
    [14, "Goedemiddag"],
    [22, "Goedenavond"],
    [2, "Goedenacht"],
  ])("at %i:00 says %s", (hour, expected) => {
    expect(dutch.greeting(hour).text).toBe(expected);
  });
});
