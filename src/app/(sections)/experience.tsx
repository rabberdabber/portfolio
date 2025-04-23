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
import experiences from "@/config/experiences";
import { useTranslations } from "next-intl";

function WorkExperience() {
  const t = useTranslations("experience");
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout>();

  const handleMouseEnter = (itemValue: string) => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(itemValue);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredItem(null);
  };

  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full py-12">
      <div className="space-y-4 mb-8">
        <div className="space-y-3">
          <p className="text-muted-foreground text-center">{t("overview")}</p>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        value={hoveredItem || undefined}
        className="space-y-4 w-full px-4 md:px-6"
      >
        {workProjects.map((project, index) => {
          const itemValue = `item-${index}`;
          return (
            <AccordionItem
              key={index}
              value={itemValue}
              className="border rounded-lg overflow-hidden bg-card transition-all duration-500 ease-in-out hover:shadow-lg"
              onMouseEnter={() => handleMouseEnter(itemValue)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="border-0">
                <div className="p-0">
                  <AccordionTrigger
                    className="px-4 md:px-6 py-4 hover:no-underline [&[data-state=open]>svg]:hidden"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
                      <div className="space-y-1 max-w-[250px] sm:max-w-none">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <Icons.briefcaseIcon className="h-5 w-5 flex-shrink-0" />
                          <span className="line-clamp-1">
                            {t(`projects.${project.project}.title`)}
                          </span>
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
                        {t("project")}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                </div>
                <div className="px-4 md:px-6 py-2">
                  <p className="text-sm text-muted-foreground line-clamp-5 sm:line-clamp-none">
                    {t(`projects.${project.project}.summary`)}
                  </p>
                </div>
              </div>
              <AccordionContent className="px-4 md:px-6 pb-4 transition-all duration-500 ease-in-out min-h-[200px] overflow-y-auto">
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4 pt-2">
                  {Array.from({ length: project.descriptionCount }).map(
                    (_, i) => (
                      <li key={i}>
                        {t(`projects.${project.project}.description_${i + 1}`)}
                      </li>
                    )
                  )}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <Layout id="experience">
      <div className="flex flex-col items-center justify-between gap-1">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          {t("title")}
        </h1>
        <ExperienceTimeline experiences={experiences} isActive={false}>
          <WorkExperience />
        </ExperienceTimeline>
      </div>
    </Layout>
  );
}
