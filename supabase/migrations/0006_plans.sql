-- Study plans: each learner's plan settings and study log (what was done
-- on which day), one row per language, so the plan follows you across devices.

create table if not exists public.plans (
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  language    text not null,
  settings    jsonb,
  log         jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  primary key (user_id, language)
);

alter table public.plans enable row level security;

drop policy if exists "Learners manage their own plan" on public.plans;
create policy "Learners manage their own plan"
  on public.plans for all to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

grant select, insert, update, delete on public.plans to authenticated;
