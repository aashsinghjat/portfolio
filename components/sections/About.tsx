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
