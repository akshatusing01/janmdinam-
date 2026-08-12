# SOURCE DOCUMENT — HISTORICAL SOURCE INDEX

**Repository:** `akshatusing01/janmdinam-`

## Purpose

This file explains where historical evidence lives and how a future builder should read it.

## Source priority

When sources disagree:

1. Raw exported chat / original media
2. Monthly historical extract in `HISTORY/YYYY-MM/`
3. Verified cross-month index, if later created
4. Interpretation / pattern analysis
5. Creative concepts

Never use a creative concept as evidence that something happened.

## Canonical monthly archive

Historical material should be added manually under:

```text
HISTORY/
└── YYYY-MM/
    ├── MONTH_EXTRACT.md
    ├── RAW_INDEX.md          # optional
    ├── MEDIA_INDEX.md        # optional
    └── source/               # optional, only when appropriate/available
```

Examples:

```text
HISTORY/
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
└── 2025-12/
    └── MONTH_EXTRACT.md
```

GitHub does not store empty folders, so create the folder by adding `MONTH_EXTRACT.md` (or another file) inside it.

## Recommended MONTH_EXTRACT.md format

Use this structure for every month:

```markdown
# YYYY-MM — MONTHLY HISTORICAL EXTRACT

## Source
- Original source:
- Date range:
- Completeness:
- Extraction date:
- Confidence / limitations:

## Statistics
- Total messages:
- Akshat:
- Purvi:
- Active days:
- Media:
- Edited:
- Deleted:
- Links:

## Firsts / milestones
- 

## Nicknames / vocabulary
- 

## Important conversations
### Topic
- Date/time:
- What happened:
- Exact quote available?: yes/no
- Source confidence:

## Events / memories
- 

## Media index
- 

## Funny / chaotic moments
- 

## Inside jokes / callbacks
- 

## People
- 

## Places
- 

## Achievements / milestones
- 

## Profile updates
- 

## Relationship evolution — observed only
- 

## Cross-month references
- 

## Date conflicts / uncertainty
- 

## Sensitive material
- Keep only what is necessary and appropriate for the project.
- Do not publish unnecessary sensitive information.

## Creative opportunities — NOT PRODUCT DECISIONS
- 

## Human-verification flags
- 

## Monthly summary
- 
```

## How I should use the archive

When asked to use historical material for the website:

1. Identify the relevant month(s).
2. Read the corresponding `MONTH_EXTRACT.md` files.
3. If an exact quote or exact chronology matters, locate the raw source referenced by that month's extract.
4. Separate verified facts from interpretation.
5. Only then propose a story/UI element.
6. Never copy a historical claim into product logic merely because it appears in a creative idea.

## Important privacy rule

The repository is public. Do not put sensitive personal disclosures, health details, private family matters, or unnecessary personal data into public source files unless there is a deliberate and appropriate reason. Prefer a minimal factual reference or keep the material outside the public repository.

## Current archive status

The previous F1/T2 documents contained monthly summaries. Those summaries were intentionally removed on 2026-08-12. From this point forward, monthly historical knowledge should be stored in `HISTORY/` and read from there.

## Current next step

Populate `HISTORY/` manually, month by month, starting with the earliest available extract. Once enough months are present, create a separate verified timeline/index only if the birthday experience requires one.
