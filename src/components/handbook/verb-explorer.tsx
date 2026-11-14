"use client";

import Link from "next/link";
import { useId, useMemo, useState, useSyncExternalStore } from "react";
import { useLearningLanguage } from "@/components/learning-language";
import { SpeakButton } from "@/components/speak-button";
import type { LanguagePack } from "@/core/language-pack";
import type { VerbTables } from "@/core/verbs";

/** The verb in the address (#tellen), so links and the back button work. */
function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}
const readHash = () => decodeURIComponent(window.location.hash.slice(1));

/**
 * Verb tables, always at hand: type any verb (or any form of it, like
 * "liep") and see every tense. Common verbs are listed to browse.
 */
export function VerbExplorer() {
  const { pack } = useLearningLanguage();
  const hash = useSyncExternalStore(subscribeHash, readHash, () => "");
  const [query, setQuery] = useState<string | null>(null);
  const shown = query ?? hash;

  if (!pack?.conjugate) {
    return <p className="lede">Verb tables aren&apos;t available for this language yet.</p>;
  }

  const go = (verb: string) => {
    setQuery(null);
    window.location.hash = encodeURIComponent(verb);
  };

  return (
    <div className="verbs">
      <VerbSearch pack={pack} value={shown} onType={setQuery} onGo={go} />
      {hash && query === null ? <VerbView pack={pack} input={hash} onGo={go} /> : <CommonVerbs pack={pack} filter={shown} onGo={go} />}
    </div>
  );
}

function VerbSearch({
  pack,
  value,
  onType,
  onGo,
}: {
  pack: LanguagePack;
  value: string;
  onType: (v: string) => void;
  onGo: (v: string) => void;
}) {
  const id = useId();
  return (
    <form
      className="verb-search"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const v = value.trim().toLowerCase();
        if (!v) return;
        onGo(pack.verbFor?.(v) ?? v);
      }}
    >
      <label htmlFor={id}>Any verb, in any form</label>
      <div className="verb-search-row">
        <input
          id={id}
          type="search"
          lang={pack.code}
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          placeholder="tellen, liep, opbellen, zich wassen…"
          value={value}
          onChange={(e) => onType(e.target.value)}
        />
        <button type="submit" className="button">
          Show
        </button>
      </div>
    </form>
  );
}

function CommonVerbs({ pack, filter, onGo }: { pack: LanguagePack; filter: string; onGo: (v: string) => void }) {
  const all = useMemo(() => pack.commonVerbs?.() ?? [], [pack]);
  const f = filter.trim().toLowerCase();
  const list = (f ? all.filter((v) => v.startsWith(f) || v.includes(f)) : all).slice(0, f ? 40 : 60);
  return (
    <section className="verb-list" aria-labelledby="common-verbs">
      <h2 id="common-verbs">{f ? "Matching verbs" : "Common verbs"}</h2>
      {list.length ? (
        <ul>
          {list.map((v) => (
            <li key={v}>
              <button type="button" className="verb-chip" lang={pack.code} onClick={() => onGo(v)}>
                {v}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No verb in the list starts like that. Press Show to see its forms anyway.</p>
      )}
    </section>
  );
}

function VerbView({ pack, input, onGo }: { pack: LanguagePack; input: string; onGo: (v: string) => void }) {
  const verb = pack.verbFor?.(input) ?? input;
  const t: VerbTables | null = pack.conjugate?.(input.toLowerCase().startsWith("zich ") ? input : verb) ?? null;
  if (!t) {
    return (
      <p className="lede">
        &ldquo;{input}&rdquo; doesn&apos;t look like a verb. Dutch infinitives end in -en or -n (werken, gaan).
      </p>
    );
  }
  const lang = pack.code;
  return (
    <article className="verb-view">
      <header className="verb-head">
        <h2 className="verb-inf" lang={lang}>
          {t.infinitive}
          <SpeakButton lang={lang} text={t.infinitive} label={`Hear ${t.infinitive}`} />
        </h2>
        {t.meaning ? <p className="verb-meaning">{t.meaning}</p> : null}
        <dl className="verb-facts">
          <div>
            <dt>Helper</dt>
            <dd lang={lang}>{t.auxiliary}</dd>
          </div>
          {t.participle ? (
            <div>
              <dt>Past participle</dt>
              <dd lang={lang}>{t.participle}</dd>
            </div>
          ) : null}
          <div>
            <dt>Imperative</dt>
            <dd lang={lang}>
              {t.imperative.informal === "—" ? "—" : `${t.imperative.informal}! · ${t.imperative.polite}!`}
            </dd>
          </div>
          <div>
            <dt>Present participle</dt>
            <dd lang={lang}>{t.presentParticiple}</dd>
          </div>
        </dl>
        <p className="verb-tags">
          {t.irregular ? <span className="verb-tag">Irregular</span> : <span className="verb-tag verb-tag-quiet">Regular</span>}
          {t.separable ? <span className="verb-tag">Separable</span> : null}
          {t.reflexive ? <span className="verb-tag">Reflexive</span> : null}
        </p>
        {!t.known ? (
          <p className="verb-warning">
            This verb isn&apos;t in Mozaik&apos;s word list, so these forms come from the regular rules. Most verbs follow them, but
            double-check a rare one.
          </p>
        ) : null}
      </header>

      {t.notes.length ? (
        <ul className="verb-notes">
          {t.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      ) : null}

      <div className="verb-tenses">
        {t.tenses.map((tense) => (
          <section key={tense.id} className="verb-tense" aria-labelledby={`tense-${tense.id}`}>
            <h3 id={`tense-${tense.id}`}>{tense.english}</h3>
            <p className="verb-tense-name" lang={lang}>
              {tense.name}
            </p>
            <table>
              <tbody>
                {tense.forms.map((f) => (
                  <tr key={f.person}>
                    <th scope="row" lang={lang}>
                      {f.person}
                    </th>
                    <td lang={lang}>{f.form}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="verb-tense-use">{tense.use}</p>
          </section>
        ))}
      </div>

      <p className="verb-more">
        <button type="button" className="text-button" onClick={() => onGo("")}>
          Another verb
        </button>{" "}
        · <Link href="/handbook">Handbook</Link>
      </p>
    </article>
  );
}
