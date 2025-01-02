"use client";
import React from "react";
import Link from "next/link";
import { NavList } from "@/components/nav-list";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

export default function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <NavigationMenu className="fixed top-2 right-[200px]">
        <div className="rounded-full border-2 border-border/40 p-1 backdrop-blur">
          <NavList />
        </div>
      </NavigationMenu>
    </div>
  );
}
