import React from "react";
import MotionWrap from "@/components/motion-wrap";
import Image from "next/image";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import RevealText from "@/components/text-reveal";
import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout>
      <MotionWrap className="w-full py-24 lg:py-32 relative" id="about">
        <div className="grid place-content-center space-y-4 px-4 md:px-6 lg:space-y-10">
          {/* <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                About
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Me
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here&apos;s where I share my journey through tech, highlighting the
            experiences and passions that drive my innovative pursuits.
          </p>
        </div> */}
          <div className="space-y-4">
            <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <RevealText>
                I am a passionate and creative Web Developer with a love for
                beautiful and functional websites. I have experience working
                with a variety of web technologies and frameworks and I am
                always eager to learn new things and take on new challenges.
              </RevealText>
            </p>
            <Button asChild>
              <Link href="resume.pdf" target="_blank">
                View Resume <ArrowUpRightIcon className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
        {/* <div className="absolute top-4 left-0 right-0 rotate-180">
        <svg
          className="w-full h-auto text-muted/30"
          width="1001"
          height="51"
          viewBox="0 0 1001 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M276.335 23.0009C167.075 22.9529 0.5 50.5664 0.5 50.5664H1000.5C1000.5 50.5664 891.737 8.51346 812.228 1.78471C697.762 -7.90236 641.186 43.2892 525.612 45.6108C427.173 47.5882 374.831 23.0442 276.335 23.0009Z"
            fill="currentColor"
            fillOpacity="1"
          />
        </svg>
      </div> */}
      </MotionWrap>
    </Layout>
  );
}
