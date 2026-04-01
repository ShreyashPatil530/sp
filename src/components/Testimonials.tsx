"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO at TechVision",
    content: "Shreyash completely transformed our customer support with an AI bot. Our response times dropped by 90%!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Miller",
    role: "Founder at Bloom",
    content: "The automation workflows built by Shreyash have saved us hours of manual data entry every single day.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "CTO at InnovateX",
    content: "Exceptional MERN stack developer. The dashboard he built for us is fast, intuitive, and highly scalable.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Client <span className="text-gradient">Feedback</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Hear from the people and companies I've worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-3xl glass-dark border border-white/5 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote size={80} />
              </div>

              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8 italic relative z-10 font-medium whitespace-pre-wrap">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
