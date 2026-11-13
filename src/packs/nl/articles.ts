import { DE_NOUNS, HET_NOUNS } from "./writing/data";

/**
 * de or het for every noun in the course, by dictionary form, so flashcards
 * can show "de gracht", "het huis". Extends the lists the writing checker
 * uses. Words that take both (het punt / de punt) get the one the course uses.
 */

const DE = [
  "informatie", "korting", "mist",
  "aanbieding", "aardbei", "achternaam", "advertentie", "afvalkalender", "ambulance", "apotheek",
  "app", "appeltaart", "arm", "arts", "baard", "baas", "bak", "bakker", "bakkerij", "bal", "balie",
  "balk", "bankpas", "bar", "basisschool", "beller", "beurt", "bezoeker", "bezorger", "bijbaan",
  "biologie", "bioloog", "bitterballen", "bladzijde", "bloem", "blog", "boekwinkel", "bol", "bon",
  "bonuskaart", "boodschappen", "boom", "borrel", "boterham", "brandweer", "brief", "bruiloft",
  "buikpijn", "burcht", "buschauffeur", "buur", "buurt", "cappuccino", "capuchon", "cd", "chocola",
  "chocoladeletter", "cirkel", "cola", "croissant", "curry", "cursus", "dame", "dienst", "dijk",
  "dinosaurus", "donut", "doos", "dorst", "douche", "drogist", "drop", "ervaring", "euro",
  "fietsenstalling", "fontein", "friet", "frikandel", "gang", "garage", "gast", "geboortedatum",
  "gemeente", "geneeskunde", "geschiedenis", "gids", "gitaar", "glasbak", "graad", "grap",
  "groenteman", "groet", "haak", "haast", "hagelslag", "handdoek", "handtekening", "hap", "haring",
  "haven", "heer", "hekel", "helm", "heuvel", "hobby", "hoed", "hoek", "honger", "honing",
  "hoofdpijn", "hoofdstad", "huisartsenpost", "huisartsenpraktijk", "huisgenoot", "ingang",
  "intercity", "journalist", "jurk", "kaart", "kaaskraam", "kapper", "kapsalon", "kas", "keelpijn",
  "keer", "kerst", "kerstboom", "kerstdag", "ketchup", "keukentafel", "kibbeling", "kiespijn",
  "kilo", "kiosk", "klacht", "klant", "kleding", "kledingwinkel", "kleren", "knie", "koelkast",
  "koffiemachine", "kok", "koopavond", "kraam", "krant", "krentenbol", "kringverjaardag", "kroeg",
  "kus", "kust", "kwaliteit", "laars", "last", "lepel", "letter", "lijn", "lijst", "liter",
  "loodgieter", "maandagochtend", "mantel", "mayonaise", "meneer", "mens", "meter", "metro",
  "mevrouw", "middernacht", "minuut", "molen", "mond", "monteur", "mosterd", "mouw", "munt",
  "nationaliteit", "natuur", "neef", "neus", "nicht", "nieuwjaarsduik", "noordzee", "ochtendmens",
  "olie", "oliebollen", "oudejaarsavond", "paal", "pan", "pannenkoek", "paracetamol", "partner",
  "paskamer", "patat", "patiënt", "persoon", "pindakaas", "pinpas", "plaats", "pleister",
  "poedersuiker", "poffertjes", "polder", "politie", "portemonnee", "postcode", "prijs", "prik",
  "proeftijd", "programmeur", "provincie", "radio", "receptie", "rechterkant", "regel", "regenjas",
  "regering", "reis", "rij", "rijsttafel", "rit", "rondleiding", "rondvaart", "rookworst", "roti",
  "rozijn", "rug", "ruimte", "schaal", "scheikunde", "schoenenwinkel", "scholier", "schoonmaker",
  "schort", "schouder", "show", "sinaasappel", "slager", "slagroom", "soort", "spiegel",
  "spijkerbroek", "spoed", "sportschoenen", "sportschool", "sprinter", "spullen", "stamppot",
  "stoep", "strandtent", "stroopwafel", "studentenkrant", "studie", "taalles", "tablet", "tand",
  "tandartspraktijk", "tandpasta", "taxi", "teen", "televisie", "tip", "toerist", "tomatensaus",
  "toonbank", "toren", "trainer", "tulp", "uitverkoop", "verdieping", "verhuurder", "verkoopster",
  "verkoper", "verpleegkundige", "vertraging", "verzekeringspas", "vis", "visser", "vlaai", "voet",
  "volwassene", "voornaam", "vrijdagavond", "vrijmarkt", "wc", "website", "weg", "wekker",
  "wereld", "wijn", "winterjas", "woensdagavond", "woensdagmiddag", "wolk", "woonplaats", "wortel",
  "yoghurt", "zaal", "zak", "zeespiegel", "zelfscan", "zoen", "zondagavond", "zonnebrandcrème",
  "zonsondergang", "zorg", "zwembroek",
];

const HET = [
  "buitenland",
  "toilet", "nieuwjaar", "stationsplein",
  "afval", "avondeten", "been", "bezoek", "blad", "boord", "bord", "bos", "buurtfeest", "deel",
  "drankje", "eiland", "fietspad", "gas", "gat", "gerecht", "getal", "halfuur", "hek", "huisdier",
  "huisnummer", "ijs", "kanaal", "karton", "kerstpakket", "kleinkind", "koor", "kwart", "lawaai",
  "leesplezier", "levensgevaar", "lid", "lot", "medicijn", "mes", "meubel", "milieu", "ongeluk",
  "oog", "overhemd", "pak", "paleis", "papier", "plan", "plastic", "plezier", "procent", "punt",
  "recept", "schaap", "scherm", "schilderij", "schrift", "slot", "snoep", "spoor", "strandweer",
  "stuk", "taalmaatje", "tuinafval", "verschil", "vest", "vliegtuig", "vliegveld", "voetbal",
  "voornemen", "vuur", "zout",
];

export const ARTICLES: ReadonlyMap<string, "de" | "het"> = new Map([
  ...[...DE_NOUNS, ...DE].map((w) => [w, "de"] as const),
  ...[...HET_NOUNS, ...HET].map((w) => [w, "het"] as const),
]);

/** The article of a noun (dictionary form), or null when it isn't a noun. */
export function articleFor(lemma: string): "de" | "het" | null {
  const w = lemma.toLowerCase();
  const known = ARTICLES.get(w);
  if (known) return known;
  // Every diminutive is a het-word: het huisje, het meisje, het kopje.
  if (/(je|tje|pje|kje)$/.test(w) && w.length > 4) return "het";
  return null;
}
