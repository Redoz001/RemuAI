"use client";

import { useState } from "react";
import { Mail, Phone, Globe, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to send your message.");
      }

      setSuccess(true);

      setForm({
        name: "",
        company: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative overflow-hidden py-28 px-6">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed30,transparent_65%)]" />

        <div className="relative max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[0.3em] text-violet-400 text-sm">
              Contact Us
            </span>

            <h1 className="text-6xl md:text-7xl font-bold mt-6">
              Let's Build Something Amazing
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
              Whether you need a modern website, web application,
              AI chatbot, automation platform or custom software,
              we'd love to discuss your project.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* CONTACT INFO */}

            <div className="space-y-6">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

                <Mail className="text-violet-400 mb-4" />

                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p className="text-gray-400 mt-2">
                  support@remuai.com
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

                <Globe className="text-violet-400 mb-4" />

                <h3 className="font-bold text-xl">
                  Services
                </h3>

                <ul className="text-gray-400 mt-3 space-y-2">
                  <li>Website Development</li>
                  <li>Web Applications</li>
                  <li>AI Chatbots</li>
                  <li>Business Automation</li>
                  <li>Custom Software</li>
                </ul>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

                <Phone className="text-violet-400 mb-4" />

                <h3 className="font-bold text-xl">
                  Response Time
                </h3>

                <p className="text-gray-400 mt-2">
                  We usually reply within one business day.
                </p>

              </div>

            </div>

            {/* FORM */}

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
                    placeholder="Full Name"
                    required
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  />

                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company (Optional)"
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  />

                </div>

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                />

                <div className="grid md:grid-cols-2 gap-6">

                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  >
                    <option value="">Project Type</option>
                    <option>Website</option>
                    <option>Web Application</option>
                    <option>AI Chatbot</option>
                    <option>Business Automation</option>
                    <option>Custom Software</option>
                  </select>

                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                  >
                    <option value="">Estimated Budget</option>
                    <option>Under $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>

                </div>

                <textarea
                  name="message"
                  rows={7}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-violet-500"
                />

                {error && (
                  <p className="text-red-400">
                    {error}
                  </p>
                )}

                {success && (
                  <p className="text-green-400">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                )}

                <button
                  disabled={loading}
                  className="w-full bg-violet-600 hover:bg-violet-500 transition rounded-xl py-4 font-semibold flex justify-center items-center gap-3 disabled:opacity-60"
                >
                  <Send size={18} />

                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}