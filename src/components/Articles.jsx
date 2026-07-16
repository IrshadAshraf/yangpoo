import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
} from "lucide-react";
import { useEffect, useState } from "react";
import graduateGroup from "@/assets/articles/aa8a15f6a70beae125b983ee3b41090c6fde231a.png";
import libraryGroup from "@/assets/articles/bcba8dc3659441dfeadbee61098b255b27e200dc.png";
import graduateStudent from "@/assets/articles/e3ad0521753a3b8f9aeed1b08583b72479aeba43.png";
import authorOne from "@/assets/articles/41e5c0d7fac020f2869e60e0b9c25af5114bc8f2.png";
import authorTwo from "@/assets/articles/63fed0f67a8f66b5f2625e9773736c895c2e0d80.png";
import authorThree from "@/assets/articles/946fd858ff479e059554f27658f8596ba99bbab5.png";
import AnimatedButton from "@/components/ui/AnimatedButton";

const articles = [
  {
    title: "How online courses are transforming modern education",
    image: graduateStudent,
    author: "Daniel Foster",
    avatar: authorOne,
    readTime: "13 min read",
    date: "March 28, 2026",
  },
  {
    title: "Simple study techniques to improve learning efficiency",
    image: graduateGroup,
    author: "Lucas Parker",
    avatar: authorTwo,
    readTime: "14 min read",
    date: "March 28, 2026",
  },
  {
    title: "The importance of lifelong learning in a changing world",
    image: libraryGroup,
    author: "Jake Darwin",
    avatar: authorThree,
    readTime: "15 min read",
    date: "March 28, 2026",
  },
];

const reveals = [
  { x: -65, y: 25, rotate: -3 },
  { x: 0, y: 65, rotate: 0 },
  { x: 65, y: 25, rotate: 3 },
];

function ArticleCard({ article, index, carousel = false }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reveal = reveals[index];

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: y * -6, y: x * 8 });
  };

  return (
    <motion.article
      layout={carousel ? "size" : false}
      className={`motion-card-smooth group relative overflow-hidden rounded-[24px] p-[2px] shadow-[0_12px_34px_rgba(15,23,42,.1)] [transform-style:preserve-3d] ${carousel ? "h-auto" : "h-full"}`}
      initial={carousel ? false : { opacity: 0, scale: 0.9, ...reveal }}
      whileInView={
        carousel ? undefined : { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }
      }
      viewport={{ once: true, amount: 0.2 }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{
        layout: { type: "spring", stiffness: 145, damping: 24, mass: 0.9 },
        opacity: { duration: 0.7, delay: index * 0.14, ease: "easeOut" },
        scale: { duration: 0.7, delay: index * 0.14, ease: "easeOut" },
        x: { duration: 0.7, delay: index * 0.14, ease: "easeOut" },
        y: { type: "spring", stiffness: 155, damping: 23, mass: 0.95 },
        rotate: { duration: 0.7, delay: index * 0.14, ease: "easeOut" },
        rotateX: { type: "spring", stiffness: 115, damping: 20, mass: 0.8 },
        rotateY: { type: "spring", stiffness: 115, damping: 20, mass: 0.8 },
      }}
      whileHover={{
        y: -7,
        scale: 1.01,
        transition: { type: "spring", stiffness: 155, damping: 23, mass: 0.95 },
      }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transformPerspective: 1000 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_5%,#7dd3fc_19%,#0C529F_31%,#a78bfa_40%,transparent_54%)] opacity-60"
        animate={{ rotate: 360 }}
        transition={{
          duration: 5.5 + index * 0.6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div
        className={`motion-card-fill relative flex flex-col rounded-[22px] bg-white p-3 sm:p-4 ${carousel ? "h-auto min-h-0" : "h-full min-h-[490px] sm:min-h-[520px]"}`}
      >
        <div className="relative aspect-[3/2] overflow-hidden rounded-[18px]">
          <motion.div
            className="h-full w-full"
            animate={{ scale: [1.02, 1.07, 1.02], y: [0, -5, 0] }}
            transition={{
              duration: 7 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
              whileHover={{
                scale: 1.04,
                rotate: index === 1 ? 0.6 : -0.6,
                transition: {
                  type: "spring",
                  stiffness: 135,
                  damping: 24,
                  mass: 0.95,
                },
              }}
            />
          </motion.div>
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/45 to-transparent"
            animate={{ x: ["0%", "520%"] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 3 + index,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
          <motion.span
            className="absolute bottom-3 right-3 rounded-full bg-[#0C529F]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100"
            whileHover={{
              scale: 1.06,
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 21,
                mass: 0.8,
              },
            }}
          >
            Read article
          </motion.span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-slate-700 sm:text-sm">
          <motion.span
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
          >
            <CalendarDays size={16} />
          </motion.span>
          {article.date}
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-[1.4] tracking-[-0.025em] text-[#111827] transition-colors group-hover:text-[#0C529F] sm:text-xl lg:text-[22px]">
          {article.title}
        </h3>

        <div className="mt-auto flex items-center justify-between gap-3 pt-7">
          <div className="flex min-w-0 items-center gap-3">
            <motion.div
              className="motion-avatar-smooth relative size-10 shrink-0 overflow-hidden rounded-full p-[2px]"
              whileHover={{
                scale: 1.12,
                rotate: 4,
                y: -3,
                transition: {
                  type: "spring",
                  stiffness: 160,
                  damping: 21,
                  mass: 0.8,
                },
              }}
            >
              <motion.span
                className="absolute -inset-[70%] bg-[conic-gradient(#7dd3fc,#0C529F,#a78bfa,#7dd3fc)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative block h-full rounded-full bg-white p-[2px]">
                <img
                  src={article.avatar}
                  alt={article.author}
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
            </motion.div>
            <span className="truncate text-sm font-medium text-slate-900">
              {article.author}
            </span>
          </div>
          <motion.span
            className="flex shrink-0 items-center gap-2 text-xs text-slate-700 sm:text-sm"
            whileHover={{
              x: 4,
              color: "#0C529F",
              transition: {
                type: "spring",
                stiffness: 170,
                damping: 23,
                mass: 0.75,
              },
            }}
          >
            <Clock3 size={15} fill="currentColor" /> {article.readTime}
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Articles() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % articles.length);
    }, 3800);
    return () => window.clearInterval(interval);
  }, []);

  const changeSlide = (nextDirection) => {
    setDirection(nextDirection);
    setActiveIndex(
      (current) =>
        (current + nextDirection + articles.length) % articles.length,
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-80 w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(12,82,159,.08),transparent_68%)] blur-3xl"
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.45, 0.9, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 lg:px-8">
        <motion.div
          className="mx-auto max-w-[760px] text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <motion.div
            className="relative inline-flex overflow-hidden rounded-full p-[2px]"
            animate={{
              boxShadow: [
                "0 4px 12px rgba(12,82,159,.04)",
                "0 7px 23px rgba(12,82,159,.17)",
                "0 4px 12px rgba(12,82,159,.04)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span
              className="absolute -inset-[100%] bg-[conic-gradient(transparent,#7dd3fc,#0C529F,#a78bfa,transparent_48%)] opacity-55"
              animate={{ rotate: 360 }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium">
              <FileText size={15} /> Articles
            </span>
          </motion.div>
          <h2 className="mt-6 text-[28px] font-semibold leading-[1.15] tracking-[-0.045em] text-black sm:text-[50px] lg:text-[50px]">
            Explore the latest learning insights and trends
          </h2>
          <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-slate-700 sm:text-lg">
            Discover articles, tips, and resources designed to help you grow
            your skills and stay ahead.
          </p>
        </motion.div>

        <div className="mt-14 hidden grid-cols-3 gap-7 lg:grid xl:gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-[580px] lg:hidden">
          <motion.div
            layout="size"
            className="relative overflow-hidden py-3 [perspective:1100px]"
            transition={{
              layout: {
                type: "spring",
                stiffness: 145,
                damping: 24,
                mass: 0.9,
              },
            }}
          >
            <AnimatePresence
              initial={false}
              mode="popLayout"
              custom={direction}
            >
              <motion.div
                key={activeIndex}
                layout="size"
                initial={{
                  x: direction > 0 ? 110 : -110,
                  opacity: 0,
                  scale: 0.9,
                  rotateY: direction > 0 ? 10 : -10,
                }}
                animate={{ x: 0, opacity: 1, scale: 1, rotateY: 0 }}
                exit={{
                  x: direction > 0 ? -110 : 110,
                  opacity: 0,
                  scale: 0.9,
                  rotateY: direction > 0 ? -10 : 10,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 45)
                    changeSlide(info.offset.x < 0 ? 1 : -1);
                }}
              >
                <ArticleCard
                  article={articles[activeIndex]}
                  index={activeIndex}
                  carousel
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="mt-5 flex items-center justify-between">
            <AnimatedButton
              type="button"
              onClick={() => changeSlide(-1)}
              className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0C529F] shadow-sm transition hover:bg-[#0C529F] hover:text-white"
              aria-label="Previous article"
            >
              <ArrowLeft size={19} />
            </AnimatedButton>
            <div className="flex gap-2">
              {articles.map((article, index) => (
                <AnimatedButton
                  key={article.title}
                  type="button"
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-8 bg-[#0C529F]" : "w-2 bg-slate-200"}`}
                  aria-label={`Show article ${index + 1}`}
                />
              ))}
            </div>
            <AnimatedButton
              type="button"
              onClick={() => changeSlide(1)}
              className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0C529F] shadow-sm transition hover:bg-[#0C529F] hover:text-white"
              aria-label="Next article"
            >
              <ArrowRight size={19} />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
