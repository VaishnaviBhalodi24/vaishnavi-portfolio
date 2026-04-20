"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-p">
      <div className="container-page">
        <SectionHeading eyebrow="Experience" title="Where I've worked." />

        <ol className="mt-12 space-y-5">
          {experiences.map((e, i) => (
            <motion.li
              key={e.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card card-hover p-6 md:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="display text-lg font-semibold text-[var(--ink)]">
                    {e.role}
                    <span className="text-[var(--ink-soft)]"> · </span>
                    <span className="text-[var(--accent)]">{e.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-[var(--ink-mute)]">
                    {e.location}
                  </p>
                </div>
                <span className="mono text-xs text-[var(--ink-mute)]">
                  {e.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {e.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--ink-soft)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[var(--ink-mute)]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {e.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-[var(--line)] bg-[var(--bg-elev)] px-2.5 py-1 text-[11px] text-[var(--ink-soft)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
