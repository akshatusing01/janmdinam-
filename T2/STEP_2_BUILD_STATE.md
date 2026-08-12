# STEP 2 — INITIAL BUILD STATE

**Date:** 2026-08-12
**Status:** Initial UI shell built

## User-approved direction

The birthday experience now begins with:

`LOCKED COUNTDOWN → MIDNIGHT UNLOCK → INTERACTIVE CAKE CEREMONY → WISH → PERSONAL WORLD`

The cake concept is a butterscotch cake chosen by the project creator. It is not presented as a verified personal preference unless separately sourced.

## User constraints

1. The Memory Constellation must contain empty monthly sections only for:
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
2. Do not generate personal letters/messages/memories on the user's behalf.
3. Provide manual editors/placeholders so the user can add their own letters, memories, voice notes, videos and other personal material.
4. Historical content must come from `HISTORY/` when later populated.

## Implemented in repository

Root UI shell:

- `index.html`
- `styles.css`
- `app.js`

Current experience includes:

- locked countdown targeting `13 August 2026 00:00 IST`
- midnight unlock scene
- cinematic black/moon/mountain visual language
- interactive candle-lighting cake ceremony
- wish interaction
- Personal World navigation
- Her Universe visual motif section
- Memory Constellation with 14 intentionally empty monthly sections
- manual memory entry prompt
- manual voice-note title + URL editor
- manual video title + URL editor
- manual letter title + body editor
- localStorage persistence for manually entered content
- simple finale placeholder
- responsive mobile-first styling

## Important content policy in implementation

The website currently contains no invented personal letter, historical memory, voice-note content, or video content.

The UI explicitly tells the creator to supply those items manually.

## Media strategy

Voice notes and videos currently accept hosted URLs as placeholders. Local media assets can be integrated later without changing the conceptual UI.

## Preview/testing note

Production behavior remains locked until the target time. A preview mechanism was planned so the creator can inspect the unlocked UI before midnight; if the production shell is tested before the target, use a controlled preview implementation rather than changing the real unlock date.

## Next build step

**STEP 3 — Polish the complete journey and replace the current placeholder world navigation with the final cinematic scene transitions, while keeping all personal-content areas manually editable.**

After Step 3, update T2 with actual implementation/QA status.
