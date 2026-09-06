"use client";

import { motion } from "framer-motion";

// Project-specific gradient palettes for placeholder thumbnails
const gradients = [
  "linear-gradient(135deg, hsl(38 92% 50% / 0.3), hsl(280 80% 40% / 0.2))",
  "linear-gradient(135deg, hsl(200 80% 40% / 0.3), hsl(38 92% 50% / 0.2))",
  "linear-gradient(135deg, hsl(38 92% 50% / 0.25), hsl(140 60% 35% / 0.2))",
  "linear-gradient(135deg, hsl(320 70% 40% / 0.2), hsl(38 92% 50% / 0.3))",
];

export default function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/30"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Thumbnail placeholder or Image */}
      <div
        className="relative h-48 md:h-56 overflow-hidden bg-cover bg-center"
        style={{
          background: project.image ? `url(${project.image}) no-repeat center/cover` : gradients[index % gradients.length],
        }}
      >
        {!project.image && (
          <>
            {/* Grid pattern overlay for placeholders */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--foreground) / 0.05) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />

            {/* Project number */}
            <span className="absolute top-4 left-4 font-display text-6xl text-foreground/10 leading-none">
              _{num}
            </span>
          </>
        )}

        {/* Hover overlay with tech tags */}
        <motion.div
          className="absolute inset-0 bg-background/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full border border-primary/40 text-primary bg-primary/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Card content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground font-mono mt-1">
            _{num}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] rounded bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Link arrow */}
        {project.link && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              View Project
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
