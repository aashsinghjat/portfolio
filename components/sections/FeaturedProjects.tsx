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
