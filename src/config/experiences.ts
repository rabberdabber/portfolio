import { Experience } from "@/types/experience";

const experiences: Experience[] = [
  {
    title: "company.title",
    company: "company.name",
    companyUrl: "https://www.emocog.com/en",
    companyMeta: {
      intro: "company.intro",
      location: "company.location",
      industry: "company.industry",
    },
    startDate: "2022-08-22",
    endDate: "2024-12-31",
    companyLogo: "/emocog_logo.png",
    certificate: "/career_certificate.pdf",
    skills: [
      "REST-APIs",
      "Responsive-UI",
      "Self-Hosting",
      "SQL",
      "NoSQL",
      "Microservices",
      "Unit-Testing",
      "DevOps",
    ],
  },
];

export default experiences;
