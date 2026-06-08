"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">

        {/* HEADER */}
        <h1 className="text-5xl font-bold text-center">
          Contact RemuAI
        </h1>

        <p className="text-gray-400 text-center mt-3">
          We respond within 24 hours. Let’s build something powerful.
        </p>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur"
        >

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full p-3 rounded-lg bg-black border border-white/10 focus:border-white/40 outline-none"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full p-3 rounded-lg bg-black border border-white/10 focus:border-white/40 outline-none"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={6}
            required
            className="w-full p-3 rounded-lg bg-black border border-white/10 focus:border-white/40 outline-none"
          />

          {/* STATUS */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {success && (
            <p className="text-green-400 text-sm">
              Message sent successfully ✔
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* FOOTER INFO */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>support@remuai.com</p>
          <p>Powered by RemuAI Infrastructure</p>
        </div>

      </div>
    </main>
  );
}