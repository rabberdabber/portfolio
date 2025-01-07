import { useRef } from "react";
import {
  motion,
  useInView,
  useAnimationControls,
  LayoutGroup,
} from "framer-motion";
import { skills } from "@/config/skills";
import { Icons } from "@/components/icons";
import { BentoCard } from "@/components/ui/bento-card";

const iconMap: { [key: string]: any } = {
  Backend: Icons.serverIcon,
  Frontend: Icons.layoutIcon,
  DevOps: Icons.cloudIcon,
  Languages: Icons.codeIcon,
  Tools: Icons.wrenchIcon,
};

const bgColorMap: { [key: string]: string } = {
  Backend:
    "dark:from-amber-950/90 dark:to-amber-900/90 from-amber-50 to-amber-100/90",
  Frontend:
    "dark:from-blue-950/90 dark:to-blue-900/90 from-blue-50 to-blue-100/90",
  DevOps:
    "dark:from-purple-950/90 dark:to-purple-900/90 from-purple-50 to-purple-100/90",
  Languages:
    "dark:from-emerald-950/90 dark:to-emerald-900/90 from-emerald-50 to-emerald-100/90",
  Tools:
    "dark:from-rose-950/90 dark:to-rose-900/90 from-rose-50 to-rose-100/90",
};

const sizeMap = {
  Backend: "lg:col-span-2 lg:row-span-1",
  Frontend: "lg:col-span-1 lg:row-span-1",
  DevOps: "lg:col-span-1 lg:row-span-1",
  Languages: "lg:col-span-2 lg:row-span-1",
  Tools: "lg:col-span-1 lg:row-span-1",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimationControls();

  if (isInView) {
    controls.start("visible");
  }

  return (
    <div className="mx-auto max-w-7xl p-8">
      <LayoutGroup>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([key, [tools, description]], index) => (
            <motion.div
              key={key}
              variants={itemVariants}
              layoutId={`skill-card-${index}`}
              transition={{
                layout: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <BentoCard
                title={key}
                description={description}
                icon={iconMap[key as keyof typeof iconMap]}
                tools={tools}
                className={`bg-gradient-to-br p-6 rounded-3xl ${
                  bgColorMap[key as keyof typeof bgColorMap]
                } ${sizeMap[key as keyof typeof sizeMap]}`}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  );
}

export default function SkillCards() {
  return <BentoGrid />;
}
