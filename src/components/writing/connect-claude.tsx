"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AI_KEY_STORAGE, testKey } from "@/lib/writing/ai-feedback";

/** The learner's own Anthropic key, shared by every writing screen in this browser. */
const listeners = new Set<() => void>();
function readKey(): string {
  try {
    return window.localStorage.getItem(AI_KEY_STORAGE) ?? "";
  } catch {
    return "";
  }
}
export function saveKey(key: string) {
  try {
    if (key) window.localStorage.setItem(AI_KEY_STORAGE, key);
    else window.localStorage.removeItem(AI_KEY_STORAGE);
  } catch {
    // Storage unavailable: the key can't be kept.
  }
  listeners.forEach((l) => l());
}
export function useAiKey(): string {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      window.addEventListener("storage", l);
      return () => {
        listeners.delete(l);
        window.removeEventListener("storage", l);
      };
    },
    readKey,
    () => "",
  );
}

const STATUS: Record<string, string> = {
  rejected: "Anthropic didn't accept that key. Copy it again from the console: it starts with sk-ant-.",
  "no-credit": "The key works, but the account has no credit yet. Add a few euros under Billing in the console, then test again.",
  offline: "Couldn't reach Anthropic. Check your connection and try again.",
};

/**
 * Connect Claude for writing feedback, in three steps. A Claude.ai plan can't
 * be linked to other sites, so this uses an API key from the Anthropic
 * console, tested before it's saved and kept in this browser only.
 */
export function ConnectClaude({ compact = false, onChange }: { compact?: boolean; onChange?: (key: string) => void }) {
  const key = useAiKey();
  const [draft, setDraft] = useState("");
  const [state, setState] = useState<"idle" | "testing" | string>("idle");
  const [open, setOpen] = useState(false);

  useEffect(() => onChange?.(key), [key, onChange]);

  async function connect(e: React.FormEvent) {
    e.preventDefault();
    const k = draft.trim();
    if (!k) return setState("Paste your key first.");
    setState("testing");
    const result = await testKey(k);
    if (result === "ok") {
      saveKey(k);
      setDraft("");
      setState("idle");
    } else setState(STATUS[result]);
  }

  if (key) {
    return (
      <div className="connect-claude" data-connected>
        <p>
          <strong>Claude is connected.</strong> Your writing gets checked for meaning and naturalness too (key …{key.slice(-4)}).
        </p>
        <button type="button" className="link-button" onClick={() => saveKey("")}>Disconnect</button>
      </div>
    );
  }

  const body = (
    <>
      <p>
        Mozaik&apos;s free checks catch spelling and grammar. Connect Claude and it also tells you whether your text means
        what you wanted and sounds natural. A check costs a fraction of a cent, paid by you to Anthropic; Mozaik stays free.
      </p>
      <ol className="connect-steps">
        <li>
          <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener noreferrer">
            Open the Anthropic console
          </a>{" "}
          and sign in or make an account. A Claude Pro or Max plan can&apos;t be linked to other sites, so the
          console is the way.
        </li>
        <li>Press <em>Create Key</em>, name it &ldquo;Mozaik&rdquo;, and copy it. New accounts add a little credit under Billing first.</li>
        <li>Paste it here. Mozaik tests it, then keeps it in this browser only: it never reaches Mozaik&apos;s servers.</li>
      </ol>
      <form className="ai-key-form" onSubmit={connect}>
        <label htmlFor="connect-key" className="sr-only">Your Anthropic API key</label>
        <input
          id="connect-key"
          type="password"
          autoComplete="off"
          spellCheck={false}
          placeholder="sk-ant-…"
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value);
            if (state !== "testing") setState("idle");
          }}
        />
        <button type="submit" className="button" disabled={state === "testing"}>
          {state === "testing" ? "Testing…" : "Connect"}
        </button>
      </form>
      {state !== "idle" && state !== "testing" ? <p className="field-error" role="alert">{state}</p> : null}
    </>
  );

  if (compact) {
    return (
      <details className="connect-claude ai-settings" open={open} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}>
        <summary>Connect Claude for deeper feedback (optional)</summary>
        {body}
      </details>
    );
  }
  return (
    <section className="connect-claude" aria-label="Connect Claude">
      <h2>Connect Claude (optional)</h2>
      {body}
    </section>
  );
}
