"use client";

import { useState } from "react";
import { Mail, Phone, Globe, Send } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",

    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");
    setSuccess(false);

    const payload = {
      full_name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      service: form.projectType || "General Inquiry",
      budget: form.budget,
      description: form.message,
    };

    const { error } = await supabase
      .from("project_inquiries")
      .insert(payload);

    setLoading(false);

    if (error) {
  setErrorMessage("Unable to submit your inquiry. Please try again.");
  return;
}
  await fetch("/api/whatsapp", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});
  
    setSuccess(true);

    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden py-28 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed30,transparent_65%)]" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-violet-400 text-sm">
              Contact RemuAI
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6">
              Tell Us About Your Project
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
              Share your project details and RemuAI will review your inquiry.
              We usually respond within one business day.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Mail className="text-violet-400 mb-4" />

                <h3 className="font-bold text-xl">Company Email</h3>

                <p className="text-gray-400 mt-2">
                  contact@remuai.space
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Globe className="text-violet-400 mb-4" />

                <h3 className="font-bold text-xl">Solutions</h3>

                <ul className="text-gray-400 mt-3 space-y-2">
                  <li>AI Solutions</li>
                  <li>Web Applications</li>
                  <li>Professional Websites</li>
                  <li>AI Chatbots</li>
                  <li>Business Automation</li>
                  <li>Custom Software</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Phone className="text-violet-400 mb-4" />

                <h3 className="font-bold text-xl">Response Time</h3>

                <p className="text-gray-400 mt-2">
                  Our team usually replies within one business day.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  />

                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone / WhatsApp *"
                    required
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  >
                    <option value="">Project Type *</option>
                    <option>AI Solution</option>
                    <option>Website</option>
                    <option>Web Application</option>
                    <option>AI Chatbot</option>
                    <option>Business Automation</option>
                    <option>Cloud Solution</option>
                    <option>Custom Software</option>
                  </select>

                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  >
                    <option value="">Estimated Budget</option>
                    <option>Under $1000</option>
                    <option>$1000 - $2,000</option>
                    <option>$2,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={7}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project *"
                  required
                  className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                />

                {errorMessage && (
                  <p className="text-red-400">
                    {errorMessage}
                  </p>
                )}

                {success && (
                  <p className="text-green-400">
                    Your inquiry has been received. RemuAI will contact you shortly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-violet-600 hover:bg-violet-500 transition rounded-xl py-4 font-semibold flex justify-center items-center gap-3 disabled:opacity-60"
                >
                  <Send size={18} />
                  {loading ? "Submitting..." : "Submit Project Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}