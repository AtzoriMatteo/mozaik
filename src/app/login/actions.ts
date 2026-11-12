"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type LoginState =
  | { status: "idle" }
  | { status: "sent"; email: string }
  | { status: "error"; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendLoginLink(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Enter a valid email address, like name@example.com." };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { status: "error", message: "Login isn't connected yet. Mozaik is in preview mode." };
  }

  const h = await headers();
  const origin = h.get("origin") ?? `https://${h.get("host")}`;
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: `${origin}/auth/callback` },
  });

  if (error) {
    return {
      status: "error",
      message: /rate limit/i.test(error.message)
        ? "Too many login emails in the last hour (the email service allows only a few). Use GitHub below, or try again in an hour."
        : `The login link couldn't be sent: ${error.message}`,
    };
  }
  return { status: "sent", email };
}

export type OAuthState = { message: string | null };

/** Log in with GitHub: no email involved, so no email limits. */
// useActionState passes the previous state; GitHub login doesn't need it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function signInWithGitHub(_prev: OAuthState): Promise<OAuthState> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { message: "Login isn't connected yet. Mozaik is in preview mode." };

  const h = await headers();
  const origin = h.get("origin") ?? `https://${h.get("host")}`;
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo: `${origin}/auth/callback` },
  });
  if (error || !data.url) {
    return {
      message: /not enabled|unsupported provider/i.test(error?.message ?? "")
        ? "GitHub login isn't switched on in Supabase yet. Use the email link for now."
        : `GitHub login didn't start: ${error?.message ?? "no address returned"}`,
    };
  }
  redirect(data.url);
}
