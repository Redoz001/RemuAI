'use client';

import { motion } from 'framer-motion';
import type { ReactNode, HTMLAttributes } from 'react';

interface AnimatedCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  variant?: 'default' | 'highlight' | 'dark' | 'glass';
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  variant = 'default',
  ...props
}: AnimatedCardProps) {
  const variants = {
    default:
      'border-white/10 bg-white/[0.04] hover:border-violet-500/40 hover:bg-white/[0.06]',

    highlight:
      'border-violet-500/30 bg-gradient-to-br from-violet-500/15 via-white/[0.04] to-transparent hover:border-violet-400/60',

    dark:
      'border-white/10 bg-black/40 hover:border-violet-500/40',

    glass:
      'border-white/10 bg-white/[0.05] backdrop-blur-xl hover:border-cyan-400/40',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.015,
            }
          : undefined
      }
      className={`
        relative overflow-hidden rounded-3xl border
        backdrop-blur-md
        transition-all duration-300
        hover:shadow-2xl hover:shadow-violet-600/10
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300
          bg-gradient-to-br from-white/10 via-transparent to-transparent
          group-hover:opacity-100
        "
      />

      {children}
    </motion.div>
  );
}