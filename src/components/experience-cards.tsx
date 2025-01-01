import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DateBadge } from "@/components/ui/date-badge";
import { Icons } from "./icons";

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
  description: string;
  companyLogo: string;
  isActive?: boolean;
  isLast?: boolean;
  skills: string[];
}

interface ExperienceTimelineProps {
  experiences: Omit<ExperienceCardProps, "isLast">[];
  isActive: boolean;
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

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  companyUrl,
  startDate,
  endDate,
  description,
  companyLogo,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-card">
        <CardHeader className="pb-2">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
            <div className="w-full lg:w-3/4 flex items-center">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full overflow-hidden border border-gray-200 dark:border-gray-800 mr-3">
                <Image
                  src={companyLogo}
                  alt={`${company} logo`}
                  width={48}
                  height={48}
                  objectFit="contain"
                  className="flex-shrink-0"
                />
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className="text-xl font-semibold truncate">
                  {title}
                </CardTitle>
                <Link
                  href={companyUrl}
                  className="text-muted-foreground hover:text-primary/80 flex items-center gap-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="truncate">{company}</span>
                  <Icons.externalLink
                    size={14}
                    className="text-muted-foreground"
                  />
                </Link>
              </div>
            </div>
            <div className="space-y-2 flex items-center gap-2">
              <DateBadge
                startDate={new Date(startDate)}
                endDate={new Date(endDate)}
              />
            </div>
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
