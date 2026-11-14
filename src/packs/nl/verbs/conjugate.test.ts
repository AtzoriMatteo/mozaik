import { describe, expect, it } from "vitest";
import { dutch } from "..";
import { stem } from "./conjugate";

const form = (verb: string, tense: string, person: number) =>
  dutch.conjugate!(verb)!.tenses.find((t) => t.id === tense)!.forms[person].form;

describe("Dutch verb tables", () => {
  it.each([
    ["maken", "maak"], ["zetten", "zet"], ["leven", "leef"], ["reizen", "reis"], ["betalen", "betaal"],
    ["studeren", "studeer"], ["proberen", "probeer"], ["veranderen", "verander"], ["wandelen", "wandel"],
    ["openen", "open"], ["leren", "leer"], ["gaan", "ga"], ["doen", "doe"],
  ])("stem of %s is %s", (inf, s) => expect(stem(inf)).toBe(s));

  it.each([
    ["werken", "werkte", "heb gewerkt"],
    ["wonen", "woonde", "heb gewoond"],
    ["reizen", "reisde", "heb gereisd"],
    ["betalen", "betaalde", "heb betaald"],
    ["opbellen", "belde op", "heb opgebeld"],
    ["lopen", "liep", "heb gelopen"],
    ["begrijpen", "begreep", "heb begrepen"],
    ["opstaan", "stond op", "ben opgestaan"],
    ["informeren", "informeerde", "heb geïnformeerd"],
    ["komen", "kwam", "ben gekomen"],
    // Found in the audit: not ont + moeten; separable verbs whose second half isn't a known verb;
    // over/onder verbs that don't split.
    ["ontmoeten", "ontmoette", "heb ontmoet"],
    ["afronden", "rondde af", "heb afgerond"],
    ["uitnodigen", "nodigde uit", "heb uitgenodigd"],
    ["inloggen", "logde in", "heb ingelogd"],
    ["voorbereiden", "bereidde voor", "heb voorbereid"],
    ["overleggen", "overlegde", "heb overlegd"],
    ["onderzoeken", "onderzocht", "heb onderzocht"],
    ["overstappen", "stapte over", "ben overgestapt"],
    ["inspecteren", "inspecteerde", "heb geïnspecteerd"],
  ])("%s: %s, %s", (inf, past, perfect) => {
    expect(form(inf, "past", 0)).toBe(past);
    expect(form(inf, "perfect", 0)).toBe(perfect);
  });

  it("does the irregular present and the other tenses", () => {
    expect(form("zijn", "present", 3)).toBe("is");
    expect(form("gaan", "present", 3)).toBe("gaat");
    expect(form("hebben", "past-perfect", 4)).toBe("hadden gehad");
    expect(form("werken", "future", 0)).toBe("zal werken");
    expect(form("werken", "conditional-perfect", 0)).toBe("zou gewerkt hebben");
    expect(form("zich wassen", "present", 4)).toBe("wassen ons");
    expect(form("zich wassen", "perfect", 0)).toBe("heb me gewassen");
  });

  it("finds the infinitive from any form", () => {
    expect(dutch.verbFor!("liep")).toBe("lopen");
    expect(dutch.verbFor!("telt")).toBe("tellen");
    expect(dutch.verbFor!("getallen")).toBeNull();
  });
});
