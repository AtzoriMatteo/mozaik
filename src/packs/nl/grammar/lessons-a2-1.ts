import type { GrammarLesson } from "@/core/content";
import { build, choice, example, fill, match, slots, sort, spot, table, text, transform } from "./helpers";

/** A2 units 1–5: the past, work, home, health, travel. */
export const lessonsA2a: Record<string, GrammarLesson> = {
  "perfect-hebben": {
    blocks: [
      text("To say what you did, Dutch mostly uses the perfect: a form of hebben in the verb slot, and the past participle at the very end."),
      slots(
        undefined,
        ["Ik:subject | heb:verb* | vis en kaas | gekocht:end*", "I bought fish and cheese."],
        ["Gisteren:time | heb:verb* | ik:subject | mijn buren | ontmoet:end*", "Yesterday I met my neighbours."],
      ),
      text("Regular participles: ge + stem + t or d. The t comes after the consonants of 't kofschip (t, k, f, s, ch, p): gewerkt, gekookt, gefietst. Everything else gets d: gewoond, gehuurd, gespeeld."),
      table("Making the participle", ["Infinitive", "Stem", "Participle"], ["werken", "werk", "gewerkt"], ["fietsen", "fiets", "gefietst"], ["wonen", "woon", "gewoond"], ["huren", "huur", "gehuurd"]),
      text("No extra ge- for verbs that start with be-, ge-, her-, ont-, ver-: besteld, verdiend, ontmoet."),
    ],
    examples: [
      example("Ik heb vis, kaas en bloemen gekocht.", "I bought fish, cheese and flowers.", "heb", "gekocht"),
      example("We hebben samen koffie gedronken en heel lang gepraat.", "We had coffee together and talked for ages.", "hebben", "gedronken", "gepraat"),
      example("Op de dag zelf heb ik een busje gehuurd", "On the day itself I rented a van", "heb", "gehuurd"),
      example("Maar ik heb wel genoeg geld verdiend voor een nieuwe laptop.", "But I did earn enough money for a new laptop.", "heb", "verdiend"),
    ],
    exercises: [
      fill("Ik heb de hele zomer ", ".", "gewerkt", "I worked the whole summer.", "werken"),
      fill("We hebben een auto ", ".", "gehuurd", "We rented a car.", "huren"),
      fill("Mijn oom heeft dertig jaar in Rotterdam ", ".", "gewoond", "My uncle lived in Rotterdam for thirty years.", "wonen"),
      fill("Ik heb genoeg geld ", ".", "verdiend", "I earned enough money.", "verdienen"),
      choice("Gisteren ", " ik pizza besteld.", ["heb", "ben"], 0, "Yesterday I ordered pizza."),
      build("Ik | heb | mijn huis | opgeruimd", "I tidied up my house."),
      transform("Make it the perfect.", "Ik fiets naar mijn werk. (gisteren)", ["Gisteren ben ik naar mijn werk gefietst.", "Ik ben gisteren naar mijn werk gefietst."], "Yesterday I cycled to work."),
    ],
  },

  "perfect-zijn": {
    blocks: [
      text("Some verbs take zijn instead of hebben: verbs of going somewhere (gaan, komen, fietsen naar…) and of changing state (worden, verhuizen, trouwen, sterven, beginnen)."),
      slots(
        undefined,
        ["In 2008:time | ben:verb* | ik:subject | naar Nederland | gekomen:end*", "In 2008 I came to the Netherlands."],
        ["Een jaar later | zijn:verb* | we:subject | getrouwd:end*", "A year later we got married."],
      ),
      text("Movement verbs switch: with a destination it's zijn (Ik ben naar huis gefietst), without one it's hebben (Ik heb een uur gefietst)."),
      table("Common zijn-verbs", ["Verb", "Perfect"], ["gaan", "ik ben gegaan"], ["komen", "ik ben gekomen"], ["blijven", "ik ben gebleven"], ["worden", "ik ben geworden"], ["verhuizen", "ik ben verhuisd"], ["zijn", "ik ben geweest"]),
    ],
    examples: [
      example("In 2008 ben ik naar Nederland gekomen.", "In 2008 I came to the Netherlands.", "ben", "gekomen"),
      example("Een jaar later zijn we getrouwd, en in 2014 ben jij geboren.", "A year later we got married, and in 2014 you were born.", "zijn", "getrouwd", "ben", "geboren"),
      example("Ik ben eindelijk verhuisd!", "I've finally moved!", "ben", "verhuisd"),
      example("Ik ben thuisgebleven.", "I stayed at home.", "ben", "thuisgebleven"),
    ],
    exercises: [
      choice("Ik ", " naar het strand gegaan.", ["ben", "heb"], 0, "I went to the beach."),
      choice("We ", " de hele dag gewandeld.", ["zijn", "hebben"], 1, "We walked all day (no destination: hebben)."),
      choice("Ze ", " vorig jaar naar Utrecht verhuisd.", ["is", "heeft"], 0, "She moved to Utrecht last year."),
      fill("Lotte is drie weken in Portugal ", ".", "geweest", "Lotte was in Portugal for three weeks.", "zijn"),
      fill("Het busje is twee uur te laat ", ".", "gekomen", "The van came two hours late.", "komen"),
      sort("hebben or zijn?", ["hebben", "zijn"], "gekocht=0 | gegaan=1 | gegeten=0 | gebleven=1 | geworden=1 | gewerkt=0", "Which helper verb?"),
    ],
  },

  "participles-irregular": {
    blocks: [
      text("The most common verbs have irregular participles. They mostly end in -en, and the vowel often changes. Learn them in pairs with the helper verb."),
      table(
        "The ones you'll use every day",
        ["Infinitive", "Perfect"],
        ["eten", "heb gegeten"], ["drinken", "heb gedronken"], ["zien", "heb gezien"], ["doen", "heb gedaan"],
        ["schrijven", "heb geschreven"], ["vinden", "heb gevonden"], ["krijgen", "heb gekregen"], ["spreken", "heb gesproken"],
        ["gaan", "ben gegaan"], ["komen", "ben gekomen"], ["zijn", "ben geweest"], ["worden", "ben geworden"],
      ),
      text("Tip: say them as chunks, out loud: gegeten-gedronken, gezien-gedaan. The rhythm sticks better than a list."),
    ],
    examples: [
      example("We hebben veel vis gegeten, en ik heb een kookcursus gedaan.", "We ate a lot of fish, and I did a cooking course.", "gegeten", "gedaan"),
      example("Ik heb daar een nieuwe baan gevonden, bij een ziekenhuis.", "I found a new job there, at a hospital.", "gevonden"),
      example("In het begin heb ik geen woord Nederlands gesproken.", "In the beginning I didn't speak a word of Dutch.", "gesproken"),
      example("Hij heeft het dagboek gelezen en in 1947 is het een boek geworden.", "He read the diary and in 1947 it became a book.", "gelezen", "geworden"),
    ],
    exercises: [
      fill("We hebben veel vis ", ".", "gegeten", "We ate a lot of fish.", "eten"),
      fill("Ik heb mijn oude vriend ", ".", "gezien", "I saw my old friend.", "zien"),
      fill("Ze hebben me een plant ", ".", "gegeven", "They gave me a plant.", "geven"),
      fill("Anne heeft een dagboek ", ".", "geschreven", "Anne wrote a diary.", "schrijven"),
      match("Match the infinitive and the participle.", "drinken=gedronken | vinden=gevonden | krijgen=gekregen | spreken=gesproken", "Irregular participles."),
      spot("Ik heb drie films gekijkt.", "gekijkt", "gekeken", "I watched three films."),
    ],
  },

  "subordinate-order": {
    blocks: [
      text("Words like omdat, dat, als, of and wanneer start a side clause. In a side clause the verb moves to the very end."),
      slots(
        undefined,
        ["Ik werk graag met mensen.", "Main clause: verb second."],
        ["…omdat:link | ik:subject | graag met mensen | werk:verb*", "Side clause: verb last."],
      ),
      text("With two verbs, both go to the end, usually in the same order as in English: …dat je altijd rustig moet blijven."),
      text("If the side clause comes first, the main clause starts with its verb: Als je wilt, kun je komen."),
    ],
    examples: [
      example("Ik denk dat ik goed bij uw bedrijf pas, omdat ik graag met mensen werk.", "I think I'd fit in well at your company, because I like working with people.", "pas", "werk"),
      example("Daar heb ik geleerd dat je altijd rustig moet blijven", "There I learned that you always have to stay calm", "moet blijven"),
      example("En om vijf uur gaat iedereen naar huis, omdat het privéleven ook belangrijk is.", "And at five everyone goes home, because private life matters too.", "is"),
    ],
    exercises: [
      build("Ik bel | omdat | ik | een vraag | heb", "I'm calling because I have a question."),
      transform("Join with omdat.", "Ik blijf thuis. Ik ben ziek.", "Ik blijf thuis, omdat ik ziek ben.", "I'm staying at home because I'm ill."),
      transform("Start with Ik denk dat…", "Het plan is goed.", "Ik denk dat het plan goed is.", "I think the plan is good."),
      choice("Ik weet dat hij morgen ", ".", ["komt", "komt niet"], 0, "I know he's coming tomorrow."),
      spot("Ik denk dat hij morgen komen.", "komen", "komt", "I think he's coming tomorrow."),
      fill("Je kunt beginnen als dat jou ", ".", "uitkomt", "You can start if that suits you.", "uitkomen"),
    ],
  },

  "want-omdat": {
    blocks: [
      text("Both mean 'because'. The difference is only the word order: want keeps the normal order, omdat sends the verb to the end."),
      slots(
        undefined,
        ["…want:link | ik:subject | ben:verb* | een ochtendmens", "…because I'm a morning person."],
        ["…omdat:link | ik:subject | een ochtendmens | ben:verb*", "…because I'm a morning person."],
      ),
      text("In speech want is more common. Only omdat can start a sentence or answer a waarom-question on its own: Waarom? Omdat ik moe ben."),
    ],
    examples: [
      example("Dat is geen probleem, want ik ben een ochtendmens.", "That's no problem, because I'm a morning person.", "want", "ben"),
      example("Ik kan 32 uur per week werken, want mijn dochter gaat op woensdagmiddag naar haar oma.", "I can work 32 hours a week, because my daughter goes to her grandma's on Wednesday afternoons.", "want", "gaat"),
      example("Omdat ik naast mijn studie geld wil verdienen.", "Because I want to earn money alongside my studies.", "Omdat", "wil verdienen"),
    ],
    exercises: [
      choice("Ik blijf thuis, want ik ", " ziek.", ["ben", "ziek ben"], 0, "I'm staying home, because I'm ill."),
      fill("Ik blijf thuis, omdat ik ziek ", ".", "ben", "I'm staying home because I'm ill."),
      transform("Change want into omdat.", "Ik neem de trein, want het regent.", "Ik neem de trein, omdat het regent.", "I'm taking the train because it's raining."),
      transform("Change omdat into want.", "Ik ga vroeg naar bed, omdat ik moe ben.", "Ik ga vroeg naar bed, want ik ben moe.", "I'm going to bed early because I'm tired."),
      build("Op zondag niet | want | dan | voetbal | ik", "Not on Sundays, because then I play football."),
      transform("Fix the word order.", "Ik bel, omdat ik heb een vraag.", "Ik bel, omdat ik een vraag heb.", "I'm calling because I have a question."),
    ],
  },

  "er-preposition": {
    blocks: [
      text("Dutch doesn't say 'op het' or 'met het' for things. It says er + the preposition: erop, ermee, erover, ervan."),
      table("er + preposition", ["Not…", "But…", "Meaning"], ["op het", "erop", "on it"], ["met het", "ermee", "with it"], ["over het", "erover", "about it"], ["van het", "ervan", "of it"], ["aan het", "eraan", "to it, on it"]),
      text("In a sentence, er and the preposition often split: er goes after the verb, the preposition goes towards the end. Ik heb er al naar gekeken."),
      slots(undefined, ["Ik:subject | heb:verb* | er:er* | al | naar:prep* | gekeken", "I've already looked at it."]),
      text("For a place you already mentioned, use daar the same way, with stress: Daar heb ik geen tijd voor."),
    ],
    examples: [
      example("Ik heb er al naar gekeken, maar ik begrijp er niets van.", "I've already looked at it, but I don't understand a thing about it.", "er", "naar", "van"),
      example("Wat vindt u ervan?", "What do you think of it?", "ervan"),
      example("Ik hoop dat u er snel iets aan kunt doen.", "I hope you can do something about it soon.", "er", "aan"),
      example("Mag ik er een nachtje over slapen?", "May I sleep on it?", "er", "over"),
    ],
    exercises: [
      choice("De ketel? Ik heb ", " al naar gekeken.", ["er", "het"], 0, "The boiler? I've already looked at it."),
      fill("Wat vind je ", "? (of it)", "ervan", "What do you think of it?"),
      fill("Ik heb een foto. Ik ben er blij ", ".", "mee", "I have a photo. I'm happy with it."),
      transform("Use er.", "Ik denk niet aan het probleem.", "Ik denk er niet aan.", "I'm not thinking about it."),
      build("Ik | heb | er | al | over | gebeld", "I've already called about it."),
      spot("Ik heb het al naar gekeken.", "het", "er", "I've already looked at it."),
    ],
  },

  "relative-clauses": {
    blocks: [
      text("To add information about a person or thing, use die or dat. die for de-words and all plurals, dat for het-words. The verb goes to the end."),
      slots(
        undefined,
        ["een collega:noun | die:link* | net een huis | heeft gevonden:verb*", "a colleague who has just found a house"],
        ["een appartement:noun | dat:link* | een eigen keuken | heeft:verb*", "a flat that has its own kitchen"],
      ),
      text("English can drop 'that' (the house I saw). Dutch never drops die or dat."),
    ],
    examples: [
      example("in een appartement dat een eigen keuken heeft", "in a flat that has its own kitchen", "dat", "heeft"),
      example("Een collega die net een huis heeft gevonden, geeft hem een tip", "A colleague who has just found a home gives him a tip", "die", "heeft gevonden"),
      example("Er zijn sociale huurwoningen, die goedkoop zijn.", "There are social rented homes, which are cheap.", "die", "zijn"),
      example("Het is een woord dat je moeilijk kunt vertalen", "It's a word you can hardly translate", "dat", "kunt vertalen"),
    ],
    exercises: [
      choice("Het huis ", " ik heb gezien, is te duur.", ["die", "dat"], 1, "The house I saw is too expensive."),
      choice("De buurvrouw ", " naast ons woont, is heel aardig.", ["die", "dat"], 0, "The neighbour who lives next to us is very nice."),
      choice("De kamers ", " ik heb bekeken, waren klein.", ["die", "dat"], 0, "The rooms I looked at were small (plural: die)."),
      transform("Join with die or dat.", "Ik zoek een kamer. De kamer is niet te duur.", "Ik zoek een kamer die niet te duur is.", "I'm looking for a room that isn't too expensive."),
      build("Ik heb een vriend | die | in Utrecht | woont", "I have a friend who lives in Utrecht."),
      spot("Het appartement die ik wil, heeft een balkon.", "die", "dat", "The flat I want has a balcony."),
    ],
  },

  "modal-past": {
    blocks: [
      text("The modal verbs have their own past forms. They're short, and you'll use them all the time to tell what happened."),
      table("Modal verbs in the past", ["Now", "Past (ik/jij/hij)", "Past (wij/jullie/zij)"], ["kan", "kon", "konden"], ["moet", "moest", "moesten"], ["wil", "wilde", "wilden"], ["mag", "mocht", "mochten"], ["hoef niet", "hoefde niet", "hoefden niet"]),
      slots(undefined, ["Ik:subject | moest:verb* | in bed | blijven:end*", "I had to stay in bed."]),
      text("The second verb still goes to the end, without te: Ik kon niet slapen. Only hoeven takes te: Ze hoefde niet te werken."),
    ],
    examples: [
      example("Ik moest in bed blijven en veel water drinken.", "I had to stay in bed and drink a lot of water.", "moest"),
      example("Ik mocht pas weer werken als ik een dag zonder koorts was.", "I wasn't allowed to work again until I'd been a day without a fever.", "mocht"),
      example("Ik had hoofdpijn en ik was heel moe, maar ik wilde toch naar mijn werk gaan.", "I had a headache and was very tired, but I still wanted to go to work.", "wilde"),
      example("Ze kon dezelfde middag om tien over twee komen.", "She could come the same afternoon at ten past two.", "kon"),
    ],
    exercises: [
      fill("Gisteren ", " ik niet komen, want ik was ziek.", "kon", "Yesterday I couldn't come, because I was ill.", "kunnen"),
      fill("We ", " een uur wachten bij de huisarts.", "moesten", "We had to wait an hour at the GP's.", "moeten"),
      fill("Als kind ", " ik niet laat opblijven.", "mocht", "As a child I wasn't allowed to stay up late.", "mogen"),
      fill("Ze ", " eerst naar de huisarts, niet naar de specialist.", "wilde", "She wanted to go to the GP first, not to the specialist.", "willen"),
      transform("Put it in the past.", "Ik moet thuisblijven.", "Ik moest thuisblijven.", "I had to stay at home."),
      choice("Sofia ", " niet naar het ziekenhuis.", ["hoefde", "moest niet te"], 0, "Sofia didn't need to go to the hospital."),
    ],
  },

  "te-infinitive": {
    blocks: [
      text("After some verbs, the next verb comes with te: proberen te, beginnen te, vergeten te, hoeven niet te, durven te. The te + infinitive goes to the end."),
      slots(undefined, ["Ik:subject | probeerde:verb* | een boek | te lezen:end*", "I tried to read a book."]),
      text("Compare: the modal verbs (kunnen, moeten, willen, mogen) and gaan never take te. Ik wil lezen, but ik probeer te lezen."),
      text("With separable verbs te goes in the middle: uit te checken, mee te nemen."),
    ],
    examples: [
      example("Ik probeerde een boek te lezen, maar dat lukte niet.", "I tried to read a book, but it didn't work.", "te lezen"),
      example("Vergeet niet uit te checken!", "Don't forget to check out!", "uit te checken"),
      example("Je hoeft niet beleefd te zwijgen.", "You don't need to stay politely silent.", "hoeft", "te zwijgen"),
      example("probeer bij de huisarts duidelijk te vertellen wat je voelt", "try to tell the GP clearly what you feel", "te vertellen"),
    ],
    exercises: [
      choice("Ik probeer elke dag water ", ".", ["te drinken", "drinken"], 0, "I try to drink water every day."),
      choice("Ik wil vandaag ", ".", ["te rusten", "rusten"], 1, "I want to rest today (willen: no te)."),
      fill("Vergeet niet de kuur af ", " maken.", "te", "Don't forget to finish the course."),
      fill("Je hoeft niet bang ", " zijn.", "te", "You don't need to be afraid."),
      build("Het | begint | te | regenen", "It's starting to rain."),
      spot("Ik vergeet altijd mijn telefoon meenemen.", "meenemen", "mee te nemen", "I always forget to take my phone."),
    ],
  },

  "imperfect-regular": {
    blocks: [
      text("The simple past of regular verbs: stem + te or de. Plural: + ten or den. The same 't kofschip rule as the perfect decides t or d."),
      table("Regular simple past", ["Infinitive", "Stem", "Singular", "Plural"], ["werken", "werk", "werkte", "werkten"], ["fietsen", "fiets", "fietste", "fietsten"], ["wonen", "woon", "woonde", "woonden"], ["reizen", "reis", "reisde", "reisden"]),
      text("Watch reizen: the stem is reis, but the infinitive has a z, so it's reisde. The same with leven → leefde. Look at the infinitive, not the stem."),
    ],
    examples: [
      example("Mijn oom woonde al in Rotterdam.", "My uncle already lived in Rotterdam.", "woonde"),
      example("Samen reisden ze verder naar Praag en Wenen.", "Together they travelled on to Prague and Vienna.", "reisden"),
      example("Femke stapte in de verkeerde trein", "Femke got on the wrong train", "stapte"),
      example("Ze aten een broodje en wachtten.", "They ate a sandwich and waited.", "wachtten"),
    ],
    exercises: [
      fill("Vroeger ", " ik in Groningen.", "woonde", "I used to live in Groningen.", "wonen"),
      fill("Femke ", " een maand door Europa.", "reisde", "Femke travelled through Europe for a month.", "reizen"),
      fill("We ", " de hele dag in de regen.", "fietsten", "We cycled in the rain all day.", "fietsen"),
      fill("De gids ", " bij een zandbank.", "stopte", "The guide stopped at a sandbank.", "stoppen"),
      sort("te or de?", ["-te", "-de"], "werken=0 | wonen=1 | koken=0 | horen=1 | maken=0 | spelen=1", "Which ending?"),
      transform("Put it in the simple past.", "Ik werk in een café.", "Ik werkte in een café.", "I worked in a café."),
    ],
  },
};
