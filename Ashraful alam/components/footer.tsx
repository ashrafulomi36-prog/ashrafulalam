import { personal } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-content mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="font-mono">Built with Next.js · Tailwind CSS · Three.js</p>
      </div>
    </footer>
  );
}
