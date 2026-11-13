import type { WritingIssue } from "@/core/writing";

/**
 * LanguageTool's free public service (https://languagetool.org): an
 * open-source grammar and spelling checker. Optional, because the text
 * leaves the device. Limits: 20 checks a minute per person, 20 KB a check.
 */

type Match = {
  message: string;
  shortMessage?: string;
  offset: number;
  length: number;
  replacements: { value: string }[];
  rule: { issueType?: string; category?: { id?: string } };
};

export async function checkWithLanguageTool(text: string, language: string): Promise<WritingIssue[]> {
  const body = new URLSearchParams({ text, language, level: "default" });
  const res = await fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body,
  });
  if (res.status === 429) throw new Error("LanguageTool is busy: wait a minute and check again.");
  if (!res.ok) throw new Error(`LanguageTool couldn't check this right now (${res.status}).`);
  const data = (await res.json()) as { matches: Match[] };
  return data.matches.map((m) => ({
    start: m.offset,
    end: m.offset + m.length,
    kind: m.rule.issueType === "misspelling" ? "spelling" : m.rule.issueType === "style" ? "style" : "grammar",
    message: m.message,
    fix: m.replacements[0]?.value,
    source: "languagetool",
  }));
}
