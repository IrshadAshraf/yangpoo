import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CirclePlay, Folder } from "lucide-react";
import { useEffect, useState } from "react";
import portraitOne from "@/assets/testimonials/5180248a7391399fd9584d7d7d0f78d3a4a8e685.png";
import portraitTwo from "@/assets/testimonials/756ad42c4e854b69f7356cb9ecd55c4293db127c.png";
import avatarOne from "@/assets/testimonials/19fe12d7702a9e0fc3c196d02a7f9c2e41c59016.png";
import avatarTwo from "@/assets/testimonials/254ebc944c228778efaeb438e1f500fca74bcd63.png";
import avatarThree from "@/assets/testimonials/78b5b849049320e70f23e83b378119e26acc5315.png";
import avatarFour from "@/assets/testimonials/7f2ac885795f6299294c794c6b72d82475b06bbe.png";
import avatarFive from "@/assets/testimonials/859a7c2fc5a3c1a19fbe7c224f90d29f1daa9420.png";
import avatarSix from "@/assets/testimonials/d725ebfeeb48bfa0819aa48638aced9515549e2e.png";
import avatarSeven from "@/assets/testimonials/d7e95338d3000c26275ff6bf57fe5f4df249aaa6.png";

const testimonials = [
  {
    quote:
      "Let’s Share truly makes community building simple. Managing my community has never been easier.",
    name: "John D",
    role: "Small business owner",
    avatar: avatarOne,
  },
  {
    quote:
      "We created our business page and started connecting directly with customers.",
    name: "Emily Rox",
    role: "Freelancer",
    avatar: avatarTwo,
  },
  {
    quote:
      "I joined multiple learning communities and found amazing people who share knowledge daily. It feels like a supportive network where everyone grows together.",
    name: "Michael Zingg",
    role: "Photographer",
    avatar: avatarThree,
  },
  {
    quote:
      "It helped us promote our services and build trust with our audience.",
    name: "Carlos Jonson",
    role: "IT Manager",
    avatar: avatarFour,
  },
  {
    quote:
      "I can organize discussions, share updates, and keep members engaged.",
    name: "Carlos Jonson",
    role: "IT Manager",
    avatar: avatarFive,
  },
  {
    quote:
      "Let’s Share helped me build my own community and connect with like-minded people easily!",
    name: "Samanta Roy",
    role: "IT Manager",
    avatar: avatarSix,
  },
  {
    quote: "I can’t imagine running my business without it!",
    name: "Lisa W",
    role: "Entrepreneur",
    avatar: avatarSeven,
  },
];

const revealAnimations = [
  { x: -55, y: 0, rotate: -2 },
  { x: 0, y: -45, rotate: 2 },
  { x: 55, y: 0, rotate: 2 },
  { x: -35, y: 45, rotate: -2 },
  { x: 30, y: 45, rotate: 2 },
  { x: -45, y: 20, rotate: -3 },
  { x: 45, y: 20, rotate: 3 },
];

function AnimatedAvatar({ src, name }) {
  return (
    <motion.div
      className="relative size-10 shrink-0 overflow-hidden rounded-full p-[2px] shadow-[0_5px_14px_rgba(12,82,159,.18)]"
      whileHover={{ y: -6, scale: 1.18, rotate: 8 }}
      transition={{ type: "spring", stiffness: 360, damping: 18 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute -inset-[70%] bg-[conic-gradient(from_0deg,#7dd3fc,#0C529F,#a78bfa,#7dd3fc)] opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      />
      <span className="relative block h-full w-full rounded-full bg-white p-[2px]">
        <motion.img
          src={src}
          alt={name}
          className="h-full w-full rounded-full object-cover"
          whileHover={{ scale: 1.12 }}
        />
      </span>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, index, carousel = false }) {
  const reveal = revealAnimations[index % revealAnimations.length];
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: vertical * -8, y: horizontal * 10 });
  };

  return (
    <motion.article
      layout={carousel ? "size" : false}
      className="group relative overflow-hidden rounded-[24px] bg-slate-100 p-2 shadow-[0_6px_20px_rgba(15,23,42,0.06)] [transform-style:preserve-3d]"
      initial={carousel ? false : { opacity: 0, scale: 0.9, ...reveal }}
      whileInView={
        carousel ? undefined : { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      whileHover={{ y: -8, scale: 1.025 }}
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transformPerspective: 900 }}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[110%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_48deg,#7dd3fc_76deg,#0C529F_105deg,transparent_138deg,transparent_225deg,#c4b5fd_252deg,#6366f1_278deg,transparent_312deg)] opacity-[0.38]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 6.5 + index * 0.3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-[24px] border border-slate-200"
        animate={{
          borderColor: ["rgba(226,232,240,.4)", "rgba(125,211,252,.33)", "rgba(196,181,253,.28)", "rgba(226,232,240,.4)"],
          boxShadow: ["0 0 0 rgba(12,82,159,0)", "0 0 15px rgba(12,82,159,.04)", "0 0 0 rgba(12,82,159,0)"],
        }}
        transition={{ duration: 4.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative flex min-h-[160px] flex-col overflow-hidden rounded-[18px] bg-white px-5 py-5 sm:min-h-[175px] sm:px-6">
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#0b3e78_0%,#0C529F_42%,#5b4fc7_100%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
        <span className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-cyan-300/25 blur-2xl opacity-0 transition-all duration-700 group-hover:translate-x-[-18px] group-hover:translate-y-[18px] group-hover:opacity-100" />
        <span className="pointer-events-none absolute -bottom-20 -left-16 size-44 rounded-full bg-violet-300/20 blur-2xl opacity-0 transition-all duration-700 group-hover:translate-x-[20px] group-hover:translate-y-[-14px] group-hover:opacity-100" />
        <p className="relative z-10 text-sm leading-6 text-[#171b25] transition-colors duration-500 group-hover:text-white sm:text-[15px]">
          “{testimonial.quote}”
        </p>
        <div className="relative z-10 mt-auto flex items-center gap-3 pt-5 [transform:translateZ(22px)]">
          <AnimatedAvatar src={testimonial.avatar} name={testimonial.name} />
          <div>
            <h3 className="text-sm font-bold text-[#171b25] transition-colors duration-500 group-hover:text-white">
              {testimonial.name}
            </h3>
            <p className="text-xs text-slate-500 transition-colors duration-500 group-hover:text-sky-100">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ImageCard({ src, alt, index, className = "" }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-[26px] p-[2px] shadow-[0_10px_30px_rgba(15,23,42,0.1)] ${className}`}
      initial={{ opacity: 0, scale: 0.88, rotate: index ? 3 : -3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute -inset-[90%] bg-[conic-gradient(from_0deg,transparent_6%,#7dd3fc_20%,#0C529F_34%,#a78bfa_43%,transparent_55%)] opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 5.5 + index, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative h-full overflow-hidden rounded-[24px] bg-white p-[3px]">
        <motion.img
          src={src}
          alt={alt}
          className="h-full w-full rounded-[21px] object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.55 }}
        />
        <motion.span
          className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full bg-[#132339]/90 text-white shadow-lg"
          whileHover={{ scale: 1.15 }}
        >
          <CirclePlay size={18} fill="white" />
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3600);
    return () => window.clearInterval(interval);
  }, []);

  const changeSlide = (nextDirection) => {
    setDirection(nextDirection);
    setActiveIndex(
      (current) =>
        (current + nextDirection + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-[1600px] px-5 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <motion.div
            className="relative inline-flex overflow-hidden rounded-full p-[2px]"
            animate={{
              boxShadow: [
                "0 4px 14px rgba(12,82,159,.05)",
                "0 7px 24px rgba(12,82,159,.16)",
                "0 4px 14px rgba(12,82,159,.05)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              aria-hidden="true"
              className="absolute -inset-[110%] bg-[conic-gradient(from_0deg,transparent_8%,#7dd3fc_24%,#0C529F_38%,#a78bfa_48%,transparent_61%)] opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium">
              <Folder size={15} fill="currentColor" /> Testimonials
            </span>
          </motion.div>
          <h2 className="mt-5 text-[38px] font-bold tracking-[-0.04em] text-[#151c2e] sm:text-[50px] lg:text-[56px]">
            Student Success Stories
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 hidden max-w-[1300px] grid-cols-3 gap-6 lg:grid">
          <div className="flex flex-col gap-6">
            <TestimonialCard testimonial={testimonials[0]} index={0} />
            <ImageCard
              src={portraitOne}
              alt="Successful graduate"
              index={0}
              className="h-[340px]"
            />
            <TestimonialCard testimonial={testimonials[4]} index={4} />
          </div>
          <div className="flex flex-col gap-6">
            <TestimonialCard testimonial={testimonials[1]} index={1} />
            <TestimonialCard testimonial={testimonials[2]} index={2} />
            <TestimonialCard testimonial={testimonials[5]} index={5} />
          </div>
          <div className="flex flex-col gap-6">
            <ImageCard
              src={portraitTwo}
              alt="Award-winning graduate"
              index={1}
              className="h-[340px]"
            />
            <TestimonialCard testimonial={testimonials[3]} index={3} />
            <TestimonialCard testimonial={testimonials[6]} index={6} />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[560px] lg:hidden">
          <ImageCard
            src={portraitOne}
            alt="Successful graduate"
            index={0}
            className="h-[390px] sm:h-[480px]"
          />

          <motion.div
            layout="size"
            className="relative mt-8 overflow-hidden py-3 [perspective:1000px]"
            transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          >
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={activeIndex}
                layout="size"
                custom={direction}
                initial={{
                  x: direction > 0 ? 90 : -90,
                  opacity: 0,
                  rotateY: direction > 0 ? 8 : -8,
                }}
                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                exit={{
                  x: direction > 0 ? -90 : 90,
                  opacity: 0,
                  rotateY: direction > 0 ? -8 : 8,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 45)
                    changeSlide(info.offset.x < 0 ? 1 : -1);
                }}
              >
                <TestimonialCard
                  testimonial={testimonials[activeIndex]}
                  index={activeIndex}
                  carousel
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => changeSlide(-1)}
              className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0C529F] shadow-sm transition hover:bg-[#0C529F] hover:text-white"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={19} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={`${testimonial.name}-${index}`}
                  type="button"
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-7 bg-[#0C529F]" : "w-2 bg-slate-200"}`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => changeSlide(1)}
              className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-[#0C529F] shadow-sm transition hover:bg-[#0C529F] hover:text-white"
              aria-label="Next testimonial"
            >
              <ArrowRight size={19} />
            </button>
          </div>

          <ImageCard
            src={portraitTwo}
            alt="Award-winning graduate"
            index={1}
            className="mt-10 h-[390px] sm:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
