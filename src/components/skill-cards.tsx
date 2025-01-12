"use client";

import React from "react";
import {
  motion,
  useAnimationControls,
  LayoutGroup,
  useInView,
} from "framer-motion";
import { Code, Database, Layout as LayoutIcon, Server } from "lucide-react";

const SKILLS = {
  Backend: {
    tools: ["FastAPI", "Node.js", "PostgreSQL", "Firebase", "Redis"],
    description: "implement RESTful or GraphQL APIs and manage databases",
  },
  Frontend: {
    tools: ["React", "React Native", "Next.js", "TailwindCSS", "HTML", "CSS"],
    description: "implement UI components",
  },
  Languages: {
    tools: ["TypeScript", "Python", "C/C++"],
    description: "implement backend and frontend logic",
  },
  Others: {
    tools: ["Figma", "VS Code", "Git", "GitHub", "GitLab", "Cursor"],
    description: "design and develop UI components",
  },
};

const iconMap = {
  Backend: <Server className="w-8 h-8" />,
  Frontend: <LayoutIcon className="w-8 h-8" />,
  Languages: <Code className="w-8 h-8" />,
  Others: <Database className="w-8 h-8" />,
};

const bgColorMap = {
  Backend: "from-amber-500/20 to-amber-500/10",
  Frontend: "from-sky-500/20 to-sky-500/10",
  Languages: "from-emerald-500/20 to-emerald-500/10",
  Others: "from-violet-500/20 to-violet-500/10",
};

const sizeMap = {
  Backend: "lg:col-span-2 lg:row-span-1",
  Frontend: "lg:col-span-1 lg:row-span-2",
  Languages: "lg:col-span-1 lg:row-span-1",
  Others: "lg:col-span-2 lg:row-span-1",
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
  title: string;
  description: string;
  icon: React.ReactNode;
  tools: string[];
  className?: string;
  index: number;
}

function BentoCard({
  title,
  description,
  icon,
  tools,
  className,
  index,
}: BentoCardProps) {
  return (
    <div
      className={`group relative overflow-hidden ${className} hover:shadow-lg transition-all duration-300`}
    >
      <div className="relative z-10 h-full">
        <div className="flex items-start gap-4">
          <div className="text-foreground/80 group-hover:text-foreground transition-colors">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
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
    <div className="mx-auto max-w-7xl">
      <LayoutGroup>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 "
        >
          {Object.entries(SKILLS).map(
            ([key, { tools, description }], index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                layoutId={`skill-card-${index}`}
                transition={{
                  layout: { duration: 0.4, ease: "easeOut" },
                }}
                className="p-4"
              >
                <BentoCard
                  title={key}
                  description={description}
                  icon={iconMap[key as keyof typeof iconMap]}
                  tools={tools}
                  className={`bg-gradient-to-br p-6 rounded-3xl w-full md:w-auto flex flex-col justify-center items-center ${
                    bgColorMap[key as keyof typeof bgColorMap]
                  } ${sizeMap[key as keyof typeof sizeMap]}`}
                  index={index}
                />
              </motion.div>
            )
          )}
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
