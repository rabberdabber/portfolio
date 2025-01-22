"use client";

import Link from "next/link";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { NavList } from "@/components/nav-list";
import { Icons } from "@/components/icons";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  return (
    <Drawer direction="left">
      <DrawerTrigger
        className={cn(
          "ml-auto inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        )}
      >
        <Icons.menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </DrawerTrigger>
      <DrawerContent direction="left" className="w-[280px] h-full">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center px-6 py-4 border-b border-border/50">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                className="h-8 w-8 rounded-full object-contain select-none cursor-default focus:ring-0 focus:ring-offset-0 -mr-2"
                width={32}
                height={32}
                draggable={false}
              />
              <span className="inline-block font-bold">{siteConfig.name}</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col justify-around px-0">
            <NavigationMenu className="w-full backdrop-blur py-4 px-0">
              <NavList className="flex-col w-full h-full space-y-6" />
            </NavigationMenu>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
