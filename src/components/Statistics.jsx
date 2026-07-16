import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCog, FaStar, FaUserFriends, FaUsers } from "react-icons/fa";

const statistics = [
  {
    value: 50000,
    suffix: "+",
    label: "Students Guided",
    icon: FaUserFriends,
    live: true,
  },
  {
    value: 100,
    suffix: "+",
    label: "University Partners",
    icon: FaStar,
  },
  {
    value: 500,
    suffix: "+",
    label: "Programs Available",
    icon: FaCog,
    live: true,
  },
  {
    value: 95,
    suffix: "%",
    label: "Student Satisfaction",
    icon: FaUsers,
  },
];

function LiveCounter({ value, suffix, live }) {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    const duration = 1800;
    const startTime = performance.now();
    let animationFrame;

    const updateCount = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(value * eased));

      if (progress < 1) animationFrame = requestAnimationFrame(updateCount);
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  useEffect(() => {
    if (!isInView || !live || count < value) return undefined;

    const interval = window.setInterval(() => {
      setCount((current) => current + 1);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [count, isInView, live, value]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function StatisticCard({ statistic, index }) {
  const Icon = statistic.icon;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 55, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
    >
      <motion.article
        className="group relative h-full overflow-hidden rounded-[24px] p-[2px]"
        animate={{ y: [0, -9, 0] }}
        transition={{
          duration: 4 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
        whileHover={{ y: -13, scale: 1.025 }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_5%,#7dd3fc_18%,#1769c4_32%,transparent_48%)]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 4.5 + index * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative flex min-h-[210px] flex-col items-center justify-center rounded-[22px] bg-[#232c31] px-3 py-7 text-center sm:min-h-[235px] sm:px-6">
          {statistic.live && (
            <span className="absolute right-3 top-3 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-sky-300 sm:right-4 sm:top-4 sm:text-[10px]">
              <motion.span
                className="size-1.5 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.7, 1], opacity: [1, 0.45, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              Live
            </span>
          )}

          <motion.div
            className="relative grid size-12 place-items-center text-[#2472cf] sm:size-16"
            animate={{
              filter: [
                "drop-shadow(0 0 3px rgba(37,119,214,0.25))",
                "drop-shadow(0 0 16px rgba(61,159,255,0.9))",
                "drop-shadow(0 0 3px rgba(37,119,214,0.25))",
              ],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.35,
            }}
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl"
              animate={{ scale: [0.7, 1.35, 0.7], opacity: [0.25, 0.75, 0.25] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
            />
            <Icon className="relative size-9 text-[#1764b9] sm:size-12" />
          </motion.div>

          <h3 className="mt-4 text-[28px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[40px] lg:text-[44px]">
            <LiveCounter
              value={statistic.value}
              suffix={statistic.suffix}
              live={statistic.live}
            />
          </h3>
          <p className="mt-3 text-xs leading-5 text-white/85 sm:text-base lg:text-lg">
            {statistic.label}
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-[#07151b] py-20 sm:py-24 lg:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(21,88,165,0.16),transparent_67%)] blur-3xl"
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            <motion.span
              className="size-2 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.35, 1], scale: [1, 1.45, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Live impact
          </div>
          <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[48px] lg:text-[54px]">
            Our Success in Numbers
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:grid-cols-4 lg:gap-7 xl:gap-8">
          {statistics.map((statistic, index) => (
            <StatisticCard
              key={statistic.label}
              statistic={statistic}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
