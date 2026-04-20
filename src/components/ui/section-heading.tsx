"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={cn("flex flex-col gap-4", alignCls, className)}>
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
        {eyebrow}
      </span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.6 }}
        className="display text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold text-[var(--ink)]"
      >
        {title}
      </motion.h2>
      {lede && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-2xl text-base text-[var(--ink-soft)]"
        >
          {lede}
        </motion.p>
      )}
    </div>
  );
}
