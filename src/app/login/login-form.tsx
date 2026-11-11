"use client";

import { useActionState } from "react";
import { sendLoginLink, type LoginState } from "./actions";

const initial: LoginState = { status: "idle" };

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
