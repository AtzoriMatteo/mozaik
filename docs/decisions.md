# Decisions log

Newest first. Each entry: what we decided, why, and what it costs us.
"Matteo" = creative decision; "Claude" = technical decision.

---

## 2026-11-12 — Step 1: the reader

**Five A1 starter texts (Claude, Matteo's call delegated).** Introducing
yourself, the supermarket, the train, the weather, your house. The same two
people (Sanne and Daan) recur so vocabulary repeats naturally. Every word
has hand-written help; a test fails the build if any tappable word lacks it,
and another keeps each help line to 80 characters (calm by design).

**Help panel buttons (Claude).** "Look closer" (see it differently), "Like a
local" (sound native), "Whole sentence" (translation), and Save. One layer
open at a time. Keyboard: ← → move between words, S saves, Esc closes.

**Saved words (Claude).** Stored per learner in Supabase (`saved_words`,
Row Level Security: only you can see your words), with the sentence they
came from, ready for step 2's review cards. In preview mode they're kept in
the browser instead. The mosaic still counts *learned* words, so it stays
empty until step 2 defines "learned"; the home screen shows how many words
are saved.

## 2026-11-11 — Step 1 direction

**Mozaik is completely free (Matteo).** No paid AI calls at runtime. Word
help for course texts is written while building each text and stored with
it, so tapping costs nothing. Hosting stays on free tiers. If AI help is
ever added (e.g. for pasted texts), it must be optional: bring-your-own-key
or a free tier, never a bill for the project.

**No pasted texts for now (Matteo).** Step 1 covers the course's starter
texts only; importing your own text comes later (it will need a free
dictionary, e.g. Wiktionary data, for words without hand-written help).

**Calm word help (Matteo).** Tapping a word shows only its meaning. The
"see it differently" and "sound native" layers sit behind small optional
buttons, one short line each, and only appear when a word has one.

## 2026-11-11 — Step 0: foundations

**Tech stack (Claude).** Next.js 16 + TypeScript, Supabase (login + Postgres),
Claude API called server-side only, hosted on Vercel.
Why: one language end to end, free tiers cover a single user comfortably,
Vercel deploys automatically from GitHub, Supabase gives auth and a real
database without running servers.

**Database in the EU (Matteo).** The Supabase project lives in the EU
(Stockholm; Frankfurt wasn't offered at signup).
Why: keeps learner data inside GDPR territory. Cost: slightly slower for
users far from Europe.

**Login from day one, by magic link (Matteo).** No passwords.
Why: saved words follow the learner across laptop and phone, and other users
can be added later without rework. Cost: one extra tap the first time on
each device.

**Preview mode (Claude).** Without Supabase settings the app runs with no
login and saves nothing, and says so in the top bar.
Why: lets us show and test screens before accounts exist.

**No default language to learn (Matteo).** Which language someone is
learning is their own choice, saved per learner, switchable anytime; each
language keeps its own mosaic and accent colour. With one pack installed
the learner is simply placed in it; with several and no saved choice, the
first screen asks "What do you want to learn?". The interface and
explanation language is a separate setting (English for now).
Cost/limit: until saved words live in the database, the choice is stored in
the browser only; it moves to the learner's account in step 2.

**Language packs (Claude).** The core app never names a language. Each pack
(`src/packs/<code>`) supplies its tokeniser, accent colour, greeting and
(later) content, grammar notes and pronunciation data. Adding a language =
one folder + one line in `src/core/registry.ts`.

**Dutch tokenisation (Claude).** Words like `auto's` and short forms like
`'s`, `'t` stay single words, and the typographic apostrophe (’) is treated
like the straight one, so tapping a word in the reader selects what a Dutch
speaker would call one word.

**Visual identity (Claude, within Matteo's brief).**
- Palette: porcelain white `#f6f8fc`, Delft blue `#1d3f8c` (the per-language
  accent), deep blue headings `#10255a`, glaze tint `#e3eaf7`, grout lines
  `#c8d2e6`. Dark mode included.
- Type: Literata (designed for long-form reading) for headings and reading
  text; Atkinson Hyperlegible Next (designed for legibility) for the UI.
  Both are self-hosted, so no requests to Google Fonts.
- The home screen centres on the learner's mosaic: 32 tiles, one per word
  learned, glazed with a simple Delft-style ornament.
- Greeting in the target language by time of day (Goedemorgen/-middag/
  -avond/-nacht) with its English meaning: a tiny bit of Dutch on every visit.

## Open (Matteo to decide)
- Where course content comes from: AI-generated and reviewed, hand-written,
  or a mix. (Proposed for Milestone 1: AI-generated, carefully checked, with
  a "this sounds odd" flag for later native review.)
