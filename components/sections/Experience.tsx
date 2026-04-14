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
