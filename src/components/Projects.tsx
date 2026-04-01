"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const projects = [
  {
    title: "College Management System",
    description: "Full-stack MERN platform with a secure Admin Panel, dynamic Student Gallery, and automated Teacher Data management. Built for scale and performance.",
    tech: ["MERN Stack", "TypeScript", "Tailwind CSS", "Context API"],
    image: "/college_management_mockup_1775031112550.png",
    link: "https://college-fe.onrender.com/",
    github: "https://github.com/ShreyashPatil530/college-fe",
  },
  {
    title: "AI Chat Explorer (GPT Clone)",
    description: "An advanced AI-powered chat application integrated with OpenAI’s LLMs. Features real-time responses, persistent history, and professional syntax highlighting.",
    tech: ["React.js", "Node.js", "OpenAI API", "MongoDB"],
    image: "/ai_chatbot_mockup_1775031435129.png",
    link: "https://ai-chart-bot-frontend.onrender.com/",
    github: "https://github.com/ShreyashPatil530/AI-Chart-BOT-Frontend",
  },
  {
    title: "Kanban Task Manager",
    description: "Real-time task management platform featuring dynamic drag-and-drop Kanban boards, live collaboration via WebSockets, and persistent project tracking.",
    tech: ["MERN Stack", "WebSockets", "DND-Kit", "Tailwind CSS"],
    image: "/kanban_task_mockup_1775031653092.png",
    link: "https://frontend-assignmet.onrender.com/",
    github: "https://github.com/ShreyashPatil530/Frontend-Assignmet",
  },
  {
    title: "AI Cricket Pose Analysis",
    description: "Biomechanical feedback platform using AI-powered pose estimation to analyze batting and bowling techniques. Features skeletal video overlays and real-time reports.",
    tech: ["React", "TypeScript", "Tailwind v4", "MediaPipe API"],
    image: "/cricket_pose_mockup_1775031824789.png",
    link: "https://cricket-pose-estimation-frontend.onrender.com/",
    github: "https://github.com/ShreyashPatil530/Cricket-Pose-Estimation-Frontend",
  },
  {
    title: "AI Data Explorer & Analyst",
    description: "Production-ready MERN platform for CSV data analysis. Integrates Groq AI (LLaMA 3.1) to generate instant analytical reports and deep statistical insights from raw datasets.",
    tech: ["MERN Stack", "Groq AI", "Recharts", "Tailwind Typography"],
    image: "/data_explorer_mockup_1775031951925.png",
    link: "https://dashboard.render.com/static/srv-d6hcaljuibrs739svhu0", // Placeholder if specific public link is missing
    github: "https://github.com/ShreyashPatil530/MEGA-PROJECT",
  },
  {
    title: "Travel AI Pro",
    description: "Premium travel platform built on Next.js 15. Features a glassmorphic UI, dynamic slug-based blog system, and a comprehensive admin dashboard for content creators.",
    tech: ["Next.js 15", "Framer Motion", "Tailwind CSS", "Markdown"],
    image: "/travel_ai_mockup_1775032052829.png",
    link: "https://travel-ai-pro.onrender.com",
    github: "https://github.com/ShreyashPatil530/Travel-AI-Pro",
  },
  {
    title: "TaskPlanet Social",
    description: "Production-level social media platform built with MERN. Features secure JWT authentication, a dynamic media feed, and real-time interaction for likes and comments.",
    tech: ["MERN Stack", "Material UI", "JWT Auth", "Context API"],
    image: "/taskplanet_social_mockup_1775032146234.png",
    link: "https://social-post-web-1.onrender.com/",
    github: "https://github.com/ShreyashPatil530/social-post-web",
  },
  {
    title: "Instagram Auto-Workflow",
    description: "Automated content publishing system with a daily 9 AM trigger. Features a secure Telegram approval bot for reviewing/rejecting posts in real-time.",
    tech: ["Node.js", "Telegram API", "Instagram API", "Cron Jobs"],
    image: "/instagram_automation_mockup_1775032398447.png",
    link: "#",
    github: "#",
  },
  {
    title: "Facebook Business Automator",
    description: "Multi-page Facebook posting engine featuring automated scheduling and human-in-the-loop approval logic via Telegram interface.",
    tech: ["Node.js", "Facebook Meta API", "Telegram API", "Express"],
    image: "/facebook_automation_mockup_1775032417818.png",
    link: "#",
    github: "#",
  },
  {
    title: "LinkedIn Growth Engine",
    description: "Professional B2B content automation system. High-speed LinkedIn API integration with secure approval buttons for brand-consistent posting.",
    tech: ["Node.js", "LinkedIn API", "Telegram Bot", "JWT"],
    image: "/linkedin_automation_mockup_1775032440415.png",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              A collection of AI-driven tools and full-stack applications built to solve modern business challenges.
            </p>
          </div>
          <Link href="#" className="group inline-flex items-center space-x-2 text-primary font-bold hover:scale-105 transition-all text-lg">
            <span>View All Projects</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image Preview */}
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center space-x-4">
                  <Link href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
                    <GithubIcon />
                  </Link>
                  <Link href={project.link} className="p-3 bg-primary rounded-full text-background hover:scale-110 transition-transform">
                    <ExternalLink size={24} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-muted-foreground group-hover:text-primary transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>
                <Link href={project.link} className="inline-flex items-center space-x-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  <span>Learn More</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
