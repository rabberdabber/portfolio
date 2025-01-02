import React from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";

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
        <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] cursor-pointer">
          <div className="relative h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
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
            <div className="flex gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
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
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icons.gitHub size={16} /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">{title}</DialogTitle>
          <div className="mb-6">
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-4"
              width={500}
              height={500}
            />
            <DialogDescription className="text-base leading-relaxed">
              {description}
            </DialogDescription>
          </div>
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
          <div className="flex gap-4 mt-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Icons.externalLink size={16} /> View Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
              >
                <Icons.gitHub size={16} /> View Code
              </a>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
