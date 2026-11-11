"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { SavedWord } from "./types";

/**
 * Server-side access to a learner's saved words. Row Level Security in the
 * database guarantees each learner only ever touches their own rows.
 */

type Row = {
  language: string;
  word: string;
  surface: string;
  base: string | null;
  meaning: string;
  sentence: string;
  text_id: string;
  stage?: number;
  due_at?: string;
};

const fromRow = (r: Row): SavedWord => ({
  language: r.language,
  word: r.word,
  surface: r.surface,
  base: r.base ?? undefined,
  meaning: r.meaning,
  sentence: r.sentence,
  textId: r.text_id,
  stage: r.stage,
  dueAt: r.due_at,
});

const BASE_COLUMNS = "language, word, surface, base, meaning, sentence, text_id";
// Postgres "undefined column": the review migration hasn't been run yet.
const MISSING_COLUMN = "42703";

async function client() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) throw new Error("Saving needs login, which isn't connected.");
  return supabase;
}

export async function listSavedWords(
  language: string,
): Promise<{ words: SavedWord[]; reviewReady: boolean }> {
  const supabase = await client();
  const full = await supabase
    .from("saved_words")
    .select(`${BASE_COLUMNS}, stage, due_at`)
    .eq("language", language)
    .order("created_at", { ascending: true });

  if (!full.error) return { words: (full.data as Row[]).map(fromRow), reviewReady: true };

  if (full.error.code === MISSING_COLUMN) {
    const basic = await supabase
      .from("saved_words")
      .select(BASE_COLUMNS)
      .eq("language", language)
      .order("created_at", { ascending: true });
    if (!basic.error) return { words: (basic.data as Row[]).map(fromRow), reviewReady: false };
  }
  throw new Error(`Couldn't load saved words: ${full.error.message}`);
}

export async function saveWord(word: SavedWord): Promise<void> {
  const supabase = await client();
  const { error } = await supabase.from("saved_words").upsert(
    {
      language: word.language,
      word: word.word,
      surface: word.surface,
      base: word.base ?? null,
      meaning: word.meaning,
      sentence: word.sentence,
      text_id: word.textId,
    },
    { onConflict: "user_id,language,word", ignoreDuplicates: true },
  );
  if (error) throw new Error(`Couldn't save "${word.surface}": ${error.message}`);
}

export async function unsaveWord(language: string, word: string): Promise<void> {
  const supabase = await client();
  const { error } = await supabase
    .from("saved_words")
    .delete()
    .eq("language", language)
    .eq("word", word);
  if (error) throw new Error(`Couldn't remove "${word}": ${error.message}`);
}

export async function recordReview(
  language: string,
  word: string,
  stage: number,
  dueAt: string,
): Promise<void> {
  const supabase = await client();
  const { error } = await supabase
    .from("saved_words")
    .update({ stage, due_at: dueAt, reviewed_at: new Date().toISOString() })
    .eq("language", language)
    .eq("word", word);
  if (error) throw new Error(`Couldn't save your review: ${error.message}`);
}
