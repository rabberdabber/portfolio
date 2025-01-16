"use client";
import React from "react";
import Image from "next/image";
import SkillCards from "@/components/skill-cards";
import Layout from "@/components/layout";
import Marquee from "@/components/marquee";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TOOL_ICONS_AND_DESCRIPTIONS } from "@/config/skills";
import { motion } from "framer-motion";
import ImagesWithBlur from "@/components/images-with-blur";

export default function Skills() {
  return (
    <Layout id="skills">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Skills and Tools
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of my skills and tools in software engineering I am
          proficient in. I am open to learn new technologies and tools.
        </p>
      </motion.div>
      <SkillCards />
      <div className="w-full py-12 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

          <Marquee className="py-4">
            {Object.entries(TOOL_ICONS_AND_DESCRIPTIONS).map(
              ([tool, { icon, description }]) => (
                <Card
                  key={tool}
                  className="mx-4 w-[300px] bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 border-primary/10 hover:border-primary/20"
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 p-3 ring-1 ring-primary/20">
                      <Image
                        src={icon}
                        alt={`${tool} icon`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {tool}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </Marquee>
        </div>
      </div>
    </Layout>
  );
}
