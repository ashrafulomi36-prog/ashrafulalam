import { Reveal, SectionHeading } from "@/components/reveal";
import { competitions } from "@/data/portfolio";
import { Trophy } from "lucide-react";

export function Competitions() {
  return (
    <section id="competitions" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading
          index="05"
          label="Competitions"
          title="Contest record"
          description="Case competitions, hackathons, and competitive programming — newest first."
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {competitions.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.06}>
              <div className="card-hover flex gap-4 rounded-2xl border border-border p-5 bg-surface h-full">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  <Trophy size={17} />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted">{c.year}</span>
                  <h3 className="font-display font-medium mt-0.5 leading-snug">{c.title}</h3>
                  <p className="text-sm text-muted mt-1">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
