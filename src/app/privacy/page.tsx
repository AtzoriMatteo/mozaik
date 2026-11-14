import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy · Mozaik",
  description: "What Mozaik stores, why, where, and how to have it deleted.",
};

const UPDATED = "14 November 2026";

const SECTIONS = [
  { id: "who", title: "Who runs Mozaik" },
  { id: "collect", title: "What we collect" },
  { id: "use", title: "How we use it" },
  { id: "services", title: "Services we rely on" },
  { id: "device", title: "What stays on your device" },
  { id: "security", title: "How it is protected" },
  { id: "keep", title: "How long we keep it" },
  { id: "rights", title: "Your rights" },
  { id: "changes", title: "Changes to this policy" },
];

/** Privacy policy. Public, so it can be read (and checked by Google) before logging in. */
export default function PrivacyPage() {
  return (
    <main className="policy">
      <header className="policy-head">
        <h1 className="policy-title">Privacy policy</h1>
        <p className="policy-updated">Last updated {UPDATED}</p>
        <p className="policy-summary">
          Mozaik is a free website for learning languages. We store only what is needed to keep your account and your progress. There are no
          ads, no tracking and no analytics, and your data is never sold or shared for marketing.
        </p>
      </header>

      <nav className="policy-toc" aria-label="On this page">
        <ol>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <section id="who" className="policy-section">
        <h2>1. Who runs Mozaik</h2>
        <p>
          Mozaik is a non-commercial project run by a private individual, Matteo, in the Netherlands. He is responsible for your data under the
          EU General Data Protection Regulation (GDPR). See <a href="#rights">Your rights</a> for how to get in touch.
        </p>
      </section>

      <section id="collect" className="policy-section">
        <h2>2. What we collect</h2>
        <dl className="policy-list">
          <dt>Account details</dt>
          <dd>
            Your email address. If you log in with Google or GitHub, also the name on that account. If you choose a password, it is stored
            only as a one-way hash: nobody, including us, can read it.
          </dd>
          <dt>Your learning</dt>
          <dd>
            What you have finished in the course, the words you save, your review schedule, and any sentences you flag as sounding odd,
            together with the note you add.
          </dd>
          <dt>Technical logs</dt>
          <dd>
            Like any website, our hosting provider briefly records basic request information (such as IP address and browser type) to keep
            the service running and secure.
          </dd>
        </dl>
        <p>We do not collect your location, contacts, recordings of your voice, or anything from your Google or GitHub account beyond your name and email.</p>
      </section>

      <section id="use" className="policy-section">
        <h2>3. How we use it</h2>
        <ul>
          <li>To log you in and keep your progress the same on all your devices.</li>
          <li>To schedule your reviews and show your progress.</li>
          <li>To fix course sentences that learners flag as wrong or unnatural.</li>
        </ul>
        <p>
          The legal basis is that this is needed to provide the service you signed up for (GDPR article 6(1)(b)). We do not use your data for
          advertising, profiling or automated decisions.
        </p>
      </section>

      <section id="services" className="policy-section">
        <h2>4. Services we rely on</h2>
        <dl className="policy-list">
          <dt>Supabase</dt>
          <dd>Stores accounts and learning data, in the European Union (Stockholm, Sweden).</dd>
          <dt>Vercel</dt>
          <dd>Hosts the website. Its servers for Mozaik run in Stockholm; pages are delivered through its worldwide network.</dd>
          <dt>Google and GitHub</dt>
          <dd>Only if you choose to log in with them. They confirm who you are and share your name and email with us.</dd>
          <dt>LanguageTool</dt>
          <dd>
            Only if you switch on the extra grammar check in Writing. The text you wrote is then sent to LanguageTool to be checked. It is
            off by default.
          </dd>
          <dt>Hugging Face</dt>
          <dd>
            In Speaking practice, your browser downloads a speech-recognition model from Hugging Face. Your voice is processed on your own
            device and is never uploaded.
          </dd>
        </dl>
        <p>Links to outside material (videos, stories, podcasts) take you to other websites, which have their own privacy policies.</p>
      </section>

      <section id="device" className="policy-section">
        <h2>5. What stays on your device</h2>
        <p>
          Mozaik uses only the cookies needed to keep you logged in. Your browser also keeps a few things locally, such as writing drafts,
          display settings and a copy of your progress so pages load quickly. Logging out clears that copy of your progress.
        </p>
      </section>

      <section id="security" className="policy-section">
        <h2>6. How it is protected</h2>
        <ul>
          <li>All connections are encrypted (HTTPS).</li>
          <li>The database only lets each person read and change their own data.</li>
          <li>Passwords are stored as one-way hashes, never as text.</li>
          <li>No secret keys are kept in the website itself.</li>
        </ul>
      </section>

      <section id="keep" className="policy-section">
        <h2>7. How long we keep it</h2>
        <p>
          Your account and learning data are kept until you ask for them to be deleted. Flagged sentences are kept until they have been
          reviewed. Hosting logs are deleted automatically by the provider after a short period.
        </p>
      </section>

      <section id="rights" className="policy-section">
        <h2>8. Your rights</h2>
        <p>
          You can ask to see the data we hold about you, to correct it, to receive a copy, or to have your account and everything linked to it
          deleted. Ask the person who shared Mozaik with you, or write to us through{" "}
          <a href="https://github.com/AtzoriMatteo/mozaik/issues/new">the project&apos;s GitHub page</a>. We reply within 30 days.
        </p>
        <p>
          If you are not satisfied, you can complain to the Dutch data protection authority,{" "}
          <a href="https://autoriteitpersoonsgegevens.nl">Autoriteit Persoonsgegevens</a>, or the authority in your own country.
        </p>
      </section>

      <section id="changes" className="policy-section">
        <h2>9. Changes to this policy</h2>
        <p>If this policy changes, the date at the top will change with it. Significant changes will be announced on the site.</p>
      </section>

      <p className="policy-back">
        <Link href="/">Back to Mozaik</Link>
      </p>
    </main>
  );
}
