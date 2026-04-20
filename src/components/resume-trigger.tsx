"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { site } from "@/lib/data";

export function ResumeTrigger({
  children,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={ariaLabel ?? "Open résumé"}
        className={className}
      >
        {children}
      </button>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && <ResumeModal onClose={() => setOpen(false)} />}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Résumé preview"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.99 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-full max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-soft)] shadow-2xl"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-5 py-3">
          <div className="min-w-0">
            <h2 className="display truncate text-sm font-semibold text-[var(--ink)]">
              Résumé — Vaishnavi Bhalodi
            </h2>
            <p className="truncate text-[11px] text-[var(--ink-mute)]">
              Press Esc or click outside to close
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-1.5 rounded-md bg-[var(--ink)] px-3 py-1.5 text-xs font-medium text-[var(--bg)] transition-colors hover:bg-white"
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-8 w-8 place-items-center rounded-md border border-[var(--line)] text-[var(--ink-soft)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <iframe
          src={site.resume}
          title="Résumé"
          className="h-full w-full flex-1 bg-white"
        />
      </motion.div>
    </motion.div>
  );
}
