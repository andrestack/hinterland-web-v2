# Design System — Hinterland Web

## Product Context
- **What this is:** Hinterland Web's own site — a solo AI/automation-implementation consultancy for small business owners, run by André.
- **Who it's for:** small business owners who need a real business bottleneck solved with the right existing tool (not novelty), and who value working with the same person long-term.
- **Space/industry:** freelance web/automation, adjacent to AI-agency and independent-consultant sites.
- **Project type:** marketing/portfolio site (Next.js + Payload CMS, React Bits Pro blocks).

## Aesthetic Direction
- **Direction:** Painterly-Editorial hybrid. One expressive asset — a painterly Starry-Night-style illustration of the Noosa Hinterland (swirling indigo/teal sky, gold-lit mountain, dark eucalypt bushland) — used sparingly as the site's signature (hero/key moments only). Everywhere else stays calm and restrained so the illustration reads as a deliberate signature, not decoration.
- **Decoration level:** minimal outside the illustration. No blobs, no gradient buttons, no icon grids — this explicitly replaces the current live site's decoration language (see `reference/brand-guidelines.md` in ContextOS for what's being retired).
- **Mood:** calm, grounded, premium-but-approachable. Quality shown through layout/type/component polish (React Bits blocks carry this), never narrated in copy.
- **Reference sites:** springs.estate, lightweight.info/en, gulamoff.dev (weak match — flagged, likely wrong URL/page), emilkowal.ski. Shared DNA: restrained, editorial, generous whitespace, motion that's earned not decorative.
- **Approved:** first HTML preview (2026-08-20) — color and typography confirmed as-is by André. Feedback: dial back explicit "taste" language in copy; let layout + React Bits components convey it implicitly.
- **Hero exception to light/dark toggle:** the hero illustration section always renders in its dark "night hinterland" treatment (hardcoded hex values, not theme tokens), regardless of the site-wide toggle. Tested light mode over the hero and it washed the painting out — it's a night scene, diluting it with a light scrim just looks foggy. Everything below the hero fold respects the toggle normally. See `src/components/blocks/hero-hinterland.tsx`.

## Typography
- **Display/Hero:** Fraunces — warm editorial serif with organic optical sizing, echoes the illustration's brushstroke quality without being literal.
- **Body:** Instrument Sans — quiet, clean, doesn't compete with the display face or the illustration.
- **UI/Labels:** Instrument Sans, uppercase tracking for small labels (case tags, eyebrows).
- **Data/Tables:** Instrument Sans (tabular-nums) if/when needed.
- **Code:** not applicable (marketing site).
- **Loading:** Google Fonts — `Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400` + `Instrument+Sans:wght@400;500;600`.
- **Retired:** Raleway (current live site's font) — dropped entirely in this realignment.

## Color
- **Approach:** restrained, two modes, both pulled from the same illustration — "night hinterland" (dark) and "daytime hinterland" (light). A theme toggle (Auto/Light/Dark, already built into the Payload template's `ThemeProvider`/`ThemeSelector`) lets visitors switch; system `prefers-color-scheme` wins on first visit, `dark` is the fallback default if no system preference is detected.
- **Dark mode ("night hinterland") — approved 2026-08-20:**
  - Background `#10141C` (near-black indigo night) · Surface/Card `#16323A` (deep teal swirl) · Text `#F0E9D8` (warm cream, cloud/moonlight) · Accent `#C9A24B` (moon-gold, mountain highlight) · Secondary `#2B3A24` (forest green, bushland) · Muted surface `#1B2530` · Muted text `#B9BFC0` · Border `#2A333A`
- **Light mode ("daytime hinterland") — added 2026-08-20, same illustration read in daylight tones:**
  - Background `#F7F2E6` (warm cream/cloud) · Surface/Card `#EFE7D4` (pale sage-cream) · Text `#14181F` (near-black indigo — mirrors the dark mode's background, continuing the "colors invert between modes" pattern from the original brand guidelines) · Accent `#A9803A` (moon-gold, darkened for AA contrast on a light ground) · Secondary `#33421F` (forest green, darkened) · Muted surface `#EFE9DA` · Muted text `#6B6355` · Border `#E0D6BE`
- **Connective tissue:** both modes share the same accent hue (gold) and the same "invert" relationship between the two backgrounds — dark's bg becomes light's text, and vice versa.
- **Semantic:** success/warning/error derived from the same warm/cool family in each mode (e.g. dark: success `#4F8A63`, warning `#C98F3A`, error `#C9573A`; light: success `#3D6B4A`, warning `#8A6A22`, error `#A6432B`) — avoid introducing disconnected "standard" red/green/blue.
- **Implementation:** both palettes are live in `src/app/(frontend)/globals.css` under `:root` (light) and `[data-theme='dark']`, mapped through the existing shadcn-style token names (`--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--accent`, `--border`, etc.) so all existing/React-Bits components pick them up automatically via Tailwind's `bg-background`, `text-foreground`, etc. utility classes.

## Spacing
- **Base unit:** 8px
- **Density:** spacious — generous whitespace matching the reference sites
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) — extend upward (4xl 96, 5xl 128) for hero/section padding, which runs large in this system (~120px section padding in the preview)

## Layout
- **Approach:** hybrid — full-bleed/asymmetric for hero moments carrying the illustration, strict grid-disciplined for content/proof sections (case studies, services).
- **Grid:** 3-column for case-study/proof blocks on desktop, collapsing to 1-column under ~860px.
- **Max content width:** 1180px
- **Border radius:** minimal — 2px on buttons/interactive elements, sharp edges elsewhere. This is a deliberate departure from the current site's `rounded-full` pill language.

## Motion
- **Approach:** minimal-functional by default, with ONE earned scroll moment: a subtle parallax/reveal on the hero illustration. No ambient animation elsewhere — this is the opposite of the current site's blob-glow ambient motion.
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms) long(400-700ms)

## Voice / Copy rules (not standard DESIGN.md, but load-bearing here)
- Never use the words "taste," "design," or similar self-describing language in on-page copy — the page demonstrates it, copy doesn't narrate it.
- No internal product/module jargon ("AIOS," "Dashboard Cockpit," etc.) — plain, concrete, client's-problem-first language only.
- Lead with concrete problem → existing-tool pairings (e.g. "team not logging hours → ClickUp + Telegram," not "AI-powered workforce solutions").

## Asset Dependencies
- **Hero illustration:** `public/images/hinterland-illustration.jpg` — the painterly Starry-Night-style Noosa Hinterland illustration this whole system is derived from. Sourced from `reference/logos/current_illustation.jpeg` in the ContextOS project. Used sparingly (hero/signature moments only), never as ambient decoration.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-08-20 | Initial design system created via /design-consultation | Realignment from the current live site's bright blue/sage/blob aesthetic toward a calm, editorial, illustration-anchored system, per founder brand interview (see `reference/brand-brief-2026-08.md` in ContextOS project) |
| 2026-08-20 | Color + typography approved as-is from first HTML preview | André confirmed both were correct on first pass; only copy tone needed adjustment |
| 2026-08-20 | Added light mode palette + wired both modes into globals.css, fonts into layout.tsx | Toggle already existed in the Payload template (ThemeProvider/ThemeSelector) — just needed the right tokens. Light mode derived from the same illustration read in daylight tones. |
| 2026-08-20 | Hero always renders dark, ignoring the site-wide toggle | Tested light mode over the hero illustration — it washed the painting out. The illustration is a night scene; hardcoded it to the dark hex values so it never dilutes. |
| 2026-08-20 | ~~Homepage recomposed to Navigation5, HeroHinterland, Features9, Cta8, FAQ7, Footer7 — SocialProof14, Showcase4, HowItWorks6 dropped~~ **SUPERSEDED same day, see below** | ~~Those three blocks are React Bits Pro stock content built on invented testimonials and Unsplash stock photography standing in for real client work. Rather than reskin fake case studies/quotes into the new palette, they were cut until André supplies real client quotes and real project photography.~~ |
| 2026-08-20 | ~~Features9 and FAQ7 content rewritten from generic SaaS copy to Hinterland-specific content~~ **SUPERSEDED same day, see below** | ~~Original blocks shipped with unrelated placeholder copy... Rewrote using the three problem→tool pairs and positioning from `reference/brand-brief-2026-08.md` — flagged as first-draft copy, not final.~~ |
| 2026-08-20 | **Correction: reverted to a pure reskin.** All 9 original React Bits Pro blocks restored to the homepage compose in original order (Navigation5, Hero12, SocialProof14, Features9, Cta8, FAQ7, Showcase4, HowItWorks6, Footer7), with their original copy/structure/interactions (persona tabs, the SaaS FAQ, the cursor-tracking "Horizon" CTA animation, testimonials, stock case studies) fully intact. `hero-hinterland.tsx` deleted; hero reverted to Hero12's original floating-title-card layout with the Unsplash photo swapped for `hinterland-illustration.jpg`. Only colors/fonts/radius were re-themed (`neutral-*`/`white`/`black` → semantic tokens), plus two off-palette accent colors (a stray blue radial highlight in Features9, an orange step-highlight in HowItWorks6) swapped for the primary gold. Two literal placeholder-brand-name swaps only: "This is Trok" → "Hinterland Web" (Navigation5), "Lantern Field Studios" → "Hinterland Web" (Footer7, wordmark + copyright line — nav labels/tagline/socials untouched). | André's direction: "I just want to reskin the components that already existed, not completely redesign them." The earlier full content rewrite and block removals were an over-reach — this is the correct scope going forward for any future block work. |
| 2026-08-20 | Fixed dark-default + added visible theme toggle | Two conflicting `defaultTheme` constants existed (`'dark'` in `shared.ts`, `'light'` in `ThemeSelector/types.ts`, the one actually used), and both `InitTheme`'s script and `ThemeProvider` consulted OS `prefers-color-scheme` before falling back to `defaultTheme` — so a light-OS visitor always got light on first load regardless of the constant's value. Fixed both to resolve straight to `defaultTheme` ('dark', now unified) when no localStorage preference exists; system preference now only applies via the explicit "Auto" option in the selector. Added `<ThemeSelector />` into Navigation5's expanded panel — no route previously rendered it. |
