import React from "react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import ImagesWithBlur from "./images-with-blur";
import ContentGenProjectDescription from "./contentgen-project-description";
import { breakpoints, useMediaQuery } from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: Tag[];
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectContent({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) {
  return (
    <>
      <div className="relative h-64 w-full overflow-hidden">
        <ImagesWithBlur
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
          width={672}
          height={256}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      </div>
      <ContentGenProjectDescription />
    </>
  );
}

function ProjectDialog({
  children,
  title,
  imageUrl,
}: {
  children: React.ReactNode;
  title: string;
  imageUrl: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 overflow-y-auto max-h-screen">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <ProjectContent imageUrl={imageUrl} title={title} />
      </DialogContent>
    </Dialog>
  );
}

function ProjectDrawer({
  children,
  title,
  imageUrl,
}: {
  children: React.ReactNode;
  title: string;
  imageUrl: string;
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
          <ProjectContent imageUrl={imageUrl} title={title} />
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const isMobile = !useMediaQuery(breakpoints.md);

  const cardContent = (
    <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-zinc-200/50 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800/50 dark:bg-zinc-900/50 dark:shadow-zinc-900/20 dark:hover:shadow-zinc-900/30 backdrop-blur-sm">
      <div className="relative h-48 overflow-hidden">
        <ImagesWithBlur
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="flex h-full flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
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
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Icons.externalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Icons.gitHub size={14} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <ProjectDrawer title={title} imageUrl={imageUrl}>
        {cardContent}
      </ProjectDrawer>
    );
  }

  return (
    <ProjectDialog title={title} imageUrl={imageUrl}>
      {cardContent}
    </ProjectDialog>
  );
}
