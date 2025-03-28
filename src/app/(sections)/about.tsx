"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/layout";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { TextEffect } from "@/components/ui/text-effect";
import ImagesWithBlur from "@/components/images-with-blur";
import { motion, useInView } from "framer-motion";
import { downloadFile } from "@/lib/utils";
import { useAnimation } from "framer-motion";
import { COURSEWORK } from "@/config/education";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Layout id="about">
      <div
        ref={ref}
        className="relative min-h-[calc(100dvh-4rem)] bg-gradient-to-b from-background via-background to-background/90 pt-12"
      >
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end lg:sticky lg:top-24"
            >
              <div className="relative size-64 md:size-80">
                {/* Simple Frame */}
                <div className="absolute -inset-6 rounded-[2rem]" />

                {/* Corner Accents */}
                <div className="absolute -top-4 -left-4 size-8 border-t-2 border-l-2 border-primary/30 rounded-tl-xl" />
                <div className="absolute -top-4 -right-4 size-8 border-t-2 border-r-2 border-primary/30 rounded-tr-xl" />
                <div className="absolute -bottom-4 -left-4 size-8 border-b-2 border-l-2 border-primary/30 rounded-bl-xl" />
                <div className="absolute -bottom-4 -right-4 size-8 border-b-2 border-r-2 border-primary/30 rounded-br-xl" />

                {/* Profile Image */}
                <div className="relative size-full overflow-hidden rounded-full border-2 border-primary/20">
                  <ImagesWithBlur
                    src="/profile.jpg"
                    alt="Profile photo"
                    fill
                    className="object-cover object-top transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="space-y-3 -mt-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground font-medium">
                  Full Stack Engineer
                </p>
              </div>

              {/* Description */}
              <div className="space-y-6 text-lg leading-relaxed">
                <TextEffect className="text-muted-foreground/90">
                  I&apos;m a passionate software developer specializing in
                  full-cycle web development. From product conceptualization to
                  deployment, I focus on building scalable applications that
                  solve real business problems using cutting-edge technologies.
                </TextEffect>
                <TextEffect delay={3} className="text-muted-foreground/90">
                  Curious and good problem solving skills. Believe I can be an
                  asset to any team building software.
                </TextEffect>
              </div>

              {/* Quick Facts Card */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-primary/10 shadow-xl">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Quick Facts
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Icons.user className="size-5 text-primary/70" />
                        <span className="font-medium text-primary/80">
                          Nickname
                        </span>
                      </div>
                      <p className="text-muted-foreground pl-8">Bake</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Icons.calendar className="size-5 text-primary/70" />
                        <span className="font-medium text-primary/80">Age</span>
                      </div>
                      <p className="text-muted-foreground pl-8">27</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Icons.briefcase className="size-5 text-primary/70" />
                        <span className="font-medium text-primary/80">
                          Experience
                        </span>
                      </div>
                      <p className="text-muted-foreground pl-8">
                        2+ Years as a Software Engineer
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Icons.languages className="size-5 text-primary/70" />
                        <span className="font-medium text-primary/80">
                          Speaks
                        </span>
                      </div>
                      <p className="text-muted-foreground pl-8">
                        English, Amharic, Beginner Korean
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Icons.hobby className="size-5 text-primary/70" />
                        <span className="font-medium text-primary/80">
                          Hobbies
                        </span>
                      </div>
                      <p className="text-muted-foreground pl-8">
                        Reading articles, watching youtube, and of course
                        building software
                      </p>
                    </div>

                    <div className="sm:col-span-2 xl:col-span-3 space-y-2">
                      <div className="flex items-center gap-3">
                        <Icons.graduationCap className="size-5 text-primary/70" />
                        <span className="font-medium text-primary/80">
                          Education
                        </span>
                      </div>
                      <div className="pl-8 space-y-4">
                        <div className="space-y-2">
                          <p className="text-muted-foreground">
                            BS Computer Science and Electrical Engineering from{" "}
                            <Link
                              href="https://www.topuniversities.com/universities/kaist-korea-advanced-institute-science-technology"
                              className="text-primary underline hover:text-primary/80 transition-colors duration-200"
                            >
                              KAIST
                            </Link>
                          </p>
                          <div className="space-y-1.5">
                            <p className="text-sm text-muted-foreground/90">
                              <span className="inline-flex items-center gap-1.5">
                                <Icons.graduationCap className="size-3.5 text-primary/60" />
                                Full-fledged scholarship recipient
                              </span>
                            </p>
                            <p className="text-sm text-muted-foreground/90">
                              <span className="inline-flex items-center gap-1.5">
                                <Icons.briefcase className="size-3.5 text-primary/60" />
                                Ranked #53 in QS World University Rankings 2025
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* Coursework */}
                        <div className="space-y-4">
                          {COURSEWORK.map((category, index) => (
                            <div key={index} className="space-y-2">
                              <h3 className="font-medium text-primary/80 flex items-center gap-2">
                                <Icons.book className="size-4 text-primary/60" />
                                {category.category}
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-6">
                                {category.courses.map((course, courseIndex) => (
                                  <p
                                    key={courseIndex}
                                    className="text-sm text-muted-foreground/90 flex items-center gap-1.5"
                                  >
                                    <Icons.check className="size-3.5 text-primary/50" />
                                    {course}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              {/* Download Button */}
              <Button
                onClick={() => downloadFile("pdf", "/Bake_Resume.pdf")}
                className="group px-6 py-2 text-sm font-medium"
                variant="default"
              >
                <Icons.download className="mr-2 size-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
