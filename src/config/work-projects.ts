interface WorkProject {
  period: string;
  duration: string;
  project: string;
  summary: string;
  description: string[];
}

const workProjects: WorkProject[] = [
  {
    period: "June 2024 - December 2024",
    duration: "7 months",
    project: "Laboratory Information Management System (LIMS)",
    summary:
      "Led the development of a Next.js dashboard application that transformed the bio team's workflow from manual Excel sheets to an automated system, significantly improving operational efficiency.",
    description: [
      "Maintained a Next.js dashboard web application using app router with server components and server actions, integrated with Firestore and Google APIs.",
      "Enhanced workflow automation for the bio team by transitioning from manually managed Excel sheets to a streamlined system.",
      "Managed Firestore collections and implemented complex business logic for sample management.",
      "Created and modified Excel sheets dynamically.",
      "Significantly improved operational efficiency and automated routine tasks for the bio team.",
    ],
  },
  {
    period: "May 2023 - May 2024",
    duration: "1 year",
    project: "Cogthera Backend",
    summary:
      "Involved in and implemented and maintained some backend with a Microservice architecture for the Cogthera (DiGA (Digital treatment and medical applications) mobile application.",
    description: [
      "Auth: Added audit logging using PostgreSQL triggers within OAuth 2.0-compatible authentication server.",
      "Core: Developed PDF report feature generating rich charts and statistics.",
      "Support: Built secure service aggregating real-time data using FastAPI and WebSockets.",
      "TTS: Implemented asynchronous text-to-speech service with batch request support.",
      "Push: Set up Firebase Cloud Messaging notification service.",
      "STT: Integrated German language model using VOSK, reducing latency by 50%.",
      "Self-Hosted Sentry: Deployed monitoring system using Docker Compose.",
    ],
  },
  {
    period: "August 2022 - March 2023",
    duration: "7 months",
    project: "Mobile Application & REST API",
    summary:
      "Developed a comprehensive healthcare solution including a React Native mobile app for Parkinson's disease testing, backed by a FastAPI server and React dashboard for data visualization.",
    description: [
      "Implemented and maintained a mobile application, REST API server, and dashboard web app.",
      "Developed React Native mobile application for Parkinson's disease testing.",
      "Built FastAPI-based server for data aggregation.",
      "Created React-based dashboard for data visualization.",
    ],
  },
];

export default workProjects;
