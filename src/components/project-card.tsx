import React from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";

import {
  MorphingDialog,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogDescription,
  MorphingDialogTrigger,
  MorphingDialogContainer,
} from "./ui/morphing-dialog";

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
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.4,
      }}
    >
      <MorphingDialogTrigger className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            {title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
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
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Icons.externalLink size={16} /> Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Icons.gitHub size={16} /> Code
              </a>
            )}
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="sm:max-w-[650px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-4 rounded-md">
          <MorphingDialogTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {title}
          </MorphingDialogTitle>
          <div className="mb-6">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                className="w-full h-[300px] object-cover"
                width={650}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <MorphingDialogDescription className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {description}
            </MorphingDialogDescription>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
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
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                <Icons.externalLink size={16} /> View Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors"
              >
                <Icons.gitHub size={16} /> View Code
              </a>
            )}
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
