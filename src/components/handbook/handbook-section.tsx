"use client";

import { useLearningLanguage } from "@/components/learning-language";
import { HandbookTables } from "./handbook-tables";

/** One of the pack's Handbook sections, with a filter. */
export function HandbookSection({ section, filterLabel }: { section: "topics" | "phrases" | "spelling"; filterLabel: string }) {
  const { pack } = useLearningLanguage();
  const tables = pack?.handbook?.[section];
  if (!pack || !tables) return <p className="lede">Not available for this language yet.</p>;
  return <HandbookTables lang={pack.code} tables={tables} filterLabel={filterLabel} />;
}
