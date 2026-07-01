"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/portfolio";

export function RoleRotator() {
  const roles = personal.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 35 : 65;
    const pauseAtEnd = 1400;
    const pauseAtStart = 300;

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), pauseAtEnd);
          }
        } else {
          if (text.length > 0) {
            setText(current.slice(0, text.length - 1));
          } else {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      text.length === 0 && !deleting ? pauseAtStart : speed
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <div className="inline-flex items-center gap-2 font-mono text-sm md:text-base text-muted border border-border rounded-full px-4 py-2 bg-surface">
      <span className="text-accent">$</span>
      <span>role.current()</span>
      <span className="text-ink">→</span>
      <span className="text-ink font-medium">{text}</span>
      <span className="w-[2px] h-4 bg-accent animate-blink" />
    </div>
  );
}
