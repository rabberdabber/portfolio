import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "./icons";
import Link from "next/link";
import Image from "next/image";

import React from "react";

interface TimelineItemProps {
  isActive?: boolean;
  shouldHideLine?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  isActive = false,
  shouldHideLine = false,
}) => {
  return (
    <div className="relative pl-8 pb-12">
      <div className="absolute left-0 top-1/2 flex items-center justify-center">
        <div
          className={`w-5 h-5 rounded-full ${
            isActive ? "bg-green-500 animate-pulse" : "bg-gray-300"
          }`}
        />
        <div
          className={`absolute w-3 h-3 rounded-full ${
            isActive ? "bg-green-300" : "bg-gray-200"
          }`}
        />
      </div>
      {!shouldHideLine && (
        <div className="absolute left-2.5 top-[calc(50%+1.25rem)] -bottom-1/2 w-0.5 bg-gradient-to-b from-green-500 via-green-300 to-gray-300" />
      )}
    </div>
  );
};

interface ExperienceTimelineProps {
  experiences: Omit<ExperienceCardProps, "isLast">[];
  isActive: boolean;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  isActive,
}) => {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div key={index} className="flex">
          <TimelineItem isActive={isActive && index === 0} />
          <ExperienceCard
            {...experience}
            isActive={isActive && index === 0}
            isLast={index === experiences.length - 1}
          />
        </div>
      ))}
      {experiences.length < 2 && (
        <div className="flex">
          <TimelineItem shouldHideLine isActive={false} />
          <Card className="flex flex-col items-center justify-center m-auto">
            <CardHeader>
              <CardTitle>No prior experience</CardTitle>
            </CardHeader>
          </Card>
        </div>
      )}
    </div>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  companyUrl: string;
  date: string;
  description: string;
  companyLogo: string;
  isActive?: boolean;
  isLast?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  companyUrl,
  date,
  description,
  companyLogo,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {" "}
      <Card className="bg-card">
        <CardHeader className="pb-2">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
            <div className="w-full lg:w-3/4 flex items-center">
              <Image
                src={companyLogo}
                alt={`${company} logo`}
                width={48}
                height={48}
                className="mr-3 flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <CardTitle className="text-xl font-semibold truncate">
                  {title}
                </CardTitle>
                <p className="text-muted-foreground flex items-center">
                  <span className="truncate">{company}</span>
                  <Link
                    href={companyUrl}
                    className="ml-1 text-primary hover:text-primary/80 flex-shrink-0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icons.externalLink
                      size={14}
                      className="text-muted-foreground"
                    />
                  </Link>
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="text-muted-foreground whitespace-nowrap mt-2 lg:mt-0"
            >
              {date}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceTimeline;
