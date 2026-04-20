"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "user" | "assistant";
type ChatMessage = { id: string; role: Role; content: string };

const SUGGESTIONS = [
  "What is Vaishnavi working on right now?",
  "Walk me through her most impressive project.",
  "What's her tech stack?",
  "Is she open to full-time roles?",
];

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm an AI assistant trained on Vaishnavi's background. Ask me about her projects, experience, or skills — I'll keep it short and accurate.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    const assistantId = crypto.randomUUID();
    const next = [...messages, userMsg];
    setMessages([...next, { id: assistantId, role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const detail = await res.text().catch(() => "");
        throw new Error(detail || `Request failed (${res.status})`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((msgs) =>
          msgs.map((m) =>
            m.id === assistantId ? { ...m, content: acc } : m,
          ),
        );
      }
      if (!acc.trim()) {
        setMessages((msgs) =>
          msgs.map((m) =>
            m.id === assistantId
              ? { ...m, content: "Hmm, I didn't get a response. Try again?" }
              : m,
          ),
        );
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setError((err as Error).message || "Something went wrong.");
      setMessages((msgs) => msgs.filter((m) => m.id !== assistantId));
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        initial={false}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-[var(--line-strong)] shadow-lg transition-colors md:bottom-6 md:right-6",
          open
            ? "bg-[var(--bg-soft)] text-[var(--ink)]"
            : "bg-[var(--ink)] text-[var(--bg)] hover:bg-white",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Portfolio assistant"
            data-lenis-prevent
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-3 z-40 flex h-[min(560px,calc(100vh-6rem))] w-[min(380px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-soft)]/70 shadow-2xl backdrop-blur-xl backdrop-saturate-150 md:right-6 md:bottom-24"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-[var(--bg)]">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid h-7 w-7 place-items-center rounded-md text-[var(--ink-soft)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--ink)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              ref={scrollRef}
              data-lenis-prevent
              className="flex-1 overflow-y-auto overscroll-contain px-4 py-4"
              aria-live="polite"
            >
              <ul className="space-y-3">
                {messages.map((m) => (
                  <li
                    key={m.id}
                    className={cn(
                      "flex",
                      m.role === "user" ? "justify-end" : "justify-start",
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-sm leading-relaxed [overflow-wrap:anywhere]",
                        m.role === "user"
                          ? "bg-[var(--ink)] text-[var(--bg)] rounded-br-sm"
                          : "border border-[var(--line)] bg-[var(--bg)]/60 text-[var(--ink)] rounded-bl-sm backdrop-blur",
                      )}
                    >
                      {m.content || (
                        <TypingDots />
                      )}
                    </div>
                  </li>
                ))}
                {error && (
                  <li className="text-xs text-red-400">Error: {error}</li>
                )}
              </ul>

              {messages.length === 1 && !loading && (
                <div className="mt-5 space-y-1.5">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-mute)]">
                    Try asking
                  </p>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="block w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-left text-xs text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={onSubmit}
              className="flex items-end gap-2 border-t border-[var(--line)] bg-transparent px-3 py-3"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Ask anything about Vaishnavi…"
                disabled={loading}
                className="max-h-28 flex-1 resize-none rounded-lg border border-[var(--line)] bg-[var(--bg)]/60 px-3 py-2 text-sm text-[var(--ink)] placeholder:text-[var(--ink-mute)] outline-none transition-colors focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--ink)] text-[var(--bg)] transition-opacity hover:bg-white disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[var(--ink-mute)]"
          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12 }}
        />
      ))}
    </span>
  );
}
