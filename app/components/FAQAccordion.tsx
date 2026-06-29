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
    id: 'what-is-remuai',
    question: 'What is RemuAI?',
    answer: 'RemuAI is an advanced AI platform that combines intelligent models, automation, agents and workflows into a single ecosystem. It empowers developers, creators and businesses to build, deploy and scale AI-powered solutions effortlessly.'
  },
  {
    id: 'what-is-reunexus',
    question: 'What is ReuNexus?',
    answer: 'ReuNexus is the core workspace inside RemuAI, allowing users to interact with AI, build agents, automate tasks and manage projects. It provides a unified interface for all your AI-powered workflows.'
  },
  {
    id: 'free-tier',
    question: 'Can I use RemuAI for free?',
    answer: 'Yes. RemuAI offers a free tier so anyone can experience the platform before upgrading. The free tier includes essential features for individuals and small projects.'
  },
  {
    id: 'suitable-for-businesses',
    question: 'Is RemuAI suitable for businesses?',
    answer: 'Absolutely. From startups to enterprises, RemuAI provides scalable AI solutions designed for growth. Our Pro and Enterprise tiers offer advanced features, priority support and dedicated infrastructure.'
  },
  {
    id: 'security',
    question: 'How secure is RemuAI?',
    answer: 'Security is our top priority. RemuAI features enterprise-grade encryption, regular security audits, compliance with GDPR and SOC 2, and optional SSO integration for Enterprise customers.'
  },
  {
    id: 'api-access',
    question: 'Does RemuAI provide API access?',
    answer: 'Yes. RemuAI offers comprehensive REST and GraphQL APIs for integrating with your existing systems. All tiers have API access with limits based on your plan.'
  },
  {
    id: 'models',
    question: 'What AI models are available?',
    answer: 'RemuAI supports a wide range of state-of-the-art models including GPT-4, Claude, Llama and specialized models. You can select the best model for your specific use case.'
  },
  {
    id: 'support',
    question: 'What kind of support do you offer?',
    answer: 'We offer email support on the Free tier, priority support on Pro, and a dedicated support team for Enterprise customers. Additionally, we provide extensive documentation and community forums.'
  }
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={item.id}
          className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition-all hover:bg-white/8 hover:border-white/20"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-inset"
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${item.id}`}
          >
            <h3 className="text-2xl font-bold pr-8">
              {item.question}
            </h3>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex-shrink-0 text-violet-500"
            >
              <ChevronDown size={28} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                id={`faq-answer-${item.id}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 pt-0 text-gray-400 text-lg leading-relaxed border-t border-white/5">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
