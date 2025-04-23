export interface Tag {
  name: string;
  color: string;
}

export interface ProjectCardProps {
  title: string;
  summary: string;
  description: string[];
  tags: Tag[];
  site?: string;
  repo?: string;
  coverImage: Record<"dark" | "light", string>;
  descriptionUrl?: string;
  portfolio?: boolean;
}

export const projects: ProjectCardProps[] = [
  {
    title: "items.contentBake.title",
    tags: [
      {
        name: "Next.js",
        color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100",
      },
      {
        name: "TypeScript",
        color:
          "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
      },
      {
        name: "Tailwind",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100",
      },
      {
        name: "Docker",
        color: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-100",
      },
    ],
    summary: "items.contentBake.summary",
    description: [
      "items.contentBake.description.0",
      "items.contentBake.description.1",
      "items.contentBake.description.2",
      "items.contentBake.description.3",
      "items.contentBake.description.4",
    ],
    site: "https://content.codebake.io",
    repo: "https://github.com/rabberdabber/blog",
    coverImage: {
      light: "/content_bake_light.png",
      dark: "/content_bake_dark.png",
    },
  },
  {
    title: "items.contentGen.title",
    tags: [
      {
        name: "FastAPI",
        color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100",
      },
      {
        name: "Python",
        color:
          "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
      },
      {
        name: "Docker",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100",
      },
      {
        name: "Redis",
        color: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-100",
      },
    ],
    summary: "items.contentGen.summary",
    description: [
      "items.contentGen.description.0",
      "items.contentGen.description.1",
      "items.contentGen.description.2",
      "items.contentGen.description.3",
    ],
    descriptionUrl:
      "https://github.com/rabberdabber/content-gen/blob/main/README.md",
    repo: "https://github.com/rabberdabber/ContentGen",
    coverImage: {
      light: "/contentgen.png",
      dark: "/contentgen.png",
    },
  },
  {
    title: "items.portfolio.title",
    summary: "items.portfolio.summary",
    tags: [
      {
        name: "Next.js",
        color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100",
      },
      {
        name: "Tailwind",
        color:
          "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
      },
      {
        name: "Docker",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100",
      },
    ],
    description: [
      "items.portfolio.description.0",
      "items.portfolio.description.1",
    ],
    site: "https://portfolio.codebake.io",
    repo: "https://github.com/rabberdabber/portfolio",
    coverImage: {
      light: "/portfolio_light.png",
      dark: "/portfolio_dark.png",
    },
    portfolio: true,
  },
];
