import { useRef } from "react";
import {
  motion,
  useInView,
  useAnimationControls,
  LayoutGroup,
} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/config/skills";
import { Icons } from "@/components/icons";

const iconMap: { [key: string]: any } = {
  Backend: Icons.serverIcon,
  Frontend: Icons.layoutIcon,
  DevOps: Icons.cloudIcon,
  Languages: Icons.codeIcon,
  Tools: Icons.wrenchIcon,
};

const bgColorMap: { [key: string]: string } = {
  Backend: "from-amber-900/90 to-amber-950/90",
  Frontend: "from-blue-900/90 to-blue-950/90",
  DevOps: "from-purple-900/90 to-purple-950/90",
  Languages: "from-emerald-900/90 to-emerald-950/90",
  Tools: "from-rose-900/90 to-rose-950/90",
};

export default function SkillCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimationControls();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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

  if (isInView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="container mx-auto px-4 py-8"
    >
      <LayoutGroup>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, value], index) => {
            const [tools, description] = value;
            const Icon = iconMap[key] || LightbulbIcon;
            const bgGradient =
              bgColorMap[key] || "from-gray-900/90 to-gray-950/90";

            return (
              <motion.div
                key={key}
                layout
                variants={cardVariants}
                className="group"
              >
                <div
                  className={`relative h-full rounded-2xl bg-gradient-to-br ${bgGradient} p-6 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="mb-4">
                    <div className="inline-block rounded-lg bg-white/10 p-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-white">{key}</h3>
                  <p className="mb-4 text-sm text-gray-300">{description}</p>

                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <Badge
                        key={tool}
                        className="bg-white/20 text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
}
