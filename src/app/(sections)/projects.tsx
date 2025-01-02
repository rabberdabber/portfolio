"use client";
import React from "react";
import Layout from "@/components/layout";
import { projects } from "@/config/projects";
import { ProjectCard } from "@/components/project-card";

export default function Projects() {
  return (
    <Layout id="projects">
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            My Projects
          </h1>
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
