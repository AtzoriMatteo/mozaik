import type { UnitContent } from "./types";
import { deFamilieYilmaz, familieCheckpoint, familieTexts } from "../stories/de-familie-yilmaz";
import { martaCheckpoint, martaIsNieuw, martaTexts } from "../stories/marta-is-nieuw";

/**
 * Cast (recurs through A1): Luca, an Italian student new in Leiden; his
 * housemates Noor (from Groningen, studies medicine) and Bram (from Leiden,
 * works in a café); their neighbour mevrouw De Vries; Fatima, Luca's
 * classmate in Dutch class.
 */

export const kennismaken: UnitContent = {
  id: "a1-kennismaken",
  level: "A1",
  title: "Kennismaken",
  titleTranslation: "Meeting people",
  canDo: [
    "Say who you are, where you're from and what you do",
    "Ask someone's name and where they live",
    "Choose between jij and u",
  ],
  // One street, a different lead each unit (Matteo, 18 Nov 2026): Marta moves in.
  story: martaIsNieuw,
  texts: martaTexts,
  sequence: [
    "marta-1-nieuw-in-leiden", "de-eerste-les", "pronouns-subject",
    "marta-2-de-buren", "bij-de-balie", "zijn-hebben",
    "marta-3-een-taalmaatje", "marta-en-sanne", "present-regular",
    "waar-kom-je-vandaan", "write", "marta-4-een-pakketje", "op-een-feestje", "words", "check",
  ],
  checkpoint: martaCheckpoint,
};

export const familie: UnitContent = {
  id: "a1-familie",
  level: "A1",
  title: "Familie",
  titleTranslation: "Family",
  canDo: [
    "Talk about your family: who they are, their age, what they do",
    "Say whose something is (mijn, jouw, zijn, haar…)",
    "Have a simple phone call with someone close",
  ],
  // One street, a different lead each unit (Matteo, 18 Nov 2026): the Yilmaz family.
  story: deFamilieYilmaz,
  texts: familieTexts,
  sequence: [
    "familie-1-de-familie-yilmaz", "noor-over-haar-familie", "possessives",
    "familie-2-hoor-je-mij", "de-foto-van-bram", "articles",
    "familie-3-opa-wordt-tachtig", "een-kringverjaardag", "plurals",
    "in-de-kledingwinkel", "write", "familie-4-een-mail-uit-istanbul", "de-kleinkinderen", "words", "check",
  ],
  checkpoint: familieCheckpoint,
};
