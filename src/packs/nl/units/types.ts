import type { Unit } from "@/core/content";

/** A unit's reading side; listening material is attached in ./index.ts. */
export type UnitContent = Omit<Unit, "listening">;
