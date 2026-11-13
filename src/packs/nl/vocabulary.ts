/**
 * A1 core vocabulary (dictionary forms), grouped by theme. Based on common
 * NT2 A1 word lists. Every word here must appear in at least one A1 text
 * (checked by tests), so a learner who reads the whole level meets them all.
 */

const people = [
  "ik", "jij", "je", "u", "hij", "zij", "ze", "het", "wij", "we", "jullie",
  "mij", "me", "jou", "hem", "haar", "ons", "hun",
  "mijn", "jouw", "uw", "zijn", "onze",
  "naam", "man", "vrouw", "kind", "jongen", "meisje", "mens", "vriend", "vriendin",
  "familie", "vader", "moeder", "ouders", "broer", "zus", "zoon", "dochter",
  "opa", "oma", "baby", "buurman", "buurvrouw", "collega", "student",
  "meneer", "mevrouw",
];

const numbersAndTime = [
  "een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien",
  "elf", "twaalf", "twintig", "dertig", "honderd",
  "eerste", "tweede",
  "tijd", "uur", "minuut", "kwart", "half", "dag", "week", "maand", "jaar",
  "ochtend", "middag", "avond", "nacht", "vandaag", "morgen", "gisteren",
  "nu", "straks", "laat", "vroeg", "altijd", "nooit", "vaak", "soms", "meestal",
  "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag",
  "weekend", "januari", "zomer", "winter",
];

/** The fundamentals every beginner needs, listed in full. */
const basics = [
  // numbers
  "nul", "een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien",
  "elf", "twaalf", "dertien", "veertien", "vijftien", "zestien", "zeventien",
  "achttien", "negentien", "twintig", "dertig", "veertig", "vijftig", "zestig",
  "zeventig", "tachtig", "negentig", "honderd", "duizend",
  // order
  "eerste", "tweede", "derde", "vierde", "vijfde", "zesde", "zevende", "achtste",
  "negende", "tiende", "laatste",
  // days, months, seasons
  "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag",
  "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus",
  "september", "oktober", "november", "december",
  "lente", "zomer", "herfst", "winter", "seizoen", "datum", "kalender",
  "gisteren", "vandaag", "morgen", "overmorgen",
  // colours
  "wit", "zwart", "rood", "blauw", "groen", "geel", "grijs", "oranje", "bruin",
  "roze", "paars",
  // greetings and courtesy
  "hallo", "hoi", "dag", "doei", "goedemorgen", "goedemiddag", "goedenavond",
  "welterusten", "ziens", "welkom", "dank", "alsjeblieft", "alstublieft",
  "sorry", "pardon", "gefeliciteerd", "beterschap", "graag",
  // personal details
  "naam", "voornaam", "achternaam", "adres", "nummer", "telefoonnummer",
  "geboortedatum", "spellen", "letter",
];

const foodAndShopping = [
  "eten", "drinken", "ontbijt", "lunch", "brood", "boterham", "kaas", "melk",
  "koffie", "thee", "water", "bier", "wijn", "appel", "banaan", "groente",
  "fruit", "vlees", "vis", "ei", "aardappel", "ui", "tomaat", "soep", "rijst",
  "suiker", "zout", "boter", "taart", "kilo", "stuk", "zak", "fles", "kopje", "glas",
  "winkel", "supermarkt", "markt", "geld", "euro", "prijs", "duur", "goedkoop",
  "kopen", "betalen", "kosten", "pinnen", "tas", "kassa", "honger", "dorst",
  "lekker", "kleding", "broek", "jas", "schoen", "trui",
];

const homeAndCity = [
  "huis", "kamer", "keuken", "badkamer", "slaapkamer", "woonkamer", "tuin",
  "deur", "raam", "trap", "tafel", "stoel", "bed", "bank", "kast", "lamp",
  "straat", "stad", "dorp", "land", "centrum", "station", "plein", "kerk",
  "park", "brug", "gracht", "winkel", "ziekenhuis", "school", "universiteit",
  "bibliotheek", "fiets", "auto", "bus", "trein", "tram", "kaartje",
  "links", "rechts", "rechtdoor", "hier", "daar", "ver", "dichtbij",
  "adres", "wonen", "huren",
];

const workStudyHealth = [
  "werk", "werken", "baan", "kantoor", "les", "leren", "studeren", "boek",
  "taal", "woord", "vraag", "antwoord", "computer", "telefoon", "mail",
  "lichaam", "hoofd", "hand", "buik", "pijn", "ziek", "gezond", "moe",
  "dokter", "huisarts", "afspraak", "medicijn",
];

const freeTimeAndWeather = [
  "weer", "zon", "regen", "wind", "sneeuw", "koud", "warm", "nat", "graad",
  "regenen", "schijnen", "sport", "voetbal", "zwemmen", "fietsen", "wandelen",
  "lezen", "muziek", "film", "feest", "verjaardag", "cadeau", "vakantie",
  "strand", "zee",
];

const verbs = [
  "zijn", "hebben", "gaan", "komen", "doen", "maken", "zeggen", "spreken",
  "praten", "vragen", "weten", "kennen", "denken", "vinden", "zien", "kijken",
  "horen", "luisteren", "geven", "nemen", "krijgen", "zoeken", "staan",
  "zitten", "liggen", "lopen", "rijden", "wachten", "beginnen", "stoppen",
  "kunnen", "willen", "moeten", "mogen", "heten", "koken", "slapen",
  "opstaan", "wakker", "douchen", "bellen", "helpen", "houden", "wonen",
  "blijven", "brengen", "halen", "schrijven", "spelen", "openen",
  "boodschappen",
];

const describing = [
  "groot", "klein", "nieuw", "oud", "jong", "mooi", "lelijk", "goed", "slecht",
  "leuk", "aardig", "druk", "rustig", "makkelijk", "moeilijk", "lang", "kort",
  "snel", "langzaam", "blij", "verdrietig", "vol", "leeg", "open", "dicht",
  "wit", "zwart", "rood", "blauw", "groen", "geel", "grijs",
  "heel", "erg", "veel", "weinig", "beetje", "ook", "nog", "al", "wel", "niet",
  "geen", "ja", "nee", "misschien", "samen", "alleen", "graag", "natuurlijk",
];

const glue = [
  "de", "en", "of", "maar", "want", "dus", "als", "dan",
  "in", "op", "bij", "naar", "van", "met", "voor", "na", "om", "uit", "aan",
  "onder", "naast", "tussen", "over", "tot", "zonder",
  "wie", "wat", "waar", "wanneer", "hoe", "waarom", "hoeveel", "welk",
  "deze", "die", "dit", "dat", "er", "iets", "niets", "iemand", "alles",
  "dank", "alsjeblieft", "alstublieft", "sorry", "hallo", "doei", "dag",
];

export const coreVocabularyA1: readonly string[] = [
  ...new Set([
    ...people, ...basics, ...numbersAndTime, ...foodAndShopping, ...homeAndCity,
    ...workStudyHealth, ...freeTimeAndWeather, ...verbs, ...describing, ...glue,
  ]),
];
