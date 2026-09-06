"use client";

export default function AmbientGradient() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Primary blob — amber */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20 animate-ambient-drift"
        style={{
          background:
            "radial-gradient(circle, hsl(38 92% 50% / 0.15), transparent 70%)",
        }}
      />

      {/* Secondary blob — shifted phase */}
      <div
        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-15 animate-ambient-drift"
        style={{
          background:
            "radial-gradient(circle, hsl(38 92% 50% / 0.1), transparent 70%)",
          animationDelay: "-3.5s",
          animationDirection: "reverse",
        }}
      />
    </div>
  );
}
