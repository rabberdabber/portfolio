export interface CompanyMeta {
  intro: string;
  location: string;
  industry: string;
}

export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  companyMeta: {
    intro: string;
    location: string;
    industry: string;
  };
  startDate: string;
  endDate: string;
  companyLogo: string;
  certificate: string;
  skills: string[];
}
