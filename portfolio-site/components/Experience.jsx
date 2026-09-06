"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const experiences = [
  {
    company: "Past Perfect",
    role: "Co-Founder",
    dates: "Sep 2025 – May 2026",
    description:
      "Full-stack AI-powered campus marketplace with predictive ML pricing, 2,000+ active users.",
  },
  {
    company: "Climitra",
    role: "Founder's Office Engineer Intern",
    dates: "Sep 2025 – Nov 2025",
    description:
      "Geospatial ML pipelines (Random Forest, Sentinel-2 imagery) for a pan-India biochar procurement network.",
  },
  {
    company: "University of Oulu, Finland",
    role: "Research Intern",
    dates: "May 2026 – Jul 2026",
    description:
      "Fine-tuned DistilBERT/BioBERT for health-article classification, 92.61% accuracy.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-[120px] md:py-[200px]">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionReveal>
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-foreground mb-16">
            MY EXPERIENCE
          </h2>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <motion.div
                  className="group relative pl-12 md:pl-20"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] md:left-[27px] top-1 w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300" />

                  {/* Content */}
                  <div className="pb-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {exp.role}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.dates}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-2xl group-hover:text-foreground/80 transition-colors duration-300">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
