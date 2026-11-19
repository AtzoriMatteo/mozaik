import { DE_NOUNS, HET_NOUNS } from "./writing/data";

/**
 * de or het for every noun in the course, by dictionary form, so flashcards
 * can show "de gracht", "het huis". Extends the lists the writing checker
 * uses. Words that take both (het punt / de punt) get the one the course uses.
 */

const DE = [
  "italiaan", "mexicaan", "europeaan", "engelsen", "ansichtkaart", "bakfiets", "beschuit", "bloemenkraam", "boormachine", "compagnie", "docent", "duin", "grill", "ham",
  "kaasboer", "keuze", "klok", "knop", "knuffel", "kraamverzorgster", "kroon", "ladder", "lampion", "linde", "linzensoep",
  "mandarijn", "mascarpone", "museumkaart", "olijfolie", "pagina", "pen", "speeltuin", "tandarts", "tekening", "terugweg",
  "verbinding", "verjaardagskalender", "vla", "vork", "vuilnisbak", "watersnoodramp", "wereldoorlog", "zolderkamer", "lerares",
  "post", "bedrijfskunde", "linkerkant", "lol", "snert", "jazz", "enkel",
  "bestelling", "lievelingsmaand", "lievelingskleur", "huurder", "tweepersoonskamer", "recensie", "reactie", "paprika", "knoflook", "ster", "long", "sprong", "erwtensoep", "shampoo", "pruik", "macht", "laptop", "reservesleutel", "ijssalon", "kookcursus", "studietijd", "lasagne", "nazi", "onderduiker", "sector", "ventilator", "vensterbank", "kuur", "alcohol", "oorontsteking", "kop", "spijt", "oordop", "moeite", "kraan", "presentator", "ondertitel", "nieuwssite", "strip", "windkracht", "serie", "aflevering", "sportclub", "partij", "nieuwkomer", "compost", "folder", "grondstof", "jeugd", "bardienst", "klomp", "dominee", "prediker", "filmnacht", "filmliefhebber", "voetbalherinnering", "sjerp", "luitenant", "nachtscène", "boulevard", "sjaal", "wintersoep", "spliterwt", "gram", "knolselderij", "saté", "nasi", "bami", "sambal", "salami", "tiramisu", "allergie", "noot", "zalm", "biefstuk", "appelflap", "geul", "kelder", "sok", "bodem", "eb", "ingenieur", "slaaf", "reiziger", "oostkant", "eenpersoonskamer", "code", "sleutelkaart", "fado", "schaatser", "ree", "fietser", "voetganger", "afvaldienst", "calvinist", "reiskosten", "fietsonderdelen", "servicekosten", "vakantiedag", "mat", "kaneel", "nootmuskaat", "pom", "kilometer", "uitwedstrijden", "schutters", "wifi", "werkende", "bel", "groet", "fout", "personeelsmanager",
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
  // A2
  "afwas", "angst", "bankrekening", "belasting", "beslissing", "bezichtiging", "boer", "borg", "buitenlander", "bushalte",
  "collectie", "dienstregeling", "droom", "eerlijkheid", "eeuw", "ezel", "fabriek", "file", "fooi", "groei",
  "groep", "grond", "helft", "hulp", "huurwoning", "inschrijving", "interesse", "jongere", "kaars", "kant",
  "klantenservice", "kleindochter", "koffer", "kopie", "lift", "maaltijd", "manager", "manier", "medewerker", "mening",
  "muur", "nederlander", "ober", "oefening", "oorlog", "overheid", "paniek", "paraplu", "plak", "plant",
  "plek", "rekening", "reden", "rivier", "rugzak", "rust", "ruzie", "saus", "schat", "schilder",
  "schrijver", "sleutel", "snack", "specialist", "spits", "stap", "storing", "storm", "tandenborstel", "tentoonstelling",
  "toegang", "toekomst", "tv", "uitnodiging", "vacature", "verf", "vergadering", "verhuizing", "verkoudheid", "verrassing",
  "verwarming", "verwijzing", "vlag", "vlinder", "vloer", "voedselbank", "vorm", "vrijwilliger", "wandeling", "wedstrijd",
  "werknemer", "wetenschapper", "worst", "zaak", "zender", "aangifte", "afhaalzaak", "assistente", "bacterie", "bewoner",
  "bijbaan", "bioscoop", "brievenbus", "buienradar", "buurtapp", "cursist", "dam", "damesfiets", "dijk", "directeur",
  "emmer", "erwt", "etalage", "finale", "gast", "generatie", "geschiedenis", "gids", "groepsapp", "handelaar",
  "heide", "huisartsenpost", "kapitein", "ketel", "ketting", "kip", "klant", "knie", "koe", "kolonie",
  "kou", "kunsthandel", "kust", "mand", "matroos", "modder", "munt", "opstand", "oranjekoorts", "paddenstoel",
  "parel", "peper", "personeelsmanager", "pindasaus", "poortwachter", "praktijk", "prei", "regering", "riem", "rijsttafel",
  "rookworst", "salade", "schelp", "schimmel", "schil", "specerij", "spier", "stagiair", "stiltecoupé",
  "tegel", "temperatuur", "theorie", "toko", "tompouce", "training", "uitagenda", "verkiezing", "vouwfiets",
  "vrachtwagen", "wachtlijst", "wei", "werkdag", "zandbank", "zeehond", "zolder", "zonnebloem", "zorgverzekering",
];

const HET = [
  "apparaat", "festival", "gourmetstel", "grofvuil", "jeugdjournaal", "kompas", "natuurijs", "pond", "schap", "stokbrood",
  "voorgerecht", "wachtwoord", "wisselgeld",
  "midden", "tiental", "ov", "retour",
  "lievelingsseizoen", "veld", "burgerservicenummer", "zuiden", "oosten", "noorden", "westen", "noordwesten", "verzorgingshuis", "statiegeld", "waterschap", "team", "mannenteam", "contract", "gordijn", "poldermodel", "concentratiekamp", "hart", "item", "katenspek", "bruiswater", "gft", "podium", "kunstmuseum", "edelhert", "zwijn", "geluk", "vasteland", "rotweer", "basketbal", "onweer", "gebruik", "cv", "excuus", "hockey", "lot",
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
  // A2
  "abonnement", "appartement", "avontuur", "bedrag", "bedrijf", "budget", "contact", "dagboek", "dak", "dier",
  "ding", "gebied", "gebouw", "geheim", "gezegde", "huurcontract", "journaal", "middel", "oor", "overleg",
  "paspoort", "perron", "privéleven", "project", "rijbewijs", "salaris", "schip", "shirt", "sollicitatiegesprek", "spreekuur",
  "systeem", "teken", "terras", "verhaal", "vertrek", "vervoer", "voordeel", "virus", "vrijwilligerswerk", "achterhuis",
  "advies", "balkon", "betaalverzoek", "bestuur", "consultatiebureau", "dessert", "elftal", "fietsenrek", "framenummer", "gemaal",
  "gemeentehuis", "gerecht", "geweld", "herhaalrecept", "hostel", "kampioenschap", "kantoorgebouw", "koffiedik", "kraanwater", "lidmaatschap",
  "mailadres", "natuurgebied", "nepnieuws", "ongemak", "pad", "programma", "regenwater", "restafval", "riool",
  "roggebrood", "scheepvaartmuseum", "slot", "sportveld", "toernooi", "touw", "uitje", "vak", "vakantiegeld", "varkensvlees",
  "wad", "waterplein", "weiland", "wereldkampioenschap",
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
