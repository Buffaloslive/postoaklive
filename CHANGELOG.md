# Changelog

## 2026-07-09 — Revision 3 final punch list

### Added

- Added `bracket.html` for the Texas East tournament bracket.
- Added `assets/bracket/texas-east-bracket.png` from the project workspace / Google Drive bracket image.
- Added Bracket navigation link across the site.
- Added live bracket CTA linking to the official Google Sheets bracket.

### Changed

- Updated `live.html` copy to focus on the 10s All Stars' quest for the Texas East State Title.
- Updated the former third-party livestream iframe/direct links during the pregame phase; the retired provider URL is omitted from legacy documentation.
- Simplified `hype.html` copy to "Catch The Fever".
- Removed technical self-hosted-video copy from `hype.html`.
- Updated `CNAME` from `buffaloslive.com` to `postoaklive.com` for the dedicated PostOakLive deployment.
- Updated README with the new bracket page and intended hosting split.

### Removed

- Removed `Download MP4` and `Open Video File` buttons from the hype page.
- Removed the "Self-hosted video" and metadata-only preload explanatory copy from the hype page.

## 2026-07-12 – Bracket graphic update

- Replaced `assets/bracket/texas-east-bracket.png` with the updated bracket graphic supplied from Google Drive.
- No bracket page markup, navigation, styling, video, or live-stream files were changed.

## 2026-07-12 – Corrected bracket graphic update

- Replaced `assets/bracket/texas-east-bracket.png` with the corrected bracket graphic supplied from Google Drive.
- No bracket page markup, navigation, styling, video, or live-stream files were changed.

## 2026-07-13 – Updated bracket graphic

- Replaced `assets/bracket/texas-east-bracket.png` with the latest bracket graphic supplied from Google Drive.
- No bracket page markup, navigation, styling, video, or live-stream files were changed.


## 2026-07-13 – P001 GitHub Pages HTTPS restoration

- Closed P001 by verifying GitHub Pages HTTPS enforcement is enabled and certificate provisioning is approved for `postoaklive.com` and `www.postoaklive.com`.
- Confirmed both apex and `www` HTTPS URLs return HTTP 200 without certificate warnings.
- Documented root cause: stale/absent GitHub Pages custom-domain certificate provisioning state. Current repository `CNAME`, DNS, and production content are preserved; incident history includes transient CNAME reset commits before final restoration/documentation.

## 2026-07-13 – Championship landing page update

- Evolved the homepage into the Texas East Little League State Championship landing page without redesigning the site.
- Added the championship alert banner, championship-focused hero messaging, event detail pills, and primary “Watch the Championship Live” CTA.
- Replaced the Featured Team card with a Championship Game card.
- Added optimized WebP versions of the supplied championship poster and watercolor team portrait.
- Added championship story sections that build from event stakes to team journey to live broadcast.

## 2026-07-13 – Championship homepage deployment verification

- Pushed the championship homepage update to `Buffaloslive/postoaklive` on `main` at commit `f97a099`.
- Verified GitHub Pages completed a successful build for the championship homepage commit.
- Verified production `https://postoaklive.com/?v=f97a099` serves the updated championship title, primary CTA, and new poster/watercolor assets.

## 2026-07-13 – Championship homepage targeted refinements

- Added America/Chicago date-aware behavior for the championship game-time badge, championship heading, and team-story first sentence.
- Updated the team-story wording to “Twelve boys. Endless practices...” while preserving the rest of the copy.
- Changed the championship poster frame to preserve the source artwork’s square aspect ratio with `object-fit: contain` and no crop.
- Preserved the existing layout, styling, and page flow while making the requested targeted refinements.

## 2026-07-13 – Targeted refinements production verification

- Verified the live GitHub Pages site reflects the targeted championship homepage refinements from implementation commit `14d42c0`.
- Confirmed the production badge states, date-aware heading/story copy, linked `LIVE NOW` behavior, and uncropped square poster presentation.
- Confirmed mobile viewport testing showed no horizontal overflow and full poster visibility.

## 2026-07-13 – Final championship media update

- Added the mobile-optimized Championship Trailer to the hype page as the featured video.
- Preserved the existing state hype video below the new trailer.
- Replaced the bracket image with the final supplied bracket graphic.
- Replaced the championship graphic throughout with the final supplied artwork.
- Updated homepage trailer callout copy while preserving the existing championship page design.


## 2026-07-16 – P001 PostOakLive Legacy Edition

### Added

- Added a permanent championship legacy homepage with Hero, The Story, Our Path, We Prepared, We Got Hyped, The Championship, The Team, The Numbers, and Thank You sections.
- Added sanitized web copies of approved preparation-message videos and poster frames, with third-party source watermarks cropped out for public presentation.
- Added district, section, and state championship bracket artwork for the Our Path timeline.
- Added a concise privacy-safe championship recap and team-level summary.
- Added privacy redactions to the watercolor team artwork over jersey-name areas while preserving the full team composition.

### Changed

- Updated navigation from live-event labels to permanent legacy section links.
- Repurposed `live.html`, `hype.html`, and `bracket.html` so existing URLs no longer imply a current live stream, game replay, or live bracket dependency.
- Replaced temporary event copy with championship accomplishment and long-term preservation copy.
- Simplified JavaScript to current footer-year and sticky-header behavior only.
- Updated documentation to record the legacy-site architecture, privacy decisions, local verification, and known recap-source limitation.

### Removed

- Removed public livestream provider links and embedded game broadcast behavior from the site.
- Removed date-aware pregame/live-now behavior that is no longer appropriate after the championship was won.


## 2026-07-16 – Legacy Edition V2 final polish

### Changed

- Tightened the Our Path story around the season-defining arc: one loss, twelve straight wins, three championships.
- Replaced the Section Championship artwork with the approved Sectional Bracket v2 graphic.
- Replaced the team artwork with the approved Team Watercolor v2 derivative and privacy-redacted jersey-name areas without blurring.
- Rewrote We Prepared, We Got Hyped, The Final Chapter, The Team, The Numbers, and Thank You copy for stronger permanent-legacy storytelling.
- Rebuilt the championship section into polished recap, offense, pitching, defense, and tournament snapshot cards.
- Updated the Numbers section to use stronger story metrics and preserve the verified `150+` team-count figure.

### Notes

- LOB is marked unavailable because no official championship box-score file with LOB was present in the approved Drive materials available during this pass.
