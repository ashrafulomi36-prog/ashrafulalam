"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/reveal";
import { skillCategories } from "@/data/portfolio";
import {
  Code2,
  BrainCircuit,
  Globe,
  Workflow,
  Cloud,
  Wrench,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  BrainCircuit,
  Globe,
  Workflow,
  Cloud,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading
          index="02"
          label="Skills"
          title="Tools of the craft"
          description="A working toolkit spanning programming, applied ML, product engineering, and automation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <Reveal key={cat.title} delay={(i % 3) * 0.08}>
                <div className="card-hover h-full rounded-2xl border border-border p-6 bg-surface">
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-medium">{cat.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {cat.skills.map((s) => (
                      <li key={s.name}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span>{s.name}</span>
                          <span className="text-muted font-mono text-xs">{s.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-border overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
