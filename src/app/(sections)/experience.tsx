"use client";
import React from "react";
import ExperienceTimeline from "@/components/experience-cards";
import Layout from "@/components/layout";

export default function Experience() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-between gap-1">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
          Experience
        </h1>
        <ExperienceTimeline
          experiences={[
            {
              title: "Software Engineer",
              company: "Emocog",
              companyUrl: "https://www.emocog.com/en",
              date: "August 2022 - Present",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
              companyLogo: "/emocog_logo.png",
            },
          ]}
          isActive
        />
      </div>
    </Layout>
  );
}
