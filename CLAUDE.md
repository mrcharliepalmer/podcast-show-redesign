# CLAUDE.md — The Podcast Show London 2026 — Full Rebuild

## What This Is
A full rebuild of the TPS London website, starting from the existing
proof-of-concept at mrcharliepalmer.github.io/podcast-show-redesign.

The current official site (thepodcastshowlondon.com) is cluttered and
conversion-weak. The existing GitHub version is a cleaner starting point
but treat it as reference only — not as a template to preserve.

The goal is a bold, editorially confident site that:
- Converts visitors to pass buyers and partnership enquiries
- Has a clear, intuitive customer journey for three distinct audiences
- Is structurally designed to surface in LLM-based search (AI-friendly)
- Can grow — blog, resources, and value content beyond the event itself

Charlie is Marketing Lead for TPS. This site is a working artefact
that may replace or inform the official site. Build it accordingly.

## Brand Constraints (non-negotiable)
- Event name: The Podcast Show London 2026
- Dates: 20 & 21 May 2026
- Venue: Business Design Centre, Islington, London
- All factual content (prices, stats, quotes) from existing index.html
- CDN image paths at cdn.asp.events — do not alter these
- Brand colour: Purple #6B2D9E (in use across the build; awaiting
  final brand sign-off before deployment)

### Colour Palette
All colours sourced from TPS brand assets:
- Purple: #6B2D9E (primary brand colour)
- Purple dark: #55208a
- Pink: #E91E8C (secondary accent, CTAs)
- Yellow: #FFD600 (stats, Gold passes, primary hero CTA)
- Blue: #b8dff0 (light accent, limited use)
- Dark base: #0d0118 (dark section backgrounds)

### Typography
Three-font system loaded from Google Fonts:
- **Space Grotesk** — Display headings, section titles, pass names
- **Inter** — Bold heading weight (h1–h4 default)
- **Poppins** — Body text, navigation, UI elements

## Design Direction
Bold. Immediate. Editorially confident. Think magazine front cover,
not conference brochure. Large type, strong hierarchy, generous white
space. The design should feel like it belongs to a global summit,
not a regional trade show.

### Design Decisions (established)
These were arrived at through iteration and are now settled:
- **Photography limited to Hero and Pillars only.** Using photos in
  multiple adjacent sections causes visual competition and legibility
  problems. Programme cards use small contained images only.
- **Light/dark section rhythm is enforced.** No two dark sections or
  two photography sections back to back. Current rhythm:
  Dark → Yellow → Dark(photo) → Dark(overlay) → Gradient → Light →
  Pink → Light → Light → Purple gradient
- **Quote section uses a solid purple→pink gradient.** Background
  photography was removed because it competed with Pillars above and
  Programme below.
- **Pillar overlay is an even 35% dark wash**, not a gradient. Combined
  with text-shadow for legibility.
- **Yellow stats section stays yellow.** Confirmed.
- **Partner logos on white background** (not dark/inverted).

## Three Audiences — Treat Equally
Every page should be navigable by all three:
- Creators (learning, community, monetisation)
- Brands & Media (advertising, agencies, ROI)
- Platform & Tech (innovation, exhibiting, decision-makers)

**Homepage note:** The homepage does not use explicit audience routing
cards. Audience segmentation is handled implicitly through pass "Best
for" descriptions and will be addressed properly on dedicated pages
(tickets, partners). Explicit audience routing was tested and cut —
it added a section that didn't directly serve either conversion goal.

## Site Architecture

The approved site structure is documented in `ARCHITECTURE.md`.
Refer to that file for the full page list, navigation structure,
URL scheme, and content types.

### Build Order

#### Phase 1: Architecture — COMPLETE
Site map proposed and approved. See `ARCHITECTURE.md`.

#### Phase 2: Homepage — IN PROGRESS
The homepage is the most important page. Every section must serve
one of two conversion goals:
1. **Book a Pass** (primary)
2. **Partner or Exhibit With Us** (secondary)

Any section that doesn't directly build toward one of these goals
does not belong on the homepage.

**Approved homepage structure:**

| # | Section | Background | Purpose |
|---|---------|-----------|---------|
| 1 | Hero | Dark (photography) | Value prop + both CTAs |
| 2 | Stats | Yellow | Scale/credibility proof |
| 3 | Pillars | Photography (3-col) | Connect · Tune In · Stay Sharp |
| 4 | Tickets | Dark (purple overlay) | Pass cards — primary conversion |
| 5 | Quotes | Solid gradient | Social proof (carousel) |
| 6 | Programme | White (photo cards) | Content tease |
| 7 | Announcement | Pink | First content announcement + ticker |
| 8 | Partners | White (logo stack) | Partnership conversion |
| 9 | FAQ | White | Trust-building, 4-question preview |
| — | Footer | Purple gradient | Links, contact, newsletter, "Get Involved" |

**Cut from homepage (with reasoning):**
- **Who Should Attend** — audience routing handled by pass descriptions
  and future dedicated pages. Added visual clutter without driving
  conversion.
- **Submissions CTA** — niche action for a small minority. Now lives
  as a link in the footer under "Get Involved". May become a secondary
  page later.

#### Phase 3: Core pages
Build in order of conversion importance:
1. Tickets / Passes
2. Partners / Exhibitors
3. Programme / Content (teaser state until content announced)
4. About

#### Phase 4: AI-friendly content layer
This is what separates a brochure site from a resource.
Build pages and structures that LLMs will surface:
- A blog / editorial hub (even 3–4 seed articles to start)
- A dedicated FAQ page (not just an accordion on the homepage)
- Structured data markup (JSON-LD) for the event, speakers, sessions
- An industry glossary or resource page around podcasting trends
- Clear metadata on every page (title, description, OG tags)

The principle: answer questions that podcast industry professionals
are already asking LLMs. TPS should be the authoritative source.

## Technical Approach
- Multi-page HTML site (separate .html files per page)
- Shared CSS file (styles.css) — not inline per page
- Shared JS file (script.js) — vanilla JS only, no frameworks
- Must deploy on GitHub Pages with no build process
- Fully responsive — mobile-first
- Fast — no heavy assets, lazy-load images
- Every page: canonical URL, meta description, OG tags, JSON-LD
- CSS versioned via query string (currently `?v=9`)

## How to Work
1. Read this file and `ARCHITECTURE.md` before doing anything
2. Check the phase status above — don't re-propose completed phases
3. Build one phase at a time, present output, wait for feedback
4. For any decision that affects brand or facts, flag it rather
   than assume
5. After each phase: summarise what was built, what decisions were
   made and why, what comes next
6. Commit after each approved phase with a clear descriptive message
7. If you have a better idea than what's specified here, say so —
   don't just override silently and don't just comply silently either
8. **Avoid incremental patching.** When a design isn't working, stop.
   Propose a complete plan for what changes and why. Get approval.
   Then execute in one pass — not a chain of small fixes that lose
   sight of the whole.
