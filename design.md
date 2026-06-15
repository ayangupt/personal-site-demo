# design.md — Ayan Gupta Personal Site

> **Goal**: A personal site that feels alive, earns the "aha" in a demo, and immediately communicates that Ayan is at the cutting edge of developer tooling — not just another dev portfolio.

---

## Core Principle

**One scroll, one story.** Single page, anchored sections. No multi-page routing overhead. The page *is* the presentation. Visitors — and demo audiences — should feel the momentum from the first scroll.

---

## Page Structure (Single-Page, Scroll-Anchored)

| # | Section | Anchor |
|---|---------|--------|
| 1 | Hero / Above the Fold | `#home` |
| 2 | About | `#about` |
| 3 | Conference Talks | `#talks` |
| 4 | Videos | `#videos` |
| 5 | Contact | `#contact` |

Sticky nav with smooth-scroll links. Active section highlighted in the nav as you scroll (Intersection Observer).

---

## Visual Identity

### Color Palette

Ditch the generic GitHub dark. Ayan's brand sits at the intersection of **Microsoft Azure blue** and **deep space dark** — sophisticated, tech-forward, not corporate-flat.

```
Background base:    #050A14  (near-black, deep navy)
Surface:            #0C1626  (card backgrounds)
Surface elevated:   #132035  (hover states, modals)
Border:             #1E3054  (subtle, glowing border)
Accent primary:     #2F80ED  (electric blue — Azure, GitHub Copilot)
Accent glow:        #5BA4F5  (lighter blue for glows/highlights)
Accent secondary:   #8B5CF6  (purple — AI/agentic connotation)
Text primary:       #E8EDF3
Text muted:         #7B9DB8
Forbes gold:        #D4A017  (reserved for the 30U30 badge only)
```

### Typography

Two fonts only — swap system fonts:

```
Display / Hero:  "Cal Sans" or "Sora" — rounded, modern, not robotic
Body:            "Inter" — clean, highly legible, developer-beloved
```

### Motion / Animation Principles

- **Subtle, purposeful** — no bouncing, no flashy transitions for the sake of it
- **Scroll-triggered fades** — sections fade+slide up as they enter the viewport (Framer Motion `whileInView`)
- **Hero gradient animates** — slow, breathing gradient shift in background
- **Nothing loops aggressively** — one typewriter effect in the hero, then calm

---

## Section Designs

### 1. Hero (Full Viewport)

The most important screen. It should stop a demo audience cold.

**Layout**: Full-height (`100vh`). Animated gradient mesh background (deep navy → blue → purple, slowly shifting). Avatar on the right half on desktop, content left.

**Elements**:
- Small eyebrow line: `Cloud Advocate @ Microsoft · Forbes 30 Under 30`
- Large display heading: **"Ayan Gupta"** — big, 60–72px, semi-bold
- Animated tagline with typewriter cycling through:
  - `"Building the Agentic Future"`
  - `"Helping Developers Move Faster"`
  - `"Tech Enthusiast. Educator. Advocate."`
- Bio paragraph (1–2 lines max here — fuller version in About)
- Two CTAs: `[Watch JDConf Keynote →]` `[Get in Touch]`
- Scroll indicator: animated chevron / "scroll to explore"

**The Forbes badge**: A glowing gold pill, prominent, upper right of the text block. Not a footnote — a statement.

---

### 2. About

**Split layout** — text left, right side has stats/highlights in animated cards.

**Left**: Longer bio (~3 paragraphs) — personal mission, Microsoft role, open source, mentoring.

**Right**: "At a Glance" stat cards that count up on scroll:
```
600+   Conference attendees reached in 2026 alone
4      Major conferences: JDConf, DevNexus, JavaOne, MCAPS
3×     Expected workshop attendance exceeded at DevNexus
1      Forbes 30 Under 30 (Seattle)
```

Each stat card has a faint glow border and number counts up when it enters the viewport.

---

### 3. Conference Talks

**Timeline layout** — not a plain list of cards.

Left edge is a vertical glowing line. Each talk is a node on that line. The **JDConf keynote** is the featured/top node — larger card, glowing border, YouTube embed visible by default.

Other talks are slightly smaller, with a "Expand" toggle to reveal the full description + link.

**JDConf card treatment**:
- `⭐ Opening Keynote` label in gold
- Co-presenter chips: avatar + name for Bruno Borges and Rod Johnson
- Embedded YouTube player inline (not hidden behind a click)
- Subtle glow border

---

### 4. Videos

**Magazine-style grid** — not equal boxes.

- First video (or the keynote) spans full width, large
- Remaining 3 in a row below (or 2+1)
- On hover: slight scale up, title overlay fades in
- Thumbnail background derived from YouTube OEmbed (or placeholder gradient)

---

### 5. Contact

Minimal. Dark card, centered. Two things only:

1. Social links with icon + handle: GitHub · LinkedIn · Twitter/X
2. One-line email prompt: `"Building something interesting? Let's talk."`

No contact form — clean, low-friction.

---

## Navigation

```
[ Ayan Gupta ]   About   Talks   Videos      [ Get in Touch ]
```

- Transparent on hero, blurs to `backdrop-filter: blur(20px)` + subtle border as you scroll
- Active link underline tracks current section
- Mobile: hamburger → full-screen overlay nav

---

## Tech Stack Recommendations

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Already scaffolded; great for SSR metadata |
| Styling | Tailwind CSS v4 | Replaces `@primer/react` — more design freedom, better for custom visuals |
| Animation | Framer Motion | Best-in-class for scroll-triggered, layout animations |
| Icons | Lucide React | Clean, consistent |
| Fonts | `next/font` (Google: Inter + Sora) | Self-hosted, no CLS |
| Deployment | Vercel | Zero-config, instant previews per PR |

> **Drop `@primer/react`** — Primer is great for GitHub-style UIs, but it constrains the visual language too much for a personal brand. Tailwind + Framer Motion gives full control.

---

## "Aha" Checklist for Demo

These are the moments that make an audience react:

- [ ] Hero gradient animation is visually striking the instant the page loads
- [ ] Forbes 30U30 badge is impossible to miss
- [ ] Typewriter tagline makes the hero feel alive, not static
- [ ] JDConf keynote embed is right there — audience can watch the keynote from the site
- [ ] Stat counters animate up when you scroll to About
- [ ] Timeline for talks feels editorial, not generic
- [ ] Nav blurs beautifully as you scroll

---

## Next Implementation Steps

1. **Design system first**: Set up Tailwind config with the custom color palette + fonts
2. **Hero section**: Get the gradient + typewriter working — this is the demo hook
3. **Nav**: Sticky + blur + scroll tracking
4. **About + stats**: Framer Motion counter animation
5. **Talks timeline**: JDConf featured, others collapsible
6. **Videos grid**: Magazine layout
7. **Contact**: 30-minute job once everything else is done
8. **Polish pass**: Consistent spacing, mobile, accessibility

---

*Last updated: 2026-06-15 · Author: Ayan Gupta + Copilot*
