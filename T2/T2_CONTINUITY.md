# T2 — TRANSFER / WORKSTREAM CONTINUITY

**Project:** Birthday Digital Experience for Purvi  
**Repository:** `akshatusing01/janmdinam-`  
**Last updated:** 2026-08-12

## CURRENT PRIORITY RESET

Time is extremely limited. The previous “universe-first” direction is deprioritized.

**Main experience priority:**

1. Countdown
2. Interactive cake-cutting ceremony
3. BIG playful celebration
4. Videos / cinema
5. Manual letter writing
6. Voice notes
7. Memory section only as a secondary placeholder

The experience after the countdown and cake must feel **playful, childish, colorful, celebratory and gift-like**.

## LOCKED / DO NOT REDESIGN

### Countdown
The countdown remains the opening gate. A **Temporary unlock** button is available for development/demo purposes.

### Cake ceremony
The cake ceremony remains:

`LIGHT CANDLES → MAKE A WISH → EXTINGUISH → CUT CAKE → CONFETTI`

## POST-CAKE FLOW

```text
CAKE CUT
   ↓
BIG CELEBRATION SCREEN
   ↓
PLAYFUL PARTY ROOM
   ├── 🎬 MOVIE TIME
   ├── 💌 OPEN MY LETTER
   ├── 🎧 HEAR THIS
   └── ✨ MEMORY JAR
```

## SUPABASE STORAGE — IMPLEMENTED

Supabase project:

- Project: `𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲 💌`
- Region: `ap-northeast-1`
- Project ref: `zvvkfevppxjtkziyubvc`
- Storage bucket: `birthday-media`
- Bucket access model: public for serving uploaded media
- Bucket file-size limit: 500 MB
- Allowed MIME families: video/*, audio/*, image/*

The Supabase bucket was configured with Storage RLS policies permitting the birthday app to insert/update/delete objects in `birthday-media`. Supabase documentation notes that uploads require Storage RLS permissions even for public buckets; the public model affects serving/downloading, not upload authorization.

### App integration

`app.js` now uploads selected browser files directly to Supabase Storage using the project's publishable key.

Supported flows:

- 🎬 Video picker → upload to `birthday-media/video/...` → public URL → native video player
- 🎧 Audio picker → upload to `birthday-media/audio/...` → public URL → native audio player

The selected filename and resulting public URL are also kept locally so a refresh can restore the last uploaded media URL on the same device.

The frontend uses only the **publishable** Supabase key. No service/secret key is embedded in the website.

## IMPLEMENTED — MANUAL LETTER

The Letter Room contains:

- editable title field
- large message area
- explicit SAVE MY LETTER button
- local-device persistence
- no AI-generated personal text

## MEMORY RULE — STILL LOCKED

Fourteen month sections remain empty by default:

June 2025 → July 2026.

No assistant-generated memories are inserted.

## CURRENT TECHNICAL STATE

- Countdown target: `2026-08-13T00:00:00+05:30`.
- Temporary unlock: localStorage.
- Cake interaction: client-side.
- Video/audio: Supabase Storage upload + public playback URL.
- Letter: localStorage.
- Memory entries: manual/local.

## SECURITY NOTE

The publishable browser key is intentionally client-side. Storage access is controlled by Supabase policies. The Supabase service/secret key must never be put into the website.

Before final public deployment, review Storage policies/advisors and decide whether the bucket should remain public or become private with authenticated/signed access. For this private birthday site and short sprint, public media URLs are being used for simplicity.

## NEXT WORK — DO NOT WASTE TIME ON UNIVERSE

1. Test upload from Android.
2. Verify uploaded video survives refresh.
3. Verify audio upload/playback.
4. Add actual creator videos/voice notes.
5. Write the actual letter manually.
6. Final mobile polish.
7. Deploy.

## CONTINUITY LOG

### 2026-08-12 — Celebration-first reset
- Explicitly deprioritized the previous universe-heavy concept.
- Preserved countdown and cake ceremony.
- Rebuilt post-cake flow around celebration, videos, letters and playful interaction.
- Added temporary countdown unlock.
- Added functional browser media selection.

### 2026-08-12 — Supabase media integration
- Connected the existing birthday Supabase project.
- Created/configured `birthday-media` Storage bucket.
- Added Storage policies for app media uploads/updates/deletes.
- Replaced session-only video/audio Object URLs with Supabase Storage uploads and persistent public URLs.
- Kept the frontend on the publishable key only.
