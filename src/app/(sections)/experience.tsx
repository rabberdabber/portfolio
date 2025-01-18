"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ExperienceTimeline from "@/components/experience-cards";
import Layout from "@/components/layout";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import workProjects from "@/config/work-projects";

function WorkExperience() {
  return (
    <div className="container mx-0 py-12 my-2 border border-muted-foreground rounded-lg">
      <div className="space-y-4 mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 bg-muted/50 p-4 rounded-lg mb-4">
            <Icons.building2 className="h-5 w-5" />
            <h2 className="font-semibold text-lg">Emocog</h2>
          </div>
          <h2 className="text-muted-foreground text-center">
            A comprehensive overview of my professional journey at Emocog.
          </h2>
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {workProjects.map((project, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg overflow-hidden bg-card"
          >
            <Card className="border-0">
              <CardHeader className="p-0">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Icons.briefcaseIcon className="h-5 w-5" />
                        {project.project}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icons.calendar className="h-4 w-4" />
                        {project.period} · {project.duration}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="h-fit whitespace-nowrap"
                    >
                      Project
                    </Badge>
                  </div>
                </AccordionTrigger>
              </CardHeader>
              <CardContent className="px-6 py-2">
                <p className="text-sm text-muted-foreground">
                  {project.summary}
                </p>
              </CardContent>
            </Card>
            <AccordionContent className="px-6 pb-4">
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4 pt-2">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
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
              skills: ["Backend", "Frontend", "DevOps"],
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
