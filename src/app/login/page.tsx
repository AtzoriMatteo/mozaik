import type { Metadata } from "next";
import Link from "next/link";
import { UnitTile } from "@/components/unit-tile";
import type { Glaze, Motif } from "@/core/content";
import { EmailLogin, ProviderLogin } from "./login-form";

export const metadata: Metadata = { title: "Log in · Mozaik" };

/** The tile wall beside the form: one tile for each kind of thing you'll learn about. */
const WALL: { motif: Motif; glaze: Glaze }[] = [
  { motif: "tulip", glaze: "iron" },
  { motif: "windmill", glaze: "manganese" },
  { motif: "cheese", glaze: "ochre" },
  { motif: "bridge", glaze: "cobalt" },
  { motif: "star", glaze: "copper" },
  { motif: "gable", glaze: "ochre" },
  { motif: "book", glaze: "cobalt" },
  { motif: "clog", glaze: "iron" },
  { motif: "birds", glaze: "manganese" },
];

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-art" aria-hidden="true">
        <div className="login-wall">
          {WALL.map((t, i) => (
            <UnitTile key={i} motif={t.motif} glaze={t.glaze} />
          ))}
        </div>
        <p className="login-tagline">
          Learn Dutch, tile by tile.
          <span>Real texts, listening, grammar and writing. Free.</span>
        </p>
      </section>

      <section className="login-card" aria-labelledby="login-title">
        <h1 id="login-title" className="login-title">Welcome to Mozaik</h1>
        <p className="login-intro">Log in to keep your words and progress on every device.</p>
        <ProviderLogin />
        <p className="login-divider">
          <span>or with email</span>
        </p>
        <EmailLogin />
      </section>

      <p className="login-footer">
        <Link href="/privacy">Privacy policy</Link>
      </p>
    </main>
  );
}
