"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function Home() {
  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center">
        <Avatar className="h-20 w-20 absolute top-2 right-2">
         <AvatarImage src="/avatar.png" />
         <AvatarFallback>BA</AvatarFallback>
        </Avatar>
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Bereket Assefa is my name
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Coding is my <span className="underline underline-offset-4">game</span>
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
