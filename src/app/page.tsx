"use client";
import { useRouter } from "next/navigation";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Hero from "@/app/hero";
import Contact from "@/app/contact";
import Experience from "@/app/experience";
import Projects from "@/app/projects";
import Skills from "@/app/skills";

type Section = "home" | "projects" | "contact" | "experience" | "skills";


export default function Home() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const sections: Section[] = ['home', 'projects', 'contact', 'experience', 'skills'];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.round(scrollPosition / windowHeight);
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        router.push(`#${sections[newActiveSection]}`, { scroll: false });
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeSection, router, sections]);

  return (
    <div ref={containerRef} className="snap-y snap-mandatory">
      <section id="home" className="h-dvh snap-start">
        <Hero />
      </section>
      <section id="projects" className="h-dvh snap-start">
        <Projects />
      </section>
      <section id="contact" className="h-dvh snap-start">
        <Contact />
      </section>
      <section id="experience" className="h-dvh snap-start">
        <Experience />
      </section>
      <section id="skills" className="h-dvh snap-start">
        <Skills />
      </section>
    </div>
    );
}
