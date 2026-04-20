"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <BackgroundGlow />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-xs text-[var(--ink-soft)]">
                Available for full-time roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="display text-balance text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-[var(--ink)]"
            >
              Hi, I&apos;m Vaishnavi —{" "}
              <span className="text-[var(--ink-soft)]">
                a software engineer & data scientist.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg"
            >
              M.S. in Software Engineering at Arizona State (4.00 GPA, Data
              Science specialization). I build full-stack products and production
              ML — from PostgreSQL schemas to React frontends, RAG pipelines,
              and forecasting systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-colors hover:bg-white"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-5"
            >
              <SocialLink
                href={site.github}
                label="GitHub"
                icon={<GithubIcon className="h-4 w-4" />}
              />
              <SocialLink
                href={site.linkedin}
                label="LinkedIn"
                icon={<LinkedinIcon className="h-4 w-4" />}
              />
              <SocialLink
                href={`mailto:${site.email}`}
                label="Email"
                icon={<Mail className="h-4 w-4" />}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-soft)]">
              <Image
                src={site.headshot}
                alt="Vaishnavi Bhalodi"
                fill
                priority
                sizes="(max-width: 1024px) 20rem, 24rem"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl opacity-50 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(129, 140, 248, 0.3), transparent 60%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(129, 140, 248, 0.18), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-full opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center top, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center top, black 40%, transparent 75%)",
        }}
      />
    </div>
  );
}
