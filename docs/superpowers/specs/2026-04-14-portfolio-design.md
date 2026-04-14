# Portfolio Website Design Specification

**Date:** 2026-04-14  
**Author:** Claude (with Aash Singh Jat)  
**Status:** Approved

## Overview

A dark, cinematic portfolio website for Aash Singh Jat, Senior Frontend Engineer, showcasing professional experience, projects, and skills. The site will feature subtle, refined animations and deploy to Vercel for free hosting.

## Design Goals

- **Aesthetic:** Dark & cinematic with dramatic gradients and subtle glows
- **Animation Style:** Subtle & refined - smooth transitions, gentle fades, no jarring motion
- **Purpose:** Showcase senior frontend capabilities to attract high-impact product companies
- **Performance:** Fast load times, optimized for Core Web Vitals
- **Accessibility:** WCAG AA compliant, respects reduced motion preferences

## Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Shadcn UI (Card, Button)
- **Typography:** Optimized fonts via next/font
- **Deployment:** Vercel (free tier)
- **Language:** TypeScript

## Architecture

### Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main portfolio page (single-page app)
│   └── globals.css         # Tailwind + custom CSS variables
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── WorkExperience.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/                 # Shadcn components
│       ├── card.tsx
│       └── button.tsx
├── lib/
│   └── data.ts             # All content data (centralized)
├── public/
│   └── Aash_Singh_Jat_Resume.pdf  # (to be added later)
└── package.json
```

### Design Philosophy

1. **Single-page application** with smooth scroll navigation
2. **Mobile-first responsive** design
3. **Content-driven** - all data in `/lib/data.ts` for easy updates
4. **Performance-optimized** - lazy loading, code splitting
5. **Accessible** - semantic HTML, keyboard navigation, reduced motion support

## Components & Visual Design

### 1. Hero Section

**Purpose:** First impression - establish identity and primary CTAs

**Visual Design:**
- Full viewport height
- Dark gradient background (black → deep purple/blue)
- Large name with gradient text effect (white → gray)
- Professional tagline below name
- Two CTAs side-by-side:
  - "View Work" (primary white button with shadow)
  - "Download Resume" (ghost button with border)

**Animations:**
- Name: Fade up + blur transition on load (0.6s)
- Tagline: Fade up with 0.3s delay
- CTAs: Fade up + slight scale with 0.3s delay after tagline

**Responsive:**
- Mobile: Stack CTAs vertically, reduce font sizes

### 2. Featured Projects Carousel

**Purpose:** Showcase top 3 projects with impact metrics

**Visual Design:**
- Glassmorphic cards (dark bg, subtle white border, backdrop blur)
- Auto-rotate every 4 seconds
- Pause on hover/focus
- Navigation dots below (3 dots, clickable)

**Card Content:**
- Project title (large, bold)
- Impact metrics/description
- Tech tags (React, Performance, Scale, etc.)
- "View Live →" button (initially disabled, can be enabled later)

**Projects:**
1. **InsightsHub (Maersk)**  
   Used by 350+ teams • 40% faster decisions • 35% faster load time
   
2. **Digital Africa (FAO, UN)**  
   Offline-first • Service workers • 99% satisfaction
   
3. **Toyota E-commerce Platform**  
   Scalable AEM frontend • Analytics-driven UX • High performance

**Animations:**
- Transition: Fade out + scale down (0.92), fade in + scale up (1.0)
- Duration: 0.5s ease-in-out
- Hover: Card elevates (translateY: -5px) with glow

**Responsive:**
- Mobile: Reduce card padding, smaller text

### 3. Work Experience Timeline

**Purpose:** Show career progression tied to projects

**Visual Design:**
- Vertical timeline with connecting line
- Cards on alternating sides (desktop) or single column (mobile)
- Each card: Company, role, period, key achievement

**Entries:**
1. **Maersk** - Senior Frontend Engineer (2022 - Present)  
   Built InsightsHub serving 350+ teams with 40% faster decision-making
   
2. **FAO/UN** - Frontend Engineer  
   Developed Digital Africa offline-first platform with 99% user satisfaction
   
3. **Toyota** - Frontend Engineer  
   Architected scalable AEM e-commerce frontend with analytics-driven UX

**Animations:**
- Scroll-triggered: Each card fades up when visible
- Stagger: 0.1s between cards
- Timeline line draws progressively

**Responsive:**
- Mobile: Single column, smaller cards

### 4. Testimonials

**Purpose:** Build credibility through peer recommendation

**Visual Design:**
- Single testimonial card (centered)
- Large quotation marks (decorative)
- Quote text (medium size, readable)
- Author info below: Name, title, company

**Content:**
> "Being an innovative and creative developer, Aash was an astounding asset to the project. She comes with sharp technical skills and unwavering confidence which helps her to get to the solutions much faster in complex scenarios. She is an excellent team player and a reliable, competitive professional."
> 
> **Hrushikesh Mokashi**  
> Sharepoint Professional - Zensar Technologies

**Animations:**
- Fade up on scroll
- Subtle glow effect on card

**Future:** Can expand to carousel if more testimonials added

### 5. About Me

**Purpose:** Convey impact-focused narrative

**Visual Design:**
- Clean layout with prominent text
- Optional: Split layout (text left, visual/photo right)
- Focus on scale and impact

**Content:**
"I build products that serve millions of users, focusing on performance, scale, and exceptional user experiences. From enterprise platforms to humanitarian tech, I bring technical excellence and user-centered thinking to every project."

**Animations:**
- Fade up on scroll
- Subtle gradient underline on key phrases (optional)

### 6. Skills

**Purpose:** Highlight technical expertise

**Visual Design:**
- Grid of skill pills
- Dark pills with border, hover state glows
- Visual hierarchy: Primary skills more prominent

**Skills:**
- React
- Next.js
- TypeScript
- Vue.js
- Node.js
- PostgreSQL
- Prisma
- Jest

**Animations:**
- Hover: Scale (1.08) + glow + text brightens
- Stagger on scroll

**Responsive:**
- Mobile: 2-column grid

### 7. Contact

**Purpose:** Clear CTAs for connection

**Visual Design:**
- Centered section
- Large heading: "Let's Connect"
- Subtext: "Open to senior frontend roles in high-impact product companies"
- Three buttons (horizontal):
  - Email (mailto:aashjat96@gmail.com)
  - LinkedIn (https://www.linkedin.com/in/aash-jat-b58948130/)
  - GitHub (https://github.com/aashsinghjat - note: content coming soon)

**Animations:**
- Buttons: Hover glow + slight scale
- Fade up on scroll

## Data Structure

All content centralized in `/lib/data.ts` for easy maintenance:

```typescript
// Personal Info
export const personalInfo = {
  name: "Aash Singh Jat",
  title: "Senior Frontend Engineer",
  tagline: "Building scalable, high-performance and beautifully crafted web experiences",
  email: "aashjat96@gmail.com",
  linkedin: "https://www.linkedin.com/in/aash-jat-b58948130/",
  github: "https://github.com/aashsinghjat",
  resumePath: "/Aash_Singh_Jat_Resume.pdf"
}

// About
export const about = {
  description: "I build products that serve millions of users..."
}

// Projects (array)
export const projects = [...]

// Experience (array)
export const experience = [...]

// Skills (array)
export const skills = [...]

// Testimonials (array)
export const testimonials = [...]
```

**Benefits:**
- Content updates without touching components
- Type-safe with TypeScript interfaces
- Easy to migrate to CMS later
- Reusable for SEO metadata

## Animations & Interactions

### Animation Principles

1. **Subtle & refined** - no jarring movements
2. **Consistent timing** - 0.3-0.5s for most transitions
3. **GPU-accelerated** - use `transform` and `opacity` only
4. **Respects reduced motion** - graceful degradation via `prefers-reduced-motion`
5. **Performance-first** - lazy load Framer Motion below fold

### Specific Animations

**On Page Load:**
1. Hero name: Fade up + blur (0.6s)
2. Hero tagline: Fade up (0.3s delay)
3. Hero CTAs: Fade up + scale (0.3s delay)

**Scroll-triggered (Framer Motion `whileInView`):**
- Trigger: When element is 20% visible
- Effect: Fade up (`opacity: 0 → 1`, `y: 40 → 0`)
- Stagger: 0.1s between child elements
- Duration: 0.5s ease-out

**Hover States:**
- Buttons: Scale 1.05, glow, 0.3s transition
- Project cards: translateY -5px, stronger glow
- Skill pills: Scale 1.08, glow, text brightens
- All: `transition-all duration-300 ease-out`

**Project Carousel:**
- Auto-rotate: Every 4 seconds
- Pause on: Hover or focus
- Exit animation: Fade out + scale to 0.92
- Enter animation: Fade in + scale from 0.92 to 1
- Duration: 0.5s ease-in-out

**Performance:**
- Use `will-change: transform` on carousel
- No layout-shifting properties (width, height, margin)
- Lazy load Framer Motion components

## Deployment & Infrastructure

### Vercel Setup

1. **Repository:** Connect GitHub repo (https://github.com/aashsinghjat/portfolio)
2. **Build settings:**
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
   - Node version: 18.x
3. **Auto-deploy:** Every push to `main`
4. **Preview deployments:** All branches/PRs
5. **Custom domain:** Available (optional, can add later)

### Environment Variables

None required initially. Future additions might include:
- Analytics keys (Vercel Analytics, Google Analytics)
- Contact form API endpoint (if added later)

## SEO Optimization

### Metadata (`app/layout.tsx`)

```typescript
export const metadata = {
  title: "Aash Singh Jat - Senior Frontend Engineer",
  description: "Senior Frontend Engineer building scalable, high-performance web experiences. Featured work: Maersk InsightsHub, UN Digital Africa, Toyota E-commerce.",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Aash Singh Jat" }],
  openGraph: {
    type: "website",
    title: "Aash Singh Jat - Portfolio",
    description: "Senior Frontend Engineer specializing in React, Next.js, and high-scale applications",
    url: "https://portfolio-aashsinghjat.vercel.app",
    siteName: "Aash Singh Jat Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aash Singh Jat - Senior Frontend Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aash Singh Jat - Portfolio",
    description: "Senior Frontend Engineer",
    images: ["/og-image.png"]
  }
}
```

### Technical SEO

- Semantic HTML (proper heading hierarchy: h1 → h2 → h3)
- Alt text for all images
- Structured data (JSON-LD for Person schema)
- Auto-generated sitemap (Next.js built-in)
- Robots.txt (allow all)

### Structured Data Example

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aash Singh Jat",
  "jobTitle": "Senior Frontend Engineer",
  "url": "https://portfolio-aashsinghjat.vercel.app",
  "sameAs": [
    "https://www.linkedin.com/in/aash-jat-b58948130/",
    "https://github.com/aashsinghjat"
  ]
}
```

## Performance Targets

### Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms  
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimizations

1. **Images:**
   - Use Next.js `<Image>` component
   - Auto-optimization (WebP, size variants)
   - Lazy loading below fold

2. **Fonts:**
   - `next/font` for optimal loading
   - Preload critical fonts
   - Font display: swap

3. **JavaScript:**
   - Code splitting per section
   - Lazy load Framer Motion below fold
   - Tree-shaking unused code

4. **CSS:**
   - Tailwind purge removes unused styles
   - Inline critical CSS
   - Defer non-critical CSS

5. **Caching:**
   - Static assets cached by Vercel CDN
   - Immutable font/image assets

## Accessibility

### WCAG AA Compliance

- **Color contrast:** All text meets 4.5:1 minimum
- **Keyboard navigation:** All interactive elements accessible via Tab
- **Focus indicators:** Visible outlines on all focusable elements
- **Semantic HTML:** Proper landmarks (header, main, section, footer)
- **ARIA labels:** Used sparingly, only where needed
- **Alt text:** Descriptive alt text for all images

### Reduced Motion

Respect `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Framer Motion components will check this automatically.

## Future Enhancements (Out of Scope)

- Blog/articles section (requires CMS integration)
- Contact form with backend (requires API routes + email service)
- GitHub activity feed (requires GitHub API integration)
- Case studies (individual project pages)
- Analytics dashboard (Vercel Analytics or Google Analytics)
- More testimonials (expand to carousel)
- Dark/light mode toggle (currently dark-only)

## Success Criteria

1. **Visual:** Achieves dark, cinematic aesthetic with subtle animations
2. **Performance:** Lighthouse score > 90 on all metrics
3. **Accessibility:** WCAG AA compliant, passes axe DevTools
4. **Deployment:** Successfully deploys to Vercel with auto-updates
5. **Content:** All sections populated with accurate data
6. **Responsive:** Looks great on mobile, tablet, desktop
7. **Resume:** Download button ready (PDF to be added later)

## Open Questions / Decisions Needed

- [ ] Do you have a profile photo or should we use an abstract visual/gradient?
- [ ] Exact dates for FAO/UN and Toyota roles (we'll infer reasonable dates)
- [ ] Any specific GitHub projects to feature once repo is populated?
- [ ] Open Graph image - should we generate one or use a screenshot?

## Approval

✅ Architecture & Structure - Approved  
✅ Components & Visual Design - Approved  
✅ Animations & Interactions - Approved  
✅ Data Structure - Approved  
✅ Deployment & Performance - Approved

**Ready for implementation planning.**
