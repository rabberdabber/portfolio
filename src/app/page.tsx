"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <Avatar className="h-20 w-20">
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Bereket Assefa</span> is my name
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Coding is my <span className="underline underline-offset-4">game</span>
      </p>
    </div>
  );
}
