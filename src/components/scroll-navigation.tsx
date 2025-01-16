"use client";

import { useSection } from "@/context/section-context";
import { ScrollNavigator } from "./ui/scroll-navigator";
import { siteConfig } from "@/config/site";
import { useRef } from "react";

export function ScrollNavigation() {
  const { activeSection } = useSection();
  const sections = useRef(siteConfig.mainNav.map((item) => item.title));

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-8 flex gap-4 z-50">
      {activeSection !== "home" && (
        <ScrollNavigator
          direction="up"
          href={`#${
            sections.current[sections.current.indexOf(activeSection) - 1]
          }`}
        />
      )}
      {activeSection !== "contact" && (
        <ScrollNavigator
          direction="down"
          href={`#${
            sections.current[sections.current.indexOf(activeSection) + 1]
          }`}
        />
      )}
    </div>
  );
}
