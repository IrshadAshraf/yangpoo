import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Sparkles,
  UserRound,
} from "lucide-react";
import imageOne from "@/assets/latest-news/employee-retention.webp";
import imageTwo from "@/assets/latest-news/workplace-listening.webp";
import imageThree from "@/assets/latest-news/team-brainstorming.webp";
import { useDrawer } from "@/components/Drawer";

const articles = [
  {
    title: "How Anonymous Listening Builds Stronger Teams",
    description:
      "Learn the key practices that help employees speak honestly and enable leaders to respond with confidence.",
    image: imageOne,
    category: "Employee Voice",
    readingTime: "5 min read",
    points: [
      "Create psychologically safe listening channels",
      "Close the feedback loop with visible action",
      "Measure trust without compromising privacy",
    ],
    body: "Strong employee listening is more than collecting responses. It creates a dependable rhythm where people can share what matters, leaders can recognize patterns, and teams can see that honest feedback leads to meaningful action.",
  },
  {
    title: "Top Traits of High-Trust Workplaces",
    description:
      "Discover what separates trusted organizations and how their leaders turn employee feedback into lasting progress.",
    image: imageTwo,
    category: "Workplace Trust",
    readingTime: "7 min read",
    points: [
      "Leaders communicate decisions transparently",
      "Employees have safe ways to raise concerns",
      "Teams use insights consistently, not occasionally",
    ],
    body: "Trust grows when organizational behavior is predictable, fair, and transparent. The strongest workplaces make listening part of everyday leadership and communicate clearly about what they heard and what happens next.",
  },
  {
    title: "Why Real-Time Insights Improve Decisions",
    description:
      "Explore how live workforce signals reduce uncertainty, identify emerging risks, and guide better leadership choices.",
    image: imageThree,
    category: "People Analytics",
    readingTime: "6 min read",
    points: [
      "Spot sentiment shifts before they become problems",
      "Prioritize action using clear workplace signals",
      "Track whether interventions create improvement",
    ],
    body: "Annual snapshots can miss the moments that matter most. Real-time analytics help leaders understand how teams are changing, connect feedback with business context, and respond while an issue is still manageable.",
  },
  {
    title: "Designing Employee Surveys People Actually Complete",
    description:
      "Practical ways to ask focused questions, improve participation, and collect feedback employees believe will matter.",
    image: imageTwo,
    category: "Employee Surveys",
    readingTime: "4 min read",
    points: [
      "Keep every pulse focused on one clear outcome",
      "Explain how responses will guide action",
      "Share results and next steps with employees",
    ],
    body: "The best employee surveys respect people’s time and make the purpose of every question clear. Shorter feedback cycles, transparent communication, and visible follow-through can dramatically improve participation and response quality.",
  },
  {
    title: "The Leadership Guide to Closing the Feedback Loop",
    description:
      "Turn listening into trust by communicating what you learned, what will change, and what needs more exploration.",
    image: imageThree,
    category: "Leadership",
    readingTime: "8 min read",
    points: [
      "Acknowledge feedback quickly and honestly",
      "Separate immediate actions from long-term work",
      "Report progress even when the answer is not final",
    ],
    body: "Employees judge listening programs by what happens after they speak. Closing the loop means acknowledging input, explaining decisions, and maintaining a visible record of progress that reinforces trust over time.",
  },
  {
    title: "Five Early Signals of Workplace Culture Risk",
    description:
      "Learn which patterns in sentiment and participation can reveal cultural issues before they become costly problems.",
    image: imageOne,
    category: "Culture & Risk",
    readingTime: "6 min read",
    points: [
      "Watch for sudden participation changes",
      "Compare sentiment with recurring themes",
      "Treat silence as a signal worth investigating",
    ],
    body: "Workplace risks rarely appear without warning. Changes in participation, repeated concerns, and uneven sentiment across teams can help leaders identify where trust is weakening and where early support will have the greatest impact.",
  },
];

function ArticleContent({ article }) {
  return (
    <div className="grid gap-7 md:grid-cols-[1fr_.9fr]">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="overflow-hidden rounded-3xl border border-white/10"
      >
        <img
          src={article.image}
          alt=""
          className="h-full min-h-[280px] w-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-4 text-xs text-white/40">
          <span className="rounded-full bg-brand/10 px-3 py-1.5 text-brand">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {article.readingTime}
          </span>
        </div>
        <p className="mt-5 leading-7 text-white/60">{article.body}</p>
        <h3 className="mt-6 font-semibold">What you’ll learn</h3>
        <div className="mt-3 space-y-3">
          {article.points.map((point, index) => (
            <motion.p
              key={point}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="flex items-start gap-3 text-sm text-white/55"
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
              {point}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function LatestNews() {
  const { openDrawer } = useDrawer();
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const draggingRef = useRef(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const sliderX = useMotionValue(0);
  const readArticle = (article) =>
    openDrawer({
      id: `article-${article.category}`,
      eyebrow: article.category,
      title: article.title,
      description: article.description,
      content: <ArticleContent article={article} />,
    });

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !trackRef.current) return;
      const firstSet = trackRef.current.firstElementChild;
      setLoopWidth(firstSet?.getBoundingClientRect().width ?? 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (loopWidth === 0) return undefined;
    let frame;
    let previousTime = performance.now();
    const scroll = (time) => {
      const elapsed = Math.min(time - previousTime, 40);
      previousTime = time;
      if (!draggingRef.current) {
        let next = sliderX.get() - elapsed * 0.04;
        if (next <= -loopWidth) next += loopWidth;
        sliderX.set(next);
      }
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [loopWidth, sliderX]);

  return (
    <section
      id="latest-news"
      className="relative overflow-hidden bg-[#100e0f] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-[52px]"
    >
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 140, 0], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-52 left-[12%] size-[520px] rounded-full bg-brand/20 blur-[150px]"
      />
      <div className="relative mx-auto max-w-[1600px]">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.65 }}
          className="mx-auto max-w-[820px] text-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60"
          >
            <motion.span
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} className="text-brand" />
            </motion.span>
            Latest News
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
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
            className="text-2xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-[60px]"
          >
            Insights from Our Latest Blog
          </motion.h2>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35"
        >
          <motion.span
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-brand"
          >
            ←
          </motion.span>
          Drag or wait to explore
          <motion.span
            animate={{ x: [5, -5, 5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-brand"
          >
            →
          </motion.span>
        </motion.div>

        <div
          ref={viewportRef}
          className="relative mt-10 overflow-hidden px-1 py-5 lg:mt-14"
        >
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -loopWidth, right: 0 }}
            dragElastic={0.1}
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
            className="flex w-max cursor-grab"
          >
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                aria-hidden={copyIndex > 0}
                inert={copyIndex > 0 ? true : undefined}
                className="flex shrink-0 gap-6 pr-6"
              >
            {articles.map((article, index) => (
              <motion.div
                key={`${copyIndex}-${article.title}`}
                initial={{
                  opacity: 0,
                  y: 45,
                  rotateY: index % 3 === 0 ? -7 : index % 3 === 2 ? 7 : 0,
                  filter: "blur(9px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  delay: (index % 3) * 0.12,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[82vw] max-w-[440px] shrink-0 [perspective:900px] sm:w-[390px] lg:w-[430px] 2xl:w-[480px]"
              >
                <motion.div
                  animate={{ y: [0, index % 2 ? 7 : -7, 0] }}
                  transition={{
                    duration: 7.5 + index * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.35,
                  }}
                  className="h-full"
                >
                  <motion.article
                    initial="rest"
                    whileHover="hover"
                    variants={{
                      rest: { y: 0, scale: 1 },
                      hover: { y: -9, scale: 1.012 },
                    }}
                    transition={{ type: "spring", stiffness: 170, damping: 21 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] shadow-[0_24px_70px_rgba(0,0,0,.2)]"
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={article.image}
                        alt={article.title}
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.065 },
                        }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="aspect-[1.28] w-full object-cover"
                      />
                      <motion.span
                        variants={{
                          rest: { x: "-140%" },
                          hover: { x: "170%" },
                        }}
                        transition={{ duration: 1.05 }}
                        className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                        transition={{
                          duration: 3.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                        className="absolute right-5 top-5 grid size-16 place-items-center rounded-2xl border border-white/15 bg-[#11182b]/90 text-center shadow-xl backdrop-blur-md"
                      >
                        <b className="text-xl leading-none">21</b>
                        <span className="text-[10px] font-semibold text-brand">
                          JUL
                        </span>
                      </motion.div>
                    </div>
                    <motion.span
                      variants={{
                        rest: { scaleY: 0, opacity: 0 },
                        hover: { scaleY: 1, opacity: 1 },
                      }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 bottom-0 top-[36%] origin-bottom bg-[linear-gradient(180deg,transparent,rgba(var(--brand-rgb),.10))]"
                    />
                    <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-wider text-white/35">
                        <span className="flex items-center gap-1.5">
                          <UserRound size={13} className="text-brand" />
                          By Admin
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MessageCircle size={13} className="text-brand" />0
                          Comments
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold leading-7 sm:text-2xl">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/45 group-hover:text-white/65">
                        {article.description}
                      </p>
                      <motion.button
                        type="button"
                        onClick={() => readArticle(article)}
                        whileHover={{ x: 5 }}
                        className="mt-auto flex w-fit cursor-pointer items-center gap-2 pt-6 text-sm font-semibold uppercase"
                      >
                        Read More{" "}
                        <ArrowRight size={17} className="text-brand" />
                      </motion.button>
                    </div>
                    <motion.span
                      variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                      className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-brand"
                    />
                    <motion.span
                      animate={{ x: ["-110%", "430%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.35,
                      }}
                      className="pointer-events-none absolute left-0 top-0 z-20 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
                    />
                  </motion.article>
                </motion.div>
              </motion.div>
            ))}
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#100e0f] to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#100e0f] to-transparent sm:w-20" />
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
