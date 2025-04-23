export interface Project {
  key: string;
  title: string;
  period: string;
  duration: string;
  summary: string;
  description: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  title: string;
  period: string;
  location: string;
  industry: string;
}

export const workProjects: Project[] = [
  {
    key: "lims",
    title: "projects.lims.title",
    period: "June 2024 - December 2024",
    duration: "7 months",
    summary: "projects.lims.summary",
    description: [
      "projects.lims.description.0",
      "projects.lims.description.1",
      "projects.lims.description.2",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "React Query",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    key: "cogthera_backend",
    title: "projects.cogthera_backend.title",
    period: "January 2024 - May 2024",
    duration: "5 months",
    summary: "projects.cogthera_backend.summary",
    description: [
      "projects.cogthera_backend.description.0",
      "projects.cogthera_backend.description.1",
      "projects.cogthera_backend.description.2",
    ],
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
    ],
  },
  {
    key: "mobile_app",
    title: "projects.mobile_app.title",
    period: "September 2023 - December 2023",
    duration: "4 months",
    summary: "projects.mobile_app.summary",
    description: [
      "projects.mobile_app.description.0",
      "projects.mobile_app.description.1",
      "projects.mobile_app.description.2",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
];

// export const experiences: Experience[] = [
//   {
//     company: "emocog",
//     title: "company.emocog.title",
//     period: "Aug 2022 - Dec 2024",
//     location: "Remote",
//     industry: "Technology",
//   },
// ];
