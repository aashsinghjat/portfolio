# Minimalist Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild portfolio with dark minimalist aesthetic, ayushcmd.me typography, and sophisticated background animations

**Architecture:** Keep Next.js infrastructure and data layer, rebuild all visual components with new design system, add 4-layer background animation system (gradient mesh, mouse-following gradient, particles, grain)

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Canvas API

---

## File Structure

**Keep (no changes):**
- `lib/data.ts` - All content data
- `lib/utils.ts` - Shadcn utilities
- `components/ui/button.tsx` - Shadcn button
- `components/ui/card.tsx` - Shadcn card
- `public/Aash_Singh_Jat_Resume.pdf` - Resume file

**Modify:**
- `app/globals.css` - Complete rewrite for new design system
- `app/page.tsx` - Update to use new components
- `app/layout.tsx` - Minor metadata updates
- `tailwind.config.ts` - Add new color variables

**Create:**
- `components/background/AnimatedMesh.tsx` - Gradient blob animations
- `components/background/MouseGradient.tsx` - Mouse-following radial gradient
- `components/background/ParticleSystem.tsx` - Canvas particle system
- `components/background/GrainOverlay.tsx` - SVG noise texture
- `components/sections/Navigation.tsx` - Fixed nav bar
- `components/sections/Hero.tsx` - Hero section
- `components/sections/ProjectCarousel.tsx` - Auto-rotating carousel
- `components/sections/Experience.tsx` - Timeline layout
- `components/sections/Testimonials.tsx` - Quote card
- `components/sections/About.tsx` - About text
- `components/sections/Skills.tsx` - Skill pills
- `components/sections/Contact.tsx` - Contact CTAs

---

## Task 1: Update Global CSS with New Design System

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace globals.css with new dark minimal theme**

File: `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 10 10 10;        /* #0a0a0a */
    --foreground: 255 255 255;     /* #ffffff */
    --foreground-secondary: 153 153 153;  /* #999999 */
    --foreground-tertiary: 102 102 102;   /* #666666 */
    --border-primary: 42 42 42;    /* #2a2a2a */
    --border-accent: 51 51 51;     /* #333333 */
  }

  * {
    @apply border-border-primary;
  }

  body {
    @apply bg-[#0a0a0a] text-foreground antialiased;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", 
                 "Inter", "Helvetica Neue", Arial, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Disable background animations */
  .gradient-mesh,
  .particle-canvas,
  .mouse-gradient {
    display: none !important;
  }
}
```

- [ ] **Step 2: Verify CSS compiles**

Run:
```bash
npm run dev
```

Expected: Dev server starts with no CSS errors

- [ ] **Step 3: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add app/globals.css
git commit -m "feat: update global CSS with dark minimal design system

Replace theme with dark minimalist colors, system font stack, and reduced motion support.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Update Tailwind Config

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Update Tailwind config with new color variables**

File: `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        "foreground-secondary": "rgb(var(--foreground-secondary) / <alpha-value>)",
        "foreground-tertiary": "rgb(var(--foreground-tertiary) / <alpha-value>)",
        "border-primary": "rgb(var(--border-primary) / <alpha-value>)",
        "border-accent": "rgb(var(--border-accent) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Test Tailwind compilation**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Expected: Page loads with black background

- [ ] **Step 3: Stop dev server and commit**

```bash
# Ctrl+C
git add tailwind.config.ts
git commit -m "feat: update Tailwind config with new color variables

Add foreground, border, and background color variables for dark minimal theme.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Create Animated Gradient Mesh Component

**Files:**
- Create: `components/background/AnimatedMesh.tsx`

- [ ] **Step 1: Create AnimatedMesh component**

File: `components/background/AnimatedMesh.tsx`

```typescript
'use client';

export default function AnimatedMesh() {
  return (
    <div className="gradient-mesh fixed inset-0 z-0 overflow-hidden opacity-60 pointer-events-none">
      <div className="blob blob-1 absolute w-[800px] h-[800px] rounded-full blur-[100px] animate-blob-1" 
           style={{
             background: 'radial-gradient(circle, rgba(91, 33, 182, 0.08) 0%, transparent 70%)',
             top: '-20%',
             left: '-10%',
           }} 
      />
      <div className="blob blob-2 absolute w-[800px] h-[800px] rounded-full blur-[100px] animate-blob-2" 
           style={{
             background: 'radial-gradient(circle, rgba(30, 64, 175, 0.08) 0%, transparent 70%)',
             top: '50%',
             right: '-10%',
           }} 
      />
      <div className="blob blob-3 absolute w-[800px] h-[800px] rounded-full blur-[100px] animate-blob-3" 
           style={{
             background: 'radial-gradient(circle, rgba(15, 118, 110, 0.08) 0%, transparent 70%)',
             bottom: '-20%',
             left: '30%',
           }} 
      />
      
      <style jsx>{`
        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -50px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(40px, 20px) scale(1.05); }
        }
        
        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, 50px) scale(1.05); }
          50% { transform: translate(30px, -30px) scale(0.95); }
          75% { transform: translate(-50px, -20px) scale(1.1); }
        }
        
        @keyframes blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, 40px) scale(0.9); }
          50% { transform: translate(-40px, -40px) scale(1.1); }
          75% { transform: translate(20px, -30px) scale(0.95); }
        }
        
        .animate-blob-1 {
          animation: blob-1 30s infinite ease-in-out;
        }
        
        .animate-blob-2 {
          animation: blob-2 30s infinite ease-in-out 10s;
        }
        
        .animate-blob-3 {
          animation: blob-3 30s infinite ease-in-out 20s;
        }
      `}</style>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/background/AnimatedMesh.tsx
git commit -m "feat: create AnimatedMesh background component

Add 3-blob gradient mesh with 30s animation loop for subtle background movement.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Create Mouse-Following Gradient Component

**Files:**
- Create: `components/background/MouseGradient.tsx`

- [ ] **Step 1: Create MouseGradient component**

File: `components/background/MouseGradient.tsx`

```typescript
'use client';

import { useEffect, useRef } from 'react';

export default function MouseGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    
    const animate = () => {
      // Smooth lag effect
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      if (gradientRef.current) {
        gradientRef.current.style.background = 
          `radial-gradient(600px circle at ${currentX}px ${currentY}px, rgba(255, 255, 255, 0.04), transparent 40%)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div
      ref={gradientRef}
      className="mouse-gradient pointer-events-none fixed inset-0 z-10"
      style={{ mixBlendMode: 'soft-light' }}
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/background/MouseGradient.tsx
git commit -m "feat: create MouseGradient component

Add mouse-following radial gradient with smooth lag effect for interactive background.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Create Particle System Component

**Files:**
- Create: `components/background/ParticleSystem.tsx`

- [ ] **Step 1: Create ParticleSystem component**

File: `components/background/ParticleSystem.tsx`

```typescript
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
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    
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
    
    let animationFrameId: number;
    
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
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      setCanvasSize();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas pointer-events-none fixed inset-0 z-20"
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/background/ParticleSystem.tsx
git commit -m "feat: create ParticleSystem canvas component

Add 40 floating particles with slow upward drift for subtle background movement.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: Create Grain Overlay Component

**Files:**
- Create: `components/background/GrainOverlay.tsx`

- [ ] **Step 1: Create GrainOverlay component**

File: `components/background/GrainOverlay.tsx`

```typescript
export default function GrainOverlay() {
  return (
    <svg className="fixed inset-0 pointer-events-none z-30 opacity-[0.02]" aria-hidden="true">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/background/GrainOverlay.tsx
git commit -m "feat: create GrainOverlay component

Add SVG noise filter for subtle texture overlay on background.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 7: Create Navigation Component

**Files:**
- Create: `components/sections/Navigation.tsx`

- [ ] **Step 1: Create Navigation component**

File: `components/sections/Navigation.tsx`

```typescript
'use client';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border-primary bg-background/80 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Left: Name */}
        <div className="text-lg font-semibold text-foreground">
          aash singh jat
        </div>
        
        {/* Right: Nav links - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex gap-8 text-sm text-foreground-tertiary">
          <a 
            href="#projects" 
            className="hover:text-foreground transition-colors duration-200"
          >
            projects
          </a>
          <a 
            href="#experience" 
            className="hover:text-foreground transition-colors duration-200"
          >
            experience
          </a>
          <a 
            href="#skills" 
            className="hover:text-foreground transition-colors duration-200"
          >
            skills
          </a>
          <a 
            href="#contact" 
            className="hover:text-foreground transition-colors duration-200"
          >
            contact
          </a>
        </div>
        
        {/* Mobile: Show simplified version */}
        <div className="md:hidden text-sm text-foreground-tertiary">
          <a href="#contact" className="hover:text-foreground transition-colors">
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Navigation.tsx
git commit -m "feat: create Navigation component

Add fixed navigation bar with smooth scroll links and responsive layout.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 8: Create Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: Create Hero component**

File: `components/sections/Hero.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-[700px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-6 leading-tight"
        >
          {personalInfo.title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-foreground-secondary leading-relaxed mb-8 max-w-[600px]"
        >
          {personalInfo.tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-8 border-border-accent text-foreground hover:bg-border-primary"
            asChild
          >
            <a href={personalInfo.resumePath} download>
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: create Hero section component

Add hero with staggered fade-up animations and dual CTAs.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 9: Create Project Carousel

**Files:**
- Create: `components/sections/ProjectCarousel.tsx`

- [ ] **Step 1: Create ProjectCarousel component**

File: `components/sections/ProjectCarousel.tsx`

```typescript
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // 5 seconds
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const currentProject = projects[currentIndex];
  
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-24 scroll-mt-20">
      <h2 className="text-sm uppercase tracking-wider text-foreground-tertiary text-center mb-16">
        Featured Projects
      </h2>
      
      <div 
        className="max-w-[700px] mx-auto relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111111] border border-border-primary rounded-lg p-8 md:p-12"
          >
            {/* Company label */}
            <div className="text-xs uppercase tracking-wider text-foreground-tertiary mb-3">
              {currentProject.company}
            </div>
            
            {/* Project title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              {currentProject.title}
            </h3>
            
            {/* Description */}
            <p className="text-foreground-secondary leading-relaxed mb-4">
              {currentProject.description}
            </p>
            
            {/* Impact metrics */}
            <div className="text-sm text-foreground-tertiary mb-6">
              {currentProject.impact}
            </div>
            
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentProject.tags.map((tag) => (
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
                  aria-label={`Go to project ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === currentIndex ? 'bg-foreground scale-125' : 'bg-border-accent'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/ProjectCarousel.tsx
git commit -m "feat: create ProjectCarousel component

Add auto-rotating carousel (5s) with pause on hover and manual navigation dots.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 10: Create Experience Section

**Files:**
- Create: `components/sections/Experience.tsx`

- [ ] **Step 1: Create Experience component**

File: `components/sections/Experience.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="max-w-[900px] mx-auto px-6 py-24 scroll-mt-20">
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
            className="border-l-2 border-foreground pl-6 md:pl-8"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1">
              <h3 className="text-xl font-semibold text-foreground">
                {exp.company}
              </h3>
              <span className="text-sm text-foreground-tertiary">
                {exp.period}
              </span>
            </div>
            
            <div className="text-foreground-secondary mb-3 text-sm md:text-base">
              {exp.role}
            </div>
            
            <p className="text-foreground-secondary leading-relaxed text-sm md:text-base">
              {exp.achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Experience.tsx
git commit -m "feat: create Experience section component

Add timeline layout with left border accent and scroll-triggered animations.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 11: Create Testimonials Section

**Files:**
- Create: `components/sections/Testimonials.tsx`

- [ ] **Step 1: Create Testimonials component**

File: `components/sections/Testimonials.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="max-w-[800px] mx-auto px-6 py-24">
      <h2 className="text-sm uppercase tracking-wider text-foreground-tertiary text-center mb-16">
        What People Say
      </h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="bg-[#111111] border border-border-primary rounded-lg p-8 md:p-12 text-center"
      >
        {/* Opening quote */}
        <div className="text-5xl md:text-6xl text-border-accent mb-4" aria-hidden="true">
          &ldquo;
        </div>
        
        {/* Quote text */}
        <p className="text-base md:text-lg italic text-foreground leading-relaxed mb-8">
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
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Testimonials.tsx
git commit -m "feat: create Testimonials section component

Add centered quote card with decorative quote marks and author info.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 12: Create About Section

**Files:**
- Create: `components/sections/About.tsx`

- [ ] **Step 1: Create About component**

File: `components/sections/About.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/data';

export default function About() {
  return (
    <section className="max-w-[700px] mx-auto px-6 py-24 text-center">
      <h2 className="text-sm uppercase tracking-wider text-foreground-tertiary mb-8">
        About Me
      </h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-base md:text-lg text-foreground leading-relaxed"
      >
        {about.description}
      </motion.p>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/About.tsx
git commit -m "feat: create About section component

Add centered about text with fade-up animation.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 13: Create Skills Section

**Files:**
- Create: `components/sections/Skills.tsx`

- [ ] **Step 1: Create Skills component**

File: `components/sections/Skills.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="max-w-[900px] mx-auto px-6 py-24 scroll-mt-20">
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
              px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm transition-all duration-200 cursor-default
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
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Skills.tsx
git commit -m "feat: create Skills section component

Add skill pills with visual hierarchy and staggered animations.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 14: Create Contact Section

**Files:**
- Create: `components/sections/Contact.tsx`

- [ ] **Step 1: Create Contact component**

File: `components/sections/Contact.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="max-w-[700px] mx-auto px-6 py-24 text-center scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
        Let's Connect
      </h2>
      
      <p className="text-foreground-secondary mb-8 text-sm md:text-base">
        Open to senior frontend roles in high-impact product companies.
      </p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4"
      >
        <Button 
          size="lg" 
          className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 hover:scale-103 transition-transform"
          asChild
        >
          <a href={`mailto:${personalInfo.email}`}>Email Me</a>
        </Button>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full px-8 border-border-accent text-foreground hover:bg-border-primary hover:scale-103 transition-transform"
          asChild
        >
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Button>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full px-8 border-border-accent text-foreground hover:bg-border-primary hover:scale-103 transition-transform"
          asChild
        >
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Contact.tsx
git commit -m "feat: create Contact section component

Add contact CTAs with email, LinkedIn, and GitHub links.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 15: Update Main Page with All Components

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update page.tsx with new component structure**

File: `app/page.tsx`

```typescript
import { personalInfo } from "@/lib/data";

// Background components
import AnimatedMesh from "@/components/background/AnimatedMesh";
import MouseGradient from "@/components/background/MouseGradient";
import ParticleSystem from "@/components/background/ParticleSystem";
import GrainOverlay from "@/components/background/GrainOverlay";

// Section components
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ProjectCarousel from "@/components/sections/ProjectCarousel";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: "https://aashsinghjat.vercel.app",
    sameAs: [personalInfo.linkedin, personalInfo.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Background layers */}
      <AnimatedMesh />
      <MouseGradient />
      <ParticleSystem />
      <GrainOverlay />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-100">
        <Hero />
        <ProjectCarousel />
        <Experience />
        <Testimonials />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
```

- [ ] **Step 2: Test all components render**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Expected: All sections visible, background animations running, no console errors

- [ ] **Step 3: Stop dev server and commit**

```bash
# Ctrl+C
git add app/page.tsx
git commit -m "feat: update main page with new components

Add all background layers and 7 section components with structured data.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 16: Update Layout Metadata

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update metadata in layout.tsx**

File: `app/layout.tsx`

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: update metadata for SEO

Add comprehensive OpenGraph, Twitter cards, and keywords for search optimization.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 17: Test Responsive Design

**Files:**
- No file changes

- [ ] **Step 1: Test mobile layout (375px)**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Open DevTools → Toggle device toolbar → iPhone SE (375px)

Check:
- [ ] Navigation shows only "contact" link
- [ ] Hero buttons stack vertically
- [ ] Project carousel card has reduced padding
- [ ] Experience entries readable
- [ ] Skills pills wrap properly
- [ ] Contact buttons stack vertically

Expected: All sections responsive on mobile

- [ ] **Step 2: Test tablet layout (768px)**

Set viewport to iPad (768px)

Check:
- [ ] Navigation shows all links
- [ ] Hero buttons horizontal
- [ ] All text readable
- [ ] Spacing appropriate

Expected: Tablet layout works correctly

- [ ] **Step 3: Test desktop layout (1440px)**

Set viewport to 1440px

Check:
- [ ] All sections centered with max-width
- [ ] Background animations smooth
- [ ] Carousel auto-rotates
- [ ] No layout issues

Expected: Desktop layout optimal

- [ ] **Step 4: Test reduced motion**

DevTools → Rendering → Emulate CSS prefers-reduced-motion: reduce  
Reload page

Check:
- [ ] Background animations hidden
- [ ] Transitions instant
- [ ] Page still functional

Expected: Reduced motion respected

- [ ] **Step 5: Stop dev server**

```bash
# Ctrl+C to stop
```

No commit needed (testing only)

---

## Task 18: Build Production Bundle

**Files:**
- No file changes

- [ ] **Step 1: Build for production**

Run:
```bash
npm run build
```

Expected: Build completes with no errors, shows bundle size stats

- [ ] **Step 2: Test production build locally**

Run:
```bash
npm run start
```

Open: http://localhost:3000

Check:
- [ ] All sections load
- [ ] Animations work smoothly
- [ ] No console errors
- [ ] Background effects visible

Expected: Production build works correctly

- [ ] **Step 3: Stop local server**

```bash
# Ctrl+C to stop
```

- [ ] **Step 4: Run Lighthouse audit**

Run dev server:
```bash
npm run dev
```

Open: http://localhost:3000  
DevTools → Lighthouse tab → Analyze page load (Mobile)

Expected minimum scores:
- Performance: > 85
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

- [ ] **Step 5: Stop dev server**

```bash
# Ctrl+C
```

No commit needed

---

## Task 19: Final Verification

**Files:**
- No file changes

- [ ] **Step 1: Verify all features work**

Run:
```bash
npm run dev
```

Open: http://localhost:3000

Checklist:
- [ ] Background animations (gradient mesh, mouse gradient, particles, grain) visible and smooth
- [ ] Navigation links scroll to sections
- [ ] Hero buttons link correctly
- [ ] Project carousel auto-rotates (5s)
- [ ] Carousel pauses on hover
- [ ] Carousel dots navigate correctly
- [ ] Experience timeline displays correctly
- [ ] Testimonials card shows quote
- [ ] About section centered
- [ ] Skills pills show primary/secondary hierarchy
- [ ] Contact buttons (Email, LinkedIn, GitHub) link correctly
- [ ] Resume download button works
- [ ] All animations smooth at 60fps
- [ ] No console errors

Expected: All features working

- [ ] **Step 2: Check accessibility**

- Tab through page (keyboard navigation)
- Check focus visible on all interactive elements
- Verify smooth scroll works via keyboard

Expected: Fully keyboard accessible

- [ ] **Step 3: Stop dev server**

```bash
# Ctrl+C
```

---

## Task 20: Create Final Commit and Summary

**Files:**
- No file changes

- [ ] **Step 1: Check git status**

Run:
```bash
git status
```

Expected: Working tree clean (all changes committed)

- [ ] **Step 2: View commit log**

Run:
```bash
git log --oneline -20
```

Expected: See all commits from this implementation

- [ ] **Step 3: Create summary comment**

Verify implementation complete:
- ✅ 4 background animation components created
- ✅ 7 section components rebuilt
- ✅ Navigation component added
- ✅ Global CSS updated with new design system
- ✅ Tailwind config updated
- ✅ Main page structure updated
- ✅ SEO metadata updated
- ✅ Responsive design tested
- ✅ Production build verified
- ✅ Accessibility verified

---

## Success Criteria Checklist

After completing all tasks, verify:

- [ ] **Visual:** Dark minimalist aesthetic with sophisticated background animations
- [ ] **Animations:** Gradient mesh, mouse-following gradient, particles, grain overlay all working
- [ ] **Carousel:** Auto-rotates every 5 seconds, pauses on hover
- [ ] **Responsive:** Mobile (375px), Tablet (768px), Desktop (1440px) all working
- [ ] **Content:** All 7 sections populated with correct data from `lib/data.ts`
- [ ] **Navigation:** Fixed nav bar with smooth scroll
- [ ] **Links:** Email, LinkedIn, GitHub, Resume download all functional
- [ ] **SEO:** Metadata, structured data, OpenGraph tags present
- [ ] **Accessibility:** Keyboard navigation, reduced motion support working
- [ ] **Performance:** Smooth 60fps animations, Lighthouse scores > 85
- [ ] **Build:** Production bundle builds without errors

---

## Plan Complete

All tasks defined with exact file paths, complete code blocks, and verification steps. Ready for execution using superpowers:subagent-driven-development or superpowers:executing-plans.