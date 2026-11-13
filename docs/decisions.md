# Decisions log

Newest first. Each entry: what we decided, why, and what it costs us.
"Matteo" = creative decision; "Claude" = technical decision.

---

## 2026-11-13 (evening) — New words, My words, graduating, level pictures

**Words split into two decks (Matteo).**
- New words: flashcards through a level's core words, most common first
  (frequency from the wordfreq dataset, `scripts/word-frequency.py`), 20 per
  session. "I know this" graduates a word; "New to me" puts it in My words.
  Levels to draw from are a setting (A1 only for now).
- My words: spaced review of words you saved or didn't know. Reading a text
  no longer adds its words to review: that's why unknown-to-you words kept
  appearing. Old automatic course-word schedules are ignored; those words
  simply come up in New words, where one tap graduates them.
- Graduate: on every word card in My words ("Too easy: I know this one for
  good"). A graduated word never comes back; "Graduated words" in Review
  lists them with Undo. Stored as a schedule on stage 99, so no database
  change is needed.
- "Your words" shows known for good / learned / learning.

**The mosaic is the course, one picture per level (Matteo).** Each level
hides a Delft tile picture of 12×8 tiles; A1's is a Leiden canal with a
windmill, gabled houses and a boat. Every reading, listening and grammar
activity of the level glazes its share of tiles, from the middle outwards;
the last activity completes the picture. Tiles glazed since your last
visit shine briefly once. A2–C2 get their own pictures when those levels
are written. Words no longer fill the mosaic; they have their own counts.

**Speaking is a bonus (Matteo).** It doesn't count towards the picture or
the unit progress squares, and Continue never waits on it. It stays in each
unit as "Speaking (bonus)" and in the mixed review if switched on.

## 2026-11-13 (later) — A1 audit: fundamentals, grammar, links, proofreading

**A first unit for the basics (Matteo: cover all the fundamentals).** The
core word list (enforced by tests) now lists the fundamentals in full, and
that showed real gaps: six months, autumn, 0, 14, 17, 18, 40, 70, 1000, the
order words, goedenavond, welterusten, first name/surname, spelling. New
unit 1 "De basis": greetings and courtesy (text), numbers 0–1000 and the
alphabet (text), months, seasons, colours, dates and order words (text),
plus listening: spelling your name at the library, a voicemail with a phone
number and address, and asking the date. The old units move up by one.

**Grammar checked against the NT2 A1 syllabus (Claude).** Added five
lessons: spelling and the alphabet (unit 1), reflexive verbs (Health),
graag/liever/het liefst and comparing (Clothes), dates and order words
(Holidays); and zullen ("Zullen we…?") inside Modal verbs. 28 points now.
Deliberately left for A2, as before: the perfect tense (heb gewerkt), omdat
and other word-order-changing conjunctions, te + infinitive.

**Links rebuilt, and every one says what you'll see (Matteo: some didn't
work, a reading link landed on a Dutch page with no clue what to do).**
YouTube links now use the permanent /channel/ and /playlist forms (the old
/c/ names can break). Removed: Nijntje (no online text; it pointed to an
encyclopedia page) and Taalklas (couldn't confirm how to start it). Added:
Storybooks level 1 (picture books read on the page, Dutch sentence with the
English under it; one per unit topic), and Super Easy Dutch (the beginners'
playlist). Every resource now has "When it opens": the site's language and
exactly what to click.

**Proofreading (Claude, all texts, listening lines, tasks, exercises and
~1,250 word-help lines).** Fixed: a spot-the-mistake whose answer was itself
wrong (woon u → woont u), a broken choice option, unnatural phrasing
(geen sport → niet sporten, de vrouw van het gesprek, met de andere artsen),
two tense slips in listening, King's Day facts (Van Oranje-Nassau; many
people are off, not "almost nobody works"), story continuity (Fatima's
address, Noor's birthday on 20 November). Still worth a native check one
day: Mozaik has no native reviewer yet.

## 2026-11-13 — Polychrome tiles, more A1, new exercise types

**Units as numbered Delft tiles (Matteo: less AI-generated, less blue).**
The course page is a wall of tiles with grout between them. Each unit has
its own hand-painted motif (tulip, bird, cheese, clock, canal house, book,
herb, windmill, clog, crown) and one of the five polychrome Delftware
glazes: cobalt, manganese, ochre, copper green, iron red. The number is
painted large in the unit's glaze; small squares under each tile fill in as
activities are done. Lines get a slight brush wobble (an SVG filter), so
they read as painted, not drawn by a computer.

**Each skill has its own glaze (Claude).** Reading cobalt, Listening ochre,
Grammar manganese, Speaking copper, Beyond the course iron red: a small
glazed glyph by each heading and a coloured edge on its list. Cards became
rows on a glazed strip; a done item gets a small glazed tile.

**Warmer ground (Claude).** Milky tin-glaze `#eceee9` with a faint texture
instead of cool white, glazed surfaces `#f8f8f4`, lime-mortar grout
`#cfcdc3`. Corners are sharper (3–4px). Dark mode has its own glazes.

**More A1 (Matteo: mainly more texts and listening).** Two new units:
9 Kleren en winkels (clothes and shops), 10 Feestdagen (King's Day,
Sinterklaas, New Year). Every unit now has 3 texts and 3 listening items
(30 texts, 30 listening items), each text a different kind: a profile, an
email, a diary, a housing ad, an interview… ~300 new words, all with help.
Units 9–10 have no grammar lessons of their own; they reuse the A1 points.

**Different exercises (Matteo).**
- Reading: after each text, 4–5 comprehension tasks mixing multiple
  choice, true/false (in Dutch), put events in order, and match who-did-what.
  "Skip the questions" is always there.
- Listening: a new "Close listening" step between the questions and the
  dictation: true/false, fill the gaps in a line while hearing it, "which
  word did you hear?", and put lines in order.
- Grammar: every lesson gained match-the-pairs, sort into groups (de/het,
  niet/geen…) and spot-the-mistake exercises. They also come back in review.
- Tests check every task is well-formed (gap words really are in the line,
  "heard" options really aren't, every sort group is used).

**No automatic capital mid-sentence (Matteo).** Phones capitalise the first
letter of an empty field. Gaps that aren't at the start of a sentence now
switch that off; gaps at the start keep it.

**Beyond the course (Matteo's idea; links only).** A page per language
with real material for the level (watch, listen, read, practise) and a
"Beyond the course" section on unit pages for items that fit the topic.
A1 is short on purpose: Potje Nederlands (a University of Groningen A1
podcast, episodes matched to units), Easy Dutch, Dutchies to be, Bart de
Pau, NOS Jeugdjournaal (marked "a bit above A1"), Nijntje books, Taalklas.nl.
Plain links that open in a new tab; no embedded players, so no third party
tracks Mozaik visits. "Mark as tried" is kept in the browser.
`npm run check-links` checks every link (needs the internet, so it's not
part of the normal tests).

## 2026-11-12 — GitHub login

**GitHub login next to the email link (Claude, after hitting the limit).**
Supabase's built-in email sender allows only 2 auth emails per hour for the
whole project, so magic links run out fast. "Continue with GitHub" sends no
email, so it has no such limit and costs nothing. Magic links stay as a
second option. Before other people use Mozaik: add a free custom SMTP
provider (e.g. Brevo) so email links work for everyone, and possibly
"Continue with Google".

## 2026-11-12 — Review for every part, mixed by default

**One button, optional focus, settings tucked away (Matteo: not too much,
interactive, customisable).** Review opens with a single "Start review":
a short mixed session (10 cards by default) that alternates words, grammar
and listening. Below it, four focus modes (Words, Grammar, Listening,
Speaking) start a session on one part only. "Customise review" is closed by
default: cards per session (5/10/20), new cards per day (0/5/10/20), which
parts the mixed review includes (speaking off by default: it needs the
mic), automatic course words on/off, recall and listening word cards on/off.

**What comes back (Claude).** Things enter review only after you've done
them: a text's core A1 words once you've read it (tiny words like de/en/ik
skipped; saved words always included, never duplicated), every exercise of a
finished grammar lesson, short lines (≤12 words) of finished listening, and
the pair words and sentences of finished speaking practice.

**Card types (Claude).** Words: meaning first; from stage 2 also recall
(blank in the sentence) and listening (hear the word), varied. Grammar:
the same exercises, auto-checked (right → Good, accent slip → Hard, wrong →
Again). Listening: hear a line, type it (auto-checked) or just reveal and
rate. Speaking: say it, Mozaik rates it from what the on-device AI heard.

**Gentle limits (Claude).** New cards per day apply across all parts so a
busy day of learning doesn't flood tomorrow's review. When everything is
done: "All caught up for today", with an optional "Learn 5 more new cards".

**Storage (Claude).** Schedules for course items live in a new
review_items table (migration 0003); saved words keep theirs. Until the
migration is run, review progress is kept on the device.

## 2026-11-12 — Speaking with free, on-device AI

**On-device Whisper (Matteo: free + useful feedback).** Speech is recognised
by OpenAI's Whisper (base, multilingual) running in the browser through
transformers.js: WebGPU when available, WebAssembly otherwise. Free with no
limits; the voice never leaves the device. Cost: a one-time download of
roughly 100–150 MB from Hugging Face's CDN, cached by the browser, and a few
seconds per check on older devices. Groq's free cloud Whisper was rejected
as default: shared limits across all users, voice leaves the device.

**Feedback that names the sound (Claude).** Whisper returns words, not
sounds, so: (1) minimal-pair drills (huis/hoes, deur/duur, man/maan…) force
the model to decide on the sound itself; (2) in sentences, a word heard as a
similar word is compared letter by letter to find the sound that changed
(ui ↔ oe) and show that sound's how-to tip; unrelated words are just
"missed", with no misleading tip. You can play your recording next to the
model voice. Silence and Whisper's stock phantom phrases are ignored.

**Content (Claude).** 9 sounds (g/ch, ij/ei, ui, aa/a, eu, oe/uu, w/v, sch,
final -en), one or two per unit, then 4 short sentences from the unit to
shadow. Speaking comes last in each unit.

**Not yet verified on real voices.** The workspace can't reach Hugging Face,
so recognition accuracy on Dutch is to be checked by Matteo; if whisper-base
is too weak, whisper-small is the next step (bigger download).

## 2026-11-12 — Grammar sections

**Three grammar points per unit (Claude).** The 23 A1 points are spread
over the 8 units (about three each), in the order they're needed: unit 1
pronouns, present tense, zijn/hebben … unit 8 het as 'it', gaan + infinitive.
In course order a unit goes: texts → listening → grammar.

**Lesson shape (brief).** The pattern shown visually (word order as rows of
tiles with the key slot glazed, conjugation and de/het tables), then
examples quoted word for word from the course texts (a test fails if a
quote isn't found), then 5–6 exercises one at a time: fill the gap, choose,
rewrite, build the sentence from tiles. Answers are judged like dictation
(capitals and punctuation ignored, missing accents = almost). "See the
pattern" is always one tap away during practice.

## 2026-11-12 — Listening exercises; course and unit pages

**Course → unit → skill (Claude, from the brief).** "Read" became
"Course": an overview of units with progress and one Continue button, and a
page per unit with its can-do goals and a section per skill (Reading,
Listening; Grammar and Speaking will slot in). Every activity ends with one
"Next" button to the following activity in course order.

**Listening material is separate from the texts (brief).** One item per A1
unit for now: a dialogue at uni, Noor about her family, at the baker's, a
station announcement, a voicemail from the landlord, the first day at work,
at the pharmacy, the weather forecast.

**Listening flow (Claude).** One step per screen: listen without text →
gist question → detail questions (replay anytime) → dictation of two lines
(forgiving: capitals, punctuation ignored; missing accents = "almost") →
transcript with tap-for-help, translations toggle and per-line playback.
Speed: normal/slow. Speakers in a dialogue get different voices when the
device has several, otherwise a different pitch.

**Device voice for now (Claude).** Free and private, but quality varies by
device; Mozaik explains how to add a Dutch voice when none is installed and
offers the transcript instead. Recorded or neural audio can be added later
per item without changing the exercises.

## 2026-11-12 — Level exams

**One exam per level, soft gate (Matteo).** Each CEFR level ends with an
exam on new material, covering every skill. Passing marks the level done
and opens the next one; the next level can still be opened early ("Open
anyway"), in line with "never a hard wall". Feedback per part, retake
anytime; the same exam doubles as a placement test.

**Built once the level is complete (Matteo).** The A1 exam waits until A1
has all its components (reading, listening, vocabulary, grammar,
speaking), so it can test all of them.

## 2026-11-12 — Rating scale

**Again / Hard / Good / Easy (Matteo).** Replaces the two-button review.
Again = back to the start, 10 min; Hard = same stage, half the wait (a new
word: 1 hour); Good = one stage up; Easy = two stages up. Each button shows
when the word will come back. Keys 1–4, Space = Good.

## 2026-11-12 — Overnight: A1 course, review, listening

**A1 course structure (Claude, from Matteo's brief).** 8 topic units ×
2 different texts (16 texts, ~190 words each, 120–320 enforced): Meeting
people, Family, Food and shopping, Days and time, Home and town, Work and
study, Health, Free time and weather. Each unit has can-do goals. New
recurring cast (no Sanne): Luca (Italian student new in Leiden), housemates
Noor and Bram, neighbour mevrouw De Vries, classmate Fatima.

**Full A1 coverage, enforced (Matteo).** The pack lists the A1 grammar
syllabus (23 points) and ~400 core words. Tests fail if any core word or
grammar point isn't in at least one A1 text, or if any word lacks help.
Texts stay in present tense (plus fixed forms like "was"); the perfect
tense waits for A2.

**Better word notes (Matteo).** All help rewritten. "Look closer" = literal
parts, sound rules linking to English (ij ↔ i, ui ↔ ou, d ↔ th), memorable
origins. "Like a local" = set phrases, register, pronunciation traps, common
mistakes (geen vs niet, kennen vs weten, lopen ≠ run). Trivia removed; a
layer is simply absent when there's nothing useful to say.

**Review = simple ladder (Claude).** Stages with waits of 0, 1, 3, 7, 16,
35, 90 days. "Got it" moves up, "Not yet" restarts and returns in 10 min.
A word is *learned* (a glazed tile) from stage 3: three successful reviews
over about a week. Stages 0–1 show the word in its sentence (what does it
mean?); from stage 2 the word is blanked out (which word means X?).
Sessions are 10 cards max; "Stop for now" is always visible. Two buttons
only, keys 1/2, Space to reveal. Needs migration 0002 (Matteo runs once).

**Listening, free (Claude).** "Listen to the text" (normal/slow) and hear
single words or sentences, using the device's own Dutch voice: free, nothing
sent anywhere. Quality depends on the device; buttons hide if there is no
Dutch voice. Natural recorded/AI audio can come later if wanted.

**Progress on this device (Claude).** Which texts you've finished is kept
in the browser for now (Continue button, read marks); saved words and their
review schedule are in your account.

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
