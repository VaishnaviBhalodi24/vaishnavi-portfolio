"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-p">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Toolbox."
          lede="The languages, frameworks, and services I work in every day."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="card p-6"
            >
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                {g.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-[var(--line)] bg-[var(--bg-elev)] px-2.5 py-1 text-xs text-[var(--ink-soft)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
