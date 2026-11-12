-- Review schedule for everything that isn't a saved word: course words,
-- grammar exercises, listening lines, speaking items.
-- item_id is stable and comes from the course content (e.g. "g:verb-second:2").

create table if not exists public.review_items (
  user_id        uuid not null default auth.uid() references auth.users (id) on delete cascade,
  language       text not null,
  item_id        text not null,
  kind           text not null,
  stage          integer not null default 0,
  due_at         timestamptz not null default now(),
  introduced_at  timestamptz not null default now(),
  reviewed_at    timestamptz,
  primary key (user_id, language, item_id)
);

alter table public.review_items enable row level security;

drop policy if exists "Learners manage their own review items" on public.review_items;
create policy "Learners manage their own review items"
  on public.review_items for all to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

grant select, insert, update, delete on public.review_items to authenticated;
