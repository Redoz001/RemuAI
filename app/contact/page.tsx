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

    if (error) {
      setLoading(false);
      setErrorMessage("Unable to submit your inquiry. Please try again.");
      return;
    }

    const whatsappRes = await fetch("/api/whatsapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const whatsappData = await whatsappRes.json();
    console.log("WhatsApp response:", whatsappData);

    if (!whatsappRes.ok) {
      setLoading(false);
      setErrorMessage("Inquiry saved, but WhatsApp notification failed.");
      return;
    }

    setSuccess(true);
    setLoading(false);

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
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed30,transparent_65%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Contact RemuAI
            </span>

            <h1 className="mt-6 text-5xl font-bold md:text-7xl">
              Tell Us About Your Project
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-400">
              Share your project details and RemuAI will review your inquiry.
              We usually respond within one business day.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Mail className="mb-4 text-violet-400" />

                <h3 className="text-xl font-bold">Company Email</h3>

                <p className="mt-2 text-gray-400">contact@remuai.space</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Globe className="mb-4 text-violet-400" />

                <h3 className="text-xl font-bold">Solutions</h3>

                <ul className="mt-3 space-y-2 text-gray-400">
                  <li>AI Solutions</li>
                  <li>Web Applications</li>
                  <li>Professional Websites</li>
                  <li>AI Chatbots</li>
                  <li>Business Automation</li>
                  <li>Custom Software</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Phone className="mb-4 text-violet-400" />

                <h3 className="text-xl font-bold">Response Time</h3>

                <p className="mt-2 text-gray-400">
                  Our team usually replies within one business day.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="rounded-xl border border-white/10 bg-black p-4 outline-none focus:border-violet-500"
                  />

                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="rounded-xl border border-white/10 bg-black p-4 outline-none focus:border-violet-500"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="rounded-xl border border-white/10 bg-black p-4 outline-none focus:border-violet-500"
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone / WhatsApp *"
                    required
                    className="rounded-xl border border-white/10 bg-black p-4 outline-none focus:border-violet-500"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-white/10 bg-black p-4 outline-none focus:border-violet-500"
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
                    className="rounded-xl border border-white/10 bg-black p-4 outline-none focus:border-violet-500"
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
                  className="w-full rounded-xl border border-white/10 bg-black p-4 outline-none focus:border-violet-500"
                />

                {errorMessage && <p className="text-red-400">{errorMessage}</p>}

                {success && (
                  <p className="text-green-400">
                    Your inquiry has been received. RemuAI will contact you
                    shortly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 py-4 font-semibold transition hover:bg-violet-500 disabled:opacity-60"
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