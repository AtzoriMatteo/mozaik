import type { GrammarLesson } from "@/core/content";
import { build, choice, example, fill, match, slots, spot, table, text, transform } from "./helpers";

/** A2 units 5–10: travel, media, society, going out, food, nature. */
export const lessonsA2b: Record<string, GrammarLesson> = {
  "imperfect-irregular": {
    blocks: [
      text("The verbs you use most are irregular in the simple past: the vowel changes and there's no -te or -de. The plural just adds -en."),
      table(
        "Learn these first",
        ["Infinitive", "Singular", "Plural"],
        ["zijn", "was", "waren"], ["hebben", "had", "hadden"], ["gaan", "ging", "gingen"], ["komen", "kwam", "kwamen"],
        ["zien", "zag", "zagen"], ["nemen", "nam", "namen"], ["slapen", "sliep", "sliepen"], ["eten", "at", "aten"],
        ["geven", "gaf", "gaven"], ["vinden", "vond", "vonden"], ["zeggen", "zei", "zeiden"], ["staan", "stond", "stonden"],
      ),
      text("Good news: if you know the perfect, the vowel often matches: gesproken → sprak, geschreven → schreef, gezien → zag."),
    ],
    examples: [
      example("Ze nam alleen een rugzak mee, met kleren voor een week.", "She only took a backpack, with clothes for a week.", "nam"),
      example("Daar sliep ze in een hostel met twaalf bedden op één kamer.", "There she slept in a hostel with twelve beds in one room.", "sliep"),
      example("Na vier weken kwam Femke moe maar gelukkig thuis.", "After four weeks Femke came home tired but happy.", "kwam"),
      example("Hij gaf haar zelfs een appel voor onderweg.", "He even gave her an apple for the journey.", "gaf"),
    ],
    exercises: [
      fill("Vorig jaar ", " ik naar Kreta.", "ging", "Last year I went to Crete.", "gaan"),
      fill("Om middernacht ", " we eindelijk aan.", "kwamen", "At midnight we finally arrived.", "komen"),
      fill("Op het bord ", " ze de vertraging.", "zagen", "On the board they saw the delay.", "zien"),
      fill("De matrozen ", " oud brood.", "aten", "The sailors ate old bread.", "eten"),
      match("Match the infinitive and the past.", "spreken=sprak | schrijven=schreef | blijven=bleef | vinden=vond | geven=gaf", "Irregular past forms."),
      spot("Ik gaande naar de markt.", "gaande", "ging", "I went to the market."),
    ],
  },

  "perfect-or-past": {
    blocks: [
      text("Dutch has two past tenses and uses both all the time. Rule of thumb: the perfect for a single finished event or a result; the simple past to tell a story or describe how things were."),
      table(
        "Which one?",
        ["Perfect", "Simple past"],
        ["Wat heb je gedaan? Ik heb een fiets gekocht.", "Toen ik klein was, woonden we in Turkije."],
        ["Mijn fiets is gestolen!", "Het regende en het was koud."],
      ),
      text("A story often starts in the perfect and then continues in the simple past: Vorig jaar zijn we naar Kreta gegaan. We vlogen om tien uur en…"),
      text("With zijn, hebben and the modal verbs, the simple past is almost always the natural choice: ik was, ik had, ik moest."),
    ],
    examples: [
      example("Emre en zijn vriendin Lotte hebben vorig jaar een vakantie naar Kreta geboekt.", "Last year Emre and his girlfriend Lotte booked a holiday to Crete.", "hebben", "geboekt"),
      example("Eerst stonden ze een uur in de file naar Schiphol.", "First they were stuck in a traffic jam to Schiphol for an hour.", "stonden"),
      example("Mijn fiets is gestolen.", "My bike has been stolen.", "is gestolen"),
      example("Het was een geweldige vakantie", "It was a great holiday", "was"),
    ],
    exercises: [
      choice("Hé, wat ", "?", ["heb je gedaan", "deed je"], 0, "Hey, what have you done? (one event, now)"),
      choice("Toen ik klein was, ", " we elke zomer naar zee.", ["gingen", "zijn gegaan"], 0, "When I was little, we went to the seaside every summer (a habit in a story)."),
      choice("Gisteren ", " ik heel moe.", ["was", "ben geweest"], 0, "Yesterday I was very tired."),
      choice("Kijk! Ik ", " een nieuwe fiets gekocht.", ["heb", "had"], 0, "Look! I've bought a new bike."),
      fill("Het ", " de hele dag, dus we bleven binnen.", "regende", "It rained all day, so we stayed in.", "regenen"),
      transform("Tell it as a story, in the simple past.", "We hebben een auto gehuurd.", "We huurden een auto.", "We rented a car."),
    ],
  },

  "indirect-questions": {
    blocks: [
      text("A question inside a sentence is softer and very common: Weet jij…? Ik vraag me af… After the question word (or of for yes/no), the verb goes to the end."),
      slots(
        undefined,
        ["Waarom:q | is:verb* | de brug | dicht?", "Direct: Why is the bridge closed?"],
        ["Weet jij | waarom:q | de brug | dicht | is:verb*?", "Indirect: Do you know why the bridge is closed?"],
      ),
      text("For a yes/no question, use of: Is het waar? → Ik weet niet of het waar is."),
    ],
    examples: [
      example("Weet jij waarom de brug dicht is?", "Do you know why the bridge is closed?", "waarom", "is"),
      example("Maar ik weet niet zeker of dat klopt.", "But I'm not sure whether that's right.", "of", "klopt"),
      example("Ik vraag me af of het de fiets van de nieuwe buren is.", "I wonder whether it's the new neighbours' bike.", "of", "is"),
      example("Weet je ook hoe ze heten?", "Do you also know what they're called?", "hoe", "heten"),
    ],
    exercises: [
      transform("Start with Weet jij…", "Waar woont Sanne?", "Weet jij waar Sanne woont?", "Do you know where Sanne lives?"),
      transform("Start with Ik vraag me af…", "Is de winkel open?", "Ik vraag me af of de winkel open is.", "I wonder whether the shop is open."),
      choice("Weet jij ", " de trein vertrekt?", ["wanneer", "of wanneer"], 0, "Do you know when the train leaves?"),
      choice("Ik weet niet ", " hij komt.", ["of", "dat of"], 0, "I don't know whether he's coming."),
      build("Weet iemand | van wie | deze fiets | is", "Does anyone know whose bike this is?"),
      transform("Fix the word order.", "Weet jij hoe laat begint de film?", "Weet jij hoe laat de film begint?", "Do you know what time the film starts?"),
    ],
  },

  "als-wanneer-toen": {
    blocks: [
      text("Three words for 'when'. They all send the verb to the end."),
      table(
        "Which 'when'?",
        ["Word", "Use", "Example"],
        ["toen", "one moment or period in the past", "Toen ik vijftien was, …"],
        ["als", "now, the future, every time; also 'if'", "Als ik een woord niet begrijp, …"],
        ["wanneer", "every time (a bit more formal); and the question word", "Wanneer begint het?"],
      ),
      text("The past with every time: als or wanneer, not toen. Als er nieuws was, moest iedereen stil zijn."),
    ],
    examples: [
      example("Toen ik een kind was, hadden we nog geen televisie", "When I was a child, we didn't have a television yet", "Toen", "was"),
      example("Als er belangrijk nieuws was, moest iedereen stil zijn.", "Whenever there was important news, everyone had to be quiet.", "Als", "was"),
      example("Wanneer er voetbal was, zaten er wel twintig mensen in onze kamer.", "Whenever there was football on, there were as many as twenty people in our room.", "Wanneer", "was"),
      example("Toen ik in Nederland kwam wonen, verstond ik bijna niets.", "When I came to live in the Netherlands, I understood almost nothing.", "Toen", "kwam wonen"),
    ],
    exercises: [
      choice("", " ik vijftien was, kochten mijn ouders een tv.", ["Toen", "Als"], 0, "When I was fifteen, my parents bought a TV."),
      choice("", " het regent, neem ik de bus.", ["Als", "Toen"], 0, "When it rains, I take the bus."),
      choice("", " begint de cursus?", ["Wanneer", "Toen"], 0, "When does the course start?"),
      choice("Vroeger, ", " ik bij mijn oma was, kreeg ik altijd een koekje.", ["als", "toen"], 0, "In the past, whenever I was at my gran's, I always got a biscuit."),
      fill("", " Femke in Wenen was, stapte ze in de verkeerde trein.", "Toen", "When Femke was in Vienna, she got on the wrong train."),
      build("Als | je | moe | bent | ga | dan | naar bed", "When you're tired, go to bed."),
    ],
  },

  "om-te": {
    blocks: [
      text("To say why or what for, use om … te + infinitive. Om starts the part, te + the verb close it at the end."),
      slots(undefined, ["Ik ga er ook heen | om:link* | Nederlands | te praten:end*", "I also go there to speak Dutch."]),
      text("After words like moeilijk, makkelijk, leuk and belangrijk you also get om … te: Het is moeilijk om de taal te spreken."),
      text("Separable verbs split around te: om je in te schrijven, om het op te halen."),
    ],
    examples: [
      example("Ik ga er ook heen om Nederlands te praten.", "I also go there to speak Dutch.", "om", "te praten"),
      example("ze vond het moeilijk om de taal echt te spreken", "she found it hard to really speak the language", "om", "te spreken"),
      example("Om je in te schrijven, maak je eerst een afspraak, meestal online.", "To register, you first make an appointment, usually online.", "Om", "in te schrijven"),
      example("Dat doen we om grondstoffen opnieuw te gebruiken.", "We do that to reuse raw materials.", "om", "te gebruiken"),
    ],
    exercises: [
      transform("Join with om … te.", "Ik ga naar de gemeente. Ik wil een paspoort aanvragen.", "Ik ga naar de gemeente om een paspoort aan te vragen.", "I'm going to the town hall to apply for a passport."),
      fill("Ik spaar geld om een nieuwe fiets ", " kopen.", "te", "I'm saving money to buy a new bike."),
      fill("Ze belt de gemeente ", " een afspraak te maken.", "om", "She calls the council to make an appointment."),
      build("Het is | belangrijk | om | goed | te slapen", "It's important to sleep well."),
      choice("Hij komt om zijn pakket ", ".", ["op te halen", "te ophalen"], 0, "He's coming to collect his parcel."),
      transform("Fix the word order.", "Ik leer Nederlands om te werken in Nederland.", "Ik leer Nederlands om in Nederland te werken.", "I'm learning Dutch to work in the Netherlands."),
    ],
  },

  "separable-past": {
    blocks: [
      text("Separable verbs (opbellen, opruimen, uitnodigen) split in the present and simple past, and join up again in the perfect, with ge in the middle."),
      table(
        "opbellen in every form",
        ["Form", "Example"],
        ["present", "Ik bel de voedselbank op."],
        ["simple past", "Ik belde de voedselbank op."],
        ["perfect", "Ik heb de voedselbank opgebeld."],
        ["side clause", "…omdat ik de voedselbank opbel."],
        ["with te", "…om de voedselbank op te bellen."],
      ),
      text("The trick: whenever the verb goes to the end, the two parts stay together."),
    ],
    examples: [
      example("Amal belde de voedselbank op en vroeg of ze hulp nodig hadden.", "Amal phoned the food bank and asked whether they needed help.", "belde", "op"),
      example("Vorige maand nodigde een van haar collega's haar uit voor een verjaardag.", "Last month one of her colleagues invited her to a birthday party.", "nodigde", "uit"),
      example("Ik heb het contract gisteren uitgeprint.", "I printed the contract out yesterday.", "uitgeprint"),
      example("Om één uur ruimen we samen op.", "At one o'clock we tidy up together.", "ruimen", "op"),
    ],
    exercises: [
      fill("Gisteren heb ik mijn moeder ", ".", "opgebeld", "Yesterday I phoned my mother.", "opbellen"),
      fill("Ze ", " haar buren uit voor koffie.", "nodigde", "She invited her neighbours for coffee.", "uitnodigen"),
      fill("Heb je je kamer al ", "?", "opgeruimd", "Have you tidied your room yet?", "opruimen"),
      transform("Put it in the perfect.", "Ik haal mijn pakket op.", "Ik heb mijn pakket opgehaald.", "I collected my parcel."),
      build("Ik bel | omdat | ik | mijn afspraak | wil afzeggen", "I'm calling because I want to cancel my appointment."),
      spot("Ik heb hem geopbeld.", "geopbeld", "opgebeld", "I phoned him."),
    ],
  },
};
