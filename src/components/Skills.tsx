"use client";

import { motion } from "framer-motion";
import { Code2, Server, Bot, Layout, Database, Cpu, Cog, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-primary" size={24} />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    color: "from-primary/20",
  },
  {
    title: "Backend Development",
    icon: <Database className="text-secondary" size={24} />,
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"],
    color: "from-secondary/20",
  },
  {
    title: "AI & Automation",
    icon: <Cpu className="text-primary" size={24} />,
    skills: ["OpenAI API", "n8n", "Zapier", "Telegram Bots", "Langflow", "CrewAI"],
    color: "from-primary/20",
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-6xl font-black text-gradient uppercase tracking-tight mb-4">
            My Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Mastering the art of modern web development and intelligent automation.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className={`relative p-8 rounded-3xl glass-dark border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden group`}
            >
              <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${category.color} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center glow-orange group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center space-x-3 group/skill">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/skill:bg-primary transition-colors" />
                    <span className="text-muted-foreground/80 group-hover/skill:text-foreground transition-colors font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Bottom Decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
