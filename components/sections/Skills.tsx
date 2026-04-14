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
