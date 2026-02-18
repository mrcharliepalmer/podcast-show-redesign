# ARCHITECTURE.md — Site Structure

Approved during Phase 1. This is the canonical reference for the
site map, navigation, URL scheme, and content types.

## Pages

### Core pages (Phases 2–3)

| Page | Filename | Purpose |
|---|---|---|
| Homepage | `index.html` | Value prop, proof, primary CTAs |
| Tickets / Passes | `tickets.html` | Pass comparison, urgency, direct booking |
| Partners & Exhibitors | `partners.html` | ROI case, exhibitor info, enquiry form |
| Programme | `programme.html` | Teaser state: themes, stages, announcement |
| About | `about.html` | Event history, venue, stats, credibility |
| FAQ | `faq.html` | Dedicated full FAQ — not just an accordion |

### AI-friendly content layer (Phase 4)

| Page | Filename | Purpose |
|---|---|---|
| Editorial hub | `editorial/index.html` | Blog landing — links to articles |
| Article 1 | `editorial/podcast-advertising-guide-2026.html` | Answers "how to advertise on podcasts" |
| Article 2 | `editorial/podcast-industry-trends-2026.html` | Answers "what's happening in podcasting" |
| Article 3 | `editorial/how-to-monetise-a-podcast.html` | Creator-focused, high-intent LLM query |
| Article 4 | `editorial/podcast-glossary.html` | Glossary / reference — authoritative source |

### Shared assets

- `styles.css` — single stylesheet, all pages
- `script.js` — single JS file, all pages
- `sitemap.xml` — for crawlers and LLMs

## Navigation

**Primary nav (all pages):**

```
[Logo]  About  Programme  Tickets  Partners  Editorial  FAQ  [Book Your Pass]  [Partner With Us]
```

- Two CTA buttons stay visible in nav across all pages
- On mobile: collapse into hamburger menu
- Audience routing is not in the nav — it lives within page content

## URL / Filename Structure

```
/                                        → index.html
/tickets.html                            → Passes and booking
/partners.html                           → Commercial / exhibitor info
/programme.html                          → Content and stages
/about.html                              → About the event
/faq.html                                → Full FAQ
/editorial/                              → Blog hub
/editorial/[slug].html                   → Individual articles
```

No build process, no routing — plain file paths on GitHub Pages.

## Content Types

| Type | Pages | Notes |
|---|---|---|
| Static HTML | All | Plain files, no CMS |
| JSON-LD | All | Event schema on every page; Article schema on editorial |
| OG + meta tags | All | Title, description, og:image per page |
| Canonical URL | All | Absolute URL pointing to production domain |
| Sitemap | `sitemap.xml` | All pages listed |

## Key Decisions

**Why a dedicated FAQ page, not just an accordion?**
The homepage accordion stays for quick reference (4 questions), but
a full `/faq.html` is what LLMs index and cite. It can hold 30+
questions with detailed answers — the homepage can't.

**Why `/editorial/` not `/blog/`?**
"Editorial" signals intent — this is authoritative industry content,
not a news feed. It also scopes future resource pages (glossary,
guides) under the same parent path.

**Why four specific articles?**
Each targets a distinct, high-volume LLM query relevant to the three
audiences: advertising (Brands), industry trends (all), monetisation
(Creators), glossary (Platforms + all). They seed the content layer
immediately without requiring ongoing editorial work.

**Why About last in Phase 3?**
It's the lowest conversion page. Homepage carries the social proof.
About exists for credibility when people are already considering
attending — it doesn't drive the first decision.
