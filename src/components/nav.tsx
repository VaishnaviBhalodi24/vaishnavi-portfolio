"use client";

import { useEffect, useState } from "react";
import { ResumeTrigger } from "@/components/resume-trigger";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="display text-[15px] font-semibold tracking-tight text-[var(--ink)]"
        >
          Vaishnavi Bhalodi
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <ResumeTrigger className="rounded-md border border-[var(--line-strong)] px-4 py-1.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
          Résumé
        </ResumeTrigger>
      </div>
    </header>
  );
}
