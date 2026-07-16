# Decisions

## 2026-07-09 — Revision 3 final punch list

### Dedicated PostOakLive deployment

Decision: deploy the completed Post Oak site from a dedicated PostOakLive GitHub repository with `postoaklive.com` as the custom domain.

Reason: `buffaloslive.com` should remain available as its own independent project. The Post Oak site should not depend on a Buffalos Live repository/domain path long term.

### GitHub Pages custom domain

Decision: set this site's `CNAME` to `postoaklive.com`.

Reason: GitHub Pages uses the repository `CNAME` file to bind the custom domain for static hosting.

### DNS / GoDaddy

Decision: PostOakLive.com should point directly at the dedicated GitHub Pages deployment instead of forwarding to BuffalosLive.com.

Reason: forwarding keeps the two projects coupled and exposes the wrong canonical domain. Direct DNS makes PostOakLive.com the production site.

Recommended GitHub Pages DNS target:

- Apex `postoaklive.com`: GitHub Pages A/AAAA records or GoDaddy forwarding removed and DNS pointed per GitHub Pages instructions.
- `www.postoaklive.com`: CNAME to the GitHub Pages host for the dedicated repo.

### Pregame livestream provider URL

Decision: during the temporary pregame phase, use the specific third-party livestream URL rather than a provider homepage.

Reason: this loaded the correct stream directly for visitors at the time. In the Legacy Edition, public livestream links are retired and omitted.

### Hype page minimalism

Decision: remove technical labels and download buttons from the hype page.

Reason: the final requested user experience is the video itself, supported only by minimal fan-facing copy.

### Tournament bracket

Decision: add a separate `bracket.html` page rather than crowding the live page.

Reason: the bracket is a distinct visitor task and deserves a direct nav item and shareable URL.


## 2026-07-16 — Legacy Edition privacy and architecture

### Permanent legacy homepage

Decision: make `index.html` the complete documentary-style championship home rather than spreading the core story across separate live, hype, and bracket pages.

Reason: the site's purpose changed from event operations to long-term preservation. A single scrollable story best preserves the premium sports-media feel and avoids dead or misleading event links.

### Livestream retirement

Decision: retire public livestream and replay behavior. `live.html` remains as a preserved URL but now states that no livestream or game replay is published and links into the legacy site.

Reason: the championship has concluded and the privacy brief explicitly prohibits full game recordings or livestream replays.

### Privacy-first content model

Decision: publish team-level storytelling, team photos/artwork, approved hype/preparation videos, bracket graphics, and concise team-level championship facts only. Do not add public rosters, player pages, individual bios, school/contact/birth information, or player statistics tied to full names.

Reason: several families do not want fully identifying individual player information online; privacy wins over storytelling detail.

### Championship recap source

Decision: use the final state bracket as the verified public source for the championship recap and team-level box summary.

Reason: no separate recap/box-score document was visible in the State Champs Redesign folder during implementation. The bracket verifies the opponent, final score, 3-0 state record, and one run allowed without publishing individual player details.


## 2026-07-16 — Legacy Edition V2 final polish

### Team Watercolor v2 privacy treatment

Decision: use the revised Team Watercolor v2 artwork, but publish a derivative with non-blur redaction blocks over jersey-name areas.

Reason: the source artwork contains readable jersey names. The project privacy rule against publishing full player-identifying information remains controlling, while the derivative still preserves the full team composition and jersey numbers.

### Section Championship v2 artwork

Decision: replace the prior section bracket graphic with Sectional Bracket v2.

Reason: the updated graphic accurately reflects the correct three-game Section 3 tournament run.

### Championship LOB

Decision: do not invent or infer runners left on base. Mark LOB unavailable in approved materials until an official box-score source is provided.

Reason: the Drive materials available during this pass did not include an official box-score file with LOB, and the site should prioritize factual accuracy over speculative detail.
