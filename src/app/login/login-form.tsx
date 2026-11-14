"use client";

import { useActionState, useState } from "react";
import {
  oauthLogin,
  passwordLogin,
  resetPassword,
  sendLoginLink,
  setPassword,
  type LoginState,
  type OAuthState,
} from "./actions";
import { MIN_PASSWORD } from "./rules";

const idle: LoginState = { status: "idle" };
const noMessage: OAuthState = { message: null };

const GOOGLE = (
  <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z" />
    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z" />
    <path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33Z" />
    <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z" />
  </svg>
);

const GITHUB = (
  <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.22 1.87.87 2.33.67.07-.52.28-.87.5-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.66 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z"
    />
  </svg>
);

/** Google first (most people have it), GitHub as the quiet second. */
export function ProviderLogin() {
  const [google, googleAction, googlePending] = useActionState(() => oauthLogin("google"), noMessage);
  const [github, githubAction, githubPending] = useActionState(() => oauthLogin("github"), noMessage);
  const message = google.message ?? github.message;
  return (
    <div className="login-providers">
      <form action={googleAction}>
        <button type="submit" className="button provider-button" disabled={googlePending}>
          {GOOGLE}
          {googlePending ? "Opening Google…" : "Continue with Google"}
        </button>
      </form>
      <form action={githubAction}>
        <button type="submit" className="button button-quiet provider-button" disabled={githubPending}>
          {GITHUB}
          {githubPending ? "Opening GitHub…" : "Continue with GitHub"}
        </button>
      </form>
      {message ? <p className="error" role="alert">{message}</p> : null}
    </div>
  );
}

function Sent({ state }: { state: Extract<LoginState, { status: "sent" }> }) {
  const text = {
    link: `Check your inbox: we sent a login link to ${state.email}. Open it on this device.`,
    confirm: `Almost there: we sent an email to ${state.email}. Open the link in it to confirm your account.`,
    reset: `Check your inbox: we sent ${state.email} a link to choose a new password.`,
  }[state.what];
  return <p className="lede" role="status">{text}</p>;
}

/** Email and password, with sign-up, a reset link, and a password-free link as a fallback. */
export function EmailLogin() {
  const [mode, setMode] = useState<"login" | "signup" | "reset" | "link">("login");
  const [pwState, pwAction, pwPending] = useActionState(passwordLogin, idle);
  const [resetState, resetAction, resetPending] = useActionState(resetPassword, idle);
  const [linkState, linkAction, linkPending] = useActionState(sendLoginLink, idle);

  const state = mode === "reset" ? resetState : mode === "link" ? linkState : pwState;
  if (state.status === "sent") return <Sent state={state} />;

  const action = mode === "reset" ? resetAction : mode === "link" ? linkAction : pwAction;
  const pending = pwPending || resetPending || linkPending;
  const label = {
    login: pending ? "Logging in…" : "Log in",
    signup: pending ? "Creating your account…" : "Create account",
    reset: pending ? "Sending…" : "Send me a reset link",
    link: pending ? "Sending…" : "Send me a login link",
  }[mode];
  const withPassword = mode === "login" || mode === "signup";

  return (
    <form action={action} className="login-form" noValidate>
      <input type="hidden" name="mode" value={mode} />
      {withPassword ? (
        <div className="login-tabs" role="tablist" aria-label="Log in or create an account">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              className="login-tab"
              onClick={() => setMode(m)}
            >
              {m === "login" ? "Log in" : "Create account"}
            </button>
          ))}
        </div>
      ) : (
        <p className="login-mode-note">
          {mode === "reset"
            ? "We'll email you a link to choose a new password."
            : "We'll email you a link that logs you in, no password needed."}
        </p>
      )}

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required />
      </div>
      {withPassword ? (
        <div className="field">
          <div className="field-label-row">
            <label htmlFor="password">Password</label>
            {mode === "login" ? (
              <button type="button" className="text-button login-small" onClick={() => setMode("reset")}>
                Forgot password?
              </button>
            ) : (
              <span className="login-small">At least {MIN_PASSWORD} characters</span>
            )}
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            minLength={mode === "signup" ? MIN_PASSWORD : undefined}
            required
          />
        </div>
      ) : null}
      {state.status === "error" ? <p className="error" role="alert">{state.message}</p> : null}

      <button type="submit" className="button login-submit" disabled={pending}>
        {label}
      </button>

      <p className="login-alt">
        {withPassword ? (
          <button type="button" className="text-button" onClick={() => setMode("link")}>
            Email me a login link instead
          </button>
        ) : (
          <button type="button" className="text-button" onClick={() => setMode("login")}>
            Back to log in
          </button>
        )}
      </p>
    </form>
  );
}

/** Choose a new password (from a reset link), or add one to an account. */
export function NewPasswordForm() {
  const [state, action, pending] = useActionState(setPassword, idle);
  return (
    <form action={action} className="stack" noValidate>
      <div className="field">
        <label htmlFor="password">New password (at least {MIN_PASSWORD} characters)</label>
        <input id="password" name="password" type="password" autoComplete="new-password" minLength={MIN_PASSWORD} required autoFocus />
      </div>
      {state.status === "error" ? <p className="error" role="alert">{state.message}</p> : null}
      <div>
        <button type="submit" className="button" disabled={pending}>
          {pending ? "Saving…" : "Save password"}
        </button>
      </div>
    </form>
  );
}
