import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ArrowRight, Layers3, Play, Target, TrendingUp } from "lucide-react";
import dashboard from "@/assets/workforce/analytics-dashboard.webp";
import { useDrawer } from "@/components/Drawer";

const capabilities = [
  {
    title: "Real-Time Feedback",
    description:
      "Receive employee insights as they happen. Stay agile with a pulse on your culture that never skips a beat.",
    icon: TrendingUp,
    accent: "Live now",
    sentiment: 82,
    engagement: 94.5,
    change: "+4.2% from prev. period",
    concerns: [
      { label: "Work-Life Balance", value: 82 },
      { label: "Remote Flexibility", value: 65 },
    ],
  },
  {
    title: "Sentiment Tracking",
    description:
      "Monitor morale and identify trends before they become problems. Advanced AI decodes the mood across departments.",
    icon: Target,
    accent: "AI monitored",
    sentiment: 88,
    engagement: 91.2,
    change: "+7.8% sentiment accuracy",
    concerns: [
      { label: "Team Recognition", value: 74 },
      { label: "Manager Support", value: 61 },
    ],
  },
  {
    title: "Actionable Analytics",
    description:
      "Transform feedback into measurable improvements. Data-backed strategies reduce turnover and boost productivity.",
    icon: Layers3,
    accent: "12 insights",
    sentiment: 86,
    engagement: 96.1,
    change: "+18 actions this month",
    concerns: [
      { label: "Career Development", value: 78 },
      { label: "Meeting Efficiency", value: 59 },
    ],
  },
];

const analyticsViews = [
  {
    label: "Sentiment",
    value: "82%",
    detail: "Positive workforce sentiment",
    width: "82%",
  },
  {
    label: "Engagement",
    value: "94.5%",
    detail: "Up 14.2% from last period",
    width: "94.5%",
  },
  {
    label: "Participation",
    value: "95%+",
    detail: "Across active departments",
    width: "95%",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(9px)" },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.12,
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function AnimatedNumber({ value, decimals = 0, suffix = "%", className = "" }) {
  const number = useMotionValue(0);
  const display = useTransform(
    number,
    (latest) => `${latest.toFixed(decimals)}${suffix}`,
  );

  useEffect(() => {
    const controls = animate(number, value, {
      duration: number.get() === 0 ? 1.35 : 0.75,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [decimals, number, value]);

  return <motion.span className={className}>{display}</motion.span>;
}

function MobileAnalytics({ data }) {
  return (
    <div className="grid gap-5 md:grid-cols-[1.05fr_.95fr]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#11151d] p-3"
      >
        <img
          src={dashboard}
          alt={`${data.title} analytics dashboard`}
          className="h-full min-h-[240px] w-full rounded-2xl object-cover"
        />
        <motion.span
          animate={{ x: ["-140%", "170%"] }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1 }}
          className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
        />
        <span className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-2 text-[10px] uppercase tracking-wider text-brand backdrop-blur-md">
          <motion.span
            animate={{ scale: [1, 1.7, 1], opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="size-2 rounded-full bg-brand"
          />
          Live analytics
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.12, duration: 0.5 }}
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
          >
            <p className="text-xs text-white/40">Sentiment</p>
            <p className="mt-3 text-3xl font-semibold">
              <AnimatedNumber value={data.sentiment} />
            </p>
            <p className="mt-1 text-xs text-brand">Positive</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
          >
            <p className="text-xs text-white/40">Engagement</p>
            <p className="mt-3 text-3xl font-semibold">
              <AnimatedNumber value={data.engagement} decimals={1} />
            </p>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${data.engagement}%` }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-brand"
              />
            </div>
          </motion.div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
            Top concerns
          </p>
          <div className="mt-4 space-y-4">
            {data.concerns.map((concern, index) => (
              <div key={concern.label}>
                <div className="mb-2 flex justify-between text-xs">
                  <span>{concern.label}</span>
                  <b>
                    <AnimatedNumber value={concern.value} />
                  </b>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${concern.value}%` }}
                    transition={{ delay: 0.15 + index * 0.12, duration: 0.85 }}
                    className={`h-full rounded-full ${index ? "bg-white/45" : "bg-brand"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-white/35">{data.change}</p>
      </motion.div>
    </div>
  );
}

function ExploreContent() {
  const [activeView, setActiveView] = useState(0);
  const view = analyticsViews[activeView];

  return (
    <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr]">
      <div className="space-y-2">
        {analyticsViews.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveView(index)}
            className={`flex w-full cursor-pointer items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${activeView === index ? "border-brand bg-brand/10 text-white" : "border-white/10 bg-white/[0.04] text-white/55 hover:border-white/20"}`}
          >
            {item.label}
            <ArrowRight size={17} />
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={view.label}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
        >
          <p className="text-sm text-white/45">{view.label}</p>
          <p className="mt-2 text-5xl font-semibold">{view.value}</p>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: view.width }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-brand"
            />
          </div>
          <p className="mt-4 text-sm text-white/55">{view.detail}</p>
        </motion.div>
      </AnimatePresence>
      @
    </div>
  );
}

function DemoContent() {
  return (
    <div className="grid items-center gap-6 md:grid-cols-[1.15fr_.85fr]">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#11151d] p-3">
        <img
          src={dashboard}
          alt="Workforce analytics demo preview"
          className="w-full rounded-2xl opacity-75"
        />
        <span className="absolute inset-0 grid place-items-center">
          <motion.span
            whileHover={{ scale: 1.12 }}
            className="grid size-16 place-items-center rounded-full bg-brand shadow-xl shadow-brand/25"
          >
            <Play fill="currentColor" />
          </motion.span>
        </span>
      </div>
      <form onSubmit={(event) => event.preventDefault()} className="space-y-3">
        <input
          aria-label="Work email"
          type="email"
          placeholder="Work email"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none focus:border-brand"
        />
        <select
          aria-label="Team size"
          defaultValue=""
          className="w-full rounded-2xl border border-white/10 bg-[#211d1f] px-5 py-4 text-white/60 outline-none focus:border-brand"
        >
          <option value="" disabled>
            Team size
          </option>
          <option>1–50</option>
          <option>51–250</option>
          <option>251–1,000</option>
          <option>1,000+</option>
        </select>
        <button
          type="submit"
          className="w-full cursor-pointer rounded-2xl bg-brand px-6 py-4 font-semibold hover:bg-brand/85"
        >
          Schedule walkthrough
        </button>
      </form>
    </div>
  );
}

function Workforce() {
  const { openDrawer } = useDrawer();
  const [activeCapability, setActiveCapability] = useState(0);
  const activeData = capabilities[activeCapability];

  const selectCapability = (index) => {
    const data = capabilities[index];
    setActiveCapability(index);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      openDrawer({
        id: `mobile-analytics-${index}`,
        eyebrow: data.accent,
        title: `${data.title} analytics`,
        description: data.description,
        content: <MobileAnalytics data={data} />,
      });
    }
  };

  const showExplore = () =>
    openDrawer({
      id: "workforce-explore",
      eyebrow: "Interactive analytics",
      title: "Explore your workforce signals",
      description:
        "Switch between the core analytics views to see how AnonyMoose turns employee voice into decisions.",
      content: <ExploreContent />,
    });
  const showDemo = () =>
    openDrawer({
      id: "workforce-demo",
      eyebrow: "Product demo",
      title: "Watch the workforce platform in action",
      description:
        "Preview the analytics experience, then choose a time for a walkthrough tailored to your team.",
      content: <DemoContent />,
    });

  return (
    <section
      id="workforce"
      className="relative overflow-hidden bg-[#100e0f] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-[52px]"
    >
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-48 -top-48 size-[560px] rounded-full bg-brand/20 blur-[150px]"
      />
      <div className="relative mx-auto max-w-[1600px]">
        <motion.h2
          initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[900px] text-center text-2xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-[62px]"
        >
          Everything You Need to
          <span className="block">Understand Your Workforce</span>
        </motion.h2>

        <div className="mt-16 grid items-stretch gap-16 lg:mt-20 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <div className="flex h-full flex-col">
            <div className="grid flex-1 grid-rows-3 gap-5">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                const selected = activeCapability === index;
                const floatAmount = index === 0 ? -5 : index === 1 ? 6 : -4;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -45 - index * 12, rotateY: -8 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      delay: index * 0.14,
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full [perspective:700px]"
                  >
                    <motion.div
                      animate={{ y: [0, floatAmount, 0] }}
                      transition={{
                        duration: 6.5 + index * 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.45,
                      }}
                      className="h-full"
                    >
                      <motion.button
                        type="button"
                        onClick={() => selectCapability(index)}
                        initial="rest"
                        whileHover="hover"
                        whileTap={{ scale: 0.985 }}
                        animate={selected ? "selected" : "rest"}
                        variants={{
                          rest: {
                            y: 0,
                            scale: 1,
                            borderColor: "rgba(255,255,255,.10)",
                          },
                          hover: {
                            y: -7,
                            scale: 1.012,
                            borderColor: "rgba(var(--brand-rgb),.42)",
                          },
                          selected: {
                            y: -3,
                            scale: 1.008,
                            borderColor: "rgba(var(--brand-rgb),.72)",
                          },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 175,
                          damping: 21,
                        }}
                        className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[24px] border bg-[linear-gradient(120deg,rgba(255,255,255,.045),rgba(var(--brand-rgb),.045))] p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,.18)] sm:p-7"
                      >
                        <motion.span
                          variants={{
                            rest: { scaleX: 0, opacity: 0 },
                            hover: { scaleX: 1, opacity: 1 },
                            selected: { scaleX: 1, opacity: 1 },
                          }}
                          transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute inset-0 origin-left bg-[linear-gradient(110deg,rgba(var(--brand-rgb),.17),rgba(var(--brand-rgb),.035))]"
                        />
                        <div className="relative z-10 flex gap-5">
                          <motion.span
                            variants={{
                              rest: { rotate: 0, scale: 1 },
                              hover: {
                                rotate: index === 1 ? 12 : -10,
                                scale: 1.12,
                              },
                              selected: { rotate: 0, scale: 1.08 },
                            }}
                            className="relative grid size-13 shrink-0 place-items-center overflow-hidden rounded-2xl bg-brand shadow-lg shadow-brand/20"
                          >
                            <Icon size={23} />
                            <motion.span
                              animate={{ x: ["-180%", "220%"] }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatDelay: 1,
                                delay: index * 0.55,
                              }}
                              className="absolute inset-y-0 w-5 -skew-x-12 bg-white/25"
                            />
                          </motion.span>
                          <span className="flex-1">
                            <span className="flex flex-wrap items-center justify-between gap-2">
                              <strong className="text-xl font-semibold sm:text-2xl">
                                {item.title}
                              </strong>
                              <motion.span
                                animate={
                                  selected
                                    ? { opacity: [0.65, 1, 0.65] }
                                    : { opacity: 0.45 }
                                }
                                transition={{ duration: 1.8, repeat: Infinity }}
                                className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-white/65"
                              >
                                {item.accent}
                              </motion.span>
                            </span>
                            <span className="mt-2 block text-sm leading-6 text-white/45 transition-colors duration-500 group-hover:text-white/70 sm:text-base">
                              {item.description}
                            </span>
                          </span>
                        </div>
                        <motion.span
                          variants={{
                            rest: { scaleX: 0 },
                            hover: { scaleX: 1 },
                            selected: { scaleX: 1 },
                          }}
                          className="absolute bottom-0 left-0 h-1 w-full origin-left bg-brand"
                        />
                        <motion.span
                          animate={{ x: ["-120%", "430%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.4,
                          }}
                          className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
                        />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.65 }}
              className="mt-9 grid grid-cols-2 gap-3"
            >
              <motion.button
                whileHover={{
                  y: -5,
                  scale: 1.035,
                  boxShadow: "0 18px 45px rgba(var(--brand-rgb),.25)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={showExplore}
                type="button"
                className="flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-brand px-3 py-4 text-xs font-semibold sm:px-7 sm:text-base"
              >
                Explore Platform
              </motion.button>
              <motion.button
                whileHover={{ y: -5, borderColor: "rgba(var(--brand-rgb),.7)" }}
                whileTap={{ scale: 0.97 }}
                onClick={showDemo}
                type="button"
                className="flex w-full cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-white/15 px-3 py-4 text-xs font-semibold sm:gap-2 sm:px-7 sm:text-base"
              >
                <Play size={16} fill="currentColor" /> Watch Demo
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.94, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden h-full [perspective:1000px] lg:block"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateX: [0, 0.8, 0],
                rotateY: [0, -0.8, 0],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.012 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/15 bg-[radial-gradient(circle_at_100%_30%,rgba(var(--brand-rgb),.12),transparent_36%),linear-gradient(135deg,#201e20,#161416)] p-6 shadow-[0_35px_100px_rgba(0,0,0,.42)] sm:p-8"
            >
              <div className="flex items-center justify-between gap-5">
                <div>
                  <motion.p
                    animate={{ opacity: [0.65, 1, 0.65] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.7, 1], opacity: [1, 0.35, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                      className="size-2 rounded-full bg-brand shadow-[0_0_12px_var(--brand)]"
                    />
                    Live Platform Analytics
                  </motion.p>
                  <h3 className="mt-2 text-2xl sm:text-3xl">
                    Workforce Overview
                  </h3>
                </div>
                <motion.span
                  whileHover={{ scale: 1.07 }}
                  className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white/75"
                >
                  Last 30 Days
                </motion.span>
              </div>

              <motion.div
                whileHover={{ scale: 1.012 }}
                className="relative mt-7 overflow-hidden rounded-[22px] border border-white/5 bg-[#11151d] p-4"
              >
                <img
                  src={dashboard}
                  alt="Interactive workforce overview dashboard"
                  className="w-full rounded-xl transition duration-1000 group-hover:scale-[1.02]"
                />
                <motion.span
                  animate={{ x: ["-130%", "160%"] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                  }}
                  className="pointer-events-none absolute inset-y-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key="live-workforce-metrics"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <motion.div
                      whileHover={{
                        y: -5,
                        borderColor: "rgba(var(--brand-rgb),.45)",
                      }}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                    >
                      <p className="text-sm text-white/45">Overall Sentiment</p>
                      <div className="mt-4 flex items-center gap-4">
                        <motion.div
                          initial={{ rotate: -120 }}
                          animate={{ rotate: 0 }}
                          transition={{ duration: 0.8 }}
                          className="grid size-16 place-items-center rounded-full"
                          style={{
                            background: `conic-gradient(var(--brand) ${activeData.sentiment * 3.6}deg, rgba(255,255,255,.09) 0)`,
                          }}
                        >
                          <span className="grid size-12 place-items-center rounded-full bg-[#201e20] text-sm font-semibold">
                            <AnimatedNumber value={activeData.sentiment} />
                          </span>
                        </motion.div>
                        <div>
                          <b className="text-3xl">
                            <AnimatedNumber value={activeData.sentiment} />
                          </b>
                          <p className="mt-1 text-xs text-brand">Positive</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        y: -5,
                        borderColor: "rgba(var(--brand-rgb),.45)",
                      }}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                    >
                      <p className="text-sm text-white/45">Engagement Rate</p>
                      <b className="mt-4 block text-3xl">
                        <AnimatedNumber
                          value={activeData.engagement}
                          decimals={1}
                        />
                      </b>
                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${activeData.engagement}%` }}
                          transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full bg-brand"
                        />
                      </div>
                      <p className="mt-3 text-xs text-white/35">
                        {activeData.change}
                      </p>
                    </motion.div>
                  </div>
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      Top Concerns
                    </p>
                    <div className="mt-4 space-y-4">
                      {activeData.concerns.map((concern, concernIndex) => (
                        <div
                          key={concern.label}
                          className="grid grid-cols-[1fr_120px_38px] items-center gap-3 text-sm"
                        >
                          <span>{concern.label}</span>
                          <span className="h-1.5 overflow-hidden rounded-full bg-white/10">
                            <motion.span
                              initial={{ width: 0 }}
                              animate={{ width: `${concern.value}%` }}
                              transition={{
                                delay: 0.15 + concernIndex * 0.12,
                                duration: 0.85,
                              }}
                              className={`block h-full rounded-full ${concernIndex ? "bg-white/45" : "bg-brand"}`}
                            />
                          </span>
                          <b>
                            <AnimatedNumber value={concern.value} />
                          </b>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-brand/50" />
              <motion.span
                animate={{ x: ["-110%", "430%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
              />
              <motion.span
                animate={{ y: ["-110%", "430%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.75,
                }}
                className="pointer-events-none absolute right-0 top-0 h-1/4 w-px bg-gradient-to-b from-transparent via-brand to-transparent"
              />
              <motion.span
                animate={{ x: ["110%", "-430%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5,
                }}
                className="pointer-events-none absolute bottom-0 right-0 h-px w-1/4 bg-gradient-to-l from-transparent via-brand to-transparent"
              />
              <motion.span
                animate={{ y: ["110%", "-430%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2.25,
                }}
                className="pointer-events-none absolute bottom-0 left-0 h-1/4 w-px bg-gradient-to-t from-transparent via-brand to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="space-y-10">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    variants={reveal}
                    custom={index}
                    whileHover="hover"
                    className="group relative rounded-2xl border border-transparent p-1 transition-colors hover:border-white/10"
                  >
                    <div className="relative flex gap-5 p-2">
                      <motion.span
                        variants={{
                          hover: { rotate: index % 2 ? 8 : -8, scale: 1.12 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 15,
                        }}
                        className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-brand"
                      >
                        <Icon size={22} />
                        <motion.span
                          animate={{ x: ["-150%", "190%"] }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            repeatDelay: 1.2,
                            delay: index * 0.5,
                          }}
                          className="absolute inset-y-0 w-5 -skew-x-12 bg-white/20"
                        />
                      </motion.span>
                      <div>
                        <h3 className="text-xl font-semibold sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-[560px] text-sm leading-6 text-white/45 transition group-hover:text-white/65 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <motion.span
                      variants={{ hover: { scaleX: 1 } }}
                      initial={{ scaleX: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-brand to-transparent"
                    />
                  </motion.article>
                );
              })}
            </div>
            <motion.div
              variants={reveal}
              custom={3}
              className="mt-10 flex gap-3"
            >
              <motion.button
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={showExplore}
                type="button"
                className="cursor-pointer rounded-xl bg-brand px-7 py-4 font-semibold shadow-lg shadow-brand/20"
              >
                Explore Platform
              </motion.button>
              <motion.button
                whileHover={{
                  y: -4,
                  borderColor: "rgba(var(--brand-rgb),.65)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={showDemo}
                type="button"
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 px-7 py-4 font-semibold"
              >
                <Play size={16} fill="currentColor" /> Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotateY: [0, 1.2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.015 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(var(--brand-rgb),.08),rgba(255,255,255,.03))] p-5 shadow-[0_30px_90px_rgba(0,0,0,.35)] sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-brand">
                    Platform Analytics
                  </p>
                  <h3 className="mt-1 text-xl">Workforce Overview</h3>
                </div>
                <span className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white/65">
                  Last 30 Days
                </span>
              </div>
              <div className="overflow-hidden rounded-2xl bg-[#11151d] p-3">
                <img
                  src={dashboard}
                  alt="Workforce sentiment analytics dashboard"
                  className="w-full rounded-xl transition duration-1000 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs text-white/40">Overall Sentiment</p>
                  <div className="mt-3 flex items-end gap-2">
                    <b className="text-3xl">82%</b>
                    <span className="mb-1 text-xs text-brand">Positive</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs text-white/40">Engagement Rate</p>
                  <b className="mt-3 block text-3xl">94.5%</b>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "94.5%" }}
                      transition={{ delay: 0.5, duration: 1.2 }}
                      className="h-full bg-brand"
                    />
                  </div>
                </div>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-brand/45" />
              <motion.span
                animate={{ x: ["-120%", "450%"] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Workforce;
