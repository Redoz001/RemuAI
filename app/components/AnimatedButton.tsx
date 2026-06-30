'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({
  text,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  loading = false,
  disabled = false,
  type = 'button',
}: AnimatedButtonProps) {
  const variants = {
    primary:
      'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/20 hover:shadow-violet-500/40',

    secondary:
      'bg-white text-black hover:bg-gray-100 shadow-lg',

    outline:
      'border border-white/20 text-white hover:border-violet-500 hover:bg-violet-500/10',

    ghost:
      'text-white hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.04 } : undefined}
      whileTap={!isDisabled ? { scale: 0.96 } : undefined}
      transition={{ duration: 0.2 }}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        font-semibold
        transition-all
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-violet-500
        focus:ring-offset-2
        focus:ring-offset-black
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-100"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>

          Loading...
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </motion.button>
  );
}