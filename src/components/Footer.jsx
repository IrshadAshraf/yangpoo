import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/navbar/Frame 2147231503.png";
import codesinc from "@/assets/footer/image 13 (2).png";
import { useDrawer } from "@/components/Drawer";

const productLinks = [
  { label: "Feedback", to: "#features" },
  { label: "Surveys", to: "#features" },
  { label: "Reporting", to: "#platform" },
  { label: "Analytics", to: "#workforce" },
];

const panels = {
  "About Us": {
    eyebrow: "Our purpose",
    title: "We help every employee be heard",
    description:
      "AnonyMoose gives organizations a safer way to listen, understand, and act on workplace feedback.",
    points: [
      "Human-centered by design",
      "Built around employee trust",
      "Insights leaders can act on",
    ],
  },
  Security: {
    eyebrow: "Security",
    title: "Privacy is built into the platform",
    description:
      "Protection, access control, and anonymity are foundational parts of every AnonyMoose workflow.",
    points: [
      "Role-based access controls",
      "Privacy-first data handling",
      "Secure anonymous communication",
    ],
  },
  Careers: {
    eyebrow: "Careers",
    title: "Build more trustworthy workplaces with us",
    description:
      "We’re always interested in thoughtful people who care about privacy, workplace culture, and meaningful technology.",
    points: [
      "Purpose-led work",
      "Flexible collaboration",
      "A culture of honest feedback",
    ],
  },
  Privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    description:
      "We collect only the information needed to provide and improve our services, applying appropriate safeguards and transparent controls.",
    points: [
      "Clear data-use purposes",
      "Controlled access and retention",
      "Privacy rights and requests",
    ],
  },
  Terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    description:
      "These terms explain the responsibilities, acceptable use, and service conditions that support a safe and dependable platform.",
    points: [
      "Responsible platform use",
      "Transparent service conditions",
      "Clear account responsibilities",
    ],
  },
  GDPR: {
    eyebrow: "Compliance",
    title: "GDPR commitment",
    description:
      "AnonyMoose is designed to support responsible personal-data processing and the privacy rights of people across the European Economic Area.",
    points: [
      "Data minimization",
      "Configurable retention",
      "Support for data-subject rights",
    ],
  },
  Cookies: {
    eyebrow: "Preferences",
    title: "Cookie settings",
    description:
      "Choose how optional cookies are used. Essential cookies remain enabled because they keep the experience secure and functional.",
    points: [
      "Essential functionality",
      "Optional product analytics",
      "Change preferences anytime",
    ],
  },
};

function FooterPanel({ panel }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {panel.points.map((point, index) => (
        <motion.div
          key={point}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
        >
          <CheckCircle2 className="text-brand" />
          <p className="mt-4 font-medium">{point}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Footer() {
  const { openDrawer } = useDrawer();
  const openPanel = (label) => {
    const panel = panels[label];
    openDrawer({
      id: `footer-${label}`,
      eyebrow: panel.eyebrow,
      title: panel.title,
      description: panel.description,
      content: <FooterPanel panel={panel} />,
    });
  };

  const companyLinks = ["About Us", "Security", "Careers"];
  const legalLinks = ["Privacy", "Terms", "GDPR", "Cookies"];
  const socialLinks = [
    { label: "Twitter", icon: FaXTwitter },
    { label: "LinkedIn", icon: FaLinkedinIn },
    { label: "Instagram", icon: FaInstagram },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.05] bg-[#121011] px-6 pb-4 pt-8 text-white sm:px-10 lg:px-12 lg:pt-10">
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-15%", "18%", "-15%"], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 -top-72 h-[520px] w-[780px] rounded-full bg-brand/20 blur-[140px]"
      />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.8fr_.7fr_.7fr_.7fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -35, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-fit"
            >
              <HashLink smooth to="#hero">
                <img src={logo} alt="AnonyMoose" className="w-[230px]" />
              </HashLink>
            </motion.div>
            <p className="mt-7 max-w-[470px] text-base leading-7 text-white/45 sm:text-lg">
              Helping organizations listen better, act faster, and build
              stronger workplace cultures through secure anonymous
              communication.
            </p>
            <motion.div
              whileHover={{ x: 4 }}
              className="mt-6 flex w-fit items-center gap-2 text-sm text-white/35"
            >
              <ShieldCheck size={17} className="text-brand" />
              Privacy-first employee voice
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Product
            </h3>
            <div className="mt-6 space-y-4">
              {productLinks.map((link) => (
                <HashLink
                  key={link.label}
                  smooth
                  to={link.to}
                  className="group flex w-fit items-center gap-2 text-white/45 transition hover:text-white"
                >
                  <span className="h-px w-0 bg-brand transition-all group-hover:w-4" />
                  {link.label}
                </HashLink>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <div className="mt-6 space-y-4">
              {companyLinks.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => openPanel(label)}
                  className="group flex cursor-pointer items-center gap-2 text-white/45 transition hover:text-white"
                >
                  <span className="h-px w-0 bg-brand transition-all group-hover:w-4" />
                  {label}
                </button>
              ))}
              <HashLink
                smooth
                to="#contact"
                className="group flex w-fit items-center gap-2 text-white/45 transition hover:text-white"
              >
                <span className="h-px w-0 bg-brand transition-all group-hover:w-4" />
                Contact
              </HashLink>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.65 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <div className="mt-6 space-y-4">
              {legalLinks.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => openPanel(label)}
                  className="group flex cursor-pointer items-center gap-2 text-white/45 transition hover:text-white"
                >
                  <span className="h-px w-0 bg-brand transition-all group-hover:w-4" />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20 h-px origin-center overflow-hidden bg-white/10"
        >
          <motion.span
            animate={{ x: ["-120%", "420%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
          />
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-8 pt-8 text-sm text-white/35 lg:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Anonymoose Inc. All rights reserved.
          </motion.p>
          <motion.a
            href="https://www.codes-inc.com/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.025 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-transparent p-2 transition hover:border-white/10"
          >
            <img
              src={codesinc}
              alt="Designed and hosted by Codesinc"
              className="w-[235px] opacity-85 transition group-hover:opacity-100"
            />
            <ArrowUpRight
              size={15}
              className="absolute right-1 top-1 text-brand opacity-0 transition group-hover:opacity-100"
            />
          </motion.a>
          <div className="flex gap-3">
            {socialLinks.map(({ label, icon: Icon }, index) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -5,
                  rotate: index === 1 ? 6 : -6,
                  color: "var(--brand)",
                  borderColor: "rgba(var(--brand-rgb),.45)",
                }}
                className="grid size-10 place-items-center rounded-full border border-white/10 text-white/45"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <motion.span
        animate={{ x: ["-100%", "500%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-0 top-0 h-px w-1/5 bg-gradient-to-r from-transparent via-brand to-transparent"
      />
    </footer>
  );
}

export default Footer;
