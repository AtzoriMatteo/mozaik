import type { Metadata } from "next";
import Link from "next/link";
import { GrammarGlance } from "@/components/handbook/grammar-glance";

export const metadata: Metadata = { title: "Grammar at a glance · Handbook · Mozaik" };

export default function Page() {
  return (
    <main>
      <Link href="/handbook" className="back-link">
        Handbook
      </Link>
      <header className="unit-page-head">
        <h1 className="page-title">Grammar at a glance</h1>
        <p className="lede">Every pattern in the course on one page, with its table.</p>
      </header>
      <GrammarGlance />
    </main>
  );
}
