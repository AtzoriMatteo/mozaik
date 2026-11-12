import type { Unit } from "@/core/content";
import { familie, kennismaken } from "./a1-people";
import { dagEnTijd, eten } from "./a1-daily";
import { wonen, werkEnStudie } from "./a1-places";
import { gezondheid, vrijeTijd } from "./a1-life";
import { listeningA1 } from "../listening/a1";
import { speakingA1 } from "../speaking/a1";

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
].map((u) => ({ ...u, listening: listeningA1[u.id] ?? [], speaking: speakingA1[u.id] }));
