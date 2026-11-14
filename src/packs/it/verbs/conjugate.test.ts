import { describe, expect, it } from "vitest";
import { italian } from "..";

const form = (verb: string, tense: string, person: number) =>
  italian.conjugate!(verb)!.tenses.find((t) => t.id === tense)!.forms[person].form;

describe("Italian verb tables", () => {
  it.each([
    ["parlare", "present", 3, "parliamo"],
    ["cercare", "present", 1, "cerchi"],
    ["pagare", "future", 0, "pagherò"],
    ["mangiare", "present", 3, "mangiamo"],
    ["mangiare", "future", 0, "mangerò"],
    ["studiare", "present", 1, "studi"],
    ["inviare", "present", 1, "invii"],
    ["inviare", "present", 3, "inviamo"],
    ["finire", "present", 0, "finisco"],
    ["dormire", "present", 2, "dorme"],
    ["prendere", "remote", 0, "presi"],
    ["sorprendere", "perfect", 0, "ho sorpreso"],
    ["essere", "imperfect", 0, "ero"],
    ["andare", "perfect", 3, "siamo andati/e"],
    ["venire", "present", 1, "vieni"],
    ["ottenere", "present", 2, "ottiene"],
    ["tradurre", "present", 0, "traduco"],
    ["dire", "future", 0, "dirò"],
    ["fare", "subjunctive", 0, "faccia"],
    ["conoscere", "perfect", 0, "ho conosciuto"],
    ["alzarsi", "present", 0, "mi alzo"],
    ["alzarsi", "perfect", 0, "mi sono alzato/a"],
    ["sedersi", "present", 2, "si siede"],
    ["guardare", "present", 0, "guardo"],
    ["rifare", "present", 2, "rifà"],
  ])("%s %s %i → %s", (verb, tense, person, expected) => {
    expect(form(verb, tense, person)).toBe(expected);
  });

  it("knows the helper verb", () => {
    expect(italian.conjugate!("parlare")!.auxiliary).toBe("avere");
    expect(italian.conjugate!("arrivare")!.auxiliary).toBe("essere");
    expect(italian.conjugate!("finire")!.auxiliary).toBe("avere / essere");
  });

  it("finds the infinitive from any form", () => {
    expect(italian.verbFor!("vado")).toBe("andare");
    expect(italian.verbFor!("parliamo")).toBe("parlare");
    expect(italian.verbFor!("ho")).toBe("avere");
  });

  it("gives flashcards the right article", () => {
    expect(italian.nounArticle!("zio")).toBe("lo");
    expect(italian.nounArticle!("amica")).toBe("l'");
    expect(italian.nounArticle!("casa")).toBe("la");
    expect(italian.nounArticle!("bar")).toBe("il");
  });
});
