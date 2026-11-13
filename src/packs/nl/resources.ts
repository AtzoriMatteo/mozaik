import type { Resource } from "@/core/resources";

/**
 * Real Dutch to watch, hear and read next to the course. Links only, checked
 * by hand in November 2026; `npm run check-links` flags any that stop working.
 * At A1 there isn't much real material yet, so this list is short on purpose.
 */
export const resources: Resource[] = [
  /* ---------- Listen ---------- */
  {
    id: "potje-nederlands-1",
    level: "A1",
    kind: "listen",
    title: "Potje Nederlands, episode 1: Dit ben ik",
    by: "University of Groningen Language Centre",
    url: "https://www.rug.nl/language-centre/develop-yourself/potje-nederlands?lang=en",
    why: "A podcast made for A1: slow, clear Dutch about introducing yourself.",
    how: "Pause when she asks you something and answer out loud. No transcript, on purpose.",
    units: ["a1-kennismaken"],
  },
  {
    id: "potje-nederlands-2",
    level: "A1",
    kind: "listen",
    title: "Potje Nederlands, episode 2: Mijn gezin",
    by: "University of Groningen Language Centre",
    url: "https://www.rug.nl/language-centre/develop-yourself/potje-nederlands?lang=en",
    why: "Family words you know from this unit, in someone else's voice.",
    how: "Listen once, then again and answer the questions about your own family.",
    units: ["a1-familie"],
  },
  {
    id: "potje-nederlands-3",
    level: "A1",
    kind: "listen",
    title: "Potje Nederlands, episode 3: Boodschappen doen",
    by: "University of Groningen Language Centre",
    url: "https://www.rug.nl/language-centre/develop-yourself/potje-nederlands?lang=en",
    why: "Shopping at A1 level, with pauses to answer.",
    how: "Note three words you hear that are also in the unit.",
    units: ["a1-eten"],
  },
  {
    id: "potje-nederlands-4",
    level: "A1",
    kind: "listen",
    title: "Potje Nederlands, episode 4: Mijn kledingkast",
    by: "University of Groningen Language Centre",
    url: "https://www.rug.nl/language-centre/develop-yourself/potje-nederlands?lang=en",
    why: "Clothes and colours at A1 level.",
    how: "Say what you're wearing today, in Dutch, before you listen.",
    units: ["a1-kleren"],
  },

  {
    id: "potje-nederlands-5",
    level: "A1",
    kind: "listen",
    title: "Potje Nederlands, episode 5: Mijn favoriete huis",
    by: "University of Groningen Language Centre",
    url: "https://www.rug.nl/language-centre/develop-yourself/potje-nederlands?lang=en",
    why: "Rooms and furniture, slowly and clearly.",
    how: "Describe your own room out loud when she asks.",
    units: ["a1-wonen"],
  },
  /* ---------- Watch ---------- */
  {
    id: "easy-dutch",
    level: "A1",
    kind: "watch",
    title: "Easy Dutch",
    by: "Easy Languages",
    url: "https://www.youtube.com/c/EasyDutch",
    why: "Real people in the street, with Dutch and English subtitles.",
    how: "Pick a short episode on food or meeting people. Dutch subtitles on, 10 minutes.",
    units: ["a1-kennismaken", "a1-eten"],
  },
  {
    id: "dutchies-to-be",
    level: "A1",
    kind: "watch",
    title: "Dutchies to be",
    by: "Kim",
    url: "https://www.youtube.com/c/DutchiestobeLearnDutchwithKim",
    why: "Short sketches of everyday situations for beginners.",
    how: "Watch one sketch, then replay it and say the lines with her.",
  },
  {
    id: "bart-de-pau",
    level: "A1",
    kind: "watch",
    title: "Learn Dutch with Bart de Pau",
    by: "Bart de Pau",
    url: "https://www.youtube.com/c/LearndutchOrg",
    why: "Grammar and pronunciation explained in English, with humour.",
    how: "After a grammar lesson here, look for his video on the same point.",
  },
  {
    id: "jeugdjournaal",
    level: "A1",
    kind: "watch",
    title: "NOS Jeugdjournaal",
    by: "NOS",
    url: "https://www.youtube.com/c/jeugdjournaal",
    why: "The daily news for children: simple words, clear speech, short items.",
    how: "Watch one item a day with subtitles. Catching the topic is already a win.",
    stretch: true,
  },

  /* ---------- Read ---------- */
  {
    id: "nijntje",
    level: "A1",
    kind: "read",
    title: "Nijntje (Miffy) picture books",
    by: "Dick Bruna",
    url: "https://www.wikiwand.com/nl/Nijntje",
    why: "Four short lines per page, a picture for every line: real Dutch you can read at A1.",
    how: "Borrow one from the library and read it aloud. Each book takes ten minutes.",
    units: ["a1-familie", "a1-vrije-tijd"],
  },

  /* ---------- Practise ---------- */
  {
    id: "taalklas",
    level: "A1",
    kind: "practise",
    title: "Taalklas.nl",
    by: "Oefenen.nl",
    url: "https://oefenen.nl/over_ons/english_information/English",
    why: "Free videos and exercises about daily life in the Netherlands, made for A1.",
    how: "Use it as a second voice on the same topics: one short lesson after a Mozaik unit.",
  },
];
