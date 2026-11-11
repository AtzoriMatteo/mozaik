import Link from "next/link";
import { Greeting } from "@/components/greeting";
import { Mosaic } from "@/components/mosaic";

export default function HomePage() {
  // Saved words arrive in step 2; until then the mosaic starts empty.
  const learned = 0;

  return (
    <main>
      <Greeting />

      <section className="mosaic-block" aria-labelledby="mosaic-heading">
        <h2 id="mosaic-heading" className="sr-only">Your mosaic</h2>
        <Mosaic learned={learned} />
        <p className="mosaic-caption">
          {learned === 0
            ? "Your mosaic is empty. Every word you learn fills a tile."
            : `${learned} tiles so far.`}
        </p>
      </section>

      <Link href="/read" className="button">Start reading</Link>
    </main>
  );
}
