"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextEffectProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function TextEffect({
  children,
  delay = 0,
  className,
}: TextEffectProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("text-base leading-relaxed", className)}
    >
      {children}
    </motion.p>
  );
}
