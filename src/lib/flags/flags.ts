"use client";

import { getBrowserSupabase } from "@/lib/supabase/browser";

/** A sentence someone thinks sounds wrong or unnatural. */
export type Flag = {
  id: string;
  language: string;
  item_kind: string;
  item_id: string;
  sentence: string;
  note: string | null;
  status: "open" | "fixed" | "kept";
  created_at: string;
};

export type FlagTarget = { language: string; itemKind: "text" | "listening"; itemId: string };

async function client() {
  const supabase = getBrowserSupabase();
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session ? { supabase, userId: data.session.user.id } : null;
}

export async function sendFlag(target: FlagTarget, sentence: string, note: string): Promise<"sent" | "no-login" | "not-ready" | "error"> {
  const c = await client();
  if (!c) return "no-login";
  const { error } = await c.supabase.from("flags").insert({
    language: target.language,
    item_kind: target.itemKind,
    item_id: target.itemId,
    sentence,
    note: note.trim() || null,
  });
  if (!error) return "sent";
  return error.code === "42P01" ? "not-ready" : "error";
}

/** Own flags, or every flag for an admin. */
export async function loadFlags(): Promise<{ flags: Flag[]; admin: boolean; ready: boolean }> {
  const c = await client();
  if (!c) return { flags: [], admin: false, ready: false };
  const [flags, admin] = await Promise.all([
    c.supabase.from("flags").select("id, language, item_kind, item_id, sentence, note, status, created_at").order("created_at", { ascending: false }),
    c.supabase.from("admins").select("user_id").eq("user_id", c.userId).maybeSingle(),
  ]);
  if (flags.error) return { flags: [], admin: false, ready: false };
  return { flags: (flags.data ?? []) as Flag[], admin: Boolean(admin.data), ready: true };
}

export async function setFlagStatus(ids: string[], status: Flag["status"]): Promise<boolean> {
  const c = await client();
  if (!c || ids.length === 0) return false;
  const { error } = await c.supabase.from("flags").update({ status }).in("id", ids);
  return !error;
}

/**
 * The open flags as a message to paste to Claude: grouped per sentence, with
 * where it is in the course and what people said.
 */
export function flagsForClaude(flags: Flag[]): string {
  const open = flags.filter((f) => f.status === "open");
  const groups = new Map<string, Flag[]>();
  for (const f of open) {
    const key = `${f.item_kind}|${f.item_id}|${f.sentence}`;
    groups.set(key, [...(groups.get(key) ?? []), f]);
  }
  const lines = [...groups.values()].map((g, i) => {
    const f = g[0];
    const notes = g.map((x) => x.note).filter(Boolean);
    const times = g.length > 1 ? ` (flagged ${g.length}×)` : "";
    const said = notes.length ? `\n   Notes: ${notes.map((n) => `"${n}"`).join("; ")}` : "";
    return `${i + 1}. ${f.item_kind} "${f.item_id}" (${f.language})${times}\n   "${f.sentence}"${said}`;
  });
  return [
    `Mozaik: ${groups.size} sentence${groups.size === 1 ? "" : "s"} flagged as sounding odd. Please check each one,`,
    "fix the Dutch in the repo where it really is wrong or unnatural (keeping translations, tasks",
    "and word help in step), and tell me which ones were fine as they are.",
    "",
    ...lines,
  ].join("\n");
}
