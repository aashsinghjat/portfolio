'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentProject = projects[currentIndex];

  const handleDotClick = (i: number) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  };

  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-32 scroll-mt-20">
      {/* Section header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-foreground-tertiary font-medium">
            Featured Work
          </span>
          <div className="h-[1px] w-12 bg-accent-cyan/30 mx-auto mt-4" />
        </motion.div>
      </div>

      <div
        className="max-w-[800px] mx-auto relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="group relative"
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -m-[1px]" />

            <div className="relative bg-[#0d0d0d] border border-border-primary rounded-2xl p-10 md:p-14 backdrop-blur-sm overflow-hidden">
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                {/* Company label with icon */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <div className="w-1 h-1 rounded-full bg-accent-cyan" />
                  <span className="text-xs uppercase tracking-[0.2em] text-accent-cyan font-semibold">
                    {currentProject.company}
                  </span>
                </motion.div>

                {/* Project title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight"
                >
                  {currentProject.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-foreground-secondary leading-relaxed mb-6 text-base md:text-lg"
                >
                  {currentProject.description}
                </motion.p>

                {/* Impact metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-sm text-foreground-tertiary mb-8 pl-4 border-l-2 border-border-accent"
                >
                  {currentProject.impact}
                </motion.div>

                {/* Tech tags */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 mb-10"
                >
                  {currentProject.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 + idx * 0.03 }}
                      className="border border-border-accent px-4 py-2 rounded-full text-xs text-foreground-tertiary hover:border-accent-cyan/40 hover:text-foreground hover:bg-accent-cyan/5 transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Navigation dots */}
                <div className="flex gap-3 justify-center items-center pt-4">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleDotClick(i)}
                      aria-label={`Go to project ${i + 1}`}
                      className="group/dot relative"
                    >
                      <div className={`
                        w-2 h-2 rounded-full transition-all duration-300
                        ${i === currentIndex
                          ? 'bg-accent-cyan scale-125 shadow-[0_0_12px_rgba(0,217,255,0.6)]'
                          : 'bg-border-accent group-hover/dot:bg-accent-cyan/60 group-hover/dot:scale-110'
                        }
                      `} />
                      {/* Hover ring */}
                      {i !== currentIndex && (
                        <div className="absolute inset-0 -m-1 border border-accent-cyan/0 group-hover/dot:border-accent-cyan/20 rounded-full transition-all duration-300" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="mt-6 max-w-xs mx-auto">
          <div className="h-[1px] w-full bg-border-accent relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isPaused ? 0 : 1 }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-accent-cyan origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
