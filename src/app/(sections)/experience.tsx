"use client";

import React from "react";
import ExperienceTimeline from "@/components/experience-cards";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Layout from "@/components/layout";
import { Icons } from "@/components/icons";
import workProjects from "@/config/work-projects";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePageTurn } from "@/hooks/usePageTurn";

const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    rotateY: direction < 0 ? 45 : -45,
  }),
};

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const buttonVariants = {
  idle: { x: 0 },
  hover: (direction: number) => ({
    x: direction * 10,
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

function WorkExperienceDetails() {
  const { currentPage, turnPage } = usePageTurn();
  const project = workProjects[currentPage];

  return (
    <div className="relative flex items-center justify-center py-4 space-y-14">
      <div className="w-full max-w-3xl relative perspective">
        <div className="absolute top-0 right-0 -translate-y-1/2 z-10">
          <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-lg border-2 border-muted-foreground/20">
            <Icons.building2 className="h-4 w-4" />
            <h2 className="font-semibold text-xs">Emocog</h2>
          </div>
        </div>

        {/* Left Navigation Button */}
        {currentPage !== 0 && (
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-full -translate-x-12 z-10"
            variants={buttonVariants}
            initial="idle"
            animate={currentPage !== 0 ? "hover" : "idle"}
            custom={-1}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => turnPage("prev")}
              disabled={currentPage === 0}
              className="h-6 w-6 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background/90 transition-colors"
            >
              <Icons.chevronLeft className="h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {/* Right Navigation Button */}
        {currentPage !== workProjects.length - 1 && (
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-full translate-x-12 z-10"
            variants={buttonVariants}
            initial="idle"
            animate={currentPage !== workProjects.length - 1 ? "hover" : "idle"}
            custom={1}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => turnPage("next")}
              disabled={currentPage === workProjects.length - 1}
              className="h-6 w-6 bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background/90 transition-colors"
            >
              <Icons.chevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}

        <AnimatePresence initial={false} custom={1}>
          <motion.div
            key={currentPage}
            custom={1}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <Card className="shadow-2xl">
              <CardHeader className="pb-4 bg-muted-foreground/10">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Icons.briefcase className="h-6 w-6" />
                  {project.project}
                </h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Icons.calendar className="h-4 w-4" />
                  {project.period} · {project.duration}
                </p>
              </CardHeader>

              <CardContent className="prose prose-sm dark:prose-invert max-w-none h-[600px]">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Summary</h4>
                  <p className="text-muted-foreground">{project.summary}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="mt-auto pt-4 justify-center">
                <p className="text-sm text-muted-foreground">
                  Page {currentPage + 1} of {workProjects.length}
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Layout id="experience">
      <div className="flex flex-col items-center justify-between gap-1">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          Professional Experience
        </h1>
        <ExperienceTimeline
          experiences={[
            {
              title: "Software Engineer",
              company: "Emocog",
              companyUrl: "https://www.emocog.com/en",
              startDate: "2022-08-22",
              endDate: "2024-12-31",
              companyLogo: "/emocog_logo.png",
              certificate: "/career_certificate.pdf",
              skills: ["Backend", "Frontend", "DevOps"],
            },
          ]}
          isActive={false}
        >
          <WorkExperienceDetails />
        </ExperienceTimeline>
      </div>
    </Layout>
  );
}
