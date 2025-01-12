"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { useMediaQuery, breakpoints } from "@/hooks/useMediaQuery";
import { TextEffect } from "@/components/ui/text-effect";

export default function Hero() {
  const isMobile = !useMediaQuery(breakpoints.md);

  return (
    <Layout id="home" addPadding={false}>
      <div className="relative min-h-[calc(100dvh-4rem)] overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10 z-0" />

        {/* Radial gradient for added depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_65%)] z-0" />

        <main className="container grid grid-cols-1 pt-8 lg:grid-cols-2 lg:pt-0 gap-8 items-center justify-center min-h-[calc(100dvh-4rem)] relative z-10">
          {/* Left side content */}
          <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-2xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 w-full flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground md:text-2xl"
              >
                Hi, I&apos;m Bereket
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              >
                Full Stack Software Engineer
              </motion.h1>
              <TextEffect className="text-lg text-muted-foreground md:text-xl text-center max-w-prose">
                Transforming ideas into full-stack solutions with a focus on
                scalability, clean architecture, and exceptional user
                experiences.
              </TextEffect>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-2 text-muted-foreground text-sm"
            >
              <Icons.mapPin className="w-4 h-4" />
              <span>Seoul, South Korea</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-4 bg-background/50 backdrop-blur-sm p-3 rounded-full shadow-lg"
            >
              <div className="relative">
                <Image
                  src="/profile.png"
                  alt="Author"
                  className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                  width={48}
                  height={48}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-background animate-pulse"></span>
              </div>
              <p className="text-lg flex items-center">
                Open to work
                <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/#about">
                <Button size="lg" className="gap-2 shadow-lg">
                  Learn More <Icons.arrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="/#projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="backdrop-blur-sm bg-background/50 shadow-lg hover:bg-background/80"
                >
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right side image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative mx-auto w-full flex items-center justify-center"
          >
            <AspectRatio
              ratio={12 / 9}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10" />
              <Image
                src="/coding_laptop.jpeg"
                alt="Hero Background"
                className="object-cover transition-transform duration-700 hover:scale-105"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </AspectRatio>
          </motion.div>
        </main>
      </div>
    </Layout>
  );
}
