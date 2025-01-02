interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: Tag[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectCardProps[] = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online store operations with real-time analytics and inventory management.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "TypeScript", color: "bg-indigo-100 text-indigo-800" },
      { name: "Tailwind", color: "bg-teal-100 text-teal-800" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management platform with real-time updates and team collaboration features.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tags: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "MongoDB", color: "bg-yellow-100 text-yellow-800" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Forecast App",
    description:
      "A modern weather application with detailed forecasts, interactive maps, and location-based services.",
    imageUrl:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    tags: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "APIs", color: "bg-purple-100 text-purple-800" },
      { name: "CSS3", color: "bg-pink-100 text-pink-800" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
