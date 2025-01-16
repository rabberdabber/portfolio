"use client";

import React, { useEffect, useRef } from "react";
import Hero from "@/app/(sections)/hero";
import Contact from "@/app/(sections)/contact";
import Experience from "@/app/(sections)/experience";
import Projects from "@/app/(sections)/projects";
import Skills from "@/app/(sections)/skills";
import About from "@/app/(sections)/about";
import Certifications from "@/app/(sections)/certifications";
import { siteConfig } from "@/config/site";
import { useSection } from "@/context/section-context";
import { Section } from "@/types/nav";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeSection, setActiveSection } = useSection();
  const sections = useRef(siteConfig.mainNav.map((item) => item.title));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.round(scrollPosition / windowHeight);

      if (sections.current[newActiveSection] !== activeSection) {
        setActiveSection(sections.current[newActiveSection] as Section);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeSection, setActiveSection]);

  const titleToComponent: Record<
    (typeof siteConfig.mainNav)[number]["title"],
    React.ReactNode
  > = {
    home: <Hero />,
    about: <About />,
    experience: <Experience />,
    projects: <Projects />,
    skills: <Skills />,
    certifications: <Certifications />,
    contact: <Contact />,
  };

  return (
    <div ref={containerRef} className="snap-y snap-mandatory relative">
      {siteConfig.mainNav.map((item, index) => (
        <AnimatedSection key={index} id={item.title}>
          {titleToComponent[item.title]}
        </AnimatedSection>
      ))}
    </div>
  );
}
