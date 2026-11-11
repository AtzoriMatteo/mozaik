# Mozaik

Learn a language tile by tile. Each word, pattern and sound you learn is a
tile; fluency is the mosaic.

Mozaik takes learners from A1 to C2 through real reading, listening,
vocabulary, grammar and speaking, with no streaks, hearts or guilt. Dutch
comes first; other languages plug in as language packs.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Without Supabase settings the app runs in **preview mode** (no login,
nothing saved). To enable login, copy `.env.example` to `.env.local` and
fill in your Supabase project URL and publishable key.

## Checks

```bash
npm test           # unit tests (Vitest)
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run build      # production build
```

All four run on every push via GitHub Actions.

## Layout

```
src/
  app/           pages and routes (Next.js App Router)
  components/    shared UI (tile, mosaic, greeting, logo)
  core/          language-agnostic logic and the LanguagePack contract
  packs/nl/      the Dutch language pack
  lib/supabase/  login and database access
  proxy.ts       refreshes the session, sends signed-out visitors to /login
docs/
  decisions.md   what we decided and why
```

## Adding a language

1. Create `src/packs/<code>/index.ts` exporting a `LanguagePack`.
2. Register it in `src/core/registry.ts`.
3. Add tests next to it.
