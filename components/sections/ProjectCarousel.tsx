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

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

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
        {/* Left Arrow Button */}
        <button
          onClick={goToPrevious}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all flex items-center justify-center z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={goToNext}
          aria-label="Next project"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all flex items-center justify-center z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

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
            <div className="text-xs uppercase tracking-wider text-accent-cyan mb-3 font-bold">
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
                  className="border border-border-accent px-3 py-1 rounded text-sm text-foreground-secondary hover:border-accent-cyan/50 hover:text-foreground transition-colors"
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
                    i === currentIndex ? 'bg-accent-cyan scale-125 shadow-[0_0_10px_rgba(0,217,255,0.5)]' : 'bg-border-accent hover:bg-accent-cyan/50'
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
