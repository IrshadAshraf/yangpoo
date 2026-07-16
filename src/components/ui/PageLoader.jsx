import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import logo from "@/assets/navbar/image 25.png";

const orbitDots = [
  { className: "left-[8%] top-[15%] size-2.5", delay: 0 },
  { className: "right-[10%] top-[27%] size-2", delay: 0.35 },
  { className: "bottom-[18%] left-[14%] size-2", delay: 0.7 },
  { className: "bottom-[12%] right-[17%] size-3", delay: 1.05 },
];

export default function PageLoader() {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading Yangpoo University Partners"
      className="fixed inset-0 z-[9999] grid min-h-dvh place-items-center overflow-hidden bg-[#f4f9ff] px-6"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.025,
        filter: "blur(8px)",
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(12,82,159,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(12,82,159,.65)_1px,transparent_1px)] [background-size:72px_72px]"
        animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -left-28 top-[12%] size-[420px] rounded-full bg-blue-300/25 blur-[90px]"
        animate={{ x: [0, 90, 20, 0], y: [0, 45, -15, 0], scale: [0.9, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-36 -right-20 size-[470px] rounded-full bg-indigo-300/20 blur-[100px]"
        animate={{ x: [0, -80, -20, 0], y: [0, -45, 20, 0], scale: [1, 0.88, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {orbitDots.map((dot) => (
        <motion.span
          key={dot.className}
          aria-hidden="true"
          className={`absolute rounded-full bg-[#0C529F] shadow-[0_0_18px_rgba(12,82,159,.55)] ${dot.className}`}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.9, 0.2], scale: [0.7, 1.3, 0.7] }}
          transition={{ duration: 2.8, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative w-full max-w-[460px] text-center">
        <motion.div
          className="relative mx-auto grid size-32 place-items-center sm:size-40"
          initial={{ opacity: 0, scale: 0.72, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 125, damping: 18, mass: 0.9 }}
        >
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-[#0C529F]/15"
            animate={{ scale: [0.82, 1.08, 0.82], opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-2 rounded-full border border-dashed border-[#0C529F]/35"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-[18%] rounded-full bg-white/75 shadow-[0_18px_55px_rgba(12,82,159,.16)] backdrop-blur-xl"
            animate={{ boxShadow: ["0 18px 55px rgba(12,82,159,.12)", "0 22px 65px rgba(12,82,159,.24)", "0 18px 55px rgba(12,82,159,.12)"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative grid size-14 place-items-center rounded-2xl bg-[#0C529F] text-white sm:size-16"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <GraduationCap className="size-8 sm:size-9" strokeWidth={1.8} />
          </motion.div>
        </motion.div>

        <motion.img
          src={logo}
          alt="Yangpoo University Partners"
          className="mx-auto mt-5 h-auto w-[190px] sm:w-[225px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0C529F]/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <Sparkles size={14} /> Shaping your next chapter
        </motion.div>

        <div className="mx-auto mt-7 h-1 w-full max-w-[290px] overflow-hidden rounded-full bg-[#0C529F]/10">
          <motion.div
            className="h-full origin-left rounded-full bg-[linear-gradient(90deg,#0C529F,#38bdf8,#6366f1)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.15, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>

        <motion.p
          className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0, 1, 0.65, 1], y: 0 }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
        >
          Preparing your experience
        </motion.p>
      </div>
    </motion.div>
  );
}
