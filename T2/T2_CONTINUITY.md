# T2 — TRANSFER / WORKSTREAM CONTINUITY

**Project:** Birthday Digital Experience for Purvi  
**Repository:** `akshatusing01/janmdinam-`  
**Last updated:** 2026-08-12

## CURRENT PRIORITY

Time is limited. The previous “universe-first” direction is deprioritized.

1. Countdown
2. Interactive cake-cutting ceremony
3. BIG playful celebration
4. Top birthday dashboard
5. Videos / cinema
6. Manual letter writing
7. Voice notes
8. Memory Lane — monthly historical extracts + editable memories + month-specific interactions

The post-cake experience must remain **playful, childish, colorful, celebratory and gift-like**.

## LOCKED / DO NOT REDESIGN

### Countdown
- Target: `13 August 2026, 00:00 IST`
- Temporary development unlock remains available.

### Cake ceremony
Preserved exactly as the working interaction:

`LIGHT CANDLES → MAKE A WISH → EXTINGUISH → CUT CAKE → CONFETTI`

## NEW POST-CAKE STRUCTURE

```text
CAKE CUT
   ↓
BIG CELEBRATION
   ↓
TOP BIRTHDAY DASHBOARD
   ├── 🎬 Videos
   ├── 💌 Letters
   ├── 🎧 Voice
   └── ✨ Memories
```

The old universe/portal presentation is no longer the primary navigation.

## DASHBOARD — IMPLEMENTED

The post-celebration screen is now a top-level birthday dashboard with:

- sticky dashboard navigation
- Home
- Videos
- Letters
- Voice
- Memories
- playful birthday desk visual language
- large shortcut cards
- mobile responsive layout

A separate `dashboard.css` file contains the new dashboard/memory workspace styles and is loaded dynamically by `app.js`.

## MEMORY LANE — IMPLEMENTED

The Memories section is now a monthly historical workspace rather than a simple empty card grid.

### Canonical month slots

- June 2025
- July 2025
- August 2025
- September 2025
- October 2025
- November 2025
- December 2025
- January 2026
- February 2026
- March 2026
- April 2026
- May 2026
- June 2026
- July 2026

### Historical source handling

`app.js` now maps month slots to repository `HISTORY/*/MONTH_EXTRACT.md` sources and can load the source extract inside the Memories section.

Currently available repository monthly extracts include:

- `HISTORY/2025-07/MONTH_EXTRACT.md`
- `HISTORY/2025-08/MONTH_EXTRACT.md`
- `HISTORY/HISTORY/2025-09/MONTH_EXTRACT.md` (nested legacy folder)
- `HISTORY/2025-10/MONTH_EXTRACT.md`
- `HISTORY/2025-11/MONTH_EXTRACT.md`
- `HISTORY/2025-12/MONTH_EXTRACT.md`
- `HISTORY/2026-1/MONTH_EXTRACT.md`
- `HISTORY/2026-2/MONTH_EXTRACT.md`
- `HISTORY/2026-3/MONTH_EXTRACT.md`
- `HISTORY/2026-4/MONTH_EXTRACT.md`
- `HISTORY/2026-5/MONTH_EXTRACT.md`
- `HISTORY/2026-6/MONTH_EXTRACT.md`
- `HISTORY/2026-7/MONTH_EXTRACT.md`

June 2025 currently has no matching monthly extract in the repository tree, so the UI leaves it ready for manual memories/source material rather than inventing content.

### July 2025 source-grounded starting point

The first monthly source reviewed is July 2025. The extract states that the available source covers 30/07/25–31/07/25, is a partial month, contains 134 timestamped message lines, has 2 active days, and includes 13 `<Media omitted>` entries. The extract also records school-house/captain coordination and a voice-note exchange around 31/07/25. These source-supported themes are the starting point for future July-specific interactive features; the site must not fabricate missing historical data. fileciteturn53file0L2-L2

## MEMORY CRUD — IMPLEMENTED

Every memory can now be managed from the UI and stored in Supabase.

### Add
Fields:

- Month
- Date
- Time
- Title
- Description

### Edit
Existing memory entries can be opened in the editor and changed.

### Delete
Each saved memory has a **DELETE** action with confirmation before permanent deletion from Supabase.

### Persistence

The source of truth is `public.birthday_memories` linked to `public.birthday_months`.

No memory content is stored in localStorage.

## SUPABASE CONTENT MODEL

- `birthday_months` — 14 canonical month slots
- `birthday_memories` — editable memories with month, title, body, date/time label, order and publication state
- `birthday_media` — video/audio metadata + Supabase Storage URLs
- `birthday_letters` — manually written letters

Storage bucket:

- `birthday-media`

## MONTH-BY-MONTH FEATURE RULE

Do not build a generic “universe” for every month.

Each month should be developed from its actual `MONTH_EXTRACT.md` source. The workflow is:

```text
READ MONTH_EXTRACT
      ↓
IDENTIFY REAL EVENTS / THEMES / MEDIA REFERENCES
      ↓
DESIGN 1–3 PLAYFUL INTERACTIONS FOR THAT MONTH
      ↓
CONNECT INTERACTION TO THAT MONTH'S MEMORIES
      ↓
NEVER INVENT HISTORICAL FACTS
```

July 2025 is the first month to receive this treatment. Later months should be added sequentially rather than dumping all historical material into the UI at once.

## CURRENT FRONTEND STATE

- Countdown preserved.
- Cake ceremony preserved.
- Celebration redesigned.
- Top dashboard implemented.
- Memory Lane redesigned.
- Historical source viewer implemented.
- Supabase memory add/edit/delete implemented.
- Media and letters remain Supabase-backed.
- Temporary unlock is the only remaining localStorage convenience.

## NEXT BUILD STEPS

1. Finish/test July 2025 memory presentation and its first playful interaction.
2. Move to August 2025.
3. Continue month-by-month through the available HISTORY extracts.
4. Add only source-grounded interactions.
5. Test mobile CRUD: add → reload → edit → reload → delete.
6. Test source viewer on Android.
7. Final content insertion and deployment.

## CONTINUITY LOG

### 2026-08-12 — Celebration-first reset
- Deprioritized the universe-heavy concept.
- Preserved countdown and cake ceremony.
- Centered post-cake experience on celebration, videos, letters and playful UI.

### 2026-08-12 — Supabase media integration
- Connected `birthday-media` Storage.
- Added database metadata for uploaded media.
- Kept secret/service credentials out of frontend.

### 2026-08-12 — All birthday content moved to Supabase
- Confirmed `birthday_media`, `birthday_letters`, `birthday_memories`, `birthday_months` as the content model.
- Removed media/letter/memory persistence from localStorage.

### 2026-08-12 — Dashboard + historical Memory Lane
- Replaced the previous party-room presentation with a top birthday dashboard.
- Added month-by-month HISTORY source loading.
- Started historical integration with July 2025 based strictly on its repository extract.
- Added Supabase-backed memory CRUD with date, time, title and description.
- Added edit/delete controls for individual memories.
- Added a source-extract viewer for each available month.
- Added responsive playful dashboard/memory styling in `dashboard.css`.
