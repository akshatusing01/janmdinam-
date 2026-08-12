# T2 — TRANSFER / WORKSTREAM CONTINUITY

**Project:** Birthday Digital Experience for Purvi  
**Repository:** `akshatusing01/janmdinam-`  
**Last updated:** 2026-08-12

## Read this first

This is an existing project. Do not treat it as a fresh build.

The repository is now split conceptually into:

- **Project brain:** `F1/F1_MASTER_BRAIN.md`
- **Personal/source archive:** `PERSONAL_ARCHIVE.md`
- **Historical monthly extracts:** `HISTORY/`
- **Source/index rules:** `SOURCE_DOCUMENT.md`

Historical monthly material is intentionally no longer duplicated inside F1/T2.

## Current priority

**Do NOT jump into coding.**

Next work unit:

> **BIRTHDAY EXPERIENCE RECONSTRUCTION — COMPLETE JOURNEY**

First determine exactly what Purvi experiences from opening to finale using the monthly source material.

## Memory hierarchy

```text
RAW MONTHLY SOURCE
        ↓
VERIFIED FACTS
        ↓
PATTERNS / INTERPRETATION
        ↓
CREATIVE EXPERIENCE CANDIDATES
        ↓
EXPLICIT PRODUCT DECISIONS
        ↓
UI / UX
        ↓
TECHNICAL ARCHITECTURE
        ↓
IMPLEMENTATION
        ↓
QA
        ↓
DEPLOYMENT
```

## Historical source rule

All historical claims must be read from the relevant file under `HISTORY/`.

Do not rely on remembered summaries from F1/T2.

For an exact quote, locate the raw source or exact monthly extract.

For an uncertain date, cross-check the relevant month(s).

For deleted/unavailable content, mark it unavailable rather than inventing it.

## Monthly folder convention

Every month should be stored independently:

```text
HISTORY/
├── 2025-06/
│   └── MONTH_EXTRACT.md
├── 2025-07/
│   └── MONTH_EXTRACT.md
├── 2025-08/
│   └── MONTH_EXTRACT.md
├── 2025-09/
│   └── MONTH_EXTRACT.md
├── 2025-10/
│   └── MONTH_EXTRACT.md
├── 2025-11/
│   └── MONTH_EXTRACT.md
├── 2025-12/
│   └── MONTH_EXTRACT.md
└── ...
```

See `SOURCE_DOCUMENT.md` for the recommended extraction format.

## Latest conversation — 2026-08-12

### User request: remove historical summaries from continuity brain

The user explicitly asked to erase the **important shared memories and monthly historical archive** from the continuity layer and asked for the correct way to manually place every month's extract into the repository so the assistant can read and use it for the website.

### Action taken

- F1 was rewritten so it no longer contains monthly historical summaries, shared-memory/story summaries, nicknames, historical events, or reconstructed relationship memories.
- T2 was rewritten so it no longer duplicates monthly history and instead defines the `HISTORY/YYYY-MM/` archive convention.
- `SOURCE_DOCUMENT.md` was updated to define the monthly extraction format and source-of-truth workflow.
- `PERSONAL_ARCHIVE.md` remains the separate personal/source-information layer.

### Agreed repository model

```text
F1/                    = project decisions + canonical project state
T2/                    = current workstream / transfer continuity
HISTORY/YYYY-MM/       = actual monthly historical extracts
PERSONAL_ARCHIVE.md    = stable personal/source information
SOURCE_DOCUMENT.md     = source priority + extraction rules
```

### Recommended monthly file

For each month, create:

`HISTORY/YYYY-MM/MONTH_EXTRACT.md`

The extract should ideally contain:

- source information
- monthly statistics
- firsts / milestones
- nicknames / special words / phrases
- important conversations
- events / memories
- media index
- funny / chaotic moments
- inside jokes / callbacks
- people
- places
- achievements / milestones
- profile updates
- relationship evolution as observed, not invented interpretation
- cross-month references
- date conflicts / uncertainty
- sensitive-material handling notes
- creative opportunities, explicitly marked as **NOT PRODUCT DECISIONS**
- human-verification flags
- monthly summary

Raw chat remains the final authority for exact wording and exact chronology.

### Optional raw-source organization

Where appropriate, a month may contain:

```text
HISTORY/YYYY-MM/
├── MONTH_EXTRACT.md
├── RAW_INDEX.md
└── source/
    └── original-export.txt
```

Do not duplicate very large raw sources unnecessarily if they already exist elsewhere; an index/reference is sufficient when possible.

## How historical material will be used for the website

When designing a historical beat, the builder/assistant should:

1. Identify the relevant month(s).
2. Read the monthly extract from `HISTORY/YYYY-MM/`.
3. Locate the raw source when exact wording, chronology, or media context matters.
4. Separate verified history from interpretation.
5. Mark uncertain material rather than filling gaps with imagination.
6. Convert only approved historical material into an experience candidate.
7. Keep creative treatment separate from the historical claim.

Therefore the intended pipeline is:

`Monthly history → verification → story/pattern → experience candidate → explicit decision → website`

## Architecture reset

Do not automatically restore the previous Private Digital World implementation, memory graph, vault, simulator, AI memory engine, database-first architecture, or fixed section structure. Those remain historical concepts only.

## Current birthday-experience direction

The experience is still in the reconstruction/design stage. The broad opening direction previously recorded remains:

**Shock → Mystery → Cinematic Opening → Story**

This is not yet a locked storyboard.

The complete journey must be defined before implementation.

## What to do next

1. Add every available monthly extract to `HISTORY/YYYY-MM/`.
2. Read the relevant month when designing any historical beat.
3. Build a verified cross-month timeline only when needed.
4. Reconstruct the complete birthday journey.
5. Explicitly lock the experience.
6. Derive UI/UX.
7. Derive the smallest technical architecture capable of delivering it.
8. Build.
9. QA on mobile.
10. Deploy.

## Change log

### 2026-08-12 — Historical-memory reset
- Removed monthly historical material from T2.
- Removed shared-memory/story summaries from T2.
- Established `HISTORY/YYYY-MM/` as the canonical monthly archive location.
- Kept T2 focused on current workstream continuity.

### 2026-08-12 — Conversation continuity update
- Recorded the user's request to preserve the latest project discussion in T2.
- Recorded the decision to keep monthly history out of F1/T2 and place it in dedicated `HISTORY/YYYY-MM/` folders.
- Recorded the recommended `MONTH_EXTRACT.md` structure.
- Recorded how future website work must consume the monthly source material.
- Reaffirmed F1/T2/source separation and the experience-first development order.

### Future entries
Append project-state changes, decisions, rejected concepts, architecture changes, QA state, and deployment state. Do not duplicate monthly chat history here.
