"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DateBadge } from "@/components/ui/date-badge";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/hooks/useMediaQuery";
import { type Experience, type CompanyMeta } from "@/types/experience";
import { useTranslations } from "use-intl";
import { Button } from "@/components/ui/button";

interface TimelineItemProps {
  isActive?: boolean;
  shouldHideLine?: boolean;
}

interface ExperienceCardProps extends Experience {
  isActive?: boolean;
  isLast?: boolean;
  children?: React.ReactNode;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
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
  const isMobile = !useMediaQuery(breakpoints.md);
  const t = useTranslations("experience");

  return (
    <div className="space-y-6 min-w-fit">
      {!isActive && (
        <div className="flex">
          {!isMobile && <TimelineItem isActive={true} />}
          <Card className="max-w-full md:max-w-2xl mr-2 mx-auto bg-card hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-2 ring-4 ring-green-500/20">
                <Icons.search className="w-10 h-10 text-green-500" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  {t("openToWork.title")}
                </CardTitle>
                <p className="text-base text-muted-foreground mt-2">
                  {t("openToWork.description")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">
                  {t("openToWork.badges.fullTime")}
                </Badge>
                <Badge variant="secondary">
                  {t("openToWork.badges.onSite")}
                </Badge>
                <Badge variant="secondary">
                  {t("openToWork.badges.remote")}
                </Badge>
                <Badge variant="secondary">
                  {t("openToWork.badges.hybrid")}
                </Badge>
              </div>
            </CardHeader>
          </Card>
        </div>
      )}
      {experiences.map((experience, index) => (
        <div key={index} className="flex">
          {!isMobile && (
            <TimelineItem
              isActive={isActive && index === 0}
              shouldHideLine={index === experiences.length - 1}
            />
          )}
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
  companyMeta,
  startDate,
  endDate,
  companyLogo,
  certificate,
  skills,
  children,
}) => {
  const t = useTranslations("experience");

  return (
    <div className="w-full max-w-[calc(100dvw-2rem)] md:max-w-2xl mx-auto">
      <Card className="bg-card hover:shadow-lg transition-shadow duration-200 min-w-[min(500px,calc(100dvw-2rem))] overflow-x-auto">
        <CardHeader className="space-y-6 pb-2 bg-muted/20">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-border/40 bg-foreground p-2">
              <Avatar className="w-full h-full">
                <AvatarImage
                  src={companyLogo}
                  alt={t("companyLogoAlt", { company: t(company) })}
                  className="object-contain w-full h-full"
                />
                <AvatarFallback className="bg-foreground">
                  {company[0]}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="min-w-0 flex-1 space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold">{t(title)}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Link
                    href={companyUrl}
                    className="inline-flex items-center gap-1 group"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icons.building2 className="w-4 h-4" />
                    <span className="truncate">{t(company)}</span>
                  </Link>
                  {certificate && (
                    <Link
                      href={certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t("careerCertificate")}
                      className="inline-flex items-center gap-1 group"
                    >
                      <Icons.fileText className="h-4 w-4" />
                      <span>{t("careerCertificate")}</span>
                    </Link>
                  )}
                </div>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-sm">{t(companyMeta.intro)}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Icons.mapPin className="w-3.5 h-3.5" />
                    <span>{t(companyMeta.location)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icons.briefcase className="w-3.5 h-3.5" />
                    <span>{t(companyMeta.industry)}</span>
                  </div>
                </div>
              </div>
              <DateBadge
                startDate={startDate}
                endDate={endDate}
                className="w-max"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col border-t border-border/40">
          {children}
        </CardContent>
        <CardFooter className="bg-muted/20 border-t border-border/40 py-4">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-muted-foreground bg-muted-foreground/10"
              >
                #{skill.toLowerCase().replace(/\s+/g, "-")}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExperienceTimeline;
