import type { GrammarLesson } from "@/core/content";
import { build, choice, example, fill, match, slots, sort, spot, table, text, transform } from "./helpers";

/** A2 units 8–10: going out, food, nature and the future. */
export const lessonsA2c: Record<string, GrammarLesson> = {
  superlatives: {
    blocks: [
      text("Three steps: groot, groter, grootst. Before a noun the superlative gets -e like any adjective: de grootste markt. On its own you say het + -st(e): Op zaterdag is het het drukst."),
      table("The three steps", ["Adjective", "Comparative", "Superlative"], ["groot", "groter", "het grootst / de grootste"], ["mooi", "mooier", "het mooist / de mooiste"], ["goed", "beter", "het best / de beste"], ["veel", "meer", "het meest / de meeste"], ["graag", "liever", "het liefst"]),
      text("Long adjectives can also use meest: het meest romantische. Words ending in -s just add -t: vers, verst."),
    ],
    examples: [
      example("Het bekendste museum is het Rijksmuseum in Amsterdam.", "The best-known museum is the Rijksmuseum in Amsterdam.", "bekendste"),
      example("De grootste overdekte markt van Nederland", "The biggest covered market in the Netherlands", "grootste"),
      example("Een tip: ga niet op zaterdagmiddag, want dan is het het drukst.", "A tip: don't go on a Saturday afternoon, because that's when it's busiest.", "het drukst"),
      example("En het meest romantische?", "And the most romantic?", "meest romantische"),
    ],
    exercises: [
      fill("Nederlanders zijn de ", " mensen ter wereld.", "langste", "The Dutch are the tallest people in the world.", "lang"),
      fill("Het ", " uitje is de markt.", "goedkoopste", "The cheapest outing is the market.", "goedkoop"),
      fill("Dit is de ", " pizza van de stad.", "beste", "This is the best pizza in town.", "goed"),
      choice("Zondag wordt de ", " dag van het weekend.", ["mooiste", "meest mooi"], 0, "Sunday will be the nicest day of the weekend."),
      match("Match the steps.", "goed=beter | veel=meer | graag=liever | groot=groter", "Comparatives."),
      transform("Say it with one word.", "Dat is het meest leuke café.", "Dat is het leukste café.", "That's the nicest café."),
    ],
  },

  "possessive-van": {
    blocks: [
      text("Dutch shows who something belongs to with van: de fiets van Bas, de vrouw van Theo. The English 's only works with names, in writing: Theo's vrouw."),
      text("To avoid repeating the noun, say die van or dat van: Is die sjaal van jou? Nee, die van mij is groen."),
      table("Whose is it?", ["Question", "Answer"], ["Van wie is deze jas?", "Die is van Mohammed."], ["Is dit boek van jou?", "Ja, dat is van mij."], ["Is die sjaal van jou?", "Nee, die van mij is groen."]),
      text("van mij, van jou, van hem, van haar, van ons, van jullie, van hen: object pronouns after van."),
    ],
    examples: [
      example("Van wie is deze blauwe jas?", "Whose is this blue coat?", "Van wie"),
      example("Nee, die van mij is groen.", "No, mine is green.", "die van mij"),
      example("Dat is de telefoon van Bas.", "That's Bas's phone.", "van Bas"),
      example("Toen kwam de vrouw van Theo, Jo van Gogh-Bonger.", "Then came Theo's wife, Jo van Gogh-Bonger.", "van Theo"),
    ],
    exercises: [
      fill("Is deze tas van ", "? (you)", "jou", "Is this bag yours?"),
      fill("Nee, die ", " mij is zwart.", "van", "No, mine is black."),
      choice("Dit is de fiets ", " mijn zus.", ["van", "of"], 0, "This is my sister's bike."),
      transform("Say it with van.", "Theo's brieven", "de brieven van Theo", "Theo's letters"),
      build("Van wie | is | deze | sjaal", "Whose scarf is this?"),
      spot("Dat is de auto van ik.", "ik", "mij", "That's my car."),
    ],
  },

  "er-quantity": {
    blocks: [
      text("When you give a number or amount without repeating the noun, Dutch needs er: Hoeveel kinderen heb je? Ik heb er twee."),
      slots(undefined, ["Ik:subject | heb:verb* | er:er* | twee", "I have two (of them)."]),
      text("Also with veel, weinig, een paar, geen and genoeg: Er zijn er veel. Ik heb er geen. In shops: Doe er maar zes."),
    ],
    examples: [
      example("Er zitten er zes in een zak.", "There are six in a bag.", "er zes"),
      example("Lekker! Doe er dan maar acht.", "Delicious! Make it eight, then.", "er"),
      example("Twee glazen. Nee, wacht: ik heb er drie gehad.", "Two glasses. No, wait: I had three.", "er drie"),
      example("Er zijn er meer dan vierhonderd", "There are more than four hundred", "er meer dan vierhonderd"),
    ],
    exercises: [
      choice("Hoeveel broers heb je? Ik heb ", " twee.", ["er", "het"], 0, "How many brothers do you have? I have two."),
      fill("Appels? Ik heb ", " nog drie.", "er", "Apples? I still have three."),
      fill("Ik had zes pizza's besteld, maar er kwamen ", " maar vijf.", "er", "I had ordered six pizzas, but only five came."),
      transform("Answer with er.", "Hoeveel kaartjes wilt u? (twee)", "Ik wil er twee.", "How many tickets would you like? I'd like two."),
      build("Ik | heb | er | geen", "I don't have any."),
      transform("Add the missing word.", "Hoeveel katten heb je? Ik heb drie.", "Hoeveel katten heb je? Ik heb er drie.", "How many cats do you have? I have three."),
    ],
  },

  "zou-polite": {
    blocks: [
      text("Zou (from zullen) makes requests and wishes softer, like English 'would'. It's the polite way to order, book and ask for favours."),
      slots(
        undefined,
        ["Ik:subject | zou:verb* | graag | een tafel | willen reserveren:end*", "I'd like to book a table."],
        ["Zou:verb* | je | me | willen terugbellen:end*?", "Would you call me back?"],
      ),
      text("Zou je … willen / kunnen? is softer than Wil je…? or Kun je…? Use it with strangers, at work and when you complain."),
    ],
    examples: [
      example("Ik zou graag een tafel willen reserveren voor zaterdagavond.", "I'd like to book a table for Saturday evening.", "zou", "willen reserveren"),
      example("Zou ik morgen mijn koffer hier kunnen laten?", "Could I leave my suitcase here tomorrow?", "Zou", "kunnen laten"),
      example("Zou u er een nieuwe voor me willen maken?", "Would you mind making a new one for me?", "Zou", "willen maken"),
      example("Zou je me morgen om negen uur even willen laten weten hoe het gaat?", "Would you let me know tomorrow at nine how it's going?", "Zou", "willen laten weten"),
    ],
    exercises: [
      transform("Make it more polite with zou.", "Kunt u het raam dichtdoen?", ["Zou u het raam dicht kunnen doen?", "Zou u het raam kunnen dichtdoen?"], "Could you close the window?"),
      transform("Make it more polite with zou.", "Ik wil de vis.", "Ik zou graag de vis willen.", "I'd like the fish."),
      choice("", " je me even willen helpen?", ["Zou", "Zal"], 0, "Would you help me for a moment?"),
      fill("Ik ", " graag een afspraak willen maken.", "zou", "I'd like to make an appointment."),
      build("Zou | u | de rekening | willen brengen", "Would you bring the bill?"),
      transform("Fix the word order.", "Zou je de muziek zachter zetten willen?", "Zou je de muziek zachter willen zetten?", "Would you turn the music down?"),
    ],
  },

  "zullen-future": {
    blocks: [
      text("Most of the time Dutch talks about the future with the present (Morgen werk ik) or gaan (Ik ga solliciteren). Zullen is for promises, predictions and suggestions."),
      table(
        "What zullen does",
        ["Use", "Example"],
        ["a promise", "Ik zal een datum in de groepsapp zetten."],
        ["a prediction", "De zee zal nog verder stijgen."],
        ["a suggestion", "Zullen we zaterdag naar het strand gaan?"],
      ),
      table("zullen", ["Person", "Form"], ["ik", "zal"], ["jij / u", "zult / zal"], ["hij / zij", "zal"], ["wij / jullie / zij", "zullen"]),
    ],
    examples: [
      example("Ik zal een datum in de groepsapp zetten.", "I'll put a date in the group chat.", "zal", "zetten"),
      example("Wat zullen we zaterdag doen?", "What shall we do on Saturday?", "zullen", "doen"),
      example("en hij zal de komende eeuw nog verder stijgen", "and it will rise even further over the coming century", "zal", "stijgen"),
      example("Dat zal je zeker lukken.", "You'll definitely manage that.", "zal", "lukken"),
    ],
    exercises: [
      fill("Ik ", " je morgen bellen, dat beloof ik.", "zal", "I'll call you tomorrow, I promise."),
      fill("", " we een kop thee drinken?", "Zullen", "Shall we have a cup of tea?"),
      choice("In de toekomst ", " het vaker hard regenen.", ["zal", "zullen"], 0, "In the future it will rain hard more often."),
      choice("Volgend jaar ", " ik verhuizen. (a plan)", ["ga", "zal"], 0, "Next year I'm going to move (a plan: gaan)."),
      build("Zullen | we | naar het strand | gaan", "Shall we go to the beach?"),
      spot("Ik zullen je helpen.", "zullen", "zal", "I'll help you."),
    ],
  },

  "word-order-tmp": {
    blocks: [
      text("When you say when, how and where in one sentence, the usual order is: time, then manner, then place. Think T-M-P, like a train timetable."),
      slots(undefined, ["Ik:subject | ga:verb* | in juli:time* | met de trein:manner* | naar Texel:place*", "I'm going to Texel by train in July."]),
      text("You can put the time first for emphasis. Then the verb comes second and the subject follows: In juli ga ik met de trein naar Texel."),
      text("English usually does the opposite (to Texel by train in July), so this is a classic mistake."),
    ],
    examples: [
      example("We vertrokken om zes uur 's ochtends met een groep van twintig mensen vanuit Pieterburen.", "We left Pieterburen at six in the morning with a group of twenty people.", "om zes uur 's ochtends", "met een groep van twintig mensen", "vanuit Pieterburen"),
      example("Volgend jaar gaan we samen naar Ameland lopen.", "Next year we're going to walk to Ameland together.", "Volgend jaar", "samen", "naar Ameland"),
      example("Ik wil volgend jaar weer als ingenieur werken, het liefst in Delft.", "I want to work as an engineer again next year, ideally in Delft.", "volgend jaar", "als ingenieur", "in Delft"),
    ],
    exercises: [
      build("Ik | ga | morgen | met de trein | naar Utrecht", "I'm going to Utrecht by train tomorrow."),
      build("We | fietsen | zaterdag | samen | naar het strand", "We're cycling to the beach together on Saturday."),
      choice("Ik ga ", ".", ["vanavond met de bus naar huis", "naar huis met de bus vanavond"], 0, "I'm going home by bus tonight."),
      transform("Start with the time.", "Ik ga in juli met de trein naar Texel.", "In juli ga ik met de trein naar Texel.", "In July I'm going to Texel by train."),
      transform("Put time before place.", "Ik fiets naar mijn werk elke dag.", "Ik fiets elke dag naar mijn werk.", "I cycle to work every day."),
      sort("Time, manner or place?", ["time", "manner", "place"], "morgen=0 | met de fiets=1 | naar Leiden=2 | om acht uur=0 | samen=1 | in de stad=2", "T-M-P"),
    ],
  },
};
