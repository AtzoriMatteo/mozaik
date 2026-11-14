import type { Metadata } from "next";
import Link from "next/link";
import { HandbookSection } from "@/components/handbook/handbook-section";

export const metadata: Metadata = { title: "Words by topic · Handbook · Mozaik" };

export default function Page() {
  return (
    <main>
      <Link href="/handbook" className="back-link">
        Handbook
      </Link>
      <header className="unit-page-head">
        <h1 className="page-title">Words by topic</h1>
        <p className="lede">Numbers, the clock, days, family, food, home and more, with de or het.</p>
      </header>
      <HandbookSection section="topics" filterLabel="Find a word" />
    </main>
  );
}
