import { type Experience } from "@/types/experience";

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Emocog",
    companyUrl: "https://www.emocog.com/en",
    companyMeta: {
      intro:
        "a software as a medical device company that develops digital healthcare solutions",
      location: "Seoul, South Korea",
      industry: "Digital therapeutics",
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
