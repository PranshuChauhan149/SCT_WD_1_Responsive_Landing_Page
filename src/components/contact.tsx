"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquareText, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialState: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid =
      formData.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.message.trim().length >= 12;

    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setFormData(initialState);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-500">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Let&apos;s build something exceptional together.
          </h2>
          <p className="max-w-lg text-base text-slate-600 dark:text-slate-300">
            Tell us about your product goals and our team will share a tailored
            demo, launch plan, and integration roadmap.
          </p>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-violet-500" /> hello@orbitflow.io
            </p>
            <p className="flex items-center gap-2">
              <MessageSquareText size={16} className="text-violet-500" /> Typical response in 24 hours
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/65"
        >
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Full Name
            </span>
            <div className="relative">
              <UserRound className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                required
                type="text"
                value={formData.name}
                onChange={(event) => {
                  setStatus("idle");
                  setFormData((prev) => ({ ...prev, name: event.target.value }));
                }}
                placeholder="Aarav Sharma"
                className="w-full rounded-xl border border-slate-300 bg-white px-10 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:border-white/20 dark:bg-slate-900 dark:text-white"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Work Email
            </span>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(event) => {
                setStatus("idle");
                setFormData((prev) => ({ ...prev, email: event.target.value }));
              }}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:border-white/20 dark:bg-slate-900 dark:text-white"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Company
            </span>
            <input
              type="text"
              value={formData.company}
              onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
              placeholder="Orbit Labs"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:border-white/20 dark:bg-slate-900 dark:text-white"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
            </span>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(event) => {
                setStatus("idle");
                setFormData((prev) => ({ ...prev, message: event.target.value }));
              }}
              placeholder="Share your goals, timeline, and team size..."
              className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:border-white/20 dark:bg-slate-900 dark:text-white"
            />
          </label>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400"
          >
            Send Message
          </motion.button>

          {status === "success" && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thanks! Your message was submitted successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-rose-600 dark:text-rose-400">
              Please enter a valid name, email, and message (minimum 12 characters).
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
