import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectDialog({
  trigger,
  eyebrow = "Yangpoo",
  title,
  description,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  const openDialog = () => {
    previouslyFocusedRef.current = document.activeElement;
    setIsOpen(true);
  };

  const closeDialog = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 80);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeDialog();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isOpen]);

  const dialog = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9998] grid place-items-center overflow-x-hidden overflow-y-auto bg-[#07151b]/70 px-4 py-8 backdrop-blur-md sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={description ? descriptionId : undefined}
            className="relative w-full max-w-[680px] overflow-hidden rounded-[30px] p-[2px] shadow-[0_35px_100px_rgba(2,12,27,.42)]"
            initial={{ opacity: 0, y: 42, scale: 0.92, rotateX: -8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 28, scale: 0.95, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 180, damping: 24, mass: 0.9 }}
            style={{ transformPerspective: 1000 }}
          >
            <motion.span
              aria-hidden="true"
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_5%,#7dd3fc_20%,#0C529F_34%,#a78bfa_45%,transparent_60%)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <motion.button
              ref={closeButtonRef}
              type="button"
              onClick={closeDialog}
              className="absolute right-4 top-4 z-50 grid size-10 place-items-center rounded-full border border-white/70 bg-white text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,.16)] outline-none focus-visible:ring-4 focus-visible:ring-sky-200 sm:right-6 sm:top-6 sm:size-11"
              aria-label="Close dialog"
              whileHover={{
                rotate: 90,
                scale: 1.06,
                color: "#ffffff",
                backgroundColor: "#0C529F",
                borderColor: "rgba(125,211,252,.9)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <X size={19} />
            </motion.button>

            <div className="relative max-h-[min(760px,calc(100dvh-4rem))] overflow-x-hidden overflow-y-auto rounded-[28px] bg-[linear-gradient(145deg,rgba(255,255,255,.98),rgba(240,248,255,.96))] px-6 py-7 sm:px-9 sm:py-9">
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-sky-300/20 blur-3xl"
                animate={{ x: [0, -25, 0], y: [0, 22, 0], scale: [0.9, 1.12, 0.9] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-24 size-72 rounded-full bg-violet-300/15 blur-3xl"
                animate={{ x: [0, 28, 0], y: [0, -20, 0], scale: [1, 0.88, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 pr-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0C529F]/15 bg-[#0C529F]/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0C529F]">
                  <Sparkles size={13} /> {eyebrow}
                </div>
                <h2
                  id={titleId}
                  className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.04em] text-[#151d31] sm:text-[38px]"
                >
                  {title}
                </h2>
                {description && (
                  <p id={descriptionId} className="mt-3 max-w-[590px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {description}
                  </p>
                )}
              </div>

              <div className="relative z-10 mt-7">
                {typeof children === "function" ? children({ closeDialog }) : children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {trigger({ openDialog, isOpen })}
      {typeof document !== "undefined" && createPortal(dialog, document.body)}
    </>
  );
}
