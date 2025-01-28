import { motion } from "motion/react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useSection } from "@/context/section-context";
import { Section } from "@/types/nav";
import { breakpoints } from "@/hooks/useMediaQuery";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function NavList({ className }: { className?: string }) {
  const isMobile = !useMediaQuery(breakpoints.md);
  const { activeSection, setActiveSection } = useSection();
  const sectionToIconObject = {
    home: Icons.home,
    about: Icons.user,
    experience: Icons.briefcase,
    projects: Icons.folderGit2,
    skills: Icons.brain,
    certifications: Icons.graduationCap,
    contact: Icons.mail,
  };

  const sectionToIcon = (section: Section) => {
    const IconComponent =
      sectionToIconObject[section as keyof typeof sectionToIconObject];
    return <IconComponent className={cn("w-6 h-6 transition-colors")} />;
  };

  return (
    <NavigationMenuList
      className={cn(
        "gap-2 relative items-start justify-center lg:items-center",
        className
      )}
    >
      {siteConfig.mainNav.slice(1, 7).map((item) => (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuLink
            href={item.href}
            className={cn(
              isMobile
                ? "w-full hover:text-foreground"
                : navigationMenuTriggerStyle(),
              "w-full md:w-auto gap-2 group rounded-full px-6 relative flex items-center text-sm font-medium text-foreground/60 hover:text-foreground",
              activeSection === item.title &&
                "font-bold text-foreground md:bg-muted",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
            onClick={() => setActiveSection(item.title)}
          >
            {isMobile && sectionToIcon(item.title)}
            <p className="text-xl lg:text-base">
              {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </p>
            {activeSection === item.title && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  );
}
