import type { Example, Exercise, LessonBlock } from "@/core/content";
import { example, fill, match, sort, spot, text } from "./helpers";

/**
 * Extra exercises of other kinds (match, sort, spot the mistake), added to
 * the end of each lesson so practice isn't only typing and choosing.
 */
export const moreExercises: Record<string, Exercise[]> = {
  "pronouns-subject": [
    match("Who is it? Connect the English and the Dutch.", "I=ik | you (polite)=u | she=zij | we=wij | they=zij (plural)", "ik, u, zij, wij, zij"),
    spot("Goedemorgen mevrouw, bent jij de buurvrouw?", "jij", "u", "Good morning madam, are you the neighbour? (a stranger: u)"),
  ],
  "present-regular": [
    match("Connect each subject with its form of werken.", "ik=werk | jij=werkt | wij=werken | Bram en Noor=werken", "ik werk, jij werkt, wij werken, Bram werkt"),
    spot("Luca woont in Leiden en hij studeren biologie.", "studeren", "studeert", "Luca lives in Leiden and he studies biology."),
    sort("Which form? Sort by subject.", ["ik", "hij"], "woon=0 | woont=1 | fiets=0 | fietst=1 | leer=0 | leert=1", "ik woon, hij woont; ik fiets, hij fietst; ik leer, hij leert"),
  ],
  "zijn-hebben": [
    match("Connect each subject with its form of zijn.", "ik=ben | jij=bent | hij=is | wij=zijn", "ik ben, jij bent, hij is, wij zijn"),
    spot("Noor heb een broer en een hond.", "heb", "heeft", "Noor has a brother and a dog."),
  ],
  possessives: [
    match("Connect the English and the Dutch.", "my=mijn | your=jouw | his=zijn | her=haar | our (house)=ons", "mijn, jouw, zijn, haar, ons huis"),
    spot("Dit is ons moeder.", "ons", "onze", "This is our mother. (onze with de-words)"),
  ],
  plurals: [
    sort("-en or -s? Sort the plurals.", ["-en", "-s"], "boeken=0 | tafels=1 | dagen=0 | broers=1 | kamers=1 | huizen=0", "boeken, dagen, huizen; tafels, broers, kamers"),
    spot("Ik heb twee zus.", "zus", "zussen", "I have two sisters."),
  ],
  articles: [
    sort("de or het?", ["de", "het"], "huis=1 | stad=0 | kind=1 | moeder=0 | brood=1 | fiets=0", "het huis, de stad, het kind, de moeder, het brood, de fiets"),
    spot("Het kinderen spelen buiten.", "Het", "De", "The children are playing outside. (every plural takes de)"),
  ],
  "er-is": [
    match("Connect the halves.", "Er is=een markt | Er zijn=veel fietsen | Is er=nog brood? | Zijn er=nog appels?", "Er is een markt. Er zijn veel fietsen. Is er nog brood? Zijn er nog appels?"),
    spot("Er is veel mensen op de markt.", "is", "zijn", "There are a lot of people at the market."),
  ],
  demonstratives: [
    sort("deze or dit?", ["deze", "dit"], "appel=0 | brood=1 | kaas=0 | huis=1 | tomaten=0 | boek=1", "deze appel, dit brood, deze kaas, dit huis, deze tomaten, dit boek"),
    spot("Dit appels zijn lekker.", "Dit", "Deze", "These apples are tasty."),
  ],
  diminutives: [
    match("Connect the word and its small form.", "huis=huisje | boom=boompje | kop=kopje | vrouw=vrouwtje", "huisje, boompje, kopje, vrouwtje"),
    sort("de or het? (careful: small words)", ["de", "het"], "kop=0 | kopje=1 | tafel=0 | tafeltje=1 | boek=1 | boekje=1", "Every -je word is a het-word."),
  ],
  "time-numbers": [
    match("Connect the clock and the Dutch.", "8:30=half negen | 9:15=kwart over negen | 9:45=kwart voor tien | 7:00=zeven uur", "half negen, kwart over negen, kwart voor tien, zeven uur"),
    spot("De les begint om half tien, dus om 10:30.", "10:30", "9:30", "The class starts at half past nine, so at 9:30. (half tien = halfway to ten)"),
  ],
  "verb-second": [
    sort("Is the verb in second place?", ["right", "wrong"], "Vandaag werk ik.=0 | Vandaag ik werk.=1 | Om acht uur sta ik op.=0 | 's Avonds ik kook.=1", "Vandaag werk ik. Om acht uur sta ik op. 's Avonds kook ik."),
  ],
  "separable-verbs": [
    match("Connect the verb and how it splits.", "opstaan=ik sta op | afwassen=ik was af | meenemen=ik neem mee | opbellen=ik bel op", "ik sta op, ik was af, ik neem mee, ik bel op"),
    spot("Ik opsta om zeven uur.", "opsta", "sta", "I get up at seven. (op jumps to the end)", "Ik sta om zeven uur op."),
  ],
  prepositions: [
    match("Connect the English and the Dutch.", "in=in | on (top of)=op | next to=naast | behind=achter | under=onder", "in, op, naast, achter, onder"),
    spot("Ik woon op Leiden.", "op", "in", "I live in Leiden. (in a city: in)"),
  ],
  "adjective-e": [
    sort("With or without -e?", ["groot", "grote"], "een ___ huis=0 | de ___ stad=1 | het ___ huis=1 | een ___ tuin=1", "een groot huis, de grote stad, het grote huis, een grote tuin"),
    spot("Leiden is een mooi stad.", "mooi", "mooie", "Leiden is a beautiful city. (een + de-word: -e)"),
  ],
  imperative: [
    match("Connect the verb and the instruction.", "lopen=Loop rechtdoor. | nemen=Neem de tweede straat. | gaan=Ga linksaf. | komen=Kom binnen!", "Loop, Neem, Ga, Kom: the stem on its own."),
    spot("Gaat hier rechtsaf.", "Gaat", "Ga", "Turn right here. (imperative = stem)"),
  ],
  questions: [
    match("Connect the question word and its meaning.", "wie=who | wat=what | waar=where | wanneer=when | hoe=how", "wie, wat, waar, wanneer, hoe"),
    spot("Wie is dat? Dat is mijn buurvrouw. Wat heet ze?", "Wat", "Hoe", "Who is that? That's my neighbour. What's her name? (Hoe heet ze? = how is she called?)"),
  ],
  "jij-inversion": [
    sort("Right or wrong?", ["right", "wrong"], "Woon jij hier?=0 | Woont jij hier?=1 | Jij woont hier.=0 | Werk je vandaag?=0", "After the verb, jij/je drops the -t: Woon jij? Werk je?"),
    spot("Wat drinkt je?", "drinkt", "drink", "What are you drinking? (drink je: no -t)"),
  ],
  "modal-verbs": [
    match("Connect the modal verb and its meaning.", "kunnen=can | willen=want | moeten=must | mogen=may", "kunnen, willen, moeten, mogen"),
    spot("Ik wil een koffie drinkt.", "drinkt", "drinken", "I want to drink a coffee. (second verb at the end, infinitive)"),
    fill("", " we samen koken?", "Zullen", "Shall we cook together?", "shall we"),
  ],
  negation: [
    sort("niet or geen?", ["niet", "geen"], "Ik heb ___ auto.=1 | Ik werk ___.=0 | Dat is ___ mijn fiets.=0 | Er is ___ brood.=1", "geen + a noun without de/het; niet everywhere else."),
    spot("Ik heb niet tijd.", "niet", "geen", "I don't have time."),
  ],
  "object-pronouns": [
    match("Connect the subject and the object form.", "ik=mij / me | jij=jou / je | hij=hem | wij=ons | zij (they)=hen / ze", "mij, jou, hem, ons, hen"),
    spot("Bel ik morgen even?", "ik", ["me", "mij"], "Call me tomorrow? (object: me)"),
  ],
  conjunctions: [
    match("Connect the halves.", "Ik ben moe=maar ik ga toch. | Noor kookt=en Bram wast af. | Wil je thee=of koffie? | Ik blijf thuis,=want ik ben ziek.", "maar, en, of, want: the word order stays normal."),
    spot("Wil je thee maar koffie?", "maar", "of", "Do you want tea or coffee?"),
  ],
  "het-subject": [
    match("Connect the Dutch and the English.", "Het regent.=It's raining. | Het is koud.=It's cold. | Het is laat.=It's late. | Hoe laat is het?=What time is it?", "het as 'it' for weather and time"),
    spot("Is koud vandaag.", "Is", ["Het is"], "It's cold today. (Dutch needs the het)"),
  ],
  "gaan-future": [
    sort("Now or plan?", ["now", "plan"], "Ik fiets naar huis.=0 | Ik ga morgen fietsen.=1 | We gaan zaterdag koken.=1 | We koken.=0", "gaan + infinitive at the end = a plan."),
    spot("Morgen ga ik zwemt.", "zwemt", "zwemmen", "Tomorrow I'm going to swim."),
  ],
};

/** Extra explanation added to existing lessons after the A1 audit. */
export const moreBlocks: Record<string, LessonBlock[]> = {
  "modal-verbs": [
    text("zullen makes suggestions: Zullen we…? = Shall we…? Forms: ik zal, jij zult/zal, hij zal, wij zullen. Answer with: Goed idee! / Ja, leuk!"),
  ],
};

export const moreExamples: Record<string, Example[]> = {
  "modal-verbs": [example("Zullen we samen Nederlands oefenen?", "Shall we practise Dutch together?", "Zullen", "oefenen")],
};
