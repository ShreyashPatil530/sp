"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass-dark py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo - Left */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center space-x-1.5 group">
            <span className="text-2xl font-extrabold tracking-tighter text-white group-hover:text-primary transition-colors duration-300">
              SHREYASH
            </span>
            <div className="w-2 h-2 rounded-full bg-primary glow-orange shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
          </Link>
        </div>

        {/* Desktop Nav - Middle */}
        <div className="hidden md:flex justify-center">
          <div className="glass border border-white/5 px-6 py-2 rounded-full flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section (Button + Mobile Menu) */}
        <div className="flex justify-end items-center space-x-4">
          <button className="hidden md:block px-6 py-2 rounded-full bg-primary text-background font-bold text-sm glow-orange hover:scale-105 transition-transform active:scale-95">
            Hire Me
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full py-3 rounded-xl bg-primary text-background font-bold glow-orange">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
