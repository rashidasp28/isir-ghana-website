alter table public.confirmed_slots
  add column if not exists meeting_link text;

-- Participant email is enforced for all new submissions in the validated
-- Next.js availability API. The database column remains nullable so legacy
-- test responses created before this change do not block the migration.
