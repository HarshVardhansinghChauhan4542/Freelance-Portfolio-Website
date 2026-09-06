"use client";

import SectionReveal from "./SectionReveal";

const categories = [
  {
    label: "Languages",
    items: ["C++", "C", "Python", "Go", "JavaScript", "SQL"],
  },
  {
    label: "AI / ML & GenAI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "XGBoost",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "Transformers",
    ],
  },
  {
    label: "Backend & Systems",
    items: ["FastAPI", "React", "Next.js", "WebSockets", "REST APIs"],
  },
  {
    label: "Data & Databases",
    items: ["PostgreSQL", "MongoDB", "ChromaDB", "FAISS", "Pandas", "NumPy"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "GCP"],
  },
];

function MarqueeRow({ items, speed = "30s", reverse = false }) {
  // Duplicate items multiple times for seamless loop on ultra-wide screens
  const track = Array(8).fill(items).flat();

  return (
    <div className="relative overflow-hidden py-2 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div
        className="marquee-track gap-3 hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${speed} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white font-medium whitespace-nowrap transition-colors hover:border-primary/40 hover:text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="relative py-[120px] md:py-[200px]">
      <div className="mx-auto max-w-container px-6 lg:px-8 mb-12">
        <SectionReveal>
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Tech Stack
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-foreground">
            MY STACK
          </h2>
        </SectionReveal>
      </div>

      {/* Marquee rows — one per category */}
      <div className="space-y-6">
        {categories.map((cat, i) => (
          <SectionReveal key={cat.label} delay={i * 0.08}>
            <div className="mx-auto max-w-container px-6 lg:px-8 mb-2">
              <span className="text-xs text-muted-foreground tracking-wider uppercase">
                {cat.label}
              </span>
            </div>
            <MarqueeRow
              items={cat.items}
              speed={`${25 + i * 5}s`}
              reverse={i % 2 === 1}
            />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
