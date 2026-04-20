"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, highlights } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-p">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Engineer at the intersection of systems and data."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[var(--ink-soft)]">
              <p>
                I&apos;m pursuing my Master&apos;s in Software Engineering at
                Arizona State University with a 4.00 GPA and a specialization in
                Data Science. Currently, I&apos;m a Software Developer at
                Appy.Yo, building FlexyGig — a gig marketplace with real-time
                geospatial matching and an analytics dashboard for employers.
              </p>
              <p>
                Previously, I interned at Rose AI (Las Vegas), where I built
                Chart2Data — a microservice that converts charts into structured
                datasets using YOLOv7, UNet, and LineFormer — and cut inference
                latency by 35% across the pipeline.
              </p>
              <p>
                I care about the full stack of a product: the schema, the API,
                the model, the UI, and the dashboards that tell you whether any
                of it is working.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink-mute)]">
                Education
              </h3>
              <ul className="mt-4 space-y-4">
                {education.map((e) => (
                  <li key={e.school} className="card card-hover p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="display text-base font-semibold text-[var(--ink)]">
                        {e.school}
                      </span>
                      <span className="mono text-xs text-[var(--ink-mute)]">
                        {e.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">
                      {e.degree}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[var(--ink-mute)]">
                      <span>GPA {e.gpa}</span>
                      <span>·</span>
                      <span>{e.location}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 self-start">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card p-5"
              >
                <div className="display text-xl font-semibold text-[var(--ink)]">
                  {h.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {h.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
