export const Skills = {
  Backend: {
    tools: ["FastAPI", "Node.js", "PostgreSQL", "Firebase", "Redis"],
    description: "skills.categories.Backend.description",
  },
  Frontend: {
    tools: ["React", "React Native", "Next.js", "TailwindCSS", "HTML", "CSS"],
    description: "skills.categories.Frontend.description",
  },
  DevOps: {
    tools: ["Docker", "Docker Compose", "Kubernetes"],
    description: "skills.categories.DevOps.description",
  },
  Languages: {
    tools: ["JavaScript", "TypeScript", "Python", "C/C++"],
    description: "skills.categories.Languages.description",
  },
  Productivity: {
    tools: ["Cursor", "Bolt.new"],
    description: "skills.categories.Productivity.description",
  },
  Others: {
    tools: ["VSCode", "Git", "GitHub", "GitLab"],
    description: "skills.categories.Others.description",
  },
} satisfies Record<string, Record<string, string | string[]>>;

export const ToolIconsAndDescriptions = {
  Redis: {
    icon: "/logos/redis.svg",
    description: "skills.tools.Redis.description",
  },
  FastAPI: {
    icon: "/logos/fastapi.png",
    description: "skills.tools.FastAPI.description",
  },
  Node: {
    icon: "/logos/nodejs.svg",
    description: "skills.tools.Node.description",
  },
  PostgreSQL: {
    icon: "/logos/postgres.svg",
    description: "skills.tools.PostgreSQL.description",
  },
  Firebase: {
    icon: "/logos/firebase.svg",
    description: "skills.tools.Firebase.description",
  },
  React: {
    icon: "/logos/react.svg",
    description: "skills.tools.React.description",
  },
  ReactNative: {
    icon: "/logos/react_native.svg",
    description: "skills.tools.ReactNative.description",
  },
  Next: {
    icon: "/logos/nextjs.svg",
    description: "skills.tools.Next.description",
  },
  TailwindCSS: {
    icon: "/logos/tailwindcss.svg",
    description: "skills.tools.TailwindCSS.description",
  },
  HTML: {
    icon: "/logos/html.svg",
    description: "skills.tools.HTML.description",
  },
  CSS: {
    icon: "/logos/css.svg",
    description: "skills.tools.CSS.description",
  },
  Docker: {
    icon: "/logos/docker.svg",
    description: "skills.tools.Docker.description",
  },
  VSCode: {
    icon: "/logos/vscode.svg",
    description: "skills.tools.VSCode.description",
  },
} as const;
