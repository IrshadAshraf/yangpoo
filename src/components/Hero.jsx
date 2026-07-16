import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Compass, MessageCircleMore, Plus, Sparkles } from "lucide-react";
import avatarOne from "@/assets/hero/2b010f94a8183bea663e3eb2651a732ead1d2f33.jpg";
import avatarTwo from "@/assets/hero/4a870289113b24a2470dad85fbecfe382667b036.jpg";
import avatarThree from "@/assets/hero/8a5512a12a2c8970b2ae72a230ce137b0bb6ae20.jpg";
import avatarFour from "@/assets/hero/c84f375c4c556fd96820efe2579bd73c95acafef.jpg";
import heroBackground from "@/assets/hero/8af6802efbfff90b980714f6ef395f7575829c33.png";
import rocket from "@/assets/hero/a1eb89db62dbfdb64cb3dd0f5fd399f605d4023b.gif";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectDialog from "@/components/ui/ProjectDialog";

const avatars = [avatarOne, avatarTwo, avatarThree, avatarFour];
const floatingBoxes = [
  {
    className: "left-[7%] top-[12%] size-[74px] bg-[#0C529F]/12",
    x: [0, 170, 55, 290, 115, 0],
    y: [0, 85, 230, 135, 315, 0],
  },
  {
    className: "right-[10%] top-[18%] size-[86px] bg-[#3697eb]/14",
    x: [0, -135, -310, -80, -230, 0],
    y: [0, 180, 65, 290, 145, 0],
  },
  {
    className: "left-[46%] top-[48%] size-[80px] bg-[#0C529F]/10",
    x: [0, 210, -125, 145, -260, 0],
    y: [0, -155, -75, 90, 35, 0],
  },
  {
    className: "right-[27%] top-[8%] size-[68px] bg-[#70baff]/16",
    x: [0, -190, 95, -75, 175, 0],
    y: [0, 110, 255, 175, 330, 0],
  },
];
const smoothScroll = (element) =>
  element?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Hero() {
  return (
    <div className="relative min-h-[680px] overflow-hidden bg-[#f3f9ff] pt-40 lg:min-h-[563px] lg:pt-[225px]">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[5%] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        animate={{
          x: [0, 28, -18, 22, 0],
          y: [0, -20, 24, 10, 0],
          scale: [1.06, 1.1, 1.07, 1.11, 1.06],
        }}
        transition={{
          duration: 18,
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[12%] top-[18%] h-[360px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(12,82,159,0.24)_0%,rgba(55,145,255,0.12)_45%,transparent_72%)] blur-2xl"
        animate={{
          x: [0, 110, 15, 0],
          y: [0, -35, 40, 0],
          scale: [1, 1.16, 0.96, 1],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[8%] top-[30%] h-[330px] w-[470px] rounded-full bg-[radial-gradient(circle,rgba(26,128,238,0.22)_0%,rgba(108,190,255,0.12)_46%,transparent_72%)] blur-2xl"
        animate={{
          x: [0, -90, -20, 0],
          y: [0, 55, -30, 0],
          scale: [1, 0.92, 1.14, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-35%] left-[35%] h-[380px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(67,162,255,0.18)_0%,transparent_70%)] blur-3xl"
        animate={{ x: [-50, 80, -50], y: [0, -45, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      {floatingBoxes.map((box, index) => (
        <motion.span
          key={box.className}
          aria-hidden="true"
          className={`pointer-events-none absolute rounded-[18px] border border-white/60 shadow-[0_10px_30px_rgba(12,82,159,0.08)] backdrop-blur-[2px] ${box.className}`}
          animate={{ x: box.x, y: box.y, rotate: [0, 4, -3, 5, -4, 0] }}
          transition={{
            duration: 7.5,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.22,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-[1600px] gap-10 px-5 pb-16 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-16 lg:px-8 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="relative mb-5 inline-flex overflow-hidden rounded-full p-[2px] shadow-[0_6px_24px_rgba(12,82,159,0.2)]"
            animate={{
              boxShadow: [
                "0 6px 22px rgba(12,82,159,0.16)",
                "0 8px 32px rgba(12,82,159,0.34)",
                "0 6px 22px rgba(12,82,159,0.16)",
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              aria-hidden="true"
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,#72c5ff_70deg,#0C529F_145deg,transparent_210deg,#39a0ff_290deg,transparent_360deg)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative inline-flex items-center rounded-full bg-white/95 px-2 py-1.5 pr-4 backdrop-blur-md">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt=""
                    className="motion-avatar-smooth size-7 rounded-full border-2 border-white object-cover hover:-translate-y-1 hover:scale-110"
                    style={{ zIndex: avatars.length - index }}
                  />
                ))}
                <span className="relative z-10 grid size-7 place-items-center rounded-full border-2 border-white bg-[#0C529F] text-white">
                  <Plus size={13} strokeWidth={2.5} />
                </span>
              </div>
              <span className="ml-2 text-[13px] font-medium text-slate-900 sm:text-[14px]">
                People Joined Worldwide
              </span>
            </div>
          </motion.div>

          <h1 className="max-w-[760px] text-[30px] font-bold leading-[1.4] tracking-[-0.03em] text-[#111722] md:text-[35px] lg:text-[50px]">
            Transform Your Career
            <br className="hidden sm:block" /> with World-Class
            <br className="hidden sm:block" /> Online Education
            <motion.img
              src={rocket}
              alt=""
              className="ml-3 inline-block size-[62px] object-contain align-[-8px] sm:size-[72px] rotate-45"
              animate={{ y: [0, -7, 0], rotate: [0, 3, 0] }}
              transition={{
                duration: 2.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
          className="lg:pt-0"
        >
          <p className="max-w-[470px] text-[18px] leading-[1.75] text-slate-700 sm:text-[20px]">
            Discover industry-leading degree programs, executive education, and
            professional certifications from top universities.
          </p>
          <div className="mt-8 flex flex-nowrap gap-3 sm:gap-4">
            <ProjectDialog
              eyebrow="Program explorer"
              title="Choose a program built around your ambition"
              description="Explore flexible learning pathways from recognized universities, designed for career starters, working professionals, and experienced leaders."
              trigger={({ openDialog }) => (
                <AnimatedButton
                  type="button"
                  onClick={openDialog}
                  className="min-w-0 whitespace-nowrap rounded-full bg-[#0C529F] px-4 py-4 text-center text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#094783] hover:shadow-lg sm:px-7 sm:text-[16px]"
                >
                  Explore Programs
                </AnimatedButton>
              )}
            >
              {({ closeDialog }) => (
                <div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      ["Online degrees", "Earn a recognized qualification remotely."],
                      ["Executive learning", "Build high-impact leadership capabilities."],
                      ["Certifications", "Develop focused, industry-relevant expertise."],
                    ].map(([title, copy]) => (
                      <div key={title} className="rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-sm">
                        <Compass className="size-5 text-[#0C529F]" />
                        <h3 className="mt-3 text-sm font-bold text-[#151d31]">{title}</h3>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{copy}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl border-l-4 border-[#0C529F] bg-[#0C529F]/5 p-4 text-sm leading-6 text-slate-700">
                    Browse featured pathways first, then compare individual course details, lesson counts, learner communities, and tuition information.
                  </p>
                  <AnimatedButton smooth to="/#featured-programs" scroll={smoothScroll} onClick={closeDialog} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0C529F] px-6 py-3 text-sm font-semibold text-white">
                    View featured programs <ArrowRight size={17} />
                  </AnimatedButton>
                </div>
              )}
            </ProjectDialog>
            <ProjectDialog
              eyebrow="Talk to Yangpoo"
              title="Get guidance for your education journey"
              description="Connect with our team for personalized help choosing a program, understanding admission requirements, or planning your next career move."
              trigger={({ openDialog }) => (
                <AnimatedButton
                  type="button"
                  onClick={openDialog}
                  className="min-w-0 whitespace-nowrap rounded-full border border-slate-400 bg-white/75 px-4 py-4 text-center text-[14px] font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-[#0C529F] hover:text-[#0C529F] sm:px-10 sm:text-[16px]"
                >
                  Get In Touch
                </AnimatedButton>
              )}
            >
              {({ closeDialog }) => (
                <div>
                  <div className="rounded-2xl border border-sky-100 bg-white/80 p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#0C529F] text-white"><MessageCircleMore size={21} /></span>
                      <div>
                        <h3 className="font-bold text-[#151d31]">A conversation focused on you</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">Share your background, preferred field, study format, and career goals so our advisors can point you in the right direction.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    {["Program recommendations", "Admissions guidance", "Fee and schedule clarity", "Application support"].map((item) => (
                      <p key={item} className="flex items-center gap-2 rounded-xl bg-[#0C529F]/5 px-4 py-3"><CheckCircle2 className="size-4 shrink-0 text-[#0C529F]" /> {item}</p>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-500"><Sparkles className="size-4 text-[#0C529F]" /> Your consultation is personalized and carries no obligation.</div>
                  <AnimatedButton smooth to="/#contact" scroll={smoothScroll} onClick={closeDialog} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0C529F] px-6 py-3 text-sm font-semibold text-white">
                    Contact our advisors <ArrowRight size={17} />
                  </AnimatedButton>
                </div>
              )}
            </ProjectDialog>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
