"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-gray-100"
      >
        Let&apos;s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 mb-8 text-base md:text-lg"
      >
        Open to senior frontend roles in high-impact product companies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Button
          size="lg"
          asChild
          className="rounded-full px-8 py-3 bg-white text-black font-medium shadow-xl hover:bg-gray-200 hover:scale-105 transition"
        >
          <a href={`mailto:${personalInfo.email}`}>Email Me</a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          asChild
          className="rounded-full px-8 py-3 bg-white/10 text-white border border-white/30 backdrop-blur hover:bg-white/20 hover:scale-105 transition"
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
          asChild
          className="rounded-full px-8 py-3 bg-white/10 text-white border border-white/30 backdrop-blur hover:bg-white/20 hover:scale-105 transition"
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
