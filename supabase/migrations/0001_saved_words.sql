-- Words a learner saved while reading. One row per learner, language and word.
-- Row Level Security: each learner can only see and change their own words.

create table if not exists public.saved_words (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  language    text not null,
  word        text not null,   -- lower-cased form as tapped, e.g. "woon"
  surface     text not null,   -- as it appeared in the text, e.g. "Woon"
  base        text,            -- dictionary form if different, e.g. "wonen"
  meaning     text not null,
  sentence    text not null,   -- the sentence it came from (context for review)
  text_id     text not null,
  created_at  timestamptz not null default now(),
  unique (user_id, language, word)
);

alter table public.saved_words enable row level security;

drop policy if exists "Learners manage their own saved words" on public.saved_words;
create policy "Learners manage their own saved words"
  on public.saved_words
  for all
  to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

grant select, insert, update, delete on public.saved_words to authenticated;
