import { Icons } from "../icons";

interface ScrollNavigatorProps {
  direction: "up" | "down";
  href: string;
}

export function ScrollNavigator({ direction, href }: ScrollNavigatorProps) {
  return (
    <a
      href={href}
      className="p-2 rounded-full bg-background/95 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg z-[100] relative"
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {direction === "up" ? (
        <Icons.chevronUp className="h-6 w-6" />
      ) : (
        <Icons.chevronDown className="h-6 w-6" />
      )}
    </a>
  );
}
