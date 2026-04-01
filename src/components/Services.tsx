"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Globe, MessageSquare, Database, Terminal } from "lucide-react";

const services = [
  {
    title: "AI Automation Systems",
    description: "Design and implement intelligent workflows that automate complex business processes and data entry tasks.",
    icon: <Bot className="text-primary" size={32} />,
    color: "from-primary/20",
  },
  {
    title: "Telegram Bot Development",
    description: "Create advanced, secure, and highly functional Telegram bots with integrated payment and AI features.",
    icon: <MessageSquare className="text-secondary" size={32} />,
    color: "from-secondary/20",
  },
  {
    title: "API Integration",
    description: "Connect disparate software systems using custom API solutions for seamless data flow and synchronization.",
    icon: <Zap className="text-primary" size={32} />,
    color: "from-primary/20",
  },
  {
    title: "CRM Automation",
    description: "Optimize your sales funnel and lead generation by automating CRM activities and customer outreach.",
    icon: <Database className="text-secondary" size={32} />,
    color: "from-secondary/20",
  },
  {
    title: "Full Stack Web Apps",
    description: "Develop scalable and high-performance web applications using the modern MERN stack and Next.js.",
    icon: <Globe className="text-primary" size={32} />,
    color: "from-primary/20",
  },
  {
    title: "Workflow Strategy",
    description: "Analyze your current operations and provide a strategic roadmap for digital transformation and automation.",
    icon: <Terminal className="text-secondary" size={32} />,
    color: "from-secondary/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-gradient uppercase tracking-tight mb-4">
            Services I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Helping businesses scale with intelligent automation and modern software architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group p-10 rounded-[2.5rem] glass-dark border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${service.color} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 glow-orange group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground/80 leading-relaxed text-sm font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
