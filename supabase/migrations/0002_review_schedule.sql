-- Review scheduling for saved words (step 2).
-- stage: position on the spaced-repetition ladder (0 = new).
-- due_at: when the word should next be reviewed.

alter table public.saved_words
  add column if not exists stage integer not null default 0,
  add column if not exists due_at timestamptz not null default now(),
  add column if not exists reviewed_at timestamptz;

create index if not exists saved_words_due_idx
  on public.saved_words (user_id, language, due_at);
