import type { GrammarLesson } from "@/core/content";
import { choice, example, fill, match, sort, table, text, transform } from "./helpers";

/** Units 1–2: Kennismaken, Familie. */
export const lessons1: Record<string, GrammarLesson> = {
  "pronouns-subject": {
    blocks: [
      text("Subject pronouns say who does the action. Dutch has a stressed and an unstressed form for some of them; in speech the short one is normal."),
      table(
        "Who",
        ["", "Stressed", "Unstressed"],
        ["I", "ik", "–"],
        ["you (informal)", "jij", "je"],
        ["you (polite)", "u", "–"],
        ["he / she / it", "hij / zij / het", "– / ze / –"],
        ["we", "wij", "we"],
        ["you (plural)", "jullie", "–"],
        ["they", "zij", "ze"],
      ),
      text("jij is for friends, family, peers and children; u for strangers, older people, shops and offices. When in doubt, start with u: people will tell you to say jij."),
    ],
    examples: [
      example("Ik ben drieëntwintig jaar en ik ben student", "I'm twenty-three and I'm a student.", "Ik", "ik"),
      example("Ze studeert geneeskunde en werkt soms in het ziekenhuis.", "She studies medicine and sometimes works at the hospital.", "Ze"),
      example("Ben jij de nieuwe buurvrouw?", "Are you the new neighbour?", "jij"),
      example("Wonen jullie hier met z'n drieën?", "Do the three of you live here?", "jullie"),
    ],
    exercises: [
      choice("", " kom uit Italië.", ["Ik", "Hij", "Jullie"], 0, "I'm from Italy."),
      choice("Noor is Nederlands. ", " studeert geneeskunde.", ["Hij", "Ze", "Wij"], 1, "Noor is Dutch. She studies medicine."),
      choice("Goedemorgen, mevrouw. Bent ", " de buurvrouw?", ["jij", "u", "jullie"], 1, "Good morning, madam. Are you the neighbour?"),
      choice("Luca en Bram, wonen ", " in Leiden?", ["jullie", "u", "zij"], 0, "Luca and Bram, do you live in Leiden?"),
      fill("Bram werkt in een café. ", " komt uit Leiden.", "Hij", "Bram works in a café. He's from Leiden."),
      fill("Luca en ik zijn huisgenoten. ", " wonen in het centrum.", ["Wij", "We"], "Luca and I are housemates. We live in the centre."),
    ],
  },

  "present-regular": {
    blocks: [
      text("Take the infinitive (wonen), remove -en: that's the stem. Then:"),
      table(
        "wonen (to live)",
        ["", "Form", "Rule"],
        ["ik", "woon", "stem"],
        ["jij / u", "woont", "stem + t"],
        ["hij / zij / het", "woont", "stem + t"],
        ["wij / jullie / zij", "wonen", "infinitive"],
      ),
      text("Spelling keeps the sound: wonen → woon (double the vowel in a closed syllable), werken → werk, zitten → zit (one t is enough). Stems ending in t don't get another t: hij zit."),
    ],
    examples: [
      example("Ik woon in een oud huis in het centrum", "I live in an old house in the centre", "woon"),
      example("Hij werkt in een café in de Breestraat.", "He works in a café on the Breestraat.", "werkt"),
      example("Ik studeer biologie aan de universiteit van Leiden.", "I study biology at Leiden University.", "studeer"),
      example("Ze fietsen samen naar de zee.", "They cycle to the sea together.", "fietsen"),
    ],
    exercises: [
      fill("Ik ", " in Leiden.", "woon", "I live in Leiden.", "wonen"),
      fill("Noor ", " geneeskunde.", "studeert", "Noor studies medicine.", "studeren"),
      fill("Wij ", " Nederlands.", "leren", "We're learning Dutch.", "leren"),
      fill("Bram ", " in een café.", "werkt", "Bram works in a café.", "werken"),
      fill("Bram ", " in de keuken.", "zit", "Bram is sitting in the kitchen.", "zitten"),
      choice("Jullie ", " heel goed Engels.", ["spreek", "spreekt", "spreken"], 2, "You (all) speak English very well."),
    ],
  },

  "zijn-hebben": {
    blocks: [
      text("The two most used verbs are irregular. Learn them as a song: ik ben, jij bent, hij is; ik heb, jij hebt, hij heeft."),
      table(
        "zijn (to be) and hebben (to have)",
        ["", "zijn", "hebben"],
        ["ik", "ben", "heb"],
        ["jij / u", "bent", "hebt / heeft (u)"],
        ["hij / zij / het", "is", "heeft"],
        ["wij / jullie / zij", "zijn", "hebben"],
      ),
      text("Dutch uses hebben where English uses 'to be' for some feelings: Ik heb honger (I'm hungry), Ik heb het koud (I'm cold). And age is just zijn + jaar: Ik ben 23 jaar."),
    ],
    examples: [
      example("Ik ben drieëntwintig jaar en ik ben student", "I'm twenty-three and I'm a student.", "ben"),
      example("Op maandag en woensdag heb ik les.", "On Mondays and Wednesdays I have class.", "heb"),
      example("Hij heeft hoofdpijn en buikpijn, en hij is heel moe.", "He has a headache and stomach ache, and he's very tired.", "heeft", "is"),
      example("Ik heb geen honger meer.", "I'm not hungry any more.", "heb", "honger"),
    ],
    exercises: [
      fill("Ik ", " student.", "ben", "I'm a student.", "zijn"),
      fill("Noor ", " twee huisgenoten.", "heeft", "Noor has two housemates.", "hebben"),
      fill("Wij ", " in Leiden.", "zijn", "We're in Leiden.", "zijn"),
      fill("", " jij een fiets?", "Heb", "Do you have a bike?", "hebben"),
      choice("Ik ", " honger.", ["ben", "heb"], 1, "I'm hungry."),
      choice("Mevrouw De Vries ", " zeventig jaar.", ["is", "heeft"], 0, "Mrs De Vries is seventy."),
    ],
  },

  possessives: {
    blocks: [
      text("Possessives go before the noun. Like pronouns, some have a short spoken form."),
      table(
        "Whose",
        ["", "Possessive", "Example"],
        ["my", "mijn", "mijn vader"],
        ["your (informal)", "jouw / je", "jouw familie"],
        ["your (polite)", "uw", "uw naam"],
        ["his", "zijn", "zijn kamer"],
        ["her", "haar", "haar ouders"],
        ["our", "onze / ons", "onze buurman, ons huis"],
        ["your (plural)", "jullie", "jullie huis"],
        ["their", "hun", "hun namen"],
      ),
      text("Only 'our' changes: onze with de-words and plurals, ons with het-words (ons huis). Another way to say whose: de kamer van Luca = Luca's room."),
    ],
    examples: [
      example("Mijn vader heet Ahmet en mijn moeder heet Fatma.", "My father is called Ahmet and my mother is called Fatma.", "Mijn", "mijn"),
      example("Hun namen zijn Emre en Defne.", "Their names are Emre and Defne.", "Hun"),
      example("Dat is onze buurvrouw", "That's our neighbour.", "onze"),
      example("Jouw familie is groot!", "Your family is big!", "Jouw"),
    ],
    exercises: [
      fill("Luca belt ", " moeder.", "zijn", "Luca calls his mother."),
      fill("Noor belt ", " moeder.", "haar", "Noor calls her mother."),
      choice("Dit is ", " huis.", ["onze", "ons"], 1, "This is our house."),
      choice("Dat is ", " buurvrouw.", ["onze", "ons"], 0, "That's our neighbour."),
      choice("Leo en Sofia zijn de kinderen van Paolo. ", " oma kookt elke zondag.", ["Hun", "Haar", "Zijn"], 0, "Leo and Sofia are Paolo's children. Their grandma cooks every Sunday."),
      transform("Say it with a possessive (his):", "de kamer van Luca", ["zijn kamer"], "his room"),
    ],
  },

  plurals: {
    blocks: [
      text("Most nouns add -en. Nouns ending in an unstressed -el, -em, -en, -er, -je, and many loanwords, add -s."),
      table(
        "Two main patterns",
        ["", "Singular", "Plural"],
        ["-en", "boek, fiets, brug", "boeken, fietsen, bruggen"],
        ["-s", "tafel, kamer, meisje", "tafels, kamers, meisjes"],
        ["-'s (vowel end)", "auto, foto, baby", "auto's, foto's, baby's"],
      ),
      text("Spelling follows sound: brug → bruggen (double the consonant to keep the short u), huis → huizen (s becomes z), kaas → kazen (one a is enough in an open syllable). All plurals take de."),
    ],
    examples: [
      example("Leiden is een mooie stad met veel grachten, bruggen en fietsen.", "Leiden is a beautiful city with lots of canals, bridges and bikes.", "grachten", "bruggen", "fietsen"),
      example("Er liggen grote, gele kazen op de tafel.", "There are big yellow cheeses on the table.", "kazen"),
      example("Alle huizen zijn hoog en smal, en overal zijn grachten en bruggen.", "All the houses are tall and narrow, and everywhere there are canals and bridges.", "huizen", "grachten", "bruggen"),
      example("Op de eerste verdieping zijn twee slaapkamers en een badkamer.", "On the first floor there are two bedrooms and a bathroom.", "slaapkamers"),
    ],
    exercises: [
      fill("Ik heb twee ", ".", "boeken", "I have two books.", "boek"),
      fill("In de keuken staan vier ", ".", "stoelen", "There are four chairs in the kitchen.", "stoel"),
      fill("Mijn oma heeft drie ", ".", "kinderen", "My grandma has three children.", "kind (irregular!)"),
      fill("In Leiden zijn veel ", ".", "bruggen", "There are many bridges in Leiden.", "brug"),
      fill("Er staan twee ", " in de woonkamer.", "tafels", "There are two tables in the living room.", "tafel"),
      fill("Luca heeft veel ", " van zijn familie.", "foto's", "Luca has lots of photos of his family.", "foto"),
    ],
  },

  articles: {
    blocks: [
      text("Dutch has two words for 'the': de and het. About three quarters of nouns are de-words. There's no reliable rule, so learn each noun with its article: het huis, de kamer."),
      table(
        "Some patterns that help",
        ["Always het", "Always de"],
        ["words ending in -je (het meisje)", "all plurals (de huizen)"],
        ["verbs used as nouns (het eten)", "people by job or role (de leraar)"],
        ["languages (het Nederlands)", "most words ending in -ing (de ervaring)"],
      ),
      text("'A' or 'an' is een, the same for every noun: that's the next lesson."),
    ],
    examples: [
      example("Het is het kind, niet de kind", "It's het kind, not de kind.", "het kind"),
      example("Ik woon in een oud huis in het centrum", "I live in an old house in the centre", "het"),
      example("De les is leuk, maar soms ook moeilijk.", "The class is fun, but sometimes also difficult.", "De"),
    ],
    exercises: [
      choice("", " huis is oud.", ["De", "Het"], 1, "The house is old."),
      choice("", " meisje fietst naar school.", ["De", "Het"], 1, "The girl cycles to school (-je words are het)."),
      choice("", " kamer is klein.", ["De", "Het"], 0, "The room is small."),
      choice("", " fietsen staan bij het station.", ["De", "Het"], 0, "The bikes are by the station (plurals take de)."),
      choice("", " eten is goed.", ["De", "Het"], 1, "The food is good (verbs used as nouns are het)."),
    ],
  },

  // Split from "de, het and een" (Matteo, 20 Nov 2026): een gets its own lesson.
  "indefinite-article": {
    blocks: [
      text("een means 'a' or 'an'. Unlike de and het, it's the same for every noun: een kamer (de kamer), een huis (het huis). Say it 'un'."),
      table(
        "the or a?",
        ["", "de-word", "het-word"],
        ["the", "de kamer", "het huis"],
        ["a, an", "een kamer", "een huis"],
        ["more than one", "kamers", "huizen"],
      ),
      text("No een in three places: in the plural (twee kinderen), with jobs after zijn (Ik ben student. Hij is kok.), and with things you don't count (Ik drink water. Ik koop brood.)."),
      text("Written één, with accents, it means 'one': Ik heb één zus. The 'no' version of een is geen: Ik heb geen auto (more in niet and geen)."),
    ],
    examples: [
      example("We hebben twee kinderen, een zoon en een dochter.", "We have two children, a son and a daughter.", "een zoon", "een dochter"),
      example("Hij is kok in een restaurant", "He's a cook in a restaurant", "kok", "een restaurant"),
      example("ik ben lerares Engels op een middelbare school", "I'm an English teacher at a secondary school", "lerares", "een"),
      example("Hij spreekt Turks en een beetje Engels, maar geen Nederlands.", "He speaks Turkish and a bit of English, but no Dutch.", "geen"),
    ],
    exercises: [
      choice("Noor heeft ", " fiets.", ["een", "het"], 0, "Noor has a bike."),
      choice("Yusuf heeft ", " winkel en een huis.", ["een", "de"], 0, "Yusuf has a shop and a house (een for de- and het-words)."),
      choice("Ik heb ", " zus, niet twee.", ["één", "een"], 0, "I have one sister, not two."),
      sort("With een or without?", ["een", "no een"], "Ik ben ___ student.=1 | Ik heb ___ broer.=0 | Ik drink ___ water.=1 | Er is ___ markt.=0 | Wij hebben ___ kinderen.=1 | Ze woont in ___ huis.=0", "No een with jobs, things you don't count, or plurals."),
      transform("Make it more than one (no een).", "Ik heb een boek.", ["Ik heb boeken."], "I have books."),
      transform("Say what her job is (a job after zijn: no een).", "Elif / verpleegkundige", ["Elif is verpleegkundige."], "Elif is a nurse."),
      match("Connect the Dutch and the English.", "een huis=a house | één huis=one house | geen huis=no house | huizen=houses", "een, één, geen and the plural."),
    ],
  },
};
