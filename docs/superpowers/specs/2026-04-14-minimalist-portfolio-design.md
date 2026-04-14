# Minimalist Portfolio Design Specification

**Date:** 2026-04-14  
**Author:** Claude (with Aash Singh Jat)  
**Status:** Approved  
**Design Direction:** Dark minimalism with ayushcmd.me typography and animated backgrounds

---

## Overview

A dark minimalist portfolio for Aash Singh Jat, Senior Frontend Developer, featuring clean typography, generous whitespace, and sophisticated layered background animations. Inspired by ayushcmd.me's typography system while maintaining a dark aesthetic with dynamic visual effects.

---

## Design Goals

- **Aesthetic:** Dark minimalist with sophisticated animated backgrounds
- **Typography:** Clean, readable, following ayushcmd.me patterns
- **Animation:** Subtle background effects + smooth component transitions
- **Performance:** Fast load, optimized animations, 60fps
- **Accessibility:** WCAG AA compliant, reduced motion support

---

## Technical Stack

**Keep (from existing codebase):**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn UI (Button, Card)
- `/lib/data.ts` (centralized content)
- `app/layout.tsx` (SEO metadata)
- Configuration files (tailwind.config.ts, next.config.mjs)

**Rebuild:**
- All section components (`components/sections/*`)
- `app/globals.css` (new dark minimal theme)
- Background animation system

**Add:**
- Canvas-based particle system
- Mouse-following gradient effect
- Animated gradient mesh
- Grain/noise texture overlay

---

## Architecture

### File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Keep (minor metadata updates)
│   ├── page.tsx            # Keep structure, update for new sections
│   └── globals.css         # Rebuild (dark minimal theme)
├── components/
│   ├── sections/           # Rebuild all 7 components
│   │   ├── Hero.tsx
│   │   ├── ProjectCarousel.tsx
│   │   ├── Experience.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── background/         # New: Background animations
│   │   ├── AnimatedMesh.tsx
│   │   ├── MouseGradient.tsx
│   │   ├── ParticleSystem.tsx
│   │   └── GrainOverlay.tsx
│   └── ui/                 # Keep (Shadcn components)
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   ├── data.ts             # Keep (all content already present)
│   └── utils.ts            # Keep (Shadcn cn() utility)
└── public/
    └── Aash_Singh_Jat_Resume.pdf  # Keep
```

---

## Visual Design System

### Color Palette

```css
/* Base Colors */
--background: #0a0a0a;           /* Deep black */
--foreground: #ffffff;           /* Primary text (headings) */
--foreground-secondary: #999999; /* Body text, descriptions */
--foreground-tertiary: #666666;  /* Labels, meta info */

/* Borders */
--border-primary: #2a2a2a;       /* Default borders */
--border-accent: #333333;        /* Hover states, accents */
--border-highlight: #ffffff;     /* Active/featured borders */

/* Background Effects (subtle, low opacity) */
--gradient-purple: rgba(91, 33, 182, 0.08);   /* #5b21b6 */
--gradient-blue: rgba(30, 64, 175, 0.08);     /* #1e40af */
--gradient-teal: rgba(15, 118, 110, 0.08);    /* #0f766e */
```

### Typography

**Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", 
             "Inter", "Helvetica Neue", Arial, sans-serif;
```

**Type Scale:**

| Element | Size | Weight | Line Height | Color | Use Case |
|---------|------|--------|-------------|-------|----------|
| Hero H1 | 48px | 400 | 1.2 | #fff | Main hero heading |
| Section H2 | 32px | 600 | 1.3 | #fff | Section headings |
| Card H3 | 24px | 600 | 1.3 | #fff | Project/experience titles |
| Subheading | 20px | 500 | 1.4 | #fff | Subsection titles |
| Body | 16px | 400 | 1.6 | #e0e0e0 | Standard text |
| Body Small | 14px | 400 | 1.6 | #999 | Meta info, descriptions |
| Label | 14px | 400 | 1.4 | #666 | Small caps labels (uppercase, letter-spacing: 0.08em) |

**Responsive Scaling:**
- Mobile: Scale down headings by 25% (Hero: 36px, H2: 24px, H3: 18px)
- Tablet: Scale down by 15%
- Desktop (>1200px): Full scale

### Spacing System

**Vertical Spacing:**
```css
/* Section spacing */
--section-gap: 120px;        /* Desktop: between sections */
--section-gap-tablet: 80px;  /* Tablet */
--section-gap-mobile: 60px;  /* Mobile */

/* Component spacing */
--space-xl: 48px;
--space-lg: 32px;
--space-md: 24px;
--space-sm: 16px;
--space-xs: 12px;
```

**Layout Constraints:**
```css
--content-max-width: 1200px;  /* Main content container */
--text-max-width: 700px;      /* Optimal reading width */
--padding-x-desktop: 48px;
--padding-x-tablet: 32px;
--padding-x-mobile: 24px;
```

---

## Background Animation System

### Overview

Four layered background effects create depth and sophistication without distraction. All effects are subtle, performance-optimized, and respect `prefers-reduced-motion`.

### Layer 1: Animated Gradient Mesh

**Implementation:** Multiple radial gradients with CSS animations

```tsx
// AnimatedMesh.tsx
<div className="gradient-mesh">
  <div className="blob blob-1" />
  <div className="blob blob-2" />
  <div className="blob blob-3" />
</div>
```

**Styling:**
```css
.gradient-mesh {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  opacity: 0.6;
}

.blob {
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  filter: blur(100px);
  animation: blob-move 30s infinite ease-in-out;
}

.blob-1 {
  background: radial-gradient(circle, rgba(91, 33, 182, 0.08) 0%, transparent 70%);
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.blob-2 {
  background: radial-gradient(circle, rgba(30, 64, 175, 0.08) 0%, transparent 70%);
  top: 50%;
  right: -10%;
  animation-delay: 10s;
}

.blob-3 {
  background: radial-gradient(circle, rgba(15, 118, 110, 0.08) 0%, transparent 70%);
  bottom: -20%;
  left: 30%;
  animation-delay: 20s;
}

@keyframes blob-move {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -50px) scale(1.1); }
  50% { transform: translate(-30px, 30px) scale(0.9); }
  75% { transform: translate(40px, 20px) scale(1.05); }
}
```

### Layer 2: Mouse-Following Gradient

**Implementation:** Radial gradient that follows cursor with smooth lag

```tsx
// MouseGradient.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function MouseGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    
    const animate = () => {
      currentX += (targetX - currentX) * 0.1; // Smooth lag
      currentY += (targetY - currentY) * 0.1;
      
      if (gradientRef.current) {
        gradientRef.current.style.background = 
          `radial-gradient(600px circle at ${currentX}px ${currentY}px, 
           rgba(255, 255, 255, 0.04), transparent 40%)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div
      ref={gradientRef}
      className="pointer-events-none fixed inset-0 z-10"
      style={{ mixBlendMode: 'soft-light' }}
    />
  );
}
```

### Layer 3: Particle System

**Implementation:** Canvas-based floating particles with subtle movement

```tsx
// ParticleSystem.tsx
'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Particle[] = [];
    const particleCount = 40;
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.5 - 0.3, // Slight upward bias
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Respawn if out of bounds
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.x = Math.random() * canvas.width;
        }
        
        // Draw particle
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20"
    />
  );
}
```

### Layer 4: Grain/Noise Texture

**Implementation:** SVG filter for subtle texture

```tsx
// GrainOverlay.tsx
export default function GrainOverlay() {
  return (
    <>
      <svg className="fixed inset-0 pointer-events-none z-30 opacity-[0.02]">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </>
  );
}
```

**Z-Index Stack:**
```
0: Animated gradient mesh
10: Mouse-following gradient
20: Particle system
30: Grain overlay
50: Navigation bar
100+: Main content sections
```

**Performance Optimizations:**
- Use `will-change: transform` sparingly
- `requestAnimationFrame` for all animations
- Pause animations when tab not visible (Page Visibility API)
- Disable/reduce on `prefers-reduced-motion`

---

## Component Design

### Navigation Bar

**Layout:** Fixed position, sticky on scroll

```tsx
<nav className="fixed top-0 w-full z-50 border-b border-border-primary bg-background/80 backdrop-blur-sm">
  <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
    {/* Left: Name */}
    <div className="text-lg font-semibold text-foreground">
      aash singh jat
    </div>
    
    {/* Right: Nav links */}
    <div className="flex gap-8 text-sm text-foreground-tertiary">
      <a href="#projects" className="hover:text-foreground transition">projects</a>
      <a href="#experience" className="hover:text-foreground transition">experience</a>
      <a href="#skills" className="hover:text-foreground transition">skills</a>
      <a href="#contact" className="hover:text-foreground transition">contact</a>
    </div>
  </div>
</nav>
```

**Behavior:**
- Smooth scroll to sections on click
- Active section highlighted in nav (scroll spy)
- Backdrop blur for depth
- Mobile: Hamburger menu (right side)

---

### 1. Hero Section

**Layout:** Full viewport height, vertically centered

```tsx
<section className="min-h-screen flex items-center justify-center px-6 pt-20">
  <div className="max-w-[700px] mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl font-normal text-foreground mb-6"
    >
      Senior Frontend Developer
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg text-foreground-secondary leading-relaxed mb-8"
    >
      6+ years building scalable, high-performance web applications with 
      Next.js, Vue.js, and React
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex gap-4"
    >
      <Button size="lg" className="rounded-full px-8">
        View Projects
      </Button>
      <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
        <a href="/Aash_Singh_Jat_Resume.pdf" download>
          Download Resume
        </a>
      </Button>
    </motion.div>
  </div>
</section>
```

**Animation:**
- Staggered fade up (h1 → p → buttons)
- Timing: 0s, 0.2s, 0.4s delays
- Duration: 0.6s each

---

### 2. Project Carousel

**Section:** Auto-rotating carousel showing 6 projects

```tsx
<section className="max-w-[1200px] mx-auto px-6 py-24">
  <h2 className="text-sm uppercase tracking-wider text-foreground-tertiary text-center mb-16">
    Featured Projects
  </h2>
  
  <div className="max-w-[700px] mx-auto relative">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-[#111] border border-border-primary rounded-lg p-12"
      >
        {/* Company label */}
        <div className="text-xs uppercase tracking-wider text-foreground-tertiary mb-3">
          {project.company}
        </div>
        
        {/* Project title */}
        <h3 className="text-3xl font-semibold text-foreground mb-4">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-foreground-secondary leading-relaxed mb-4">
          {project.description}
        </p>
        
        {/* Impact metrics */}
        <div className="text-sm text-foreground-tertiary mb-6">
          {project.impact}
        </div>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="border border-border-accent px-3 py-1 rounded text-sm text-foreground-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="flex gap-2 justify-center">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === currentIndex ? 'bg-foreground' : 'bg-border-accent'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>
```

**Carousel Logic:**
- Auto-advance every 5 seconds
- Pause on hover (clear interval)
- Manual navigation via dots
- Slide transition: fade + x-offset (50px)
- 6 projects from `data.ts`

---

### 3. Experience Section

**Layout:** Vertical timeline with left border accent

```tsx
<section className="max-w-[900px] mx-auto px-6 py-24">
  <h2 className="text-sm uppercase tracking-wider text-foreground-tertiary text-center mb-16">
    Work Experience
  </h2>
  
  <div className="space-y-12">
    {experience.map((exp, i) => (
      <motion.div
        key={exp.company}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="border-l-2 border-foreground pl-8"
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-foreground">
            {exp.company}
          </h3>
          <span className="text-sm text-foreground-tertiary">
            {exp.period}
          </span>
        </div>
        
        <div className="text-foreground-secondary mb-3">
          {exp.role}
        </div>
        
        <p className="text-foreground-secondary leading-relaxed">
          {exp.achievement}
        </p>
      </motion.div>
    ))}
  </div>
</section>
```

**Animation:**
- Scroll-triggered fade up
- Stagger: 0.1s between entries
- `whileInView` triggers at 30% visibility

---

### 4. Testimonials Section

**Layout:** Single centered card

```tsx
<section className="max-w-[800px] mx-auto px-6 py-24">
  <h2 className="text-sm uppercase tracking-wider text-foreground-tertiary text-center mb-16">
    What People Say
  </h2>
  
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="bg-[#111] border border-border-primary rounded-lg p-12 text-center"
  >
    {/* Opening quote */}
    <div className="text-6xl text-border-accent mb-4">&ldquo;</div>
    
    {/* Quote text */}
    <p className="text-lg italic text-foreground leading-relaxed mb-8">
      {testimonials[0].quote}
    </p>
    
    {/* Author */}
    <div className="border-t border-border-primary pt-6">
      <div className="font-semibold text-foreground mb-1">
        {testimonials[0].author}
      </div>
      <div className="text-sm text-foreground-tertiary">
        {testimonials[0].role} - {testimonials[0].company}
      </div>
    </div>
  </motion.div>
</section>
```

---

### 5. About Section

**Layout:** Centered text block

```tsx
<section className="max-w-[700px] mx-auto px-6 py-24 text-center">
  <h2 className="text-sm uppercase tracking-wider text-foreground-tertiary mb-8">
    About Me
  </h2>
  
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="text-lg text-foreground leading-relaxed"
  >
    {about.description}
  </motion.p>
</section>
```

---

### 6. Skills Section

**Layout:** Flexbox wrap with pill badges

```tsx
<section className="max-w-[900px] mx-auto px-6 py-24">
  <h2 className="text-sm uppercase tracking-wider text-foreground-tertiary text-center mb-12">
    Core Skills
  </h2>
  
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="flex flex-wrap justify-center gap-3"
  >
    {skills.map((skill, i) => (
      <motion.span
        key={skill.name}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: i * 0.03 }}
        className={`
          px-5 py-2.5 rounded-full text-sm transition-all cursor-default
          hover:scale-105
          ${skill.category === 'primary' 
            ? 'border-2 border-foreground text-foreground font-medium' 
            : 'border border-border-accent text-foreground-secondary'
          }
        `}
      >
        {skill.name}
      </motion.span>
    ))}
  </motion.div>
</section>
```

**Visual Hierarchy:**
- Primary skills: 2px white border, white text
- Secondary skills: 1px gray border, gray text
- Hover: Scale 1.05
- Stagger animation: 0.03s per skill

---

### 7. Contact Section

**Layout:** Centered with CTAs

```tsx
<section className="max-w-[700px] mx-auto px-6 py-24 text-center">
  <h2 className="text-3xl font-semibold text-foreground mb-4">
    Let's Connect
  </h2>
  
  <p className="text-foreground-secondary mb-8">
    Open to senior frontend roles in high-impact product companies.
  </p>
  
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="flex flex-wrap justify-center gap-4"
  >
    <Button size="lg" className="rounded-full px-8" asChild>
      <a href={`mailto:${personalInfo.email}`}>Email Me</a>
    </Button>
    
    <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </Button>
    
    <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </Button>
  </motion.div>
</section>
```

---

## Animation Specifications

### Timing Functions

```css
/* Use these standard easings */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);      /* Smooth deceleration */
--ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);  /* Balanced */
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Subtle bounce */
```

### Animation Patterns

**Scroll Reveals:**
- Initial: `opacity: 0, y: 20`
- Animate: `opacity: 1, y: 0`
- Duration: 0.5-0.6s
- Trigger: `whileInView` at 30% visibility
- Once: true (don't repeat)

**Hover States:**
- Buttons: Scale 1.03, 200ms
- Skill pills: Scale 1.05, 200ms
- Nav links: Color change, 200ms
- Project cards: translateY -2px, 300ms

**Carousel Transitions:**
- Exit: `opacity: 0, x: -50`, 300ms
- Enter: `opacity: 1, x: 0`, 300ms
- Auto-advance: 5 second interval
- Pause: On hover/focus

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Disable background animations */
  .gradient-mesh,
  .particle-system,
  canvas {
    display: none;
  }
}
```

---

## Responsive Design

### Breakpoints

```css
--mobile: 640px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1280px;
```

### Mobile Adaptations (< 640px)

**Navigation:**
- Hamburger menu (top-right)
- Full-screen overlay menu
- Stack links vertically

**Hero:**
- Heading: 36px (down from 48px)
- Stack buttons vertically
- Reduce vertical padding

**Project Carousel:**
- Card padding: 24px (down from 48px)
- Font sizes: -20%
- Dots below card

**Experience:**
- Remove left border accent on mobile
- Stack company/period vertically
- Reduce spacing between entries

**Skills:**
- Smaller pills: 12px font, less padding
- Maintain wrap, justify-center

**Contact:**
- Stack buttons vertically
- Full-width buttons on small screens

### Tablet (640px - 1024px)

- Moderate scaling (reduce by 15%)
- Maintain most desktop layouts
- Adjust max-widths proportionally

---

## Performance Targets

### Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.0s
- **FID (First Input Delay):** < 50ms
- **CLS (Cumulative Layout Shift):** < 0.05

### Optimization Strategies

**Images:**
- Use Next.js `<Image>` component
- WebP format with fallbacks
- Lazy load below fold

**Fonts:**
- System font stack (no web fonts = instant load)
- Fallback fonts match metrics

**JavaScript:**
- Code split by route
- Lazy load Framer Motion
- Defer non-critical scripts

**CSS:**
- Tailwind purge (remove unused)
- Inline critical CSS
- Defer non-critical

**Background Animations:**
- Use `requestAnimationFrame` (60fps)
- Pause when tab not visible
- Low opacity = less GPU load
- Throttle mouse events (16ms)

**Bundle Size Targets:**
- First Load JS: < 100KB
- Total page weight: < 300KB

---

## Accessibility

### WCAG AA Compliance

**Color Contrast:**
- Foreground (#fff) on Background (#0a0a0a): 21:1 ✓
- Secondary text (#999) on Background: 7.5:1 ✓
- Tertiary text (#666) on Background: 4.6:1 ✓
- All meet AA standard (4.5:1 minimum)

**Keyboard Navigation:**
- Tab order follows visual flow
- Focus visible on all interactive elements
- Skip to content link
- Smooth scroll via keyboard

**Semantic HTML:**
- Proper heading hierarchy (h1 → h2 → h3)
- `<nav>`, `<main>`, `<section>` landmarks
- ARIA labels where needed (carousel controls)

**Screen Readers:**
- Alt text for any images (if added later)
- `aria-label` on icon-only buttons
- `aria-live` for carousel announcements
- Focus management in mobile menu

**Reduced Motion:**
- Respect `prefers-reduced-motion`
- Disable background animations
- Instant transitions instead of animated
- Maintain full functionality

---

## SEO Optimization

### Metadata (app/layout.tsx)

```tsx
export const metadata: Metadata = {
  title: "Aash Singh Jat - Senior Frontend Developer",
  description: "Senior Frontend Developer with 6+ years building scalable web applications. Expert in Next.js, Vue.js, React, TypeScript. Maersk, Deloitte, UN experience.",
  keywords: [
    "Frontend Developer",
    "Senior Frontend Engineer",
    "Next.js Developer",
    "Vue.js Developer",
    "React Developer",
    "TypeScript",
    "Full Stack Developer",
    "Bangalore",
    "Portfolio"
  ],
  authors: [{ name: "Aash Singh Jat" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aashsinghjat.vercel.app",
    siteName: "Aash Singh Jat - Portfolio",
    title: "Aash Singh Jat - Senior Frontend Developer",
    description: "Senior Frontend Developer specializing in Next.js, Vue.js, and high-performance web applications",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aash Singh Jat - Senior Frontend Developer",
    description: "Senior Frontend Developer | Next.js, Vue.js, React | 6+ years experience",
  },
  robots: {
    index: true,
    follow: true,
  }
};
```

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aash Singh Jat",
  "jobTitle": "Senior Frontend Developer",
  "url": "https://aashsinghjat.vercel.app",
  "sameAs": [
    "https://www.linkedin.com/in/aash-jat-b58948130/",
    "https://github.com/aashsinghjat"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressCountry": "IN"
  },
  "alumniOf": "Not specified",
  "knowsAbout": [
    "Next.js", "Vue.js", "React.js", "TypeScript", 
    "Node.js", "PostgreSQL", "Web Development"
  ]
}
```

---

## Implementation Strategy

### Phase 1: Setup & Infrastructure (Keep)
- ✅ Next.js 14 configured
- ✅ Tailwind CSS configured
- ✅ Framer Motion installed
- ✅ Data structure (`lib/data.ts`) populated
- ✅ SEO metadata in layout

### Phase 2: Rebuild Components (New)
1. Update `app/globals.css` with new design system
2. Create background animation components (4 layers)
3. Rebuild navigation component
4. Rebuild all 7 section components
5. Update `app/page.tsx` with new structure

### Phase 3: Polish & Optimization
1. Test responsive breakpoints
2. Verify accessibility (keyboard, screen reader)
3. Test reduced motion preferences
4. Performance audit (Lighthouse)
5. Cross-browser testing

### Phase 4: Deployment
1. Build production bundle
2. Deploy to Vercel
3. Verify live site
4. Add custom domain (optional)

---

## Success Criteria

- ✅ Dark minimalist aesthetic achieved
- ✅ All 7 sections implemented with correct content
- ✅ Background animations smooth and subtle
- ✅ Auto-rotating project carousel (5s, pause on hover)
- ✅ Responsive across mobile/tablet/desktop
- ✅ WCAG AA accessibility compliance
- ✅ Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- ✅ Fast load times (LCP < 2s)
- ✅ Smooth animations at 60fps
- ✅ Reduced motion support working
- ✅ Deployed to Vercel with auto-deploy

---

## Design Approved

**Approved by:** Aash Singh Jat  
**Date:** 2026-04-14  
**Ready for:** Implementation Planning

---

**Next Step:** Create implementation plan using `superpowers:writing-plans` skill.