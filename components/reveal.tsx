"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="section-label">{index}</span>
        <span className="h-px flex-1 max-w-[40px] bg-border" />
        <span className="section-label">{label}</span>
      </div>
      <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-muted text-lg">{description}</p>}
    </Reveal>
  );
}
