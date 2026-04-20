"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/brand-icons";
import type { Project } from "@/lib/data";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && <Inner project={project} onClose={onClose} />}
    </AnimatePresence>,
    document.body,
  );
}

function Inner({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — details`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.99 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        data-lenis-prevent
        className="relative flex h-full max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-soft)]/70 shadow-2xl backdrop-blur-xl backdrop-saturate-150"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] px-5 py-4 md:px-7">
          <div className="min-w-0">
            <h2 className="display text-lg font-semibold text-[var(--ink)] md:text-xl">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--ink-soft)]">
              {project.blurb}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-[var(--line)] text-[var(--ink-soft)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div
          data-lenis-prevent
          className="flex-1 overflow-y-auto overscroll-contain"
        >
          <div className="px-5 py-6 md:px-7 md:py-7">
            <div className="mb-6 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[var(--line)] bg-[var(--bg-elev)]/60 px-2.5 py-1 text-[11px] text-[var(--ink-soft)]"
                >
                  {s}
                </span>
              ))}
            </div>

            <p className="text-[15px] leading-relaxed text-[var(--ink-soft)] md:text-base">
              {project.description}
            </p>

            {project.metrics.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-[var(--line)] py-4">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="display text-base font-semibold text-[var(--ink)]">
                      {m.value}
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {project.details && (
              <div className="mt-6">
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                  Deep dive
                </h3>
                <p className="mt-3 whitespace-pre-wrap text-[14px] leading-relaxed text-[var(--ink-soft)]">
                  {project.details}
                </p>
              </div>
            )}

            {(project.links.live || project.links.github) && (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-[var(--ink)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition-colors hover:bg-white"
                  >
                    Visit live site
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line-strong)] px-4 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    View source
                  </a>
                )}
              </div>
            )}

            {project.links.live && (
              <div className="mt-7">
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink-mute)]">
                    Live preview
                  </h3>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
                  >
                    Open in new tab
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                {project.embeddable === false ? (
                  <FallbackPreview project={project} />
                ) : (
                  <LivePreview url={project.links.live} title={project.title} />
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FallbackPreview({ project }: { project: Project }) {
  const url = project.links.live!;
  const host = safeHost(url);

  if (project.thumbnail) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-lg border border-[var(--line)]"
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 960px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4">
          <span className="mono text-[11px] uppercase tracking-[0.16em] text-white/85">
            {host}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-white/95 px-3 py-1.5 text-xs font-medium text-black transition-transform group-hover:-translate-y-0.5">
            Visit <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </a>
    );
  }

  const [c1, c2] = project.gradient ?? ["#4f46e5", "#22d3ee"];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[16/10] w-full overflow-hidden rounded-lg border border-[var(--line)]"
      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative flex h-full w-full flex-col justify-between p-6 md:p-8">
        <div className="flex items-center gap-2 text-xs text-white/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
          <span className="mono uppercase tracking-[0.16em]">{host}</span>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-white/70">
            Preview embedding disabled by host
          </p>
          <p className="display mt-2 text-2xl font-semibold text-white md:text-3xl">
            Click to open {project.title}
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-4 py-2 text-sm font-medium text-black transition-transform group-hover:-translate-y-0.5">
            Visit live site
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </a>
  );
}

function safeHost(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function LivePreview({ url, title }: { url: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--bg-elev)]">
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center text-xs text-[var(--ink-mute)]">
          Loading preview…
        </div>
      )}
      <iframe
        src={url}
        title={`${title} — live preview`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="no-referrer"
        className="relative h-full w-full"
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open live site"
        className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md border border-[var(--line-strong)] bg-[var(--bg)]/85 px-3 py-1.5 text-xs font-medium text-[var(--ink)] backdrop-blur transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        Open <ArrowUpRight className="h-3 w-3" />
      </a>
    </div>
  );
}
