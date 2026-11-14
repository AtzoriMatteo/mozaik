import type { GrammarLesson } from "@/core/content";
import { build, choice, example, fill, match, slots, sort, spot, table, text, transform } from "./helpers";

/** Points added after the A1 audit: spelling, dates, reflexives, likes, comparing. */
export const lessons5: Record<string, GrammarLesson> = {
  spelling: {
    blocks: [
      text("Dutch spelling is regular once you know two things: how letters are named, and when a long vowel is written with one letter or two."),
      table(
        "The alphabet, as you say it when spelling",
        ["Letter", "Say", "Letter", "Say"],
        ["A", "aa", "N", "en"],
        ["B", "bee", "O", "oo"],
        ["C", "see", "P", "pee"],
        ["D", "dee", "Q", "kuu"],
        ["E", "ee", "R", "er"],
        ["F", "ef", "S", "es"],
        ["G", "gee (throaty g)", "T", "tee"],
        ["H", "haa", "U", "uu"],
        ["I", "ie", "V", "vee"],
        ["J", "jee (like 'yay')", "W", "wee"],
        ["K", "kaa", "X", "iks"],
        ["L", "el", "Y", "ij or griekse y"],
        ["M", "em", "Z", "zet"],
      ),
      text("Long or short vowel? A syllable that ends in a vowel is open; one that ends in a consonant is closed. In a closed syllable a long sound needs two letters (maan, boom); in an open syllable one letter is enough (ma-nen, bo-men)."),
      table(
        "Same sound, different spelling",
        ["Long, closed", "Long, open", "Short, closed", "Short + ending"],
        ["maan (moon)", "manen", "man", "mannen"],
        ["boom (tree)", "bomen", "bom", "bommen"],
        ["ik woon", "wonen", "ik zit", "zitten"],
      ),
      text("To keep a short vowel short before an ending, double the consonant: kat → katten, bus → bussen. And s/f at the end often become z/v before an ending: huis → huizen, brief → brieven."),
      text("Two spellings, one sound: ij and ei (mijn, klein); ou and au (oud, blauw)."),
    ],
    examples: [
      example("Het huis is hoog en smal, zoals veel huizen in Leiden.", "The house is tall and narrow, like many houses in Leiden.", "huis", "huizen"),
      example("Er liggen grote, gele kazen op de tafel.", "There are big yellow cheeses on the table.", "grote", "gele", "kazen"),
      example("Leiden is een mooie stad met veel grachten, bruggen en fietsen.", "Leiden is a beautiful city with lots of canals, bridges and bikes.", "bruggen"),
    ],
    exercises: [
      fill("één boom, twee ", "", "bomen", "one tree, two trees", "open syllable: one o"),
      fill("één kat, twee ", "", "katten", "one cat, two cats", "keep the a short"),
      choice("Ik ", " in Leiden.", ["won", "woon"], 1, "I live in Leiden."),
      sort("Long or short a?", ["long", "short"], "maan=0 | man=1 | manen=0 | mannen=1 | kaas=0 | kazen=0", "maan, manen, kaas, kazen: long; man, mannen: short."),
      match("How do you say the letter?", "A=aa | E=ee | I=ie | J=jee | G=gee", "Letters as Dutch speakers say them."),
      spot("Wij woonen in Leiden.", "woonen", "wonen", "We live in Leiden. (open syllable: one o)"),
      spot("Er zijn twee huisen aan de gracht.", "huisen", "huizen", "There are two houses on the canal. (s becomes z)"),
      fill("één brief, twee ", "", "brieven", "one letter, two letters", "f becomes v"),
    ],
  },

  "dates-ordinals": {
    blocks: [
      text("Order words (first, second…) mostly add -de to the number. From twintig upwards, and for acht, add -ste. Three are special: eerste, derde and achtste."),
      table(
        "Order words",
        ["", "Number", "Order word"],
        ["1", "één", "eerste"],
        ["2", "twee", "tweede"],
        ["3", "drie", "derde"],
        ["4", "vier", "vierde"],
        ["8", "acht", "achtste"],
        ["10", "tien", "tiende"],
        ["12", "twaalf", "twaalfde"],
        ["20", "twintig", "twintigste"],
        ["21", "eenentwintig", "eenentwintigste"],
      ),
      text("Dates use the plain number, not the order word: op vijf december, op zevenentwintig april. Months and days have no capital letter. Order words are for floors, places in a row, and set phrases: de eerste verdieping, de tweede winkel, vrijdag de dertiende."),
      slots(
        "Asking and saying the date",
        ["Welke datum | is | het | vandaag?", "What's the date today?"],
        ["Het | is | vrijdag | dertien november:date*", "It's Friday the thirteenth of November."],
      ),
      text("Years: 2026 = tweeduizend zesentwintig."),
    ],
    examples: [
      example("Op zevenentwintig april is het Koningsdag.", "On the twenty-seventh of April it's King's Day.", "zevenentwintig april"),
      example("In de tweede winkel is er uitverkoop.", "In the second shop there's a sale.", "tweede"),
      example("Maart is de derde maand van het jaar en december is de twaalfde en de laatste.", "March is the third month of the year and December is the twelfth and the last.", "derde", "twaalfde"),
      example("Vrijdag de dertiende?", "Friday the thirteenth?", "dertiende"),
    ],
    exercises: [
      fill("Maart is de ", " maand.", "derde", "March is the third month.", "drie"),
      fill("Augustus is de ", " maand.", "achtste", "August is the eighth month.", "acht"),
      choice("Mijn kamer is op de ", " verdieping.", ["twee", "tweede"], 1, "My room is on the second floor."),
      match("Connect the number and the order word.", "1=eerste | 3=derde | 8=achtste | 20=twintigste", "eerste, derde, achtste, twintigste"),
      sort("-de or -ste?", ["-de", "-ste"], "vierde=0 | achtste=1 | tiende=0 | twintigste=1 | zevende=0 | eerste=1", "acht, eerste and from twintig: -ste; the rest: -de."),
      transform("Say the date in words (27/4):", "27/4", ["zevenentwintig april", "op zevenentwintig april"], "27 April"),
      spot("Op vijf December vieren we Sinterklaas.", "December", "december", "On 5 December we celebrate Sinterklaas. (months: no capital)"),
    ],
  },

  reflexive: {
    blocks: [
      text("Some verbs come with a 'self' word that points back to the subject: zich voelen (feel), zich wassen (wash), zich aankleden (get dressed), zich haasten (hurry). In English you usually leave it out; in Dutch it must be there."),
      table(
        "zich voelen (to feel)",
        ["", "Form"],
        ["ik", "voel me"],
        ["jij", "voelt je"],
        ["u", "voelt u (or zich)"],
        ["hij / zij", "voelt zich"],
        ["wij", "voelen ons"],
        ["jullie", "voelen je"],
        ["zij", "voelen zich"],
      ),
      slots(
        "The self word comes right after the verb",
        ["Ik | voel:verb | me:self* | niet goed", "I don't feel well."],
        ["Vandaag | voelt:verb | hij | zich:self* | beter", "Today he feels better."],
      ),
    ],
    examples: [
      example("Luca wordt wakker, maar hij voelt zich niet goed.", "Luca wakes up, but he doesn't feel well.", "voelt zich"),
      example("Bram voelt zich niet fit.", "Bram doesn't feel fit.", "voelt zich"),
      example("Opa is tachtig, maar hij voelt zich nog jong.", "Grandpa is eighty, but he still feels young.", "voelt zich"),
    ],
    exercises: [
      fill("Ik voel ", " niet goed.", ["me", "mij"], "I don't feel well.", "ik"),
      fill("Noor voelt ", " moe.", "zich", "Noor feels tired.", "zij"),
      fill("Wij voelen ", " fit.", "ons", "We feel fit.", "wij"),
      choice("Voel jij ", " goed?", ["zich", "je", "me"], 1, "Do you feel well?"),
      match("Connect the subject and the self word.", "ik=me | jij=je | hij=zich | wij=ons | zij (they)=zich", "me, je, zich, ons, zich"),
      spot("Hij voelt hem niet goed.", "hem", "zich", "He doesn't feel well."),
      build("Ik | voel | me | vandaag | niet | goed", "I don't feel well today."),
    ],
  },

  "graag-liever": {
    blocks: [
      text("Dutch has no verb for 'like doing'. You add graag to the verb: Ik fiets graag = I like cycling. To compare, use liever (rather) and het liefst (most of all)."),
      table(
        "graag → liever → het liefst",
        ["", "Dutch", "English"],
        ["like", "Ik drink graag thee.", "I like tea."],
        ["prefer", "Ik drink liever koffie.", "I'd rather have coffee."],
        ["like best", "Ik drink het liefst water.", "I like water best."],
      ),
      slots(
        "graag sits after the verb, like niet",
        ["Ik | lees:verb | graag:like* | boeken", "I like reading books."],
        ["Op zaterdag | speel:verb | ik | graag:like* | voetbal", "On Saturdays I like playing football."],
      ),
      text("Ik wil graag… = I'd like… (polite, in shops). To give an opinion use vinden: Ik vind de jas mooi. For things and people you really like: houden van (Ik hou van lezen)."),
    ],
    examples: [
      example("Nee, dank je. Ik drink liever thee.", "No, thanks. I'd rather have tea.", "liever"),
      example("Het liefst Italiaanse films, natuurlijk!", "Preferably Italian films, of course!", "Het liefst"),
      example("Ik wil graag een bruin brood.", "I'd like a brown loaf.", "graag"),
      example("Ze houdt van lezen", "She loves reading", "houdt van"),
    ],
    exercises: [
      fill("Ik fiets ", ".", "graag", "I like cycling.", "like"),
      choice("Ik drink ", " thee dan koffie.", ["graag", "liever", "het liefst"], 1, "I prefer tea to coffee."),
      match("Connect the Dutch and the English.", "Ik eet graag vis.=I like fish. | Ik eet liever vis.=I'd rather have fish. | Ik eet het liefst vis.=I like fish best.", "graag, liever, het liefst"),
      transform("Say you like it (add graag):", "Ik lees.", ["Ik lees graag."], "I like reading."),
      build("Ik | eet | het liefst | pasta", "I like pasta best."),
      spot("Ik drink meer graag thee.", "meer", ["liever"], "I'd rather drink tea. (not 'meer graag': liever)", "Ik drink liever thee."),
    ],
  },

  comparatives: {
    blocks: [
      text("To compare, add -er: groot → groter. For 'the most', add -st: het grootst (before a noun: de grootste). After r, add -der: duur → duurder."),
      table(
        "Comparing",
        ["", "more", "most"],
        ["groot (big)", "groter", "het grootst"],
        ["warm", "warmer", "het warmst"],
        ["duur (expensive)", "duurder", "het duurst"],
        ["goed", "beter", "het best"],
        ["veel", "meer", "het meest"],
        ["graag", "liever", "het liefst"],
      ),
      text("Than = dan: Leiden is kleiner dan Amsterdam. (Many Dutch people say 'als', but 'dan' is correct.) Too = te: de mouwen zijn te lang."),
    ],
    examples: [
      example("Morgen, zaterdag, schijnt de zon en het wordt warmer: achttien graden.", "Tomorrow, Saturday, the sun is out and it gets warmer: eighteen degrees.", "warmer"),
      example("Dit is de beste pasta van Leiden!", "This is the best pasta in Leiden!", "beste"),
      example("Hij is warm en zacht, maar de mouwen zijn te lang.", "It's warm and soft, but the sleeves are too long.", "te lang"),
      example("Dat is te duur. Heeft u ook goedkopere?", "That's too expensive. Do you have cheaper ones?", "te duur", "goedkopere"),
    ],
    exercises: [
      fill("Een fiets is ", " dan een auto.", "goedkoper", "A bike is cheaper than a car.", "goedkoop"),
      fill("Deze jas is ", " dan die jas.", "duurder", "This coat is more expensive than that coat.", "duur"),
      choice("Thijs is zestien en Noor is eenentwintig. Noor is ", " dan Thijs.", ["oud", "ouder", "het oudst"], 1, "Noor is older than Thijs."),
      match("Connect the word and its comparing form.", "goed=beter | veel=meer | graag=liever | groot=groter", "beter, meer, liever, groter: learn the first three by heart"),
      spot("Mijn kamer is groter als jouw kamer.", "als", "dan", "My room is bigger than your room."),
      build("De schoenen | zijn | te | klein", "The shoes are too small."),
    ],
  },
};
