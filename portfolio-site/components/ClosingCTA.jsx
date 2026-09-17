"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import ContactModal from "./ContactModal";

export default function ClosingCTA() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="relative py-[120px] md:py-[200px]">
      <div className="mx-auto max-w-container px-6 lg:px-8 text-center">
        <SectionReveal>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-foreground mb-8">
              HAVE A PROJECT
              <br />
              <span className="text-gradient-primary">WORTH BUILDING?</span>
            </h2>
          </motion.div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            I&apos;m always interested in challenging Web Development and ML/AI problems. Let&apos;s connect and build something impactful.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.25}>
          <div onClick={() => setContactModalOpen(true)} className="inline-block cursor-pointer">
            <MagneticButton>
              Get in touch
            </MagneticButton>
          </div>
        </SectionReveal>
      </div>

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </section>
  );
}
