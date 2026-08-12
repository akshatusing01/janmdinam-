# F1 — MASTER BRAIN / CANONICAL PROJECT MEMORY

**Project:** Birthday Digital Experience for Purvi  
**Repository:** `akshatusing01/janmdinam-`  
**Last updated:** 2026-08-12

## Purpose
F1 stores canonical project state, explicit product decisions, architecture direction, workflow rules, QA/deployment state, and important corrections. It is not the monthly historical archive.

## Canonical continuity hierarchy
`RAW / SOURCE HISTORY → VERIFIED FACTS → PATTERNS / INTERPRETATION → CREATIVE CANDIDATES → EXPLICIT PRODUCT DECISIONS → UI/UX → TECHNICAL ARCHITECTURE → IMPLEMENTATION → QA → DEPLOYMENT`

## Historical-source rule
Historical material must be read from `HISTORY/`. Exact quotes require source verification. Uncertain dates/causes and deleted/unavailable material must remain flagged. Never convert creative interpretation into historical fact.

## Architecture reset
The previous large Private Digital World implementation and concepts such as Memory Graph, Vault, Simulator, AI memory engine, large database-first architecture, and fixed multi-section flow are not current requirements. Reconsider them only if the current birthday experience explicitly needs them.

## Current product direction — locked
The experience is **ISHVERSE**: a magical birthday universe + interactive celebration + personal world.

Target reaction: an unusual, high-surprise birthday experience rather than a normal website.

Target qualities:
- luxury
- magical
- cute
- cinematic
- playful
- highly interactive
- birthday celebration first
- Purvi's personality second
- cinematic emotion third

## Urgent delivery priority — locked 2026-08-12
There are only a few minutes before the birthday experience is needed. **Celebration and letters are the primary user value.** Do not spend remaining time on architectural expansion or nonessential visual reinvention.

Priority order for final QA/polish:
1. locked countdown
2. cake ceremony
3. BIG playful celebration / emotional peak
4. birthday world/dashboard access
5. Letters
6. Videos / Cinema
7. Voice
8. Memories

## Responsive product decision — locked 2026-08-12
- **Mobile is the primary optimization target.**
- **Desktop visual experience is preserved**; do not redesign desktop during this emergency pass.
- On mobile, fix placement, overflow, vertical rhythm, tap targets, scrolling, media sizing, and smooth transitions.
- The cake ceremony remains the protected core interaction.
- Celebration must be immediately readable and easy to operate with one hand.
- The Letter Room must be comfortable for reading on a phone, with generous typography, line-height and margins.
- Do not sacrifice the celebration or letters to polish secondary rooms.

## Preserved elements — DO NOT redesign
1. **Locked countdown** — keep its current behavior/visual implementation as the protected opening element.
2. **Cake-cutting ceremony** — keep the current cake interaction/ceremony implementation as the protected core interaction.

All other UI/UX was opened for redesign, but the emergency responsive pass must not destabilize working desktop behavior.

## Redesigned experience
### Midnight reveal
The post-countdown unlock is now a dedicated magical reveal rather than a simple “Enter” screen.

### ISHVERSE hub
The Personal World is an explorable universe map. Primary portals:
- Her Universe
- Memory Sky / Memory Constellation
- Hear Me / Voice Notes
- The Cinema / Video Edits
- The Letter Room
- The Dawn / Finale

### Letter Room
A redesigned paper-like room for creator-written messages. The assistant must not generate the personal text. **On mobile this room receives priority spacing/readability treatment.**

### Memory Sky
Fourteen empty monthly chapters remain exactly:
June 2025, July 2025, August 2025, September 2025, October 2025, November 2025, December 2025, January 2026, February 2026, March 2026, April 2026, May 2026, June 2026, July 2026.

No assistant-generated memory content is allowed.

## Manual personal-content rule — locked
The assistant does not write personal letters, special messages, memory descriptions, voice-note captions, video captions, or other intimate copy on the creator's behalf.

Provide editable placeholders/editors instead. Historical memories, when added, must come from `HISTORY/` and be verified.

## Current implementation state
Root files:
- `index.html`
- `styles.css`
- `mobile.css`
- `app.js`

The protected countdown and cake ceremony remain in place. `mobile.css` is a mobile-only responsive hotfix; desktop CSS is intentionally left unchanged.

## QA focus before birthday
- Android/mobile viewport and one-hand operation
- no horizontal overflow
- cake controls reachable and correctly placed
- celebration CTA visible without awkward scrolling
- Letter Room readable and scrollable
- video/audio controls fit mobile width
- transitions remain smooth
- desktop layout unchanged
- no invented personal content

## Change log
### 2026-08-12 — Emergency mobile/celebration pass
- Locked celebration and letters as the immediate priorities.
- Locked mobile-first QA while preserving desktop layout/visuals.
- Added `mobile.css` for responsive placement, touch targets, overflow, cake positioning, portal stacking and Letter Room reading comfort.
- Updated cache-busting versions for CSS/JS so the deployed site can pick up the emergency pass.

### 2026-08-12 — Experience direction
- Locked countdown → midnight unlock → cake ceremony → wish → cake cutting → ISHVERSE.
- Adopted ISHVERSE as the working/canonical name for the personal world.
- Shifted visual philosophy to luxury + magical + cute + cinematic + playful + highly interactive.
- Made birthday celebration the primary UI purpose.

### Future entries
Append major product decisions, rejected concepts, architecture changes, corrections, QA state, and deployment state. Do not duplicate monthly chat history here.
