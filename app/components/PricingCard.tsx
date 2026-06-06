'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { AnimatedButton } from './AnimatedButton';

interface PricingCardProps {
  tier: 'starter' | 'pro' | 'enterprise';
  name: string;
  description: string;
  isYearly: boolean;
  monthlyPrice?: number;
  yearlyPrice?: number;
  monthlyPriceLabel?: string;
  yearlyPriceLabel?: string;
  buttonLabel: string;
  isPopular?: boolean;
  features: string[];
  delay?: number;
}

export function PricingCard({
  tier,
  name,
  description,
  isYearly,
  monthlyPrice,
  yearlyPrice,
  monthlyPriceLabel = '/month',
  yearlyPriceLabel = '/year',
  buttonLabel,
  isPopular = false,
  features,
  delay = 0,
}: PricingCardProps) {
  const isEnterprise = tier === 'enterprise';
  const displayPrice = isYearly && yearlyPrice ? yearlyPrice : monthlyPrice;
  const displayLabel = isYearly ? yearlyPriceLabel : monthlyPriceLabel;
  const yearlyEquivalent = isYearly && yearlyPrice ? (yearlyPrice / 12).toFixed(2) : null;

  const containerClass = isPopular
    ? 'relative rounded-[32px] border border-violet-500 bg-linear-to-b from-violet-500/20 to-transparent p-10 lg:scale-105'
    : 'relative rounded-[32px] border border-white/10 bg-white/5 p-10';

  const buttonVariant = isPopular ? 'primary' : 'outline';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={containerClass}
    >
      {/* Glow effect for most popular */}
      {isPopular && (
        <motion.div
          className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-violet-500/0 via-violet-500/20 to-violet-500/0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      )}

      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 px-4 py-2 rounded-full text-sm font-semibold z-10">
          Most Popular
        </div>
      )}

      <div className="relative z-10">
        <div className="text-violet-400 font-semibold mb-4">{name}</div>

        <motion.div
          key={`price-${isYearly}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="h-20 flex items-end"
        >
          {!isEnterprise ? (
            <>
              <h3 className="text-5xl font-bold">${displayPrice}</h3>
              <span className="text-xl text-gray-400 ml-2">{displayLabel}</span>
            </>
          ) : (
            <h3 className="text-5xl font-bold">Custom</h3>
          )}
        </motion.div>

        {/* Yearly equivalent for Pro */}
        {isYearly && yearlyEquivalent && tier === 'pro' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-sm text-gray-400 mt-2"
          >
            (${yearlyEquivalent}/month equivalent)
          </motion.p>
        )}

        {/* Savings badge for yearly */}
        {isYearly && !isEnterprise && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-2 inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold"
          >
            Save 20%
          </motion.div>
        )}

        <p className="text-gray-400 mt-6">{description}</p>

        <div className="w-full mt-8">
          <AnimatedButton 
            text={buttonLabel}
            variant={buttonVariant}
            size="md"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="mt-8 space-y-4 text-gray-300">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
