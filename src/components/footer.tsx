import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Docs", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-12 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">OrbitFlow</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Premium SaaS landing page built with Next.js, Tailwind, and Framer Motion.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-600 transition hover:text-violet-500 dark:text-slate-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <Link href="#" aria-label="Twitter" className="transition hover:text-violet-500">
            <Twitter size={18} />
          </Link>
          <Link href="#" aria-label="GitHub" className="transition hover:text-violet-500">
            <Github size={18} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="transition hover:text-violet-500">
            <Linkedin size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
