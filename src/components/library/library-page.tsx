"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getPack } from "@/core/registry";
import type { CefrLevel, LanguagePack } from "@/core/language-pack";
import { LIBRARY_LEVELS, courseTextCount, libraryPrompts, outThere, readingShelf } from "@/core/library";
import { RESOURCE_KIND_LABEL, type Resource } from "@/core/resources";
import { useProgress } from "@/lib/progress/use-read-texts";
import { ConnectClaude } from "@/components/writing/connect-claude";

type Shelf = "read" | "out" | "write";
const SHELVES: { id: Shelf; label: string }[] = [
  { id: "read", label: "Read here" },
  { id: "out", label: "Out there" },
  { id: "write", label: "Write" },
];
const KINDS: Resource["kind"][] = ["read", "listen", "watch", "practise"];

const levelKey = (lang: string) => `mozaik:library-level:${lang}`;
const shelfKey = "mozaik:library-shelf";

function load(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function save(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage unavailable: the choice lasts this visit.
  }
}

/** Group by topic, keeping the order things first appear in. */
function byTopic<T>(items: T[], topic: (x: T) => string): [string, T[]][] {
  const groups = new Map<string, T[]>();
  for (const x of items) groups.set(topic(x), [...(groups.get(topic(x)) ?? []), x]);
  return [...groups];
}

/** The Library: pick a level, then read on Mozaik, read out there, or write. */
export function LibraryPage({ lang }: { lang: string }) {
  const pack = getPack(lang) as LanguagePack;
  const [level, setLevel] = useState<CefrLevel>("A1");
  const [shelf, setShelf] = useState<Shelf>("read");

  useEffect(() => {
    const l = load(levelKey(lang)) as CefrLevel | null;
    const s = load(shelfKey) as Shelf | null;
    /* eslint-disable react-hooks/set-state-in-effect */
    if (l && LIBRARY_LEVELS.includes(l)) setLevel(l);
    if (s && SHELVES.some((x) => x.id === s)) setShelf(s);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [lang]);

  const pickLevel = (l: CefrLevel) => {
    setLevel(l);
    save(levelKey(lang), l);
  };
  const pickShelf = (s: Shelf) => {
    setShelf(s);
    save(shelfKey, s);
  };

  return (
    <article className="library">
      <Link href="/course" className="back-link">Course</Link>
      <h1 className="page-title">Library</h1>
      <p className="lede">Everything at one level, in any order: texts to read here, real {pack.name} out there, and things to write.</p>

      <div className="library-controls">
        <div className="segmented library-levels" role="radiogroup" aria-label="Level">
          {LIBRARY_LEVELS.map((l) => (
            <button key={l} type="button" role="radio" aria-checked={l === level} aria-pressed={l === level} onClick={() => pickLevel(l)}>
              {l}
            </button>
          ))}
        </div>
        <div className="segmented library-shelves" role="radiogroup" aria-label="What to do">
          {SHELVES.map((s) => (
            <button key={s.id} type="button" role="radio" aria-checked={s.id === shelf} aria-pressed={s.id === shelf} onClick={() => pickShelf(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {shelf === "read" ? <ReadHere pack={pack} level={level} onShelf={pickShelf} /> : null}
      {shelf === "out" ? <OutThere pack={pack} level={level} /> : null}
      {shelf === "write" ? <Write pack={pack} level={level} /> : null}
    </article>
  );
}

function ReadHere({ pack, level, onShelf }: { pack: LanguagePack; level: CefrLevel; onShelf: (s: Shelf) => void }) {
  const { doneIds } = useProgress("read", pack.code);
  const shelf = readingShelf(pack, level);
  const inCourse = courseTextCount(pack, level);
  const courseLine =
    inCourse > 0 ? (
      <p className="library-note">
        The {inCourse} shorter {level} texts of the course are in their units: <Link href="/course">open the course</Link>.
      </p>
    ) : null;
  if (shelf.length === 0) {
    return (
      <section className="library-empty">
        <p>The long {level} texts are still being written: they come level by level.</p>
        <p>
          Meanwhile, <button type="button" className="link-button" onClick={() => onShelf("out")}>find {level} reading out there</button>{" "}
          or <button type="button" className="link-button" onClick={() => onShelf("write")}>pick something to write</button>.
        </p>
        {courseLine}
      </section>
    );
  }
  return (
    <section aria-label={`${level} texts on Mozaik`}>
      <p className="library-note">Longer texts to read in one go, with help on every word and a few questions at the end.</p>
      <ul className="library-list library-texts">
        {shelf.map(({ text, words, topic }) => (
          <li key={text.id}>
            <Link href={`/read/${pack.code}/${text.id}`} className="activity-row" data-done={doneIds.has(text.id) || undefined}>
              <span className="library-row-main">
                <span lang={pack.code} className="library-row-title">{text.title}</span>
                <span className="library-row-sub">{text.titleTranslation}</span>
              </span>
              <span className="library-row-meta">
                {topic} · {Math.max(1, Math.round(words / 150))} min
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {courseLine}
    </section>
  );
}

function OutThere({ pack, level }: { pack: LanguagePack; level: CefrLevel }) {
  const { doneIds, toggle } = useProgress("beyond", pack.code);
  const items = outThere(pack, level);
  if (items.length === 0) return <p className="library-empty">Nothing collected for {level} yet.</p>;
  return (
    <section aria-label={`${level} material out there`}>
      <p className="lede library-note">
        Real {pack.name} made for people, not for textbooks. Mozaik only links to it: it opens on its own site, and nothing is embedded, so nobody tracks you here.
      </p>
      {KINDS.map((kind) => {
        const list = items.filter((r) => r.kind === kind);
        if (list.length === 0) return null;
        return (
          <section key={kind} className="library-topic">
            <h2>{RESOURCE_KIND_LABEL[kind]}</h2>
            <ul className="resource-list">
              {list.map((r) => (
                <ResourceItem key={r.id} r={r} done={doneIds.has(r.id)} onToggle={() => toggle(r.id)} />
              ))}
            </ul>
          </section>
        );
      })}
    </section>
  );
}

export function ResourceItem({ r, done, onToggle }: { r: Resource; done: boolean; onToggle: () => void }) {
  return (
    <li className="resource" data-done={done || undefined}>
      <div className="resource-main">
        <a href={r.url} target="_blank" rel="noopener noreferrer" className="resource-title">
          {r.title}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        {r.by ? <span className="resource-by">{r.by}</span> : null}
        {r.stretch ? <span className="resource-stretch">A bit above {r.level}</span> : null}
        <p className="resource-why">{r.why}</p>
        <p className="resource-how">
          <strong>How:</strong> {r.how}
        </p>
        <p className="resource-site">
          <strong>When it opens</strong> <span className="resource-lang">site in {r.siteLanguage}</span>
          <br />
          {r.onSite}
        </p>
      </div>
      <button type="button" className="resource-done" aria-pressed={done} onClick={onToggle}>
        {done ? "Tried it" : "Mark as tried"}
      </button>
    </li>
  );
}

function Write({ pack, level }: { pack: LanguagePack; level: CefrLevel }) {
  const { doneIds } = useProgress("writing", pack.code);
  const prompts = libraryPrompts(pack, level);
  if (prompts.length === 0) return <p className="library-empty">No prompts at {level} yet.</p>;
  return (
    <section aria-label={`${level} writing prompts`}>
      <ConnectClaude />
      <p className="library-count">
        {prompts.length} prompts at {level} · {prompts.filter((p) => doneIds.has(p.id)).length} written
      </p>
      {byTopic(prompts, (p) => p.topic ?? "Other").map(([topic, items]) => (
        <section key={topic} className="library-topic">
          <h2>{topic}</h2>
          <ul className="library-list">
            {items.map((p) => (
              <li key={p.id}>
                <Link href={`/library/${pack.code}/write/${p.id}`} className="activity-row" data-done={doneIds.has(p.id) || undefined}>
                  <span className="library-row-main">
                    <span lang={pack.code} className="library-row-title">{p.title}</span>
                    <span className="library-row-sub">{p.titleTranslation}</span>
                  </span>
                  <span className="library-row-meta">{FORM_LABEL[p.form]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}

const FORM_LABEL: Record<string, string> = {
  message: "Message",
  email: "Email",
  form: "Form",
  description: "Description",
  story: "Story",
  opinion: "Opinion",
  diary: "Diary",
};
