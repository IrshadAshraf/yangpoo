import { motion } from "framer-motion";
import { BarChart3, LockKeyhole, Play, ShieldCheck } from "lucide-react";
import primaryImage from "@/assets/platform/image 3746.png";
import secondaryImage from "@/assets/platform/image 3743.png";
import { useDrawer } from "@/components/Drawer";

const features = [
  {
    title: "Anonymous responses",
    description:
      "Safe, private channels that encourage honest employee feedback.",
    icon: LockKeyhole,
  },
  {
    title: "Real-time analytics",
    description:
      "Turn every response into clear, actionable workplace intelligence.",
    icon: BarChart3,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 42, filter: "blur(10px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

function BorderTrace() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    >
      <motion.span
        animate={{ x: ["-100%", "420%"] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={{ y: ["-100%", "420%"] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "linear",
          delay: 0.55,
        }}
        className="absolute right-0 top-0 h-1/4 w-px bg-gradient-to-b from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={{ x: ["100%", "-420%"] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "linear",
          delay: 1.1,
        }}
        className="absolute bottom-0 right-0 h-px w-1/4 bg-gradient-to-l from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={{ y: ["100%", "-420%"] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "linear",
          delay: 1.65,
        }}
        className="absolute bottom-0 left-0 h-1/4 w-px bg-gradient-to-t from-transparent via-brand to-transparent"
      />
    </span>
  );
}

function Platform() {
  const { openDrawer } = useDrawer();

  const openDemo = () =>
    openDrawer({
      id: "platform-demo",
      eyebrow: "Platform walkthrough",
      title: "See employee voice become action",
      description:
        "Explore anonymous reporting, real-time analytics, and the workflows that help leaders respond with confidence.",
      content: (
        <div className="grid gap-4 sm:grid-cols-[1fr_1fr_auto]">
          <input
            aria-label="Full name"
            placeholder="Full name"
            className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none focus:border-brand"
          />
          <input
            aria-label="Work email"
            type="email"
            placeholder="Work email"
            className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none focus:border-brand"
          />
          <button
            type="button"
            className="cursor-pointer rounded-2xl bg-brand px-7 py-4 font-semibold transition hover:bg-brand/85"
          >
            Request demo
          </button>
        </div>
      ),
    });

  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-[#100e0f] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-[52px]"
    >
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-[520px] rounded-full bg-brand/10 blur-[130px]" />
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto min-h-[640px] w-full max-w-[720px] lg:mx-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="group absolute left-0 top-0 h-[570px] w-[67%] overflow-hidden rounded-bl-[24px] rounded-br-[24px] rounded-tl-[120px] rounded-tr-[24px] border border-white/10 shadow-2xl shadow-black/30"
          >
            <img
              src={primaryImage}
              alt="Employees collaborating around a laptop"
              className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            <BorderTrace />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, 12, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
              y: {
                duration: 7.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
            className="group absolute bottom-0 right-0 z-10 h-[390px] w-[61%] overflow-hidden rounded-bl-[52px] rounded-br-[120px] rounded-t-[24px] border-[14px] border-[#100e0f] bg-[#100e0f] shadow-2xl shadow-black/40"
          >
            <img
              src={secondaryImage}
              alt="A team discussing workplace insights"
              className="h-full w-full rounded-[12px] object-cover transition duration-1000 group-hover:scale-105"
            />
            <BorderTrace />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -9, 0], rotate: [0, 1.2, 0] }}
            transition={{
              opacity: { duration: 0.65, delay: 0.35 },
              scale: {
                type: "spring",
                stiffness: 160,
                damping: 16,
                delay: 0.35,
              },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.06, rotate: 0 }}
            className="absolute right-[3%] top-0 z-20 grid w-[190px] place-items-center rounded-[24px] bg-brand px-7 py-8 text-center shadow-[0_25px_65px_rgba(var(--brand-rgb),.28)]"
          >
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,.15)",
                  "0 0 0 13px rgba(255,255,255,0)",
                ],
              }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="grid size-28 place-items-center rounded-full bg-white text-[48px] font-bold text-[#25242a]"
            >
              15+
            </motion.span>
            <p className="mt-4 text-base font-semibold leading-7">
              Years of
              <br />
              Building Workplace Trust
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={reveal}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand"
          >
            Human-centered technology
          </motion.p>
          <motion.h2
            variants={reveal}
            custom={0.1}
            className="text-2xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl xl:text-[62px]"
          >
            A Modern Platform for Employee Voice
          </motion.h2>
          <motion.p
            variants={reveal}
            custom={0.2}
            className="mt-6 max-w-[720px] text-lg leading-8 text-white/60 sm:text-xl"
          >
            Anonymoose creates a secure communication channel where employees
            can share concerns, ideas, and feedback while leadership gains the
            insights needed to take meaningful action.
          </motion.p>

          <div className="mt-10 space-y-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={reveal}
                  custom={0.3 + index * 0.16}
                >
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.99 }}
                    variants={{
                      rest: { y: 0, scale: 1 },
                      hover: { y: -6, scale: 1.012 },
                    }}
                    transition={{ type: "spring", stiffness: 190, damping: 20 }}
                    className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(100deg,rgba(var(--brand-rgb),.09),rgba(255,255,255,.04))] p-6 sm:p-7"
                  >
                    <BorderTrace />
                    <motion.span
                      variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 origin-left bg-brand/10"
                    />
                    <div className="relative z-10 flex items-center gap-5">
                      <motion.span
                        variants={{
                          rest: { rotate: 0, scale: 1 },
                          hover: { rotate: index ? 8 : -8, scale: 1.12 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 15,
                        }}
                        className="grid size-14 shrink-0 place-items-center rounded-full bg-brand text-white shadow-lg shadow-brand/20"
                      >
                        <Icon size={25} />
                      </motion.span>
                      <div>
                        <h3 className="text-xl font-semibold sm:text-2xl">
                          {feature.title}
                        </h3>
                        <p className="mt-1 hidden text-sm text-white/50 sm:block">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.button
            variants={reveal}
            custom={0.6}
            whileHover={{
              y: -5,
              scale: 1.035,
              boxShadow: "0 18px 45px rgba(var(--brand-rgb),.28)",
            }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={openDemo}
            className="mt-10 flex cursor-pointer items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold"
          >
            <Play size={16} fill="currentColor" /> Get Demo
          </motion.button>
          <motion.p
            variants={reveal}
            custom={0.7}
            className="mt-5 flex items-center gap-2 text-sm text-white/45"
          >
            <ShieldCheck size={17} className="text-brand" /> Secure, anonymous,
            and designed for trust
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Platform;
