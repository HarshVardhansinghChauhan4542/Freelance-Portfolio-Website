"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  useGSAP = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  // GSAP ScrollTrigger path (for sections that need more control)
  useEffect(() => {
    if (!useGSAP || typeof window === "undefined" || prefersReducedMotion) return;

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
          y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
          x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.6,
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
  }, [useGSAP, direction, delay, prefersReducedMotion]);

  // Reduced motion — render immediately with no animation
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // GSAP path
  if (useGSAP) {
    return (
      <div ref={ref} className={`opacity-0 ${className}`}>
        {children}
      </div>
    );
  }

  // Framer Motion path (default)
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
      x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
        staggerChildren: 0.08,
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
