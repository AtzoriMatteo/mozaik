import type { Tense, VerbTables } from "@/core/verbs";
import { ANY_PREFIX, BOTH, ESSERE, IRREGULAR, ISC, NO_PREFIX, PREFIXES, STRESSED_I, type Irregular } from "./irregular";

/**
 * Italian verb tables: every tense from the infinitive. Regular verbs follow
 * three patterns (-are, -ere, -ire, plus -isc- verbs like capire); irregular
 * ones override only what differs (see ./irregular.ts), and verbs built on an
 * irregular one with a prefix (sorprendere, ottenere, tradurre) inherit it.
 */

export const PERSONS = ["io", "tu", "lui / lei / Lei", "noi", "voi", "loro"] as const;
const REFLEXIVE = ["mi", "ti", "si", "ci", "vi", "si"];

type Group = "are" | "ere" | "ire" | "isc";

const ENDINGS: Record<Group, { present: string[]; subj: string[]; impf: string; remote: string[] }> = {
  are: { present: ["o", "i", "a", "iamo", "ate", "ano"], subj: ["i", "i", "i", "iamo", "iate", "ino"], impf: "a", remote: ["ai", "asti", "ò", "ammo", "aste", "arono"] },
  ere: { present: ["o", "i", "e", "iamo", "ete", "ono"], subj: ["a", "a", "a", "iamo", "iate", "ano"], impf: "e", remote: ["ei", "esti", "é", "emmo", "este", "erono"] },
  ire: { present: ["o", "i", "e", "iamo", "ite", "ono"], subj: ["a", "a", "a", "iamo", "iate", "ano"], impf: "i", remote: ["ii", "isti", "ì", "immo", "iste", "irono"] },
  isc: { present: ["isco", "isci", "isce", "iamo", "ite", "iscono"], subj: ["isca", "isca", "isca", "iamo", "iate", "iscano"], impf: "i", remote: ["ii", "isti", "ì", "immo", "iste", "irono"] },
};
const FUTURE = ["ò", "ai", "à", "emo", "ete", "anno"];
const CONDITIONAL = ["ei", "esti", "ebbe", "emmo", "este", "ebbero"];
const IMPERFECT = ["vo", "vi", "va", "vamo", "vate", "vano"];
const SUBJ_IMPERFECT = ["ssi", "ssi", "sse", "ssimo", "ste", "ssero"];

/** Join a stem and an ending with Italian spelling rules. */
function join(stem: string, ending: string, inf: string, group: Group): string {
  if (group === "are") {
    // cercare, pagare: keep the hard sound before e and i (cerchi, paghiamo).
    if (/[cg]$/.test(stem) && /^[ei]/.test(ending)) return `${stem}h${ending}`;
    // mangiare, studiare: no double i (mangi, studiamo); inviare keeps it (invii).
    if (/i$/.test(stem) && /^i/.test(ending) && (!STRESSED_I.has(inf) || /^ia/.test(ending))) return stem + ending.slice(1);
  }
  return stem + ending;
}

/** The future stem of a regular verb: parlare → parler, mangiare → manger, cercare → cercher. */
function regularFuture(stem: string, group: Group): string {
  if (group !== "are") return stem + (group === "ere" ? "er" : "ir");
  if (/[cg]$/.test(stem)) return `${stem}her`;
  if (/[cg]i$/.test(stem) && !/gli$/.test(stem)) return `${stem.slice(0, -1)}er`;
  return `${stem}er`;
}

type Base = { inf: string; prefix: string; irr?: Irregular; base: string };

/** Find the irregular verb a word is built on: sorprendere → sor + prendere. */
function findBase(inf: string): Base {
  if (IRREGULAR[inf]) return { inf, prefix: "", irr: IRREGULAR[inf], base: inf };
  const bases = Object.keys(IRREGULAR).sort((a, b) => b.length - a.length);
  for (const base of bases) {
    if (!inf.endsWith(base) || inf === base || NO_PREFIX.has(base)) continue;
    const prefix = inf.slice(0, -base.length);
    if (ANY_PREFIX.has(base) || PREFIXES.includes(prefix)) return { inf, prefix, irr: IRREGULAR[base], base };
  }
  return { inf, prefix: "", base: inf };
}

const groupOf = (inf: string): Group | null => {
  if (inf.endsWith("are")) return "are";
  if (inf.endsWith("ere")) return "ere";
  if (inf.endsWith("ire")) return ISC.has(inf) ? "isc" : "ire";
  if (/(rre)$/.test(inf)) return "ere";
  return null;
};

/** A monosyllable that gets a prefix keeps its stress mark: fa → rifà. */
const prefixed = (prefix: string, form: string) => {
  if (!prefix) return form;
  if (form === "fa") return `${prefix}fà`;
  return prefix + form;
};

export type ItalianOptions = { known?: (inf: string) => boolean; meaning?: string };

export function conjugateItalian(input: string, opts: ItalianOptions = {}): VerbTables | null {
  let inf = input.trim().toLowerCase().replace(/’/g, "'");
  let reflexive = false;
  // alzarsi, sedersi, vestirsi: the infinitive with si attached.
  const refl = inf.match(/^(.*[aei])rsi$/) ?? inf.match(/^(.*[ou])rsi$/);
  if (refl) {
    reflexive = true;
    inf = /[aei]$/.test(refl[1]) ? `${refl[1]}re` : `${refl[1]}rre`;
  }
  if (!/^[a-zàèéìòù]+$/.test(inf) || inf.length < 4) return null;
  const group = groupOf(inf);
  if (!group) return null;

  const { prefix, irr, base } = findBase(inf);
  const p = (form: string) => prefixed(prefix, form);
  const notes: string[] = [];

  // Stems. -rre verbs (porre, tradurre) live on their old Latin stem.
  const ending = inf.slice(-3);
  const regularStem = inf.slice(0, -3);
  const latin = irr?.stem ? p(irr.stem) : null;
  const stem = latin ?? regularStem;
  const g: Group = latin && /rre$/.test(inf) ? "ere" : group;
  const regular = ENDINGS[g];

  // Present
  const present = irr?.present ? irr.present.map(p) : regular.present.map((e) => join(stem, e, inf, g));

  // Imperfect
  const imperfect = irr?.imperfect
    ? irr.imperfect.map(p)
    : IMPERFECT.map((e) => `${latin ?? regularStem}${latin ? "e" : ENDINGS[g === "isc" ? "ire" : g].impf}${e}`);

  // Future and conditional
  const fut = irr?.future ? p(irr.future) : regularFuture(regularStem, g);
  const future = FUTURE.map((e) => fut + e);
  const conditional = CONDITIONAL.map((e) => fut + e);

  // Present subjunctive: irregular verbs build it on the io form (vengo → venga).
  let subj: string[];
  if (irr?.subj) subj = irr.subj.map(p);
  else if (irr?.present) {
    const io = present[0];
    const s = io.replace(/o$/, "");
    const noi = present[3];
    const vowel = g === "are" && !/(go|co|io|ccio|ggio)$/.test(io) && io.endsWith("o") && base !== "andare" && base !== "fare" ? "i" : "a";
    subj = [s + vowel, s + vowel, s + vowel, noi, noi.replace(/mo$/, "te"), `${s}${vowel}no`];
  } else subj = regular.subj.map((e) => join(stem, e, inf, g));

  // Imperfect subjunctive
  const subjImpfStem = latin ? `${latin}e` : `${regularStem}${ENDINGS[g === "isc" ? "ire" : g].impf}`;
  const subjImperfect = irr?.subjImperfect ? irr.subjImperfect.map(p) : SUBJ_IMPERFECT.map((e) => subjImpfStem + e);

  // Passato remoto: strong verbs change io, lui and loro (presi, prese, presero).
  const weak = (g === "isc" ? ENDINGS.ire : regular).remote.map((e) => (latin ? `${latin}${e.replace(/^[aei]/, "e")}` : join(regularStem, e, inf, g)));
  let remote: string[];
  if (Array.isArray(irr?.remote)) remote = (irr.remote as string[]).map(p);
  else if (typeof irr?.remote === "string") {
    const r = p(irr.remote);
    remote = [`${r}i`, weak[1], `${r}e`, weak[3], weak[4], `${r}ero`];
  } else remote = weak;

  // Participle and gerund
  // conoscere → conosciuto: keep the soft c before -uto.
  const part = irr?.part ? p(irr.part) : `${regularStem}${g === "are" ? "ato" : g === "ere" ? (/c$/.test(regularStem) ? "iuto" : "uto") : "ito"}`;
  const gerund = latin ? `${latin}endo` : `${regularStem}${g === "are" ? "ando" : "endo"}`;

  // Helper verb
  const both = BOTH.has(inf) || BOTH.has(base);
  const withEssere = reflexive || ESSERE.has(inf) || (prefix && ESSERE.has(base));
  const aux: "avere" | "essere" | "avere / essere" = withEssere && !both ? "essere" : both && !reflexive ? "avere / essere" : withEssere ? "essere" : "avere";
  const AVERE = { present: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"], imperfect: ["avevo", "avevi", "aveva", "avevamo", "avevate", "avevano"], future: ["avrò", "avrai", "avrà", "avremo", "avrete", "avranno"], conditional: ["avrei", "avresti", "avrebbe", "avremmo", "avreste", "avrebbero"], subj: ["abbia", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"] };
  const ESS = { present: ["sono", "sei", "è", "siamo", "siete", "sono"], imperfect: ["ero", "eri", "era", "eravamo", "eravate", "erano"], future: ["sarò", "sarai", "sarà", "saremo", "sarete", "saranno"], conditional: ["sarei", "saresti", "sarebbe", "saremmo", "sareste", "sarebbero"], subj: ["sia", "sia", "sia", "siamo", "siate", "siano"] };
  const helper = aux === "essere" ? ESS : AVERE;
  // With essere the participle agrees: andato / andata, andati / andate.
  const agree = (i: number) => (aux !== "essere" ? part : i < 3 ? `${part.slice(0, -1)}o/a` : `${part.slice(0, -1)}i/e`);
  const compound = (h: string[]) => h.map((x, i) => `${x} ${agree(i)}`);

  const r = (forms: string[]) => (reflexive ? forms.map((f, i) => `${REFLEXIVE[i]} ${f}`) : forms);
  const t = (id: string, name: string, english: string, use: string, forms: string[]): Tense => ({
    id,
    name,
    english,
    use,
    forms: r(forms).map((form, i) => ({ person: PERSONS[i], form })),
  });

  const tenses: Tense[] = [
    t("present", "presente", "Present", "Now, habits, and the near future: Domani parto.", present),
    t("perfect", "passato prossimo", "Perfect", "Things that happened: Ieri ho mangiato la pizza.", compound(helper.present)),
    t("imperfect", "imperfetto", "Imperfect", "How things were, or used to be: Da bambino giocavo a calcio.", imperfect),
    t("pluperfect", "trapassato prossimo", "Past perfect", "Further back in the past: Quando sono arrivato, era già partita.", compound(helper.imperfect)),
    t("future", "futuro semplice", "Future", "Plans and guesses: Domani pioverà. Saranno le tre.", future),
    t("future-perfect", "futuro anteriore", "Future perfect", "Done by a moment in the future: Quando avrò finito, ti chiamo.", compound(helper.future)),
    t("conditional", "condizionale presente", "Conditional", "Polite wishes and would: Vorrei un caffè.", conditional),
    t("conditional-perfect", "condizionale passato", "Conditional perfect", "Would have: Sarei venuto, ma ero malato.", compound(helper.conditional)),
    t("subjunctive", "congiuntivo presente", "Present subjunctive", "After penso che, voglio che, è importante che (B1 and up).", subj),
    t("subjunctive-past", "congiuntivo passato", "Perfect subjunctive", "Penso che sia già partito (B1 and up).", compound(helper.subj)),
    t("subjunctive-imperfect", "congiuntivo imperfetto", "Imperfect subjunctive", "Se fossi ricco… (B1 and up).", subjImperfect),
    t("remote", "passato remoto", "Simple past (literary)", "In books and history; in the south also in speech.", remote),
  ];

  // Imperative: tu has its own form; Lei uses the subjunctive.
  // Irregular -ere/-ire verbs use their tu form: vieni, bevi, esci. Modals have none.
  const MODALS = new Set(["dovere", "potere", "volere"]);
  const tu = MODALS.has(base)
    ? "—"
    : irr?.tu
      ? prefix ? p(irr.tu.split(" / ").pop()!) : irr.tu
      : irr?.present && g !== "are"
        ? present[1]
        : g === "are" ? `${stem}a` : g === "isc" ? `${stem}isci` : `${stem}i`;
  const imperative =
    tu === "—"
      ? { informal: "—", polite: "—" }
      : reflexive
        ? { informal: `${tu.split(" / ").pop()}ti`, polite: `si ${subj[2]}` }
        : { informal: tu, polite: subj[2] };

  if (g === "isc") notes.push("Adds -isc- in io, tu, lui and loro: capisco, capisci, capisce, capiscono.");
  if (group === "are" && /[cg]are$/.test(inf)) notes.push(`Keeps the hard ${inf.at(-4)} sound with an h before e and i: ${present[1]}, ${future[0]}.`);
  if (group === "are" && /[cg]iare$/.test(inf)) notes.push(`The i only softens the ${inf.at(-5)}: it drops before e and i (${present[1]}, ${future[0]}).`);
  if (aux === "essere") notes.push(`Uses essere, so the participle agrees: ${part.slice(0, -1)}o (m), ${part.slice(0, -1)}a (f), ${part.slice(0, -1)}i, ${part.slice(0, -1)}e.`);
  if (aux === "avere / essere") notes.push(`avere with an object (Ho finito il libro), essere without one (Il film è finito).`);
  if (reflexive) notes.push("Reflexive: the pronoun goes before the verb (mi alzo), or on the end of an infinitive (alzarsi) and tu command (alzati!).");
  if (prefix && irr) notes.push(`Built on ${base}, so it follows its irregular forms.`);
  notes.push("Negative tu command: non + infinitive (Non parlare!).");

  return {
    infinitive: reflexive ? input.trim().toLowerCase() : inf,
    meaning: opts.meaning,
    auxiliary: aux,
    participle: part,
    presentParticiple: gerund,
    presentParticipleLabel: "Gerund",
    imperative,
    tenses,
    reflexive,
    irregular: !!irr,
    known: !!irr || !!opts.known?.(inf),
    notes,
  };
}

/** Simple forms of a verb (no helpers), for finding the infinitive from what a learner typed. */
export function simpleForms(t: VerbTables): string[] {
  const simple = new Set(["present", "imperfect", "future", "conditional", "subjunctive", "subjunctive-imperfect", "remote"]);
  const out = [t.participle, t.presentParticiple, ...t.imperative.informal.split(" / ")];
  for (const tense of t.tenses) if (simple.has(tense.id)) for (const f of tense.forms) out.push(f.form.replace(/^(mi|ti|si|ci|vi) /, ""));
  const part = t.participle;
  if (/o$/.test(part)) out.push(`${part.slice(0, -1)}a`, `${part.slice(0, -1)}i`, `${part.slice(0, -1)}e`);
  return out;
}
