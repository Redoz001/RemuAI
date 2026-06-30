'use client';

import { motion } from 'framer-motion';

interface ServiceFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  'All',
  'Websites',
  'Web Apps',
  'AI Chatbots',
  'Automation',
  'Custom Software',
];

export default function ServiceFilter({
  activeFilter,
  onFilterChange,
}: ServiceFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <motion.button
            key={filter}
            onClick={() => onFilterChange(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative
              px-6
              py-3
              rounded-full
              font-semibold
              transition-all
              duration-300
              border
              ${
                active
                  ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white'
              }
            `}
          >
            {active && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 rounded-full bg-violet-600 -z-10"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            {filter}
          </motion.button>
        );
      })}
    </div>
  );
}