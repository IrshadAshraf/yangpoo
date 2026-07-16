import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Menu,
  MessagesSquare,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "@/assets/navbar/image 25.png";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectDialog from "@/components/ui/ProjectDialog";

const navigation = [
  { label: "Home", to: "/#hero" },
  { label: "About Us", to: "/#about-us" },
  { label: "Partner Pro", to: "/#partners" },
  { label: "Individual", to: "/#featured-programs" },
  { label: "Corporate", to: "/#courses" },
];

const smoothScroll = (element) =>
  element?.scrollIntoView({ behavior: "smooth", block: "start" });

function EnquiryDialog({ mobile = false }) {
  return (
    <ProjectDialog
      eyebrow="Admissions enquiry"
      title="Let’s find the right next step for you"
      description="Tell our education advisors what you want to achieve and they’ll help you compare suitable universities, programs, and learning formats."
      trigger={({ openDialog }) => (
        <AnimatedButton
          type="button"
          onClick={openDialog}
          className={
            mobile
              ? "mt-2 flex w-full items-center justify-between rounded-2xl bg-[#0C529F] px-5 py-3 font-medium text-white"
              : "group flex items-center gap-4 rounded-full bg-[#0C529F] px-7 py-3 text-[16px] font-medium text-white transition-colors hover:bg-[#094783] cursor-pointer"
          }
        >
          Enquire Now
          <ArrowRight
            size={19}
            className="transition-transform group-hover:translate-x-1"
          />
        </AnimatedButton>
      )}
    >
      {({ closeDialog }) => (
        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
              <GraduationCap className="size-6 text-[#0C529F]" />
              <h3 className="mt-3 font-bold text-[#151d31]">
                Program matching
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Compare degrees, certifications, and executive programs around
                your goals.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
              <MessagesSquare className="size-6 text-[#0C529F]" />
              <h3 className="mt-3 font-bold text-[#151d31]">
                Personal guidance
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Get clarity on eligibility, schedules, fees, and the enrollment
                process.
              </p>
            </div>
          </div>
          <div className="mt-5 space-y-2 rounded-2xl bg-[#0C529F]/5 p-5 text-sm text-slate-700">
            {[
              "No-obligation consultation",
              "Guidance matched to your experience",
              "Support through the application journey",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-[#0C529F]" />{" "}
                {item}
              </p>
            ))}
          </div>
          <AnimatedButton
            smooth
            to="/#contact"
            onClick={closeDialog}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0C529F] px-6 py-3 text-sm font-semibold text-white"
          >
            Start your enquiry <ArrowRight size={17} />
          </AnimatedButton>
        </div>
      )}
    </ProjectDialog>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const isClickScrolling = useRef(false);
  const resumeAwarenessTimer = useRef(null);

  const resumeComponentAwareness = (delay = 180) => {
    window.clearTimeout(resumeAwarenessTimer.current);
    resumeAwarenessTimer.current = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, delay);
  };

  const handleNavigationClick = (label) => {
    isClickScrolling.current = true;
    setActiveLink(label);
    resumeComponentAwareness(1400);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) resumeComponentAwareness();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(resumeAwarenessTimer.current);
    };
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => ({
        label: item.label,
        element: document.getElementById(item.to.split("#")[1]),
      }))
      .filter((section) => section.element);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

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
          onClick={() => handleNavigationClick("Home")}
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
              onClick={() => handleNavigationClick(item.label)}
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
          <EnquiryDialog />
        </div>

        <AnimatedButton
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="grid size-12 place-items-center rounded-full bg-white text-slate-900 shadow-md lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </AnimatedButton>
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
                  handleNavigationClick(item.label);
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
            <EnquiryDialog mobile />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
