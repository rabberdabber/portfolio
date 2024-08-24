import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-dvh w-dvw bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Bereket Assefa is my name
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Coding is my{" "}
          <span className="underline underline-offset-4">game</span>
        </p>
      </div>
      <BackgroundBeams />
      {/* <Image className="absolute left-0 right-0 bottom-0 w-full" src="/swoop.svg" alt="" width="200" height="200" /> */}
    </div>
  );
}
