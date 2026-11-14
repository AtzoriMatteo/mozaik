/** Word lists the Dutch writing checker relies on. All lower case. */

/** Common het-words at A1 (every -je word is a het-word too). */
export const HET_NOUNS = new Set([
  "huis", "kind", "meisje", "brood", "boek", "water", "raam", "bed", "station", "centrum", "dorp",
  "land", "weer", "eten", "werk", "geld", "ei", "glas", "jaar", "uur", "woord", "park", "plein",
  "adres", "feest", "cadeau", "lichaam", "hoofd", "museum", "restaurant", "café", "hotel",
  "ziekenhuis", "strand", "fruit", "vlees", "bier", "gezin", "idee", "probleem", "kantoor",
  "nummer", "weekend", "concert", "paard", "stadhuis", "bureau", "boek", "spel", "nieuws",
  "begin", "einde", "eind", "zand", "verkeer", "examen", "huiswerk", "antwoord", "bericht",
  "gesprek", "kwartier", "moment", "jaar", "leven", "lied", "liedje", "programma", "telefoonnummer",
  "alfabet", "profiel", "pakket", "laboratorium", "gedicht", "speelgoed", "vuurwerk", "deeg",
  "seizoen", "weerbericht", "ontbijt", "uitzicht", "postkantoor", "internet", "zwembad", "theater",
  "kopje", "stukje", "feestje", "huisje", "biertje", "berichtje", "zakje", "lijstje", "pasje",
]);

/** Common de-words at A1. */
export const DE_NOUNS = new Set([
  "stad", "straat", "kamer", "keuken", "tafel", "stoel", "deur", "fiets", "trein", "bus", "auto",
  "school", "universiteit", "winkel", "markt", "man", "vrouw", "moeder", "vader", "broer", "zus",
  "dag", "week", "maand", "les", "taal", "kaas", "koffie", "thee", "melk", "appel", "jas", "broek",
  "trui", "tuin", "kat", "hond", "zon", "regen", "zee", "kerk", "brug", "gracht", "baan", "dokter",
  "huisarts", "afspraak", "tijd", "vraag", "film", "muziek", "familie", "vriend", "vriendin",
  "buurman", "buurvrouw", "collega", "student", "lerares", "leraar", "naam", "datum", "kalender",
  "bibliotheek", "supermarkt", "kassa", "tas", "fles", "soep", "rijst", "suiker", "boter", "taart",
  "lunch", "badkamer", "slaapkamer", "woonkamer", "trap", "bank", "kast", "lamp", "computer",
  "telefoon", "mail", "hand", "buik", "pijn", "koorts", "griep", "keel", "sport", "verjaardag",
  "vakantie", "wind", "sneeuw", "lucht", "winter", "zomer", "lente", "herfst", "ochtend", "middag",
  "avond", "nacht", "maat", "kleur", "schoen", "stropdas", "stage", "boot", "koning", "kring",
  "huur", "kantine", "pauze", "klas", "tekst", "zin", "fout", "foto", "agenda", "tram", "halte",
  "jongen", "baby", "opa", "oma", "oom", "tante", "dochter", "zoon", "ouders", "mensen",
  "groente", "aardappel", "tomaat", "banaan", "ui", "kip", "pasta", "pizza", "salade",
]);

/** Adjectives: bare form → form with -e. */
export const ADJECTIVES: Record<string, string> = {
  groot: "grote", klein: "kleine", mooi: "mooie", oud: "oude", nieuw: "nieuwe", lang: "lange",
  kort: "korte", leuk: "leuke", goed: "goede", lekker: "lekkere", druk: "drukke", rustig: "rustige",
  wit: "witte", rood: "rode", blauw: "blauwe", zwart: "zwarte", groen: "groene", geel: "gele",
  grijs: "grijze", bruin: "bruine", warm: "warme", koud: "koude", duur: "dure", goedkoop: "goedkope",
  jong: "jonge", aardig: "aardige", lief: "lieve", dik: "dikke", dun: "dunne", hoog: "hoge",
  laag: "lage", licht: "lichte", donker: "donkere", fijn: "fijne", gezellig: "gezellige",
  moeilijk: "moeilijke", makkelijk: "makkelijke", ziek: "zieke", gezond: "gezonde", blij: "blije",
  vies: "vieze", schoon: "schone", vol: "volle", leeg: "lege", snel: "snelle", heel: "hele",
  slecht: "slechte", nat: "natte", lelijk: "lelijke", vriendelijk: "vriendelijke",
  belangrijk: "belangrijke", saai: "saaie", stil: "stille", sterk: "sterke", zwak: "zwakke", vrij: "vrije",
};
export const ADJECTIVES_E = new Map(Object.entries(ADJECTIVES).map(([bare, e]) => [e, bare]));

/** Comparatives of the adjectives above, plus the irregular ones. */
export const COMPARATIVES = new Set([
  ...Object.keys(ADJECTIVES).map((a) => (a.endsWith("r") ? `${a}der` : `${ADJECTIVES[a].replace(/e$/, "")}er`)),
  "beter", "meer", "minder", "liever", "groter", "kleiner", "ouder", "jonger", "duurder",
]);

/** Irregular comparatives for "meer + adjective". */
export const COMPARE: Record<string, string> = { goed: "beter", veel: "meer", graag: "liever", weinig: "minder" };

export const DAYS = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
export const MONTHS = [
  "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober",
  "november", "december",
];

/** Words that can start a sentence as slot 1 (time, place, manner), so the verb comes next. */
export const SLOT_ONE_WORDS = new Set([
  "morgen", "vandaag", "gisteren", "overmorgen", "straks", "daarna", "dan", "nu", "soms", "vaak",
  "altijd", "meestal", "nooit", "eerst", "later", "toen", "hier", "daar", "thuis", "buiten",
  "binnen", "misschien", "gelukkig", "natuurlijk", "helaas", "vanavond", "vanmiddag", "vanochtend",
  "vanmorgen", "'s", "elke", "elk", "iedere", "volgende", "volgend", "vorige", "na", "voor", "in",
  "op", "om", "bij", "met", "zonder", "tot", "sinds", "deze", "dit", "zaterdag", ...DAYS,
]);

/** Question words: the verb comes right after them. */
export const QUESTION_WORDS = new Set(["wat", "waar", "wanneer", "hoe", "waarom", "wie", "welke", "welk", "hoeveel", "hoelang"]);

/** Subject pronouns and their person. "zij"/"ze" can be singular or plural. */
export const SUBJECTS: Record<string, "1s" | "2s" | "2f" | "3s" | "pl" | "3?"> = {
  ik: "1s", jij: "2s", je: "2s", u: "2f", hij: "3s", het: "3s", zij: "3?", ze: "3?", wij: "pl", we: "pl", jullie: "pl",
};

export const ZIJN: Record<string, string> = { "1s": "ben", "2s": "bent", "2f": "bent", "3s": "is", pl: "zijn" };
export const HEBBEN: Record<string, string> = { "1s": "heb", "2s": "hebt", "2f": "hebt", "3s": "heeft", pl: "hebben" };
export const ZIJN_FORMS = new Set(["ben", "bent", "is", "zijn"]);
export const HEBBEN_FORMS = new Set(["heb", "hebt", "heeft", "hebben"]);

/** Modal and other irregular finite verbs (they count as verbs for word order). */
export const IRREGULAR_VERBS = new Set([
  ...ZIJN_FORMS, ...HEBBEN_FORMS, "kan", "kun", "kunt", "kunnen", "wil", "wilt", "willen", "mag", "mogen",
  "moet", "moeten", "zal", "zult", "zullen", "ga", "gaat", "gaan", "doe", "doet", "doen", "sta", "staat", "kom", "komt",
  "was", "waren", "had", "hadden",
]);

const UNITS = ["een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen"];
const TENS = ["twintig", "dertig", "veertig", "vijftig", "zestig", "zeventig", "tachtig", "negentig"];
const TEENS = ["tien", "elf", "twaalf", "dertien", "veertien", "vijftien", "zestien", "zeventien", "achttien", "negentien"];
const UNITS_ALL = ["één", ...UNITS];

/** Dutch number words up to 9999, written as one word (dictionaries don't list them all). */
export function isNumberWord(w: string): boolean {
  const below100 = `(?:${[...UNITS_ALL, ...TEENS, ...TENS].join("|")}|(?:${UNITS.join("|")})(?:en|ën)(?:${TENS.join("|")}))`;
  const below1000 = `(?:(?:${UNITS.join("|")})?honderd(?:${below100})?|${below100})`;
  return new RegExp(`^(?:(?:${below1000})?duizend(?:${below1000})?|${below1000})$`).test(w);
}

/** Linking letters between parts of a compound: huis-deur, verjaardag-s-feest, boek-en-kast. */
export const COMPOUND_LINKS = ["", "s", "e", "en"];

/**
 * Past forms and participles without ge- (begon, vond, besteld): never present
 * tense, so the agreement rule leaves them alone and they never count as a stem.
 */
export const NON_PRESENT = new Set([
  "at", "aten", "begon", "begonnen", "begreep", "belde", "beschermden", "besloot", "besteld", "bezet",
  "bleef", "bleven", "bouwden", "bracht", "brachten", "braken", "dacht", "dachten", "deden", "deed",
  "dichtgedaan", "dronken", "duurde", "gaf", "gaven", "ging", "gingen", "grapte", "groeide", "haalden",
  "had", "hadden", "handelde", "hield", "hielden", "hoefde", "ingepakt", "kocht", "kochten", "kon", "konden",
  "kreeg", "kregen", "kwam", "kwamen", "lachte", "lagen", "landden", "las", "lazen", "leerde", "leidde",
  "liep", "liepen", "luisterde", "lukte", "merkte", "mislukt", "mocht", "mochten", "moest", "moesten", "nam",
  "namen", "nodigde", "onderhield", "onderzocht", "ontbeten", "ontsnapt", "ontstond", "openden", "opgehaald",
  "opgelost", "opgeruimd", "organiseerde", "overleefd", "praatten", "probeerde", "reisde", "reisden", "riep",
  "schilderde", "schreef", "schreven", "schrok", "sliep", "sliepen", "sprak", "stapte", "stelde", "stierf",
  "stierven", "stond", "stonden", "stopte", "stormde", "stroomde", "thuisgebleven", "uitgeslapen",
  "verbonden", "verdiend", "verheugden", "verhuisd", "verkocht", "verloren", "verscheen", "verstond",
  "vertaald", "vertaalde", "vertelde", "vertrok", "vertrokken", "viel", "vierden", "volgde", "vond",
  "vonden", "vroegen", "wachtten", "waren", "was", "werd", "werden", "werkte", "wilde", "wilden", "wist",
  "wisten", "won", "woonde", "zag", "zagen", "zakten", "zat", "zaten", "zei", "zeiden", "zocht", "zochten",
  "zongen", "zou", "zouden",
]);
