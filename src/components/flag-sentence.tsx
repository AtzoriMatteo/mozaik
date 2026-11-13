"use client";

import { useState } from "react";
import { sendFlag, type FlagTarget } from "@/lib/flags/flags";

/**
 * "Sounds odd?": flag a sentence whose Dutch seems wrong or unnatural.
 * Small and closed by default; a note is optional.
 */
export function FlagSentence({ target, sentence }: { target: FlagTarget; sentence: string }) {
  const [state, setState] = useState<"closed" | "open" | "sending" | "sent" | "no-login" | "not-ready" | "error">("closed");
  const [note, setNote] = useState("");

  if (state === "sent") return <p className="flag-done">Thanks, flagged. It will be checked.</p>;
  if (state === "no-login") return <p className="flag-done">Log in to flag sentences.</p>;
  if (state === "not-ready") return <p className="flag-done">Flagging isn&apos;t switched on yet.</p>;

  if (state === "closed") {
    return (
      <button type="button" className="flag-open" onClick={() => setState("open")}>
        Sounds odd?
      </button>
    );
  }

  return (
    <form
      className="flag-form"
      onSubmit={async (e) => {
        e.preventDefault();
        setState("sending");
        setState(await sendFlag(target, sentence, note));
      }}
    >
      <label className="flag-label" htmlFor="flag-note">
        What seems off? (optional)
      </label>
      <input
        id="flag-note"
        className="flag-input"
        value={note}
        maxLength={300}
        placeholder="e.g. a Dutch friend says nobody says this"
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="flag-buttons">
        <button type="submit" className="button button-small" disabled={state === "sending"}>
          Flag this sentence
        </button>
        <button type="button" className="button button-quiet button-small" onClick={() => setState("closed")}>
          Cancel
        </button>
      </div>
      {state === "error" ? <p className="error" role="alert">Couldn&apos;t send the flag. Try again in a moment.</p> : null}
    </form>
  );
}
