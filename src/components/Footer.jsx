import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import codesincLogo from "@/assets/footer/Codesinc.png";
import codesincText from "@/assets/footer/Codesinc_text.png";
import cloudBackground from "@/assets/footer/Footer_BG.png";
import yangpooLogo from "@/assets/footer/yangpoo.png";
import AnimatedButton from "@/components/ui/AnimatedButton";

const pageLinks = [
  { label: "Home", to: "/#hero" },
  { label: "Corporate", to: "/#courses" },
  { label: "About", to: "/#about-us" },
  { label: "Careers", to: "/#contact" },
  { label: "Individual", to: "/#featured-programs" },
  { label: "Contact", to: "/#contact" },
];

const socials = [
  { label: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" },
  { label: "X", icon: FaXTwitter, href: "https://x.com" },
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative bottom-0 -mb-px mt-auto block w-full overflow-hidden bg-[#8bafd4] px-5 pb-0 pt-0 lg:h-[600px] lg:max-h-[600px] lg:px-8">
      <motion.img
        src={cloudBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full object-cover opacity-55"
        animate={{
          x: [-30, 42, -16, -30],
          y: [0, -12, 8, 0],
          scale: [1.05, 1.1, 1.06, 1.05],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={cloudBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-[85%] w-full -scale-x-100 object-cover opacity-25"
        animate={{
          x: [45, -50, 12, 45],
          y: [10, -5, 14, 10],
          scale: [1.08, 1.13, 1.09, 1.08],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-56 w-[80%] -translate-x-1/2 rounded-full bg-white/30 blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto max-w-[1600px] overflow-hidden rounded-3xl p-0.5 shadow-[0_12px_34px_rgba(15,23,42,.1)] lg:h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_5%,#7dd3fc_19%,#0C529F_31%,#a78bfa_40%,transparent_54%)] opacity-60"
          animate={{ rotate: 360 }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-10 -left-1/3 w-1/4 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/90 to-transparent blur-[2px]"
          animate={{ x: ["0%", "650%"] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
          }}
        />

        <div className="motion-card-fill relative rounded-[22px] border border-white/60 bg-white/30 px-6 py-12 backdrop-blur-xl sm:px-10 lg:h-full lg:px-16 lg:py-10">
          <div className="grid gap-12 lg:grid-cols-[1.45fr_.55fr_.75fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.65 }}
            >
              <HashLink
                smooth
                to="/#hero"
                aria-label="Go to Yangpoo home"
                className="inline-flex"
              >
                <motion.img
                  src={yangpooLogo}
                  alt="Yangpoo University Partners"
                  className="h-auto w-[190px] sm:w-[220px] lg:w-[185px]"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </HashLink>
              <p className="mt-5 max-w-[430px] text-sm leading-6 text-slate-900 sm:text-base sm:leading-7">
                Connecting ambitious learners with globally recognized
                universities. Elevate your career with elite online education.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65 }}
            >
              <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">
                Pages
              </h3>
              <ul className="mt-5 space-y-3">
                {pageLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 6 }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 23,
                      mass: 0.8,
                    }}
                  >
                    <HashLink
                      smooth
                      to={link.to}
                      className="group inline-flex items-center gap-2 text-slate-700 transition hover:text-[#0C529F]"
                    >
                      <motion.span className="h-px w-0 bg-[#0C529F] transition-all group-hover:w-4" />
                      {link.label}
                    </HashLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.65 }}
            >
              <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">
                Contact Us
              </h3>
              <div className="mt-5 space-y-4 text-slate-800">
                <motion.a
                  href="tel:+6295550129"
                  className="flex items-center gap-3"
                  whileHover={{
                    x: 5,
                    color: "#0C529F",
                    transition: {
                      type: "spring",
                      stiffness: 160,
                      damping: 23,
                      mass: 0.8,
                    },
                  }}
                >
                  <Phone size={18} /> +629 555-0129
                </motion.a>
                <motion.a
                  href="mailto:demo@example.com"
                  className="flex items-center gap-3"
                  whileHover={{
                    x: 5,
                    color: "#0C529F",
                    transition: {
                      type: "spring",
                      stiffness: 160,
                      damping: 23,
                      mass: 0.8,
                    },
                  }}
                >
                  <Mail size={18} /> demo@example.com
                </motion.a>
                <motion.p
                  className="flex items-start gap-3 leading-7"
                  whileHover={{
                    x: 5,
                    transition: {
                      type: "spring",
                      stiffness: 160,
                      damping: 23,
                      mass: 0.8,
                    },
                  }}
                >
                  <MapPin size={19} className="mt-1 shrink-0" /> 1901
                  Thorndridge Cir. Shiloh,
                  <br /> Hawaii 81063
                </motion.p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-14 lg:mt-8"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            <h3 className="text-lg font-semibold text-slate-950">
              Subscribe to our newsletter
            </h3>
            <form
              onSubmit={handleSubmit}
              className="mt-5 flex max-w-[620px] flex-col gap-3 sm:flex-row lg:mt-3"
            >
              <label className="relative flex-1">
                <span className="sr-only">Email address</span>
                <Mail className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="Enter your email"
                  required
                  className="h-14 w-full rounded-2xl border border-white/80 bg-white/90 pl-12 pr-4 text-slate-900 outline-none transition focus:border-[#0C529F] focus:shadow-[0_0_0_4px_rgba(12,82,159,.12)]"
                />
              </label>
              <AnimatedButton
                type="submit"
                className="group flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#07151b] px-9 font-semibold text-white cursor-pointer"
                whileHover={{
                  y: -2,
                  scale: 1.015,
                  transition: {
                    type: "spring",
                    stiffness: 165,
                    damping: 23,
                    mass: 0.8,
                  },
                }}
                whileTap={{ scale: 0.96 }}
              >
                {subscribed ? (
                  <>
                    <Check size={18} /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe{" "}
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </AnimatedButton>
            </form>
          </motion.div>

          <div className="mt-12 border-t border-white/75 pt-7 lg:mt-8 lg:pt-5">
            <div className="flex flex-col items-center justify-between gap-7 lg:flex-row">
              <motion.a
                href="https://www.codes-inc.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Codesinc website"
                className="flex items-center gap-3"
                whileHover={{
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 155,
                    damping: 23,
                    mass: 0.85,
                  },
                }}
              >
                <img
                  src={codesincLogo}
                  alt=""
                  className="h-11 w-auto object-contain"
                />
                <img
                  src={codesincText}
                  alt="Designed and hosted by Codesinc"
                  className="h-11 w-auto max-w-[190px] object-contain"
                />
              </motion.a>
              <p className="text-center text-sm text-slate-900 sm:text-base">
                © 2026 Yangpoo Education, IN | All Rights Reserved.
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="motion-card-smooth grid size-10 place-items-center rounded-lg bg-white text-slate-900 shadow-sm"
                      whileHover={{
                        y: -4,
                        rotate: index % 2 ? 3 : -3,
                        scale: 1.06,
                        backgroundColor: "#0C529F",
                        color: "#ffffff",
                        transition: {
                          type: "spring",
                          stiffness: 165,
                          damping: 21,
                          mass: 0.8,
                        },
                      }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
