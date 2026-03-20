"use client";

import { motion } from "framer-motion";
import { Gauge, Layers3, LockKeyhole, Sparkles, Workflow, type LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Smart Automation",
    description: "Automate repetitive workflows and free your team to focus on high-impact work.",
    icon: Workflow,
  },
  {
    title: "Realtime Analytics",
    description: "Track key metrics with live dashboards and actionable insights in seconds.",
    icon: Gauge,
  },
  {
    title: "Enterprise Security",
    description: "Built-in encryption, advanced access controls, and secure cloud infrastructure.",
    icon: LockKeyhole,
  },
  {
    title: "Modular Integrations",
    description: "Connect your tools with a flexible API and pre-built integration library.",
    icon: Layers3,
  },
  {
    title: "AI-Powered Suggestions",
    description: "Get intelligent recommendations that boost productivity across teams.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-500">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Everything your startup needs to scale with confidence
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm transition hover:shadow-xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-slate-900/60"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
