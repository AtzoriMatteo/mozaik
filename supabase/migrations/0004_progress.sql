-- Course progress (finished texts, listening, grammar lessons, writing tasks,
-- speaking, "beyond" resources), kept on the account so every device shows
-- the same mosaic. done = false records an activity marked as not done again,
-- so that change reaches other devices too.

create table if not exists public.progress (
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  language    text not null,
  kind        text not null,
  item_id     text not null,
  done        boolean not null default true,
  updated_at  timestamptz not null default now(),
  primary key (user_id, language, kind, item_id)
);

alter table public.progress enable row level security;

drop policy if exists "Learners manage their own progress" on public.progress;
create policy "Learners manage their own progress"
  on public.progress for all to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

grant select, insert, update, delete on public.progress to authenticated;
