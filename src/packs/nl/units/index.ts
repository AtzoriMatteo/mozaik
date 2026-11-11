import type { Unit } from "@/core/content";
import { familie, kennismaken } from "./a1-people";
import { dagEnTijd, eten } from "./a1-daily";
import { wonen, werkEnStudie } from "./a1-places";
import { gezondheid, vrijeTijd } from "./a1-life";

/** The Dutch course, in suggested order. */
export const units: readonly Unit[] = [
  kennismaken,
  familie,
  eten,
  dagEnTijd,
  wonen,
  werkEnStudie,
  gezondheid,
  vrijeTijd,
];
