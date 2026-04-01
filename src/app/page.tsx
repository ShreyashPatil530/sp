import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
