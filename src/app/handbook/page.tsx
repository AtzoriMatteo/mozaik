import type { Metadata } from "next";
import Link from "next/link";
import { VerbExplorer } from "@/components/handbook/verb-explorer";

export const metadata: Metadata = { title: "Handbook · Mozaik" };

const SECTIONS = [
  { href: "/handbook/words", title: "Words by topic", line: "Numbers, the clock, days, family, food, home, where things are" },
  { href: "/handbook/grammar", title: "Grammar at a glance", line: "Every pattern in the course, with its table" },
  { href: "/handbook/phrases", title: "Phrases", line: "Shop, café, doctor, phone, emails, emergencies" },
  { href: "/handbook/spelling", title: "Sounds and spelling", line: "Alphabet, long and short vowels, f/v and s/z" },
];

export default function HandbookPage() {
  return (
    <main>
      <header className="unit-page-head">
        <h1 className="page-title">Handbook</h1>
        <p className="lede">Look things up anytime, without going through a text.</p>
      </header>
      <ul className="handbook-sections" aria-label="Sections">
        {SECTIONS.map((s) => (
          <li key={s.href}>
            <Link href={s.href} className="handbook-card">
              <span className="handbook-card-title">{s.title}</span>
              <span className="handbook-card-line">{s.line}</span>
            </Link>
          </li>
        ))}
      </ul>
      <section aria-labelledby="verbs-title" className="handbook-section">
        <h2 id="verbs-title">Verbs</h2>
        <VerbExplorer />
      </section>
    </main>
  );
}
