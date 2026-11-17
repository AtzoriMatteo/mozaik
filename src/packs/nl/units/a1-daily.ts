import type { UnitContent } from "./types";
import { avondTexts, italiaanseAvond } from "../stories/italiaanse-avond";
import { avondCheckpoint } from "../stories/italiaanse-avond-more";
import { eenDrukkeWeek, weekCheckpoint, weekTexts } from "../stories/een-drukke-week";

export const eten: UnitContent = {
  id: "a1-eten",
  level: "A1",
  title: "Eten en boodschappen",
  titleTranslation: "Food and shopping",
  story: italiaanseAvond,
  canDo: [
    "Buy food at a market or shop and ask what it costs",
    "Understand prices and amounts",
    "Follow and give simple cooking instructions",
  ],
  // The unit is one story: its texts are the episodes (Matteo, 17 Nov 2026).
  texts: avondTexts,
  sequence: [
    "avond-1-een-plan",
    "voicemail-van-fatima",
    "er-is",
    "avond-2-in-de-supermarkt",
    "omroep-supermarkt",
    "demonstratives",
    "de-vries-belt",
    "avond-3-op-de-markt",
    "bij-de-kaaskraam",
    "diminutives",
    "write",
    "avond-4-eet-smakelijk",
    "words",
    "check",
  ],
  checkpoint: avondCheckpoint,
};

export const dagEnTijd: UnitContent = {
  id: "a1-dag-en-tijd",
  level: "A1",
  title: "Dag en tijd",
  titleTranslation: "Days and time",
  canDo: [
    "Describe your daily routine",
    "Tell the time, including Dutch 'half' times",
    "Make an appointment: suggest a day, time and place",
  ],
  // One street, a different lead each unit (Matteo, 17 Nov 2026): Ruth and Jayden.
  story: eenDrukkeWeek,
  texts: weekTexts,
  sequence: [
    "week-1-vroeg-op", "ruth-belt-de-tandarts", "separable-verbs",
    "week-2-een-afspraak", "hoe-laat-is-het", "time-numbers",
    "week-3-half-vier", "de-tandarts-is-gesloten", "verb-second",
    "op-het-perron", "write", "week-4-vrijdagavond", "de-dag-van-mehmet", "words", "check",
  ],
  checkpoint: weekCheckpoint,
};
