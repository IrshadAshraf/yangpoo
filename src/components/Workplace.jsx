import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { CheckCircle2, MoveHorizontal } from "lucide-react";

const outcomes = [
  {
    title: "Increase Employee Engagement",
    detail: "Give every employee a meaningful voice.",
  },
  {
    title: "Build Organizational Trust",
    detail: "Create confidence through transparent action.",
  },
  {
    title: "Identify Problems Early",
    detail: "Recognize emerging issues before they grow.",
  },
  {
    title: "Improve Retention",
    detail: "Help great people feel heard and valued.",
  },
  {
    title: "Strengthen Company Culture",
    detail: "Build shared values through honest insights.",
  },
  {
    title: "Encourage Honest Communication",
    detail: "Make speaking up safe and constructive.",
  },
  {
    title: "Reduce Workplace Risks",
    detail: "Surface critical concerns with greater speed.",
  },
  {
    title: "Make Better Leadership Decisions",
    detail: "Turn workforce signals into confident action.",
  },
];

const directions = [
  { x: -38, y: 18 },
  { x: 0, y: 38 },
  { x: 0, y: 38 },
  { x: 38, y: 18 },
  { x: -38, y: -18 },
  { x: 0, y: -38 },
  { x: 0, y: -38 },
  { x: 38, y: -18 },
];

function BorderRunner({ index }) {
  const reverse = index % 2 === 1;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    >
      <motion.span
        animate={{ x: reverse ? ["430%", "-110%"] : ["-110%", "430%"] }}
        transition={{
          duration: 2.5 + index * 0.08,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.1,
        }}
        className="absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={{ y: reverse ? ["430%", "-110%"] : ["-110%", "430%"] }}
        transition={{
          duration: 2.5 + index * 0.08,
          repeat: Infinity,
          ease: "linear",
          delay: 0.65 + index * 0.1,
        }}
        className="absolute right-0 top-0 h-1/4 w-px bg-gradient-to-b from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={{ x: reverse ? ["-430%", "110%"] : ["110%", "-430%"] }}
        transition={{
          duration: 2.5 + index * 0.08,
          repeat: Infinity,
          ease: "linear",
          delay: 1.3 + index * 0.1,
        }}
        className="absolute bottom-0 right-0 h-px w-1/4 bg-gradient-to-l from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={{ y: reverse ? ["-430%", "110%"] : ["110%", "-430%"] }}
        transition={{
          duration: 2.5 + index * 0.08,
          repeat: Infinity,
          ease: "linear",
          delay: 1.95 + index * 0.1,
        }}
        className="absolute bottom-0 left-0 h-1/4 w-px bg-gradient-to-t from-transparent via-brand to-transparent"
      />
    </span>
  );
}

function Workplace() {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const draggingRef = useRef(false);
  const [isSlider, setIsSlider] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const sliderX = useMotionValue(0);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1279px)");
    const updateSlider = () => setIsSlider(media.matches);
    updateSlider();
    media.addEventListener("change", updateSlider);
    return () => media.removeEventListener("change", updateSlider);
  }, []);

  useEffect(() => {
    const measureSlider = () => {
      if (!sliderRef.current || !trackRef.current) return;
      const firstSet = trackRef.current.firstElementChild;
      setLoopWidth(firstSet?.getBoundingClientRect().width ?? 0);
    };

    measureSlider();
    window.addEventListener("resize", measureSlider);
    return () => window.removeEventListener("resize", measureSlider);
  }, [isSlider]);

  useEffect(() => {
    if (!isSlider || loopWidth === 0) {
      sliderX.set(0);
      return undefined;
    }

    let frame;
    let previousTime = performance.now();
    const scroll = (time) => {
      const elapsed = Math.min(time - previousTime, 40);
      previousTime = time;
      if (!draggingRef.current) {
        let next = sliderX.get() - elapsed * 0.035;
        if (next <= -loopWidth) next += loopWidth;
        sliderX.set(next);
      }
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frame);
  }, [isSlider, loopWidth, sliderX]);

  return (
    <section
      id="workplace"
      className="relative overflow-hidden bg-[#100e0f] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-[52px]"
    >
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360], scale: [1, 1.12, 1] }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 size-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[42%] bg-[conic-gradient(from_90deg,transparent,rgba(var(--brand-rgb),.08),transparent,rgba(var(--brand-rgb),.04),transparent)] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="mx-auto max-w-[820px] text-center"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand"
          >
            Outcomes that matter
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 35, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  delay: 0.08,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[62px]"
          >
            Create a Workplace<span className="block">People Trust</span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.7 },
              },
            }}
            className="mx-auto mt-5 max-w-[640px] text-base leading-7 text-white/45"
          >
            Build a culture where honesty leads to action and every employee
            feels safe, respected, and heard.
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-white/35 xl:hidden"
        >
          <motion.span
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <MoveHorizontal size={18} className="text-brand" />
          </motion.span>
          Drag to explore
        </motion.div>

        <div
          ref={sliderRef}
          className="mt-8 overflow-hidden px-1 py-4 lg:mt-12 xl:mt-16 xl:overflow-visible xl:px-0"
        >
          <motion.div
            ref={trackRef}
            drag={isSlider ? "x" : false}
            dragConstraints={{ left: -loopWidth, right: 0 }}
            dragElastic={0.12}
            dragMomentum={false}
            style={{ x: sliderX }}
            onDragStart={() => {
              draggingRef.current = true;
            }}
            onDragEnd={() => {
              if (loopWidth) {
                const current = sliderX.get();
                sliderX.set(-(((-current % loopWidth) + loopWidth) % loopWidth));
              }
              draggingRef.current = false;
            }}
            whileDrag={{ cursor: "grabbing" }}
            transition={{ type: "spring", stiffness: 170, damping: 24 }}
            className="flex w-max cursor-grab py-2 xl:w-auto xl:cursor-default"
          >
            {Array.from({ length: isSlider ? 2 : 1 }, (_, copyIndex) => (
              <div
                key={copyIndex}
                aria-hidden={copyIndex > 0}
                className="flex shrink-0 gap-4 pr-4 xl:grid xl:w-full xl:grid-cols-4 xl:gap-5 xl:pr-0"
              >
            {outcomes.map((outcome, index) => {
              const direction = directions[index];
              return (
                <motion.div
                  key={`${copyIndex}-${outcome.title}`}
                  initial={{
                    opacity: 0,
                    x: direction.x,
                    y: direction.y,
                    scale: 0.94,
                    filter: "blur(7px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    delay: (index % 4) * 0.1 + Math.floor(index / 4) * 0.14,
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-[245px] shrink-0 sm:w-[270px] lg:w-[290px] xl:w-auto"
                >
                  <motion.div
                    animate={{
                      y: [0, index % 2 ? 5 : -5, 0],
                      rotate: [0, index % 3 === 0 ? 0.3 : -0.3, 0],
                    }}
                    transition={{
                      duration: 6.5 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
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
                          borderColor: "rgba(255,255,255,.08)",
                        },
                        hover: {
                          y: -6,
                          scale: 1.015,
                          borderColor: "rgba(var(--brand-rgb),.46)",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 175,
                        damping: 20,
                      }}
                      className="group relative min-h-[124px] overflow-hidden rounded-[18px] border bg-white/[0.035] p-5 shadow-[0_16px_45px_rgba(0,0,0,.15)]"
                    >
                      <BorderRunner index={index} />
                      <motion.span
                        variants={{
                          rest: { scaleY: 0, opacity: 0 },
                          hover: { scaleY: 1, opacity: 1 },
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 origin-bottom bg-[linear-gradient(145deg,rgba(var(--brand-rgb),.20),rgba(var(--brand-rgb),.045))]"
                      />
                      <div className="relative z-10 flex items-start gap-3">
                        <motion.span
                          variants={{
                            rest: { rotate: 0, scale: 1 },
                            hover: { rotate: 360, scale: 1.15 },
                          }}
                          transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="mt-0.5 shrink-0 text-brand"
                        >
                          <CheckCircle2 size={20} />
                        </motion.span>
                        <div>
                          <h3 className="text-[15px] font-semibold leading-5 sm:text-base">
                            {outcome.title}
                          </h3>
                          <motion.p
                            variants={{
                              rest: { opacity: 0, y: 7, height: 0 },
                              hover: { opacity: 1, y: 0, height: "auto" },
                            }}
                            transition={{ duration: 0.32 }}
                            className="overflow-hidden text-xs leading-5 text-white/50"
                          >
                            <span className="mt-2 block">{outcome.detail}</span>
                          </motion.p>
                        </div>
                      </div>
                      <motion.span
                        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                        transition={{ duration: 0.5 }}
                        className="absolute bottom-0 left-0 h-1 w-full origin-left bg-brand"
                      />
                    </motion.article>
                  </motion.div>
                </motion.div>
              );
            })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Workplace;
