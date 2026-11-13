"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "./config";

let client: SupabaseClient | null = null;

/** One shared Supabase client for the browser, or null in preview mode. */
export function getBrowserSupabase(): SupabaseClient | null {
  const env = getSupabaseEnv();
  if (!env) return null;
  client ??= createBrowserClient(env.url, env.key);
  return client;
}
