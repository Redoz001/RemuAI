'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const reasons = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'AI-First Thinking',
    description:
      'We design solutions around practical AI use cases, not trends. Every system is built to solve a real business problem.',
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Custom Engineering',
    description:
      'From websites and web applications to internal systems and automation, every solution is engineered around your workflow.',
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud-Ready Architecture',
    description:
      'We build scalable digital products that are ready for modern deployment, integrations, performance, and future growth.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Security-Minded Delivery',
    description:
      'Security, reliability, maintainability, and performance are considered from the beginning, not added as an afterthought.',
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Long-Term Partnership',
    description:
      'RemuAI is built for ongoing improvement. We help maintain, optimize, and expand your solution after launch.',
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: 'Transparent Execution',
    description:
      'You get clear communication, structured planning, and a development process designed to keep your project moving forward.',
  },
];

export default function WhyChooseRemuAI() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Why Choose RemuAI
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Built for Businesses That Want More Than Software
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            RemuAI combines AI, engineering, automation, and long-term technical
            partnership to help businesses build technology that is useful today
            and scalable for tomorrow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
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