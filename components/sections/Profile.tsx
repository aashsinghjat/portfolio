'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo, about } from '@/lib/data';

export default function Profile() {
  return (
    <section id="profile" className="max-w-[1200px] mx-auto px-6 py-24 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Photo - Animates from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-[400px] mx-auto md:mx-0"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-foreground/20">
            <Image
              src="/profile-photo.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          {/* Decorative border accent */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-foreground/10 rounded-2xl -z-10 pointer-events-none" />
        </motion.div>

        {/* Content - Animates from right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-semibold text-foreground mb-2"
            >
              {personalInfo.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-accent-cyan"
            >
              {personalInfo.title}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-foreground-secondary leading-relaxed"
          >
            {about.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <div className="flex items-center gap-2 text-sm text-foreground-tertiary">
              <span>📍</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground-tertiary">
              <span>💼</span>
              <span>{personalInfo.tagline.split(' ')[0]} years experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
