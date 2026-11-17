import type { UnitContent } from "./types";
import { fatimaZoektWerk, werkCheckpoint, werkTexts } from "../stories/fatima-zoekt-werk";
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
  // One street, a different lead each unit (Matteo, 17 Nov 2026): Fatima's weekend job.
  story: fatimaZoektWerk,
  texts: werkTexts,
  sequence: [
    "werk-1-in-de-taalles", "fatima-over-haar-werk", "questions",
    "werk-2-verkoper-gezocht", "fatima-belt-haar-moeder", "modal-verbs",
    "werk-3-het-gesprek", "de-eerste-werkdag", "jij-inversion",
    "wat-voor-werk-doet-u", "write", "werk-4-de-eerste-zaterdag", "koffie-op-kantoor", "words", "check",
  ],
  checkpoint: werkCheckpoint,
};
