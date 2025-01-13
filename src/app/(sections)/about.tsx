import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { TextEffect } from "@/components/ui/text-effect";

export default function About() {
  return (
    <Layout id="about">
      <div className="container mx-auto py-24 px-4 md:px-6 relative min-h-[calc(100dvh-4rem)] bg-gradient-to-b from-background via-background to-background/90 text-foreground overflow-hidden">
        {/* Main Content - Adjusted padding top */}
        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16 items-center justify-center relative z-10 pt-16">
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
          <div className="space-y-6 flex flex-col items-center justify-center">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Full Stack Engineer
              </p>
            </div>
            <div className="space-y-4 text-center">
              <TextEffect className="text-gray-500 dark:text-gray-400">
                I&apos;m a passionate software developer specializing in
                full-cycle web development. From product conceptualization to
                deployment, I focus on building scalable applications that solve
                real business problems using cutting-edge technologies.
              </TextEffect>
              <TextEffect
                delay={3}
                className="text-gray-500 dark:text-gray-400"
              >
                Curious and good problem solving skills. Believe I can be an
                asset to any team building software.
              </TextEffect>
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
                        className="text-primary underline hover:text-primary/80 italic"
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
