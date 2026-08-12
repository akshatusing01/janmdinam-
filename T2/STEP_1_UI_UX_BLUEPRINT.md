# STEP 1 — BIRTHDAY EXPERIENCE UI/UX BLUEPRINT

**Date:** 2026-08-12
**Status:** Initial working blueprint — not yet a final product lock

## Objective

Build the first complete, showable UI/UX of the birthday experience before adding deeper historical features.

The experience is a personalized birthday surprise for Purvi centered on 13 August 2026. The immediate goal is a complete cinematic journey that works on mobile, with later iterations adding verified historical memories and richer interactions.

## 2-Hour Build Strategy

1. Lock visual identity.
2. Build complete journey as UI scenes.
3. Make navigation/transitions work.
4. Populate Purvi-specific visual language.
5. Add selected high-confidence historical material.
6. Create birthday finale.
7. QA and polish.

Priority is a complete 70%-polished experience over perfecting one screen.

## Current Journey Skeleton

```text
00:00
  ↓
THE OPENING
  ↓
MYSTERY
  ↓
CINEMATIC REVEAL
  ↓
THIS IS FOR YOU
  ↓
OUR STORY
  ↓
MEMORY WORLD
  ↓
HER WORLD
  ↓
EMOTIONAL PEAK
  ↓
13 AUGUST 2026
  ↓
FINALE
```

These are structural placeholders and are not yet locked copy or final scene names.

## Visual Direction

Core direction:

> **Black cinematic base + moonlight + subtle rose + warm sunrise transition + elegant typography + tiny personal Easter eggs.**

The experience should feel like a private cinematic experience made specifically for Purvi, not a generic or childish birthday website.

## Purvi-Inspired Visual Language

Source-backed ingredients to use selectively:

- Black — favourite colour
- Black rose — favourite flower
- Moon / night / winter
- Mountains
- Sunrise / sunshine
- Romantic melodies
- Art / painting
- Bharatanatyam / dance
- Dinosaur
- Teddy / dolls
- Diwali

These should be motifs, atmosphere, or subtle Easter eggs rather than a checklist of likes.

## Design System — Initial

### Background
Near-black / cinematic black.

### Light
Soft moon-white with restrained atmospheric glow.

### Accent
Very restrained rose/warm tone.

### Typography
One elegant display font plus one highly readable body font.

### Effects
- atmospheric glow
- soft grain
- blur
- particles
- subtle transitions
- cinematic fades

### Interaction language
Prefer discovery-oriented interactions:

`tap → reveal → transition → discovery`

Avoid excessive conventional buttons where possible.

## Application Shell

Initial component/page model:

```text
App
 ├── Intro
 ├── Journey
 ├── Memory
 ├── Her World
 └── Finale
```

The shell should provide:

- responsive mobile layout
- full-screen scenes
- transitions
- navigation state
- loading/opening state
- typography system
- background system
- reusable scene components

## Historical Content Strategy

Historical material must be pulled from `HISTORY/` rather than reconstructed from memory.

Only use high-confidence, emotionally meaningful material in the first build. Avoid turning the website into a WhatsApp archive.

Possible story categories:

- First
- Funny memory
- Chaotic memory
- School memory
- Proud moment
- Bhaiya moment
- Recent memory

Any exact quote must be verified against the raw/monthly source.

## Finale Direction

Initial placeholder:

```text
13
AUGUST
2026

For Purvi.

[final message]

✦
```

Exact copy and interaction are not yet locked.

## Explicit Non-Goals for First 2 Hours

- Do not resurrect the old Memory Graph/Vault/AI memory engine architecture.
- Do not build a large database-first system.
- Do not implement every historical memory.
- Do not over-polish a single screen while the journey is incomplete.
- Do not present uncertain historical details as facts.

## QA Targets

Before the first showable build:

- Android/mobile viewport
- scrolling
- transitions
- typography
- overflow
- image loading
- touch targets
- performance
- broken routes
- console errors
- final reveal

## Continuity Requirement

After every major milestone, update `T2/T2_CONTINUITY.md` with:

- current state
- what was built
- decisions
- rejected ideas
- next step

Major locked product decisions belong in `F1/F1_MASTER_BRAIN.md`.

## Next Step

**STEP 2 — Build the visual/app shell and get the complete scene sequence rendering and navigable.**
