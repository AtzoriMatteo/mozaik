import type { GrammarLesson } from "@/core/content";
import { build, choice, example, fill, slots, table, text, transform } from "./helpers";

/** Units 7–8: Gezondheid, Vrije tijd en weer. */
export const lessons4: Record<string, GrammarLesson> = {
  negation: {
    blocks: [
      text("Use geen where English says 'no' or 'not a/any': it replaces een, or stands before a noun without an article. Use niet for everything else."),
      table(
        "geen or niet?",
        ["Positive", "Negative", "Why"],
        ["Ik heb een auto.", "Ik heb geen auto.", "een + noun → geen"],
        ["Ik heb tijd.", "Ik heb geen tijd.", "noun without article → geen"],
        ["Ik heb de auto.", "Ik heb de auto niet.", "de/het + noun → niet"],
        ["Hij is ziek.", "Hij is niet ziek.", "adjective → niet"],
        ["Ik werk.", "Ik werk niet.", "verb → niet"],
      ),
      text("niet usually goes at the end, but before adjectives, places and the final verb: Ik ga niet naar de les. Ik kan niet komen."),
    ],
    examples: [
      example("Ik ben ziek. Ik kan niet naar de les.", "I'm ill. I can't go to class.", "niet"),
      example("Heb je geen les?", "Don't you have class?", "geen"),
      example("Luca heeft geen auto nodig", "Luca doesn't need a car", "geen"),
      example("Hij wil het niet vergeten.", "He doesn't want to forget it.", "niet"),
    ],
    exercises: [
      choice("Ik heb ", " fiets.", ["niet een", "geen"], 1, "I don't have a bike."),
      choice("Luca is ", " ziek.", ["niet", "geen"], 0, "Luca isn't ill."),
      choice("Ik heb ", " tijd.", ["niet", "geen"], 1, "I don't have time."),
      choice("Noor werkt vandaag ", ".", ["niet", "geen"], 0, "Noor isn't working today."),
      transform("Make it negative:", "Ik heb een broer.", ["Ik heb geen broer."], "I don't have a brother."),
      transform("Make it negative:", "Ik kom morgen.", ["Ik kom morgen niet."], "I'm not coming tomorrow."),
    ],
  },

  "object-pronouns": {
    blocks: [
      text("When someone is on the receiving end (I call HIM, she helps ME), use the object form. As with subject pronouns, speech prefers the short form."),
      table(
        "Object forms",
        ["Subject", "Object (stressed)", "Object (short)"],
        ["ik", "mij", "me"],
        ["jij", "jou", "je"],
        ["u", "u", "–"],
        ["hij", "hem", "–"],
        ["zij (she)", "haar", "–"],
        ["wij", "ons", "–"],
        ["jullie", "jullie", "–"],
        ["zij (they)", "hen / hun", "ze"],
      ),
    ],
    examples: [
      example("Noor helpt hem.", "Noor helps him.", "hem"),
      example("Hoor je mij?", "Can you hear me?", "mij"),
      example("Noor helpt me met mijn Nederlands.", "Noor helps me with my Dutch.", "me"),
      example("Ze geeft hem ook een paracetamol.", "She also gives him a paracetamol.", "hem"),
    ],
    exercises: [
      choice("Bel je ", " morgen? (Luca)", ["hij", "hem"], 1, "Will you call him tomorrow?"),
      choice("Fatima helpt ", " met mijn huiswerk.", ["ik", "me"], 1, "Fatima helps me with my homework."),
      choice("Ik zie ", " morgen! (Noor)", ["haar", "zij"], 0, "I'll see her tomorrow!"),
      fill("Kun je ", " helpen? (wij)", "ons", "Can you help us?"),
      fill("Ik bel ", " vanavond. (jij)", ["je", "jou"], "I'll call you tonight."),
      transform("Replace 'Bram' with a pronoun:", "Ik zie Bram in het café.", ["Ik zie hem in het café."], "I see him in the café."),
    ],
  },

  conjunctions: {
    blocks: [
      text("en (and), maar (but), of (or) and want (because) join two full sentences without changing anything: each side keeps its normal word order."),
      slots(
        undefined,
        ["Ik blijf thuis | want:join* | ik | ben | moe", "I'm staying home, because I'm tired."],
        ["Hij is ziek | maar:join* | hij | gaat | naar de les", "He's ill, but he's going to class."],
      ),
      text("Careful with omdat: it also means 'because', but it sends the verb to the end (that's A2). With want, nothing moves. dus (so) is different again: it counts as slot 1, so the verb comes right after: …, dus heeft hij geen geld."),
    ],
    examples: [
      example("Opstaan is niet makkelijk, want hij is geen ochtendmens.", "Getting up isn't easy, because he isn't a morning person.", "want"),
      example("Ik spreek nog niet veel Nederlands, maar ik leer elke dag een beetje.", "I don't speak much Dutch yet, but I learn a bit every day.", "maar"),
      example("Hij wil wat extra geld verdienen, want Leiden is duur.", "He wants to earn some extra money, because Leiden is expensive.", "want"),
      example("'s Avonds kookt hij, kijkt hij een film of belt hij met zijn familie.", "In the evening he cooks, watches a film or calls his family.", "of"),
    ],
    exercises: [
      choice("Ik ga naar bed, ", " ik ben moe.", ["want", "maar"], 0, "I'm going to bed, because I'm tired."),
      choice("Het regent, ", " we gaan toch naar het strand.", ["want", "maar"], 1, "It's raining, but we're going to the beach anyway."),
      choice("Wil je koffie ", " thee?", ["of", "en"], 0, "Do you want coffee or tea?"),
      build("Luca blijft thuis, | want | hij | is | ziek", "Luca stays home, because he's ill."),
      build("Noor werkt vandaag, | maar | morgen | heeft | ze | vrij", "Noor is working today, but tomorrow she's off."),
      transform("Join with 'want':", "Ik neem de fiets. Het is mooi weer.", ["Ik neem de fiets, want het is mooi weer."], "I'll take the bike, because the weather is nice."),
    ],
  },

  "het-subject": {
    blocks: [
      text("Like English 'it', het is the subject for weather, time and general situations, even though nothing specific is meant."),
      table(
        "Typical het-sentences",
        ["Dutch", "English"],
        ["Het regent.", "It's raining."],
        ["Het is koud.", "It's cold."],
        ["Het is half drie.", "It's half past two."],
        ["Het is druk.", "It's busy."],
        ["Hoe gaat het?", "How are you?"],
        ["Het is tien minuten fietsen.", "It's a ten-minute bike ride."],
      ),
      text("In Dutch it often moves behind the verb when something else comes first: Vandaag regent het. Morgen wordt het warm."),
    ],
    examples: [
      example("In de winter is het koud en donker.", "In winter it's cold and dark.", "het"),
      example("Het is tien minuten fietsen.", "It's a ten-minute bike ride.", "Het"),
      example("Het gaat zo regenen.", "It's about to rain.", "Het"),
      example("Op het strand is het druk.", "The beach is busy.", "het"),
    ],
    exercises: [
      fill("", " regent vandaag.", "Het", "It's raining today."),
      fill("Vandaag is ", " mooi weer.", "het", "The weather is nice today."),
      fill("Hoe gaat ", " met je?", "het", "How are you?"),
      transform("Start with 'Morgen':", "Het wordt warm.", ["Morgen wordt het warm."], "Tomorrow it'll be warm."),
      choice("In de zomer ", " lekker warm.", ["is het", "het is"], 0, "In summer it's nice and warm."),
      build("Op zaterdag | is | het | altijd | druk", "On Saturdays it's always busy."),
    ],
  },

  "gaan-future": {
    blocks: [
      text("To talk about plans, use gaan + an infinitive at the end, just like English 'going to'. Often the simple present works too, with a time word: Morgen werk ik."),
      slots(
        "gaan in slot 2, the action at the end",
        ["Ik | ga:gaan* | morgen | koken:end*", "I'm going to cook tomorrow."],
        ["Bram | gaat:gaan* | in de zee | zwemmen:end*", "Bram is going to swim in the sea."],
        ["Het | gaat:gaan* | zo | regenen:end*", "It's about to rain."],
      ),
      text("Careful: Ik ga naar Amsterdam (no second verb) just means 'I'm going to Amsterdam', a real trip."),
    ],
    examples: [
      example("Het gaat zo regenen.", "It's about to rain.", "gaat", "regenen"),
      example("Hij gaat je morgen bellen.", "He'll call you tomorrow.", "gaat", "bellen"),
      example("Bram gaat zwemmen", "Bram goes for a swim", "gaat", "zwemmen"),
    ],
    exercises: [
      build("Ik | ga | vanavond | koken", "I'm going to cook tonight."),
      build("We | gaan | zaterdag | naar het strand", "We're going to the beach on Saturday."),
      fill("Noor ", " morgen boodschappen doen.", "gaat", "Noor is going to do the shopping tomorrow.", "gaan"),
      transform("Make it a plan with 'gaan':", "Ik bel mijn moeder.", ["Ik ga mijn moeder bellen."], "I'm going to call my mother."),
      transform("Make it a plan with 'gaan':", "Wij lezen een boek.", ["Wij gaan een boek lezen.", "We gaan een boek lezen."], "We're going to read a book."),
      choice("Het ", " morgen regenen.", ["gaat", "ga"], 0, "It's going to rain tomorrow."),
    ],
  },
};
