'use client';

import { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import AnimatedButton from './AnimatedButton';

interface ProjectInquiryModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProjectInquiryModal({
  open,
  onClose,
}: ProjectInquiryModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const payload = {
      full_name: String(formData.get('full_name') || ''),
      company: String(formData.get('company') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      service: String(formData.get('service') || ''),
      budget: String(formData.get('budget') || ''),
      description: String(formData.get('description') || ''),
    };

    const { error } = await supabase
      .from('project_inquiries')
      .insert(payload);

    setLoading(false);

    if (error) {
      alert('Something went wrong. Please try again.');
      return;
    }

    setSuccess(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-xl">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-black p-8 shadow-2xl shadow-violet-600/20">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-xl border border-white/10 bg-white/5 p-2 text-gray-400 hover:text-white"
          aria-label="Close form"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="py-16 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-400" />

            <h2 className="mt-6 text-3xl font-black">
              Thank you for contacting RemuAI.
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-400">
              Our team has received your project inquiry. We usually respond
              within one business day.
            </p>

            <button
              onClick={onClose}
              className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Start a Project
            </span>

            <h2 className="mt-4 text-3xl font-black">
              Tell us about your project
            </h2>

            <p className="mt-3 text-gray-400">
              Share your details and RemuAI will review your inquiry.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input name="full_name" required placeholder="Full name *" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-violet-500" />
                <input name="company" placeholder="Company" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-violet-500" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input name="email" type="email" required placeholder="Email *" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-violet-500" />
                <input name="phone" required placeholder="Phone / WhatsApp *" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-violet-500" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <select name="service" required className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-violet-500">
                  <option value="">Service needed *</option>
                  <option>AI Solution</option>
                  <option>Website</option>
                  <option>Web Application</option>
                  <option>AI Chatbot</option>
                  <option>Automation</option>
                  <option>Cloud Solution</option>
                  <option>Custom Software</option>
                </select>

                <select name="budget" className="rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-violet-500">
                  <option value="">Project budget</option>
                  <option>Under $1000</option>
                  <option>$1000 - $2,000</option>
                  <option>$2,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>

              <textarea
                name="description"
                required
                rows={5}
                placeholder="Describe your project *"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-violet-500"
              />

              <AnimatedButton
                text="Submit Project Inquiry"
                type="submit"
                loading={loading}
                icon={<Send className="h-5 w-5" />}
                className="w-full"
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}