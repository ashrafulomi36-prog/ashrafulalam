import { Reveal, SectionHeading } from "@/components/reveal";
import { about, education, personal } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading index="01" label="About" title="A little about me" />

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.24} className="pt-4 flex flex-wrap gap-2">
              {about.focus.map((f) => (
                <span
                  key={f}
                  className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-muted"
                >
                  {f}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15} className="md:col-span-2">
            <div className="rounded-2xl border border-border p-6 bg-surface">
              <div className="flex items-center gap-2 mb-6 text-accent">
                <GraduationCap size={18} />
                <span className="section-label !text-accent">Education</span>
              </div>
              <ol className="space-y-6">
                {education.map((e) => (
                  <li key={e.degree} className="relative pl-5 border-l border-border">
                    <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent" />
                    <p className="font-display font-medium leading-snug">{e.degree}</p>
                    <p className="text-sm text-muted mt-1">{e.institution}</p>
                    <p className="text-xs font-mono text-muted/80 mt-1">
                      {e.period} · {e.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
