alter table public.participants
  alter column email set not null;

alter table public.confirmed_slots
  add column if not exists meeting_link text;
