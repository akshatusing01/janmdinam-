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

## CURRENT BUILD DIRECTION — ISHVERSE

The user wants the website to create an exceptional reaction: a birthday experience that feels unlike a normal website.

Canonical direction:

**ISHVERSE = magical birthday universe + interactive celebration + personal world.**

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

The UI itself should feel like a birthday gift rather than a website containing birthday content.

## Opening / ceremony

```text
LOCKED COUNTDOWN
      ↓
MIDNIGHT UNLOCK — 13 AUGUST 2026 00:00 IST
      ↓
INTERACTIVE BUTTERSCOTCH CAKE CEREMONY
      ↓
MAKE A WISH
      ↓
EXTINGUISH CANDLES
      ↓
CUT CAKE
      ↓
CELEBRATION
      ↓
ENTER ISHVERSE
```

### Cake ceremony implementation priorities

1. Cinematic cake arrival.
2. Interactive candle lighting.
3. Quiet make-a-wish interaction.
4. Reliable tap-to-extinguish candles; microphone blow detection is optional later.
5. Drag-to-cut cake interaction.
6. Celebration/confetti.
7. Transition from candle smoke/light into ISHVERSE.
8. Optional manual cake-review input, if implemented, must preserve exactly what the user enters and must not be AI-generated.

Butterscotch is the chosen cake concept. Do not claim it is Purvi's favourite cake unless separately verified; documented source material supports butterscotch as an ice-cream preference.

## ISHVERSE structure

The Personal World should behave as an explorable environment, not a grid of generic cards.

Core areas:

- 🌹 Her Universe
- 🧠 Memory Constellation
- 🎧 Voice Notes / “Hear Me”
- 🎬 The Cinema / Video Edits
- 💌 Letters / manual messages
- 🦖 Secret Easter Eggs
- 🌅 Finale / sunrise transformation

### Her Universe visual interactions

Use documented likes as design language, selectively:

- black → premium base
- black rose → living visual element
- moon/night → atmosphere
- mountains → distant landscape
- sunrise/sunshine → ending transformation
- painting → creative interaction
- Bharatanatyam/dance → graceful motion language
- dinosaur → playful Easter egg
- teddy/dolls → cute collectible interaction
- romantic music → emotional layer
- butterscotch → cake ceremony concept

Do not turn these into a flat “favourites list.”

## MEMORY CONSTELLATION — LOCKED EMPTY

The Memory Constellation must currently contain **only empty monthly sections**:

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

No memories are to be inserted by the assistant.

When the creator later supplies a memory, provide an editable/manual entry flow and preserve creator-supplied content.

## MANUAL PERSONAL-CONTENT RULE — LOCKED

The assistant must not write personal letters, birthday messages, memory descriptions, voice-note captions, video captions, or other intimate content on the creator's behalf.

Provide editable placeholders/editors instead.

Creator-owned media to be inserted later:

- voice notes
- video edits
- special messages / letters

Historical content must be verified from `HISTORY/` before use.

## Emotional progression

The overall world should move from:

**night → midnight magic → celebration → exploration → emotional intimacy → sunrise**

The ending should use sunrise/sunshine as a transformation motif because it is associated with Purvi's documented preferences.

## Current implementation state

Initial shell exists at repository root:

- `index.html`
- `styles.css`
- `app.js`

The current shell includes the initial countdown, unlock, candle/cake, wish, Personal World, empty month sections and manual content editors. The next implementation pass should evolve this into the richer ISHVERSE direction.

## 2-hour build priority

1. Build the complete path end-to-end.
2. Make the cake ceremony the first showcase feature.
3. Create the ISHVERSE environment.
4. Connect manual content slots for creator-owned media/messages.
5. Keep Memory Constellation empty.
6. Add verified source material only when explicitly selected.
7. QA mobile.
8. Deploy.

Do not spend the entire sprint polishing a single scene while the journey is incomplete.

## Next step

**STEP 3 — Implement the richer ISHVERSE visual direction, beginning with the interactive cake ceremony and its transition into the Personal World.**

## Continuity log

### 2026-08-12 — ISHVERSE direction recorded
- Reframed the experience as a magical birthday universe + interactive celebration + personal world.
- Locked the countdown → midnight → cake → wish → cake cutting → ISHVERSE opening sequence.
- Locked empty Memory Constellation months June 2025 through July 2026.
- Locked manual-only handling of personal letters/messages/memories/media captions.
- Established cake ceremony as first showcase interaction and quality bar.

### Future entries
After every major build step, append:
- current state
- what changed
- decisions
- rejected ideas
- known issues
- next step

Major locked product decisions also belong in F1.
