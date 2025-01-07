import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import StaggeredLetter from "@/components/ui/staggered-letter";
import DiscloseImage from "@/components/ui/disclose-image";

export default function Hero() {
  return (
    <Layout id="home" addPadding={false}>
      <div className="relative min-h-[calc(100dvh-4rem)] bg-gradient-to-b from-background via-background to-background/90 text-foreground overflow-hidden">
        <main className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100dvh-4rem)] relative z-10">
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
              <div className="space-y-2">
                <StaggeredLetter text="Full Stack Software Engineer" />
              </div>
              <p className="text-lg text-muted-foreground md:text-xl text-center">
                Transforming ideas into full-stack solutions with a focus on
                scalability, clean architecture, and exceptional user
                experiences.
              </p>
            </motion.div>
            <p className="text-muted-foreground text-sm flex items-center mt-1">
              <Icons.mapPin className="w-4 h-4 mr-1" />
              Seoul, South Korea
            </p>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/profile.png"
                  alt="Author"
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              </div>
              <p className="text-lg flex items-center">
                Open to work
                <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/#about">
                <Button size="lg" className="gap-2">
                  Learn More <Icons.arrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="/#projects">
                <Button variant="outline" size="lg">
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right side image */}
          <div className="relative mx-auto w-full max-w-[700px] aspect-square">
            {/* Main image with skew effect */}
            <DiscloseImage
              src="/coding_laptop.jpeg"
              alt="Hero Background"
              className="rounded-xl transition-all duration-300 ease-in-out"
              style={{ objectFit: "contain" }}
              width={700}
              height={700}
              priority
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
