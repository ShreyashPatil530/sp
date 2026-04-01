import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyash Patil | AI Automation & MERN Stack Developer",
  description: "I build AI-powered workflows and scalable web applications that automate real business processes.",
  keywords: ["AI Automation", "MERN Stack", "Workflow Developer", "n8n", "Telegram Bots", "Next.js"],
  authors: [{ name: "Shreyash Patil" }],
  openGraph: {
    title: "Shreyash Patil | AI Automation & MERN Stack Developer",
    description: "I build AI-powered workflows and scalable web applications that automate real business processes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
