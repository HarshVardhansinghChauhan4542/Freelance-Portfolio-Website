"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import MagneticButton from "./MagneticButton";
import ContactModal from "./ContactModal";

const stats = [
  { value: 10, suffix: "+", label: "Freelance Projects Handled" },
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 2000, suffix: "+", label: "Active Users on a Shipped Product" },
];

// Split text into words, each wrapped for mask-reveal
function MaskRevealLine({ text, startDelay = 0, isGradient = false }) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className="inline-flex flex-wrap">
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className={`inline-block ${isGradient ? "text-gradient-primary" : ""}`}
            initial={prefersReducedMotion ? false : { y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.6,
              delay: prefersReducedMotion ? 0 : startDelay + i * 0.06,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Choreographed sequence delays
  const heroDelay = 0.2; // initial delay for layout settle
  const headlineDelay = heroDelay;
  const line2Delay = headlineDelay + 0.3;
  const subDelay = line2Delay + 0.3;
  const ctaDelay = subDelay + 0.2;
  const statsDelay = ctaDelay + 0.2;

  const fadeUp = (delay) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 md:pt-0"
    >
      <div className="mx-auto max-w-container px-6 lg:px-8 w-full py-20 md:py-32">
        {/* Eyebrow badge */}
        <motion.div {...fadeUp(heroDelay - 0.1)}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium tracking-wide">
              Open to New Freelance Projects
            </span>
          </div>
        </motion.div>

        {/* Headline — mask reveal */}
        <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-tight text-foreground mb-6">
          <MaskRevealLine text="AI ENGINEER &" startDelay={headlineDelay} />
          <br />
          <MaskRevealLine
            text="WEB DEVELOPER"
            startDelay={line2Delay}
            isGradient
          />
        </h1>

        {/* Subheadline */}
        <motion.p
          className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
          {...fadeUp(subDelay)}
        >
          Dual-degree Aerospace Engineering student with an AI minor at IIT
          Kharagpur — I am a freelance Web Developer and AI Engineer with over
          2 years of experience. I build full-stack ML systems, robust web
          applications, and I&apos;ve shipped products real people use.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4 mb-16 md:mb-20"
          {...fadeUp(ctaDelay)}
        >
          <div onClick={() => setContactModalOpen(true)}>
            <MagneticButton className="cursor-pointer">
              Let&apos;s Talk →
            </MagneticButton>
          </div>

          <a
            href="https://drive.google.com/file/d/1OirYZkcavPQMjWoPlm4Fr3yOhU3Ibk62/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-4 text-sm font-medium text-foreground border border-border rounded-xl hover:border-primary/50 transition-colors"
          >
            View Resume
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
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-3 gap-8 xs:gap-4"
          {...fadeUp(statsDelay)}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center xs:text-left">
              <div className="text-4xl md:text-5xl font-display text-foreground mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2000 + i * 300}
                />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </section>
  );
}
