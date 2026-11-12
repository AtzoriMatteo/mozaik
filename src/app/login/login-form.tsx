"use client";

import { useActionState } from "react";
import { sendLoginLink, signInWithGitHub, type LoginState, type OAuthState } from "./actions";

const initial: LoginState = { status: "idle" };
const initialOAuth: OAuthState = { message: null };

/** One-tap login with GitHub: no email, so no waiting and no limits. */
export function GitHubLogin() {
  const [state, action, pending] = useActionState(signInWithGitHub, initialOAuth);
  return (
    <form action={action} className="stack">
      <div>
        <button type="submit" className="button github-button" disabled={pending}>
          <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.22 1.87.87 2.33.67.07-.52.28-.87.5-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.66 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z"
            />
          </svg>
          {pending ? "Opening GitHub…" : "Continue with GitHub"}
        </button>
      </div>
      {state.message ? <p className="error" role="alert">{state.message}</p> : null}
    </form>
  );
}

export function LoginForm() {
  const [state, action, pending] = useActionState(sendLoginLink, initial);

  if (state.status === "sent") {
    return (
      <p className="lede" role="status">
        Check your inbox. We sent a login link to {state.email}. Open it on this device.
      </p>
    );
  }

  return (
    <form action={action} className="stack" noValidate>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          autoFocus
          aria-describedby={state.status === "error" ? "login-error" : undefined}
        />
      </div>
      {state.status === "error" ? (
        <p id="login-error" className="error" role="alert">{state.message}</p>
      ) : null}
      <div>
        <button type="submit" className="button" disabled={pending}>
          {pending ? "Sending login link…" : "Send login link"}
        </button>
      </div>
    </form>
  );
}
