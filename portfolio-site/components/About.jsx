"use client";

import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="relative py-[120px] md:py-[200px]">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionReveal>
          <h2 className="font-display text-[clamp(1.5rem,4vw,3rem)] leading-tight text-foreground mb-12 max-w-4xl">
            &ldquo;I believe in building AI systems that are{" "}
            <span className="text-gradient-primary">mathematically rigorous</span>{" "}
            and genuinely usable.&rdquo;
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <SectionReveal delay={0.15}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I&apos;m Harshvardhan, a dual-degree (B.Tech + M.Tech) Aerospace
              Engineering student with a minor in Artificial Intelligence at IIT
              Kharagpur. My background sits at an unusual intersection — the same
              rigor that goes into modeling flight dynamics and control systems, I
              bring to building machine learning pipelines and full-stack AI
              products.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.25}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Beyond coursework, I have over 2 years of experience as a freelance Web Developer, delivering production-ready platforms for over 10 clients. I&apos;ve also co-founded an AI-powered marketplace with 2,000+ active users, interned on geospatial ML pipelines, and competed in national-level quant hackathons. I&apos;m a Specialist on Codeforces and solve competitive programming problems for fun — I like proving my systems work, not just building them.
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
