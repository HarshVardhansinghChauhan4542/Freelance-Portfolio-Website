"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagneticButton({ children, href, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Glow opacity based on distance from center
  const glowOpacity = useTransform(
    [springX, springY],
    ([latestX, latestY]) => {
      const dist = Math.sqrt(latestX * latestX + latestY * latestY);
      return Math.min(dist / 50, 1) * 0.6;
    }
  );

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide rounded-xl bg-primary text-primary-foreground overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] ${className}`}
      whileTap={{ scale: 0.97 }}
    >
      {/* Animated glow */}
      <motion.span
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          opacity: glowOpacity,
          background:
            "radial-gradient(circle at center, hsl(var(--primary) / 0.4), transparent 70%)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </Tag>
  );
}
