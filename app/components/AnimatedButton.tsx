'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AnimatedButton({
  text,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const variants = {
    primary: 'bg-violet-600 hover:bg-violet-500 text-white',
    secondary: 'bg-white text-black hover:bg-gray-100',
    outline: 'border border-white/20 text-white hover:border-violet-500/50 hover:bg-violet-500/5',
    ghost: 'text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} rounded-lg font-semibold transition-all ${className}`}
    >
      {text}
    </motion.button>
  );
}
