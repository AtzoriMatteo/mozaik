import type { Unit } from "@/core/content";

/** A unit's reading side; listening and speaking are attached in ./index.ts. */
export type UnitContent = Omit<Unit, "listening" | "speaking" | "writing">;
