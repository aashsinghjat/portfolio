'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="max-w-[800px] mx-auto px-6 py-24">
      <h2 className="text-sm uppercase tracking-wider text-accent-cyan/70 text-center mb-16 font-semibold">
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
          <div className="text-sm text-accent-cyan/70">
            {testimonials[0].role} • {testimonials[0].company}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
