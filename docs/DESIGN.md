# DESIGN.md — "Not Gone Yet" Landing Page

## Design Philosophy

### Editorial Style
This landing page is designed in a **bold Editorial style** — inspired by long-form magazine spreads from publications like Esquire, The New York Times Magazine, and Kinfolk. The experience translates the art-directed feature article format into a vertical scroll experience.

**Core Principles:**
- **Typography as hero** — Words command attention. The 3D book model is a sophisticated accent, not the spectacle.
- **Deliberate asymmetry** — Content doesn't always center. Text blocks hang left or right with intentional negative space, creating visual tension and sophistication.
- **Magazine pacing** — Alternating light/dark sections create the rhythmic feel of page-turns.
- **Generous whitespace** — Content breathes in wide margins. Pull quotes resonate through surrounding space.
- **Editorial furniture** — Numbered margin notes, horizontal rules, running section headers, and small-caps captions bring the language of print to digital.

---

## Color Palette

| Color | Hex | Role |
|-------|-----|------|
| Golden Yellow | `#fbd457` | Primary editorial accent — highlighted words, rule lines, quote marks, CTA fills |
| Amber | `#fac128` | Gradient pairs, hover states, data viz numerals, energy |
| Soft Blue | `#76a9d4` | Secondary editorial accent — byline areas, section markers, typographic details |
| Deep Navy | `#1a1a2e` | Dark section backgrounds, primary text on light sections |
| Deep Black | `#0d1117` | Darkest backgrounds, depth |
| Off-White/Cream | `#fefdf8` | Light section backgrounds, readability, pull-quote surrounds |

### Usage Rules
- Golden Yellow and Amber are **never** used for large background fills (except subtle gradients on the "Who This Book Is For" section)
- Dark and light sections **alternate** to create editorial rhythm
- Soft Blue is used sparingly — bylines, section numbers, subtle details
- All text on dark backgrounds is white/cream; all text on light backgrounds is navy/black

---

## Typography

### Type Scale
| Element | Font | Weight | Size (Desktop) | Style |
|---------|------|--------|----------------|-------|
| Hero Title | Objektiv Mk1 | 900 (Black) | 8–12vw | Normal, spans viewport |
| Section Headlines | Objektiv Mk1 | 700 | 3–4rem | Normal |
| Pull Quotes | Objektiv Mk1 | 400 | 2–2.5rem | Italic |
| Body Text | Poppins | 400 | 1.125rem (18px) | Normal, 1.7 line-height |
| Captions | Poppins | 500 | 0.75rem | Uppercase, letter-spacing 0.1em |
| Section Numbers | Poppins | 700 | 0.875rem | Tabular numerals |
| CTA Buttons | Poppins | 600 | 1rem | Uppercase, letter-spacing 0.05em |

### Typography Rules
- Headlines span full viewport width where possible
- Pull quotes use large italic serif, generous padding, golden quotation marks
- Drop caps on key paragraphs (first letter oversized in Playfair Display)
- Byline and caption text in small caps
- Section numbers (01, 02, 03...) appear as margin annotations in Soft Blue

---

## Layout System

### Grid
- 12-column grid on desktop, collapsing to single column on mobile
- Maximum content width: 1200px with generous side margins (min 80px on desktop)
- Asymmetric text placement — left-hung or right-hung, not always centered
- Full-bleed images break out of the grid for dramatic impact

### Section Rhythm
1. **Dark → Light → Dark** alternating backgrounds
2. Each section separated by a golden horizontal rule (1px, with subtle fade)
3. Numbered margin notes mark section progression
4. Running section headers fixed to the left edge on desktop

### Responsive Strategy
- Mobile (320–768px): Single column, stacked layout, reduced type scale
- Tablet (768–1024px): Two-column where appropriate
- Desktop (1024–1440px): Full editorial layout with asymmetry
- Large (1440px+): Increased margins, content stays at 1200px max

---

## 3D Elements (Three.js)

### Philosophy
The Three.js 3D book model is treated as **editorial photography** — a sophisticated visual accent that supports the typography, never overwhelms it.

### Implementation
- **Hero**: 3D book floats with understated elegance, partially overlapped by the massive title
- **CTA sections**: Book reappears with gentle rotation
- **Ambient**: Subtle golden particles in hero background only
- **Fallback**: Static book cover image for WebGL-unsupported devices
- **Reduced motion**: Respects `prefers-reduced-motion` — static positioning, no animation

### Performance
- Progressive loading: content first, 3D after
- Simplified geometry on mobile
- Target: 60fps on modern devices

---

## Animation Philosophy

### Framer Motion Scroll Animations
Animations feel like **content being typeset in real-time**:
- Letters slide into position
- Paragraphs fade up with the weight of considered prose
- Stats count up when scrolled into view
- Cards enter with staggered timing

### Timing
- Duration: 0.6–0.8s for major elements
- Easing: ease-out for entrances
- Stagger: 0.1s between sequential items
- No animation plays until element is 20% in viewport

---

## CTA Design

### Button Style
- Fill: Golden Yellow (`#fbd457`)
- Text: Deep Navy (`#1a1a2e`), uppercase, `Inter 600`
- Shape: Rectangular with subtle rounding (4px border-radius)
- Hover: Amber glow effect + slight brightness increase
- All link to: `https://www.amazon.com.au/dp/B0GS9L9K14`

### Placement
- Sticky nav (always visible)
- Hero section (above fold)
- After "Does This Sound Familiar?" section
- After "What's Inside" section
- Final dedicated CTA section

---

## Emotional Arc (Editorial Narrative Flow)

| Section | Emotion | Visual Treatment | Background |
|---------|---------|-----------------|------------|
| 01 Hero | Curiosity + Hope | Magazine cover — massive title, floating book | Dark (navy gradient) |
| 02 Problem | Empathy | Cream background, large italic pull quote | Cream (light) |
| 03 Bobby's Story | Connection | Dark spread, editorial photography | Navy (dark) |
| 04 Sound Familiar | Recognition | Golden accents, checklist sidebar style | Cream (light) |
| 05 What's Inside | Value | Clean grid, icon + text pairs | Deep Black (dark) |
| 06 Transformation | Triumph | Big data numerals, dramatic photo | Cream (light) |
| 07 About Author | Trust | Warm, professional | Navy (dark) |
| 08 Who It's For | Belonging | Gradient, card callouts | Navy gradient (dark) |
| 09 Final CTA | Action | Spotlight on book + button | Deep Black (dark) |

---

## Accessibility

- WCAG 2.1 AA compliance
- All images have descriptive alt text
- Keyboard navigation fully supported
- `prefers-reduced-motion` disables all animations
- Color contrast ratios meet 4.5:1 minimum for text
- Semantic HTML5 structure with proper heading hierarchy
- Screen-reader-friendly landmark regions

---

## Assets

| Asset | File | Treatment |
|-------|------|-----------|
| Book Cover | `book-cover.jpg` | 3D model texture, editorial photography scale |
| Author Photo 1 | `Picture1.jpg` | About section — warm, approachable |
| Author Photo 2 | `Picture2.jpg` | Transformation section — triumph, motorcycle |
| Favicon | `favicon.svg` | Golden "N" on navy |
