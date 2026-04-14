"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/lib/data";

export default function WorkExperience() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight text-gray-100"
      >
        Work Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20" />

        {/* Experience Cards */}
        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block flex-shrink-0 w-4 h-4 rounded-full bg-white border-4 border-black" />

              {/* Card */}
              <Card className="flex-1 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{exp.role}</p>
                  <p className="text-gray-400 text-sm">{exp.achievement}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
