"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function ParticlesBackground() {
  // 🖱️ Mouse Position Smooth Management
  const mouseX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 100;
      const y = (clientY / window.innerHeight - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* 🔮 Moving Nebula Blobs */}
      <motion.div
        style={{ translateX: mouseX, translateY: mouseY }}
        className="absolute inset-0 z-0"
      >
        {/* Orange Aura Blob */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.3, 0.9, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] bg-primary/30 rounded-full blur-[140px] mix-blend-screen"
        />

        {/* Amber Aura Blob */}
        <motion.div
          animate={{
            x: [0, -80, 80, 0],
            y: [0, 80, -80, 0],
            scale: [1, 0.9, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[10%] w-[70vw] h-[70vw] bg-secondary/20 rounded-full blur-[160px] mix-blend-screen"
        />
      </motion.div>

      {/* 🌌 High-End Cinema Grain Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://res.cloudinary.com/dzfuzun9y/image/upload/v1714544835/noise_q9uovh.png')] mix-blend-overlay" />
    </div>
  );
}
