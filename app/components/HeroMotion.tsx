"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
}

export default function HeroMotion({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 40,
  x = 0,
}: HeroMotionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
}