"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { leadership } from "@/lib/data";

export function Leadership() {
  return (
    <section id="leadership" className="section-p">
      <div className="container-page">
        <SectionHeading eyebrow="Leadership" title="Community & mentorship." />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {leadership.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card card-hover p-6"
            >
              <h3 className="display text-base font-semibold text-[var(--ink)]">
                {l.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--accent)]">{l.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                {l.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
