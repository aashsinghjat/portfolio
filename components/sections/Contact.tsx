'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="max-w-[700px] mx-auto px-6 py-24 text-center scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-accent-cyan mb-4">
        Let&apos;s Connect
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
