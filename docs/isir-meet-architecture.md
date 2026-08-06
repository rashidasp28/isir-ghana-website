# ISIR Meet: MVP Architecture and Two-Week Delivery Plan

## Product objective

ISIR Meet will be a mobile-first meeting availability planner for ISIR Ghana, partner schools, volunteers, board members, donors, researchers, and collaborating organizations. Organizers create a meeting, share a link, collect participants' availability, and identify the strongest meeting time through a visual heat map.

## Architecture decision

### Application
- Existing Next.js 14 application
- TypeScript
- Tailwind CSS
- App Router and server-side route handlers

### Database
- Turso managed SQLite-compatible database
- Drizzle ORM

Turso is selected instead of Supabase for the first release because it provides persistent managed storage without requiring an always-running application server. The database layer will remain isolated behind repository functions so a later migration to PostgreSQL remains practical.

### Authentication
The MVP will not require participants to create accounts. Meetings will use:
- Public participant link with an unguessable meeting code
- Separate organizer management token
- Optional participant email

Organizer accounts, Google sign-in, Microsoft sign-in, and organization workspaces will be introduced after the MVP.

## MVP scope

1. ISIR Meet landing page
2. Meeting creation form
3. Shareable meeting URL
4. Organizer management URL
5. Mobile and desktop availability grid
6. Participant name and optional email
7. Available, maybe, and unavailable states
8. Aggregate availability heat map
9. Recommended best time
10. Time-zone-aware display
11. Meeting confirmation
12. ICS calendar export
13. CSV participant export
14. Basic anti-spam rate limiting
15. Accessible keyboard and touch interaction
16. Responsive design using ISIR Ghana branding

## Out of scope for the first release

- AI-generated scheduling explanations
- Google Calendar API synchronization
- Microsoft Outlook API synchronization
- Zoom, Teams, or Google Meet account integration
- Recurring meeting series
- Paid subscriptions
- Full organization administration
- Native mobile applications

## Proposed database model

### meetings
- id
- public_code
- organizer_token_hash
- title
- description
- location
- meeting_type
- timezone
- slot_duration_minutes
- day_start_minutes
- day_end_minutes
- status
- created_at
- expires_at

### meeting_dates
- id
- meeting_id
- date
- display_order

### participants
- id
- meeting_id
- display_name
- email
- response_token_hash
- submitted_at
- updated_at

### availability_slots
- id
- participant_id
- meeting_date_id
- start_minutes
- response

### confirmed_slots
- id
- meeting_id
- meeting_date_id
- start_minutes
- end_minutes
- confirmed_at

### audit_events
- id
- meeting_id
- event_type
- metadata_json
- created_at

## Security and privacy

- Store organizer and response tokens as hashes
- Do not expose database identifiers in public URLs
- Validate all server input
- Apply request rate limits to meeting creation and submissions
- Escape participant names and descriptions
- Restrict organizer actions to the management token
- Set expiry and deletion policies for inactive meetings
- Collect only the minimum personal information needed
- Add a privacy notice before public launch

## Two-week implementation schedule

### Days 1 and 2: Foundation
- Confirm MVP acceptance criteria
- Add Drizzle and Turso dependencies
- Define schema and migrations
- Add environment validation
- Establish meeting repository and service layers
- Build initial route structure

### Days 3 and 4: Meeting creation
- Build branded landing page
- Build meeting creation form
- Generate secure public and organizer links
- Implement validation and persistence
- Add success and sharing screen

### Days 5 to 7: Availability experience
- Build participant identity screen
- Build responsive date and time grid
- Add click, drag, touch, and keyboard selection
- Save and update responses
- Add participant completion feedback

### Days 8 and 9: Organizer dashboard
- Build response summary
- Render aggregate heat map
- Rank candidate time slots
- Add participant list and response status
- Add close and reopen controls

### Days 10 and 11: Confirmation and exports
- Confirm selected time
- Generate ICS calendar file
- Generate CSV response export
- Add printable meeting summary
- Add confirmation messaging workflow hooks

### Days 12 and 13: Quality assurance
- Mobile, tablet, and desktop testing
- Time-zone and daylight-saving testing
- Accessibility review
- Security and abuse testing
- Performance optimization
- Error handling and empty states

### Day 14: Release
- Production migration
- Environment configuration
- Domain or route setup
- Acceptance testing
- Administrator documentation
- Public launch checklist

## Release gates

The MVP will only go live when:
- A meeting can be created and reopened by its organizer
- At least 25 participants can submit availability without errors
- Availability works on Android, iPhone, and desktop browsers
- Aggregated availability and recommended slots are accurate
- Organizer and participant links have separate permissions
- Calendar export works in Google Calendar, Outlook, and Apple Calendar
- No secret or database credential is committed to GitHub
- Production database backups and restoration instructions are documented

## Future evolution

Phase 2 can add user accounts, organization workspaces, saved contacts, recurring meetings, automated reminders, Google and Microsoft calendar synchronization, online meeting creation, analytics, and paid organizational plans.
