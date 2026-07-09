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

### Livestream provider URL

Decision: embed the specific Varsity Hype livestream URL rather than the provider homepage.

Reason: this loads the correct stream directly for visitors.

### Hype page minimalism

Decision: remove technical labels and download buttons from the hype page.

Reason: the final requested user experience is the video itself, supported only by minimal fan-facing copy.

### Tournament bracket

Decision: add a separate `bracket.html` page rather than crowding the live page.

Reason: the bracket is a distinct visitor task and deserves a direct nav item and shareable URL.
