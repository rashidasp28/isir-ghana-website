create extension if not exists pgcrypto;

create type public.meeting_status as enum ('draft', 'open', 'confirmed', 'closed');
create type public.meeting_type as enum ('online', 'physical', 'hybrid');
create type public.availability_response as enum ('available', 'maybe', 'unavailable');

create table public.meetings (
  id uuid primary key default gen_random_uuid(),
  public_code text not null unique,
  organizer_token_hash text not null,
  title text not null check (char_length(title) between 3 and 120),
  description text,
  location text,
  meeting_type public.meeting_type not null default 'online',
  timezone text not null default 'Africa/Accra',
  slot_duration_minutes integer not null default 30 check (slot_duration_minutes in (15, 30, 45, 60, 90, 120)),
  day_start_minutes integer not null default 480 check (day_start_minutes between 0 and 1439),
  day_end_minutes integer not null default 1020 check (day_end_minutes between 1 and 1440),
  status public.meeting_status not null default 'open',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  expires_at timestamptz,
  constraint valid_day_window check (day_end_minutes > day_start_minutes)
);

create table public.meeting_dates (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid not null references public.meetings(id) on delete cascade,
  meeting_date date not null,
  display_order integer not null default 0,
  unique (meeting_id, meeting_date)
);

create table public.participants (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid not null references public.meetings(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 80),
  email text,
  response_token_hash text not null,
  submitted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.availability_slots (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid not null references public.participants(id) on delete cascade,
  meeting_date_id uuid not null references public.meeting_dates(id) on delete cascade,
  start_minutes integer not null check (start_minutes between 0 and 1439),
  response public.availability_response not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (participant_id, meeting_date_id, start_minutes)
);

create table public.confirmed_slots (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid not null unique references public.meetings(id) on delete cascade,
  meeting_date_id uuid not null references public.meeting_dates(id) on delete cascade,
  start_minutes integer not null check (start_minutes between 0 and 1439),
  end_minutes integer not null check (end_minutes between 1 and 1440),
  confirmed_at timestamptz not null default now(),
  constraint valid_confirmed_window check (end_minutes > start_minutes)
);

create table public.audit_events (
  id bigint generated always as identity primary key,
  meeting_id uuid references public.meetings(id) on delete cascade,
  event_type text not null,
  metadata_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index meeting_dates_meeting_id_idx on public.meeting_dates(meeting_id);
create index participants_meeting_id_idx on public.participants(meeting_id);
create index availability_participant_idx on public.availability_slots(participant_id);
create index availability_meeting_date_idx on public.availability_slots(meeting_date_id);
create index audit_events_meeting_id_idx on public.audit_events(meeting_id);

alter table public.meetings enable row level security;
alter table public.meeting_dates enable row level security;
alter table public.participants enable row level security;
alter table public.availability_slots enable row level security;
alter table public.confirmed_slots enable row level security;
alter table public.audit_events enable row level security;

-- Public browser access is intentionally denied by default.
-- All MVP reads and writes will pass through validated Next.js server routes
-- using the Supabase service role key. This prevents clients from bypassing
-- organizer and participant token checks.

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger meetings_set_updated_at
before update on public.meetings
for each row execute function public.set_updated_at();

create trigger participants_set_updated_at
before update on public.participants
for each row execute function public.set_updated_at();

create trigger availability_slots_set_updated_at
before update on public.availability_slots
for each row execute function public.set_updated_at();
