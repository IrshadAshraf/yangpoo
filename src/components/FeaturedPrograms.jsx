import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import briefcaseIcon from "@/assets/featured programs/Vector (10).png";
import executiveIcon from "@/assets/featured programs/Vector (11).png";
import certificationIcon from "@/assets/featured programs/Vector (12).png";
import degreeIcon from "@/assets/featured programs/Vector (13).png";
import featuredIcon from "@/assets/featured programs/Vector (14).png";

const programs = [
  {
    title: "Online MBA",
    description:
      "Accelerate your career with leadership skills from premier global business schools.",
    icon: briefcaseIcon,
  },
  {
    title: "Executive Education",
    description:
      "Short-term, high-impact programs designed for senior managers and executives.",
    icon: executiveIcon,
  },
  {
    title: "Professional Certifications",
    description:
      "Acquire specialized skills in data science, AI, and digital transformation.",
    icon: certificationIcon,
  },
  {
    title: "Online Degree Programs",
    description:
      "Earn a full undergraduate or postgraduate degree from a top university remotely.",
    icon: degreeIcon,
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.92,
    rotateY: direction > 0 ? 8 : -8,
  }),
  center: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
  exit: (direction) => ({
    x: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.92,
    rotateY: direction > 0 ? -8 : 8,
  }),
};

function ProgramCard({ program, index = 0, floating = false }) {
  return (
    <motion.article
      className="group relative h-full overflow-hidden rounded-[24px] p-[2px] shadow-[0_12px_32px_rgba(20,31,61,0.12)]"
      animate={floating ? { y: [0, -10, 0] } : undefined}
      transition={
        floating
          ? {
              duration: 4 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.35,
            }
          : undefined
      }
      whileHover={{ y: -12, scale: 1.018 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute -inset-[95%] bg-[conic-gradient(from_0deg,transparent_8%,#7dd3fc_21%,#0C529F_34%,transparent_48%)]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 5 + index * 0.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative flex h-full min-h-[350px] flex-col rounded-[22px] bg-white px-8 py-10 sm:px-10">
        <motion.div
          className="grid size-16 place-items-center rounded-2xl bg-[#1558a5] shadow-[0_10px_25px_rgba(12,82,159,0.22)]"
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
          transition={{ duration: 0.45 }}
        >
          <img src={program.icon} alt="" className="size-8 object-contain" />
        </motion.div>

        <h3 className="mt-7 text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-[#171e31]">
          {program.title}
        </h3>
        <p className="mt-4 text-[15px] leading-6 text-slate-600">
          {program.description}
        </p>

        <HashLink
          smooth
          to="/#courses"
          className="mt-auto inline-flex w-fit items-center gap-3 pt-7 text-sm font-semibold text-[#0C529F]"
        >
          Learn More
          <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-1.5"
          />
        </HashLink>
      </div>
    </motion.article>
  );
}

export default function FeaturedPrograms() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % programs.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const changeSlide = (nextDirection) => {
    setDirection(nextDirection);
    setActiveIndex(
      (current) =>
        (current + nextDirection + programs.length) % programs.length,
    );
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-12 h-72 w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(12,82,159,0.08),transparent_68%)] blur-2xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 lg:px-8">
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm">
            <img src={featuredIcon} alt="" className="size-4 object-contain" />
            Featured Program
          </div>
          <h2 className="mt-5 text-[36px] font-bold leading-tight tracking-[-0.045em] text-[#141b2d] sm:text-[48px] lg:text-[54px]">
            Find the Right Program for You
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-base leading-7 text-slate-600 sm:text-lg">
            We partner with elite institutions to offer academic excellence
            accessible from anywhere.
          </p>
        </motion.div>

        <div className="mt-14 hidden grid-cols-4 gap-6 lg:grid xl:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className={index % 2 === 0 ? "mt-14" : "mb-14"}
              initial={{ opacity: 0, y: 55, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <ProgramCard program={program} index={index} floating />
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-[520px] lg:hidden">
          <div className="relative overflow-hidden px-1 py-4 [perspective:1000px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 45)
                    changeSlide(info.offset.x < 0 ? 1 : -1);
                }}
              >
                <ProgramCard
                  program={programs[activeIndex]}
                  index={activeIndex}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex items-center justify-between gap-5">
            <button
              type="button"
              onClick={() => changeSlide(-1)}
              className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0C529F] shadow-sm transition hover:border-[#0C529F] hover:bg-[#0C529F] hover:text-white"
              aria-label="Previous program"
            >
              <ArrowLeft size={19} />
            </button>

            <div className="flex items-center gap-2">
              {programs.map((program, index) => (
                <button
                  key={program.title}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show ${program.title}`}
                  className="relative h-2 overflow-hidden rounded-full bg-slate-200 transition-all"
                  style={{ width: activeIndex === index ? 34 : 8 }}
                >
                  {activeIndex === index && (
                    <motion.span
                      className="absolute inset-0 origin-left rounded-full bg-[#0C529F]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 3.2, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => changeSlide(1)}
              className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0C529F] shadow-sm transition hover:border-[#0C529F] hover:bg-[#0C529F] hover:text-white"
              aria-label="Next program"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
