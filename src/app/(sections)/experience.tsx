"use client";
import React from "react";
import ExperienceTimeline from "@/components/experience-cards";
import Layout from "@/components/layout";

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
              description:
                "Led development of key features in the cognitive assessment platform. Implemented responsive UI components and optimized database queries for improved performance.",
              companyLogo: "/emocog_logo.png",
              certificate: "/career_certificate.pdf",
              skills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
            },
          ]}
          isActive={false}
        />
      </div>
    </Layout>
  );
}
