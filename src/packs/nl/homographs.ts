import type { Homograph } from "@/core/language-pack";

/**
 * Dutch words that are a noun and something else. "Na twee weken was de pijn
 * weg" is "away", not "de weg"; "we hebben geboekt" is "to book", not "books".
 */
export const homographs: Readonly<Record<string, Homograph>> = {
  weg: { noun: "road, way", other: "away" },
  weer: { noun: "weather", other: "again" },
  dag: { noun: "day", other: "bye" },
  stuk: { noun: "piece", other: "broken" },
  fout: { noun: "mistake", other: "wrong" },
  leven: { noun: "life", other: "to live" },
  bel: { noun: "bell, doorbell", other: "to call", otherLemma: "bellen" },
  reden: { noun: "reason", other: "to drive, to ride", otherLemma: "rijden" },
  boeken: { noun: "book", nounLemma: "boek", other: "to book" },
  landen: { noun: "country", nounLemma: "land", other: "to land" },
  zakken: { noun: "bag", nounLemma: "zak", other: "to drop, to fall; to fail (an exam)" },
  grappen: { noun: "joke", nounLemma: "grap", other: "to joke" },
  zorgen: { noun: "worry, care", nounLemma: "zorg", other: "to take care (of); to worry" },
  bakken: { noun: "bin, tray", nounLemma: "bak", other: "to bake, to fry" },
  stemmen: { noun: "voice; vote", nounLemma: "stem", other: "to vote" },
  leiden: { noun: "Leiden (a city)", other: "to lead", nounWhenCapital: true },
  enkel: { noun: "ankle", other: "single, only" },
  eten: { noun: "food, meal", other: "to eat" },
  koken: { noun: "cooking", other: "to cook" },
  antwoorden: { noun: "answer", nounLemma: "antwoord", other: "to answer" },
  planten: { noun: "plant", nounLemma: "plant", other: "to plant" },
  fietsen: { noun: "bike", nounLemma: "fiets", other: "to cycle" },
};
