import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircleMore,
  Phone,
  Plus,
} from "lucide-react";
import { useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectDialog from "@/components/ui/ProjectDialog";

const faqs = [
  {
    question: "How do I choose the right program?",
    answer:
      "Our education advisors evaluate your career goals, experience, and preferred learning style to recommend the most suitable options.",
    fill: "from-left",
  },
  {
    question: "Are the programs recognized?",
    answer:
      "Yes. We partner with established universities and institutions whose programs follow recognized academic and professional standards.",
    fill: "from-right",
  },
  {
    question: "Do you provide admission support?",
    answer:
      "Our advisors guide you through program selection, documentation, applications, and enrollment from start to finish.",
    fill: "from-top",
  },
  {
    question: "Can working professionals apply?",
    answer:
      "Absolutely. Many programs offer flexible online schedules designed specifically for working professionals.",
    fill: "from-bottom",
  },
  {
    question: "Are flexible payment options available?",
    answer:
      "Available payment plans vary by institution, and our team will explain every eligible option before you enroll.",
    fill: "from-left",
  },
  {
    question: "Can I study completely online?",
    answer:
      "Yes. Our catalog includes fully online programs that can be completed from anywhere without interrupting your career.",
    fill: "from-right",
  },
];

const fillClasses = {
  "from-left": "-translate-x-full group-hover:translate-x-0",
  "from-right": "translate-x-full group-hover:translate-x-0",
  "from-top": "-translate-y-full group-hover:translate-y-0",
  "from-bottom": "translate-y-full group-hover:translate-y-0",
};

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? 55 : -55, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="relative z-10 flex items-start gap-3 sm:gap-5">
        <motion.div
          className="group relative min-w-0 flex-1 overflow-hidden rounded-[28px] bg-[#1558a5]"
          whileHover={{
            y: -3,
            boxShadow: "0 14px 34px rgba(12,82,159,.2)",
            transition: {
              type: "spring",
              stiffness: 155,
              damping: 23,
              mass: 0.85,
            },
          }}
          transition={{ layout: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 rounded-[28px] border"
            animate={{
              borderColor: [
                "rgba(125,211,252,.18)",
                "rgba(196,181,253,.55)",
                "rgba(103,213,255,.45)",
                "rgba(125,211,252,.18)",
              ],
              boxShadow: [
                "inset 0 0 0 rgba(125,211,252,0)",
                "inset 0 0 18px rgba(125,211,252,.08)",
                "inset 0 0 0 rgba(125,211,252,0)",
              ],
            }}
            transition={{
              duration: 4.5 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span
            className={`pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,#0b3d75,#4f46c7,#1597c8)] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${fillClasses[faq.fill]}`}
          />
          <AnimatedButton
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            className="relative z-10 flex w-full items-center px-5 py-6 text-left text-base font-medium text-white sm:px-10 sm:py-8 sm:text-xl lg:text-2xl"
          >
            {faq.question}
          </AnimatedButton>
        </motion.div>

        <div className="mt-3 size-12 shrink-0 sm:mt-4 sm:size-16">
          <AnimatePresence initial={false}>
            {!isOpen && (
              <AnimatedButton
                type="button"
                onClick={onToggle}
                aria-label="Open answer"
                className="grid size-full place-items-center rounded-full bg-slate-200 text-black"
                initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "#bfdbfe",
                  transition: {
                    type: "spring",
                    stiffness: 170,
                    damping: 22,
                    mass: 0.75,
                  },
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <Plus className="size-6 sm:size-8" strokeWidth={3} />
              </AnimatedButton>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!isOpen}
        className="relative z-20 grid overflow-hidden"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="min-h-0 overflow-hidden">
          <motion.div
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -12,
              scale: isOpen ? 1 : 0.99,
            }}
            transition={{
              opacity: {
                duration: isOpen ? 0.4 : 0.2,
                delay: isOpen ? 0.08 : 0,
                ease: "easeOut",
              },
              y: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            }}
            className="relative -mt-4 overflow-hidden"
          >
            <div className="relative overflow-hidden rounded-[18px] p-[2px] shadow-[0_8px_24px_rgba(15,23,42,.06)]">
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[120%] bg-[conic-gradient(from_0deg,transparent,#7dd3fc,#0C529F,#a78bfa,transparent_48%)] opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative rounded-[16px] bg-white px-5 py-6 text-sm leading-6 text-slate-600 sm:px-10 sm:py-8 sm:text-lg sm:leading-8">
                {faq.answer}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);
  const visibleFaqs = faqs.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 size-[520px] rounded-full bg-blue-100/50 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, 40, 0], scale: [1, 1.16, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-[1600px] gap-12 px-5 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="max-w-[390px] text-[40px] font-medium leading-[1.08] tracking-[-0.045em] text-[#141b2d] sm:text-[50px] lg:text-[60px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-[360px] text-base leading-7 text-slate-700 sm:text-lg">
            Find answers to common questions about our community.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-14 sm:gap-4">
            <ProjectDialog
              eyebrow="Contact support"
              title="Still have a question? Let’s solve it together"
              description="Our education advisors can help with program selection, eligibility, fees, schedules, applications, and enrollment support."
              trigger={({ openDialog }) => (
                <AnimatedButton
                  type="button"
                  onClick={openDialog}
                  className="rounded-full bg-[#1558a5] px-7 py-3.5 font-medium text-white transition hover:-translate-y-1 hover:bg-[#0C529F] hover:shadow-[0_10px_25px_rgba(12,82,159,.25)] sm:px-10 sm:py-4"
                >
                  Contact Us
                </AnimatedButton>
              )}
            >
              {({ closeDialog }) => (
                <div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      [MessageCircleMore, "Personal advice", "Discuss your goals with an education advisor."],
                      [Phone, "Consultation", "Get clear answers about eligibility and enrollment."],
                      [Mail, "Follow-up support", "Receive the information needed for your next step."],
                    ].map(([Icon, title, copy]) => (
                      <div key={title} className="min-w-0 rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-sm">
                        <Icon className="size-5 text-[#0C529F]" />
                        <h3 className="mt-3 text-sm font-bold text-[#151d31]">{title}</h3>
                        <p className="mt-1 break-words text-xs leading-5 text-slate-600">{copy}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl bg-[#0C529F]/5 p-5 text-sm text-slate-700">
                    <p className="flex items-center gap-2"><CheckCircle2 className="size-4 shrink-0 text-[#0C529F]" /> Personalized and obligation-free guidance</p>
                    <p className="mt-2 flex items-center gap-2"><CheckCircle2 className="size-4 shrink-0 text-[#0C529F]" /> Support throughout your application journey</p>
                  </div>
                  <AnimatedButton smooth to="/#contact" onClick={closeDialog} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0C529F] px-6 py-3 text-sm font-semibold text-white">
                    Contact an advisor <ArrowRight size={17} />
                  </AnimatedButton>
                </div>
              )}
            </ProjectDialog>

            <ProjectDialog
              eyebrow="FAQ library"
              title="Everything learners commonly ask"
              description="Browse the complete collection of quick answers about programs, recognition, online study, admissions, and payment options."
              trigger={({ openDialog }) => (
                <AnimatedButton
                  type="button"
                  onClick={openDialog}
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#1558a5] bg-white px-6 py-3.5 font-medium text-[#1558a5] transition hover:-translate-y-1 hover:bg-[#1558a5] hover:text-white hover:shadow-[0_10px_25px_rgba(12,82,159,.18)] sm:px-8 sm:py-4"
                >
                  View All FAQs
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </AnimatedButton>
              )}
            >
              {({ closeDialog }) => (
                <div>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.055 }}
                        className="rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-sm sm:p-5"
                      >
                        <h3 className="flex gap-3 font-bold text-[#151d31]">
                          <span className="text-[#0C529F]">{String(index + 1).padStart(2, "0")}</span>
                          <span>{faq.question}</span>
                        </h3>
                        <p className="mt-2 pl-8 text-sm leading-6 text-slate-600">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <AnimatedButton smooth to="/#contact" onClick={closeDialog} className="inline-flex items-center gap-2 rounded-full bg-[#0C529F] px-6 py-3 text-sm font-semibold text-white">
                      Ask another question <ArrowRight size={17} />
                    </AnimatedButton>
                    <AnimatedButton type="button" onClick={closeDialog} className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700">
                      Continue browsing
                    </AnimatedButton>
                  </div>
                </div>
              )}
            </ProjectDialog>
          </div>
        </motion.div>

        <div className="space-y-5 sm:space-y-6">
          <AnimatePresence initial={false}>
            {visibleFaqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
