import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function About() {
  const theme = useTheme();
  return (
    <Layout id="about">
      <div className="container mx-auto py-24 px-4 md:px-6 relative min-h-[calc(100dvh-4rem)] bg-gradient-to-b from-background via-background to-background/90 text-foreground overflow-hidden">
        {/* Decorative Frame - Adjusted positioning */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Corner */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/50" />
          {/* Top Right Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/50" />
          {/* Bottom Left Corner */}
          <div className="absolute bottom-4 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/50" />
          {/* Bottom Right Corner */}
          <div className="absolute bottom-4 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/50" />
        </div>

        {/* Main Content - Adjusted padding top */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center relative z-10 pt-16">
          <div className="flex justify-center lg:justify-end">
            <div className="relative size-64 md:size-80">
              <Image
                src="/profile.png"
                alt="Profile photo"
                fill
                className="object-cover rounded-full border-4 border-background shadow-xl"
                priority
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Full Stack Engineer
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                I&apos;m a passionate software developer specializing in
                full-cycle web development. From product conceptualization to
                deployment, I focus on building scalable applications that solve
                real business problems using cutting-edge technologies.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Curious and good problem solving skills. Believe I can be an
                asset to any team building software.
              </p>
            </div>
            <Card className="p-6 bg-muted/50">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Quick Facts</h2>
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start gap-2">
                    <span className="font-medium min-w-24">Experience:</span>
                    <span>2+ Years</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium min-w-24">Education:</span>
                    <span>
                      BS Computer Science and Electrical Engineering from{" "}
                      <Link
                        href="https://www.topuniversities.com/universities/kaist-korea-advanced-institute-science-technology"
                        className="text-primary underline hover:text-primary/80"
                      >
                        KAIST
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            <Button className="gap-2">
              <Icons.download className="size-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
