interface PersonalProject {
  project: string;
  summary: string;
  description: string[];
  site: string;
  repo: string;
}

export const personalProjects: PersonalProject[] = [
  {
    project: "Content Bake",
    summary: "Built my personal website using Next.js and Tailwind CSS.",
    description: [
      "Built a modern, responsive platform for content creation and management using {Next.js}, {NextAuth}, {shadcn/ui}, and {Tailwind CSS}",
      "Integrated {Tiptap} as a block-based WYSIWYG (Rich Text) editor, facilitating intuitive content creation.",
      "Leveraged {Server Components}, {Server Actions}, and {Static Site Generation} to optimize performance for content posts.",
      "Enforced secure session management and access control via {NextAuth} for reliable user authentication.",
      "Deployed and self-hosted the entire stack on a virtual machine using {Docker} and {Coolify}, ensuring streamlined CI/CD and maintainability.",
    ],
    site: "https://content.codebake.io",
    repo: "https://github.com/rabberdabber/blog",
  },
  {
    project: "Content Gen Server",
    summary: "Asynchronous Microservice for AI Content.",
    description: [
      "Engineered a {FastAPI} server for generating AI-driven content and images, integrating {OpenAI}, {Flux} APIs, and {MinIO} (S3-compatible) for robust object storage.",
      "Utilized {Pydantic} and structured responses from {OpenAI} to maintain schema consistency across editor, database, and API endpoints.",
      "Incorporated {OAuth 2.0} for secure {authorization} and {role-based access control}, as well as {Redis} rate limiting to prevent service abuse.",
      "Deployed via {Docker Compose} and {Coolify}, simplifying infrastructure management and automated deployments.",
    ],
    site: "https://contentgen.codebake.io",
    repo: "https://github.com/rabberdabber/ContentGen",
  },
  {
    project: "Personal Portfolio Website",
    summary: "Responsive Personal Portfolio",
    description: [
      "Created a clean and modern portfolio site using {Next.js}, {shadcn/ui}, and {Tailwind CSS} to showcase professional projects and skill sets.",
      "Ensured seamless performance and scalability by self-hosting with {Docker} and {Coolify}, reducing hosting overhead and dependency on external platforms.",
    ],
    site: "https://portfolio.codebake.io",
    repo: "https://github.com/rabberdabber/portfolio",
  },
];
