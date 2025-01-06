import { motion } from "framer-motion";
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

export function NavList() {
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
    return <IconComponent className={cn("w-4 h-4 transition-colors")} />;
  };

  return (
    <NavigationMenuList className="gap-2 relative">
      {siteConfig.mainNav.slice(1, 7).map((item) => (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuLink
            href={item.href}
            className={cn(
              navigationMenuTriggerStyle(),
              "gap-2 group rounded-full px-6 relative flex items-center text-sm font-medium text-foreground/60 hover:text-foreground",
              activeSection === item.title && "text-foreground bg-muted",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
            onClick={() => setActiveSection(item.title)}
          >
            {sectionToIcon(item.title)}
            <span>
              {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </span>
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
