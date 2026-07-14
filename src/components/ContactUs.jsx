import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BellRing, Check, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { useDrawer } from "@/components/Drawer";

const topics = [
  "Employee Voice",
  "Workplace Culture",
  "People Analytics",
  "Product Updates",
];

function SubscriptionPreferences({ email }) {
  const [selected, setSelected] = useState([
    "Employee Voice",
    "Product Updates",
  ]);
  const [saved, setSaved] = useState(false);

  const toggleTopic = (topic) => {
    setSaved(false);
    setSelected((current) =>
      current.includes(topic)
        ? current.filter((item) => item !== topic)
        : [...current, topic],
    );
  };

  return (
    <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-brand/25 bg-brand/10 p-6"
      >
        <motion.span
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity }}
          className="grid size-12 place-items-center rounded-2xl bg-brand"
        >
          <BellRing size={23} />
        </motion.span>
        <h3 className="mt-5 text-xl font-semibold">You’re subscribed</h3>
        <p className="mt-2 break-all text-sm text-white/55">{email}</p>
        <p className="mt-5 text-xs leading-5 text-white/40">
          Choose the updates that are most useful to you. Preferences can be
          changed at any time.
        </p>
      </motion.div>
      <div>
        <p className="mb-3 text-sm font-semibold">
          What would you like to receive?
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {topics.map((topic, index) => {
            const active = selected.includes(topic);
            return (
              <motion.button
                key={topic}
                type="button"
                onClick={() => toggleTopic(topic)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className={`flex cursor-pointer items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm transition ${active ? "border-brand bg-brand/10 text-white" : "border-white/10 bg-white/[0.04] text-white/50 hover:border-white/25"}`}
              >
                {topic}
                <motion.span
                  animate={{ scale: active ? 1 : 0, rotate: active ? 0 : -90 }}
                  className="grid size-6 place-items-center rounded-full bg-brand"
                >
                  <Check size={14} />
                </motion.span>
              </motion.button>
            );
          })}
        </div>
        <motion.button
          type="button"
          onClick={() => setSaved(true)}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-5 flex cursor-pointer items-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold"
        >
          {saved ? (
            <>
              <CheckCircle2 size={18} /> Preferences saved
            </>
          ) : (
            "Save preferences"
          )}
        </motion.button>
      </div>
    </div>
  );
}

function ContactUs() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { openDrawer } = useDrawer();

  const subscribe = (event) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Please enter a valid work email address.");
      return;
    }
    setError("");
    openDrawer({
      id: "subscription-preferences",
      eyebrow: "Subscription confirmed",
      title: "Welcome to the AnonyMoose community",
      description:
        "Your first workplace insight is on its way. Personalize what reaches your inbox below.",
      content: <SubscriptionPreferences email={email} />,
    });
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#100e0f] px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-12 lg:py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 45, scale: 0.97, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="group relative mx-auto max-w-[1600px] overflow-hidden rounded-[38px] border border-white/10 bg-[#090909] px-7 py-14 shadow-[0_35px_100px_rgba(0,0,0,.32)] sm:px-12 sm:py-16 lg:px-20 lg:py-20"
      >
        <motion.div
          aria-hidden="true"
          animate={{ x: ["-15%", "18%", "-15%"], scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-32 -top-40 h-[520px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(var(--brand-rgb),.48),rgba(var(--brand-rgb),.12)_40%,transparent_70%)] blur-[50px]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:42px_42px]"
        />
        <motion.span
          animate={{ x: ["-110%", "430%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
        />
        <motion.span
          animate={{ y: ["-110%", "430%"] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.9,
          }}
          className="pointer-events-none absolute right-0 top-0 h-1/4 w-px bg-gradient-to-b from-transparent via-brand to-transparent"
        />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-wider text-white/55"
            >
              <Sparkles size={14} className="text-brand" />
              Stay connected
            </motion.div>
            <h2 className="text-xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[58px]">
              Start Building a More
              <span className="block">Transparent Workplace Today</span>
            </h2>
          </div>

          <div>
            <form
              onSubmit={subscribe}
              noValidate
              className="flex flex-col gap-4 sm:flex-row"
            >
              <motion.label
                animate={error ? { x: [-7, 7, -5, 5, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
                className="relative flex-1"
              >
                <Mail
                  size={19}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-white/35"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  placeholder="Your work email address"
                  aria-label="Work email address"
                  className={`h-16 w-full rounded-2xl border bg-white/[0.08] pl-13 pr-5 outline-none transition focus:bg-white/[0.11] ${error ? "border-brand" : "border-white/15 focus:border-brand"}`}
                />
              </motion.label>
              <motion.button
                type="submit"
                whileHover={{
                  y: -4,
                  scale: 1.025,
                  boxShadow: "0 18px 45px rgba(var(--brand-rgb),.28)",
                }}
                whileTap={{ scale: 0.97 }}
                className="h-16 cursor-pointer rounded-2xl bg-brand px-9 text-lg font-semibold transition hover:bg-brand/90"
              >
                Subscribe
              </motion.button>
            </form>
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 text-sm text-brand"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
            <p className="mt-4 max-w-[700px] text-sm leading-6 text-white/40">
              By subscribing, you agree to our Privacy Policy. No spam — just
              valuable workplace insights, product updates, and opportunities.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
