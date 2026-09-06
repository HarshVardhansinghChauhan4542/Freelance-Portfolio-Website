"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const achievements = [
  "Goldman Sachs Quant Hackathon 2026 — National Semifinalist",
  "Codeforces Specialist (1562 rating)",
  "LeetCode (1697 rating)",
  "Market Budget Optimization — General Championship — Gold",
  "Synthetic-Bull (Opensoft) — General Championship — Bronze",
  "Qualified NDA Written Examination (UPSC) — twice",
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-[120px] md:py-[200px]">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionReveal>
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Achievements
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-foreground mb-12">
            COMPETITIONS & ACHIEVEMENTS
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="flex flex-wrap gap-3">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-sm text-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
              >
                {/* Trophy/star icon */}
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {item}
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
