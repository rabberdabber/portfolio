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
}

export const projects: ProjectCardProps[] = [
  {
    title: "Content Bake",
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
    summary:
      "AI-Powered Full-Stack Content Platform with an editor playground to create rich content.",
    description: [
      "Built a modern, responsive platform for content creation and management using {Next.js}, {NextAuth}, {shadcn/ui}, and {Tailwind CSS}",
      "Integrated {Tiptap} as a block-based WYSIWYG (Rich Text) editor, facilitating intuitive content creation.",
      "Leveraged {Server Components}, {Server Actions}, and {Static Site Generation} to optimize performance for content posts.",
      "Enforced secure session management and access control via {NextAuth} for reliable user authentication.",
      "Deployed and self-hosted the entire stack on a virtual machine using {Docker} and {Coolify}, ensuring streamlined CI/CD and maintainability.",
    ],
    site: "https://content.codebake.io",
    repo: "https://github.com/rabberdabber/blog",
    coverImage: {
      light: "/content_bake_light.png",
      dark: "/content_bake_dark.png",
    },
  },
  {
    title: "Content Gen Server",
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
    summary:
      "Asynchronous Microservice backend for Content generation and management with AI capabilities.",
    description: [
      "Engineered a {FastAPI} server for generating AI-driven content and images, integrating {OpenAI}, {Flux} APIs, and {MinIO} (S3-compatible) for robust object storage.",
      "Utilized {Pydantic} and structured responses from {OpenAI} to maintain schema consistency across editor, database, and API endpoints.",
      "Incorporated {OAuth 2.0} for secure {authorization} and {role-based access control}, as well as {Redis} rate limiting to prevent service abuse.",
      "Deployed via {Docker Compose} and {Coolify}, simplifying infrastructure management and automated deployments.",
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
    title: "Personal Portfolio Website",
    summary:
      "Responsive Personal Portfolio showcasing my projects, skills, and experiences.",
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
      "Created a clean and modern portfolio site using {Next.js}, {shadcn/ui}, and {Tailwind CSS} to showcase professional projects and skill sets.",
      "Ensured seamless performance and scalability by self-hosting with {Docker} and {Coolify}, reducing hosting overhead and dependency on external platforms.",
    ],
    site: "https://portfolio.codebake.io",
    repo: "https://github.com/rabberdabber/portfolio",
    coverImage: {
      light: "/portfolio_light.png",
      dark: "/portfolio_dark.png",
    },
  },
];
