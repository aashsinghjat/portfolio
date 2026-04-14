# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dark, cinematic Next.js portfolio with 7 sections, Framer Motion animations, and deploy to Vercel.

**Architecture:** Single-page Next.js 14 app with App Router, centralized content in `/lib/data.ts`, seven component sections, Tailwind for styling, Framer Motion for animations.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI

---

## File Structure

**New files to create:**
```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Tailwind + custom dark theme
│   └── favicon.ico         # (Next.js default)
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── WorkExperience.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── card.tsx        # Shadcn Card component
│       └── button.tsx      # Shadcn Button component
├── lib/
│   ├── data.ts             # All content data
│   └── utils.ts            # Shadcn cn() utility
├── public/
│   └── Aash_Singh_Jat_Resume.pdf
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── package.json
└── components.json         # Shadcn config
```

---

## Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`, `next.config.mjs`, `tsconfig.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

- [ ] **Step 1: Create Next.js project with TypeScript and Tailwind**

Run:
```bash
npx create-next-app@14 . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

When prompted:
- Would you like to use TypeScript? **Yes**
- Would you like to use ESLint? **Yes**  
- Would you like to use Tailwind CSS? **Yes**
- Would you like to use `src/` directory? **No**
- Would you like to use App Router? **Yes**
- Would you like to customize the default import alias? **No** (use @/*)

Expected: Project scaffold created with all config files

- [ ] **Step 2: Install Framer Motion**

Run:
```bash
npm install framer-motion
```

Expected: `framer-motion` added to package.json

- [ ] **Step 3: Verify dev server works**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Expected: Default Next.js welcome page loads

- [ ] **Step 4: Stop dev server and commit**

Run:
```bash
# Ctrl+C to stop server
git add .
git commit -m "feat: initialize Next.js 14 project with TypeScript and Tailwind

Set up portfolio project with App Router, TypeScript, Tailwind CSS, and Framer Motion.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Configure Tailwind for Dark Theme

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Update Tailwind config with dark theme**

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
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to bottom right, #000000, #1a0033, #0a0a1a)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Update globals.css with dark theme and reduced motion**

File: `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 0%; /* Black */
    --foreground: 0 0% 100%; /* White */
    --border: 0 0% 20%; /* Dark gray */
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-black text-white;
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
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Test styles**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Expected: Page background should be black with white text

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add tailwind.config.ts app/globals.css
git commit -m "feat: configure Tailwind dark theme and reduced motion

Add dark color scheme, hero gradient, fade-up animation, and prefers-reduced-motion support.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Setup Shadcn UI Components

**Files:**
- Create: `components.json`, `lib/utils.ts`, `components/ui/card.tsx`, `components/ui/button.tsx`

- [ ] **Step 1: Initialize Shadcn UI**

Run:
```bash
npx shadcn@latest init
```

When prompted:
- Would you like to use TypeScript? **Yes**
- Which style would you like to use? **Default**
- Which color would you like to use as base color? **Slate**
- Where is your global CSS file? **app/globals.css**
- Would you like to use CSS variables for colors? **Yes**
- Where is your tailwind.config.js? **tailwind.config.ts**
- Configure the import alias for components? **@/components**
- Configure the import alias for utils? **@/lib/utils**
- Are you using React Server Components? **Yes**

Expected: Creates `components.json` and `lib/utils.ts`

- [ ] **Step 2: Add Card component**

Run:
```bash
npx shadcn@latest add card
```

Expected: Creates `components/ui/card.tsx`

- [ ] **Step 3: Add Button component**

Run:
```bash
npx shadcn@latest add button
```

Expected: Creates `components/ui/button.tsx`

- [ ] **Step 4: Verify components exist**

Run:
```bash
ls -la components/ui/
```

Expected: See `card.tsx` and `button.tsx`

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: setup Shadcn UI with Card and Button components

Initialize Shadcn UI configuration and add Card, Button components for portfolio sections.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Create Content Data Structure

**Files:**
- Create: `lib/data.ts`

- [ ] **Step 1: Create data.ts with all content**

File: `lib/data.ts`

```typescript
export const personalInfo = {
  name: "Aash Singh Jat",
  title: "Senior Frontend Engineer",
  tagline: "Building scalable, high-performance and beautifully crafted web experiences",
  email: "aashjat96@gmail.com",
  linkedin: "https://www.linkedin.com/in/aash-jat-b58948130/",
  github: "https://github.com/aashsinghjat",
  resumePath: "/Aash_Singh_Jat_Resume.pdf",
};

export const about = {
  description:
    "I build products that serve millions of users, focusing on performance, scale, and exceptional user experiences. From enterprise platforms to humanitarian tech, I bring technical excellence and user-centered thinking to every project.",
};

export const projects = [
  {
    id: "insightshub",
    title: "InsightsHub (Maersk)",
    description: "Used by 350+ teams • 40% faster decisions • 35% faster load time",
    tags: ["Performance", "Scale", "Architecture"],
    link: null,
  },
  {
    id: "digital-africa",
    title: "Digital Africa (FAO, UN)",
    description: "Offline-first • Service workers • 99% satisfaction",
    tags: ["Offline-First", "PWA", "Humanitarian"],
    link: null,
  },
  {
    id: "toyota",
    title: "Toyota E-commerce Platform",
    description: "Scalable AEM frontend • Analytics-driven UX • High performance",
    tags: ["E-commerce", "AEM", "Analytics"],
    link: null,
  },
];

export const experience = [
  {
    company: "Maersk",
    role: "Senior Frontend Engineer",
    period: "2022 - Present",
    achievement:
      "Built InsightsHub serving 350+ teams with 40% faster decision-making",
  },
  {
    company: "FAO/UN",
    role: "Frontend Engineer",
    period: "2021 - 2022",
    achievement:
      "Developed Digital Africa offline-first platform with 99% user satisfaction",
  },
  {
    company: "Toyota",
    role: "Frontend Engineer",
    period: "2020 - 2021",
    achievement:
      "Architected scalable AEM e-commerce frontend with analytics-driven UX",
  },
];

export const skills = [
  { name: "React", category: "primary" },
  { name: "Next.js", category: "primary" },
  { name: "TypeScript", category: "primary" },
  { name: "Vue.js", category: "secondary" },
  { name: "Node.js", category: "secondary" },
  { name: "PostgreSQL", category: "secondary" },
  { name: "Prisma", category: "secondary" },
  { name: "Jest", category: "secondary" },
];

export const testimonials = [
  {
    quote:
      "Being an innovative and creative developer, Aash was an astounding asset to the project. She comes with sharp technical skills and unwavering confidence which helps her to get to the solutions much faster in complex scenarios. She is an excellent team player and a reliable, competitive professional.",
    author: "Hrushikesh Mokashi",
    role: "Sharepoint Professional",
    company: "Zensar Technologies",
  },
];
```

- [ ] **Step 2: Verify file is valid TypeScript**

Run:
```bash
npx tsc --noEmit lib/data.ts
```

Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "feat: create centralized content data structure

Add all portfolio content (personal info, projects, experience, skills, testimonials) in lib/data.ts for easy maintenance.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Create Hero Section Component

**Files:**
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: Create Hero component with animations**

File: `components/sections/Hero.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-hero-gradient">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-3 bg-white text-black font-medium shadow-xl hover:bg-gray-200 transition"
          >
            View Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full px-8 py-3 bg-white/10 text-white border border-white/30 backdrop-blur hover:bg-white/20 transition"
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

- [ ] **Step 2: Test Hero component in isolation**

Temporarily modify `app/page.tsx`:

```typescript
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Expected: Hero section displays with name, tagline, two buttons, fade-up animation on load

- [ ] **Step 3: Verify animations work**

Check:
- Name fades up with blur effect
- Tagline appears 0.3s after
- Buttons appear 0.6s after with slight scale
- "Download Resume" link points to `/Aash_Singh_Jat_Resume.pdf`

Expected: All animations smooth, buttons styled correctly

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add components/sections/Hero.tsx app/page.tsx
git commit -m "feat: create Hero section with Framer Motion animations

Add Hero component with gradient text, fade-up animations, and CTA buttons.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: Create Featured Projects Carousel

**Files:**
- Create: `components/sections/FeaturedProjects.tsx`

- [ ] **Step 1: Create FeaturedProjects carousel component**

File: `components/sections/FeaturedProjects.tsx`

```typescript
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="max-w-4xl mx-auto py-20 px-6 text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-gray-100"
      >
        Featured Work
      </motion.h2>

      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className="rounded-[28px] bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.7)] border border-white/20 transition-all hover:shadow-[0_25px_100px_rgba(255,255,255,0.1)] hover:-translate-y-1">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                  {projects[index].title}
                </h3>
                <p className="text-gray-300 mb-8 text-base md:text-lg">
                  {projects[index].description}
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
                  {projects[index].tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1">
                      <span className="text-lg">⚡</span> {tag}
                    </span>
                  ))}
                </div>

                <Button
                  disabled={!projects[index].link}
                  className="rounded-full px-6 py-2 bg-white text-black font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  View Live →
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute -bottom-14 flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add FeaturedProjects to page**

Modify `app/page.tsx`:

```typescript
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
```

- [ ] **Step 3: Test carousel functionality**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Test:
- Auto-rotates every 4 seconds
- Hover pauses rotation
- Click dots to navigate
- Card has glassmorphic effect
- Smooth fade + scale transitions

Expected: All carousel features work

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add components/sections/FeaturedProjects.tsx app/page.tsx
git commit -m "feat: create Featured Projects carousel with auto-rotation

Add glassmorphic carousel component with 3 projects, auto-rotation, pause on hover, and navigation dots.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 7: Create Work Experience Timeline

**Files:**
- Create: `components/sections/WorkExperience.tsx`

- [ ] **Step 1: Create WorkExperience timeline component**

File: `components/sections/WorkExperience.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/lib/data";

export default function WorkExperience() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight text-gray-100"
      >
        Work Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20" />

        {/* Experience Cards */}
        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block flex-shrink-0 w-4 h-4 rounded-full bg-white border-4 border-black" />

              {/* Card */}
              <Card className="flex-1 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{exp.role}</p>
                  <p className="text-gray-400 text-sm">{exp.achievement}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add WorkExperience to page**

Modify `app/page.tsx`:

```typescript
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkExperience from "@/components/sections/WorkExperience";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <WorkExperience />
    </main>
  );
}
```

- [ ] **Step 3: Test timeline**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Scroll to Work Experience section  
Test:
- Timeline line visible (center on desktop, left on mobile)
- Cards alternate sides on desktop
- Cards stack vertically on mobile
- Scroll-triggered fade-up with 0.1s stagger

Expected: Timeline displays correctly, animations smooth

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add components/sections/WorkExperience.tsx app/page.tsx
git commit -m "feat: create Work Experience timeline with scroll animations

Add vertical timeline with 3 experience entries, alternating layout, and staggered fade-up animations.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 8: Create Testimonials Section

**Files:**
- Create: `components/sections/Testimonials.tsx`

- [ ] **Step 1: Create Testimonials component**

File: `components/sections/Testimonials.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight text-gray-100"
      >
        What People Say
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_20px_60px_rgba(255,255,255,0.05)]">
          <CardContent className="p-8 md:p-12 text-center">
            {/* Quote Marks */}
            <div className="text-6xl text-white/20 mb-4">&ldquo;</div>

            {/* Quote */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {testimonials[0].quote}
            </p>

            {/* Author */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-white font-semibold text-lg">
                {testimonials[0].author}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonials[0].role} - {testimonials[0].company}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add Testimonials to page**

Modify `app/page.tsx`:

```typescript
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkExperience from "@/components/sections/WorkExperience";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <WorkExperience />
      <Testimonials />
    </main>
  );
}
```

- [ ] **Step 3: Test testimonial card**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Scroll to Testimonials section  
Check:
- Large quote marks visible
- Quote text readable
- Author info separated by border
- Card has glow effect

Expected: Testimonial displays correctly with cinematic styling

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add components/sections/Testimonials.tsx app/page.tsx
git commit -m "feat: create Testimonials section with quote card

Add testimonial card with decorative quote marks, author info, and glassmorphic styling.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 9: Create About Section

**Files:**
- Create: `components/sections/About.tsx`

- [ ] **Step 1: Create About component**

File: `components/sections/About.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight text-gray-100"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
      >
        {about.description}
      </motion.p>
    </section>
  );
}
```

- [ ] **Step 2: Add About to page**

Modify `app/page.tsx`:

```typescript
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkExperience from "@/components/sections/WorkExperience";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <WorkExperience />
      <Testimonials />
      <About />
    </main>
  );
}
```

- [ ] **Step 3: Test About section**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Scroll to About section  
Check:
- Heading fades up
- Description fades up with delay
- Text is centered and readable

Expected: About section displays with smooth animations

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add components/sections/About.tsx app/page.tsx
git commit -m "feat: create About section with impact-focused description

Add About component with fade-up animations and centered layout.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 10: Create Skills Section

**Files:**
- Create: `components/sections/Skills.tsx`

- [ ] **Step 1: Create Skills component with hover effects**

File: `components/sections/Skills.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-10 tracking-tight text-gray-100"
      >
        Core Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.08 }}
            className={`px-4 py-2 rounded-full text-sm transition-all cursor-default
              ${
                skill.category === "primary"
                  ? "bg-white/15 border-2 border-white/30 text-white font-medium"
                  : "bg-white/10 border border-white/20 text-gray-300"
              }
              hover:bg-white/20 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
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

- [ ] **Step 2: Add Skills to page**

Modify `app/page.tsx`:

```typescript
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkExperience from "@/components/sections/WorkExperience";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <WorkExperience />
      <Testimonials />
      <About />
      <Skills />
    </main>
  );
}
```

- [ ] **Step 3: Test skills grid**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Scroll to Skills section  
Test:
- Primary skills (React, Next.js, TypeScript) have thicker borders
- Hover scales pill to 1.08 with glow
- Skills stagger in with 0.05s delay
- Responsive: 2 columns on mobile, flexible on desktop

Expected: Skills display with visual hierarchy and smooth hover effects

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add components/sections/Skills.tsx app/page.tsx
git commit -m "feat: create Skills section with hover glow effects

Add skill pills with visual hierarchy, staggered animations, and hover scale + glow effects.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 11: Create Contact Section

**Files:**
- Create: `components/sections/Contact.tsx`

- [ ] **Step 1: Create Contact component**

File: `components/sections/Contact.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-gray-100"
      >
        Let&apos;s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 mb-8 text-base md:text-lg"
      >
        Open to senior frontend roles in high-impact product companies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Button
          size="lg"
          asChild
          className="rounded-full px-8 py-3 bg-white text-black font-medium shadow-xl hover:bg-gray-200 hover:scale-105 transition"
        >
          <a href={`mailto:${personalInfo.email}`}>Email Me</a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          asChild
          className="rounded-full px-8 py-3 bg-white/10 text-white border border-white/30 backdrop-blur hover:bg-white/20 hover:scale-105 transition"
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
          asChild
          className="rounded-full px-8 py-3 bg-white/10 text-white border border-white/30 backdrop-blur hover:bg-white/20 hover:scale-105 transition"
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

- [ ] **Step 2: Add Contact to page**

Modify `app/page.tsx`:

```typescript
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkExperience from "@/components/sections/WorkExperience";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <WorkExperience />
      <Testimonials />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 3: Test contact buttons**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Scroll to Contact section  
Test:
- Email button opens mailto link
- LinkedIn button opens in new tab
- GitHub button opens in new tab
- All buttons have hover scale effect
- Mobile: buttons stack vertically

Expected: All contact links work, animations smooth

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add components/sections/Contact.tsx app/page.tsx
git commit -m "feat: create Contact section with social links

Add Contact component with Email, LinkedIn, and GitHub buttons with hover scale effects.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 12: Update Layout with SEO Metadata

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update root layout with metadata and fonts**

File: `app/layout.tsx`

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aash Singh Jat - Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer building scalable, high-performance web experiences. Featured work: Maersk InsightsHub, UN Digital Africa, Toyota E-commerce.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Aash Singh Jat" }],
  openGraph: {
    type: "website",
    title: "Aash Singh Jat - Portfolio",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and high-scale applications",
    url: "https://portfolio-aashsinghjat.vercel.app",
    siteName: "Aash Singh Jat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aash Singh Jat - Portfolio",
    description: "Senior Frontend Engineer",
  },
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

- [ ] **Step 2: Add JSON-LD structured data to page**

Modify `app/page.tsx` to add structured data at the top:

```typescript
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkExperience from "@/components/sections/WorkExperience";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { personalInfo } from "@/lib/data";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: "https://portfolio-aashsinghjat.vercel.app",
    sameAs: [personalInfo.linkedin, personalInfo.github],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <FeaturedProjects />
        <WorkExperience />
        <Testimonials />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify metadata in dev tools**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Open DevTools → Elements → `<head>`  
Check:
- `<title>` tag present
- `<meta name="description">` present
- Open Graph meta tags present
- JSON-LD script in body

Expected: All SEO metadata present

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add app/layout.tsx app/page.tsx
git commit -m "feat: add SEO metadata and structured data

Add OpenGraph tags, Twitter cards, JSON-LD Person schema, and optimized fonts for SEO.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 13: Copy Resume PDF to Public Directory

**Files:**
- Create: `public/Aash_Singh_Jat_Resume.pdf`

- [ ] **Step 1: Copy resume PDF to public directory**

Run:
```bash
cp "/Users/aash.jat/Downloads/Aash Singh Jat - 20_03_2026.pdf" public/Aash_Singh_Jat_Resume.pdf
```

Expected: PDF copied to `public/Aash_Singh_Jat_Resume.pdf`

- [ ] **Step 2: Verify PDF exists**

Run:
```bash
ls -lh public/Aash_Singh_Jat_Resume.pdf
```

Expected: File exists with size > 0

- [ ] **Step 3: Test resume download button**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Click "Download Resume" button in Hero section  
Expected: PDF downloads with name `Aash_Singh_Jat_Resume.pdf`

- [ ] **Step 4: Stop dev server and commit**

```bash
# Ctrl+C to stop
git add public/Aash_Singh_Jat_Resume.pdf
git commit -m "feat: add resume PDF to public directory

Add Aash Singh Jat resume PDF for download functionality.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 14: Test Responsive Design

**Files:**
- No new files

- [ ] **Step 1: Test mobile layout (375px)**

Run:
```bash
npm run dev
```

Open: http://localhost:3000  
Open DevTools → Toggle device toolbar → iPhone SE (375px)  
Check:
- Hero: Buttons stack vertically
- Projects: Card padding reduced
- Timeline: Single column, timeline line on left
- Skills: 2-column grid
- Contact: Buttons stack vertically

Expected: All sections responsive on mobile

- [ ] **Step 2: Test tablet layout (768px)**

Set viewport to 768px (iPad)  
Check:
- Hero: Buttons horizontal
- Projects: Full card visible
- Timeline: Alternating cards start to show
- Skills: Flexible grid
- All text readable

Expected: Tablet layout works

- [ ] **Step 3: Test desktop layout (1440px)**

Set viewport to 1440px  
Check:
- All sections centered with max-width
- Hero gradient fills viewport
- Timeline cards alternate left/right
- Skills wrap naturally

Expected: Desktop layout optimal

- [ ] **Step 4: Test reduced motion**

Open DevTools → Rendering → Emulate CSS prefers-reduced-motion: reduce  
Reload page  
Check:
- Animations still happen but instant (no motion)
- Page still functional
- No jarring layout shifts

Expected: Reduced motion respected

- [ ] **Step 5: Stop dev server**

```bash
# Ctrl+C to stop
```

No commit needed (testing only)

---

## Task 15: Build and Deploy to Vercel

**Files:**
- No new files

- [ ] **Step 1: Build production bundle locally**

Run:
```bash
npm run build
```

Expected: Build completes with no errors, outputs bundle size stats

- [ ] **Step 2: Test production build locally**

Run:
```bash
npm run start
```

Open: http://localhost:3000  
Check:
- All sections load
- Animations work
- No console errors

Expected: Production build works locally

- [ ] **Step 3: Stop local server**

```bash
# Ctrl+C to stop
```

- [ ] **Step 4: Push to GitHub**

Run:
```bash
git push origin main
```

Expected: Code pushed to https://github.com/aashsinghjat/portfolio

- [ ] **Step 5: Deploy to Vercel**

Go to: https://vercel.com/new  
Steps:
1. Click "Import Project"
2. Select GitHub repository: `aashsinghjat/portfolio`
3. Framework preset: Next.js (auto-detected)
4. Root directory: `./`
5. Build command: `npm run build` (default)
6. Output directory: `.next` (default)
7. Click "Deploy"

Expected: Deployment starts

- [ ] **Step 6: Wait for deployment to complete**

Monitor: Vercel dashboard shows build logs  
Expected: Deployment succeeds, URL provided (e.g., `portfolio-aashsinghjat.vercel.app`)

- [ ] **Step 7: Test live site**

Open: Deployment URL from Vercel  
Check:
- All sections visible
- Animations work
- Resume downloads
- Links work (LinkedIn, GitHub, Email)
- Mobile responsive
- Fast load time

Expected: Live site works perfectly

- [ ] **Step 8: Run Lighthouse audit**

In Chrome DevTools:
1. Open Lighthouse tab
2. Select: Performance, Accessibility, Best Practices, SEO
3. Device: Mobile
4. Click "Analyze page load"

Expected scores:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

- [ ] **Step 9: Document deployment**

Create a final commit with deployment URL:

```bash
echo "# Portfolio Website

Live at: https://[your-vercel-url].vercel.app

Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.
" > README.md

git add README.md
git commit -m "docs: add README with deployment URL

Portfolio successfully deployed to Vercel.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
git push origin main
```

---

## Success Criteria Checklist

After completing all tasks, verify:

- [ ] Visual: Dark, cinematic aesthetic with gradient backgrounds and glows
- [ ] Animations: Subtle fade-up, scale, carousel transitions work smoothly
- [ ] Responsive: Mobile (375px), Tablet (768px), Desktop (1440px) all work
- [ ] Content: All 7 sections populated with correct data
- [ ] Resume: Download button works, PDF opens correctly
- [ ] Links: Email, LinkedIn, GitHub all functional
- [ ] SEO: Metadata, OpenGraph, JSON-LD present
- [ ] Accessibility: Keyboard navigation, reduced motion, WCAG AA contrast
- [ ] Performance: Lighthouse scores > 90 across all categories
- [ ] Deployment: Live on Vercel with auto-deploy from GitHub

---

## Troubleshooting

**Issue: Animations not working**
- Check: Framer Motion installed (`npm list framer-motion`)
- Check: `"use client"` directive at top of component files
- Check: DevTools console for errors

**Issue: Tailwind classes not applying**
- Check: `tailwind.config.ts` content paths include component directories
- Check: `globals.css` imports Tailwind directives
- Restart: dev server after config changes

**Issue: Resume download 404**
- Check: PDF exists at `public/Aash_Singh_Jat_Resume.pdf`
- Check: Path in `lib/data.ts` is `/Aash_Singh_Jat_Resume.pdf` (leading slash)
- Check: File name matches exactly (case-sensitive)

**Issue: Vercel build fails**
- Check: `npm run build` works locally
- Check: Node version in Vercel settings is 18.x
- Check: All dependencies in package.json
- Check: No TypeScript errors (`npx tsc --noEmit`)

**Issue: Lighthouse performance score low**
- Check: Images optimized (use Next.js `<Image>` component)
- Check: Fonts loaded via `next/font`
- Check: Framer Motion lazy-loaded below fold
- Check: No large JavaScript bundles

---

## Plan Complete

All tasks defined with exact file paths, complete code blocks, and verification steps. Ready for execution using superpowers:subagent-driven-development or superpowers:executing-plans.
