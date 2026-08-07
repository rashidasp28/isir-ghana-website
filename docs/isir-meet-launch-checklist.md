# ISIR Meet Launch QA Checklist

## Core workflow
- [ ] `/meet` loads on mobile and desktop
- [ ] Organizer can create a meeting with 1 to 14 dates
- [ ] Meeting record and date rows appear in Supabase
- [ ] Participant link opens without organizer credentials
- [ ] Organizer link requires the correct private token
- [ ] Participant can submit Available, Maybe, and Unavailable slots
- [ ] Participant response is stored in Supabase
- [ ] Organizer response count updates correctly
- [ ] Best-time ranking reflects submitted availability
- [ ] Organizer can confirm any ranked slot
- [ ] Confirmation creates exactly one confirmed slot
- [ ] Confirmed meeting automatically stops new availability submissions
- [ ] Participant page shows confirmed date, time, timezone, location, and calendar link
- [ ] Organizer can reopen a confirmed meeting
- [ ] Reopening removes the confirmed slot and accepts responses again
- [ ] Organizer can close responses without confirming a time

## Calendar checks
- [ ] ICS download succeeds for a confirmed meeting
- [ ] ICS event title matches the meeting title
- [ ] ICS event start and end times match the confirmed slot
- [ ] ICS preserves the selected IANA timezone using TZID
- [ ] Test import in Google Calendar
- [ ] Test import in Microsoft Outlook
- [ ] Test import in Apple Calendar

## Security and privacy
- [ ] `SUPABASE_SERVICE_ROLE_KEY` exists only in protected environment variables
- [ ] No Supabase service-role secret is committed to GitHub
- [ ] Row Level Security remains enabled on all ISIR Meet tables
- [ ] Public browser clients cannot write directly to meeting tables
- [ ] Organizer token is stored only as a SHA-256 hash
- [ ] Invalid organizer token cannot confirm, close, or reopen a meeting
- [ ] Participant submission validates date IDs and meeting time boundaries
- [ ] Closed or confirmed meetings reject new availability submissions

## Mobile and accessibility
- [ ] Test create flow on iPhone Safari
- [ ] Test participant grid on iPhone Safari
- [ ] Test participant grid on Android Chrome
- [ ] Test organizer dashboard at 320px width
- [ ] Grid remains horizontally usable without breaking the page
- [ ] All form controls have visible labels
- [ ] Availability cells are keyboard-focusable and have accessible labels
- [ ] Buttons have adequate touch targets
- [ ] Error and success states remain readable on small screens

## Data and recovery
- [ ] Supabase migration file is committed and matches production schema
- [ ] Backup/export instructions are documented before public launch
- [ ] Test deletion cascade using a disposable meeting
- [ ] Audit events are created for meeting creation, participant response, confirmation, reopen, and close actions

## Release gate
Do not merge the feature branch to `main` until the latest Vercel preview is successful and all critical workflow, security, timezone, and mobile checks above pass.
