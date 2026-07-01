"use client";

import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { personal } from "@/data/portfolio";
import { Github, Linkedin, Mail, MapPin, Send, Download } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = `${personal.socials.email}?subject=${encodeURIComponent(
    `Portfolio contact from ${form.name || "a visitor"}`
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <SectionHeading
          index="07"
          label="Contact"
          title="Let's build something"
          description="Open to internships, research collaborations, and freelance product work."
        />

        <div className="grid md:grid-cols-5 gap-12">
          <Reveal className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <Mail size={16} />
              </div>
              <a href={personal.socials.email} className="hover:text-accent transition-colors">
                {personal.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                <MapPin size={16} />
              </div>
              <span className="text-muted">{personal.location}</span>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personal.resumeUrl}
                download
                aria-label="Download resume"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Download size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3">
            <form
              action={mailtoHref}
              method="get"
              onSubmit={() => {
                window.location.href = mailtoHref;
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-xs font-mono text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1.5 bg-transparent border border-border rounded-lg px-4 py-2.5 focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mt-1.5 bg-transparent border border-border rounded-lg px-4 py-2.5 focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-mono text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-1.5 bg-transparent border border-border rounded-lg px-4 py-2.5 focus:border-accent transition-colors resize-none"
                  placeholder="What would you like to build?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper font-medium text-sm hover:opacity-85 transition-opacity"
              >
                Send Message <Send size={14} />
              </button>
              <p className="text-xs text-muted">Opens your email client with this message pre-filled.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
