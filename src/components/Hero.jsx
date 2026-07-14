import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ChevronUp,
  Globe2,
  Play,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { FaStar } from "react-icons/fa";
import video from "@/assets/hero/analytics-background-1080p.mp4";
import avatar1 from "@/assets/hero/avatar-1.png";
import avatar2 from "@/assets/hero/avatar-2.png";
import avatar3 from "@/assets/hero/avatar-3.png";
import { useDrawer } from "@/components/Drawer";

const avatars = [avatar1, avatar2, avatar3];

function AnimatedDealerCount({ value }) {
  const count = useMotionValue(0);
  const displayCount = useTransform(
    count,
    (latest) => `${latest.toFixed(2)}M+`,
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration: count.get() === 0 ? 1.8 : 0.8,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, value]);

  return <motion.span>{displayCount}</motion.span>;
}

function Hero() {
  const [dealersExpanded, setDealersExpanded] = useState(false);
  const [dealerMetrics, setDealerMetrics] = useState({
    active: 1.6,
    engagement: 92,
    growth: 16,
  });
  const { openDrawer } = useDrawer();

  const openDemo = () =>
    openDrawer({
      id: "demo",
      eyebrow: "Live product tour",
      title: "See AnonyMoose in action",
      description:
        "Book a focused 30-minute walkthrough tailored to your workplace and reporting needs.",
      content: (
        <form
          className="grid gap-4 sm:grid-cols-[1fr_1fr_auto]"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            aria-label="Your name"
            placeholder="Your name"
            className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none focus:border-[#f43b37]"
          />
          <input
            aria-label="Business email"
            type="email"
            placeholder="Business email"
            className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none focus:border-[#f43b37]"
          />
          <button
            type="submit"
            className="rounded-2xl bg-[#f43b37] px-7 py-4 font-semibold hover:bg-[#ff4b47]"
          >
            Book demo
          </button>
        </form>
      ),
    });

  const openLearnMore = () =>
    openDrawer({
      id: "learn-more",
      eyebrow: "Why AnonyMoose",
      title: "Every employee deserves to be heard",
      description:
        "Capture honest feedback, identify sensitive issues early, and turn workplace signals into meaningful action.",
      content: (
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Truly anonymous",
              text: "Privacy-first reporting that earns employee trust.",
            },
            {
              icon: Zap,
              title: "Real-time signals",
              text: "See trends and emerging concerns as they happen.",
            },
            {
              icon: Globe2,
              title: "Built to scale",
              text: "Support teams across locations, roles, and regions.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <Icon className="mb-4 text-[#ff4b47]" />
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
            </div>
          ))}
        </div>
      ),
    });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDealerMetrics((current) => ({
        active: Math.min(1.99, current.active + 0.01),
        engagement: Math.min(
          99,
          current.engagement + (Math.random() > 0.65 ? 1 : 0),
        ),
        growth: Math.max(
          12,
          Math.min(24, current.growth + (Math.random() > 0.5 ? 1 : -1)),
        ),
      }));
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main
      id="hero"
      className="relative min-h-[870px] overflow-hidden bg-[#0b080a] text-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[59%_center] opacity-90 [filter:brightness(1.08)_contrast(1.08)_saturate(1.22)] lg:object-center lg:opacity-100"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,9,11,.93)_0%,rgba(12,9,11,.72)_27%,rgba(12,9,11,.12)_62%,rgba(12,9,11,.02)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0b080a]/90 to-transparent" />

      <section className="relative z-10 mx-auto flex min-h-[870px] max-w-[1500px] items-center px-6 pb-14 pt-6 sm:px-10 sm:pt-10 lg:px-12 2xl:px-0">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[530px]"
        >
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(244,59,55,.18)",
            }}
            className="mb-9 inline-flex items-center gap-2 rounded-full border border-[#f43b37]/35 bg-[#f43b37]/10 px-4 py-2 text-sm font-medium text-[#ff4945]"
          >
            <span aria-hidden="true">🎯</span> Trusted by 500+ Companies
          </motion.div>

          <h1 className="text-[53px] font-bold leading-[1.04] tracking-[-0.045em] sm:text-[68px] lg:text-[72px]">
            Voice of the
            <span className="mt-1 block text-[#f43b37] underline decoration-[#f43b37] decoration-[5px] underline-offset-[16px]">
              Humans
            </span>
          </h1>

          <p className="mt-9 max-w-[520px] text-lg leading-7 text-white/80 sm:text-xl sm:leading-8">
            For Active Listening, Employee Pulsing, Sensitive Incident Reporting
            and Broadcast.
          </p>

          <div className="mt-8 flex gap-4">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <button
                type="button"
                onClick={openDemo}
                className="flex items-center gap-2.5 rounded-full bg-[#f43b37] px-6 py-4 font-semibold shadow-lg shadow-[#f43b37]/20 transition hover:bg-[#ff4b47] text-sm sm:text-base cursor-pointer"
              >
                <Play size={16} fill="currentColor" /> Get Demo
              </button>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <button
                type="button"
                onClick={openLearnMore}
                className="flex items-center gap-3 rounded-full border-2 border-white/90 px-5 py-3.5 font-semibold transition hover:bg-white hover:text-black  text-sm sm:text-base cursor-pointer"
              >
                Learn More <ArrowRight size={18} className="text-[#f43b37]" />
              </button>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <motion.img
                  key={avatar}
                  src={avatar}
                  alt="AnonyMoose customer"
                  animate={{ y: [0, -5 - index, 0] }}
                  transition={{
                    duration: 2.8 + index * 0.45,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.22,
                  }}
                  whileHover={{ y: -9, scale: 1.13, zIndex: 10 }}
                  className="size-10 rounded-full border-2 border-white object-cover"
                  style={{ zIndex: 4 - index }}
                />
              ))}
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7,
                }}
                className="relative z-0 grid size-10 place-items-center rounded-full border-2 border-white bg-[#f43b37] text-xs font-semibold"
              >
                +5
              </motion.span>
            </div>
            <div>
              <div className="flex gap-1 text-[#ffd435]">
                {[0, 1, 2, 3, 4].map((star) => (
                  <FaStar key={star} size={15} />
                ))}
              </div>
              <p className="mt-1 text-sm text-white/80">
                500+ teams trust AnonyMoose
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-400" />
              100% Anonymous
            </span>
            <b>•</b>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-indigo-400" />
              GDPR Compliant
            </span>
            <b>•</b>
            <span className="flex items-center gap-1.5">
              <Zap size={15} fill="currentColor" className="text-[#f43b37]" />
              Real-time Insights
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-[190px] left-[48%] hidden items-center gap-4 rounded-2xl border border-white/60 bg-black/35 px-5 py-4 backdrop-blur-md xl:flex"
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#f43b37]/20 text-[#f43b37]">
            <Globe2 size={20} />
          </span>
          <span>
            <b className="block text-sm">Global</b>
            <small className="text-white/70">Workplace Insights</small>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="absolute bottom-[108px] right-[24%] hidden items-center gap-4 rounded-2xl border border-white/60 bg-black/40 px-5 py-4 backdrop-blur-md xl:flex"
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#f43b37]/20 text-[#f43b37]">
            <CalendarCheck size={20} />
          </span>
          <span>
            <b className="block text-sm">30+ Years</b>
            <small className="text-white/70">Experience</small>
          </span>
        </motion.div>

        <motion.button
          type="button"
          layout
          aria-expanded={dealersExpanded}
          aria-label={
            dealersExpanded
              ? "Collapse active dealers details"
              : "Expand active dealers details"
          }
          onClick={() => setDealersExpanded((value) => !value)}
          initial={{ opacity: 0, scale: 0.82, y: 35 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
            width: dealersExpanded ? 410 : 220,
            right: dealersExpanded ? 0 : 95,
          }}
          transition={{
            opacity: { delay: 1.15, duration: 0.45 },
            scale: { delay: 1.15, type: "spring", stiffness: 180, damping: 16 },
            y: {
              delay: 1.6,
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            width: { type: "spring", stiffness: 190, damping: 23 },
            right: { type: "spring", stiffness: 190, damping: 23 },
            layout: { type: "spring", stiffness: 210, damping: 24 },
          }}
          whileHover={{
            scale: 1.035,
            boxShadow: "0 28px 75px rgba(244,59,55,.38)",
          }}
          whileTap={{ scale: 0.98 }}
          className="absolute bottom-8 hidden overflow-hidden rounded-[36px] bg-gradient-to-br from-[#ff4641] to-[#bb2a28] p-7 text-left shadow-[0_24px_65px_rgba(244,59,55,.28)] outline-none ring-white/70 focus-visible:ring-2 md:block xl:bottom-7"
        >
          <motion.span layout className="flex items-center justify-between">
            <span className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <motion.img
                  key={`dealer-${avatar}`}
                  src={avatar}
                  alt="Active dealer"
                  animate={{
                    y: [0, -6 - index * 1.5, 0],
                    rotate: [0, index % 2 ? 2 : -2, 0],
                  }}
                  transition={{
                    duration: 3.1 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="size-12 rounded-full border-[3px] border-white object-cover shadow-lg"
                />
              ))}
            </span>
            <motion.span
              animate={{ rotate: dealersExpanded ? 180 : 0 }}
              className="grid size-8 place-items-center rounded-full bg-black/15"
            >
              <ChevronUp size={17} />
            </motion.span>
          </motion.span>

          <motion.span
            layout="position"
            className="mt-4 block text-[34px] font-medium leading-none tracking-tight"
          >
            <AnimatedDealerCount value={dealerMetrics.active} />
          </motion.span>
          <motion.span
            layout="position"
            className="mt-2 block text-lg text-white/90"
          >
            active Dealers
          </motion.span>

          <AnimatePresence initial={false}>
            {dealersExpanded && (
              <motion.span
                key="dealer-details"
                initial={{ opacity: 0, height: 0, y: 12 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block overflow-hidden"
              >
                <span className="my-5 block h-px bg-white/20" />
                <span className="grid grid-cols-2 gap-3">
                  <motion.span layout className="rounded-2xl bg-black/15 p-4">
                    <motion.b
                      key={dealerMetrics.engagement}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="block text-xl"
                    >
                      {dealerMetrics.engagement}%
                    </motion.b>
                    <small className="text-white/70">Engagement</small>
                  </motion.span>
                  <motion.span layout className="rounded-2xl bg-black/15 p-4">
                    <motion.b
                      key={dealerMetrics.growth}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-1 text-xl"
                    >
                      +{dealerMetrics.growth}% <TrendingUp size={15} />
                    </motion.b>
                    <small className="text-white/70">This month</small>
                  </motion.span>
                </span>
                <span className="mt-4 flex items-center gap-2 text-xs text-white/75">
                  <span className="size-2 rounded-full bg-emerald-300" /> Live
                  workplace network
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </section>
    </main>
  );
}

export default Hero;
