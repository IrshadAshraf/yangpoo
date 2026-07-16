import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  CirclePlay,
  Folder,
  UserRound,
} from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectDialog from "@/components/ui/ProjectDialog";
import loungeStudents from "@/assets/courses/0d3c7b0d1c5acb12d79f7b6f31ad36bbac2149ec.png";
import laptopStudents from "@/assets/courses/297094b0d5e40e381d6f63110ffc26eb9a962997.png";
import campusStudents from "@/assets/courses/2e58e00ceaf2209c77f9659ac4fb98f4e36edd0f.png";
import studentGroup from "@/assets/courses/c0a5d94df99016b3d407e937e6ed573b6659b7ae (1).png";
import libraryStudents from "@/assets/courses/e28f55ad2c4069021b518e075ab980d1d3209a0d.png";
import professionals from "@/assets/courses/f4be401df04b493ebbf0d088e5e8ddd0649e6f52.png";

const courses = [
  {
    title: "Welingkar Institute of Management",
    image: studentGroup,
    rating: "4.5/5.0",
    lessons: 40,
    price: "$320.40",
    students: "4k students",
  },
  {
    title: "NMIMS Centre for Distance & Online Education",
    image: loungeStudents,
    rating: "4.5/5.0",
    lessons: 40,
    price: "$320.40",
    students: "4k students",
  },
  {
    title: "Deakin University GIFT City Campus, India",
    image: libraryStudents,
    rating: "5/5.0",
    lessons: 40,
    price: "$330.40",
    students: "5k students",
  },
  {
    title: "Deakin University GIFT City Campus, India",
    image: campusStudents,
    rating: "4.5/5.0",
    lessons: 40,
    price: "$340.50",
    students: "3k students",
  },
  {
    title: "D.Y. Patil University",
    image: laptopStudents,
    rating: "4.5/5.0",
    lessons: 30,
    price: "$380.40",
    students: "3k students",
  },
  {
    title: "National Skill Development Corporation",
    image: professionals,
    rating: "5/5.0",
    lessons: 50,
    price: "$370.60",
    students: "4k students",
  },
];

function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 55, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.12,
        ease: "easeOut",
      }}
      className="min-w-0"
    >
      <motion.article
        className="motion-card-smooth group relative h-full overflow-hidden rounded-[22px] p-[2px] shadow-[0_10px_28px_rgba(20,31,61,0.12)]"
        whileHover={{
          y: -7,
          scale: 1.008,
          transition: {
            type: "spring",
            stiffness: 165,
            damping: 23,
            mass: 0.9,
          },
        }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_7%,#78d0ff_20%,#0C529F_34%,transparent_49%)]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 5 + index * 0.35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="motion-card-fill relative flex h-full flex-col rounded-[20px] bg-white p-2 sm:p-3 lg:p-4">
          <div className="aspect-[3/2] overflow-hidden rounded-[13px] sm:rounded-[16px]">
            <motion.div
              className="h-full w-full"
              animate={{ y: [0, -6, 0], scale: [1.03, 1.07, 1.03] }}
              transition={{
                duration: 4 + index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.22,
              }}
            >
              <motion.img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover"
                whileHover={{
                  scale: 1.04,
                  transition: {
                    type: "spring",
                    stiffness: 135,
                    damping: 24,
                    mass: 0.95,
                  },
                }}
              />
            </motion.div>
          </div>

          <div className="flex items-center justify-between gap-1 py-2 text-[8px] sm:py-3 sm:text-xs lg:text-sm">
            <span className="flex min-w-0 items-center gap-1">
              <span className="truncate tracking-[-0.08em] text-amber-400 sm:text-sm lg:text-base">
                ★★★★★
              </span>
              <span className="whitespace-nowrap text-slate-800">
                {course.rating}
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-1 text-slate-800">
              <CirclePlay className="size-3 fill-slate-700 text-white sm:size-4" />
              {course.lessons} lessons
            </span>
          </div>

          <h3 className="min-h-[48px] text-[12px] font-bold leading-[1.35] tracking-[-0.02em] text-[#101010] sm:min-h-[58px] sm:text-base lg:min-h-[66px] lg:text-xl">
            {course.title}
          </h3>

          <div className="mt-2 grid grid-cols-2 border-y border-slate-200 py-3 text-[9px] font-semibold text-slate-700 sm:py-4 sm:text-xs lg:text-base">
            <span className="flex items-center justify-center gap-1 border-r border-slate-200 sm:gap-2">
              <CircleDollarSign className="size-3 sm:size-4" /> {course.price}
            </span>
            <span className="flex items-center justify-center gap-1 sm:gap-2">
              <UserRound className="size-3 fill-slate-700 sm:size-4" />{" "}
              {course.students}
            </span>
          </div>

          <ProjectDialog
            eyebrow="Course details"
            title={course.title}
            description="Review the key course information before speaking with an education advisor about eligibility, schedules, and enrollment."
            trigger={({ openDialog }) => (
              <AnimatedButton
                type="button"
                onClick={openDialog}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#1558a5] px-2 py-2.5 text-[10px] font-semibold text-white transition hover:bg-[#0C529F] hover:shadow-[0_8px_24px_rgba(12,82,159,.3)] sm:mt-5 sm:py-3 sm:text-sm lg:text-base"
              >
                Course details
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1.5 sm:size-4" />
              </AnimatedButton>
            )}
          >
            {({ closeDialog }) => (
              <div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["Rating", course.rating],
                    ["Lessons", String(course.lessons)],
                    ["Learners", course.students],
                    ["Tuition", course.price],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-sky-100 bg-white/80 p-4 text-center shadow-sm">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{label}</p>
                      <p className="mt-1 text-base font-bold text-[#151d31]">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-[#0C529F]/5 p-5">
                  <h3 className="font-bold text-[#151d31]">What you can expect</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    {["Flexible online access", "Advisor-led enrollment support", "Industry-relevant curriculum", "A recognized learning pathway"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 shrink-0 text-[#0C529F]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <AnimatedButton
                  smooth
                  to="/#contact"
                  onClick={closeDialog}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0C529F] px-6 py-3 text-sm font-semibold text-white"
                >
                  Talk to an advisor <ArrowRight size={17} />
                </AnimatedButton>
              </div>
            )}
          </ProjectDialog>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 h-96 w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(12,82,159,.08),transparent_68%)] blur-3xl"
        animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-[780px] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65 }}
        >
          <motion.div
            className="relative inline-flex overflow-hidden rounded-full p-[2px]"
            animate={{
              boxShadow: [
                "0 4px 14px rgba(12,82,159,.06)",
                "0 8px 25px rgba(12,82,159,.2)",
                "0 4px 14px rgba(12,82,159,.06)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span
              className="absolute -inset-[100%] bg-[conic-gradient(transparent,#6dceff,#0C529F,transparent_45%)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900">
              <Folder size={15} fill="currentColor" /> All Courses
            </span>
          </motion.div>

          <h2 className="mt-6 text-[26px] font-semibold leading-[1.15] tracking-[-0.045em] text-black sm:text-[40px] lg:text-[50px]">
            Our Cutting-Edge Programs from World&apos;s Leading Universities
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={`${course.title}-${index}`}
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
