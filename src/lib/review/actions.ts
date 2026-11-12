"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Schedule } from "@/core/review-items";

// Postgres "undefined table": migration 0003 hasn't been run yet.
const MISSING_TABLE = "42P01";

async function client() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) throw new Error("Review needs login, which isn't connected.");
  return supabase;
}

export async function listSchedules(
  language: string,
): Promise<{ schedules: [string, Schedule][]; ready: boolean }> {
  const supabase = await client();
  const { data, error } = await supabase
    .from("review_items")
    .select("item_id, stage, due_at, introduced_at")
    .eq("language", language);
  if (error) {
    if (error.code === MISSING_TABLE || /review_items/.test(error.message)) return { schedules: [], ready: false };
    throw new Error(`Couldn't load your reviews: ${error.message}`);
  }
  return {
    ready: true,
    schedules: (data ?? []).map((r) => [
      r.item_id as string,
      { stage: r.stage as number, dueAt: r.due_at as string, introducedAt: r.introduced_at as string },
    ]),
  };
}

export async function saveSchedule(language: string, itemId: string, kind: string, s: Schedule): Promise<void> {
  const supabase = await client();
  const { error } = await supabase.from("review_items").upsert(
    {
      language,
      item_id: itemId,
      kind,
      stage: s.stage,
      due_at: s.dueAt,
      introduced_at: s.introducedAt,
      reviewed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,language,item_id" },
  );
  if (error) throw new Error(`Couldn't save your review: ${error.message}`);
}
