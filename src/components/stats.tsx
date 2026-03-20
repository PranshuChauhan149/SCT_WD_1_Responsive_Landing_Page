"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

const stats: Stat[] = [
  { label: "Active Users", value: 10, suffix: "K+" },
  { label: "Platform Uptime", value: 99, suffix: "%" },
  { label: "Tasks Automated", value: 2.3, suffix: "M+" },
  { label: "Avg. Productivity Gain", value: 43, suffix: "%" },
];

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(latest) {
        const rounded = value % 1 === 0 ? Math.round(latest) : Number(latest.toFixed(1));
        setDisplayValue(rounded);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-500">
            About OrbitFlow
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Built for ambitious teams that move fast and ship with precision.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We combine elegant user experience, reliable infrastructure, and
            data-driven automation so your team can focus on innovation.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-white/10 dark:bg-slate-900/60"
            >
              <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
