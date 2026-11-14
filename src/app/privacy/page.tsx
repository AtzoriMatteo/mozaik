import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy · Mozaik" };

/** Plain-language privacy policy. Public, so Google and visitors can read it before logging in. */
export default function PrivacyPage() {
  return (
    <main className="prose-page">
      <h1 className="page-title">Privacy</h1>
      <p className="lede">Mozaik is a free, personal project for learning languages. It has no ads, no tracking and sells nothing.</p>

      <h2>What is stored</h2>
      <ul>
        <li>Your account: your email address, and your name if you log in with Google or GitHub.</li>
        <li>Your learning: what you finished in the course, words you saved, your review schedule, and sentences you flagged as sounding odd (with any note you wrote).</li>
        <li>In your own browser only: writing drafts and a few display settings.</li>
      </ul>

      <h2>Where it is kept</h2>
      <p>
        Accounts and learning data are stored with Supabase, in the EU (Stockholm). The site runs on Vercel. Logging in with Google or GitHub only
        shares your name and email address with Mozaik; nothing else from those accounts.
      </p>

      <h2>Who can see it</h2>
      <p>
        Only you see your progress and words. The person who runs Mozaik can see account emails and learning data in the database, and reads
        flagged sentences to fix the Dutch. Nothing is shared with anyone else.
      </p>

      <h2>Writing checks</h2>
      <p>
        Spelling is checked in your browser. If you ask for the extra grammar check, the text you wrote is sent to LanguageTool (languagetool.org)
        to be checked, and nothing else.
      </p>

      <h2>Deleting your data</h2>
      <p>
        Ask the person who shared Mozaik with you, or open an issue at{" "}
        <a href="https://github.com/AtzoriMatteo/mozaik/issues">github.com/AtzoriMatteo/mozaik</a>, and your account and everything linked to it
        will be deleted.
      </p>

      <p className="prose-updated">Last updated: 14 November 2026.</p>
    </main>
  );
}
