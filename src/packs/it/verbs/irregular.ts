/**
 * Irregular Italian verbs. Only what differs from the regular pattern is
 * listed; everything else is built by the rules in ./conjugate.ts.
 *
 *   present   six forms (io, tu, lui, noi, voi, loro)
 *   subj      present subjunctive, six forms, when it can't be made from "io"
 *   stem      the old Latin stem for imperfect, gerund and imperfect
 *             subjunctive: fare → fac (facevo, facendo, facessi)
 *   future    stem for future and conditional: andare → andr (andrò, andrei)
 *   remote    strong passato remoto root for io, lui, loro: prendere → pres
 *             (presi, prese, presero); or six full forms
 *   part      past participle
 *   tu        informal imperative
 */
export type Irregular = {
  present?: readonly string[];
  subj?: readonly string[];
  stem?: string;
  future?: string;
  remote?: string | readonly string[];
  part?: string;
  tu?: string;
  /** Imperfect, when not made from the stem: essere → ero. */
  imperfect?: readonly string[];
  /** Imperfect subjunctive, when not made from the stem: essere → fossi. */
  subjImperfect?: readonly string[];
};

const six = (s: string) => s.split(" ");

export const IRREGULAR: Record<string, Irregular> = {
  essere: {
    present: six("sono sei è siamo siete sono"),
    subj: six("sia sia sia siamo siate siano"),
    imperfect: six("ero eri era eravamo eravate erano"),
    subjImperfect: six("fossi fossi fosse fossimo foste fossero"),
    future: "sar",
    remote: six("fui fosti fu fummo foste furono"),
    part: "stato",
    tu: "sii",
  },
  avere: {
    present: six("ho hai ha abbiamo avete hanno"),
    subj: six("abbia abbia abbia abbiamo abbiate abbiano"),
    future: "avr",
    remote: "ebb",
    tu: "abbi",
  },
  andare: { present: six("vado vai va andiamo andate vanno"), future: "andr", tu: "va' / vai" },
  fare: { present: six("faccio fai fa facciamo fate fanno"), stem: "fac", future: "far", remote: "fec", part: "fatto", tu: "fa' / fai" },
  dare: {
    present: six("do dai dà diamo date danno"),
    subj: six("dia dia dia diamo diate diano"),
    subjImperfect: six("dessi dessi desse dessimo deste dessero"),
    future: "dar",
    remote: six("diedi desti diede demmo deste diedero"),
    tu: "da' / dai",
  },
  stare: {
    present: six("sto stai sta stiamo state stanno"),
    subj: six("stia stia stia stiamo stiate stiano"),
    subjImperfect: six("stessi stessi stesse stessimo steste stessero"),
    future: "star",
    remote: six("stetti stesti stette stemmo steste stettero"),
    tu: "sta' / stai",
  },
  dire: { present: six("dico dici dice diciamo dite dicono"), stem: "dic", remote: "diss", part: "detto", tu: "di'" },
  venire: { present: six("vengo vieni viene veniamo venite vengono"), future: "verr", remote: "venn", part: "venuto" },
  tenere: { present: six("tengo tieni tiene teniamo tenete tengono"), future: "terr", remote: "tenn" },
  volere: { present: six("voglio vuoi vuole vogliamo volete vogliono"), future: "vorr", remote: "voll" },
  potere: { present: six("posso puoi può possiamo potete possono"), future: "potr" },
  dovere: {
    present: six("devo devi deve dobbiamo dovete devono"),
    subj: six("debba debba debba dobbiamo dobbiate debbano"),
    future: "dovr",
  },
  sapere: {
    present: six("so sai sa sappiamo sapete sanno"),
    subj: six("sappia sappia sappia sappiamo sappiate sappiano"),
    future: "sapr",
    remote: "sepp",
    tu: "sappi",
  },
  uscire: { present: six("esco esci esce usciamo uscite escono"), tu: "esci" },
  bere: { present: six("bevo bevi beve beviamo bevete bevono"), stem: "bev", future: "berr", remote: "bevv", part: "bevuto" },
  rimanere: { present: six("rimango rimani rimane rimaniamo rimanete rimangono"), future: "rimarr", remote: "rimas", part: "rimasto" },
  scegliere: { present: six("scelgo scegli sceglie scegliamo scegliete scelgono"), remote: "scels", part: "scelto" },
  togliere: { present: six("tolgo togli toglie togliamo togliete tolgono"), remote: "tols", part: "tolto" },
  cogliere: { present: six("colgo cogli coglie cogliamo cogliete colgono"), remote: "cols", part: "colto" },
  sciogliere: { present: six("sciolgo sciogli scioglie sciogliamo sciogliete sciolgono"), remote: "sciols", part: "sciolto" },
  salire: { present: six("salgo sali sale saliamo salite salgono") },
  porre: { present: six("pongo poni pone poniamo ponete pongono"), stem: "pon", future: "porr", remote: "pos", part: "posto" },
  durre: { present: six("duco duci duce duciamo ducete ducono"), stem: "duc", future: "durr", remote: "duss", part: "dotto" },
  trarre: { present: six("traggo trai trae traiamo traete traggono"), stem: "tra", future: "trarr", remote: "trass", part: "tratto" },
  morire: { present: six("muoio muori muore moriamo morite muoiono"), part: "morto" },
  piacere: { present: six("piaccio piaci piace piacciamo piacete piacciono"), remote: "piacqu", part: "piaciuto" },
  tacere: { present: six("taccio taci tace tacciamo tacete tacciono"), remote: "tacqu", part: "taciuto" },
  nascere: { remote: "nacqu", part: "nato" },
  sedere: { present: six("siedo siedi siede sediamo sedete siedono") },
  valere: { present: six("valgo vali vale valiamo valete valgono"), future: "varr", remote: "vals", part: "valso" },
  parere: { present: six("paio pari pare paiamo parete paiono"), future: "parr", remote: "parv", part: "parso" },
  spegnere: { present: six("spengo spegni spegne spegniamo spegnete spengono"), remote: "spens", part: "spento" },
  udire: { present: six("odo odi ode udiamo udite odono") },
  apparire: { present: six("appaio appari appare appariamo apparite appaiono"), remote: "apparv", part: "apparso" },
  riempire: { present: six("riempio riempi riempie riempiamo riempite riempiono") },
  cucire: { present: six("cucio cuci cuce cuciamo cucite cuciono") },
  cuocere: { present: six("cuocio cuoci cuoce cuociamo cuocete cuociono"), remote: "coss", part: "cotto" },
  vedere: { future: "vedr", remote: "vid", part: "visto" },
  vivere: { future: "vivr", remote: "viss", part: "vissuto" },
  cadere: { future: "cadr", remote: "cadd" },
  conoscere: { remote: "conobb" },
  prendere: { remote: "pres", part: "preso" },
  mettere: { remote: "mis", part: "messo" },
  scrivere: { remote: "scriss", part: "scritto" },
  leggere: { remote: "less", part: "letto" },
  chiedere: { remote: "chies", part: "chiesto" },
  rispondere: { remote: "rispos", part: "risposto" },
  decidere: { remote: "decis", part: "deciso" },
  chiudere: { remote: "chius", part: "chiuso" },
  correre: { remote: "cors", part: "corso" },
  perdere: { remote: "pers", part: "perso" },
  vincere: { remote: "vins", part: "vinto" },
  rompere: { remote: "rupp", part: "rotto" },
  ridere: { remote: "ris", part: "riso" },
  piangere: { remote: "pians", part: "pianto" },
  dipingere: { remote: "dipins", part: "dipinto" },
  spingere: { remote: "spins", part: "spinto" },
  giungere: { remote: "giuns", part: "giunto" },
  accendere: { remote: "acces", part: "acceso" },
  scendere: { remote: "sces", part: "sceso" },
  spendere: { remote: "spes", part: "speso" },
  rendere: { remote: "res", part: "reso" },
  tendere: { remote: "tes", part: "teso" },
  muovere: { remote: "moss", part: "mosso" },
  succedere: { remote: "success", part: "successo" },
  discutere: { remote: "discuss", part: "discusso" },
  dividere: { remote: "divis", part: "diviso" },
  uccidere: { remote: "uccis", part: "ucciso" },
  esprimere: { remote: "espress", part: "espresso" },
  volgere: { remote: "vols", part: "volto" },
  aprire: { part: "aperto" },
  offrire: { part: "offerto" },
  soffrire: { part: "sofferto" },
  coprire: { part: "coperto" },
  correggere: { remote: "corress", part: "corretto" },
  distruggere: { remote: "distruss", part: "distrutto" },
  friggere: { remote: "friss", part: "fritto" },
  esistere: { part: "esistito" },
  assistere: { part: "assistito" },
  insistere: { part: "insistito" },
  resistere: { part: "resistito" },
  emergere: { remote: "emers", part: "emerso" },
  immergere: { remote: "immers", part: "immerso" },
  convincere: { remote: "convins", part: "convinto" },
  fingere: { remote: "fins", part: "finto" },
  piovere: { remote: "piovv" },
  crescere: { remote: "crebb" },
  mordere: { remote: "mors", part: "morso" },
  nascondere: { remote: "nascos", part: "nascosto" },
  difendere: { remote: "difes", part: "difeso" },
  offendere: { remote: "offes", part: "offeso" },
  dipendere: { remote: "dipes", part: "dipeso" },
  sorridere: { remote: "sorris", part: "sorriso" },
  esplodere: { remote: "esplos", part: "esploso" },
  concludere: { remote: "conclus", part: "concluso" },
  includere: { remote: "inclus", part: "incluso" },
  escludere: { remote: "esclus", part: "escluso" },
  deludere: { remote: "delus", part: "deluso" },
  scuotere: { remote: "scoss", part: "scosso" },
  ardere: { remote: "ars", part: "arso" },
  radere: { remote: "ras", part: "raso" },
  invadere: { remote: "invas", part: "invaso" },
  persuadere: { remote: "persuas", part: "persuaso" },
};

/** Prefixes that make new verbs from an irregular one: prendere → sorprendere. */
export const PREFIXES = [
  "contrad", "sopravv", "inter", "sotto", "trat", "tras", "bene", "male", "sopr", "pre", "pro", "com", "con", "cor",
  "dis", "per", "sor", "sup", "sod", "rac", "rag", "rin", "ric", "ri", "am", "ap", "at", "ac", "ad", "ag", "op",
  "ot", "man", "de", "di", "es", "im", "in", "so", "e", "s", "i", "a", "o",
];

/** Bases that never take a prefix this way (guardare is not guar + dare). */
export const NO_PREFIX = new Set(["dare", "stare", "essere", "avere", "andare"]);

/** Bases that take any prefix: tradurre, produrre, proporre, attrarre. */
export const ANY_PREFIX = new Set(["durre", "porre", "trarre"]);

/** Verbs whose passato prossimo uses essere. */
export const ESSERE = new Set([
  "essere", "stare", "andare", "venire", "arrivare", "partire", "uscire", "entrare", "tornare", "ritornare", "restare",
  "rimanere", "nascere", "morire", "diventare", "cadere", "piacere", "dispiacere", "sembrare", "succedere",
  "accadere", "capitare", "costare", "durare", "bastare", "mancare", "riuscire", "apparire", "sparire", "scomparire",
  "dimagrire", "ingrassare", "invecchiare", "esistere", "fuggire", "scappare", "crescere",
  "giungere", "emergere", "esplodere", "rientrare", "occorrere", "evadere", "svenire", "intervenire",
  "divenire", "avvenire", "pervenire", "provenire", "sopravvivere", "affogare", "annegare", "arrossire", "impazzire",
  "invecchiare", "ricadere", "rinascere",
]);

/** Verbs that take either: Ho finito il libro / Il film è finito. */
export const BOTH = new Set([
  "cominciare", "iniziare", "finire", "passare", "salire", "scendere", "correre", "cambiare", "aumentare",
  "diminuire", "migliorare", "peggiorare", "vivere", "volare", "saltare", "continuare", "piovere", "nevicare",
  "servire", "suonare", "terminare", "girare", "atterrare", "decollare", "bruciare", "affondare", "guarire",
]);

/** -ire verbs that add -isc- (capisco), the most common ones. */
export const ISC = new Set([
  "capire", "finire", "preferire", "pulire", "spedire", "costruire", "restituire", "suggerire", "unire", "colpire",
  "fornire", "gestire", "impedire", "inserire", "obbedire", "ubbidire", "sparire", "scomparire", "stabilire",
  "tradire", "guarire", "dimagrire", "ingrandire", "definire", "chiarire", "garantire", "condire", "arricchire",
  "approfondire", "diminuire", "contribuire", "distribuire", "istruire", "punire", "reagire", "agire", "favorire",
  "ferire", "fiorire", "gradire", "influire", "percepire", "proibire", "sostituire", "svanire", "trasferire",
  "abolire", "aderire", "digerire", "esaurire", "esibire", "interferire", "partorire", "ammonire", "impazzire",
  "arrossire", "impallidire", "scolpire", "starnutire", "stupire", "riferire", "differire", "conferire", "demolire",
  "fallire", "ammattire", "attribuire", "concepire", "smaltire", "spartire", "tossire",
]);

/** -iare verbs whose i is stressed and stays: invio → invii. */
export const STRESSED_I = new Set(["inviare", "sciare", "spiare", "avviare", "rinviare", "deviare", "obliare"]);
