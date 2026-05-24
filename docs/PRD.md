# Product Requirements Document (PRD)

## "Not Gone Yet" — Book Landing Page

---

## 1. Project Overview

### 1.1 Purpose
Create a visually stunning, conversion-focused single-page landing website for the book **"Not Gone Yet: A Memoir of Stroke, Survival, and the Uneven Road Back to Myself"** by Dr. Ramandeep "Bobby" Chaggar. The page must emotionally connect with stroke survivors and caregivers while driving purchases via Amazon Australia.

### 1.2 Target URL
Amazon purchase link: https://www.amazon.com.au/dp/B0GS9L9K14

### 1.3 Core Objective
Convert visitors (stroke survivors, caregivers, family members, medical professionals) into book buyers through an emotionally resonant, beautifully designed landing page that communicates hope, strength, and transformation.

---

## 2. Target Audience

| Segment | Needs |
|---------|-------|
| Stroke survivors | Hope, practical guidance, identity recovery, proof of progress |
| Caregivers & family | Understanding, strategies to help, hope for their loved one |
| Medical/rehab professionals | Evidence of holistic recovery approaches |
| General readers | Inspiring memoir, human resilience story |

---

## 3. Design Philosophy & Visual Direction

### 3.1 Overall Aesthetic
The landing page must be **breathtakingly beautiful** — premium, modern, and emotionally powerful. It should feel like a high-end brand experience, not a generic book page. Think Apple-level polish meets heartfelt storytelling.

### 3.2 Color Palette
Derived from the book cover:

| Color | Hex | Usage |
|-------|-----|-------|
| Golden Yellow | `#fbd457` | Primary accent, highlights, CTAs, warmth |
| Amber | `#fac128` | Gradient pairs, hover states, energy |
| Soft Blue | `#76a9d4` | Secondary accent, trust, calm, medical credibility |
| Deep Navy/Black | `#1a1a2e` or `#0d1117` | Background sections, text, depth |
| Off-White/Cream | `#fefdf8` | Light sections, readability |

### 3.3 Typography
- **Headlines**: Bold, modern serif or strong sans-serif (e.g., Playfair Display, DM Serif Display, or Inter Bold)
- **Body**: Clean, highly readable sans-serif (e.g., Inter, DM Sans)
- **Accents/Quotes**: Italic serif for emotional quotes and testimonials
- Font sizes should be generous — large headlines that make a statement

### 3.4 Imagery
Available assets:
- **Book cover**: Yellow/amber background with blue medical scrub on hanger, stethoscope, white paw print — strongly ties veterinary career to medical experience
- **Author Photo 1** (`Picture1.jpg`): Bobby at a cafe, relaxed and smiling — shows post-recovery life, warmth, approachability
- **Author Photo 2** (`Picture2.jpg`): Bobby on a motorcycle with sidecar (child in sidecar) — powerfully illustrates the dream he writes about achieving; shows triumph, family, freedom

### 3.5 Inspiration Style
Drawing from modern book landing pages with:
- Full-width hero sections with dramatic imagery
- Floating/3D book mockups
- Bold typography with generous whitespace
- Scroll-triggered animations
- Alternating light/dark sections for visual rhythm
- Social proof and testimonial sections
- Clean, minimal layouts that let content breathe

---

## 4. Three.js 3D Interactive Elements

### 4.1 Hero Section — 3D Book Model
- **Interactive 3D book** rendered with Three.js
- The book floats and gently rotates on idle
- User can drag/interact to rotate the book manually
- Soft golden light casting from behind (volumetric glow effect matching `#fbd457`)
- Subtle particle effects — golden dust/light particles floating around the book
- Book cover texture mapped from `book-cover.jpg`
- On scroll, the book gracefully animates (tilts, zooms, or moves aside to reveal content)

### 4.2 Background Scene — Ambient 3D Environment
- Subtle animated 3D background using Three.js:
  - Floating geometric shapes (soft, rounded) in golden/blue tones
  - Or: gentle wave/fluid simulation in brand colors
  - Or: abstract neural/brain network visualization (subtle nod to stroke recovery) with golden connecting nodes
- Should be performant and not distract from content — think ambient, not overwhelming
- Reduced motion for users with `prefers-reduced-motion`

### 4.3 Scroll-Driven 3D Transitions
- As the user scrolls through sections, subtle 3D elements respond:
  - Parallax depth layers
  - 3D text that rotates into view
  - The book model reappears at CTA sections, rotating invitingly
- Consider a "journey" metaphor: visual elements that evolve from dark/broken to golden/whole as user scrolls down

### 4.4 Performance Requirements
- Three.js scenes must be optimized for mobile (reduced polygon count, simplified shaders)
- Graceful fallback for devices that don't support WebGL (static high-quality images)
- Loading should be progressive — show content immediately, load 3D after
- Target: 60fps on modern devices, no jank on scroll

---

## 5. Page Structure & Sections

### 5.1 Navigation
- Fixed/sticky minimal navigation bar
- Semi-transparent background that solidifies on scroll
- Logo/book title on left
- Navigation links: Story | What's Inside | About Bobby | Buy Now
- CTA button "Buy on Amazon" always visible in nav (golden yellow, `#fbd457`)

---

### 5.2 Section 1: Hero
**Goal**: Immediate emotional hook + clear value proposition

**Layout**:
- Full viewport height (100vh)
- Split or overlay layout:
  - Left/center: Bold headline + subheadline + CTA
  - Right/floating: 3D interactive book model (Three.js)
- 3D particle background (subtle golden light particles)

**Content**:
- **Headline**: "Not Gone Yet"
- **Subheadline**: "What If Your Stroke Could Make You Stronger Than You Were Before?"
- **Supporting text**: "You Survived Your Stroke. Now, Here Is the Roadmap to Reclaiming Your Life and Finding Yourself Again."
- **Primary CTA**: "Buy on Amazon" → links to Amazon AU
- **Secondary CTA**: "Read Bobby's Story" → scrolls to story section

**Visual Notes**:
- Dramatic gradient background (deep navy to warm amber glow)
- The 3D book should be the visual centerpiece
- Headline text should be large, white, with subtle text shadow for depth
- Subtle scroll indicator animation at bottom

---

### 5.3 Section 2: The Problem / Emotional Hook
**Goal**: Make the reader feel deeply understood

**Layout**:
- Light background section (`#fefdf8`)
- Centered text with generous padding
- Subtle entrance animations on scroll

**Content**:
- **Section title**: "The Part of Recovery Your Doctors Aren't Teaching You"
- **Body text**: 
  > "You're doing everything right. Physical therapy, doctor's appointments, exercises. But inside, you're grieving. You don't recognize yourself anymore. The person you were feels gone, and everyone keeps telling you to 'stay positive' like that's supposed to fix everything."

**Design Notes**:
- Use a large, elegant pull-quote style for the emotional text
- Consider a subtle blue accent line or gradient on the side
- Text should animate in gently (fade + slight upward movement)

---

### 5.4 Section 3: Bobby's Story / Origin
**Goal**: Build credibility and connection through the author's personal story

**Layout**:
- Dark background section (deep navy/charcoal)
- Image + text side-by-side (responsive: stacks on mobile)
- Author photo (`Picture1.jpg`) with subtle frame or glow effect

**Content**:
- **Section title**: "From Peak Health to Complete Paralysis in One Night"
- **Body**: 
  > "On December 3, 2023, Dr. Ramandeep 'Bobby' Chaggar went from peak health to complete left-side paralysis. Successful veterinary surgeon. Avid cyclist. Devoted father. All of it seemingly gone."
  >
  > "But seventeen days into his recovery, Bobby discovered something his doctors never mentioned: stroke recovery isn't just about retraining your muscles. It's about rebuilding your mind, reclaiming your identity, and rediscovering that you're capable of becoming even stronger than before."

**Design Notes**:
- Photo should have a warm golden border/glow
- Text in white/light gray on dark background
- Numbers (December 3, 2023 / seventeen days) could be highlighted in golden accent color
- Subtle 3D parallax on the image

---

### 5.5 Section 4: "Does This Sound Familiar?"
**Goal**: Reader self-identification — "this book is for ME"

**Layout**:
- Warm gradient background (golden tones, subtle)
- Checklist/card-style layout
- Icons or checkmarks for each point

**Content**:
- **Section title**: "Does Any of This Sound Familiar?"
- **Items** (displayed as cards or checklist):
  - You're tired of slow progress and wondering if you'll ever feel like yourself again
  - You've lost your identity and don't know who you are post-stroke
  - Depression, shame, or fear about your limitations keeps holding you back
  - You need proof that life can still be joyful and meaningful
  - You're a caregiver desperate to know how to truly help your loved one
- **Closing line**: "If you answered YES, then Not Gone Yet will show you the way forward."
- **CTA**: "Get Your Copy" → Amazon link

**Design Notes**:
- Each pain point could appear as a card with a subtle hover effect
- Use checkmark icons in brand blue (`#76a9d4`)
- Cards animate in sequentially on scroll (staggered entrance)
- Consider a subtle 3D tilt effect on card hover

---

### 5.6 Section 5: What's Inside the Book
**Goal**: Showcase the tangible value and unique frameworks

**Layout**:
- Light/white background
- Two-column grid on desktop (stacks on mobile)
- Left column: key frameworks and learnings
- Right column: bonus content / caregiver content

**Content**:
- **Section title**: "What You'll Discover in Not Gone Yet"
- **Intro**: "This isn't another clinical manual. This is the complete system for transforming your recovery from an exhausting slog into a journey of rediscovery."

**You'll Learn** (with icons):
- The "Dynamic Recovery" framework — replacing "getting back to normal" with becoming stronger, more compassionate, and more purposeful
- Why small victories matter more than big goals — how celebrating putting on your shoes creates unstoppable momentum
- The "bank of memories" technique — using past passions and experiences to fuel present-day progress
- How acceptance accelerates healing (not resignation, but peace that lets you move forward)
- The daily affirmation practice that took Bobby from wheelchair-bound to walking 6.5km daily
- How to structure your day for maximum recovery (Bobby's complete exercise routine)
- The truth about depression and isolation after stroke, plus practical strategies that work
- How to build your support network even if family isn't nearby

**Plus You'll Get**:
- Real stories from Bobby's sister and wife about caregivers' experiences
- The honest truth about setbacks, dark moments, and the mask Bobby wore
- Specific guidance on TENS machines, clinical trials, rehab facilities, and support programs
- Proof that you can tie your turban again, play with your kids, and ride your motorcycle again

**Design Notes**:
- Use clean icon + text pairs for each learning point
- Icons in blue (`#76a9d4`) or golden (`#fbd457`)
- Subtle divider lines between items
- Consider expandable/accordion style for mobile
- The "6.5km daily" and key stats should be highlighted in accent color

---

### 5.7 Section 6: The Transformation / Proof
**Goal**: Show that recovery IS possible — create hope through evidence

**Layout**:
- Dark background with dramatic imagery
- Large stat numbers with supporting text
- Author Photo 2 (`Picture2.jpg`) — Bobby on motorcycle with son in sidecar

**Content**:
- **Section title**: "From Wheelchair to Motorcycle"
- **Stats display** (large animated numbers):
  - "6.5 km" — walked daily
  - "17 days" — when the breakthrough came
  - "1 dream" — riding with his son in the sidecar ✓
- **Image**: Picture2.jpg (motorcycle with sidecar) — this IS the proof
- **Caption/quote**: "Bobby wrote Not Gone Yet because stroke victims aren't gone. They're standing at the threshold of discovering strength, compassion, and purpose they never knew they possessed."

**Design Notes**:
- Numbers should animate/count up when scrolled into view
- Photo should be large and impactful — this is the emotional climax
- Golden glow effect behind/around the photo
- Consider the 3D book reappearing here with a subtle float animation
- This section should feel triumphant — the visual pinnacle of the page

---

### 5.8 Section 7: About the Author
**Goal**: Build trust and human connection

**Layout**:
- Light background
- Large author photo (Picture1.jpg) with bio text
- Clean, professional layout

**Content**:
- **Section title**: "About Dr. Bobby Chaggar"
- **Subtitle**: "Stroke Survivor. Veterinary Surgeon. Recovery Advocate."
- **Bio**: "Dr. Bobby Chaggar practiced as a veterinary surgeon for 15 years before an ischemic stroke paralyzed the entire left side of his body in 2023. Drawing on the resilience his parents taught him, Bobby developed a 'dynamic recovery' system focused on mindset, acceptance, and daily practice."
- **Today**: "Today, Bobby walks 6.5 kilometers daily, volunteers at his Sikh temple, and mentors stroke survivors through community programs in Melbourne, Australia. He lives with his wife, son, and faithful dog Petra, and is working toward his motorcycle license for that dream ride with his son in the sidecar."

**Design Notes**:
- Author photo with circular crop or rounded rectangle
- Warm, approachable section
- Consider subtle blue accent elements (ties to medical credibility)
- Location tag: "Melbourne, Australia" with a subtle icon

---

### 5.9 Section 8: Who This Book Is For
**Goal**: Final qualification and CTA push

**Layout**:
- Gradient background (amber to golden)
- Three cards/columns for each audience

**Content**:
- **Section title**: "This Book Is For You If..."
- **Card 1**: Stroke Survivors — "Ready to reclaim your life and find yourself again"
- **Card 2**: Caregivers — "Who need hope that healing is possible and want to truly help"
- **Card 3**: Anyone — "Who refuses to let a medical event define the rest of their story"

**Design Notes**:
- Cards with subtle 3D hover tilt effect (CSS or Three.js-enhanced)
- Icons representing each audience
- Each card has a mini CTA or the whole section flows to final CTA

---

### 5.10 Section 9: Final CTA / Purchase Section
**Goal**: Maximum conversion — make buying frictionless

**Layout**:
- Full-width dark background
- Centered layout with book cover image (or 3D book returns)
- Large, impossible-to-miss CTA button

**Content**:
- **Headline**: "You Survived Your Stroke. Now Discover What You're Truly Capable Of."
- **Book cover image** or 3D book model (final appearance)
- **Price note**: "Available now on Amazon"
- **Primary CTA button**: "BUY ON AMAZON" → https://www.amazon.com.au/dp/B0GS9L9K14
- **Supporting text**: "Available in Kindle and Paperback"

**Design Notes**:
- CTA button should be large, golden (`#fbd457`), with hover glow effect
- 3D book does a final slow rotation here
- Subtle urgency without being pushy
- Button should have a pulse/glow animation to draw the eye

---

### 5.11 Section 10: Footer
**Layout**:
- Minimal dark footer
- Book title, copyright, Amazon link
- Optional: social media links if available

---

## 6. Interactions & Animations

### 6.1 Scroll Animations
- All sections use scroll-triggered entrance animations (IntersectionObserver)
- Fade-in + translateY(20px) for text blocks
- Scale-in for images
- Staggered animations for list items and cards
- Parallax depth on images and 3D elements

### 6.2 Hover Effects
- CTA buttons: glow effect + slight scale-up
- Cards: subtle 3D tilt (CSS perspective transform)
- Images: subtle zoom
- Navigation links: golden underline slide-in

### 6.3 Micro-interactions
- Scroll progress indicator (thin golden bar at top)
- Smooth scrolling for anchor links
- Number counter animations for stats
- Subtle cursor trail or glow on hero section (optional, performance-aware)

### 6.4 Loading Experience
- Content loads instantly (static HTML/CSS first)
- Three.js scenes load progressively with a subtle fade-in
- Use a brief, elegant loading state for 3D elements (golden shimmer placeholder)

---

## 7. Technical Requirements

### 7.1 Technology Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) or Vite + React |
| 3D Engine | Three.js + React Three Fiber (@react-three/fiber) |
| 3D Helpers | @react-three/drei (for OrbitControls, Float, Text3D, etc.) |
| Styling | Tailwind CSS |
| Animations | Framer Motion (scroll animations) + GSAP (complex sequences) |
| Deployment | Vercel or Netlify |

### 7.2 Performance Targets
- Lighthouse Performance score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1
- Three.js render: 60fps on modern devices

### 7.3 Responsive Breakpoints
| Breakpoint | Target |
|-----------|--------|
| Mobile | 320px – 768px |
| Tablet | 768px – 1024px |
| Desktop | 1024px – 1440px |
| Large Desktop | 1440px+ |

### 7.4 Accessibility
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigable
- `prefers-reduced-motion` support (disable 3D animations, use static fallback)
- Sufficient color contrast ratios
- Screen reader friendly (semantic HTML)

### 7.5 Browser Support
- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android 10+)

### 7.6 SEO
- Semantic HTML5 structure
- Open Graph meta tags (for social sharing)
- Twitter Card meta tags
- Structured data (Book schema markup)
- Meta description optimized for search
- Canonical URL

---

## 8. Assets Required

| Asset | File | Usage |
|-------|------|-------|
| Book Cover | `book-cover.jpg` | Hero section, 3D model texture, purchase section |
| Author Photo 1 | `Picture1.jpg` | About section (casual, approachable) |
| Author Photo 2 | `Picture2.jpg` | Transformation section (motorcycle + sidecar — the dream realized) |
| Favicon | To be created | Derived from book cover (golden "N" or book icon) |
| OG Image | To be created | Social sharing preview (book cover + title) |

---

## 9. Content Tone & Voice

- **Empathetic**: Acknowledge pain without patronizing
- **Hopeful**: Convey possibility without toxic positivity
- **Direct**: No fluff — every sentence earns its place
- **Empowering**: Speak to strength, not weakness
- **Personal**: Bobby's voice should feel present throughout
- **Warm**: The golden palette should match the emotional warmth of the writing

---

## 10. Conversion Strategy

### 10.1 CTA Placement
- Hero section (above fold)
- After "Does this sound familiar?" section
- After "What's Inside" section
- Final dedicated CTA section
- Sticky nav button (always visible)

### 10.2 CTA Design
- Primary button: Golden yellow (`#fbd457`) with dark text
- Large, rounded, with subtle shadow
- Hover: glow effect + slight scale
- Text: "Buy on Amazon" (clear, no ambiguity)
- All CTAs link to: https://www.amazon.com.au/dp/B0GS9L9K14

### 10.3 Emotional Arc of the Page
1. **Hook** (Hero): Curiosity + hope — "What if your stroke could make you stronger?"
2. **Empathy** (Problem): "I see you, I understand your pain"
3. **Credibility** (Bobby's Story): "I've been exactly where you are"
4. **Identification** (Sound Familiar?): "This book is specifically for you"
5. **Value** (What's Inside): "Here's exactly what you'll get"
6. **Proof** (Transformation): "Look what's possible — motorcycle with his son"
7. **Trust** (About): "A real person, a real journey"
8. **Action** (Final CTA): "Take the next step now"

---

## 11. Success Metrics

| Metric | Target |
|--------|--------|
| Bounce rate | < 40% |
| Avg. time on page | > 2 minutes |
| CTA click-through rate | > 5% |
| Mobile usability score | 100/100 |
| Page load time | < 3 seconds |

---

## 12. Future Considerations (Out of Scope for V1)

- Email capture / newsletter signup for recovery tips
- Video testimonial section
- Audio excerpt / book reading sample
- Integration with multiple Amazon regions (US, UK, etc.)
- Blog/resources section for ongoing content
- Community forum link for stroke survivors
- Event/speaking engagement calendar

---

## 13. Summary

This landing page must achieve two things simultaneously:

1. **Be visually stunning** — The Three.js 3D book model, golden particle effects, scroll-driven animations, and premium design should make this feel like a world-class product page that visitors remember.

2. **Convert with empathy** — Every design choice, every word, every interaction should serve the emotional journey of a stroke survivor or caregiver who lands on this page. They should feel understood, hopeful, and compelled to buy the book.

The page is Bobby's digital handshake with every stroke survivor who needs to hear: *You're not gone yet.*
