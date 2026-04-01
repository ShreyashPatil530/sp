"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Rocket } from "lucide-react";

const experiences = [
  {
    title: "Freelance AI Automation Developer",
    company: "Self-Employed",
    period: "2024 - Present",
    description: "Specializing in n8n, OpenAI, and Telegram bot automations for real-estate and E-commerce clients.",
    icon: <Rocket className="text-primary" size={24} />,
  },
  {
    title: "MERN Stack Web Developer",
    company: "Agency Work",
    period: "2023 - 2024",
    description: "Developed and maintained several full-stack web applications using React, Node.js and MongoDB.",
    icon: <Code className="text-secondary" size={24} />,
  },
  {
    title: "Learning & Project Journey",
    company: "Continuous Growth",
    period: "2022 - 2023",
    description: "Deep-dived into JavaScript, algorithms, and started building portfolio projects in AI and MERN.",
    icon: <GraduationCap className="text-primary" size={24} />,
  },
  {
    title: "Frontend Development Intern",
    company: "Tech Startup",
    period: "2022",
    description: "Worked on UI/UX components using React and Tailwind CSS, improving site performance by 25%.",
    icon: <Briefcase className="text-secondary" size={24} />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-6xl font-black text-gradient uppercase tracking-tight mb-4 text-center">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A timeline of my growth, experience, and the milestones I've achieved.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-6 md:ml-0 md:pl-20 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-12 group"
            >
              <div className="absolute -left-6 top-1 w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center glow-orange group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {exp.icon}
              </div>
              
              <div className="p-8 rounded-3xl glass-dark border border-white/5 hover:border-primary/20 transition-all duration-300 group-hover:-translate-y-1">
                <span className="text-sm font-bold text-primary uppercase tracking-widest block mb-1">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold mb-1 tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-lg font-medium text-muted-foreground/80 mb-4">
                  {exp.company}
                </p>
                <p className="text-muted-foreground/70 leading-relaxed font-medium block">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
