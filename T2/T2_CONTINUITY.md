# T2 — TRANSFER / WORKSTREAM CONTINUITY

**Project:** Birthday Digital Experience for Purvi  
**Repository:** `akshatusing01/janmdinam-`  
**Last updated:** 2026-08-12

## Current repository model

- `F1/F1_MASTER_BRAIN.md` = project decisions + canonical project state
- `T2/T2_CONTINUITY.md` = current workstream continuity
- `HISTORY/` = actual monthly historical extracts
- `PERSONAL_ARCHIVE.md` = stable personal/source information
- `SOURCE_DOCUMENT.md` = source priority + extraction rules

Historical monthly material is intentionally not duplicated inside F1/T2.

## Memory hierarchy

`RAW SOURCE → VERIFIED FACTS → PATTERNS → CREATIVE CANDIDATES → EXPLICIT PRODUCT DECISIONS → UI/UX → ARCHITECTURE → IMPLEMENTATION → QA → DEPLOYMENT`

## Historical source rule

All historical claims must be read from `HISTORY/`. Exact quotes require source verification. Uncertain/deleted material must remain marked unavailable rather than invented.

## 2026-08-12 — UI/UX and build direction

The user approved a new core opening direction:

`LOCKED COUNTDOWN → MIDNIGHT UNLOCK → INTERACTIVE CAKE CEREMONY → MAKE A WISH → PERSONAL WORLD`

The creator has voice notes, video edits, and special messages that will later be placed into the experience.

### Proposed Personal World areas

- Her Universe
- Memory Constellation
- Voice Notes
- The Cinema / Video Edits
- Letters
- Finale

These are implementation directions, not permission to invent personal content.

### Explicit user constraints

1. **Memory Constellation must stay empty for now.** It must contain monthly sections from **June 2025 through July 2026**, with no memories prefilled by the assistant.
2. **Never write personal letters on the user's behalf.** Provide an editor/input area only.
3. Apply the same manual-entry principle to memories and other personal content: placeholders/editors first, user-supplied content later.
4. Do not manufacture historical events, quotes, emotional messages, or media captions.
5. Historical material, when added, must come from `HISTORY/` and be verified.

## Step 2 — Initial UI shell completed

Files added:

- `index.html`
- `styles.css`
- `app.js`
- `T2/STEP_2_BUILD_STATE.md`

The shell currently provides:

- locked countdown to `13 August 2026 00:00 IST`
- midnight unlock scene
- cinematic black / moon / mountain atmosphere
- interactive candle-lighting cake ceremony
- wish interaction
- Personal World navigation
- Her Universe motif section
- 14 empty Memory Constellation month sections
- manual memory entry interaction
- manual voice-note title/URL editor
- manual video title/URL editor
- manual letter title/body editor
- localStorage persistence for manually entered content
- responsive mobile-first UI
- finale placeholder

The UI does **not** contain generated personal letters or fabricated historical memories.

## Build priority for the 2-hour sprint

1. Get the complete journey rendering and navigable.
2. Polish the visual system and transitions.
3. Keep all personal-content slots manually editable.
4. Add only verified source material when explicitly requested.
5. QA on mobile.
6. Deploy.

## Current next step

**STEP 3 — Polish the complete cinematic journey and improve transitions/navigation while preserving the manual-content rule.**

## Continuity rule

After every major build step, append:

- current state
- what changed
- decisions
- rejected ideas
- known issues
- next step

Major locked product decisions also belong in F1.
