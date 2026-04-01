"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, MapPin, Mail, Phone, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Mimic API call
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed font-medium">
              Ready to automate your business? Let's discuss your project and see how 
              I can help you build something amazing.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass-dark border border-white/10 flex items-center justify-center glow-orange group-hover:scale-110 transition-transform">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-muted-foreground font-bold text-sm uppercase tracking-widest block mb-1">Email Me</h4>
                  <p className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                    shreyashpatil530@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass-dark border border-white/10 flex items-center justify-center glow-orange group-hover:scale-110 transition-transform">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-muted-foreground font-bold text-sm uppercase tracking-widest block mb-1">Location</h4>
                  <p className="text-xl font-bold text-foreground">Pune, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-[2.5rem] glass-dark border border-white/5 relative"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest pl-2">Full Name</label>
                <input
                  {...register("name")}
                  placeholder="John Doe"
                  className={`w-full px-6 py-4 rounded-2xl bg-white/5 border ${errors.name ? "border-red-500/50" : "border-white/10"} focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-white/10 text-foreground font-medium`}
                />
                {errors.name && <p className="text-xs text-red-400 font-bold pl-2">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest pl-2">Email Address</label>
                <input
                  {...register("email")}
                  placeholder="john@example.com"
                  className={`w-full px-6 py-4 rounded-2xl bg-white/5 border ${errors.email ? "border-red-500/50" : "border-white/10"} focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-white/10 text-foreground font-medium`}
                />
                {errors.email && <p className="text-xs text-red-400 font-bold pl-2">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest pl-2">Your Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="I'm interested in..."
                  className={`w-full px-6 py-4 rounded-2xl bg-white/5 border ${errors.message ? "border-red-500/50" : "border-white/10"} focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-white/10 text-foreground font-medium resize-none`}
                />
                {errors.message && <p className="text-xs text-red-400 font-bold pl-2">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-primary text-background font-black text-lg flex items-center justify-center space-x-2 glow-orange hover:scale-105 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:scale-100"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin text-background" size={24} />
                ) : isSuccess ? (
                  <span>Sent Successfully!</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
