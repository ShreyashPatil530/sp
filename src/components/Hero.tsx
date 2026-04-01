"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Bot, Code } from "lucide-react";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";

const roles = [
  "AI Automation Developer",
  "MERN Stack Developer",
  "Workflow Expert",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden"
    >
      {/* 🌌 Dynamic "Cyber Nebula" Background Animation */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* 🕸️ Subtle Decorative Grid (at the back) */}
      <div className="absolute inset-0 z-[-1] opacity-30 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-6 pointer-events-auto"
        >
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border border-white/10 text-primary text-xs font-semibold uppercase tracking-widest leading-none">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Available for new projects</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tight pointer-events-auto"
        >
          Shreyash <span className="text-gradient">Patil</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 md:h-16 mb-8 text-2xl md:text-4xl font-bold bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center max-w-fit mx-auto px-8 pointer-events-auto"
        >
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            className="text-gradient"
          >
            {roles[roleIndex]}
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium pointer-events-auto"
        >
          I build AI-powered workflows and scalable web applications that 
          <span className="text-primary font-bold"> automate</span> real business processes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 pointer-events-auto"
        >
          <Link
            href="#projects"
            className="group px-8 py-4 w-full sm:w-auto rounded-2xl bg-secondary text-white font-bold inline-flex items-center justify-center space-x-2 glow-purple hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <Code size={20} />
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 w-full sm:w-auto rounded-2xl glass-dark font-bold text-foreground inline-flex items-center justify-center space-x-2 border border-white/10 hover:bg-white/10 transition-all duration-300 active:scale-95"
          >
            <Bot size={20} className="text-primary" />
            <span>Contact Me</span>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground flex justify-center p-2">
          <div className="w-1 h-2 bg-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
