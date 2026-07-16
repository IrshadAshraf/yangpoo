import { AnimatePresence, motion } from "framer-motion";
import { Bell, ChevronDown, Star, Users, X } from "lucide-react";
import { useState } from "react";
import learnerOne from "@/assets/stay relevant/141cf937b7833d435930108a7117e33c5942b18c.jpg";
import graduateGroup from "@/assets/stay relevant/4fc383b35acff37aef03613448392803d370f59e.png";
import arrow from "@/assets/stay relevant/Vector (9).png";
import learnerTwo from "@/assets/stay relevant/a9c26df9e826189581684fe90ab270614d888b44.jpg";
import learnerThree from "@/assets/stay relevant/b0ad796a9adec09d2e3a4ba72212a700e2f4ef92.jpg";
import students from "@/assets/stay relevant/c0a5d94df99016b3d407e937e6ed573b6659b7ae.png";
import graduate from "@/assets/stay relevant/e31118814e68db2c094bc4ffc513efd6517c7475.png";
import heroBackground from "@/assets/hero/8af6802efbfff90b980714f6ef395f7575829c33.png";
import AnimatedButton from "@/components/ui/AnimatedButton";

const cards = [
  {
    id: "learners",
    title: "50,000+",
    subtitle: "Learners Enrolled",
    detail:
      "Join a thriving global community learning through flexible, career-focused programs.",
    icon: Users,
    position: "lg:absolute lg:-left-24 lg:top-[175px]",
    delay: 0,
  },
  {
    id: "reviews",
    title: "95% Satisfaction",
    subtitle: "Student Reviews",
    detail:
      "Learners consistently value our expert faculty, practical curriculum, and dedicated support.",
    icon: Star,
    position: "lg:absolute lg:right-[15%] lg:top-[230px]",
    delay: 0.35,
  },
  {
    id: "oxford",
    title: "New MBA Added",
    subtitle: "University of Oxford",
    detail:
      "Explore a newly added MBA pathway designed to build strategic and leadership expertise.",
    icon: Bell,
    position: "lg:absolute lg:bottom-[28px] lg:right-[9%]",
    delay: 0.7,
  },
];

function FloatingCard({ card, activeCard, setActiveCard }) {
  const Icon = card.icon;
  const isActive = activeCard === card.id;

  return (
    <AnimatedButton
      type="button"
      layout
      onClick={() => setActiveCard(isActive ? null : card.id)}
      aria-expanded={isActive}
      className={`motion-card-smooth group relative z-30 w-full overflow-hidden rounded-2xl bg-white p-[2px] text-left shadow-[0_16px_45px_rgba(20,31,61,0.16)] lg:w-[280px] ${card.position}`}
      initial={{ opacity: 0, y: 35, scale: 0.92 }}
      whileInView={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      animate={{ y: isActive ? 0 : [0, -8, 0] }}
      transition={{
        layout: { type: "spring", stiffness: 320, damping: 28 },
        y: {
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.delay,
        },
        opacity: { duration: 0.5, delay: card.delay },
        scale: { duration: 0.5, delay: card.delay },
      }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute -inset-[120%] -z-10 bg-[conic-gradient(from_0deg,transparent,#42b4ff,#0C529F,transparent_45%)] opacity-0 transition-opacity group-hover:opacity-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <div className="motion-card-fill rounded-[14px] bg-white px-4 py-4">
        <div className="flex items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-500 transition-transform group-hover:scale-110">
            <Icon size={22} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-bold text-[#182037]">{card.title}</span>
            <span className="block text-xs text-slate-500">
              {card.subtitle}
            </span>
          </span>
          {isActive ? (
            <X size={17} className="text-slate-400" />
          ) : (
            <ChevronDown size={17} className="text-slate-400" />
          )}
        </div>
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.p
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 14 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden border-t border-slate-100 pt-3 text-sm leading-6 text-slate-600"
            >
              {card.detail}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </AnimatedButton>
  );
}

function AnimatedImage({
  src,
  alt,
  className,
  imageClassName = "",
  floatDelay = 0,
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ y: [0, -9, 0] }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        opacity: { duration: 0.75, ease: "easeOut" },
        scale: { duration: 0.75, ease: "easeOut" },
        y: {
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
    >
      <motion.div
        className="motion-card-smooth relative h-full w-full overflow-hidden rounded-[18px] p-[2px] sm:rounded-[24px] lg:rounded-[30px]"
        whileHover={{
          y: -7,
          scale: 1.01,
          transition: {
            type: "spring",
            stiffness: 155,
            damping: 23,
            mass: 0.9,
          },
        }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute -inset-[80%] bg-[conic-gradient(from_30deg,transparent_10%,#60c4ff_24%,#0C529F_36%,transparent_48%)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative h-full overflow-hidden rounded-[16px] bg-white p-[2px] sm:rounded-[22px] lg:rounded-[28px] lg:p-[3px]">
          <img
            src={src}
            alt={alt}
            className={`h-full w-full rounded-[14px] object-cover sm:rounded-[20px] lg:rounded-[25px] ${imageClassName}`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function StayRelevant() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative overflow-y-visible overflow-x-clip bg-[linear-gradient(to_bottom,#f3f9ff_0%,#f3f9ff_48%,#ffffff_72%,#ffffff_100%)] py-20 sm:py-24 lg:pb-28 lg:pt-0">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[5%] -top-[5%] h-[68%] bg-cover bg-center [mask-image:linear-gradient(to_bottom,black_0%,black_76%,transparent_100%)]"
        style={{ backgroundImage: `url(${heroBackground})` }}
        animate={{
          x: [0, 28, -18, 22, 0],
          y: [0, -20, 24, 10, 0],
          scale: [1.06, 1.1, 1.07, 1.11, 1.06],
        }}
        transition={{
          duration: 18,
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(12,82,159,0.08),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16 lg:px-8 xl:gap-20">
        <motion.div
          className="relative min-h-[500px] overflow-hidden rounded-[34px] bg-[#202541] px-8 py-12 text-white shadow-[0_28px_70px_rgba(25,33,64,0.18)] sm:px-14 sm:py-16 lg:min-h-[560px]"
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 rounded-[34px] border-2"
            animate={{
              borderColor: [
                "rgba(79,183,255,0.35)",
                "rgba(147,220,255,0.95)",
                "rgba(12,82,159,0.75)",
                "rgba(79,183,255,0.35)",
              ],
              boxShadow: [
                "inset 0 0 0 rgba(75,190,255,0), 0 0 0 rgba(75,190,255,0)",
                "inset 0 0 24px rgba(75,190,255,0.12), 0 0 28px rgba(12,82,159,0.2)",
                "inset 0 0 12px rgba(75,190,255,0.08), 0 0 12px rgba(12,82,159,0.12)",
                "inset 0 0 0 rgba(75,190,255,0), 0 0 0 rgba(75,190,255,0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute -right-28 -top-28 size-80 rounded-full border border-sky-400/20"
            animate={{ scale: [1, 1.18, 1], rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:64px_64px]" />
          {[
            {
              className: "left-[8%] top-[18%] size-16",
              x: [0, 34, 5, 0],
              y: [0, -24, 22, 0],
              delay: 0,
            },
            {
              className: "right-[12%] top-[24%] size-24",
              x: [0, -28, 12, 0],
              y: [0, 28, -18, 0],
              delay: 0.5,
            },
            {
              className: "left-[42%] top-[55%] size-12",
              x: [0, 20, -18, 0],
              y: [0, -32, 15, 0],
              delay: 1,
            },
            {
              className: "right-[25%] bottom-[8%] size-20",
              x: [0, -22, 26, 0],
              y: [0, -18, 24, 0],
              delay: 1.4,
            },
            {
              className: "left-[18%] bottom-[12%] size-9",
              x: [0, 25, -8, 0],
              y: [0, -26, 12, 0],
              delay: 1.8,
            },
          ].map((bubble, index) => (
            <motion.span
              key={bubble.className}
              aria-hidden="true"
              className={`pointer-events-none absolute rounded-full border border-sky-300/30 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.2),rgba(68,176,255,0.08)_48%,transparent_72%)] shadow-[inset_0_0_18px_rgba(92,190,255,0.1)] ${bubble.className}`}
              animate={{
                x: bubble.x,
                y: bubble.y,
                scale: [1, 1.12, 0.94, 1],
                opacity: [0.35, 0.7, 0.45, 0.35],
              }}
              transition={{
                duration: 6 + index * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: bubble.delay,
              }}
            />
          ))}
          <motion.h2
            className="relative z-10 max-w-[590px] text-[35px] font-semibold leading-[1.18] tracking-[-0.035em] sm:text-[43px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            Stay Relevant in a Rapidly Changing World
          </motion.h2>

          <motion.img
            src={arrow}
            alt=""
            className="absolute right-[18%] top-[47%] z-10 hidden h-28 w-auto sm:block"
            animate={{ y: [0, 12, 0], rotate: [-4, 3, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-12 left-8 z-10 flex flex-wrap items-center gap-5 sm:left-14 sm:bottom-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex -space-x-4 py-2">
              {[learnerOne, learnerTwo, learnerThree].map((learner, index) => (
                <motion.div
                  key={learner}
                  className="motion-avatar-smooth relative size-16 overflow-hidden rounded-full p-[3px] shadow-[0_8px_25px_rgba(0,0,0,0.25)] sm:size-20"
                  style={{ zIndex: 3 - index }}
                  animate={{ y: [0, -9 - index * 2, 0] }}
                  transition={{
                    duration: 2.7 + index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.28,
                  }}
                  whileHover={{
                    y: -11,
                    scale: 1.065,
                    zIndex: 10,
                    transition: {
                      type: "spring",
                      stiffness: 155,
                      damping: 21,
                      mass: 0.8,
                    },
                  }}
                >
                  <motion.span
                    aria-hidden="true"
                    className="absolute -inset-[55%] bg-[conic-gradient(from_0deg,#ffffff,#54c5ff,#0C529F,#ffffff,#9edcff,#ffffff)]"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3.2 + index * 0.45,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative block h-full w-full rounded-full bg-[#202541] p-[3px]">
                    <img
                      src={learner}
                      alt="Learner"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </span>
                </motion.div>
              ))}
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-2xl">
                Joined Our Courses
              </p>
              <p className="mt-1 text-sm text-white/80 sm:text-base">
                We’re waiting for you 🔥
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative lg:min-h-[664px]">
          <div className="grid grid-cols-2 gap-x-3 sm:gap-x-5 lg:gap-x-7">
            <div className="flex min-w-0 flex-col gap-3 pt-8 sm:gap-5 sm:pt-12 lg:gap-6 lg:pt-[72px]">
              <AnimatedImage
                src={graduateGroup}
                alt="Graduates celebrating"
                className="h-[160px] sm:h-[250px] lg:h-[316px]"
                floatDelay={0}
              />
              <AnimatedImage
                src={graduate}
                alt="Graduate holding a diploma"
                className="h-[152px] sm:h-[238px] lg:h-[300px]"
                imageClassName="object-[center_35%]"
                floatDelay={0.7}
              />
            </div>

            <div className="min-w-0">
              <AnimatedImage
                src={students}
                alt="Students learning together"
                className="h-[238px] sm:h-[370px] lg:h-[468px]"
                floatDelay={1.2}
              />
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-3 lg:contents">
            {cards.map((card) => (
              <FloatingCard
                key={card.id}
                card={card}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
