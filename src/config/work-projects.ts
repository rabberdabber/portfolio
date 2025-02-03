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
      "Maintained and optimized a {Next.js} dashboard application (App Router with Server Components/Actions), integrating {Firestore} and {Google APIs} for data management and secure cloud storage.",
      "Streamlined laboratory workflows by replacing manual Excel-based processes with an automated LIMS, improving efficiency for the bio team.",
      "Orchestrated complex business logic around {Firestore} collections, ensuring robust sample tracking and seamless user experiences.",
    ],
  },
  {
    period: "May 2023 - May 2024",
    duration: "1 year",
    project: "Cogthera Backend",
    summary:
      "Involved in and implemented and maintained some backend with a Microservice architecture for the Cogthera (DiGA, Digital Health Applications) mobile application.",
    description: [
      "Collaborated with Emocog's German subsidiary to design a {microservice-based backend} architecture and ensure {ISO 27001} compliance.",
      "Implemented audit logging using {PostgreSQL triggers} and integrated an {OAuth 2.0}-compatible authentication server for secure user management.",
      "Researched and deployed a custom {German language model} using the open-source {VOSK} toolkit, reducing speech-to-text latency by 50%—vital for real-time training feedback.",
      "Enhanced the {VOSK + gRPC}-based STT system to improve efficiency, speed, and accuracy by adapting model vocabularies via a dedicated language server.",
      "Built a secure aggregation service using {FastAPI} and {WebSockets} for real-time dashboard data.",
      "Self-hosted {Sentry} for error monitoring, providing timely incident detection and streamlined debugging processes.",
      "Led the development of an asynchronous Text-To-Speech (TTS) server, leveraging audio caching in {AWS S3}-compatible storage (Scaleway) to optimize performance and cost.",
    ],
  },
  {
    period: "August 2022 - March 2023",
    duration: "7 months",
    project: "Mobile Application & REST API",
    summary:
      "Developed a comprehensive healthcare solution including a React Native mobile app for Parkinson's disease testing, backed by a FastAPI server and React dashboard for data visualization.",
    description: [
      "Developed and maintained a cross-platform mobile application using {React Native}, implementing features such as swipe, touch, and speech tests for Parkinson's disease assessment.",
      "Built and optimized a {RESTful API} with {FastAPI}, ensuring high performance and scalability.",
      "Created an interactive web dashboard with {React}, enabling real-time data visualization and user-friendly analytics.",
    ],
  },
];

export default workProjects;
