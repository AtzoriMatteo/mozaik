-- "This sounds odd": learners flag a sentence whose Dutch seems wrong or
-- unnatural. Everyone sees their own flags; admins (Matteo) see all of them,
-- copy them for Claude to revise, and mark them fixed.

create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);

alter table public.admins enable row level security;

drop policy if exists "Users can see whether they are an admin" on public.admins;
create policy "Users can see whether they are an admin"
  on public.admins for select to authenticated
  using (user_id = (select auth.uid()));

grant select on public.admins to authenticated;

create table if not exists public.flags (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  language    text not null,
  item_kind   text not null,
  item_id     text not null,
  sentence    text not null,
  note        text,
  status      text not null default 'open' check (status in ('open', 'fixed', 'kept')),
  created_at  timestamptz not null default now()
);

alter table public.flags enable row level security;

drop policy if exists "Learners add their own flags" on public.flags;
create policy "Learners add their own flags"
  on public.flags for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "Learners see their own flags, admins see all" on public.flags;
create policy "Learners see their own flags, admins see all"
  on public.flags for select to authenticated
  using (
    user_id = (select auth.uid())
    or exists (select 1 from public.admins a where a.user_id = (select auth.uid()))
  );

drop policy if exists "Admins update flags" on public.flags;
create policy "Admins update flags"
  on public.flags for update to authenticated
  using (exists (select 1 from public.admins a where a.user_id = (select auth.uid())));

grant select, insert, update on public.flags to authenticated;

-- Then, once, make yourself admin (put in your own login email):
-- insert into public.admins (user_id) select id from auth.users where email = 'you@example.com';
