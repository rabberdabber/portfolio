"use client";
import React from "react";
import Link from "next/link";
import { NavList } from "@/components/nav-list";
import { siteConfig } from "@/config/site";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { useMediaQuery, breakpoints } from "@/hooks/useMediaQuery";
import { MobileNav } from "@/components/ui/mobile-nav";
import { Icons } from "./icons";

export default function MainNav() {
  const isDesktop = useMediaQuery(breakpoints.lg);

  return (
    <>
      {!isDesktop ? (
        <MobileNav />
      ) : (
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-12 w-12 rounded-full object-contain select-none cursor-default focus:ring-0 focus:ring-offset-0" />
            <span className="inline-block font-bold m-0 p-0">
              {siteConfig.name}
            </span>
          </Link>
          <NavigationMenu>
            <div className="rounded-full p-1 backdrop-blur">
              <NavList />
            </div>
          </NavigationMenu>
        </div>
      )}
    </>
  );
}
