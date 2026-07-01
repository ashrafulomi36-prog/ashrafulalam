"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X, ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { projects, Project } from "@/data/portfolio";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading
          index="04"
          label="Projects"
          title="Selected work"
          description="A mix of production products, automation systems, and academic builds."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <button
                onClick={() => setActive(p)}
                className="card-hover text-left w-full h-full rounded-2xl border border-border p-6 bg-surface flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="section-label">{p.category}</span>
                    <h3 className="font-display font-medium text-xl mt-2">{p.title}</h3>
                  </div>
                  <div className="w-9 h-9 shrink-0 rounded-full border border-border flex items-center justify-center">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <p className="text-muted mt-3 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end md:items-center justify-center bg-ink/40 backdrop-blur-sm p-0 md:p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-paper w-full md:max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-3xl md:rounded-3xl border border-border p-8"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close project details"
                className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-accent"
              >
                <X size={16} />
              </button>

              <span className="section-label">{active.category}</span>
              <h3 className="font-display font-semibold text-3xl mt-2">{active.title}</h3>
              <p className="text-muted mt-4 text-lg">{active.description}</p>

              <div className="mt-6">
                <p className="section-label mb-2">Key features</p>
                <ul className="space-y-1.5 text-muted">
                  {active.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <ChevronDown className="rotate-[-90deg] mt-1 shrink-0" size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="section-label mb-2">Challenges</p>
                  <p className="text-muted text-sm leading-relaxed">{active.challenges}</p>
                </div>
                <div>
                  <p className="section-label mb-2">What I learned</p>
                  <p className="text-muted text-sm leading-relaxed">{active.learned}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                {active.live && (
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-medium hover:opacity-85"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:border-accent hover:text-accent"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
