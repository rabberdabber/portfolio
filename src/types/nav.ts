import { SiteConfig } from "@/config/site";
export interface NavItem {
  title: string;
  href?: string;
  disabled: boolean;
  external?: boolean;
}

export type Section = SiteConfig["mainNav"][number]["title"];
