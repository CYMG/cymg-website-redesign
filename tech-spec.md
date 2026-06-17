# CYMG Website — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | `^19.0.0` | UI framework |
| `react-dom` | `^19.0.0` | DOM renderer |
| `react-router-dom` | `^7.0.0` | Client-side routing (20+ routes) |
| `vite` | `^6.0.0` | Build tool |
| `@vitejs/plugin-react` | `^4.0.0` | Vite React integration |
| `typescript` | `^5.7.0` | Type safety |
| `tailwindcss` | `^4.0.0` | Utility-first CSS |
| `@tailwindcss/vite` | `^4.0.0` | Tailwind v4 Vite plugin |
| `gsap` | `^3.12.0` | Core animation engine (ScrollTrigger, SplitText plugins) |
| `lenis` | `^1.2.0` | Smooth scroll with inertia |
| `geist` | `^1.3.0` | Geist Sans font (UI/body) |
| `lucide-react` | `^0.470.0` | Icon library |
| `class-variance-authority` | `^0.7.0` | Component variant management |
| `clsx` | `^2.1.0` | Conditional class joining |
| `tailwind-merge` | `^2.6.0` | Tailwind class deduplication |

**Google Fonts (loaded via `<link>`):** Fraunces (variable), IBM Plex Mono (400, 500)

**Dev dependencies:** `@types/react`, `@types/react-dom`, `eslint`, `prettier`, `tailwindcss` (peer)

---

## Component Inventory

### Layout Components (shared across pages)

| Component | Source | Notes |
|-----------|--------|-------|
| `Header` | Custom | Transparent → glassmorphic on scroll; merges with accordion mini-nav mode |
| `Footer` | Custom | 5-column + newsletter + social + legal |
| `AccordionHero` | Custom | **Keystone component** — 4-panel viewport-filling accordion; fixed → mini-nav on scroll |
| `Layout` | Custom | Wraps Header + main + Footer; manages Lenis instance |
| `PageTransition` | Custom | View Transitions API wrapper; cross-fade + 12px slide |

### Sections (page-level, used once)

| Component | Page | Notes |
|-----------|------|-------|
| `BentoGrid` | Home | 7-card CSS Grid bento layout |
| `DataTower` | Home | Sticky SVG stroke-draw + stat counters |
| `PhotoEssay` | Home | 3-band clip-path scroll reveal |
| `AboutHero` | About | Compact 40vh hero |
| `MissionBlock` | About | Two-column editorial + pull quote |
| `MandateCitations` | About | Expandable mono citation list |
| `HistoryTimeline` | About / History | Sticky year rail, swipeable mobile |
| `WgHubHero` | Working Groups Hub | Compact hero, canopy-green |
| `WgFilterableGrid` | Working Groups Hub | 13 cards with cluster filters |
| `WgDetailTemplate` | Working Groups [slug] | Reusable template: hero, mission, highlights, engagements, focal points |
| `UneaHero` | UNEA Hub | 50vh hero |
| `CycleTrack` | UNEA Hub | Horizontal scrolling edition nodes |
| `TeamHero` | Team | Ink background hero |
| `TeamDirectory` | Team | Filterable person cards |
| `BlogHero` | Blog | Featured post hero |
| `BlogGrid` | Blog | 3-col bento post cards |
| `PostTemplate` | Blog [slug] | Long-form reading layout |
| `JoinForm` | Join | 3-step multi-step form |
| `ContactForm` | Contact | Two-column form + info |
| `SafeguardingFlow` | Policies | Confidential reporting form |
| `DocumentLibrary` | Documents | Searchable/filterable grid |
| `CalendarView` | Calendar | Month/list toggle |
| `MeaContent` | MEAs | Explainer + engagement cards |
| `RegionsMap` | Regions | Interactive SVG world map |

### Reusable Components (used across pages)

| Component | Source | Used By |
|-----------|--------|---------|
| `Button` | Custom (CVA) | Everywhere — 5 variants (primary, secondary, ghost, text-link, nav-pill) |
| `Card` | Custom (CVA) | BentoGrid, WgFilterableGrid, BlogGrid, DocumentLibrary — base card + bento variant |
| `Badge` | Custom | Cards, PersonCard, tags — cluster-coded pills |
| `PersonCard` | Custom | TeamDirectory, WgDetailTemplate — portrait + info + fallback gradient |
| `StatCounter` | Custom | DataTower — animated count-up with GSAP snap |
| `NewsletterCTA` | Custom | Footer, Blog, WgDetailTemplate — inline subscribe banner |
| `Breadcrumbs` | Custom | All subpages |
| `TimelineNode` | Custom | HistoryTimeline — year + event card |
| `EventCard` | Custom | CalendarView — date block + details |
| `DocumentCard` | Custom | DocumentLibrary — file icon + metadata |
| `LoadingSkeleton` | Custom | All CMS-driven sections — shimmer animation |
| `Modal` | Custom (shadcn/ui base) | CalendarView event detail |
| `Sheet` | shadcn/ui | Mobile navigation drawer |
| `Accordion` | Custom | NOT from shadcn — bespoke 4-panel component |
| `FormField` | Custom | JoinForm, ContactForm, SafeguardingFlow — input/label/error wrapper |
| `DarkModeToggle` | Custom | Header — sun/moon icon with system preference detection |

### Hooks

| Hook | Purpose |
|------|---------|
| `useScrollState` | Returns scroll position, direction, threshold-crossed booleans (header state, accordion mode) |
| `useDarkMode` | Reads/writes `data-theme`, persists to localStorage, respects `prefers-color-scheme` |
| `useReducedMotion` | Detects `prefers-reduced-motion: reduce` |
| `useAccordionState` | Manages 4-panel accordion: hover index, focused index, ESC dismissal |
| `useLuminousTrail` | Mouse tracking with lerp, panel-color reactivity |
| `useStatCounter` | GSAP ScrollTrigger-driven count-up with snap |
| `useClipPathReveal` | GSAP ScrollTrigger scrubbed clip-path animation |
| `useSvgDraw` | GSAP ScrollTrigger scrubbed stroke-dashoffset animation |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| 4-panel accordion expand/compress | CSS transitions + React state | `flex` property transition (350ms cubic-bezier). Hover/focus states drive `flex` values via CSS custom properties or inline styles. State managed by `useAccordionState`. | **High 🔒** |
| Ambient gradient blob drift | GSAP | 3 `requestAnimationFrame` loops or GSAP `repeat: -1, yoyo: true` tweens on canvas-drawn radial gradients. Canvas sits fixed behind accordion. | **High 🔒** |
| Blob reposition on focus | GSAP | `gsap.to(blob, { x, y, opacity, duration: 1.2, ease: 'power2.inOut' })` triggered on accordion focus change. | **High 🔒** |
| Luminous cursor trail | Custom RAF + lerp | Fixed div with `pointer-events: none`. `requestAnimationFrame` loop: `trailX += (mouseX - trailX) * 0.08`. Scale/color tweened via GSAP on panel hover. | **High 🔒** |
| Panel content fade on expand | CSS transitions | Content overlay opacity + translateY toggled when panel flex > 1.5. CSS `transition-delay` for stagger. | Medium |
| Accordion → mini-nav morph | GSAP ScrollTrigger | ScrollTrigger at `scrollY > viewportHeight * 0.5` toggles class. Height transitions from 100vh to 80px. Panel titles only visible in mini mode. | **High 🔒** |
| Bento card scroll reveal | GSAP ScrollTrigger | `gsap.from(card, { y: 16, opacity: 0, stagger: 0.06 })` with `start: 'top 85%'`. | Low |
| Card hover lift + shadow | CSS transitions | `transition: box-shadow 400ms, transform 400ms`. No JS needed. | Low |
| Photo clip-path scroll reveal | GSAP ScrollTrigger scrub | `gsap.fromTo` with `clipPath: inset()` values. `scrub: 1`, `start: 'top 80%'`, `end: 'top 20%'`. Middle band uses different inset direction. | **High 🔒** |
| SVG data tower stroke draw | GSAP ScrollTrigger scrub + pin | Timeline with `strokeDashoffset: 2000 → 0` per layer. ScrollTrigger `pin: true`, `end: '+=150%'`. | **High 🔒** |
| Stat counter count-up | GSAP ScrollTrigger | `gsap.from` with `snap: { textContent: 1 }`. Triggered once at `start: 'top 60%'`. | Medium |
| Page transitions | View Transitions API | `document.startViewTransition()` wrapping route changes. Fallback: instant swap. | Medium |
| Dark mode color transition | CSS custom properties | `transition` on all color-related properties (300ms). `data-theme="dark"` on `<html>`. | Low |
| Skeleton shimmer | CSS animation | `@keyframes shimmer` with `background-position` sweep. Pure CSS. | Low |
| Mobile sheet slide | shadcn/ui Sheet | Built-in Radix transition. | Low |
| Button hover states | CSS transitions | `transition: all 200ms`. translateY(-1px) + brightness. | Low |

**🔒 High-complexity animation summary:** 6 high-complexity animations across the site, all concentrated in the home page's core experience. The accordion system (panel transitions, blob drift, cursor trail, mini-nav morph) forms an interconnected animation cluster that requires careful coordination. The scroll-driven effects (clip-path, SVG draw) are isolated and self-contained.

---

## State & Logic Plan

### Accordion State Machine

The accordion is the site's central interaction model. It has 4 mutually exclusive states that cascade through multiple subsystems.

**States:** `default` | `hovered` (panel N) | `focused` (panel N) | `mini-nav`

**State transitions:**
```
default → hovered : mouseenter panel N
hovered → default : mouseleave accordion
hovered → focused : click panel N
focused → hovered : click panel N again (toggle off)
focused → default : ESC key | click outside | scroll past threshold
any → mini-nav : scrollY > viewportHeight * 0.5
mini-nav → default : scrollY <= viewportHeight * 0.5 (scroll back up)
```

**State shape:**
```ts
type AccordionState = {
  mode: 'expanded' | 'mini-nav';
  hoverIndex: number | null;   // 0-3
  focusIndex: number | null;   // 0-3
};
```

**Derived values from state:**
- Panel flex values: computed from `focusIndex` and `hoverIndex` using a lookup table
- Blob positions/colors: derived from `focusIndex`; if null, from `hoverIndex`; if null, ambient drift
- Cursor trail scale/color: derived from `hoverIndex`
- Header visibility: hidden when `mode === 'mini-nav'`

**Coordination requirements:**
- Lenis smooth scroll must be active during accordion scroll (no pause needed — accordion is fixed, not scroll-jacked)
- Blob canvas must continue animating during all state transitions
- Mini-nav transition triggers accordion height tween AND panel flex snap to equal

### Dark Mode Persistence

```
Initial load: check localStorage → if absent, check matchMedia('prefers-color-scheme: dark')
Toggle: update data-theme attribute → update localStorage → CSS transitions handle visual change
No flash: set data-theme in <html> before React hydrates (inline script in index.html)
```

### Form Multi-Step Logic (Join)

```ts
type JoinStep = 1 | 2 | 3;
type JoinFormData = {
  // Step 1
  name: string;
  email: string;
  organization: string;
  country: string;
  ageVerified: boolean;
  // Step 2
  workingGroups: string[];
  region: string;
  interests: string[];
  // Step 3
  termsAccepted: boolean;
};
```

Validation per step before advancement. Summary preview on step 3. Success state shows confirmation screen.

### Filter Logic Patterns

Three filterable grids share the same pattern (Working Groups, Team, Documents):

```ts
type FilterState<T> = {
  activeFilters: Record<string, string[]>;  // category -> selected values
  searchQuery: string;
  sortBy: string;
};

// Derived filtered items: AND within category, OR across categories
const filteredItems = items.filter(item =>
  Object.entries(activeFilters).every(([category, values]) =>
    values.length === 0 || values.includes(item[category])
  ) &&
  (!searchQuery || item.matches(searchQuery))
);
```

URL query params sync for shareable filter states (Working Groups, Documents, Blog).

### Routing Architecture

20+ routes with nested structure. React Router v7 with route definitions in a central config.

```
/                                      → Home (with full accordion)
/about                                 → About
/about/history-mandate                 → History (shared About sub-route)
/about/policies-and-safeguarding       → Policies
/governance                            → Governance
/unea-and-core-processes               → UNEA Hub
/unea/yea-2025                         → UNEA subpage
/unea/gyd-2025                         → UNEA subpage
/unea/unea-7-consultations             → UNEA subpage
/unea/group-of-friends                 → UNEA subpage
/unea/unea-6-explainers                → UNEA subpage
/unea/yea-2024                         → UNEA subpage
/working-groups                        → Working Groups Hub
/working-groups/[slug]                 → Working Group Detail
/team                                  → Team
/meas                                  → MEAs
/regions                               → Regions
/blog                                  → Blog
/blog/[slug]                           → Blog Post
/calendar                              → Calendar
/join                                  → Join
/documents                             → Documents
/contact                               → Contact
```

404 catch-all with on-brand design.

---

## Project Structure

```
├── public/
│   ├── images/
│   │   ├── accordion/          # 4 panel backgrounds
│   │   ├── photo-essay/        # 3 horizontal bands
│   │   ├── bento/              # 7 bento card images
│   │   ├── team/               # Team portraits (or fallback)
│   │   └── badges/             # 13 WG SVG icons
│   └── favicon.ico
├── src/
│   ├── main.tsx                # Entry point, font loading
│   ├── App.tsx                 # Router setup, Layout, PageTransition
│   ├── index.css               # Tailwind import, CSS variables, base styles, font-face
│   ├── pages/                  # Route-level page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── HistoryMandate.tsx
│   │   ├── PoliciesSafeguarding.tsx
│   │   ├── Governance.tsx
│   │   ├── UneaHub.tsx
│   │   ├── UneaSubpage.tsx
│   │   ├── WorkingGroupsHub.tsx
│   │   ├── WorkingGroupDetail.tsx
│   │   ├── Team.tsx
│   │   ├── Meas.tsx
│   │   ├── Regions.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Calendar.tsx
│   │   ├── Join.tsx
│   │   ├── Documents.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── sections/               # Page section components (orchestrate multiple components)
│   │   ├── accordion/
│   │   │   ├── AccordionHero.tsx       # Main 4-panel component
│   │   │   ├── AccordionPanel.tsx      # Single panel
│   │   │   ├── BlobCanvas.tsx          # Ambient gradient canvas
│   │   │   └── MiniNav.tsx             # Compressed accordion bar
│   │   ├── home/
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── DataTower.tsx
│   │   │   └── PhotoEssay.tsx
│   │   ├── about/
│   │   │   ├── MissionBlock.tsx
│   │   │   ├── MandateCitations.tsx
│   │   │   └── HistoryTimeline.tsx
│   │   ├── working-groups/
│   │   │   ├── WgHubHero.tsx
│   │   │   ├── WgFilterableGrid.tsx
│   │   │   └── WgDetailTemplate.tsx
│   │   ├── team/
│   │   │   ├── TeamHero.tsx
│   │   │   └── TeamDirectory.tsx
│   │   ├── blog/
│   │   │   ├── BlogHero.tsx
│   │   │   ├── BlogGrid.tsx
│   │   │   └── PostTemplate.tsx
│   │   ├── unea/
│   │   │   ├── UneaHero.tsx
│   │   │   └── CycleTrack.tsx
│   │   └── regions/
│   │       └── RegionsMap.tsx
│   ├── components/             # Shared reusable components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── ui/                 # Primitive components (no section logic)
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── PersonCard.tsx
│   │   │   ├── StatCounter.tsx
│   │   │   ├── NewsletterCTA.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   ├── TimelineNode.tsx
│   │   │   ├── EventCard.tsx
│   │   │   ├── DocumentCard.tsx
│   │   │   ├── LoadingSkeleton.tsx
│   │   │   ├── FormField.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── DarkModeToggle.tsx
│   │   └── effects/
│   │       ├── LuminousTrail.tsx       # Cursor blob trail
│   │       └── PageTransition.tsx      # VT API wrapper
│   ├── hooks/
│   │   ├── useScrollState.ts
│   │   ├── useDarkMode.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useAccordionState.ts        # Central accordion logic
│   │   ├── useLuminousTrail.ts         # Mouse tracking
│   │   ├── useStatCounter.ts
│   │   ├── useClipPathReveal.ts
│   │   └── useSvgDraw.ts
│   ├── data/                   # Static/mock CMS data
│   │   ├── workingGroups.ts    # 13 canonical groups
│   │   ├── teamMembers.ts      # Team roster
│   │   ├── timeline.ts         # History events
│   │   ├── blogPosts.ts        # Blog content
│   │   ├── documents.ts        # Document library
│   │   ├── events.ts           # Calendar events
│   │   └── regions.ts          # Region data + facilitators
│   ├── types/
│   │   └── index.ts            # Shared TypeScript interfaces
│   ├── lib/
│   │   └── utils.ts            # cn() helper, general utilities
│   └── router/
│       └── routes.tsx          # Central route configuration
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Tailwind Configuration Notes

Tailwind v4 uses CSS-first configuration. Design tokens are defined as CSS custom properties in `index.css`, referenced in Tailwind's `@theme` directive.

```css
/* index.css */
@theme {
  --color-ink: #0B1220;
  --color-paper: #F6F3EA;
  --color-surface: #FFFFFF;
  --color-line: #E3DECF;
  --color-assembly-blue: #2A4DFF;
  --color-assembly-blue-deep: #15257A;
  --color-canopy-green: #0E6B55;
  --color-signal-lime: #D7FF3D;
  --color-clay: #E2592C;
  
  --font-display: 'Fraunces', serif;
  --font-body: 'Geist Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
  
  --radius-card: 20px;
  --radius-pill: 999px;
  
  --ease-default: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-snappy: cubic-bezier(0.87, 0, 0.13, 1);
}

/* Dark mode — data-theme attribute on <html> */
[data-theme="dark"] {
  --color-ink: #F6F3EA;
  --color-paper: #0B1220;
  --color-surface: #141C2B;
  --color-line: #2A3245;
  --color-assembly-blue: #6E8BFF;
  --color-assembly-blue-deep: #4A6FFF;
  --color-canopy-green: #1A9B7D;
}
```

Fluid typography uses `clamp()` directly in utility classes or component styles — no custom Tailwind type scale needed.

---

## Key Technical Decisions

### Why React + Vite instead of Next.js

The design brief specifies Next.js 15 + App Router, but this project is being built with React + Vite per the skill framework. Trade-offs:
- **Routing:** React Router v7 handles 20+ routes with nested layouts. URL params for `[slug]` routes.
- **No SSR:** All content is either static (hardcoded data files) or would come from a client-side CMS fetch. No server-side rendering benefits for this architecture.
- **No API routes:** Forms will use client-side submission patterns (could integrate with a form service or show success states without a backend). The CMS requirement is noted but the implementation uses static data files as the verified content source.
- **Asset optimization:** Vite handles image optimization, code splitting, and tree-shaking comparably to Next.js for a SPA.

### No shadcn/ui CLI installation

Components requiring shadcn primitives (Sheet, Dialog) will be implemented directly using Radix UI primitives (already included in the init script's component library). The shadcn styling patterns (CVA variants, `cn()` utility) are adopted but components are custom-built to match the CYMG design system rather than installed from the registry.

### GSAP Plugin Registration

All GSAP plugins are free as of 2025. Register at app initialization:
```ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Lenis + GSAP ScrollTrigger Integration

Lenis must feed its scroll position to ScrollTrigger for all scroll-driven animations to work:
```ts
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### Image Strategy

All images are bundled as static assets in `public/images/`. No external CMS image hosting. For a production deployment with a real CMS, `next/image` or a similar optimization layer would be added. Blur placeholders use CSS `filter: blur(20px)` on a tiny base64-encoded thumbnail or a solid color approximating the image.

### Accessibility Implementation

- `prefers-reduced-motion` checked at the `useReducedMotion` hook level. All GSAP animations query this hook and return no-op timelines when reduced motion is preferred. CSS transitions respect `@media (prefers-reduced-motion: reduce)` via Tailwind's `motion-reduce:` modifier.
- Keyboard navigation for the accordion: Tab → focus CTA in focused panel, Arrow keys → switch focused panel, ESC → exit focus.
- Skip link: first element in tab order, `position: absolute; top: -40px`, visible on focus.
- Focus states: `outline: 2px solid var(--color-assembly-blue); outline-offset: 2px` on all interactive elements.

---

## Performance Considerations

- **Code splitting:** React Router `lazy()` + `Suspense` for all page components. Home page sections loaded eagerly.
- **Accordion canvas:** Uses `will-change: transform` on blob layer. Canvas resized on `resize` event with debounce.
- **ScrollTrigger cleanup:** All ScrollTrigger instances killed on component unmount via `useEffect` cleanup.
- **Luminous trail:** RAF loop paused when `document.visibilityState === 'hidden'`.
- **Image loading:** `loading="lazy"` on all below-fold images. Accordion panel images preloaded.
- **Font loading:** `font-display: swap` for all fonts. Critical text (accordion titles) uses `font-display: block` to prevent FOUT.

---

## CMS Integration Path

Current implementation uses static TypeScript data files (`src/data/`). To integrate a real headless CMS (Sanity/Payload):

1. Replace data files with fetch calls to CMS API endpoints
2. Add React Query or SWR for data fetching with caching
3. Implement loading skeletons for all data-driven sections
4. Add ISR-style revalidation via service worker or periodic refetch
5. The data file structure already matches CMS schema requirements
