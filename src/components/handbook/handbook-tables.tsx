"use client";

import { useId, useState } from "react";
import { SpeakButton } from "@/components/speak-button";
import type { HandbookTable } from "@/core/handbook";
import { PlacesPicture } from "./places-picture";

const plain = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/**
 * A Handbook page: a filter box, a list of the tables to jump to, then the
 * tables themselves. Every Dutch line can be heard.
 */
export function HandbookTables({ lang, tables, filterLabel }: { lang: string; tables: readonly HandbookTable[]; filterLabel: string }) {
  const id = useId();
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<"all" | "A1" | "A2">("all");
  const f = plain(q.trim());
  const shown = tables
    .filter((t) => level === "all" || t.level === level)
    .map((t) => ({
      ...t,
      entries: f ? t.entries.filter((e) => plain(`${e.nl} ${e.en} ${e.note ?? ""}`).includes(f)) : t.entries,
    }))
    .filter((t) => t.entries.length > 0 || (!f && t.entries.length === 0));

  return (
    <div className="handbook-tables">
      <div className="handbook-filter">
        <label htmlFor={id}>{filterLabel}</label>
        <input id={id} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Dutch or English" autoComplete="off" />
        <div className="handbook-levels" role="group" aria-label="Level">
          {(["all", "A1", "A2"] as const).map((l) => (
            <button key={l} type="button" className="plan-chip" aria-pressed={level === l} onClick={() => setLevel(l)}>
              {l === "all" ? "All" : l}
            </button>
          ))}
        </div>
      </div>

      {!f ? (
        <nav className="handbook-contents" aria-label="On this page">
          {shown.map((t) => (
            <a key={t.id} href={`#${t.id}`}>
              {t.title}
            </a>
          ))}
        </nav>
      ) : null}

      {shown.length === 0 ? <p className="lede">Nothing matches &ldquo;{q}&rdquo;.</p> : null}

      {shown.map((t) => (
        <section key={t.id} id={t.id} className="handbook-table" aria-labelledby={`${t.id}-title`}>
          <h2 id={`${t.id}-title`}>
            {t.title} <span className="level-tag">{t.level}</span>
          </h2>
          {t.intro ? <p className="handbook-intro">{t.intro}</p> : null}
          {t.id === "places" && !f ? <PlacesPicture /> : null}
          <table>
            <tbody>
              {t.entries.map((e) => (
                <tr key={e.nl}>
                  <th scope="row" lang={lang}>
                    <span>{e.nl}</span>
                    {/^[\d.:\s]+e?$/.test(e.nl) ? null : (
                      <SpeakButton lang={lang} text={e.nl.replace(/\s*\/.*$/, "").replace(/\.\.\./g, "")} label={`Hear ${e.nl}`} />
                    )}
                  </th>
                  <td>
                    {e.en}
                    {e.note ? <small lang={/[a-z]/.test(e.note) ? undefined : lang}>{e.note}</small> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {t.tip ? <p className="handbook-tip">{t.tip}</p> : null}
        </section>
      ))}
    </div>
  );
}
