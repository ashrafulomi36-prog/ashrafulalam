import { Reveal, SectionHeading } from "@/components/reveal";
import { achievements, certifications, contentCreation } from "@/data/portfolio";
import { Youtube, Award, BadgeCheck } from "lucide-react";

export function More() {
  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading index="06" label="Beyond code" title="Content, honors & credentials" />

        <div className="grid lg:grid-cols-3 gap-5">
          <Reveal className="lg:col-span-1">
            <div className="h-full rounded-2xl border border-border p-6 bg-surface">
              <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <Youtube size={18} />
              </div>
              <h3 className="font-display font-medium text-lg">Content Creation</h3>
              <p className="text-muted text-sm mt-3 leading-relaxed">{contentCreation.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {contentCreation.topics.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-1">
            <div className="h-full rounded-2xl border border-border p-6 bg-surface">
              <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <Award size={18} />
              </div>
              <h3 className="font-display font-medium text-lg">Achievements</h3>
              <ul className="mt-4 space-y-3">
                {achievements.map((a) => (
                  <li key={a.title} className="flex justify-between gap-3 text-sm border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="text-muted">{a.title}</span>
                    {a.year && <span className="font-mono text-xs text-muted/70 shrink-0">{a.year}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-1">
            <div className="h-full rounded-2xl border border-border p-6 bg-surface">
              <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <BadgeCheck size={18} />
              </div>
              <h3 className="font-display font-medium text-lg">Certifications</h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c.title} className="text-sm border-b border-border pb-3 last:border-0 last:pb-0">
                    <p className="text-ink">{c.title}</p>
                    <p className="text-muted text-xs font-mono mt-1">
                      {c.issuer}
                      {c.year ? ` · ${c.year}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
