"use client";
import { useRouter } from "next/navigation";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Hero from "@/app/(sections)/hero";
import Contact from "@/app/(sections)/contact";
import Experience from "@/app/(sections)/experience";
import Projects from "@/app/(sections)/projects";
import Skills from "@/app/(sections)/skills";
import About from "@/app/(sections)/about";
import Certifications from "@/app/(sections)/certifications";

type Section =
  | "home"
  | "projects"
  | "contact"
  | "experience"
  | "skills"
  | "about";

export default function Home() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const sections: Section[] = [
    "home",
    "projects",
    "contact",
    "experience",
    "skills",
    "about",
  ];

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

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeSection, router, sections]);

  return (
    <div ref={containerRef} className="snap-y snap-mandatory">
      <section id="home" className="h-[calc(100dvh-5rem)] snap-start">
        <Hero />
      </section>
      <section id="about" className="h-[calc(100dvh-5rem)] snap-start">
        <About />
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
      <section id="certifications" className="h-dvh snap-start">
        <Certifications />
      </section>
      <section id="skills" className="h-dvh snap-start">
        <Skills />
      </section>
    </div>
  );
}
