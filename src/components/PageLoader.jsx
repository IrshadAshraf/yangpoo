import { motion, useReducedMotion } from "framer-motion";

const brass = "#c9a66b";

function CornerOrnament({ className, rotate = 0 }) {
  return (
    <motion.svg
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 0.72, pathLength: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      viewBox="0 0 100 100"
      className={`absolute size-16 sm:size-24 ${className}`}
      style={{ rotate }}
      fill="none"
      aria-hidden="true"
    >
      <motion.path d="M4 96V30C4 15 15 4 30 4h66M15 84V35c0-11 9-20 20-20h49" stroke={brass} strokeWidth="1.2" />
      <motion.path d="M28 4c0 14-10 24-24 24M15 42c14 0 27-13 27-27" stroke={brass} strokeWidth="1" />
      <circle cx="15" cy="15" r="3" fill={brass} />
    </motion.svg>
  );
}

function PageLoader() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0.01 : 1.9;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.025, filter: "blur(12px)" }}
      transition={{ duration: reduceMotion ? 0.1 : 0.65, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] grid min-h-[100dvh] place-items-center overflow-hidden bg-[#100d0b] px-5 text-[#eadcc5]"
      role="status"
      aria-label="Loading AnonyMoose"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,166,107,.13),transparent_32%),radial-gradient(circle_at_18%_15%,rgba(var(--brand-rgb),.12),transparent_28%),linear-gradient(135deg,#17110e,#090807_66%,#160d0c)]" />
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { backgroundPosition: ["0px 0px", "90px 60px"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:repeating-radial-gradient(circle_at_20%_30%,#fff_0,#fff_.5px,transparent_.8px,transparent_4px)] [background-size:9px_9px]"
      />

      <div className="absolute inset-4 border border-[#c9a66b]/20 sm:inset-7" />
      <div className="absolute inset-[21px] border border-[#c9a66b]/[0.07] sm:inset-[34px]" />
      <CornerOrnament className="left-4 top-4 sm:left-7 sm:top-7" />
      <CornerOrnament className="right-4 top-4 sm:right-7 sm:top-7" rotate={90} />
      <CornerOrnament className="bottom-4 right-4 sm:bottom-7 sm:right-7" rotate={180} />
      <CornerOrnament className="bottom-4 left-4 sm:bottom-7 sm:left-7" rotate={270} />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.13 } } }}
        className="relative flex w-full max-w-xl flex-col items-center text-center"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: -12 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3 text-[9px] uppercase tracking-[0.42em] text-[#c9a66b]/65 sm:text-[10px]">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c9a66b]/60" />
          Established MMXXVI
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c9a66b]/60" />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, scale: 0.72, rotate: -8 }, visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 130, damping: 15 } } }} className="relative mt-7 grid size-32 place-items-center sm:size-40">
          <motion.span animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-[#c9a66b]/35" />
          <motion.span animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute inset-2 rounded-full border border-[#c9a66b]/15 before:absolute before:left-1/2 before:top-[-3px] before:size-1.5 before:-translate-x-1/2 before:rounded-full before:bg-brand before:shadow-[0_0_14px_var(--brand)]" />
          <span className="absolute inset-5 rounded-full border border-[#c9a66b]/40 bg-black/20 shadow-[inset_0_0_35px_rgba(201,166,107,.08),0_0_45px_rgba(0,0,0,.35)]" />
          <motion.img animate={reduceMotion ? undefined : { y: [0, -4, 0], filter: ["drop-shadow(0 0 5px rgba(201,166,107,.25))", "drop-shadow(0 0 13px rgba(201,166,107,.5))", "drop-shadow(0 0 5px rgba(201,166,107,.25))"] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }} src="/favicon-white.svg" alt="" className="relative z-10 h-16 w-20 opacity-90 sm:h-20 sm:w-24" />
        </motion.div>

        <motion.p variants={{ hidden: { opacity: 0, y: 13 }, visible: { opacity: 1, y: 0 } }} className="mt-7 font-serif text-[11px] uppercase tracking-[0.42em] text-[#c9a66b] sm:text-xs">Anonymous by design</motion.p>
        <motion.h1 variants={{ hidden: { opacity: 0, y: 16, letterSpacing: "0.18em" }, visible: { opacity: 1, y: 0, letterSpacing: "-0.035em", transition: { duration: 0.8 } } }} className="mt-3 font-serif text-4xl font-medium sm:text-6xl">
          Anony<span className="text-brand">Moose</span>
        </motion.h1>
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.35em] text-white/35 sm:text-[10px]">
          <span>Listen</span><span className="text-[#c9a66b]">◆</span><span>Protect</span><span className="text-[#c9a66b]">◆</span><span>Act</span>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, width: "35%" }, visible: { opacity: 1, width: "100%" } }} className="mt-9 max-w-[330px]">
          <div className="relative h-px overflow-visible bg-[#c9a66b]/20">
            <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration, delay: 0.35, ease: [0.65, 0, 0.35, 1] }} className="absolute inset-0 origin-left bg-gradient-to-r from-brand via-[#e5c895] to-brand" />
            <motion.span initial={{ left: "0%" }} animate={{ left: "100%" }} transition={{ duration, delay: 0.35, ease: [0.65, 0, 0.35, 1] }} className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#e5c895] shadow-[0_0_16px_rgba(229,200,149,.75)]" />
          </div>
          <motion.p animate={reduceMotion ? undefined : { opacity: [0.35, 0.8, 0.35] }} transition={{ duration: 1.5, repeat: Infinity }} className="mt-4 font-serif text-[10px] italic tracking-[0.18em] text-[#c9a66b]/70">Preparing your private workplace…</motion.p>
        </motion.div>
      </motion.main>
    </motion.div>
  );
}

export default PageLoader;
