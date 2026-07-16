import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import cloudBackground from "@/assets/footer/Footer_BG.png";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#dce9f6_25%,#8bafd4_100%)] px-5 pb-10 pt-20 sm:pb-12 sm:pt-24 lg:px-8 lg:pt-28">
      <motion.img
        src={cloudBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-18%] h-[90%] w-full object-cover opacity-30"
        animate={{
          x: [-35, 45, -12, -35],
          y: [0, -10, 7, 0],
          scale: [1.06, 1.11, 1.08, 1.06],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[28%] size-40 rounded-full bg-white/35 blur-3xl"
        animate={{ x: [0, 100, 20, 0], y: [0, -30, 38, 0], scale: [1, 1.25, 0.9, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[16%] size-56 rounded-full bg-blue-300/25 blur-3xl"
        animate={{ x: [0, -85, -15, 0], y: [0, 48, -22, 0], scale: [1, 0.9, 1.2, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[34px] p-[2px] shadow-[0_26px_65px_rgba(12,82,159,.2)]"
        initial={{ opacity: 0, y: 55, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        whileHover={{ y: -6 }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_5%,#7dd3fc_18%,#ffffff_27%,#0C529F_40%,#a78bfa_49%,transparent_62%)] opacity-65"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative overflow-hidden rounded-[32px] bg-[#1558a5] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-20">
          <motion.span
            aria-hidden="true"
            className="absolute -right-20 -top-24 size-72 rounded-full border border-white/10"
            animate={{ rotate: 360, scale: [1, 1.15, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-[-55%] left-[25%] size-80 rounded-full bg-cyan-300/10 blur-3xl"
            animate={{ x: [-40, 90, -40], opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative grid items-center gap-9 lg:grid-cols-[1fr_auto] lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.65 }}>
              <motion.div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-md" animate={{ boxShadow: ["0 0 0 rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,.16)", "0 0 0 rgba(255,255,255,0)"] }} transition={{ duration: 3, repeat: Infinity }}>
                <Sparkles size={14} /> Your next chapter
              </motion.div>
              <h2 className="max-w-[720px] text-[36px] font-semibold leading-[1.2] tracking-[-0.04em] sm:text-[48px] lg:text-[54px]">
                Ready to Take the Next Step in Your Career?
              </h2>
            </motion.div>

            <motion.div className="flex min-w-[260px] flex-col gap-4" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.65 }}>
              <HashLink smooth to="/#featured-programs" className="group relative overflow-hidden rounded-full bg-white px-7 py-4 text-center font-semibold text-black shadow-lg transition hover:-translate-y-1">
                <span className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-blue-100 to-transparent transition-transform duration-700 group-hover:translate-x-[500%]" />
                <span className="relative inline-flex items-center gap-2">Explore Programs <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></span>
              </HashLink>
              <HashLink smooth to="/#contact" className="group flex items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#0C529F] hover:shadow-lg">
                <CalendarCheck size={18} /> Book a Free Consultation
              </HashLink>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
