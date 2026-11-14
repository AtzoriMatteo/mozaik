import type { Metadata } from "next";
import { VerbExplorer } from "@/components/handbook/verb-explorer";

export const metadata: Metadata = { title: "Handbook · Mozaik" };

export default function HandbookPage() {
  return (
    <main>
      <header className="unit-page-head">
        <h1 className="page-title">Handbook</h1>
        <p className="lede">Look things up anytime, without going through a text.</p>
      </header>
      <section aria-labelledby="verbs-title" className="handbook-section">
        <h2 id="verbs-title">Verbs</h2>
        <VerbExplorer />
      </section>
    </main>
  );
}
