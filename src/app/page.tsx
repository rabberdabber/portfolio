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
import { siteConfig } from "@/config/site";

export default function Home() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const sections = useRef(siteConfig.mainNav.map((item) => item.href));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.round(scrollPosition / windowHeight);

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        router.push(sections.current[newActiveSection], { scroll: false });
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeSection, router]);

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
    <div ref={containerRef} className="snap-y snap-mandatory">
      {siteConfig.mainNav.map((item, index) => (
        <section key={index} id={item.title} className="h-screen">
          {titleToComponent[item.title]}
        </section>
      ))}
    </div>
  );
}
