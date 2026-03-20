"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-7"
        >
          <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            Next-gen SaaS Workflow
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Launch products faster with a truly modern command center.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            OrbitFlow helps teams plan, collaborate, and ship with confidence.
            Beautiful dashboards, real-time insights, and enterprise-grade
            reliability in one seamless platform.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-700 dark:bg-violet-500 dark:hover:bg-violet-400"
              >
                Start Free Trial
              </Link>
            </motion.div>
            <Link
              href="#features"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-400 hover:text-violet-500 dark:border-white/20 dark:bg-slate-900/60 dark:text-slate-200"
            >
              Explore Features
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-4">
              {[72, 89, 64].map((metric, index) => (
                <div key={metric} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                    <span>Performance {index + 1}</span>
                    <span>{metric}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric}%` }}
                      transition={{ delay: 0.4 + index * 0.15, duration: 0.7 }}
                      className="h-full rounded-full bg-linear-to-r from-violet-500 to-cyan-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-2 -z-10 rounded-4xl bg-linear-to-r from-violet-500/20 to-cyan-400/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
