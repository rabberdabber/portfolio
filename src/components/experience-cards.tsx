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
  certificate?: string;
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
      <div className="absolute left-0 top-0 flex items-center justify-center">
        <div
          className={`w-6 h-6 rounded-full ${
            isActive ? "bg-green-500/20" : ""
          } flex items-center justify-center`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              isActive ? "bg-green-500 animate-pulse" : "bg-gray-400"
            }`}
          />
        </div>
      </div>
      {!shouldHideLine && (
        <div className="absolute left-[11px] top-6 h-full w-[2px] bg-gradient-to-b from-green-500/50 to-gray-200/50" />
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
      {!isActive && (
        <div className="flex">
          <TimelineItem isActive={true} />
          <Card className="w-full max-w-2xl mx-auto bg-card">
            <CardHeader className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                <Icons.search className="w-8 h-8 text-green-500" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Looking for New Opportunities
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Open to exciting new roles and challenges
              </p>
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
          />
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
  description,
  companyLogo,
  certificate,
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
                  <Icons.fileText size={14} className="text-muted-foreground" />
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
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {description}
          </p>
          {certificate && (
            <Link
              href={certificate}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.fileText className="w-4 h-4" />
              Career Certificate
              <Icons.externalLink size={12} className="text-muted-foreground" />
            </Link>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceTimeline;
