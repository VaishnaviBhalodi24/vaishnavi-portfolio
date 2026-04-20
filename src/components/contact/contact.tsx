"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { ResumeTrigger } from "@/components/resume-trigger";
import { site } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="section-p">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="card mx-auto max-w-3xl p-8 text-center md:p-12"
        >
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Contact
          </span>
          <h2 className="display mt-3 text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold text-[var(--ink)]">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[var(--ink-soft)]">
            Open to full-time software engineering and data science roles
            starting Summer 2026. Also happy to chat about interesting problems
            or collaborations.
          </p>

          <div className="mt-8 flex flex-col items-center gap-5">
            <CopyEmail />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-colors hover:bg-white"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <ResumeTrigger className="inline-flex items-center gap-2 rounded-md border border-[var(--line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                <ArrowUpRight className="h-4 w-4" /> Résumé
              </ResumeTrigger>
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-8 text-xs text-[var(--ink-mute)] md:flex-row">
          <span>© {new Date().getFullYear()} Vaishnavi Bhalodi</span>
          <span>{site.location} · {site.phone}</span>
          <span>Built with Next.js · Hosted on Vercel</span>
        </footer>
      </div>
    </section>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={onCopy}
      className="group inline-flex items-center gap-3 rounded-md border border-[var(--line-strong)] bg-[var(--bg-elev)] px-4 py-2 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
      aria-label={copied ? "Email copied" : "Copy email"}
    >
      <span className="mono">{site.email}</span>
      <span className="grid h-6 w-6 place-items-center rounded border border-[var(--line)] text-[var(--ink-soft)]">
        {copied ? <Check className="h-3 w-3 text-[var(--accent)]" /> : <Copy className="h-3 w-3" />}
      </span>
    </button>
  );
}
