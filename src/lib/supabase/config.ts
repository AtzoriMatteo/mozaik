/**
 * Supabase connection settings, read from environment variables.
 * When they are missing, Mozaik runs in "preview mode": no login, nothing
 * saved. That keeps local development and early previews friction-free.
 */
export type SupabaseEnv = { url: string; key: string };

export function getSupabaseEnv(): SupabaseEnv | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? { url, key } : null;
}

export function isAuthEnabled(): boolean {
  return getSupabaseEnv() !== null;
}
