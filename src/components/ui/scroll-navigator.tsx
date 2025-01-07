import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

interface ScrollNavigatorProps {
  direction: "up" | "down";
  onClick: () => void;
  className?: string;
}

export function ScrollNavigator({
  direction,
  onClick,
  className,
}: ScrollNavigatorProps) {
  const variants: Variants = {
    initial: { y: 0 },
    animate: {
      y: direction === "up" ? -3 : 3,
    },
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "rounded-full p-3 bg-background/80 backdrop-blur-sm border border-border/40 shadow-lg",
        "hover:bg-accent hover:border-border/80 transition-colors",
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {direction === "up" ? (
        <Icons.chevronUp className="w-6 h-6" />
      ) : (
        <Icons.chevronDown className="w-6 h-6" />
      )}
    </motion.button>
  );
}
