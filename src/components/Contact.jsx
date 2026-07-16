import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectDialog from "@/components/ui/ProjectDialog";
import cloudBackground from "@/assets/footer/Footer_BG.png";
import contactStudents from "@/assets/contact/image 28.png";

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
        animate={{
          x: [0, 100, 20, 0],
          y: [0, -30, 38, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[16%] size-56 rounded-full bg-blue-300/25 blur-3xl"
        animate={{
          x: [0, -85, -15, 0],
          y: [0, 48, -22, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto max-w-[1600px] overflow-visible rounded-[34px] p-[2px] shadow-[0_26px_65px_rgba(12,82,159,.2)]"
        initial={{ opacity: 0, y: 55, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        whileHover={{
          y: -5,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 23,
            mass: 0.9,
          },
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[34px]"
        >
          <motion.span
            className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_5%,#7dd3fc_18%,#ffffff_27%,#0C529F_40%,#a78bfa_49%,transparent_62%)] opacity-65"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-[#0a4384] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-20">
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30 origin-right bg-[linear-gradient(110deg,#eaf3fb,#ffffff,#dce9f6)]"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.95,
              delay: 0.12,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#083b77_0%,#1558a5_24%,#087cad_48%,#4338a8_70%,#0C529F_100%)]"
            style={{ backgroundSize: "320% 320%" }}
            animate={{
              backgroundPosition: ["0% 20%", "95% 65%", "35% 100%", "0% 20%"],
            }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -left-[12%] -top-[75%] h-[520px] w-[620px] rounded-[48%] bg-cyan-300/18 blur-3xl"
            animate={{
              x: [0, 260, 70, 0],
              y: [0, 90, 180, 0],
              rotate: [0, 75, 150, 360],
              scale: [1, 1.2, 0.85, 1],
            }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[100%] right-[-8%] h-[560px] w-[580px] rounded-[45%] bg-violet-300/20 blur-3xl"
            animate={{
              x: [0, -240, -60, 0],
              y: [0, -120, -190, 0],
              rotate: [360, 240, 120, 0],
              scale: [0.9, 1.18, 0.95, 0.9],
            }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-[60px] opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:54px_54px]"
            animate={{ x: [0, 54, 0], y: [0, 54, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
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

          <div className="relative z-10 grid items-center gap-9 lg:grid-cols-[240px_1fr_auto] lg:gap-12 xl:grid-cols-[270px_1fr_auto] xl:gap-16">
            <motion.div
              className="relative hidden h-full min-h-[190px] w-full lg:block"
              initial={{ opacity: 0, x: -45, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.65 }}
            >
              <motion.div
                className="relative mb-4 inline-flex overflow-hidden rounded-full p-[1px]"
                initial={{ opacity: 0, y: 14, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,.16)",
                    "0 0 0 rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  opacity: { duration: 0.55, delay: 0.5 },
                  y: { duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                  scale: {
                    duration: 0.55,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  boxShadow: { duration: 3, repeat: Infinity },
                }}
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute -inset-[140%] bg-[conic-gradient(from_0deg,transparent_8%,rgba(255,255,255,.95)_22%,#67e8f9_34%,#93c5fd_45%,transparent_60%)]"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0a4384]/90 px-3 py-1.5 text-xs font-semibold capitalize tracking-[0.16em] backdrop-blur-md">
                  <Sparkles size={14} /> Your next chapter
                </span>
              </motion.div>
              <motion.h2
                className="max-w-[720px] text-[36px] font-semibold leading-[1.2] tracking-[-0.04em] lg:text-[24px] xl:text-[40px]"
                initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.72,
                  delay: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Ready to Take the Next Step in Your Career?
              </motion.h2>
            </motion.div>

            <motion.div
              className="relative z-20 flex min-w-[260px] flex-col gap-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.65 }}
            >
              <ProjectDialog
                eyebrow="Explore programs"
                title="Find a learning pathway that moves you forward"
                description="Compare flexible online degrees, professional certifications, and executive programs from recognized university partners."
                trigger={({ openDialog }) => (
                  <AnimatedButton
                    type="button"
                    onClick={openDialog}
                    className="group relative w-full overflow-hidden rounded-full bg-white px-7 py-4 text-center font-semibold text-black shadow-lg transition hover:-translate-y-1"
                  >
                    <span className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-blue-100 to-transparent transition-transform duration-700 group-hover:translate-x-[500%]" />
                    <span className="relative inline-flex items-center gap-2">
                      Explore Programs{" "}
                      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </AnimatedButton>
                )}
              >
                {({ closeDialog }) => (
                  <div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        [GraduationCap, "Online degrees", "Earn a recognized undergraduate or postgraduate qualification."],
                        [Clock3, "Executive learning", "Build leadership skills through focused, flexible programs."],
                        [CheckCircle2, "Certifications", "Develop practical expertise for fast-changing industries."],
                      ].map(([Icon, title, copy]) => (
                        <div key={title} className="min-w-0 rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-sm">
                          <Icon className="size-5 text-[#0C529F]" />
                          <h3 className="mt-3 text-sm font-bold text-[#151d31]">{title}</h3>
                          <p className="mt-1 break-words text-xs leading-5 text-slate-600">{copy}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-5 rounded-2xl border-l-4 border-[#0C529F] bg-[#0C529F]/5 p-4 text-sm leading-6 text-slate-700">
                      Explore featured pathways and detailed course cards to compare lesson formats, learner communities, tuition, and university options.
                    </p>
                    <AnimatedButton smooth to="/#featured-programs" onClick={closeDialog} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0C529F] px-6 py-3 text-sm font-semibold text-white">
                      Browse programs <ArrowRight size={17} />
                    </AnimatedButton>
                  </div>
                )}
              </ProjectDialog>

              <ProjectDialog
                eyebrow="Free consultation"
                title="Plan your next step with an education advisor"
                description="Book a personalized conversation about your goals, experience, eligibility, preferred study format, and suitable program options."
                trigger={({ openDialog }) => (
                  <AnimatedButton
                    type="button"
                    onClick={openDialog}
                    className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#0C529F] hover:shadow-lg"
                  >
                    <CalendarCheck size={18} /> Book a Free Consultation
                  </AnimatedButton>
                )}
              >
                {({ closeDialog }) => (
                  <div>
                    <div className="rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#0C529F] text-white"><MessagesSquare size={21} /></span>
                        <div>
                          <h3 className="font-bold text-[#151d31]">What we’ll discuss</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">Your career direction, relevant programs, university choices, admission requirements, schedules, and available next steps.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                      {["Personalized recommendations", "Eligibility guidance", "Application assistance", "No-obligation consultation"].map((item) => (
                        <p key={item} className="flex items-center gap-2 rounded-xl bg-[#0C529F]/5 px-4 py-3"><CheckCircle2 className="size-4 shrink-0 text-[#0C529F]" /> {item}</p>
                      ))}
                    </div>
                    <AnimatedButton smooth to="/#contact" onClick={closeDialog} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0C529F] px-6 py-3 text-sm font-semibold text-white">
                      Request consultation <CalendarCheck size={17} />
                    </AnimatedButton>
                  </div>
                )}
              </ProjectDialog>
            </motion.div>
          </div>
        </div>
        <img
          src={contactStudents}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-[2.5%] z-20 hidden h-[calc(100%+34px)] w-auto max-w-none object-contain object-bottom lg:block xl:left-[3.5%]"
        />
      </motion.div>
    </section>
  );
}
