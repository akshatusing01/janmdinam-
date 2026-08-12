# F1 — MASTER BRAIN / CANONICAL PROJECT MEMORY

**Project:** Birthday Digital Experience for Purvi  
**Repository:** `akshatusing01/janmdinam-`  
**Last reset:** 2026-08-12

## Purpose

F1 stores only **project decisions, architecture state, workflow rules, and source-index rules**.

It does not store monthly chat history, shared-memory summaries, nicknames, historical events, personal conversations, or reconstructed relationship memories. Those belong in the dedicated historical/source layers.

## Continuity rules

1. Raw monthly extracts are the source of truth for historical content.
2. Never turn an inference into a fact.
3. Keep historical evidence separate from creative interpretation.
4. Creative ideas are not product decisions until explicitly approved.
5. Exact quotes must come from the relevant raw/monthly source.
6. Missing or deleted material must remain marked unavailable.
7. Sensitive personal information should not be copied into public project documents unless absolutely necessary.
8. F1 records project state; it is not the historical archive.
9. New project decisions, corrections, rejections, architecture changes, QA results, and deployment state should be appended here.

## Repository memory architecture

```text
F1/F1_MASTER_BRAIN.md   → canonical project brain
T2/T2_CONTINUITY.md     → current workstream / transfer continuity
HISTORY/YYYY-MM/        → monthly historical source extracts
PERSONAL_ARCHIVE.md     → stable personal/source information
SOURCE_DOCUMENT.md      → source priority + extraction rules
```

Historical material must not be duplicated into F1/T2. F1 and T2 may describe **where** historical material lives and **how** it should be used.

## Current product direction

The project is a birthday surprise experience. The exact journey, screens, interactions, assets, and technical architecture are not locked yet.

Current next work unit:

> **BIRTHDAY EXPERIENCE RECONSTRUCTION — COMPLETE JOURNEY**

Define what Purvi experiences from opening to finale before coding.

The broad opening direction previously explored is:

**Shock → Mystery → Cinematic Opening → Story**

This remains a direction, not a locked storyboard.

## Architecture reset

Previous concepts such as a memory graph, vault, simulator, AI memory engine, large database-first architecture, or fixed multi-section flow are **not current requirements**. Reconsider them only if the final experience requires them.

## Required future workflow

`MONTHLY SOURCE EXTRACTS → VERIFIED FACTS → EXPERIENCE CANDIDATES → EXPLICIT PRODUCT DECISIONS → UI/UX → ARCHITECTURE → IMPLEMENTATION → QA → DEPLOYMENT`

## Monthly archive workflow

Each available month should be manually added under:

```text
HISTORY/YYYY-MM/MONTH_EXTRACT.md
```

Optional raw-source organization may sit inside the same month folder when appropriate.

A monthly extract should preserve, where available:

- source information
- monthly statistics
- firsts / milestones
- nicknames / special words / phrases
- important conversations
- events / memories
- media index
- funny / chaotic moments
- inside jokes / callbacks
- people / places
- achievements / milestones
- profile updates
- observed relationship evolution
- cross-month references
- date conflicts / uncertainty
- sensitive-material handling notes
- creative opportunities marked **NOT PRODUCT DECISIONS**
- human-verification flags
- monthly summary

Raw source remains the final authority for exact wording and chronology.

## Latest project-state update — 2026-08-12

The latest user-requested change was to separate the historical archive from the continuity brain.

### Decisions recorded

- The user requested that the important shared-memory material and monthly historical archive no longer be retained inside the F1/T2 continuity layer.
- F1 was reset to project-state information only.
- T2 was reset to workstream continuity and now records the archive workflow rather than duplicating history.
- Monthly history is to be manually placed into dedicated `HISTORY/YYYY-MM/` folders.
- The recommended per-month file is `MONTH_EXTRACT.md`.
- `SOURCE_DOCUMENT.md` is the canonical guide for the monthly extraction format and evidence hierarchy.
- `PERSONAL_ARCHIVE.md` remains separate and was not deleted.
- Future website work must read the relevant monthly source material instead of relying on remembered historical summaries.

### Historical-use rule

When a website feature or story beat depends on real history:

1. Identify the relevant month(s).
2. Read the relevant `HISTORY/YYYY-MM/` extract.
3. Locate raw source when exact wording, chronology, or media context matters.
4. Separate verified fact from interpretation.
5. Mark uncertainty instead of inventing missing details.
6. Only then turn the material into an experience candidate.
7. Explicitly approve the experience before implementing it.

## Current next action

Populate `HISTORY/` with the available monthly extracts, then reconstruct the complete birthday journey from 00:00 to finale.

Do not begin implementation until the experience is explicitly locked.

## Change log

### 2026-08-12 — Historical-memory reset
- Removed monthly historical summaries from F1.
- Removed shared-memory/story summaries from F1.
- Kept only project continuity and workflow rules.
- Established dedicated monthly source folders as the historical archive.

### 2026-08-12 — Latest conversation/project continuity update
- Recorded the decision to keep historical memories out of F1/T2 and store them under `HISTORY/YYYY-MM/`.
- Recorded the monthly extraction format and source-of-truth workflow.
- Recorded how historical material must be consumed for future website work.
- Reaffirmed the experience-first development order and architectural reset.

### Future entries
Append major project decisions, rejected concepts, corrections, architecture changes, QA state, and deployment state here. Do not paste monthly chat history into F1.
