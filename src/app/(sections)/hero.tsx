import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Layout from "@/components/layout";
import { TextLoop } from "@/components/ui/text-loop";

export default function Hero() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Layout id="home" addPadding={false}>
      <div className="relative min-h-[calc(100dvh-4rem)] bg-gradient-to-b from-background via-background to-background/90 text-foreground overflow-hidden">
        <main className="container flex items-center min-h-[calc(100dvh-4rem)] relative z-10">
          {/* Left side content */}
          <div className="flex-1 flex flex-col gap-6 py-20">
            <div className="flex flex-col gap-1">
              <h1 className="text-5xl font-bold mb-2 flex items-center">
                <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 text-transparent bg-clip-text">
                  Bereket Assefa
                </span>
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </h1>
              <TextLoop interval={3}>
                <p className="text-xl font-medium">Backend Engineer</p>
                <p className="text-xl font-medium">Frontend Engineer</p>
                <p className="text-xl font-medium">
                  Full Stack Software Engineer
                </p>
              </TextLoop>
              <p className="text-muted-foreground text-sm flex items-center mt-1">
                <Icons.mapPin className="w-4 h-4 mr-1" />
                Seoul, South Korea
              </p>
            </div>

            <p className="text-2xl max-w-xl">
              A motivated and dedicated software developer with a passion for
              creating innovative solutions to complex problems.
            </p>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/profile.jpeg"
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

            <div className="flex items-center gap-4">
              <Button
                variant="default"
                onClick={() => router.push("/resume.pdf")}
              >
                <Icons.fileText className="w-4 h-4 mr-2" />
                View Resume
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/#contact")}
              >
                <Icons.mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right side image */}
          <div className="flex-1 relative hidden lg:block">
            <div className="relative mx-auto w-[700px] h-[700px] group">
              {/* Decorative frames that follow the skew */}
              <div
                className="absolute inset-0 border-[3px] border-primary/20 rounded-2xl transform rotate-3
                transition-all duration-300 ease-in-out 
                [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] 
                group-hover:[clip-path:polygon(0_5%,_100%_0,_100%_95%,_0%_100%)]
                group-hover:scale-95"
              ></div>
              <div
                className="absolute inset-0 border-[3px] border-primary/30 rounded-2xl transform -rotate-2
                transition-all duration-300 ease-in-out 
                [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] 
                group-hover:[clip-path:polygon(0_5%,_100%_0,_100%_95%,_0%_100%)]
                group-hover:scale-95"
              ></div>

              {/* Main image with skew effect */}
              <div
                className="relative border-[3px] border-primary rounded-2xl overflow-hidden 
                transition-all duration-300 ease-in-out 
                [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] 
                group-hover:[clip-path:polygon(0_5%,_100%_0,_100%_95%,_0%_100%)]
                group-hover:scale-95"
              >
                <div className="group-hover:[&>img]:scale-125">
                  <Image
                    src="/coding_laptop.jpg"
                    alt="Hero Background"
                    className="rounded-xl transition-all duration-300 ease-in-out"
                    style={{ objectFit: "cover" }}
                    priority
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
