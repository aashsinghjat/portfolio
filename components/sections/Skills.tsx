"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-10 tracking-tight text-gray-100"
      >
        Core Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.08 }}
            className={`px-4 py-2 rounded-full text-sm transition-all cursor-default
              ${
                skill.category === "primary"
                  ? "bg-white/15 border-2 border-white/30 text-white font-medium"
                  : "bg-white/10 border border-white/20 text-gray-300"
              }
              hover:bg-white/20 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
            `}
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
