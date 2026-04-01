import { MessageCircle, Heart } from "lucide-react";
import Link from "next/link";

// Custom SVG Icons for Brands
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GithubIcon />, href: "https://github.com/ShreyashPatil530" },
    { icon: <LinkedinIcon />, href: "https://linkedin.com/in/ShreyashPatil530" },
    { icon: <MessageCircle size={20} />, href: "https://t.me/ShreyashPatil530" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Logo and Copyright */}
        <div className="text-center md:text-left">
          <Link href="/" className="flex items-center space-x-1.5 group mb-4 inline-flex">
            <span className="text-2xl font-extrabold tracking-tighter text-white group-hover:text-primary transition-colors duration-300">
              SHREYASH
            </span>
            <div className="w-2 h-2 rounded-full bg-primary glow-orange shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
          </Link>
          <p className="text-muted-foreground/60 text-sm font-medium">
            &copy; {currentYear} Shreyash Patil. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          {socialLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="p-3 glass-dark border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all rounded-2xl hover:scale-110 active:scale-95"
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {/* Made with */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground/60 font-bold group">
          <span>Made with</span>
          <Heart size={16} className="text-secondary group-hover:scale-125 transition-transform animate-pulse" />
          <span>using Next.js</span>
        </div>
      </div>
    </footer>
  );
}
