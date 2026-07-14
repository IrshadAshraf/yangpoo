import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const concerns = [
  {
    title: "Low Employee Trust",
    description:
      "Employees often hesitate to share honest opinions due to fear of judgment or retaliation.",
  },
  {
    title: "Hidden Workplace Issues",
    description:
      "Problems remain unresolved until they become serious and costly for the firm.",
  },
  {
    title: "Poor Communication",
    description:
      "Important messages fail to reach the entire organization in a transparent way.",
  },
  {
    title: "Lack of Actionable Data",
    description:
      "Leaders struggle to understand true employee sentiment through traditional means.",
  },
];

const stats = [
  { value: "95%+", label: "Participation Rate" },
  { value: "100%", label: "Anonymous Reporting" },
  { value: "Real-Time", label: "Insights" },
  { value: "Enterprise", label: "Grade Security" },
];

const statReveals = [
  {
    initial: { opacity: 0, y: 34, scale: 0.72 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  {
    initial: { opacity: 0, rotateX: -85, y: 15 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  {
    initial: { opacity: 0, scale: 0.55, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  {
    initial: { opacity: 0, letterSpacing: "0.45em", x: 20 },
    visible: { opacity: 1, letterSpacing: "0em", x: 0 },
  },
];

const reveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function EmployeeConcern() {
  return (
    <section
      id="employee-concern"
      className="relative overflow-hidden bg-[#100e0f] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-[52px]"
    >
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-20%", "20%", "-20%"], opacity: [0.22, 0.4, 0.22] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-24 h-80 w-[55%] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="mx-auto max-w-[850px] text-center"
        >
          <motion.p
            variants={reveal}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand"
          >
            The silent workplace problem
          </motion.p>
          <motion.h2
            variants={reveal}
            custom={1}
            className="text-xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-[58px]"
          >
            Employees Have Concerns. Most
            <span className="block">Never Speak Up.</span>
          </motion.h2>
          <motion.p
            variants={reveal}
            custom={2}
            className="mx-auto mt-6 max-w-[720px] text-base leading-7 text-white/50 sm:text-lg"
          >
            Fear of judgment, retaliation, or being ignored prevents valuable
            feedback from reaching leadership.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-7">
          {concerns.map((concern, index) => (
            <motion.div
              key={concern.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={reveal}
              custom={index}
            >
              <motion.div
                animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0] }}
                transition={{
                  duration: 7.5 + index * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.35,
                }}
              >
                <motion.article
                  initial="rest"
                  whileHover="hover"
                  variants={{
                    rest: {
                      y: 0,
                      scale: 1,
                      borderColor: "rgba(255,255,255,.10)",
                      boxShadow: "0 18px 55px rgba(0,0,0,.18)",
                    },
                    hover: {
                      y: -9,
                      scale: 1.012,
                      borderColor: "rgba(var(--brand-rgb),.5)",
                      boxShadow: "0 28px 75px rgba(var(--brand-rgb),.16)",
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 155,
                    damping: 22,
                    mass: 0.85,
                  }}
                  className="group relative min-h-[300px] overflow-hidden rounded-[24px] border bg-[linear-gradient(135deg,rgba(233,23,23,.09),rgba(255,255,255,.035))] p-8 sm:p-10"
                >
                  <motion.span
                    aria-hidden="true"
                    variants={{
                      rest: { scaleY: 0, opacity: 0 },
                      hover: { scaleY: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 origin-bottom bg-[linear-gradient(145deg,rgba(var(--brand-rgb),.30),rgba(var(--brand-rgb),.10))]"
                  />
                  <motion.span
                    aria-hidden="true"
                    variants={{
                      rest: { x: "-140%", opacity: 0 },
                      hover: { x: "720%", opacity: 1 },
                    }}
                    transition={{ duration: 1.15, ease: "easeInOut" }}
                    className="absolute inset-y-0 z-[1] w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                  />
                  <motion.span
                    variants={{
                      rest: {
                        rotate: 0,
                        scale: 1,
                        color: "var(--brand)",
                        backgroundColor: "rgba(var(--brand-rgb),.10)",
                      },
                      hover: {
                        rotate: -6,
                        scale: 1.12,
                        color: "#fff",
                        backgroundColor: "rgba(255,255,255,.14)",
                      },
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 16 }}
                    className="relative z-10 mb-6 grid size-10 place-items-center rounded-xl"
                  >
                    <AlertTriangle size={22} strokeWidth={1.8} />
                  </motion.span>
                  <h3 className="relative z-10 text-xl font-medium tracking-tight sm:text-2xl">
                    {concern.title}
                  </h3>
                  <p className="relative z-10 mt-3 max-w-[620px] text-sm leading-6 text-white/55 transition-colors duration-500 group-hover:text-white/75 sm:text-base">
                    {concern.description}
                  </p>
                  <motion.span
                    aria-hidden="true"
                    variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 left-0 z-10 h-1 w-full origin-left bg-brand"
                  />
                </motion.article>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 h-px origin-center overflow-hidden bg-white/15"
        >
          <motion.span
            aria-hidden="true"
            animate={{ x: ["-120%", "120%"] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-brand to-transparent opacity-80"
          />
        </motion.div>

        <div className="grid grid-cols-2 gap-y-10 pt-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              variants={statReveals[index]}
              transition={{
                delay: 0.15 + index * 0.14,
                duration: 0.75,
                type: index === 0 ? "spring" : "tween",
                stiffness: 170,
                damping: 17,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative text-center [perspective:500px]"
            >
              <motion.p
                animate={
                  index === 0
                    ? { y: [0, -3, 0] }
                    : index === 1
                      ? { scale: [1, 1.035, 1] }
                      : index === 3
                        ? { opacity: [0.78, 1, 0.78] }
                        : undefined
                }
                transition={{
                  duration: 2.8 + index * 0.45,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="relative mx-auto w-fit overflow-hidden text-xl font-medium sm:text-2xl"
              >
                {stat.value}
                {index === 2 && (
                  <motion.span
                    aria-hidden="true"
                    animate={{ x: ["-130%", "150%"] }}
                    transition={{
                      duration: 1.7,
                      repeat: Infinity,
                      repeatDelay: 0.7,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/70 to-transparent mix-blend-screen"
                  />
                )}
              </motion.p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-white/35 sm:text-xs">
                {stat.label}
              </p>
              {index < stats.length - 1 && (
                <motion.span
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.65 + index * 0.18,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 origin-center overflow-hidden bg-white/10 lg:block"
                >
                  <motion.span
                    animate={{ y: ["-120%", "220%"] }}
                    transition={{
                      duration: 1.8 + index * 0.35,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-x-0 h-5 bg-brand shadow-[0_0_10px_var(--brand)]"
                  />
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmployeeConcern;
