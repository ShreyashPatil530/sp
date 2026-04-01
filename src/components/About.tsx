"use client";

import { motion } from "framer-motion";
import { Award, Zap, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const CodeTerminal = () => {
  const codeLines = [
    "class AIWorkflow {",
    "  constructor() {",
    "    this.engine = 'OpenAI-4o';",
    "    this.framework = 'n8n';",
    "  }",
    "",
    "  async automateBusiness() {",
    "    const task = await getRepetitiveTask();",
    "    console.log('⚡ Optimizing...');",
    "    return await this.engine.run(task);",
    "  }",
    "}",
    "",
    "// Executing automation...",
    "const shreyash = new AIWorkflow();",
    "shreyash.automateBusiness();"
  ];

  const [displayText, setDisplayText] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => {
            const newLines = [...prev];
            if (!newLines[lineIndex]) newLines[lineIndex] = "";
            newLines[lineIndex] += codeLines[lineIndex][charIndex];
            return newLines;
          });
          setCharIndex(charIndex + 1);
        }, 30);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 400);
        return () => clearTimeout(timer);
      }
    } else {
      // Loop after finish
      const timer = setTimeout(() => {
        setDisplayText([]);
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, charIndex]);

  return (
    <div className="relative w-full max-w-lg aspect-[4/3] glass-dark rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">
      {/* Terminal Header */}
      <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-4 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest px-2 py-0.5 rounded bg-white/5">
          automation.js
        </span>
      </div>
      
      {/* Code Area */}
      <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden h-full">
        {displayText.map((line, i) => {
          if (line === undefined) return null;
          
          const isKeyword = line.includes('class') || line.includes('constructor') || line.includes('async') || line.includes('new') || line.includes('await') || line.includes('const') || line.includes('return');
          const isComment = line.includes('//');
          const isString = line.includes("'");

          return (
            <div key={i} className="flex">
              <span className="w-6 text-muted-foreground/30 text-[10px] select-none mr-4">{i + 1}</span>
              <span className={
                isKeyword ? 'text-primary' : 
                isComment ? 'text-green-500/60 italic' : 
                isString  ? 'text-secondary font-semibold' : 
                'text-muted-foreground'
              }>
                {line}
              </span>
            </div>
          );
        })}
        {lineIndex < codeLines.length && (
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-primary inline-block ml-1"
          />
        )}
      </div>

      {/* Background Glow */}
      <div className="absolute -inset-20 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    </div>
  );
};

export default function About() {
  const stats = [
    { icon: <Zap className="text-primary" />, label: "Automated Workflows", value: "20+" },
    { icon: <ShieldCheck className="text-secondary" />, label: "Projects Completed", value: "15+" },
    { icon: <Award className="text-primary" />, label: "Efficiency Boost", value: "70%" },
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Coding Animation with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group mx-auto lg:mx-0 flex justify-center w-full"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500" />
            <CodeTerminal />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
              Hello! I'm <span className="text-primary font-bold">Shreyash Patil</span>, a passionate AI Automation Developer 
              and MERN Stack enthusiast. I specialize in building intelligent systems that reduce human effort and scale business operations.
            </p>
            <p className="text-muted-foreground/80 mb-10 leading-relaxed font-medium">
              With a background in both frontend and backend development, I bridge the gap between complex AI capabilities 
              and user-friendly web interfaces. My goal is to transform manual, repetitive tasks into seamless, automated workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-dark border border-white/5 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-black text-foreground">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
