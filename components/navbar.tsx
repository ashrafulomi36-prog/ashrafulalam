"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { nav, personal } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="max-w-content mx-auto flex items-center justify-between px-6 md:px-8 h-16">
          <a href="#top" className="font-display font-semibold text-lg tracking-tight">
            {personal.initials}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-accent ${
                    active === item.href ? "text-accent" : "text-ink/80"
                  }`}
                >
                  {item.label}
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1.5 h-[2px] w-full bg-accent rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-accent transition-colors"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <a
              href={personal.resumeUrl}
              download
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-ink text-paper hover:opacity-85 transition-opacity"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-paper md:hidden"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <span className="font-display font-semibold text-lg">{personal.initials}.</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <motion.ul
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-1 px-6 py-8"
            >
              {nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    closed: { opacity: 0, y: 12 },
                    open: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-2xl font-display font-medium"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={toggleTheme}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-border"
                >
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </button>
                <a
                  href={personal.resumeUrl}
                  download
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-full bg-ink text-paper"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
