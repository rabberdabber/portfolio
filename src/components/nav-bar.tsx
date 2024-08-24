"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface MainNavProps {
  items?: NavItem[];
}

export default function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.getAttribute("data-section"));
            setActiveSection(entry.target.getAttribute("data-section"));
          }
        });
      },
      { threshold: 0.5 }
    );

    const navItems = navRef.current?.querySelectorAll("a[data-section]");
    navItems?.forEach((item) => observer.observe(item));

    return () => {
      navItems?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  console.log(activeSection);
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6" ref={navRef}>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  data-section={item.title}
                  className={cn(
                    "flex items-center text-sm font-medium text-foreground/60 hover:text-foreground",
                    activeSection === item.title && "text-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
