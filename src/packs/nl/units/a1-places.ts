import type { UnitContent } from "./types";
import { buurmanCheckpoint, buurmanTexts, eenNieuweBuurman } from "../stories/een-nieuwe-buurman";

export const wonen: UnitContent = {
  id: "a1-wonen",
  level: "A1",
  title: "Wonen en de stad",
  titleTranslation: "Home and town",
  canDo: [
    "Describe your home: rooms, furniture, where things are",
    "Ask for directions and understand simple answers",
    "Understand where places are: links, rechts, naast, tussen…",
  ],
  // One street, a different lead each unit (Matteo, 17 Nov 2026): Kwame moves in.
  story: eenNieuweBuurman,
  texts: buurmanTexts,
  sequence: [
    "buurman-1-kamer-te-huur", "kwame-belt-over-de-kamer", "adjective-e",
    "buurman-2-verhuizen", "een-kamer-bekijken", "prepositions",
    "buurman-3-de-weg-vragen", "in-de-bus", "imperative",
    "welke-bak", "write", "buurman-4-videobellen", "een-voicemail", "words", "check",
  ],
  checkpoint: buurmanCheckpoint,
};

export const werkEnStudie: UnitContent = {
  id: "a1-werk-en-studie",
  level: "A1",
  title: "Werk en studie",
  titleTranslation: "Work and study",
  canDo: [
    "Talk about your studies or job in simple terms",
    "Understand classroom language: questions, answers, instructions",
    "Ask about a simple job: hours, days, pay",
  ],
  texts: [
    {
      id: "de-taalles",
      level: "A1",
      title: "De taalles",
      titleTranslation: "The language class",
      grammar: ["questions", "present-regular", "verb-second", "pronouns-subject", "negation"],
      paragraphs: [
        [
          {
            text: "De taalles is op maandag en woensdag van zeven tot negen uur 's avonds.",
            translation: "The language class is on Mondays and Wednesdays from seven to nine in the evening.",
          },
          {
            text: "In de klas zitten twaalf studenten uit tien verschillende landen.",
            translation: "There are twelve students in the class from ten different countries.",
          },
          {
            text: "De lerares heet Ingrid. Ze is aardig, maar ook streng.",
            translation: "The teacher is called Ingrid. She's nice, but also strict.",
          },
          {
            text: "In de les spreken we alleen Nederlands, zegt ze. Geen Engels!",
            translation: "In class we only speak Dutch, she says. No English!",
          },
        ],
        [
          {
            text: "Vandaag leren ze nieuwe woorden over het lichaam: het hoofd, de hand, de buik.",
            translation: "Today they're learning new words about the body: the head, the hand, the stomach.",
          },
          {
            text: "Ingrid stelt een vraag: \"Fatima, wat doe je met je handen?\"",
            translation: "Ingrid asks a question: \"Fatima, what do you do with your hands?\"",
          },
          {
            text: "Fatima denkt even na. \"Ik schrijf met mijn handen. En ik eet ermee.\"",
            translation: "Fatima thinks for a moment. \"I write with my hands. And I eat with them.\"",
          },
          {
            text: "\"Heel goed! Dat is een goed antwoord.\"",
            translation: "\"Very good! That's a good answer.\"",
          },
        ],
        [
          {
            text: "Dan is Luca aan de beurt. \"Luca, lees de tekst op bladzijde twintig, alsjeblieft.\"",
            translation: "Then it's Luca's turn. \"Luca, read the text on page twenty, please.\"",
          },
          {
            text: "Luca opent zijn boek en leest langzaam.",
            translation: "Luca opens his book and reads slowly.",
          },
          {
            text: "Het woord \"verschrikkelijk\" is erg moeilijk. Iedereen lacht, ook Luca.",
            translation: "The word \"verschrikkelijk\" is very difficult. Everyone laughs, Luca too.",
          },
          {
            text: "\"Geen probleem,\" zegt Ingrid. \"Nederlands is geen makkelijke taal. Zeg het nog een keer.\"",
            translation: "\"No problem,\" says Ingrid. \"Dutch isn't an easy language. Say it once more.\"",
          },
        ],
        [
          {
            text: "Na de les krijgen ze huiswerk: tien zinnen schrijven over hun familie.",
            translation: "After class they get homework: write ten sentences about their family.",
          },
          {
            text: "Luca schrijft ze die avond nog, aan de keukentafel.",
            translation: "Luca writes them that same evening, at the kitchen table.",
          },
          {
            text: "Noor kijkt mee. \"Hier moet geen 'de' staan, maar 'het'. Het is het kind, niet de kind.\"",
            translation: "Noor looks over his shoulder. \"This shouldn't be 'de', it should be 'het'. It's het kind, not de kind.\"",
          },
          {
            text: "Luca zucht. De en het. Dat is echt het moeilijkste van het Nederlands.",
            translation: "Luca sighs. De and het. That's really the hardest thing about Dutch.",
          },
        ],
      ],
    },
    {
      id: "een-bijbaan",
      level: "A1",
      title: "Een bijbaan",
      titleTranslation: "A part-time job",
      grammar: ["modal-verbs", "questions", "time-numbers", "conjunctions", "object-pronouns"],
      paragraphs: [
        [
          {
            text: "Luca wil graag een bijbaan. Hij wil wat extra geld verdienen, want Leiden is duur.",
            translation: "Luca would like a part-time job. He wants to earn some extra money, because Leiden is expensive.",
          },
          {
            text: "Zijn studie kost veel, de huur is hoog, dus hij heeft niet genoeg geld.",
            translation: "His studies cost a lot, the rent is high, so he doesn't have enough money.",
          },
          {
            text: "Bram werkt in een café. \"Wij zoeken iemand voor het weekend,\" zegt hij. \"Stuur een mail naar mijn baas.\"",
            translation: "Bram works in a café. \"We're looking for someone for the weekend,\" he says. \"Send my boss an email.\"",
          },
          {
            text: "Luca schrijft een korte mail. Twee dagen later belt de baas hem.",
            translation: "Luca writes a short email. Two days later the boss calls him.",
          },
        ],
        [
          {
            text: "\"Goedemiddag, met Kees van café De Burcht. Spreek ik met Luca?\"",
            translation: "\"Good afternoon, this is Kees from café De Burcht. Am I speaking to Luca?\"",
          },
          { text: "\"Ja, daar spreekt u mee.\"", translation: "\"Yes, speaking.\"" },
          {
            text: "\"Je wilt hier graag werken, hè? Heb je ervaring in een café?\"",
            translation: "\"You'd like to work here, right? Do you have experience in a café?\"",
          },
          {
            text: "\"Ja, in Italië werk ik elke zomer in een bar. Ik kan heel goed koffie maken.\"",
            translation: "\"Yes, in Italy I work in a bar every summer. I can make really good coffee.\"",
          },
          {
            text: "\"Een Italiaan die koffie kan maken. Perfect! Kun je op zaterdag en zondag werken?\"",
            translation: "\"An Italian who can make coffee. Perfect! Can you work on Saturdays and Sundays?\"",
          },
          {
            text: "\"Ja, dat kan. Hoeveel uur per week is het?\"",
            translation: "\"Yes, I can. How many hours a week is it?\"",
          },
          {
            text: "\"Twaalf uur, van tien tot vier. Je krijgt dertien euro per uur.\"",
            translation: "\"Twelve hours, from ten to four. You get thirteen euros an hour.\"",
          },
        ],
        [
          {
            text: "\"Kom morgen even langs, dan kunnen we praten. Om twee uur?\"",
            translation: "\"Drop by tomorrow, then we can talk. At two?\"",
          },
          {
            text: "\"Ja, goed. Tot morgen!\"",
            translation: "\"Yes, good. See you tomorrow!\"",
          },
          {
            text: "De volgende dag zit Luca in het kantoor van Kees, achter de bar. Op zondag is het café vaak rustig, dus hij werkt elke zaterdag en één zondag per maand.",
            translation: "The next day Luca is sitting in Kees's office, behind the bar. On Sundays the café is often quiet, so he works every Saturday and one Sunday a month.",
          },
          {
            text: "Luca is blij. Een baan in een café, met Bram als collega! Dat wordt leuk.",
            translation: "Luca is happy. A job in a café, with Bram as a colleague! That's going to be fun.",
          },
          {
            text: "Maar hij moet nog veel leren: de namen van alle drankjes in het Nederlands.",
            translation: "But he still has a lot to learn: the names of all the drinks in Dutch.",
          },
        ],
      ],
    },
  ],
};
