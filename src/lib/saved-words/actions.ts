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
};

const fromRow = (r: Row): SavedWord => ({
  language: r.language,
  word: r.word,
  surface: r.surface,
  base: r.base ?? undefined,
  meaning: r.meaning,
  sentence: r.sentence,
  textId: r.text_id,
});

async function client() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) throw new Error("Saving needs login, which isn't connected.");
  return supabase;
}

export async function listSavedWords(language: string): Promise<SavedWord[]> {
  const supabase = await client();
  const { data, error } = await supabase
    .from("saved_words")
    .select("language, word, surface, base, meaning, sentence, text_id")
    .eq("language", language)
    .order("created_at", { ascending: true });
  if (error) throw new Error(`Couldn't load saved words: ${error.message}`);
  return (data as Row[]).map(fromRow);
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
