interface WorkProject {
  period: string;
  duration: string;
  project: string;
  summary?: string;
  description?: string[];
  descriptionCount: number;
}

const workProjects: WorkProject[] = [
  {
    period: "June 2024 - December 2024",
    duration: "7 months",
    project: "lims",
    descriptionCount: 3,
  },
  {
    period: "May 2023 - May 2024",
    duration: "1 year",
    project: "cogthera_backend",
    descriptionCount: 7,
  },
  {
    period: "August 2022 - March 2023",
    duration: "7 months",
    project: "mobile_app",
    descriptionCount: 3,
  },
];

export default workProjects;
