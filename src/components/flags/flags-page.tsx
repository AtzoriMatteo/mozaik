"use client";

import { useEffect, useState } from "react";
import { flagsForClaude, loadFlags, setFlagStatus, type Flag } from "@/lib/flags/flags";

const STATUS_LABEL: Record<Flag["status"], string> = { open: "Waiting", fixed: "Fixed", kept: "Checked: it's fine" };

/**
 * Flagged sentences. Everyone sees their own; an admin sees all of them,
 * copies the open ones as a message for Claude, and marks them done.
 */
export function FlagsPage() {
  const [data, setData] = useState<{ flags: Flag[]; admin: boolean; ready: boolean } | null>(null);
  const [copied, setCopied] = useState(false);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let alive = true;
    loadFlags().then((d) => {
      if (alive) setData(d);
    });
    return () => {
      alive = false;
    };
  }, [version]);

  if (!data) return <p className="lede">Loading…</p>;
  if (!data.ready) {
    return (
      <>
        <h1 className="page-title">Flagged sentences</h1>
        <p className="lede">Flagging isn&apos;t switched on yet, or you&apos;re not logged in.</p>
      </>
    );
  }

  const open = data.flags.filter((f) => f.status === "open");
  const done = data.flags.filter((f) => f.status !== "open");
  const mark = async (ids: string[], status: Flag["status"]) => {
    if (await setFlagStatus(ids, status)) setVersion((v) => v + 1);
  };

  return (
    <div className="flags-page">
      <h1 className="page-title">Flagged sentences</h1>
      <p className="lede">
        {data.admin
          ? "Sentences people think sound odd. Copy them for Claude, then mark them once they're revised."
          : "Sentences you flagged as sounding odd, and what happened to them."}
      </p>

      {data.admin && open.length > 0 ? (
        <div className="flags-actions">
          <button
            type="button"
            className="button"
            onClick={async () => {
              await navigator.clipboard.writeText(flagsForClaude(data.flags));
              setCopied(true);
            }}
          >
            {copied ? "Copied: paste it to Claude" : `Copy ${open.length} for Claude`}
          </button>
          {copied ? (
            <button type="button" className="button button-quiet" onClick={() => mark(open.map((f) => f.id), "fixed")}>
              Claude revised them: mark all fixed
            </button>
          ) : null}
        </div>
      ) : null}

      <h2 className="flags-heading">Waiting ({open.length})</h2>
      {open.length === 0 ? <p className="flags-empty">Nothing waiting.</p> : null}
      <ol className="flags-list">
        {open.map((f) => (
          <FlagRow key={f.id} flag={f} admin={data.admin} mark={mark} />
        ))}
      </ol>

      {done.length > 0 ? (
        <>
          <h2 className="flags-heading">Done ({done.length})</h2>
          <ol className="flags-list">
            {done.map((f) => (
              <FlagRow key={f.id} flag={f} admin={false} mark={mark} />
            ))}
          </ol>
        </>
      ) : null}
    </div>
  );
}

function FlagRow({ flag, admin, mark }: { flag: Flag; admin: boolean; mark: (ids: string[], s: Flag["status"]) => void }) {
  return (
    <li className="flag-row" data-status={flag.status}>
      <p className="flag-sentence" lang={flag.language}>{flag.sentence}</p>
      <p className="flag-meta">
        <span>{flag.item_kind === "text" ? "Text" : "Listening"}: {flag.item_id}</span>
        <span>{new Date(flag.created_at).toLocaleDateString()}</span>
        <span>{STATUS_LABEL[flag.status]}</span>
      </p>
      {flag.note ? <p className="flag-note">“{flag.note}”</p> : null}
      {admin ? (
        <div className="flag-buttons">
          <button type="button" className="button button-quiet button-small" onClick={() => mark([flag.id], "fixed")}>
            Fixed
          </button>
          <button type="button" className="button button-quiet button-small" onClick={() => mark([flag.id], "kept")}>
            It&apos;s fine
          </button>
        </div>
      ) : null}
    </li>
  );
}
