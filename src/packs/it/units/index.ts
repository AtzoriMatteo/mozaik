import type { Unit } from "@/core/content";
import { ciao } from "./u1-ciao";
import { piacere } from "./u2-piacere";
import { famiglia } from "./u3-famiglia";
import { alBar } from "./u4-al-bar";

/** The Italian course, in suggested order. */
export const units: readonly Unit[] = [ciao, piacere, famiglia, alBar];
