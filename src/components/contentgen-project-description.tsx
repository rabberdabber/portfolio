import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge variant="secondary" className="mr-2 mb-2">
      {children}
    </Badge>
  );
}

function ContentGenProjectDescription() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <Card className="border-none shadow-lg bg-gradient-to-r from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              Content Generation Platform
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              A sophisticated content generation platform leveraging modern
              cloud technologies and AI capabilities to provide automated
              content creation services.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Main Content */}
        <div className="grid gap-6">
          {/* Technical Highlights */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="auth"
              className="bg-background border rounded-lg mb-2"
            >
              <AccordionTrigger className="hover:no-underline px-4 text-primary">
                <div className="flex items-center gap-2">
                  <Icons.lock className="h-5 w-5" />
                  <span>Advanced Authentication & Security</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-2 px-4 pb-4 bg-background/80">
                <div className="pl-7 text-foreground">
                  <p className="mb-2">
                    • OAuth 2.0 compatible authentication system
                  </p>
                  <p className="font-medium mb-2">Planned Enhancement:</p>
                  <p className="pl-4">
                    • Redis-based rate limiting for DDoS protection
                  </p>
                  <p className="pl-4">• Intelligent request throttling</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="api"
              className="bg-background border rounded-lg mb-2"
            >
              <AccordionTrigger className="hover:no-underline px-4 text-primary">
                <div className="flex items-center gap-2">
                  <Icons.server className="h-5 w-5" />
                  <span>Modern API Architecture</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-2 px-4 pb-4 bg-background/80">
                <div className="pl-7 text-foreground">
                  <p>• Built with FastAPI</p>
                  <p>• RESTful API design following industry best practices</p>
                  <p>• OpenAPI/Swagger documentation</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="ai"
              className="bg-background border rounded-lg mb-2"
            >
              <AccordionTrigger className="hover:no-underline px-4 text-primary">
                <div className="flex items-center gap-2">
                  <Icons.brain className="h-5 w-5" />
                  <span>AI Integration & Content Generation</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-2 px-4 pb-4 bg-background/80">
                <div className="pl-7 text-foreground">
                  <p>• OpenAI GPT-4 API integration</p>
                  <p>• Custom structured output schema</p>
                  <p>• Intelligent content formatting</p>
                  <p>• Flux API implementation</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="cloud"
              className="bg-background border rounded-lg mb-2"
            >
              <AccordionTrigger className="hover:no-underline px-4 text-primary">
                <div className="flex items-center gap-2">
                  <Icons.cloud className="h-5 w-5" />
                  <span>Cloud Infrastructure & Storage</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 pt-2 px-4 pb-4 bg-background/80">
                <div className="pl-7 text-foreground">
                  <p>• S3-compatible object storage (MinIO)</p>
                  <p>• Efficient media asset management</p>
                  <p>• Cloud storage best practices</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Technical Skills */}
          <Card className="bg-background">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icons.terminal className="h-5 w-5" />
                <CardTitle>Technical Skills Demonstrated</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Backend Development</h3>
                  <div>
                    <TechBadge>Python</TechBadge>
                    <TechBadge>FastAPI</TechBadge>
                    <TechBadge>RESTful APIs</TechBadge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">Database & Cloud</h3>
                  <div>
                    <TechBadge>PostgreSQL</TechBadge>
                    <TechBadge>Redis</TechBadge>
                    <TechBadge>MinIO</TechBadge>
                    <TechBadge>S3</TechBadge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">DevOps & Architecture</h3>
                  <div>
                    <TechBadge>Docker</TechBadge>
                    <TechBadge>Microservices</TechBadge>
                    <TechBadge>Container Orchestration</TechBadge>
                    <TechBadge>Self-hosting</TechBadge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Value */}
          <Card className="bg-background">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icons.workflow className="h-5 w-5" />
                <CardTitle>Business Value</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5 text-foreground">
                <li>
                  Automated content generation reducing manual effort and costs
                </li>
                <li>Scalable architecture supporting business growth</li>
                <li>Enterprise-grade security protecting sensitive data</li>
                <li>
                  Cost-effective API usage through intelligent rate limiting
                </li>
                <li>Flexible deployment options with containerization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContentGenProjectDescription;
