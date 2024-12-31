type NavItem = {
  title: string;
  href: string;
};

const mainNav = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "about",
    href: "/#about",
  },
  {
    title: "experience",
    href: "/#experience",
  },
  {
    title: "projects",
    href: "/#projects",
  },
  {
    title: "skills",
    href: "/#skills",
  },
  {
    title: "certifications",
    href: "/#certifications",
  },
  {
    title: "contact",
    href: "/#contact",
  },
] as const satisfies NavItem[];

export const siteConfig = {
  name: "Bake's portfolio",
  description: "my portfolio website.",
  mainNav,
  links: {
    linkedin: "https://www.linkedin.com/in/bereket-assefa-251a79178/",
    github: "https://github.com/rabberdabber",
  },
} satisfies Record<string, any>;

export type SiteConfig = typeof siteConfig;