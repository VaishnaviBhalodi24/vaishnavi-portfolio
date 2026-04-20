"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/lib/data";
import { ProjectModal } from "./project-modal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-p">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          lede="Click any card to see a detailed write-up, metrics, and a live preview where available."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onOpen={() => setActive(p)}
            />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-16 mb-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink-mute)]">
              Other projects
            </h3>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  index={i}
                  onOpen={() => setActive(p)}
                  compact
                />
              ))}
            </div>
          </>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectCard({
  project,
  index,
  compact,
  onOpen,
}: {
  project: Project;
  index: number;
  compact?: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open details for ${project.title}`}
        className="card card-hover flex w-full flex-col p-6 text-left md:p-7"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="display text-lg font-semibold text-[var(--ink)]">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            {project.links.github && (
              <IconLink href={project.links.github} label="GitHub">
                <GithubIcon className="h-3.5 w-3.5" />
              </IconLink>
            )}
            {project.links.live && (
              <IconLink href={project.links.live} label="Live site">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </IconLink>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          {compact ? project.blurb : project.description}
        </p>

        {!compact && project.metrics.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="display text-sm font-semibold text-[var(--ink)]">
                  {m.value}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.stack.slice(0, compact ? 4 : 8).map((s) => (
            <span
              key={s}
              className="rounded-md border border-[var(--line)] bg-[var(--bg-elev)] px-2 py-0.5 text-[10px] text-[var(--ink-soft)]"
            >
              {s}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
          View details
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </button>
    </motion.div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={(e) => e.stopPropagation()}
      className="grid h-7 w-7 place-items-center rounded-md border border-[var(--line)] text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {children}
    </a>
  );
}
