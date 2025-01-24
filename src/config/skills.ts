export const Skills = {
  Backend: {
    tools: ["FastAPI", "Node.js", "PostgreSQL", "Firebase", "Redis"],
    description: "Implement RESTful or GRPC APIs and manage databases",
  },
  Frontend: {
    tools: ["React", "React Native", "Next.js", "TailwindCSS", "HTML", "CSS"],
    description: "Implement Responsive and Accessible UI components",
  },
  DevOps: {
    tools: ["Docker", "Docker Compose", "Kubernetes"],
    description: "Manage infrastructure and deployment",
  },
  Languages: {
    tools: ["JavaScript", "TypeScript", "Python", "C/C++"],
    description: "Implement backend and frontend business logic",
  },
  Others: {
    tools: ["VSCode/Cursor", "Git", "GitHub", "GitLab"],
    description: "Tools I use to develop and manage projects",
  },
} satisfies Record<string, Record<string, string | string[]>>;

export const ToolIconsAndDescriptions = {
  Redis: {
    icon: "/logos/redis.svg",
    description:
      "I use Redis as a database, cache, and message broker for rate limiting and performance optimization.",
  },
  FastAPI: {
    icon: "/logos/fastapi.png",
    description:
      "I use FastAPI to build high-performance Asynchronous RESTful APIs with real-time capabilities.",
  },
  Node: {
    icon: "/logos/nodejs.svg",
    description:
      "I use Node.js to build scalable server-side applications and APIs.",
  },
  PostgreSQL: {
    icon: "/logos/postgres.svg",
    description:
      "I use PostgreSQL for robust data storage with features like triggers and audit logging.",
  },
  Firebase: {
    icon: "/logos/firebase.svg",
    description:
      "I use Firebase and Firestore for real-time data management and cloud storage.",
  },
  React: {
    icon: "/logos/react.svg",
    description:
      "I use React to build interactive web dashboards and user interfaces.",
  },
  ReactNative: {
    icon: "/logos/react_native.svg",
    description:
      "I use React Native to build cross-platform mobile applications.",
  },
  Next: {
    icon: "/logos/nextjs.svg",
    description:
      "I use Next.js to build full-stack applications with App Router and Server Components.",
  },
  TailwindCSS: {
    icon: "/logos/tailwindcss.svg",
    description:
      "I use TailwindCSS for rapid UI development and responsive designs.",
  },
  HTML: {
    icon: "/logos/html.svg",
    description: "I use HTML to structure and present content on the web.",
  },
  CSS: {
    icon: "/logos/css.svg",
    description:
      "I use CSS to style the presentation of a document written in HTML.",
  },
  Docker: {
    icon: "/logos/docker.svg",
    description:
      "I use Docker to containerize and deploy applications with streamlined CI/CD.",
  },
  VSCode: {
    icon: "/logos/vscode.svg",
    description: "I use VS Code as my primary code editor.",
  },
} as const;
