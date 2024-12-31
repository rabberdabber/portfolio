interface Certification {
  id: number;
  name: string;
  date: string;
  instructor: string;
  imageUrl: string;
  tags: string[];
  websiteUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "Advanced React with TypeScript",
    date: "2024-08-25",
    instructor: "Matt Pocock",
    imageUrl: "/certifications/advanced-react-with-typescript.png",
    websiteUrl:
      "https://www.totaltypescript.com/workshops/advanced-react-with-typescript",
    tags: ["React", "TypeScript"],
  },
  {
    id: 2,
    name: "Zod Workshop",
    date: "2024-07-10",
    instructor: "Matt Pocock",
    imageUrl: "/certifications/zod.png",
    tags: ["typescript", "data validation"],
    websiteUrl: "https://www.totaltypescript.com/tutorials/zod",
  },
  {
    id: 3,
    name: "CSS for JavaScript Developers",
    date: "2024-06-01",
    instructor: "Josh Comeau",
    imageUrl: "/certifications/css_for_javascript.png",
    tags: ["React", "JavaScript"],
    websiteUrl: "https://css-for-js.dev/",
  },
  {
    id: 4,
    name: "The Joy of React",
    date: "2024-05-15",
    instructor: "Josh Comeau",
    imageUrl: "/certifications/joy_of_react.png",
    tags: ["React", "JavaScript"],
    websiteUrl: "https://www.joyofreact.com/",
  },
] as const satisfies Certification[];

export default certifications;
