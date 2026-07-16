import { motion } from "framer-motion";
import taskbes from "@/assets/partners/Partner Logo.png";
import markbes from "@/assets/partners/Partner Logo (1).png";
import xoros from "@/assets/partners/Partner Logo (2).png";
import insurbes from "@/assets/partners/Partner Logo (3).png";
import fintech from "@/assets/partners/Partner Logo (4).png";

const partners = [
  { name: "Taskbes", logo: taskbes },
  { name: "Markbes", logo: markbes },
  { name: "Xoros", logo: xoros },
  { name: "Insurbes", logo: insurbes },
  { name: "Finteck", logo: fintech },
];

function LogoSet({ hidden = false }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-20 sm:pr-20 lg:gap-28 lg:pr-28"
      aria-hidden={hidden}
    >
      {partners.map((partner) => (
        <motion.div
          key={partner.name}
          className="group flex h-16 w-[135px] shrink-0 items-center justify-center sm:h-20 sm:w-[165px] lg:w-[190px]"
          whileHover={{ scale: 1.1, y: -4 }}
          transition={{ type: "spring", stiffness: 360, damping: 22 }}
        >
          <img
            src={partner.logo}
            alt={hidden ? "" : partner.name}
            className="h-11 max-w-full object-contain transition-[filter] duration-300 group-hover:drop-shadow-[0_8px_14px_rgba(12,82,159,0.18)] sm:h-10"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0C529F]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0C529F]/20 to-transparent" />

      <motion.div
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 11,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          <LogoSet />
          <LogoSet hidden />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-24 w-20 -translate-y-1/2 bg-[radial-gradient(ellipse_at_left,rgba(12,82,159,0.08),transparent_70%)] sm:w-36"
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-24 w-20 -translate-y-1/2 bg-[radial-gradient(ellipse_at_right,rgba(12,82,159,0.08),transparent_70%)] sm:w-36"
        animate={{ opacity: [0.8, 0.35, 0.8] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
