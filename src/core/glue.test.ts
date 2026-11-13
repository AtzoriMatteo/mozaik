import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import { glueTokens } from "./glue";

const render = (text: string) =>
  glueTokens(dutch.tokenize(text))
    .map((g) => (g.kind === "gap" ? g.text : `[${g.pieces.map((p) => (p.kind === "word" ? p.token.text : p.text)).join("")}]`))
    .join("");

describe("glueTokens", () => {
  it("keeps punctuation with its word and rebuilds the text", () => {
    expect(render('"Sorry, ik begrijp het niet. Langzamer, alstublieft."')).toBe(
      '["Sorry,] [ik] [begrijp] [het] [niet.] [Langzamer,] [alstublieft."]',
    );
  });

  it("keeps hyphenated names and quotes together", () => {
    expect(render("Noord-Holland en 's avonds")).toBe("[Noord-Holland] [en] ['s] [avonds]");
  });
});
