"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-content"
        >
          <p className="font-mono text-sm text-accent">
            <span className="text-text-muted">$</span> whoami
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Pablo Urbina
          </h1>

          <p className="mt-3 text-lg text-text-muted">
            CS engineering student, full-stack developer, learning game
            design in Godot.
          </p>

          <p className="mt-6 text-base leading-relaxed text-text-muted">
            I build database-backed systems and cloud integrations, and
            outside of coursework I&apos;m learning how games are put
            together — mechanics, feel, pacing — one small Godot project at
            a time.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 hover:bg-accent/90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
