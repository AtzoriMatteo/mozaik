import type { Person, Tense, VerbTables } from "@/core/verbs";
import { BOTH_REGULAR, IRREGULAR, IRREGULAR_PRESENT, ZIJN_REGULAR, type Irregular } from "./irregular";

/**
 * Dutch verb tables. Regular verbs follow the spelling rules (stem, 't
 * kofschip for -te/-de and -t/-d); irregular verbs come from ./irregular.
 * Separable verbs (opbellen), verbs with an unstressed prefix (begrijpen,
 * verbinden) and reflexive verbs (zich wassen) are built from their root.
 */

/** Separable parts, longest first. Over, door, onder and om are left out: they're often inseparable. */
const SEPARABLE = [
  "terug", "samen", "thuis", "langs", "binnen", "buiten", "achter", "kapot", "schoon", "open", "dicht", "voorbij",
  "klaar", "vast", "neer", "rond", "tegen", "mee", "weg", "voor", "toe", "uit", "aan", "af", "bij", "in", "na", "op",
];
/** Verbs that only look separable. */
const NOT_SEPARABLE = new Set(["achterhalen", "aanvaarden", "toeteren", "informeren", "inspireren", "installeren", "interesseren", "instrueren", "openen", "opereren", "aanbidden", "voorspellen", "voorkomen", "inventariseren", "antwoorden", "aarzelen"]);

/** Over, door, onder and om verbs that do split (ik stap over, ik geef door). */
const ALSO_SEPARABLE: Record<string, string> = {
  overstappen: "over", overkomen: "over", overnemen: "over", doorgeven: "door", doorgaan: "door", doorbrengen: "door",
  onderduiken: "onder", onderlopen: "onder", omdraaien: "om", omkleden: "om", omkijken: "om", omrijden: "om",
};

/** Verbs that only look like prefix + irregular verb: ontmoeten is not ont + moeten. */
const NOT_PREFIXED = new Set(["ontmoeten"]);

/**
 * Prefixes that don't split: no ge- in the participle (bestellen → besteld).
 * Achter, onder, over and door count here unless listed in ALSO_SEPARABLE:
 * overleggen → overlegd, onderzoeken → onderzocht.
 */
const INSEPARABLE = ["achter", "onder", "over", "door", "ont", "her", "ver", "be", "ge", "er"];

const VOWELS = "aeiouy";
const isVowel = (c: string | undefined) => !!c && VOWELS.includes(c);

/** The letters that make -te / -t: 't kofschip (plus x). */
const voiceless = (root: string) => /(t|k|f|s|ch|p|x)$/.test(root);

/** Infinitive minus -en (or -n for gaan, doen, zien): the sound before the ending. */
const root = (inf: string) => (inf.endsWith("en") ? inf.slice(0, -2) : inf.slice(0, -1));

/**
 * -eren verbs from Dutch words ending in -er keep an unstressed e (veranderen →
 * verander). All the others stress it and double it (studeren → studeer,
 * proberen → probeer, leren → leer).
 */
const NATIVE_EREN = new Set([
  "veranderen", "vergaderen", "verbeteren", "herinneren", "luisteren", "fluisteren", "weigeren", "ergeren",
  "verergeren", "schilderen", "bewonderen", "veroveren", "hinderen", "plunderen", "verhongeren", "hongeren",
  "slenteren", "leveren", "timmeren", "wapperen", "flikkeren", "stotteren", "hamsteren", "peuteren", "stuiteren",
  "opperen", "klauteren", "schateren", "huiveren", "bibberen", "slingeren", "jammeren", "verzekeren", "zekeren",
  "bevorderen", "vorderen", "bekommeren", "belemmeren", "kletteren", "donderen", "zeveren", "kieperen",
  "verwonderen", "verhinderen", "uitleveren",
]);

/** The stem as written: maken → maak, zetten → zet, leven → leef, reizen → reis. */
export function stem(inf: string): string {
  if (/^(gaan|staan|slaan)$/.test(inf)) return inf.slice(0, -2);
  if (/^(doen|zien)$/.test(inf)) return inf.slice(0, -1);
  let r = inf.endsWith("en") ? inf.slice(0, -2) : inf.slice(0, -1);
  // Double consonant at the end: zetten → zet, bellen → bel.
  if (r.length > 2 && r.at(-1) === r.at(-2) && !isVowel(r.at(-1))) r = r.slice(0, -1);
  else {
    // Open syllable: one vowel before one consonant gets doubled (maken → maak, spelen → speel),
    // unless that vowel is an unstressed e after another vowel (wandelen → wandel, openen → open).
    const prefix = INSEPARABLE.find((p) => r.startsWith(p) && r.length > p.length + 2) ?? "";
    const body = r.slice(prefix.length);
    const m = body.match(/^(.*?)([^aeiouy]|^)([aeou])([^aeiouy])$/);
    if (m) {
      const before = m[1] + m[2];
      const eren = m[3] === "e" && m[4] === "r";
      const unstressedE = m[3] === "e" && /[aeiouy]/.test(before) && (!eren || NATIVE_EREN.has(inf));
      if (!unstressedE) r = prefix + before + m[3] + m[3] + m[4];
    }
  }
  return r.replace(/v$/, "f").replace(/z$/, "s");
}

/** The root before spelling changes, for choosing -te or -de: reizen → reiz (de), werken → werk (te). */
const soundRoot = (inf: string) => root(inf);

function regularPast(inf: string): { sg: string; pl: string } {
  const s = stem(inf);
  const end = voiceless(soundRoot(inf)) ? "te" : "de";
  return { sg: s + end, pl: s + end + "n" };
}

function regularParticiple(inf: string, noGe: boolean): string {
  const s = stem(inf);
  const end = voiceless(soundRoot(inf)) ? "t" : "d";
  const word = /[td]$/.test(s) ? s : s + end;
  if (noGe) return word;
  // ge + a vowel that would merge gets a trema: geïnformeerd, geëindigd, geüpload.
  return /^(e|i(?!j)|u)/.test(word) ? ("ge" + word[0] + "\u0308" + word.slice(1)).normalize("NFC") : "ge" + word;
}

type Parts = { separable?: string; prefix?: string; body: string };

/** Split opbellen → op + bellen, verbinden → ver + binden (when the rest is a verb we know). */
function split(inf: string, knownVerb: (v: string) => boolean): Parts {
  const also = ALSO_SEPARABLE[inf];
  if (also) return { separable: also, body: inf.slice(also.length) };
  if (NOT_SEPARABLE.has(inf)) return { body: inf };
  for (const p of SEPARABLE) {
    if (inf.startsWith(p) && inf.length > p.length + 3) {
      const body = inf.slice(p.length);
      if (knownVerb(body)) return { separable: p, body };
    }
  }
  // A body we don't know can still be a verb (afronden, uitnodigen, inloggen), as long
  // as it has a vowel before -en and isn't a borrowed -eren verb (inspecteren, opereren).
  for (const p of SEPARABLE) {
    if (inf.startsWith(p) && inf.length > p.length + 3) {
      const body = inf.slice(p.length);
      const plausible = /^[^aeiouy]*[aeiouy].*[^aeiouy]en$/.test(body) && !/^[aeiouy]/.test(body);
      const borrowed = /eren$/.test(body) && !NATIVE_EREN.has(body);
      if (plausible && !borrowed) return { separable: p, body };
    }
  }
  if (NOT_PREFIXED.has(inf)) return { body: inf };
  for (const p of INSEPARABLE) {
    if (inf.startsWith(p) && inf.length > p.length + 3) {
      const body = inf.slice(p.length);
      if (IRREGULAR[body]) return { prefix: p, body };
    }
  }
  return { body: inf };
}

const PERSONS = ["ik", "jij", "u", "hij / zij / het", "wij", "jullie", "zij"] as const;
const REFLEXIVE = ["me", "je", "u / zich", "zich", "ons", "je", "zich"];

const ZULLEN = ["zal", "zult / zal", "zult / zal", "zal", "zullen", "zullen", "zullen"];
const ZOU = ["zou", "zou", "zou", "zou", "zouden", "zouden", "zouden"];
const HEBBEN_NOW = ["heb", "hebt", "hebt / heeft", "heeft", "hebben", "hebben", "hebben"];
const ZIJN_NOW = ["ben", "bent", "bent", "is", "zijn", "zijn", "zijn"];
const HEBBEN_PAST = ["had", "had", "had", "had", "hadden", "hadden", "hadden"];
const ZIJN_PAST = ["was", "was", "was", "was", "waren", "waren", "waren"];

export type ConjugateOptions = {
  /** Is this (part of a) word a verb the pack knows? Used to recognise separable verbs. */
  knownVerb?: (inf: string) => boolean;
  meaning?: string;
};

export function conjugateDutch(input: string, opts: ConjugateOptions = {}): VerbTables | null {
  let inf = input.trim().toLowerCase();
  let reflexive = false;
  if (inf.startsWith("zich ")) {
    reflexive = true;
    inf = inf.slice(5).trim();
  }
  if (!/^[a-zà-ÿ]+$/.test(inf) || !/(en|n)$/.test(inf) || inf.length < 3) return null;

  const known = (v: string) => !!IRREGULAR[v] || !!opts.knownVerb?.(v);
  const { separable, prefix, body } = split(inf, known);
  const core = separable ? body : inf; // the part that conjugates (bellen for opbellen; verbinden stays whole)
  const irr: Irregular | undefined = IRREGULAR[core] ?? (prefix ? IRREGULAR[body] : undefined);
  const notes: string[] = [];

  // Present
  const presentRaw = IRREGULAR_PRESENT[core];
  const s = stem(core);
  const withT = /^(ga|sta|sla)$/.test(s) ? s + "at" : /t$/.test(s) ? s : s + "t";
  const present = presentRaw
    ? [presentRaw.ik, presentRaw.jij, presentRaw.u, presentRaw.hij, core, core, core]
    : [s, withT, withT, withT, core, core, core];

  // Past
  let pastSg: string, pastPl: string;
  if (irr && prefix && !IRREGULAR[core]) {
    pastSg = prefix + irr.pastSg;
    pastPl = prefix + irr.pastPl;
  } else if (irr) {
    pastSg = irr.pastSg;
    pastPl = irr.pastPl;
  } else {
    ({ sg: pastSg, pl: pastPl } = regularPast(core));
  }
  const past = [pastSg, pastSg, pastSg, pastSg, pastPl, pastPl, pastPl];

  // Participle
  // No ge- after an unstressed prefix (betalen → betaald), but bellen is not be + llen.
  const noGe = INSEPARABLE.some((p) => {
    const rest = core.slice(p.length);
    return core.startsWith(p) && rest.length >= 4 && !/^([^aeiouy])\1/.test(rest);
  });
  let participle: string;
  if (irr?.participle) {
    participle = irr.participle;
    if (prefix && !IRREGULAR[core]) participle = prefix + irr.participle.replace(/^ge/, "");
  } else if (irr && !irr.participle) {
    participle = "";
  } else {
    participle = regularParticiple(core, noGe);
  }
  if (separable && participle) participle = separable + participle;

  // Helper verb
  let aux: "h" | "z" | "hz" = irr?.aux ?? "h";
  if (ZIJN_REGULAR.has(inf) || ZIJN_REGULAR.has(core)) aux = "z";
  if (BOTH_REGULAR.has(inf) || BOTH_REGULAR.has(core)) aux = "hz";
  const auxiliary = aux === "h" ? "hebben" : aux === "z" ? "zijn" : "hebben / zijn";
  if (aux === "hz") {
    notes.push(
      BOTH_REGULAR.has(core)
        ? "Zijn when it happens to the subject (Hij is erg veranderd), hebben when someone does it to something (Ik heb het plan veranderd)."
        : "Zijn when you say where to (Ik ben naar huis gelopen), hebben when you don't (Ik heb een uur gelopen).",
    );
  }

  const sep = (form: string) => (separable ? `${form} ${separable}` : form);
  const refl = (i: number, form: string) => (reflexive ? `${form} ${REFLEXIVE[i]}` : form);
  const wholeInf = separable ? separable + core : core;
  const withPronoun = (i: number, rest: string) => (reflexive ? `${REFLEXIVE[i]} ${rest}` : rest);

  const row = (forms: string[]): Person[] => forms.map((form, i) => ({ person: PERSONS[i], form }));
  const simple = (forms: string[]) => row(forms.map((f, i) => sep(refl(i, f))));
  const compound = (auxForms: string[], tail: string) => row(auxForms.map((a, i) => `${a} ${withPronoun(i, tail)}`));
  const auxNow = aux === "z" ? ZIJN_NOW : HEBBEN_NOW;
  const auxPast = aux === "z" ? ZIJN_PAST : HEBBEN_PAST;
  const auxInf = aux === "z" ? "zijn" : "hebben";

  const tenses: Tense[] = [
    { id: "present", name: "onvoltooid tegenwoordige tijd", english: "Present", use: "Now, habits, and often the future: Ik werk morgen.", forms: simple(present) },
    { id: "past", name: "onvoltooid verleden tijd", english: "Simple past", use: "Telling a story, or how things were: Toen ik klein was…", forms: simple(past) },
  ];
  if (participle) {
    tenses.push(
      { id: "perfect", name: "voltooid tegenwoordige tijd", english: "Perfect", use: "What you did; the usual past in conversation: Ik heb gewerkt.", forms: compound(auxNow, participle) },
      { id: "past-perfect", name: "voltooid verleden tijd", english: "Past perfect", use: "Further back in the past: Ik had al gegeten.", forms: compound(auxPast, participle) },
    );
  }
  if (core !== "zullen") {
    tenses.push({ id: "future", name: "onvoltooid tegenwoordige toekomende tijd", english: "Future", use: "Promises and predictions: Ik zal je helpen.", forms: compound(ZULLEN, wholeInf) });
    if (participle) tenses.push({ id: "future-perfect", name: "voltooid tegenwoordige toekomende tijd", english: "Future perfect", use: "Done by a moment in the future: Morgen zal ik het gedaan hebben.", forms: compound(ZULLEN, `${participle} ${auxInf}`) });
    tenses.push({ id: "conditional", name: "onvoltooid verleden toekomende tijd", english: "Conditional", use: "Would: wishes, polite requests, ‘if’: Ik zou graag komen.", forms: compound(ZOU, wholeInf) });
    if (participle) tenses.push({ id: "conditional-perfect", name: "voltooid verleden toekomende tijd", english: "Conditional perfect", use: "Would have: Ik zou gekomen zijn, maar…", forms: compound(ZOU, `${participle} ${auxInf}`) });
  }

  const imperativeStem = presentRaw ? (core === "zijn" ? "wees" : core === "hebben" ? "heb" : presentRaw.ik) : s;
  const modal = ["kunnen", "mogen", "moeten", "willen", "zullen"].includes(core);
  const imperative = modal ? { informal: "—", polite: "—" } : {
    informal: sep(reflexive ? `${imperativeStem} je` : imperativeStem),
    polite: sep(reflexive ? `${core === "zijn" ? "weest" : withT} u` : `${core === "zijn" ? "weest" : presentRaw ? presentRaw.u.split(" / ")[0] : withT} u`),
  };

  if (!irr && !presentRaw) {
    const r = soundRoot(core);
    notes.unshift(`Regular: stem ${s}, past with -${voiceless(r) ? "te" : "de"} because the stem ends in ${voiceless(r) ? "a ’t kofschip letter" : "another sound"}.`);
    if (/[vz]$/.test(r)) notes.push(`The ${r.at(-1)} of the infinitive becomes ${r.at(-1) === "v" ? "f" : "s"} at the end of the stem (${s}), but the past still uses -de.`);
  }
  if (separable) {
    notes.push(`Separable: in a main clause ${separable} goes to the end (ik ${present[0]} … ${separable}); at the end of a side clause it sticks to the verb (…omdat ik ${separable}${present[0]}).`);
  }
  if (reflexive) notes.push("Reflexive: the pronoun changes with the person (ik was me, wij wassen ons).");
  if (!presentRaw && s.endsWith("t")) notes.push(`The stem already ends in t, so hij ${s} gets no extra t.`);
  if (present[1] !== s && !presentRaw) notes.push(`In questions jij loses its t: ${sep(s)} jij?`);
  else if (presentRaw?.inverted) notes.push(`In questions: ${presentRaw.inverted}?`);

  return {
    infinitive: (reflexive ? "zich " : "") + inf,
    meaning: opts.meaning,
    auxiliary,
    participle,
    presentParticiple: inf + "d",
    imperative,
    tenses,
    separable,
    reflexive,
    irregular: !!irr || !!presentRaw,
    known: !!irr || !!presentRaw || !!opts.knownVerb?.(inf) || !!opts.knownVerb?.(core),
    notes,
  };
}
