import type { GrammarLesson } from "@/core/content";
import { build, choice, example, fill, slots, table, text, transform } from "./helpers";

/** Units 3–4: Eten en boodschappen, Dag en tijd. */
export const lessons2: Record<string, GrammarLesson> = {
  "er-is": {
    blocks: [
      text("To say something exists or is somewhere, use er is (one thing) or er zijn (more than one): 'there is / there are'."),
      slots(
        undefined,
        ["Er:there | is:verb* | een markt:thing | in Leiden", "There's a market in Leiden."],
        ["Er:there | zijn:verb* | veel fietsen:things", "There are lots of bikes."],
      ),
      text("Dutch often picks a more precise verb instead of 'is': staan for upright things, liggen for flat things, zitten for things inside. Er staat een bank. Er liggen kazen op de tafel."),
    ],
    examples: [
      example("Er is geen melk en er zijn geen eieren meer.", "There's no milk and there are no eggs left.", "Er is", "er zijn"),
      example("Er zijn kramen met groente, fruit, vis, kaas en bloemen.", "There are stalls with vegetables, fruit, fish, cheese and flowers.", "Er zijn"),
      example("Er liggen grote, gele kazen op de tafel.", "There are big yellow cheeses on the table.", "Er liggen"),
    ],
    exercises: [
      choice("Er ", " een supermarkt in de straat.", ["is", "zijn"], 0, "There's a supermarket in the street."),
      choice("Er ", " veel bruggen in Leiden.", ["is", "zijn"], 1, "There are many bridges in Leiden."),
      choice("In de woonkamer ", " er een grote bank.", ["staat", "ligt"], 0, "In the living room there's a big sofa."),
      choice("Op de tafel ", " een boek.", ["staat", "ligt"], 1, "There's a book (lying) on the table."),
      build("Er | is | geen kassa | op de markt", "There's no checkout at the market."),
      transform("Make it plural (two markets):", "Er is een markt.", ["Er zijn twee markten."], "There are two markets."),
    ],
  },

  demonstratives: {
    blocks: [
      text("This and that follow de/het: deze and die go with de-words and plurals; dit and dat with het-words."),
      table(
        "this / that",
        ["", "this (here)", "that (there)"],
        ["de-words, plurals", "deze tomaten", "die tomaten"],
        ["het-words", "dit huis", "dat huis"],
      ),
      text("On their own, dit and dat also mean 'this/that is': Dit is mijn huis. Dat ben ik. And die often means 'they / those ones': Die zijn duur."),
    ],
    examples: [
      example("Deze pasta komt uit Italië. Die pasta komt uit Nederland.", "This pasta comes from Italy. That pasta comes from the Netherlands.", "Deze", "Die"),
      example("Die tomaten in het bakje zijn niet lekker.", "Those tomatoes in the tub aren't nice.", "Die"),
      example("Dat pak is groter", "That pack is bigger", "Dat"),
      example("Mag ik een stuk van deze kaas, alstublieft?", "Could I have a piece of this cheese, please?", "deze"),
      example("Ja, dat ben ik.", "Yes, that's me.", "dat"),
    ],
    exercises: [
      choice("Hoeveel kost ", " kaas?", ["deze", "dit"], 0, "How much is this cheese?"),
      choice("", " huis is heel oud.", ["Deze", "Dit"], 1, "This house is very old."),
      choice("Zie je ", " brug daar?", ["die", "dat"], 0, "Do you see that bridge over there?"),
      choice("", " meisje woont naast ons.", ["Die", "Dat"], 1, "That girl lives next to us (meisje is a het-word)."),
      choice("Ik neem ", " tomaten.", ["deze", "dit"], 0, "I'll take these tomatoes."),
      fill("", " is mijn kamer.", "Dit", "This is my room."),
    ],
  },

  diminutives: {
    blocks: [
      text("Add -je to make something small, cute, casual or just friendly. Dutch uses it constantly: een biertje, een kopje koffie, een feestje."),
      table(
        "Which ending",
        ["Ending", "When", "Example"],
        ["-je", "most words", "stuk → stukje, lijst → lijstje"],
        ["-tje", "after a vowel or -l, -n, -r after a long vowel", "ei → eitje, kamer → kamertje"],
        ["-pje", "after -m", "boom → boompje"],
        ["-etje", "after a short vowel + l, m, n, r, ng", "bal → balletje"],
      ),
      text("Every diminutive is a het-word, whatever the original was: de kop → het kopje."),
    ],
    examples: [
      example("De kaasboer geeft hun een stukje oude kaas.", "The cheese seller gives them a little piece of old cheese.", "stukje"),
      example("Luca pakt een pen en maakt een lijstje.", "Luca takes a pen and makes a list.", "lijstje"),
      example("Ze drinken een biertje en praten tot laat.", "They have a beer and talk until late.", "biertje"),
    ],
    exercises: [
      fill("Mag ik een ", " taart?", "stukje", "Can I have a (little) piece of cake?", "stuk"),
      fill("Wil je een ", " koffie?", "kopje", "Would you like a cup of coffee?", "kop"),
      fill("Noor geeft een ", " op vrijdag.", "feestje", "Noor is having a little party on Friday.", "feest"),
      fill("Luca stuurt Ingrid een ", ".", "berichtje", "Luca sends Ingrid a message.", "bericht"),
      choice("", " kopje is van mij.", ["De", "Het"], 1, "The cup is mine (diminutives are het)."),
      fill("In de tuin staat een klein ", ".", "boompje", "There's a little tree in the garden.", "boom"),
    ],
  },

  "time-numbers": {
    blocks: [
      text("Numbers 21–99 say the ones first: vijfentwintig = five-and-twenty. Write them as one word."),
      text("Telling the time: 'half' counts towards the NEXT hour. half negen = 8:30, not 9:30. Around the half hour Dutch counts from it: vijf voor half negen = 8:25."),
      table(
        "Times around 8 o'clock",
        ["Time", "Dutch"],
        ["8:00", "acht uur"],
        ["8:15", "kwart over acht"],
        ["8:25", "vijf voor half negen"],
        ["8:30", "half negen"],
        ["8:35", "vijf over half negen"],
        ["8:45", "kwart voor negen"],
      ),
      text("om = at: om half negen. Days and months have no capital letter: op maandag, in januari."),
    ],
    examples: [
      example("Om half acht staat hij eindelijk onder de douche.", "At half past seven he's finally under the shower.", "half acht"),
      example("Om kwart over zeven belt ze weer", "At quarter past seven she calls again", "kwart over zeven"),
      example("Mijn vader is negenenzeventig.", "My father is seventy-nine.", "negenenzeventig"),
    ],
    exercises: [
      choice("8:30 is ", ".", ["half acht", "half negen"], 1, "Half past eight."),
      choice("4:15 is ", ".", ["kwart voor vier", "kwart over vier"], 1, "Quarter past four."),
      choice("6:45 is ", ".", ["kwart voor zeven", "kwart over zes"], 0, "Quarter to seven."),
      fill("25 = ", "", "vijfentwintig", "twenty-five", "five-and-twenty, one word"),
      fill("De les begint ", " negen uur.", "om", "Class starts at nine o'clock."),
      choice("10:25 is ", ".", ["vijf voor half elf", "vijf over half tien"], 0, "Twenty-five past ten."),
    ],
  },

  "verb-second": {
    blocks: [
      text("In a main sentence the conjugated verb is ALWAYS the second item. Whatever comes first (subject, time, place), the verb stays in slot 2 and the subject moves behind it if needed."),
      slots(
        "Verb in slot 2",
        ["Luca:1 | gaat:verb* | morgen | naar Utrecht", "Luca is going to Utrecht tomorrow."],
        ["Morgen:1 | gaat:verb* | Luca | naar Utrecht", "Tomorrow Luca is going to Utrecht."],
        ["Naar Utrecht:1 | gaat:verb* | Luca | morgen", "To Utrecht Luca goes tomorrow."],
      ),
      text("Starting with time is very natural in Dutch: Om acht uur fietst hij naar school. Om vier uur komt Ruth thuis. Just remember: verb, then subject."),
    ],
    examples: [
      example("Om acht uur fietst hij naar school.", "At eight he cycles to school.", "fietst", "hij"),
      example("Donderdag heb ik 's ochtends les", "On Thursday I have class in the morning", "heb", "ik"),
      example("Op maandag en woensdag heb ik les.", "On Mondays and Wednesdays I have class.", "heb", "ik"),
      example("Dan gaat de bel.", "Then the doorbell rings.", "gaat"),
    ],
    exercises: [
      build("Morgen | ga | ik | naar Utrecht", "Tomorrow I'm going to Utrecht."),
      build("Om vijf uur | komt | Luca | thuis", "At five Luca comes home."),
      build("Op zaterdag | werkt | Bram | in het café", "On Saturdays Bram works in the café."),
      transform("Start with 'Vandaag':", "Ik heb les.", ["Vandaag heb ik les."], "Today I have class."),
      transform("Start with 'Om acht uur':", "Noor drinkt thee.", ["Om acht uur drinkt Noor thee."], "At eight Noor drinks tea."),
      choice("'s Avonds ", " een film.", ["kijkt Luca", "Luca kijkt"], 0, "In the evening Luca watches a film."),
    ],
  },

  "separable-verbs": {
    blocks: [
      text("Many verbs have a little prefix that splits off in a main sentence and jumps to the very end: opstaan → Ik sta op."),
      slots(
        "The prefix goes to the end",
        ["Luca | staat:verb* | om zeven uur | op:prefix*", "Luca gets up at seven."],
        ["Bram | ruimt:verb* | de tafel | op:prefix*", "Bram clears the table."],
        ["Kom:verb* | morgen | even | langs:prefix*", "Drop by tomorrow."],
      ),
      text("Common ones: opstaan (get up), meenemen (bring along), afwassen (wash up), afspreken (arrange to meet), langskomen (drop by), terugbellen (call back). In the dictionary and after a modal verb they stay together: Ik moet opstaan."),
    ],
    examples: [
      example("Om vijf uur staat ze op", "At five she gets up", "staat", "op"),
      example("Ik neem iets lekkers mee.", "I'll bring something nice.", "neem", "mee"),
      example("Bram neemt een taart mee uit het café.", "Bram brings a cake from the café.", "neemt", "mee"),
    ],
    exercises: [
      build("Ik | sta | om zeven uur | op", "I get up at seven."),
      build("Noor | wast | vandaag | af", "Noor is doing the dishes today."),
      fill("Bram neemt taart ", ".", "mee", "Bram brings cake along.", "meenemen"),
      transform("Use 'opstaan' in this sentence:", "Luca ___ om zeven uur ___.", ["Luca staat om zeven uur op."], "Luca gets up at seven."),
      transform("Use 'terugbellen':", "Ik ___ u morgen ___.", ["Ik bel u morgen terug."], "I'll call you back tomorrow."),
      choice("Ik moet morgen vroeg ", ".", ["op sta", "opstaan"], 1, "I have to get up early tomorrow (after a modal: together)."),
    ],
  },
};
