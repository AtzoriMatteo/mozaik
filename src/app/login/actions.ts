"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type LoginState =
  | { status: "idle" }
  | { status: "sent"; email: string; what: "link" | "confirm" | "reset" }
  | { status: "error"; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
import { MIN_PASSWORD } from "./rules";

const NOT_CONNECTED = "Login isn't connected yet. Mozaik is in preview mode.";
const RATE_LIMIT =
  "Too many emails in the last hour (the email service allows only a few). Use Google, or a password, or try again in an hour.";

async function origin() {
  const h = await headers();
  return h.get("origin") ?? `https://${h.get("host")}`;
}

function readEmail(formData: FormData): string | null {
  const email = String(formData.get("email") ?? "").trim();
  return EMAIL_PATTERN.test(email) ? email : null;
}

const BAD_EMAIL: LoginState = { status: "error", message: "Enter a valid email address, like name@example.com." };

/** Email + password: log in, or create an account (mode "signup"). */
export async function passwordLogin(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = readEmail(formData);
  if (!email) return BAD_EMAIL;
  const password = String(formData.get("password") ?? "");
  const mode = formData.get("mode") === "signup" ? "signup" : "login";
  if (mode === "signup" && password.length < MIN_PASSWORD) {
    return { status: "error", message: `Choose a password of at least ${MIN_PASSWORD} characters.` };
  }
  if (!password) return { status: "error", message: "Enter your password." };

  const supabase = await createSupabaseServerClient();
  if (!supabase) return { status: "error", message: NOT_CONNECTED };

  if (mode === "login") {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return {
        status: "error",
        message: /invalid login credentials/i.test(error.message)
          ? "That email and password don't match. If you've only used login links or Google so far, you don't have a password yet: use 'Forgot password?' to set one."
          : /email not confirmed/i.test(error.message)
            ? "Confirm your email first: open the link we sent you."
            : `Couldn't log in: ${error.message}`,
      };
    }
    redirect("/");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${await origin()}/auth/callback` },
  });
  if (error) {
    return {
      status: "error",
      message: /rate limit/i.test(error.message)
        ? RATE_LIMIT
        : /already registered|already exists/i.test(error.message)
          ? "There's already an account with this email. Log in instead."
          : `Couldn't create the account: ${error.message}`,
    };
  }
  // With email confirmation off, the account is ready straight away.
  if (data.session) redirect("/");
  return { status: "sent", email, what: "confirm" };
}

/** Send a link to choose a new password. */
export async function resetPassword(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = readEmail(formData);
  if (!email) return BAD_EMAIL;
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { status: "error", message: NOT_CONNECTED };
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${await origin()}/auth/callback?next=/account/password`,
  });
  if (error) {
    return { status: "error", message: /rate limit/i.test(error.message) ? RATE_LIMIT : `Couldn't send the email: ${error.message}` };
  }
  return { status: "sent", email, what: "reset" };
}

/** A one-time login link by email: no password at all. */
export async function sendLoginLink(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = readEmail(formData);
  if (!email) return BAD_EMAIL;
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { status: "error", message: NOT_CONNECTED };
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: `${await origin()}/auth/callback` },
  });
  if (error) {
    return {
      status: "error",
      message: /rate limit/i.test(error.message) ? RATE_LIMIT : `The login link couldn't be sent: ${error.message}`,
    };
  }
  return { status: "sent", email, what: "link" };
}

export type OAuthState = { message: string | null };
const PROVIDER_NAME = { google: "Google", github: "GitHub" } as const;

/** Log in with Google or GitHub: no email involved, so no email limits. */
export async function oauthLogin(provider: keyof typeof PROVIDER_NAME): Promise<OAuthState> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { message: NOT_CONNECTED };
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: `${await origin()}/auth/callback` },
  });
  if (error || !data.url) {
    return {
      message: /not enabled|unsupported provider/i.test(error?.message ?? "")
        ? `${PROVIDER_NAME[provider]} login isn't switched on yet. Use email for now.`
        : `${PROVIDER_NAME[provider]} login didn't start: ${error?.message ?? "no address returned"}`,
    };
  }
  redirect(data.url);
}

/** Set a new password (after a reset link, or to add one to an account). */
export async function setPassword(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  if (password.length < MIN_PASSWORD) {
    return { status: "error", message: `Choose a password of at least ${MIN_PASSWORD} characters.` };
  }
  const supabase = await createSupabaseServerClient();
  if (!supabase) return { status: "error", message: NOT_CONNECTED };
  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    return {
      status: "error",
      message: /session/i.test(error.message)
        ? "The reset link has expired. Ask for a new one from the login page."
        : `Couldn't save the password: ${error.message}`,
    };
  }
  redirect("/");
}
