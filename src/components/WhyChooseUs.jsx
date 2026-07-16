import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import { FaBolt, FaMedal, FaShieldAlt, FaUserFriends } from "react-icons/fa";

const benefits = [
  {
    title: "Expert Career Guidance",
    description:
      "Receive one-on-one counseling to help you choose the right academic path.",
    icon: FaMedal,
  },
  {
    title: "Top University Partnerships",
    description: "Access programs from trusted universities.",
    icon: FaBolt,
  },
  {
    title: "Dedicated Student Support",
    description: "Our support team is available to answer questions.",
    icon: FaShieldAlt,
  },
  {
    title: "Flexible Online Learning",
    description: "Learn anytime, anywhere with programs.",
    icon: FaUserFriends,
  },
];

function BenefitCard({ benefit, index }) {
  const Icon = benefit.icon;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 55, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
    >
      <motion.div
        className="h-full"
        animate={{ y: [0, -9, 0] }}
        transition={{
          duration: 4 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      >
        <motion.article
          className="motion-card-smooth group relative h-full overflow-hidden rounded-[25px] p-[2px] shadow-[0_14px_36px_rgba(26,31,62,0.13)]"
          whileHover={{
            y: -10,
            scale: 1.016,
            transition: {
              type: "spring",
              stiffness: 170,
              damping: 22,
              mass: 0.9,
            },
          }}
        >
          <motion.span
            aria-hidden="true"
            className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_6%,#a78bfa_18%,#67d5ff_29%,#0C529F_40%,transparent_54%)]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4.5 + index * 0.45,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="motion-card-fill-dark relative flex min-h-[265px] flex-col rounded-[23px] bg-[#222642] px-5 py-6 text-white sm:min-h-[300px] sm:px-7 sm:py-7 lg:min-h-[320px]">
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-52 rounded-full bg-sky-400/10 blur-3xl"
              animate={{
                x: index % 2 === 0 ? [0, -34, 8, 0] : [0, -18, 28, 0],
                y: [0, 38, 12, 0],
                scale: [0.82, 1.18, 0.95, 0.82],
                opacity: [0.3, 0.75, 0.45, 0.3],
              }}
              transition={{
                duration: 8 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-20 size-56 rounded-full bg-violet-400/10 blur-3xl"
              animate={{
                x: index % 2 === 0 ? [0, 30, 5, 0] : [0, 42, 14, 0],
                y: [0, -24, -46, 0],
                scale: [1, 0.86, 1.12, 1],
                opacity: [0.25, 0.65, 0.4, 0.25],
              }}
              transition={{
                duration: 10 + index * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
            />

            <motion.div
              className="relative grid size-12 place-items-center rounded-xl bg-white text-[#343434] sm:size-14"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(113,190,255,0)",
                  "0 0 24px rgba(113,190,255,.48)",
                  "0 0 0 rgba(113,190,255,0)",
                ],
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 2.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
              whileHover={{
                rotate: [0, -3, 3, 0],
                scale: 1.06,
                transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <Icon className="size-6 sm:size-7" />
            </motion.div>

            <div className="mt-auto pt-10">
              <h3 className="text-[15px] font-semibold leading-[1.35] tracking-[-0.025em] sm:text-lg lg:text-xl">
                {benefit.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-white/90 sm:text-sm sm:leading-6 lg:text-base">
                {benefit.description}
              </p>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(12,82,159,.08),transparent_68%)] blur-3xl"
        animate={{ scale: [0.9, 1.16, 0.9], opacity: [0.45, 0.9, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
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
              className="absolute -inset-[100%] bg-[conic-gradient(transparent,#77d0ff,#0C529F,transparent_45%)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900">
              <Folder size={15} fill="currentColor" /> Benefits
            </span>
          </motion.div>

          <h2 className="mt-5 text-[38px] font-semibold leading-tight tracking-[-0.045em] text-black sm:text-[48px] lg:text-[54px]">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:grid-cols-4 lg:gap-7 xl:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
