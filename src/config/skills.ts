export const skills = {
  Backend: [
    ["FastAPI", "Node.js", "PostgreSQL", "Firebase", "Redis"],
    "implement RESTful or GRPC APIs and manage databases",
  ],
  Frontend: [
    ["React", "React Native", "Next.js", "TailwindCSS", "HTML", "CSS"],
    "implement UI components",
  ],
  DevOps: [["Docker", "Kubernetes"], "manage infrastructure and deployment"],
  Languages: [
    ["Typescript", "Python", "C/C++"],
    "implement backend and frontend logic",
  ],
  Tools: [
    ["Figma", "VS Code", "Git", "GitHub", "GitLab"],
    "design and develop UI components",
  ],
} satisfies Record<string, [string[], string]>;
