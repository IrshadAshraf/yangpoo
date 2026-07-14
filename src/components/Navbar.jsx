import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import {
  AlertTriangle,
  BarChart3,
  Building2,
  ChevronDown,
  LayoutDashboard,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import logo from "@/assets/navbar/anonymoose-logo.png";
import { useDrawer } from "@/components/Drawer";

const links = [
  { label: "Platform", to: "/#platform", dropdown: true },
  { label: "FAQs", to: "/#faqs" },
  { label: "Latest News", to: "/#latest-news" },
  { label: "Contact Us", to: "/#contact" },
];

const solutionLinks = [
  {
    label: "Employee Concerns",
    description: "Understand the challenges employees face",
    to: "/#employee-concern",
    icon: AlertTriangle,
  },
  {
    label: "Platform Overview",
    description: "Explore the modern employee voice platform",
    to: "/#platform",
    icon: LayoutDashboard,
  },
  {
    label: "Powerful Features",
    description: "See the tools available to modern teams",
    to: "/#features",
    icon: Sparkles,
  },
  {
    label: "Workforce Analytics",
    description: "Turn employee signals into live insights",
    to: "/#workforce",
    icon: BarChart3,
  },
  {
    label: "Trusted Workplace",
    description: "See the outcomes of a culture people trust",
    to: "/#workplace",
    icon: Building2,
  },
];

const scrollWithOffset = (element) => {
  const y = element.getBoundingClientRect().top + window.scrollY - 120;
  window.scrollTo({ top: y, behavior: "smooth" });
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const { openDrawer } = useDrawer();

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let frame;

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const currentY = Math.max(window.scrollY, 0);
        const difference = currentY - lastScrollY.current;

        setScrolled(currentY > 24);

        if (open || solutionsOpen || currentY < 90) {
          setVisible(true);
        } else if (Math.abs(difference) > 5) {
          setVisible(difference < 0);
          if (difference > 0) setSolutionsOpen(false);
        }

        lastScrollY.current = currentY;
        frame = undefined;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [open, solutionsOpen]);

  useEffect(() => {
    if (open || solutionsOpen) setVisible(true);
  }, [open, solutionsOpen]);

  const openStartFree = () =>
    openDrawer({
      id: "start-free",
      eyebrow: "Get started",
      title: "Start building a safer workplace",
      description:
        "Tell us where to reach you and our workplace specialists will help set up your anonymous listening channel.",
      content: (
        <form
          className="grid gap-4 sm:grid-cols-2"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            aria-label="Full name"
            placeholder="Full name"
            className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none transition focus:border-brand"
          />
          <input
            aria-label="Work email"
            type="email"
            placeholder="Work email"
            className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none transition focus:border-brand"
          />
          <input
            aria-label="Company name"
            placeholder="Company name"
            className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none transition focus:border-brand"
          />
          <button
            type="submit"
            className="rounded-2xl bg-brand px-6 py-4 font-semibold transition hover:bg-brand/85 cursor-pointer"
          >
            Start free
          </button>
        </form>
      ),
    });

  return (
    <motion.header
      initial={{ opacity: 0, y: -110 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -125 }}
      transition={{ type: "spring", stiffness: 210, damping: 25, mass: 0.82 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 will-change-transform sm:px-7 sm:pt-6 lg:px-14"
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled
            ? "rgba(24, 21, 22, 0.94)"
            : "rgba(40, 36, 38, 0.85)",
          borderColor: scrolled
            ? "rgba(255, 255, 255, 0.14)"
            : "rgba(255, 255, 255, 0.20)",
          boxShadow: scrolled
            ? "0 18px 55px rgba(0,0,0,.38), 0 0 0 1px rgba(var(--brand-rgb),.05)"
            : "0 18px 45px rgba(0,0,0,.20)",
          scale: scrolled ? 0.992 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between rounded-full border px-6 backdrop-blur-2xl sm:px-10"
      >
        <HashLink
          smooth
          scroll={scrollWithOffset}
          to="/#hero"
          aria-label="AnonyMoose home"
        >
          <img
            src={logo}
            alt="AnonyMoose"
            className="h-auto w-[185px] sm:w-[215px] 2xl:w-[245px]"
          />
        </HashLink>

        <div className="hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-9">
          {links.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <HashLink
                  smooth
                  scroll={scrollWithOffset}
                  to={link.to}
                  onClick={() => setSolutionsOpen(false)}
                  className="group flex items-center gap-0.5 text-[11px] font-medium uppercase text-white/90 transition hover:text-brand xl:text-xs 2xl:text-[13px]"
                >
                  {link.label}
                  <motion.span animate={{ rotate: solutionsOpen ? 180 : 0 }}>
                    <ChevronDown size={14} />
                  </motion.span>
                </HashLink>
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 14, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full mt-6 grid w-[520px] -translate-x-1/2 grid-cols-2 gap-2 rounded-3xl border border-white/15 bg-[#211d1f]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl"
                    >
                      <span className="absolute -top-6 left-0 h-6 w-full" />
                      {solutionLinks.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.035 }}
                          >
                            <HashLink
                              smooth
                              scroll={scrollWithOffset}
                              to={item.to}
                              className="group/item flex gap-3 rounded-2xl p-4 transition hover:bg-white/[0.07]"
                            >
                              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand transition group-hover/item:scale-110 group-hover/item:bg-brand group-hover/item:text-white">
                                <Icon size={19} />
                              </span>
                              <span>
                                <b className="block text-sm font-semibold text-white">
                                  {item.label}
                                </b>
                                <small className="mt-1 block normal-case leading-4 text-white/55">
                                  {item.description}
                                </small>
                              </span>
                            </HashLink>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <HashLink
                key={link.label}
                smooth
                scroll={scrollWithOffset}
                to={link.to}
                className="group flex items-center gap-0.5 text-[11px] font-medium uppercase text-white/90 transition hover:text-brand xl:text-xs 2xl:text-[13px]"
              >
                {link.label}
              </HashLink>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={openStartFree}
          className="hidden rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand/85 sm:block xl:px-7 cursor-pointer"
        >
          Start Free
        </button>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full bg-white/10 text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="mx-auto mt-3 max-w-[1600px] overflow-hidden rounded-3xl border border-white/15 bg-[#211d1f]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setSolutionsOpen((value) => !value)}
                    className="flex w-full items-center justify-between rounded-2xl px-5 py-3.5 text-sm font-medium uppercase text-white/85 hover:bg-white/5"
                  >
                    {link.label}
                    <motion.span animate={{ rotate: solutionsOpen ? 180 : 0 }}>
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-3"
                      >
                        {solutionLinks.map((item) => {
                          const Icon = item.icon;
                          return (
                            <HashLink
                              key={item.label}
                              smooth
                              scroll={scrollWithOffset}
                              to={item.to}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 rounded-2xl px-5 py-3 text-sm text-white/65 hover:bg-white/5 hover:text-brand"
                            >
                              <Icon size={17} />
                              {item.label}
                            </HashLink>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <HashLink
                  key={link.label}
                  smooth
                  scroll={scrollWithOffset}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-5 py-3.5 text-sm font-medium uppercase text-white/85 hover:bg-white/5 hover:text-brand"
                >
                  {link.label}
                </HashLink>
              ),
            )}
            <motion.button
              type="button"
              onClick={() => {
                setOpen(false);
                setSolutionsOpen(false);
                openStartFree();
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.35 }}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 flex w-full cursor-pointer items-center justify-center rounded-2xl bg-brand px-6 py-4 font-semibold text-white shadow-lg shadow-brand/20 sm:hidden"
            >
              Start Free
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
