"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight text-gray-100"
      >
        What People Say
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_20px_60px_rgba(255,255,255,0.05)]">
          <CardContent className="p-8 md:p-12 text-center">
            {/* Quote Marks */}
            <div className="text-6xl text-white/20 mb-4">&ldquo;</div>

            {/* Quote */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {testimonials[0].quote}
            </p>

            {/* Author */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-white font-semibold text-lg">
                {testimonials[0].author}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonials[0].role} - {testimonials[0].company}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
