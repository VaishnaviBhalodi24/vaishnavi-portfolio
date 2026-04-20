"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/lib/data";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-p">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          lede="A mix of production systems and academic deep-dives. Links open the live deployments where available."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-16 mb-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink-mute)]">
              Other projects
            </h3>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} compact />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  compact,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="card card-hover flex flex-col p-6 md:p-7"
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

      <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, compact ? 4 : 8).map((s) => (
          <span
            key={s}
            className="rounded-md border border-[var(--line)] bg-[var(--bg-elev)] px-2 py-0.5 text-[10px] text-[var(--ink-soft)]"
          >
            {s}
          </span>
        ))}
      </div>

      {project.links.live && !compact && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--ink)]"
        >
          Visit live site
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
    </motion.article>
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
      className="grid h-7 w-7 place-items-center rounded-md border border-[var(--line)] text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {children}
    </a>
  );
}
