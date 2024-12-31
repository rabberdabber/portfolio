import { useRef } from "react";
import {
  motion,
  useInView,
  useAnimationControls,
  LayoutGroup,
} from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Marquee from "@/components/marquee";
import { Badge } from "@/components/ui/badge";

const skills = {
  Backend: [
    ["FastAPI", "Node.js", "PostgreSQL", "Firebase", "Redis"],
    "implement RESTful or GRPC APIs and manage databases",
  ],
  Frontend: [
    ["React", "React Native", "Next.js", "TailwindCSS", "HTML", "CSS"],
    "implement UI components",
  ],
  DevOps: [["Docker", "Kubernetes"], "manage infrastructure and deployment"],
  Languages: [
    ["Typescript", "Python", "C/C++"],
    "implement backend and frontend logic",
  ],
  Tools: [
    ["Figma", "VS Code", "Git", "GitHub", "GitLab"],
    "design and develop UI components",
  ],
} satisfies Record<string, [string[], string]>;

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

  const marqueeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.8,
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
      className="container pt-4"
    >
      <LayoutGroup>
        <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
          {Object.entries(skills).map(([key, value], index) => {
            const [tools, description] = value;
            return (
              <motion.div key={key} layout variants={cardVariants}>
                <Card className="relative group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
                  <CardHeader className="bg-slate-700 text-white">
                    <CardTitle className="text-2xl font-bold">{key}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <p className="text-slate-600">{description}</p>
                  </CardContent>
                  <CardFooter className="bg-slate-100 p-4">
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <Badge
                          key={tool}
                          className="bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors duration-200"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </LayoutGroup>
      <motion.div
        className="mt-8 bg-slate-700 p-1 rounded-lg"
        variants={marqueeVariants}
      >
        <div className="bg-white rounded-md p-2">
          <Marquee pauseOnHover className="overflow-hidden">
            {[
              "Implement Restful and grpc server and design database",
              "Create UI components and pages",
              "Self host and deploy application",
            ].map((skill) => (
              <div
                key={skill}
                className="mx-6 text-lg font-semibold text-slate-700"
              >
                {skill}
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </motion.div>
  );
}
