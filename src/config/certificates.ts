interface Certification {
  name: string;
  date: string;
  instructor: string;
  imageUrl: string;
  tags: string[];
  websiteUrl: string;
}

const unsortedCertifications: Certification[] = [
  {
    name: "Database Design and Basic SQL in PostgreSQL",
    date: "2024-12-10",
    instructor: "Charles Russell Severance",
    imageUrl: "/certifications/db_design_and_basic_sql.jpeg",
    websiteUrl: "https://www.coursera.org/learn/database-design-postgresql",
    tags: ["PostgreSQL", "Database Design"],
  },
  {
    name: "CSS for JavaScript Developers",
    date: "2024-09-03",
    instructor: "Josh Comeau",
    imageUrl: "/certifications/css_for_javascript.png",
    tags: ["React", "JavaScript"],
    websiteUrl: "https://css-for-js.dev/",
  },
  {
    name: "The Joy of React",
    date: "2024-09-03",
    instructor: "Josh Comeau",
    imageUrl: "/certifications/joy_of_react.png",
    tags: ["React", "JavaScript"],
    websiteUrl: "https://www.joyofreact.com/",
  },
  {
    name: "Advanced React with TypeScript",
    date: "2024-08-25",
    instructor: "Matt Pocock",
    imageUrl: "/certifications/advanced-react-with-typescript.png",
    websiteUrl:
      "https://www.totaltypescript.com/workshops/advanced-react-with-typescript",
    tags: ["React", "TypeScript"],
  },
  {
    name: "Zod Workshop",
    date: "2024-07-10",
    instructor: "Matt Pocock",
    imageUrl: "/certifications/zod.png",
    tags: ["typescript", "data validation"],
    websiteUrl: "https://www.totaltypescript.com/tutorials/zod",
  },
] as const;

const certifications = [...unsortedCertifications].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default certifications;
