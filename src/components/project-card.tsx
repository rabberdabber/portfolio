import React from "react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImagesWithBlur from "./images-with-blur";

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

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogTitle className="sr-only">{title}</DialogTitle>
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
        <div className="relative -mt-12 space-y-6 px-6 pb-8">
          <div className="relative rounded-lg bg-white/80 p-6 backdrop-blur-sm dark:bg-zinc-900/80">
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                    tag.color
                  )}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  <Icons.externalLink size={16} />
                  View Live Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                >
                  <Icons.gitHub size={16} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
