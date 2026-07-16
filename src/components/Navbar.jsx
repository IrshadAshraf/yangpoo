import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "@/assets/navbar/image 25.png";

const navigation = [
  { label: "Home", to: "/#hero" },
  { label: "About Us", to: "/#about-us" },
  { label: "Partner Pro", to: "/#partners" },
  { label: "Individual", to: "/#featured-programs" },
  { label: "Corporate", to: "/#courses" },
];

const smoothScroll = (element) =>
  element?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const sections = navigation
      .map((item) => ({
        label: item.label,
        element: document.getElementById(item.to.split("#")[1]),
      }))
      .filter((section) => section.element);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          const section = sections.find(
            ({ element }) => element === visibleSection.target,
          );
          if (section) setActiveLink(section.label);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-7 lg:px-8">
        <HashLink
          smooth
          to="/#hero"
          className="shrink-0"
          aria-label="Yangpoo home"
        >
          <img
            src={logo}
            alt="Yangpoo University Partners"
            className="h-auto w-[120px] sm:w-[145px]"
          />
        </HashLink>

        <div className="hidden items-center rounded-full bg-white p-2 shadow-[0_3px_10px_rgba(15,23,42,0.09)] lg:flex">
          {navigation.map((item) => (
            <HashLink
              key={item.label}
              to={item.to}
              scroll={smoothScroll}
              onClick={() => setActiveLink(item.label)}
              className={`relative rounded-full px-6 py-3 text-[16px] font-medium transition-colors xl:px-7 ${
                activeLink === item.label
                  ? "text-white"
                  : "text-slate-700 hover:text-[#0C529F]"
              }`}
            >
              {activeLink === item.label && (
                <motion.span
                  layoutId="active-nav-link"
                  className="absolute inset-0 rounded-full bg-[#0C529F]"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </HashLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-white p-2 pl-6 shadow-[0_3px_10px_rgba(15,23,42,0.09)] lg:flex">
          <HashLink
            to="/#contact"
            scroll={smoothScroll}
            className="px-1 text-[16px] font-medium text-slate-700 hover:text-[#0C529F]"
          >
            Refer
          </HashLink>
          <HashLink
            to="/#contact"
            scroll={smoothScroll}
            className="group flex items-center gap-4 rounded-full bg-[#0C529F] px-7 py-3 text-[16px] font-medium text-white transition-colors hover:bg-[#094783]"
          >
            Enquire Now
            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />
          </HashLink>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="grid size-12 place-items-center rounded-full bg-white text-slate-900 shadow-md lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-5 rounded-3xl bg-white p-4 shadow-xl lg:hidden"
          >
            {navigation.map((item) => (
              <HashLink
                key={item.label}
                to={item.to}
                scroll={smoothScroll}
                onClick={() => {
                  setActiveLink(item.label);
                  setIsOpen(false);
                }}
                className={`block rounded-2xl px-5 py-3 font-medium transition-colors ${
                  activeLink === item.label
                    ? "bg-[#0C529F] text-white"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#0C529F]"
                }`}
              >
                {item.label}
              </HashLink>
            ))}
            <HashLink
              to="/#contact"
              scroll={smoothScroll}
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-between rounded-2xl bg-[#0C529F] px-5 py-3 font-medium text-white"
            >
              Enquire Now <ArrowRight size={19} />
            </HashLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
