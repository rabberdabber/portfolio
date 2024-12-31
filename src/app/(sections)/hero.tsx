import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="max-h-[calc(100dvh-4rem)] bg-gradient-to-b from-background via-background to-background/90 text-foreground relative overflow-hidden">
      <main className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4 gap-4">
        {/* <h1 className="text-6xl font-bold mb-4 text-center max-w-4xl">
          <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 text-transparent bg-clip-text">
            Stop struggling with talent.
          </span>
        </h1> */}
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
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
          <p className="text-muted-foreground flex items-center">
            <Icons.mapPin className="w-4 h-4 mr-1" />
            Seoul, South Korea
          </p>
        </div>
        <p className="text-2xl mb-8 text-center max-w-2xl">
          a motivated and dedicated software developer with a passion for
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
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button variant="default" onClick={() => router.push("/resume.pdf")}>
            <Icons.fileText className="w-4 h-4 mr-2" />
            View Resume
          </Button>
          <Button variant="outline" onClick={() => router.push("/#contact")}>
            <Icons.mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 270"
          className="w-full h-auto text-muted/30"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
