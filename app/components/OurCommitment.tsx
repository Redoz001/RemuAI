'use client';

import { motion } from 'framer-motion';
import {
  Clock3,
  Handshake,
  MessageCircle,
  Rocket,
} from 'lucide-react';

const commitments = [
  {
    icon: <Handshake className="h-8 w-8" />,
    title: 'True Partnership',
    description:
      'We work closely with every client to understand their goals, workflows, and long-term vision before building a solution.',
  },
  {
    icon: <Clock3 className="h-8 w-8" />,
    title: 'Structured Delivery',
    description:
      'Projects are planned with clear milestones, realistic timelines, and a development process designed for quality.',
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'Clear Communication',
    description:
      'You receive consistent updates and transparent guidance so you always understand what is being built and why.',
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'Continuous Improvement',
    description:
      'After launch, we help maintain, improve, and expand your solution as your business and technology needs grow.',
  },
];

export default function OurCommitment() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Our Commitment
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Built With Discipline, Clarity, and Long-Term Thinking
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            RemuAI is built around more than delivery. We focus on reliable
            execution, clear communication, and technology that continues to
            create value after launch.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {commitments.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-violet-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-violet-600/10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300">
                  {item.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}