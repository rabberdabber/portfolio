import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tools: string[];
  className?: string;
  index: number;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6,
    },
  },
};

export function BentoCard({
  title,
  description,
  icon: Icon,
  tools,
  className,
  index,
}: BentoCardProps) {
  return (
    <motion.div
      layout
      variants={cardVariants}
      className={cn(
        "group relative overflow-hidden rounded-xl p-6 hover:shadow-xl transition-all duration-300",
        "dark:from-neutral-900/90 dark:to-neutral-950/90",
        "from-neutral-100/90 to-neutral-200/90",
        className
      )}
    >
      <div className="relative z-10">
        <div
          className={cn(
            "mb-4 inline-flex rounded-lg p-3",
            "dark:bg-white/10",
            "bg-black/10"
          )}
        >
          <Icon className={cn("h-6 w-6", "dark:text-white", "text-gray-900")} />
        </div>
        <h3
          className={cn(
            "mb-2 text-2xl font-bold",
            "dark:text-white",
            "text-gray-900"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mb-4 text-sm line-clamp-2",
            "dark:text-gray-300",
            "text-gray-600"
          )}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge
              key={tool}
              className={cn(
                "transition-all duration-200",
                "dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
                "bg-black/10 text-gray-900 hover:bg-black/20"
              )}
            >
              {tool}
            </Badge>
          ))}
        </div>
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
