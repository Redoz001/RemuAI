'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  href?: string;
  featured?: boolean;
  delay?: number;
  comingSoon?: boolean;
  cta?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  features,
  href = '/contact',
  featured = false,
  delay = 0,
  comingSoon = false,
  cta,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={!comingSoon ? { y: -8, scale: 1.015 } : undefined}
      className={`
        group relative overflow-hidden rounded-3xl border backdrop-blur-md
        transition-all duration-300
        ${
          featured
            ? 'border-violet-500/60 bg-violet-500/10 shadow-xl shadow-violet-600/20'
            : 'border-white/10 bg-white/[0.04] hover:border-violet-500/40 hover:bg-white/[0.06]'
        }
        ${comingSoon ? 'opacity-85' : ''}
      `}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {featured && (
        <div className="absolute left-0 right-0 top-0 h-1 bg-violet-500" />
      )}

      {comingSoon && (
        <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
          <Clock size={13} />
          Coming Soon
        </div>
      )}

      <div className="relative p-8">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300">
          {icon}
        </div>

        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>

        <div className="mt-8 space-y-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Check
                size={18}
                className="mt-1 flex-shrink-0 text-violet-400"
                aria-hidden="true"
              />

              <span className="text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {comingSoon ? (
          <div className="mt-10 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-gray-400">
            Roadmap Feature
          </div>
        ) : (
          <Link
            href={href}
            className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold transition hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {cta ?? 'Start a Project'}
            <ArrowRight size={18} />
          </Link>
        )}
      </div>
    </motion.article>
  );
}