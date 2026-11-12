import type { GrammarLesson } from "@/core/content";
import { build, choice, example, fill, slots, table, text, transform } from "./helpers";

/** Units 5–6: Wonen en de stad, Werk en studie. */
export const lessons3: Record<string, GrammarLesson> = {
  prepositions: {
    blocks: [
      text("Small words for place and time. They rarely translate one-to-one, so learn them in chunks: op de fiets, in de stad, bij de bakker."),
      table(
        "Where",
        ["Dutch", "Meaning", "Chunk"],
        ["in", "in", "in de kamer"],
        ["op", "on", "op de tafel, op straat"],
        ["onder", "under", "onder het bed"],
        ["naast", "next to", "naast de keuken"],
        ["tussen", "between", "tussen de bank en de winkel"],
        ["voor / achter", "in front of / behind", "voor het raam, achter de tuin"],
        ["bij", "at, near", "bij het station, bij de huisarts"],
        ["naar", "to", "naar huis, naar de markt"],
      ),
      text("Time: om acht uur (at), op maandag (on), in januari (in), na de les (after), voor het eten (before)."),
    ],
    examples: [
      example("Naast de woonkamer is de keuken.", "Next to the living room is the kitchen.", "Naast"),
      example("Op het bureau staan een lamp en zijn computer. Onder het bed liggen zijn schoenen.", "On the desk there's a lamp and his computer. Under the bed are his shoes.", "Op", "Onder"),
      example("De kamer van Luca ligt tussen de kamer van Noor en de badkamer.", "Luca's room is between Noor's room and the bathroom.", "tussen"),
      example("dichtbij het station en de universiteit", "close to the station and the university", "dichtbij"),
    ],
    exercises: [
      choice("De lamp staat ", " het bureau.", ["op", "in"], 0, "The lamp is on the desk."),
      choice("Zijn schoenen liggen ", " het bed.", ["onder", "tussen"], 0, "His shoes are under the bed."),
      choice("Luca fietst ", " de universiteit.", ["naar", "bij"], 0, "Luca cycles to the university."),
      choice("Ik heb een afspraak ", " de huisarts.", ["naar", "bij"], 1, "I have an appointment at the GP's."),
      fill("De les begint ", " maandag.", "op", "Class starts on Monday."),
      fill("Het stadhuis is ", " een bank en een kledingwinkel.", "tussen", "The town hall is between a bank and a clothes shop."),
    ],
  },

  "adjective-e": {
    blocks: [
      text("Before a noun, an adjective gets -e. The one exception: een (or no article) + a singular het-word."),
      table(
        "-e or not?",
        ["", "de-word (de stad)", "het-word (het huis)"],
        ["with de / het", "de grote stad", "het grote huis"],
        ["with een", "een grote stad", "een groot huis"],
        ["plural", "grote steden", "grote huizen"],
        ["after the verb", "De stad is groot.", "Het huis is groot."],
      ),
      text("Spelling follows sound again: groot → grote (one o in an open syllable), dik → dikke (double the k to keep the short i), rood → rode."),
    ],
    examples: [
      example("Er staat een grote bank voor het raam", "There's a big sofa in front of the window", "grote"),
      example("en er is een oude tafel met vier stoelen", "and there's an old table with four chairs", "oude"),
      example("Ik woon in een oud huis in het centrum", "I live in an old house in the centre", "oud"),
      example("Leiden is een mooie stad", "Leiden is a beautiful city", "mooie"),
    ],
    exercises: [
      fill("Leiden is een ", " stad.", "mooie", "Leiden is a beautiful city.", "mooi"),
      fill("Ze wonen in een ", " huis.", "oud", "They live in an old house (een + het-word: no -e).", "oud"),
      fill("Het ", " huis staat aan de gracht.", "oude", "The old house is on the canal.", "oud"),
      fill("Luca draagt een ", " trui.", "dikke", "Luca wears a thick jumper.", "dik"),
      choice("De keuken is ", ".", ["klein", "kleine"], 0, "The kitchen is small (after the verb: no -e)."),
      fill("Ik wil graag een glas ", " wijn.", "rode", "I'd like a glass of red wine.", "rood"),
    ],
  },

  imperative: {
    blocks: [
      text("To tell someone what to do, use just the stem, first in the sentence: Kom! Snijd de uien. Ga rechtdoor."),
      slots(
        undefined,
        ["Ga:verb* | hier | rechtdoor", "Go straight on here."],
        ["Snijd:verb* | eerst | de uien", "Cut the onions first."],
      ),
      text("It sounds direct but normal. Soften it with even, maar or alsjeblieft: Wacht even. Kom maar binnen. Snijd de uien, alsjeblieft. The polite form adds u: Gaat u hier rechtdoor."),
    ],
    examples: [
      example("Snijd eerst de uien, alsjeblieft.", "Cut the onions first, please.", "Snijd"),
      example("Ga hier rechtdoor tot de brug.", "Go straight on here until the bridge.", "Ga"),
      example("Blijf vandaag in bed.", "Stay in bed today.", "Blijf"),
      example("Drink veel water en slaap.", "Drink lots of water and sleep.", "Drink", "slaap"),
    ],
    exercises: [
      fill("", " binnen!", "Kom", "Come in!", "komen"),
      fill("", " de tafel, alsjeblieft.", "Dek", "Set the table, please.", "dekken"),
      fill("", " even!", "Wacht", "Hang on a moment!", "wachten"),
      fill("", " over de brug en dan links.", "Ga", "Go over the bridge and then left.", "gaan"),
      transform("Make it an instruction to a friend:", "Je drinkt veel water.", ["Drink veel water."], "Drink lots of water."),
      build("Doe | er | een beetje zout | in", "Put a bit of salt in it."),
    ],
  },

  questions: {
    blocks: [
      text("Yes/no questions start with the verb. Open questions start with a question word, then the verb: the verb stays in slot 2."),
      slots(
        "Question word, then verb",
        ["Woon:verb* | je | in Leiden?", "Do you live in Leiden?"],
        ["Waar:question | woon:verb* | je?", "Where do you live?"],
        ["Hoe laat:question | begint:verb* | de les?", "What time does class start?"],
      ),
      table(
        "Question words",
        ["Dutch", "English"],
        ["wie / wat", "who / what"],
        ["waar / wanneer", "where / when"],
        ["hoe / hoe laat", "how / what time"],
        ["waarom", "why"],
        ["hoeveel", "how much, how many"],
        ["welk / welke", "which (welk for het-words)"],
      ),
    ],
    examples: [
      example("Hoe gaat het met je Nederlands?", "How's your Dutch going?", "Hoe", "gaat"),
      example("Wanneer kom je naar huis?", "When are you coming home?", "Wanneer", "kom"),
      example("Hoeveel uur per week is het?", "How many hours a week is it?", "Hoeveel"),
      example("Heb je ervaring in een café?", "Do you have experience in a café?", "Heb"),
    ],
    exercises: [
      choice("", " woon je? In Leiden.", ["Wie", "Waar", "Wat"], 1, "Where do you live? In Leiden."),
      choice("", " kost de kaas? Zes euro.", ["Hoeveel", "Hoe laat", "Wanneer"], 0, "How much is the cheese? Six euros."),
      choice("", " is dat? Mijn buurvrouw.", ["Wat", "Wie", "Welk"], 1, "Who's that? My neighbour."),
      transform("Make it a yes/no question:", "Noor studeert geneeskunde.", ["Studeert Noor geneeskunde?"], "Does Noor study medicine?"),
      build("Hoe laat | begint | de les?", "What time does class start?"),
      build("Waarom | zijn | de tomaten | duur?", "Why are the tomatoes expensive?"),
    ],
  },

  "jij-inversion": {
    blocks: [
      text("jij werkt, but werk jij? When jij or je comes AFTER the verb, the -t disappears. Only for jij/je: with hij it stays (werkt hij?)."),
      slots(
        undefined,
        ["Jij | woont:verb* | in Leiden", "You live in Leiden."],
        ["Woon:verb* | jij | in Leiden?", "Do you live in Leiden?"],
        ["Waar | woon:verb* | je?", "Where do you live?"],
      ),
      text("It happens in every sentence where jij follows the verb, not just questions: Morgen werk je niet. Same for hebben and kunnen: heb je, kun je."),
    ],
    examples: [
      example("Ben jij altijd zo vroeg wakker?", "Are you always up this early?", "Ben jij"),
      example("Wil je ook koffie?", "Do you want coffee too?", "Wil je"),
      example("Wanneer kun jij?", "When can you do it?", "kun jij"),
      example("Wat doe je vandaag?", "What are you doing today?", "doe je"),
    ],
    exercises: [
      choice("", " jij in Leiden?", ["Woont", "Woon"], 1, "Do you live in Leiden?"),
      choice("Waar ", " je?", ["werkt", "werk"], 1, "Where do you work?"),
      choice("", " hij in Leiden?", ["Woont", "Woon"], 0, "Does he live in Leiden? (with hij the -t stays)"),
      transform("Make it a question:", "Jij spreekt Nederlands.", ["Spreek jij Nederlands?", "Spreek je Nederlands?"], "Do you speak Dutch?"),
      transform("Make it a question:", "Jij hebt een fiets.", ["Heb jij een fiets?", "Heb je een fiets?"], "Do you have a bike?"),
      fill("Morgen ", " je niet.", "werk", "Tomorrow you're not working.", "werken"),
    ],
  },

  "modal-verbs": {
    blocks: [
      text("kunnen (can), willen (want), moeten (must, have to), mogen (may, be allowed) take a second verb in the infinitive, at the very END of the sentence."),
      slots(
        "Modal in slot 2, infinitive at the end",
        ["Ik | wil:modal* | koffie | drinken:end*", "I want to drink coffee."],
        ["Luca | moet:modal* | naar het stadhuis | gaan:end*", "Luca has to go to the town hall."],
        ["Kun:modal* | je | op zaterdag | werken?:end*", "Can you work on Saturdays?"],
      ),
      table(
        "Forms",
        ["", "kunnen", "willen", "moeten", "mogen"],
        ["ik", "kan", "wil", "moet", "mag"],
        ["jij", "kunt / kan", "wilt / wil", "moet", "mag"],
        ["hij", "kan", "wil", "moet", "mag"],
        ["wij", "kunnen", "willen", "moeten", "mogen"],
      ),
      text("Ik wil graag… is the polite 'I'd like'. Mag ik…? is how you ask for things in shops."),
    ],
    examples: [
      example("Ik kan op dinsdag of donderdag.", "I can do Tuesday or Thursday.", "kan"),
      example("Op maandag en woensdag moet ik werken.", "On Mondays and Wednesdays I have to work.", "moet", "werken"),
      example("Mag ik een stuk van deze kaas, alstublieft?", "Could I have a piece of this cheese, please?", "Mag"),
      example("Kun je op zaterdag en zondag werken?", "Can you work on Saturdays and Sundays?", "Kun", "werken"),
    ],
    exercises: [
      build("Ik | wil | graag | een biertje | bestellen", "I'd like to order a beer."),
      build("Luca | moet | morgen | vroeg | opstaan", "Luca has to get up early tomorrow."),
      fill("", " ik een stukje proeven?", "Mag", "May I taste a little piece?", "mogen"),
      fill("Noor ", " heel goed koken.", "kan", "Noor can cook really well.", "kunnen"),
      fill("Wij ", " vandaag boodschappen doen.", "moeten", "We have to do the shopping today.", "moeten"),
      transform("Add 'willen' (I want to…):", "Ik ga naar het strand.", ["Ik wil naar het strand gaan.", "Ik wil naar het strand."], "I want to go to the beach."),
    ],
  },
};
