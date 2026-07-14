import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Search, Sparkles } from "lucide-react";
import faqImage from "@/assets/faqs/workplace-feedback.webp";
import { useDrawer } from "@/components/Drawer";

const faqs = [
  {
    category: "Platform",
    question: "How does AnonyMoose protect employee anonymity?",
    answer:
      "AnonyMoose separates identifying information from feedback, applies privacy-first controls, and gives administrators only the insights required to take action.",
  },
  {
    category: "Platform",
    question: "Can employees submit sensitive incident reports?",
    answer:
      "Yes. Employees can securely report workplace concerns and continue a private two-way conversation without revealing their identity.",
  },
  {
    category: "Analytics",
    question: "How quickly do insights appear in the dashboard?",
    answer:
      "Feedback, participation, sentiment, and emerging themes update in near real time so leaders can recognize patterns early.",
  },
  {
    category: "Security",
    question: "Is AnonyMoose GDPR compliant?",
    answer:
      "The platform is designed with GDPR-aligned data handling, access controls, retention settings, and privacy safeguards for distributed organizations.",
  },
  {
    category: "Platform",
    question: "Can we run surveys and employee pulse checks?",
    answer:
      "Yes. Create focused surveys, recurring pulse checks, and anonymous polls that are easy for employees to complete across devices.",
  },
  {
    category: "Analytics",
    question: "Can analytics be segmented by team or location?",
    answer:
      "Authorized leaders can compare aggregated trends across departments, locations, and time periods while preserving respondent anonymity.",
  },
  {
    category: "Security",
    question: "Who can access submitted reports?",
    answer:
      "Role-based permissions ensure that only designated and authorized case managers can access sensitive reports and conversations.",
  },
  {
    category: "Getting Started",
    question: "How long does implementation take?",
    answer:
      "Most teams can configure their workspace, invite administrators, and launch their first listening channel in a matter of days.",
  },
  {
    category: "Platform",
    question: "Can I customize the feedback categories?",
    answer:
      "Yes. Customize feedback categories, question templates, and response options to match your organization's unique needs and communication style.",
  },
  {
    category: "Analytics",
    question: "What types of reports can I generate?",
    answer:
      "Generate comprehensive reports including sentiment analysis, trend reports, team comparisons, and historical data to track changes over time.",
  },
  {
    category: "Security",
    question: "How is data encrypted?",
    answer:
      "All data in transit and at rest is encrypted using industry-standard encryption protocols to ensure maximum security and confidentiality.",
  },
  {
    category: "Platform",
    question: "Does AnonyMoose integrate with other HR tools?",
    answer:
      "Yes. AnonyMoose integrates with popular HR platforms and communication tools to streamline your existing workflows and systems.",
  },
  {
    category: "Getting Started",
    question: "What training is available for my team?",
    answer:
      "We provide comprehensive onboarding, video tutorials, documentation, and dedicated support to ensure your team gets the most from AnonyMoose.",
  },
  {
    category: "Analytics",
    question: "Can I track feedback trends over multiple years?",
    answer:
      "Absolutely. Compare year-over-year trends, seasonal patterns, and long-term changes to measure cultural transformation and improvement initiatives.",
  },
  {
    category: "Security",
    question: "How do you handle data retention?",
    answer:
      "AnonyMoose provides configurable data retention policies to comply with regulations and your organization's data governance requirements.",
  },
  {
    category: "Platform",
    question: "Can multiple teams use AnonyMoose simultaneously?",
    answer:
      "Yes. The platform supports unlimited teams and channels, allowing your entire organization to share feedback and insights at scale.",
  },
  {
    category: "Getting Started",
    question: "What is the pricing model?",
    answer:
      "We offer flexible pricing based on team size and usage. Contact our sales team for a custom quote tailored to your organization.",
  },
  {
    category: "Platform",
    question: "Can I export feedback data?",
    answer:
      "Yes. Export anonymized feedback and analytics data in multiple formats for further analysis, reporting, or archiving purposes.",
  },
];

const categories = [
  "All",
  "Platform",
  "Analytics",
  "Security",
  "Getting Started",
];

function AccordionItem({ item, open, onToggle, compact = false }) {
  return (
    <motion.article
      layout
      initial="rest"
      whileHover="hover"
      className={`group relative overflow-hidden rounded-[18px] border transition-colors ${open ? "border-brand/55 bg-black/55" : "border-white/[0.07] bg-black/35"}`}
    >
      <motion.span
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        animate={open ? { scaleX: 1 } : undefined}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 origin-left bg-brand/[0.055]"
      />
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`relative z-10 flex w-full cursor-pointer items-center justify-between gap-5 text-left font-semibold ${compact ? "px-5 py-4 text-sm" : "px-6 py-5 sm:px-7 sm:py-6"}`}
      >
        <span>{item.question}</span>
        <motion.span
          animate={{
            rotate: open ? 180 : 0,
            color: open ? "var(--brand)" : "rgba(255,255,255,.4)",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="shrink-0"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.24 },
            }}
            className="relative z-10 overflow-hidden"
          >
            <p
              className={`border-t border-white/[0.06] leading-7 text-white/50 ${compact ? "px-5 pb-5 pt-3 text-sm" : "px-6 pb-6 pt-4 text-sm sm:px-7 sm:text-base"}`}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.span
        animate={open ? { y: ["-120%", "450%"] } : { opacity: 0 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-0 top-0 h-1/4 w-px bg-gradient-to-b from-transparent via-brand to-transparent"
      />
      <motion.span
        animate={open ? { x: ["-120%", "450%"] } : { opacity: 0 }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "linear",
          delay: 0.6,
        }}
        className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
      />
    </motion.article>
  );
}

function AllFAQsContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(0);
  const filtered = faqs.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      `${item.question} ${item.answer}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );

  return (
    <div>
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
          size={19}
        />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search questions..."
          aria-label="Search FAQs"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] py-4 pl-12 pr-5 outline-none transition focus:border-brand"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setCategory(item);
              setOpenIndex(0);
            }}
            className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition ${category === item ? "border-brand bg-brand text-white" : "border-white/10 text-white/50 hover:border-white/25"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <motion.p layout className="mt-5 text-xs text-white/35">
        {filtered.length} {filtered.length === 1 ? "answer" : "answers"} found
      </motion.p>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {filtered.map((item, index) => (
          <AccordionItem
            key={item.question}
            item={item}
            compact
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-dashed border-white/10 py-12 text-center text-white/40"
        >
          No matching questions found.
        </motion.div>
      )}
    </div>
  );
}

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);
  const { openDrawer } = useDrawer();
  const exploreAll = () =>
    openDrawer({
      id: "all-faqs",
      eyebrow: "Help center",
      title: "Explore all frequently asked questions",
      description:
        "Search answers or filter by topic to quickly find what you need.",
      content: <AllFAQsContent />,
    });

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-[#100e0f] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-[52px]"
    >
      <div className="pointer-events-none absolute -bottom-56 right-[18%] size-[540px] rounded-full bg-brand/10 blur-[145px]" />
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-[.98fr_1.02fr] lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -25 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
            }}
            className="mb-6 flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/65"
          >
            <motion.span
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} className="text-brand" />
            </motion.span>
            FAQs
          </motion.div>
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
            className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[60px]"
          >
            Get Every Single<span className="block">Answer From Here</span>
          </motion.h2>
          <div className="mt-10 space-y-4">
            {faqs.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, x: -30, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.16 + index * 0.1, duration: 0.6 }}
                animate={{ y: [0, index % 2 ? 3 : -3, 0] }}
              >
                <AccordionItem
                  item={item}
                  open={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                />
              </motion.div>
            ))}
          </div>
          <motion.button
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            whileHover={{
              y: -5,
              scale: 1.025,
              boxShadow: "0 18px 45px rgba(var(--brand-rgb),.24)",
            }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={exploreAll}
            className="mt-8 flex cursor-pointer items-center justify-center gap-3 rounded-full bg-brand px-7 py-4 font-semibold w-full"
          >
            Explore All FAQs <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 55,
            scale: 0.92,
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto hidden w-full max-w-[700px] [perspective:1200px] lg:block"
        >
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [0.88, 1.08, 0.88],
              opacity: [0.14, 0.28, 0.14],
              rotate: [0, 180, 360],
            }}
            transition={{
              scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 24, repeat: Infinity, ease: "linear" },
            }}
            className="absolute -inset-10 rounded-[38%] bg-[conic-gradient(from_90deg,transparent,rgba(var(--brand-rgb),.32),transparent,rgba(var(--brand-rgb),.12),transparent)] blur-[55px]"
          />
          <motion.div
            animate={{
              x: [0, 5, -3, 0],
              y: [0, -10, 2, 0],
              rotate: [0, 0.4, -0.3, 0],
            }}
            transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{
                scale: 1.025,
                rotateX: -1.5,
                rotateY: 2.5,
                boxShadow: "0 42px 120px rgba(var(--brand-rgb),.20)",
              }}
              transition={{ type: "spring", stiffness: 145, damping: 20 }}
              className="relative overflow-hidden rounded-bl-[48px] rounded-br-[120px] rounded-tl-[100px] rounded-tr-[26px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,.35)] [transform-style:preserve-3d]"
            >
              <motion.img
                src={faqImage}
                alt="Employee reviewing workplace insights"
                whileHover={{ scale: 1.055 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.04]" />
              <motion.span
                aria-hidden="true"
                animate={{ x: ["-140%", "170%"] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  repeatDelay: 1.1,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.10] to-transparent mix-blend-overlay"
              />
              <motion.span
                animate={{ x: ["-120%", "430%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
              />
              <motion.span
                animate={{ y: ["-120%", "430%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.75,
                }}
                className="absolute right-0 top-0 h-1/4 w-px bg-gradient-to-b from-transparent via-brand to-transparent"
              />
              <motion.span
                animate={{ x: ["120%", "-430%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5,
                }}
                className="absolute bottom-0 right-0 h-px w-1/4 bg-gradient-to-l from-transparent via-brand to-transparent"
              />
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06 }}
            className="absolute -bottom-5 left-8 rounded-2xl border border-white/15 bg-black/55 px-5 py-4 shadow-xl backdrop-blur-xl"
          >
            <b className="block text-2xl">24/7</b>
            <span className="text-xs text-white/50">
              Answers when you need them
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQs;
