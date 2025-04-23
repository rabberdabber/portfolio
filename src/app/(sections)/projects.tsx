"use client";
import React from "react";
import Layout from "@/components/layout";
import { projects } from "@/config/projects";
import { ProjectCard } from "@/components/project-card";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <Layout id="projects">
      <div className="">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t("title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
