"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroMotionProps {
  children: ReactNode;
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function HeroMotion({
  children,
}: HeroMotionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative overflow-hidden"
    >
      {children}
    </motion.section>
  );
}