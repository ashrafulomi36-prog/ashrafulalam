"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { RoleRotator } from "@/components/role-rotator";
import { personal } from "@/data/portfolio";

const HeroScene = dynamic(() => import("@/components/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
});

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <HeroScene />
      <div className="max-w-content mx-auto px-6 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <RoleRotator />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold tracking-tight mt-6 text-[13vw] leading-[0.95] md:text-[6.5vw] md:leading-[0.95]"
        >
          {personal.firstName}
          <br />
          <span className="text-gradient">{personal.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          {personal.tagline} Based in {personal.location}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper font-medium text-sm hover:opacity-85 transition-opacity"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium text-sm hover:border-accent hover:text-accent transition-colors"
          >
            <Download size={15} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-muted hover:text-ink transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
