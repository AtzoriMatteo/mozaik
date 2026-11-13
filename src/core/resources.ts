import type { CefrLevel, LanguagePack } from "./language-pack";

/**
 * Real-world material outside the course: videos, shows, podcasts, books.
 * Mozaik only links to it (published material can't be redistributed) and
 * never embeds players, so no third party tracks a visit to Mozaik.
 */
export type Resource = {
  id: string;
  level: CefrLevel;
  kind: "watch" | "listen" | "read" | "practise";
  title: string;
  /** Who makes it, e.g. "NOS" or "Dick Bruna". */
  by?: string;
  /** Plain https link that opens in a new tab. */
  url: string;
  /** Why it fits this level, in one line. */
  why: string;
  /** How to use it, in one line, e.g. "Dutch subtitles on, 10 minutes". */
  how: string;
  /** Units it goes well with (shown on those unit pages). */
  units?: string[];
  /** A little above the level: worth a try, no pressure. */
  stretch?: boolean;
};

export const RESOURCE_KIND_LABEL: Record<Resource["kind"], string> = {
  watch: "Watch",
  listen: "Listen",
  read: "Read",
  practise: "Practise",
};

export function resourcesFor(pack: LanguagePack, level: CefrLevel): Resource[] {
  return (pack.resources ?? []).filter((r) => r.level === level);
}
