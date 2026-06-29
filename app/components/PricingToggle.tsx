'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PricingToggleProps {
  onToggle: (isYearly: boolean) => void;
}

export function PricingToggle({ onToggle }: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    const newValue = !isYearly;
    setIsYearly(newValue);
    onToggle(newValue);
  };

  return (
    <div className="flex justify-center items-center gap-6 mb-16">
      <span
        className={`text-lg font-semibold transition-colors ${
          !isYearly ? 'text-white' : 'text-gray-400'
        }`}
      >
        Monthly
      </span>

      <motion.button
        onClick={handleToggle}
        className={`relative inline-flex items-center h-10 w-20 rounded-full transition-colors ${
          isYearly ? 'bg-violet-600' : 'bg-gray-700'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="h-8 w-8 rounded-full bg-white shadow-lg"
          animate={{ x: isYearly ? 36 : 2 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />

        <span className="absolute left-0 right-0 text-center text-xs font-bold text-gray-900">
          {isYearly ? 'Yearly' : 'Monthly'}
        </span>
      </motion.button>

      <span
        className={`text-lg font-semibold transition-colors ${
          isYearly ? 'text-white' : 'text-gray-400'
        }`}
      >
        Yearly
      </span>

      {isYearly && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="ml-4 bg-gradient-to-r from-violet-600/80 to-purple-600/80 px-4 py-2 rounded-full text-sm font-semibold text-white"
        >
          Save 20%
        </motion.div>
      )}
    </div>
  );
}
