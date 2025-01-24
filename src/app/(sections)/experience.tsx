"use client";

import React, { Fragment, ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ExperienceTimeline from "@/components/experience-cards";
import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import workProjects from "@/config/work-projects";

function WorkExperience() {
  function parseText(text: string): ReactNode {
    const parts = text.split(/(\{[^}]+\})/);
    return parts.map((part, index) => {
      if (part.startsWith("{") && part.endsWith("}")) {
        const content = part.slice(1, -1);
        return (
          <span key={index} className="font-bold">
            {content}
          </span>
        );
      }
      return <Fragment key={index}>{part}</Fragment>;
    });
  }
  return (
    <div className="w-full py-12">
      <div className="space-y-4 mb-8">
        <div className="space-y-3">
          <p className="text-muted-foreground text-center">
            A comprehensive overview of my professional journey at Emocog.
          </p>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        className="space-y-4 w-full px-4 md:px-6"
      >
        {workProjects.map((project, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg overflow-hidden bg-card"
          >
            <div className="border-0">
              <div className="p-0">
                <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
                    <div className="space-y-1 max-w-[250px] sm:max-w-none">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Icons.briefcaseIcon className="h-5 w-5 flex-shrink-0" />
                        <span className="line-clamp-1">{project.project}</span>
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icons.calendar className="h-4 w-4 flex-shrink-0" />
                        <span className="line-clamp-1">
                          {project.period} · {project.duration}
                        </span>
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="h-fit whitespace-nowrap w-fit"
                    >
                      Project
                    </Badge>
                  </div>
                </AccordionTrigger>
              </div>
              <div className="px-4 md:px-6 py-2">
                <p className="text-sm text-muted-foreground line-clamp-5 sm:line-clamp-none">
                  {project.summary}
                </p>
              </div>
            </div>
            <AccordionContent className="px-4 md:px-6 pb-4">
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4 pt-2">
                {project.description.map((desc, i) => (
                  <li key={i}>{parseText(desc)}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
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
              skills: [
                "REST-APIs",
                "Responsive-UI",
                "Self-Hosting",
                "SQL",
                "NoSQL",
                "Microservices",
                "Unit-Testing",
                "DevOps",
              ],
            },
          ]}
          isActive={false}
        >
          <WorkExperience />
        </ExperienceTimeline>
      </div>
    </Layout>
  );
}
