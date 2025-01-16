import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

interface ScrollNavigatorProps {
  direction: "up" | "down";
  href: string;
}

export function ScrollNavigator({ direction, href }: ScrollNavigatorProps) {
  return (
    <a
      href={href}
      className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {direction === "up" ? (
        <Icons.chevronUp className="h-6 w-6" />
      ) : (
        <Icons.chevronDown className="h-6 w-6" />
      )}
    </a>
  );
}
