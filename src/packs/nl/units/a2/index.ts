import type { Unit } from "@/core/content";
import { verleden } from "./verleden";
import { werk } from "./werk";

/** The A2 course, in suggested order. Each unit is complete in its own file. */
export const unitsA2: readonly Unit[] = [verleden, werk];
