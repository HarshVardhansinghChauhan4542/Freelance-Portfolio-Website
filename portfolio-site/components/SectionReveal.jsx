"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  useGSAP = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // GSAP ScrollTrigger path (for sections that need more control)
  useEffect(() => {
    if (!useGSAP || typeof window === "undefined") return;

    let gsapInstance;
    let scrollTriggerInstance;

    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsapInstance = gsap;
      scrollTriggerInstance = ScrollTrigger;

      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
          x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    initGSAP();

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.getAll().forEach((t) => t.kill());
      }
    };
  }, [useGSAP, direction, delay]);

  // Framer Motion path (default — simpler, works well for most sections)
  if (useGSAP) {
    return (
      <div ref={ref} className={`opacity-0 ${className}`}>
        {children}
      </div>
    );
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
