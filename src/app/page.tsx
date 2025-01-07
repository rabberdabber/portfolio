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
import { ScrollNavigator } from "@/components/ui/scroll-navigator";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeSection, setActiveSection } = useSection();
  const sections = useRef(siteConfig.mainNav.map((item) => item.title));

  const scrollToSection = (direction: "up" | "down") => {
    if (!containerRef.current) return;

    const currentIndex = sections.current.indexOf(activeSection);
    const nextIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (nextIndex >= 0 && nextIndex < sections.current.length) {
      const targetSection = document.getElementById(
        sections.current[nextIndex]
      );
      targetSection?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sections.current[nextIndex] as Section);
    }
  };

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

      <div className="fixed right-8 bottom-8 flex flex-col gap-4">
        {activeSection !== "home" && (
          <ScrollNavigator
            direction="up"
            onClick={() => scrollToSection("up")}
          />
        )}
        {activeSection !== "contact" && (
          <ScrollNavigator
            direction="down"
            onClick={() => scrollToSection("down")}
          />
        )}
      </div>
    </div>
  );
}
