import { motion } from "framer-motion";
import {
  BarChart3,
  BriefcaseBusiness,
  ChartPie,
  Megaphone,
  MessageSquare,
  Shield,
  SlidersHorizontal,
} from "lucide-react";
import featureImage from "@/assets/features/employee-platform.webp";

const features = [
  {
    title: "Anonymous Feedback",
    description:
      "Enable employees to share honest opinions without fear of identification.",
    icon: MessageSquare,
  },
  {
    title: "Incident Reporting",
    description:
      "Receive confidential reports about workplace concerns, ethics, and safety.",
    icon: Shield,
  },
  {
    title: "Surveys & Polls",
    description:
      "Measure engagement, satisfaction, and company sentiment with ease.",
    icon: SlidersHorizontal,
  },
  {
    title: "Secure 2-Way Chat",
    description:
      "Respond to anonymous reports while maintaining full reporter privacy.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Employee Broadcasts",
    description:
      "Share important updates instantly across your entire organization.",
    icon: Megaphone,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track trends, engagement levels, and workplace sentiment in real time.",
    icon: ChartPie,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 38, scale: 0.96, filter: "blur(9px)" },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.09,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function AnimatedBorder() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    >
      <motion.span
        animate={{ x: ["-110%", "430%"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={{ y: ["-110%", "430%"] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "linear",
          delay: 0.6,
        }}
        className="absolute right-0 top-0 h-1/4 w-px bg-gradient-to-b from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={{ x: ["110%", "-430%"] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "linear",
          delay: 1.2,
        }}
        className="absolute bottom-0 right-0 h-px w-1/4 bg-gradient-to-l from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={{ y: ["110%", "-430%"] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "linear",
          delay: 1.8,
        }}
        className="absolute bottom-0 left-0 h-1/4 w-px bg-gradient-to-t from-transparent via-brand to-transparent"
      />
    </span>
  );
}

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#100e0f] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-[52px]"
    >
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 110, 0], opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 bottom-0 size-[520px] rounded-full bg-brand/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <motion.div
            variants={reveal}
            className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/65"
          >
            <motion.span
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.25, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="size-1.5 rounded-sm bg-brand"
            />{" "}
            Capabilities
          </motion.div>
          <motion.h2
            variants={reveal}
            custom={1}
            className="text-2xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[58px]"
          >
            Powerful Features for<span className="block">Modern Teams</span>
          </motion.h2>
          <motion.p
            variants={reveal}
            custom={2}
            className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-white/45"
          >
            Everything your organization needs to listen, respond, and build a
            workplace where every voice matters.
          </motion.p>
        </motion.header>

        <div className="mt-16 grid items-stretch gap-7 xl:grid-cols-[1.65fr_.82fr] xl:gap-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={reveal}
                  custom={index}
                >
                  <motion.div
                    animate={{ y: [0, index % 2 ? 5 : -5, 0] }}
                    transition={{
                      duration: 7 + index * 0.45,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.22,
                    }}
                    className="h-full"
                  >
                    <motion.article
                      initial="rest"
                      whileHover="hover"
                      variants={{
                        rest: {
                          y: 0,
                          scale: 1,
                          borderColor: "rgba(255,255,255,.10)",
                        },
                        hover: {
                          y: -7,
                          scale: 1.015,
                          borderColor: "rgba(var(--brand-rgb),.48)",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 21,
                      }}
                      className="group relative h-full min-h-[220px] cursor-default overflow-hidden rounded-[22px] border bg-[linear-gradient(135deg,rgba(255,255,255,.045),rgba(var(--brand-rgb),.035))] p-7 shadow-[0_20px_55px_rgba(0,0,0,.16)] sm:p-8"
                    >
                      <AnimatedBorder />
                      <motion.span
                        variants={{
                          rest: { scaleY: 0, opacity: 0 },
                          hover: { scaleY: 1, opacity: 1 },
                        }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 origin-bottom bg-[linear-gradient(145deg,rgba(var(--brand-rgb),.22),rgba(var(--brand-rgb),.055))]"
                      />
                      <motion.span
                        variants={{
                          rest: { rotate: 0, scale: 1 },
                          hover: { rotate: index % 2 ? 8 : -8, scale: 1.12 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 230,
                          damping: 15,
                        }}
                        className="relative z-10 grid size-12 place-items-center rounded-xl bg-brand text-white shadow-lg shadow-brand/20"
                      >
                        <Icon size={22} />
                      </motion.span>
                      <h3 className="relative z-10 mt-6 text-xl font-semibold tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="relative z-10 mt-3 max-w-[420px] text-sm leading-6 text-white/45 transition-colors duration-500 group-hover:text-white/70">
                        {feature.description}
                      </p>
                      <motion.span
                        variants={{
                          rest: { width: 0 },
                          hover: { width: "100%" },
                        }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-0 left-0 z-10 h-1 bg-brand"
                      />
                    </motion.article>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 45, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="group relative min-h-[660px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30 xl:min-h-0"
          >
            <motion.div
              animate={{ y: [0, -9, 0], scale: [1, 1.012, 1] }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <img
                src={featureImage}
                alt="Employee using the AnonyMoose communication platform"
                className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.035]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <AnimatedBorder />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-7 left-7 flex items-center gap-3 rounded-2xl border border-white/15 bg-black/45 px-4 py-3 backdrop-blur-xl"
            >
              <span className="grid size-9 place-items-center rounded-full bg-brand">
                <BarChart3 size={18} />
              </span>
              <span>
                <b className="block text-sm">Live insights</b>
                <small className="text-white/50">Listening in real time</small>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;
