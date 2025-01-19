"use client";

import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { TextEffect } from "@/components/ui/text-effect";
import ImagesWithBlur from "@/components/images-with-blur";

export default function Hero() {
  return (
    <Layout id="home" addPadding={false}>
      <div className="relative overflow-hidden min-h-screen w-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-primary/5 z-0 " />

        {/* Radial gradient - made more subtle */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_60%)] z-0" />

        <main className="grid grid-cols-1 pt-8 lg:grid-cols-2 lg:pt-0 gap-8 px-4 md:px-6 items-center justify-center relative z-10 min-h-screen w-screen">
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
                Hello there{" "}
                <span className="animate-wave origin-[70%_70%] inline-block">
                  👋
                </span>
                , I&apos;m <span className="font-bold">Bereket</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold tracking-tight leading-6 sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 line"
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
              className="flex items-center space-x-4 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-sm"
            >
              <div className="relative">
                <ImagesWithBlur
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
                  className="backdrop-blur-sm bg-background/80 shadow-sm hover:bg-background/90"
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
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent z-10" />
              <ImagesWithBlur
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
