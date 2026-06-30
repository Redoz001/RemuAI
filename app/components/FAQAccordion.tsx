'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'services',
    question: 'What services does RemuAI provide?',
    answer:
      'RemuAI provides AI solutions, custom software development, web applications, professional websites, AI chatbots, business automation, API integrations, cloud solutions, digital transformation consulting, and long-term technical support.',
  },
  {
    id: 'reunexus',
    question: 'What is ReuNexus?',
    answer:
      'ReuNexus is RemuAI’s flagship AI platform. It brings together AI tools, intelligent assistants, automation, productivity features, and future AI capabilities into one unified workspace.',
  },
  {
    id: 'custom',
    question: 'Do you build custom business solutions?',
    answer:
      'Yes. RemuAI builds tailored solutions based on each client’s goals, workflows, and technical needs. This can include business dashboards, portals, AI assistants, automation systems, internal tools, and full web applications.',
  },
  {
    id: 'chatbots',
    question: 'Can RemuAI build AI chatbots or AI agents?',
    answer:
      'Yes. We build AI chatbots and intelligent assistants that can answer customer questions, automate support, capture leads, connect with business tools, and improve customer experience.',
  },
  {
    id: 'websites',
    question: 'Does RemuAI only build AI products?',
    answer:
      'No. AI is central to our vision, but RemuAI also builds professional websites, web applications, business systems, cloud-connected platforms, automation workflows, and custom software for companies that want to modernize their operations.',
  },
  {
    id: 'coming-soon',
    question: 'Are all RemuAI services available now?',
    answer:
      'Most core services are available now, including websites, web applications, AI chatbots, automation, software development, API integrations, cloud deployment, and support. Some advanced platform features, such as RemuAI Developer APIs, enterprise AI products, and marketplace features, will be clearly marked as Coming Soon.',
  },
  {
    id: 'process',
    question: 'How does the development process work?',
    answer:
      'Every project starts with a consultation to understand your business, goals, and technical requirements. We then plan the solution, design the experience, build the product, test it carefully, deploy it, and provide support after launch.',
  },
  {
    id: 'support',
    question: 'Do you provide support after launch?',
    answer:
      'Yes. RemuAI provides ongoing support, maintenance, improvements, updates, monitoring, and technical assistance so your solution can continue evolving after launch.',
  },
  {
    id: 'contact',
    question: 'How can I start a project with RemuAI?',
    answer:
      'You can contact RemuAI through the website, email, phone, or WhatsApp. We will discuss your requirements, recommend the right solution, and provide a clear proposal before development begins.',
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>('services');

  return (
    <div className="space-y-4">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-white">
                {item.question}
              </span>

              <ChevronDown
                className={`h-5 w-5 shrink-0 text-violet-300 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-6 pb-6 leading-7 text-gray-400">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}