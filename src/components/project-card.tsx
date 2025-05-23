import React, { Fragment, ReactNode } from "react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useTheme } from "next-themes";
import ImagesWithBlur from "./images-with-blur";
import { breakpoints, useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "motion/react";
import { ProjectCardProps } from "@/config/projects";
import { useTranslations } from "next-intl";
import Link from "next/link";

function ProjectContent({
  imageUrl,
  title,
  description,
  summary,
}: {
  imageUrl: string;
  title: string;
  description: string[];
  summary: string;
}) {
  const t = useTranslations("projects");
  // Calculate the stagger delay based on description length
  const staggerDelay = 0.5 / (description.length || 1); // Ensures all items animate within 0.5s

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="relative h-64 w-full overflow-hidden">
        <ImagesWithBlur
          src={imageUrl}
          alt={t(title)}
          className="h-full w-full object-cover object-top"
          width={672}
          height={256}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      </div>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">{t(title)}</h2>
          <p className="text-muted-foreground mt-2">{t(summary)}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 text-primary">
            <Icons.terminal className="h-5 w-5" />
            <h3 className="font-semibold">{t("technicalDetails")}</h3>
          </div>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: staggerDelay,
                },
              },
              hidden: {
                opacity: 0,
              },
            }}
            className="space-y-4 pl-5"
          >
            {description.map((desc, i) => (
              <motion.li
                key={i}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -20 },
                }}
                className={cn(
                  "text-foreground p-4 rounded-lg transition-colors",
                  i % 2 === 0
                    ? "bg-white dark:bg-zinc-900 shadow-sm"
                    : "bg-zinc-100 dark:bg-zinc-800/90 shadow-sm"
                )}
              >
                {t(desc)}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectDialog({
  children,
  title,
  imageUrl,
  description,
  summary,
}: {
  children: React.ReactNode;
  title: string;
  imageUrl: string;
  description: string[];
  summary: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 overflow-y-auto max-h-[80dvh] max-w-screen-sm md:max-w-[50dvw]">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <ProjectContent
          imageUrl={imageUrl}
          title={title}
          description={description}
          summary={summary}
        />
      </DialogContent>
    </Dialog>
  );
}

function ProjectDrawer({
  children,
  title,
  imageUrl,
  description,
  summary,
}: {
  children: React.ReactNode;
  title: string;
  imageUrl: string;
  description: string[];
  summary: string;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 0.4,
            },
          }}
          className="w-full max-w-2xl mx-auto overflow-y-auto max-h-[80vh]"
        >
          <ProjectContent
            imageUrl={imageUrl}
            title={title}
            description={description}
            summary={summary}
          />
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}

export function ProjectCard({
  title,
  summary,
  description,
  descriptionUrl,
  coverImage,
  tags,
  site,
  repo,
  portfolio,
}: ProjectCardProps) {
  const isMobile = !useMediaQuery(breakpoints.md);
  const theme = useTheme();
  const t = useTranslations("projects");
  const imageUrl = coverImage[theme.theme === "dark" ? "dark" : "light"];

  const cardContent = (
    <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-zinc-200/50 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800/50 dark:bg-zinc-900/50 dark:shadow-zinc-900/20 dark:hover:shadow-zinc-900/30 backdrop-blur-sm">
      <div className="relative h-48 overflow-hidden">
        <ImagesWithBlur
          src={imageUrl}
          alt={t(title)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 object-top"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="flex h-full flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {t(title)}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {t(summary)}
          </p>
        </div>
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={cn(
                  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
                  tag.color
                )}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {site && (
              <a
                href={portfolio ? "#" : site}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                onClick={(e) => e.stopPropagation()}
              >
                {portfolio ? (
                  <Icons.chevronUp size={14} />
                ) : (
                  <Icons.externalLink size={14} />
                )}
                <span>{portfolio ? t("thisWebsite") : t("liveSite")}</span>
              </a>
            )}
            {descriptionUrl && (
              <Link
                href={descriptionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Icons.externalLink size={14} />
                <span>{t("descriptionServer")}</span>
              </Link>
            )}
            {repo && (
              <Link
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-30"
                onClick={(e) => e.stopPropagation()}
              >
                <Icons.folderGitIcon size={14} />
                <span>{t("repository")}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <ProjectDrawer
        title={title}
        imageUrl={imageUrl}
        description={description}
        summary={summary}
      >
        {cardContent}
      </ProjectDrawer>
    );
  }

  return (
    <ProjectDialog
      title={title}
      imageUrl={imageUrl}
      description={description}
      summary={summary}
    >
      {cardContent}
    </ProjectDialog>
  );
}
