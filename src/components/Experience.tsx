import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Experience as ExperienceType, Project } from "@/config/experience";
import { workProjects, experiences } from "@/config/experience";
import { Icons } from "@/components/icons";

export default function Experience() {
  const t = useTranslations();

  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t("experience.title")}</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            {t("experience.company.title")}
          </h3>
          {experiences.map((experience: ExperienceType) => (
            <Card key={experience.company} className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">{t(experience.title)}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icons.briefcaseIcon className="h-4 w-4" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icons.calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icons.mapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("experience.company.intro")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">
            {t("experience.projects.title")}
          </h3>
          {workProjects.map((project: Project) => (
            <Card key={project.key} className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {t(project.title)}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Icons.calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    {t("experience.projects.badge")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t(project.summary)}
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  {project.description.map((key, index) => (
                    <li key={index} className="text-muted-foreground">
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
