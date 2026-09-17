"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function AmbientGradient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates to range [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x * 60); // Max 60px movement
      mouseY.set(y * 60);
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Primary blob — amber */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20 animate-ambient-drift"
        style={{
          background:
            "radial-gradient(circle, hsl(38 92% 50% / 0.15), transparent 70%)",
          x: springX,
          y: springY,
        }}
      />

      {/* Secondary blob — shifted phase */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-15 animate-ambient-drift"
        style={{
          background:
            "radial-gradient(circle, hsl(38 92% 50% / 0.1), transparent 70%)",
          animationDelay: "-3.5s",
          animationDirection: "reverse",
          x: springX,
          y: springY,
        }}
      />
    </div>
  );
}
