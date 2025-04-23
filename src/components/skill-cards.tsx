"use client";

import React from "react";
import {
  motion,
  useAnimationControls,
  LayoutGroup,
  useInView,
} from "motion/react";
import { Code, Database, Layout as LayoutIcon, Server } from "lucide-react";
import { Skills } from "@/config/skills";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const iconMap = {
  Backend: <Server className="w-8 h-8" />,
  Frontend: <LayoutIcon className="w-8 h-8" />,
  Languages: <Code className="w-8 h-8" />,
  DevOps: <Server className="w-8 h-8" />,
  Productivity: <Icons.brain className="w-8 h-8" />,
  Others: <Database className="w-8 h-8" />,
};

const bgColorMap = {
  Backend: "from-amber-500/20 to-amber-500/10",
  Frontend: "from-sky-500/20 to-sky-500/10",
  Languages: "from-emerald-500/20 to-emerald-500/10",
  DevOps: "from-lime-500/20 to-lime-500/10",
  Productivity: "from-rose-500/20 to-rose-500/10",
  Others: "from-violet-500/20 to-violet-500/10",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface BentoCardProps {
  category: string;
  tools: string[];
  className?: string;
  index: number;
}

function BentoCard({ category, tools, className }: BentoCardProps) {
  const t = useTranslations("skills.categories");

  return (
    <div
      className={cn(
        "group relative overflow-hidden h-full",
        "hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="relative z-10 h-full">
        <div className="flex items-start gap-4">
          <div className="text-foreground/80 group-hover:text-foreground transition-colors shrink-0">
            {iconMap[category as keyof typeof iconMap]}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              {t(`${category}.title`)}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t(`${category}.description`)}
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full text-sm border bg-background/50 backdrop-blur-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkillCards() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimationControls();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="mx-auto max-w-7xl px-4">
      <LayoutGroup>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6"
        >
          {Object.entries(Skills).map(([key, { tools }], index) => (
            <motion.div
              key={key}
              variants={itemVariants}
              layoutId={`skill-card-${index}`}
              transition={{
                layout: { duration: 0.4, ease: "easeOut" },
              }}
              className="h-full"
            >
              <BentoCard
                category={key}
                tools={tools}
                className={`bg-gradient-to-br p-6 rounded-3xl w-full h-full ${
                  bgColorMap[key as keyof typeof bgColorMap]
                }`}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
