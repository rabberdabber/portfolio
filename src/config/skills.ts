export const SKILLS = {
  Backend: {
    tools: ["FastAPI", "Node.js", "PostgreSQL", "Firebase", "Redis"],
    description: "implement RESTful or GRPC APIs and manage databases",
  },
  Frontend: {
    tools: ["React", "React Native", "Next.js", "TailwindCSS", "HTML", "CSS"],
    description: "implement UI components",
  },
  DevOps: {
    tools: ["Docker", "Kubernetes"],
    description: "manage infrastructure and deployment",
  },
  Languages: {
    tools: ["Typescript", "Python", "C/C++"],
    description: "implement backend and frontend logic",
  },
  Others: {
    tools: ["Figma", "VS Code", "Git", "GitHub", "GitLab", "Cursor"],
    description: "design and develop UI components",
  },
} satisfies Record<string, Record<string, string | string[]>>;

export const TOOL_ICONS_AND_DESCRIPTIONS = {
  Redis: {
    icon: "/logos/redis.svg",
    description: "I use Redis as a database, cache, and message broker.",
  },
  FastAPI: {
    icon: "/logos/fastapi.png",
    description:
      "I use FastAPI to build Asynchronous RESTful APIs and manage databases.",
  },
  Node: {
    icon: "/logos/nodejs.svg",
    description:
      "I use Node.js to build Asynchronous RESTful APIs and manage databases.",
  },
  PostgreSQL: {
    icon: "/logos/postgres.svg",
    description: "I use PostgreSQL to manage databases.",
  },
  Firebase: {
    icon: "/logos/firebase.svg",
    description: "I use Firebase to build mobile and web applications.",
  },
  React: {
    icon: "/logos/react.svg",
    description: "I use React to build user interfaces.",
  },
  ReactNative: {
    icon: "/logos/react_native.svg",
    description: "I use React Native to build native mobile applications.",
  },
  Next: {
    icon: "/logos/nextjs.svg",
    description:
      "I use Next.js to build server-side rendered React applications.",
  },
  TailwindCSS: {
    icon: "/logos/tailwindcss.svg",
    description:
      "I use TailwindCSS to build custom designs quickly and easily.",
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
      "I use Docker to build, ship, and run applications in containers.",
  },
  VSCode: {
    icon: "/logos/vscode.svg",
    description: "I use VS Code as my primary code editor.",
  },
};
