import { NextResponse, type NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Login links, Google/GitHub and password-reset emails land here; we swap
 * the one-time code for a session, then go to `next` (a path on this site).
 */
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const supabase = await createSupabaseServerClient();

  if (code && supabase) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    const next = url.searchParams.get("next");
    const safe = next && next.startsWith("/") && !next.startsWith("//") ? next : "/";
    if (!error) return NextResponse.redirect(new URL(safe, url.origin));
  }

  return NextResponse.redirect(new URL("/login", url.origin));
}
