import { Reveal, SectionHeading } from "@/components/reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading
          index="03"
          label="Experience"
          title="Building & leading"
          description="Founding ventures and leading student technical societies alongside coursework."
        />

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <ol className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.org} delay={i * 0.06}>
                <li className="relative pl-9">
                  <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-paper" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display font-medium text-lg">{e.role}</h3>
                    <span className="text-accent text-sm">— {e.org}</span>
                  </div>
                  <p className="text-xs font-mono text-muted mt-1">{e.period}</p>
                  <p className="text-muted mt-2.5 max-w-xl">{e.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface border border-border text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
