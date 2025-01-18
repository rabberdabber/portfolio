"use client";

import Link from "next/link";
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
          <div className="flex items-center p-4">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground"
            >
              <Icons.logo className="h-6 w-6" />
              <span className="inline-block font-bold">{siteConfig.name}</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col justify-around px-0">
            <NavigationMenu className="w-full border-2 border-border/40 p-1 backdrop-blur">
              <NavList className="flex-col w-full h-full space-y-4" />
            </NavigationMenu>
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                <Icons.linkedin />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
