'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'CEO, TechVentures',
    company: 'AI Startup',
    text: 'RemuAI cut our deployment time from 3 months to 2 weeks. ReuNexus is a game-changer.',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Morgan',
    role: 'Lead Developer, CloudScale',
    company: 'Enterprise',
    text: 'The unified platform eliminates tool sprawl. We\'ve consolidated 5 AI tools into one.',
    avatar: '👩‍💻',
  },
  {
    name: 'James Wilson',
    role: 'Founder, InnovateLabs',
    company: 'Startup',
    text: 'Best AI infrastructure platform. Zero regrets. The support team is incredible.',
    avatar: '👨‍🔬',
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Trusted by 1,000+ Developers
        </h2>
        <p className="text-xl text-gray-400">
          See what industry leaders are building with RemuAI
        </p>
      </div>

      <div className="relative">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: current === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`${current === index ? 'block' : 'hidden'}`}
          >
            <div className="rounded-3xl border border-violet-500/30 bg-violet-500/5 p-8 md:p-12 text-center">
              <div className="text-6xl mb-6">{testimonial.avatar}</div>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-violet-400">{testimonial.role}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? 'bg-violet-500 w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
