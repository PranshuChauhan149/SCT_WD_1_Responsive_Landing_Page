import Contact from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -right-32 top-72 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
