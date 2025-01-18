"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DateBadge } from "@/components/ui/date-badge";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import ImagesWithBlur from "./images-with-blur";

interface TimelineItemProps {
  isActive?: boolean;
  shouldHideLine?: boolean;
}

interface ExperienceCardProps {
  title: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  companyLogo: string;
  isActive?: boolean;
  isLast?: boolean;
  skills: string[];
  certificate?: string;
  children?: React.ReactNode;
}

interface ExperienceTimelineProps {
  experiences: Omit<ExperienceCardProps, "isLast">[];
  isActive: boolean;
  children?: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  isActive = false,
  shouldHideLine = false,
}) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-2 flex items-center justify-center">
        <div
          className={`w-6 h-6 rounded-full ${
            isActive ? "bg-green-500/20" : "bg-gray-100 dark:bg-gray-800"
          } flex items-center justify-center border-2 ${
            isActive
              ? "border-green-500"
              : "border-gray-300 dark:border-gray-600"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isActive ? "bg-green-500 animate-pulse" : "bg-gray-400"
            }`}
          />
        </div>
      </div>
      {!shouldHideLine && (
        <div className="absolute left-[11px] top-8 h-full w-[2px] bg-gradient-to-b from-green-500/50 via-gray-200 to-transparent dark:via-gray-700" />
      )}
    </div>
  );
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  isActive,
  children,
}) => {
  return (
    <div className="space-y-6 min-w-fit">
      {!isActive && (
        <div className="flex">
          <TimelineItem isActive={true} />
          <Card className="max-w-full md:max-w-2xl mr-2 mx-auto bg-card hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-2 ring-4 ring-green-500/20">
                <Icons.search className="w-10 h-10 text-green-500" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  Looking for New Opportunities
                </CardTitle>
                <p className="text-base text-muted-foreground mt-2">
                  Open to exciting new roles and challenges in software
                  development
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Full-time</Badge>
                <Badge variant="secondary">On-site</Badge>
                <Badge variant="secondary">Remote</Badge>
                <Badge variant="secondary">Hybrid</Badge>
              </div>
            </CardHeader>
          </Card>
        </div>
      )}
      {experiences.map((experience, index) => (
        <div key={index} className="flex">
          <TimelineItem
            isActive={isActive && index === 0}
            shouldHideLine={index === experiences.length - 1}
          />
          <ExperienceCard
            {...experience}
            isActive={isActive && index === 0}
            isLast={index === experiences.length - 1}
          >
            {children}
          </ExperienceCard>
        </div>
      ))}
    </div>
  );
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  companyUrl,
  startDate,
  endDate,
  companyLogo,
  certificate,
  skills,
  children,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-card hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="pb-2">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
            <div className="w-full lg:w-3/4 flex items-center gap-4">
              <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-2">
                <ImagesWithBlur
                  src={companyLogo}
                  alt={`${company} logo`}
                  width={48}
                  height={48}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className="text-xl font-bold mb-1">
                  {title}
                </CardTitle>
                <Link
                  href={companyUrl}
                  className="text-muted-foreground hover:text-primary inline-flex items-center gap-1 group"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="truncate">{company}</span>
                  <Icons.externalLink
                    size={14}
                    className="text-muted-foreground group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
            <DateBadge
              startDate={new Date(startDate)}
              endDate={new Date(endDate)}
              className="w-max"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* <p className="text-sm text-muted-foreground">{description}</p> */}
          {children}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-muted-foreground bg-muted-foreground/10"
              >
                {skill}
              </Badge>
            ))}
          </div>
          {certificate && (
            <Link
              href={certificate}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.fileText className="w-4 h-4" />
              <span className="group-hover:underline">Career Certificate</span>
            </Link>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceTimeline;
