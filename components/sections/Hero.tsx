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
          <span className="text-accent-cyan font-bold">7+ years</span> building scalable, high-performance web applications with Next.js, Vue.js, and React
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-border-accent text-foreground hover:bg-border-primary hover:border-accent-cyan transition-all"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-accent-cyan/50 text-foreground hover:bg-accent-cyan/10 hover:border-accent-cyan transition-all"
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
