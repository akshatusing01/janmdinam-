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

The experience is now being built as **ISHVERSE**: a magical birthday universe + interactive celebration + personal world.

### Opening ritual

`LOCKED COUNTDOWN → MIDNIGHT UNLOCK → INTERACTIVE CAKE CEREMONY → MAKE A WISH → CAKE CUTTING → PERSONAL WORLD / ISHVERSE`

The creator has prepared voice notes, video edits, and special messages for later insertion.

### Experience qualities

The intended reaction is strong surprise and delight — effectively: “WHAT THE HELL DID HE MAKE?! Nobody has ever seen something like this.”

The design direction is a deliberate mixture of:

- luxury
- magical
- cute
- cinematic
- playful
- highly interactive
- birthday celebration first
- Purvi's personality second
- cinematic emotion third

The UI itself should feel like a birthday gift, not a normal website containing birthday content.

## Purvi-inspired visual language

Use documented likes as interaction/design language rather than as a checklist:

- black → premium deep base
- black rose → living visual element
- moon/night → world atmosphere
- mountains → distant landscape
- sunrise/sunshine → final transformation
- painting → creative interaction
- Bharatanatyam/dance → graceful motion language
- dinosaur → playful Easter egg
- teddy/dolls → cute collectible interaction
- romantic music → emotional layer
- butterscotch → chosen cake ceremony concept

## Core Personal World areas

- Her Universe
- Memory Constellation
- Voice Notes / “Hear Me”
- The Cinema / Video Edits
- Letters / manual messages
- Secret Easter Eggs
- Finale

The Personal World should feel like an explorable environment, not a conventional dashboard of cards.

## Cake ceremony — product direction

The cake ceremony is a showcase mini-game and the first quality bar for the experience.

Proposed interaction sequence:

1. Butterscotch cake appears in a celebratory cinematic environment.
2. User lights candles interactively.
3. Environment responds with flame light, glow and subtle smoke.
4. “Make a wish” becomes a quiet interaction.
5. Candle extinguishing uses a reliable tap interaction first; microphone blow detection is optional future enhancement.
6. User cuts the cake with a drag interaction.
7. Confetti/celebration follows the first slice.
8. Optional cake-review input can let Purvi write her own reaction; if implemented, the text must be stored/displayed as user-entered content and not generated.
9. Cake/candle atmosphere transitions into the ISHVERSE world.

### Important factual/content boundary

Butterscotch is a chosen cake concept for this experience. Do not state that “butterscotch cake is Purvi’s favourite” unless separately verified; the documented preference is butterscotch ice cream.

## Memory Constellation — locked empty state

The current build must contain empty monthly sections only for:

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

No memories are to be generated or prefilled by the assistant.

## Manual personal-content rule — locked

The assistant must not write personal letters, special messages, memory text, voice-note captions, video captions, or other intimate content on the creator's behalf.

Provide editable fields/placeholders/editors instead. The creator supplies the actual words/media.

Historical memories, when added, must come from `HISTORY/` and be verified.

## Proposed ISHVERSE progression

```text
LOCKED COUNTDOWN
      ↓
MIDNIGHT UNLOCK
      ↓
CAKE CEREMONY
      ↓
MAKE A WISH
      ↓
CUT CAKE
      ↓
CELEBRATION
      ↓
ISHVERSE
      ├── HER UNIVERSE
      ├── MEMORY CONSTELLATION (EMPTY MONTHS)
      ├── VOICE NOTES
      ├── CINEMA / VIDEOS
      ├── LETTERS / MANUAL MESSAGES
      └── SECRET EASTER EGGS
      ↓
EMOTIONAL PEAK
      ↓
SUNRISE TRANSFORMATION
      ↓
HAPPY BIRTHDAY / FINALE
```

This is the current product blueprint; implementation may evolve as individual scenes are built and tested.

## Current implementation state

The first showable root UI shell has been added:

- `index.html`
- `styles.css`
- `app.js`

It currently includes the initial countdown/unlock/cake/wish/Personal World shell and manual content slots. Continue implementation toward the richer ISHVERSE direction above.

## Build strategy

With the two-hour sprint constraint, prioritize a complete 70%-polished journey over perfecting one screen.

1. Build the complete experience path.
2. Make the cake ceremony the first showcase interaction.
3. Establish the ISHVERSE environment.
4. Connect manual content slots.
5. Keep Memory Constellation empty.
6. Add verified source material only when explicitly selected.
7. QA mobile.
8. Deploy.

## Current next work unit

**STEP 3 — Implement the richer ISHVERSE visual direction, starting with the interactive cake ceremony and the transition into the Personal World, while preserving all manual-content constraints.**

## Change log

### 2026-08-12 — Historical-memory reset
- Removed monthly historical summaries and shared-memory summaries from F1.
- Established `HISTORY/YYYY-MM/` as the canonical historical archive.

### 2026-08-12 — Experience direction
- Locked countdown → midnight unlock → cake ceremony → wish → cake cutting → ISHVERSE.
- Adopted ISHVERSE as the working/canonical name for the personal world.
- Shifted visual philosophy to luxury + magical + cute + cinematic + playful + highly interactive.
- Made birthday celebration the primary UI purpose.

### 2026-08-12 — Content safeguards
- Locked empty monthly Memory Constellation from June 2025 through July 2026.
- Locked manual-only personal content editing.
- Explicitly prohibited assistant-generated personal letters/messages/memories.

### 2026-08-12 — Initial UI implementation
- Added first showable root UI shell and recorded build state in T2.

### Future entries
Append major product decisions, rejected concepts, architecture changes, corrections, QA state, and deployment state. Do not duplicate monthly chat history here.
