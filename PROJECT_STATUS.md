# Project Status

## 2026-07-09 — Revision 3 final punch list

Status: ready for final deployment to a dedicated PostOakLive repository and `postoaklive.com`.

Completed locally:

- Updated `live.html` intro copy to: "Follow Post Oak Little League's 10s All Stars on their quest for the Texas East State Title."
- Updated the Varsity Hype embed and direct fallback link to the specific livestream URL:
  `https://app.varsityhype.com/livestream/16e0a0a6-6b84-4c00-9dd6-6ca06510db5c/`
- Cleaned up `hype.html` so the page focuses on the video with minimal supporting text and the phrase "Catch The Fever".
- Removed the MP4 download/open buttons and the technical self-hosting copy from the hype page.
- Added `bracket.html` with the Texas East tournament bracket image and a prominent live bracket button.
- Updated site navigation to include the Bracket page.
- Changed `CNAME` to `postoaklive.com` for dedicated GitHub Pages deployment.

Pending external infrastructure step:

- Create/use a dedicated GitHub repository for PostOakLive and point `postoaklive.com` directly to it through GitHub Pages + GoDaddy DNS.
- Leave `buffaloslive.com` independent in its existing repository/domain.


## Exact deployment instructions — waiting on credentials

Do **not** deploy this site into the existing BuffalosLive repository.

### Target GitHub repository

- Owner/account: `Buffaloslive`
- Repository name: `postoaklive`
- Intended public URL: `https://github.com/Buffaloslive/postoaklive`
- GitHub Pages source: `main` branch, repository root (`/`)
- Custom domain: `postoaklive.com`

### GitHub token permissions needed

Provide a temporary GitHub fine-grained Personal Access Token for the `Buffaloslive` account with the minimum permissions below:

- Repository access: allow creating/managing the new `Buffaloslive/postoaklive` repository, or pre-create the repo and grant access only to that repo.
- Contents: **Read and write** — required to push the static site files.
- Metadata: **Read-only** — automatically required by GitHub.
- Administration: **Read and write** — required only if I should create the repository and configure GitHub Pages/custom domain through the API. If you pre-create the repo and enable Pages yourself, this can be avoided.
- Pages: **Read and write** — required to configure/verify GitHub Pages through the API if available in the fine-grained token UI.

Acceptable alternatives:

1. Pre-create `Buffaloslive/postoaklive`, enable Pages from `main` / root, and provide a token with only `Contents: Read and write` for that repository.
2. Provide temporary SSH deploy key write access for `Buffaloslive/postoaklive` after the repo exists.

### GitHub deployment commands

After credentials are available, run from `/workspace/postoaklive`:

```bash
# confirm clean working tree and final commit
git status --short
git log --oneline -1

# point origin to the dedicated repo, not BuffalosLive
git remote set-url origin https://github.com/Buffaloslive/postoaklive.git

# push final site
git push -u origin main
```

Then configure GitHub Pages for:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`
- Custom domain: `postoaklive.com`
- Enforce HTTPS: enabled after DNS validates

### GoDaddy / DNS information needed

I need one of the following:

1. Access to update GoDaddy DNS for `postoaklive.com`; or
2. The current DNS records exported/screenshot plus permission for you to make the exact edits; or
3. Confirmation that you want me to provide copy/paste DNS changes only.

DNS changes required for direct GitHub Pages hosting:

- Remove GoDaddy forwarding from `postoaklive.com` to `buffaloslive.com`.
- Apex/root `postoaklive.com` should point to GitHub Pages using GitHub's current A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Add AAAA records if IPv6 is desired:
  - `2606:50c0:8000::153`
  - `2606:50c0:8001::153`
  - `2606:50c0:8002::153`
  - `2606:50c0:8003::153`
- `www.postoaklive.com` should be a CNAME to `Buffaloslive.github.io` unless GitHub reports a different Pages host after repo creation.

After DNS propagates, verify:

```bash
dig +short postoaklive.com A
dig +short www.postoaklive.com CNAME
curl -I -L https://postoaklive.com/
curl -I -L https://www.postoaklive.com/
```

### Final production verification checklist

- `https://postoaklive.com/` serves the Post Oak Live homepage directly.
- `https://postoaklive.com/live.html` loads the specific Varsity Hype livestream URL.
- `https://postoaklive.com/hype.html` plays the self-hosted hype video.
- `https://postoaklive.com/bracket.html` displays the bracket image and live bracket button.
- `https://buffaloslive.com/` remains independent and is not used as the Post Oak production repo/domain.
- No console errors on home, live, hype, or bracket pages.
- Mobile and desktop layouts remain polished.


## 2026-07-09 — Dedicated repository push completed

The completed website was pushed to the dedicated repository:

- Repository: `https://github.com/Buffaloslive/postoaklive`
- Branch: `main`
- Commit pushed: `1a1e6ca`

GitHub Pages enablement was attempted through the GitHub API, but GitHub returned:

```text
403 Resource not accessible by personal access token
```

Interpretation: the provided fine-grained token has repository contents access and was sufficient to push the site, but it does not have the Pages/Administration permission required to enable GitHub Pages or set the custom domain through the API.

Next required access step:

- Add `Pages: Read and write` if available, and/or `Administration: Read and write` for `Buffaloslive/postoaklive`; or
- Manually enable GitHub Pages in the repo settings:
  - Settings → Pages
  - Source: Deploy from a branch
  - Branch: `main`
  - Folder: `/ (root)`
  - Custom domain: `postoaklive.com`

## 2026-07-12 Update – Bracket Graphic

- Production bracket image was replaced with the latest supplied tournament bracket graphic.
- Scope intentionally limited to the bracket image asset plus this status/changelog documentation.
- Verification target: https://postoaklive.com/bracket.html

## 2026-07-12 Update – Corrected Bracket Graphic

- Production bracket image was replaced with the corrected supplied tournament bracket graphic.
- Scope intentionally limited to the bracket image asset plus this status/changelog documentation.
- Verification target: https://postoaklive.com/bracket.html

## 2026-07-13 Update – Updated Bracket Graphic

- Production bracket image was replaced with the latest supplied tournament bracket graphic.
- Scope intentionally limited to the bracket image asset plus this status/changelog documentation.
- Verification target: https://postoaklive.com/bracket.html


## 2026-07-13 P001 Incident – GitHub Pages HTTPS restored

- Incident: `postoaklive.com` and `www.postoaklive.com` served GitHub's fallback `*.github.io` certificate after GitHub Pages had no custom-domain certificate recorded.
- Root cause: GitHub Pages custom-domain certificate provisioning state was absent/stale even though repository `CNAME` and public DNS were correct.
- Corrective action: GitHub Pages custom-domain provisioning was reset; current repository code, root `CNAME` content, DNS records, and production content are preserved. Incident history includes transient CNAME reset commits before final restoration/documentation.
- Verification: GitHub Pages reports custom domain `postoaklive.com`, certificate approved for `postoaklive.com` and `www.postoaklive.com`, HTTPS enforcement enabled, and both HTTPS URLs return HTTP 200 with valid certificates.
