import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Folder,
  GraduationCap,
  Handshake,
  Target,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectDialog from "@/components/ui/ProjectDialog";
import avatarOne from "@/assets/about us/close-up-portrait-curly-handsome-european-male_176532-8133.avif";
import avatarTwo from "@/assets/about us/photo-1438761681033-6461ffad8d80.avif";
import avatarThree from "@/assets/about us/photo-1654110455429-cf322b40a906.avif";
import avatarFour from "@/assets/about us/pleased-young-brunette-caucasian-girl-looks-camera_141793-103873.avif";
import maleStudent from "@/assets/about us/thumb-1-1.79a0034cf9029854151f.png.png";
import femaleStudent from "@/assets/about us/thumb-1-2.800b1ce43c2f9d188ca8.png.png";

const avatars = [avatarOne, avatarTwo, avatarThree, avatarFour];

function LiveStudents() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    const startedAt = performance.now();
    const duration = 1500;
    let frame;

    const tick = (time) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      setCount(Math.round(2000 * (1 - Math.pow(1 - progress, 4))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  useEffect(() => {
    if (count < 2000) return undefined;
    const interval = window.setInterval(
      () => setCount((current) => current + 1),
      6000,
    );
    return () => window.clearInterval(interval);
  }, [count]);

  return (
    <span ref={ref} className="tabular-nums">
      {count >= 2000
        ? `${(count / 1000).toFixed(1).replace(".0", "")}k+`
        : count.toLocaleString()}
    </span>
  );
}

function PortraitFrame({ className, image, alt, delay, borderClassName }) {
  return (
    <motion.div
      className={`motion-card-smooth absolute ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <motion.div
        aria-hidden="true"
        className={`absolute inset-0 -translate-x-[6%] translate-y-[2%] rounded-[999px] border-2 ${borderClassName}`}
        animate={{
          x: [0, -5, 1, 0],
          y: [0, 5, -2, 0],
          borderColor: [
            "rgba(255,112,112,.45)",
            "rgba(12,82,159,.8)",
            "rgba(111,207,255,.7)",
            "rgba(255,112,112,.45)",
          ],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
      <motion.div
        className="relative h-full overflow-hidden rounded-[999px] p-[2px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, delay }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute -inset-[90%] bg-[conic-gradient(from_0deg,transparent,#83d7ff,#0C529F,transparent_48%)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 7 + delay, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative h-full overflow-hidden rounded-[999px] bg-white p-[2px]">
          <img
            src={image}
            alt={alt}
            className="h-full w-full rounded-[999px] object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 size-96 rounded-full bg-blue-100/45 blur-3xl"
        animate={{ x: [0, 70, 0], y: [0, -35, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="mx-auto w-full max-w-[670px]">
          <div className="relative aspect-[1.05/1] w-full">
            <PortraitFrame
              className="right-[7%] top-0 h-[94%] w-[49%]"
              image={maleStudent}
              alt="Student celebrating his success"
              delay={0}
              borderClassName="border-blue-400/50"
            />
            <PortraitFrame
              className="bottom-[1%] left-[5%] h-[65%] w-[36%]"
              image={femaleStudent}
              alt="Student holding her books"
              delay={0.65}
              borderClassName="border-violet-400/50"
            />

            <motion.div
              className="motion-card-smooth absolute left-[1%] top-[14%] z-20 w-[72%] overflow-hidden rounded-full p-[2px] shadow-[0_12px_35px_rgba(30,50,90,0.14)] sm:left-[6%] sm:w-[54%]"
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -7, 0] }}
              transition={{
                opacity: { duration: 0.6 },
                x: { duration: 0.6 },
                y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute -inset-[120%] bg-[conic-gradient(from_0deg,transparent_5%,#a78bfa_18%,#67d5ff_30%,#0C529F_42%,transparent_56%)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative flex items-center justify-between rounded-full bg-white px-[6%] py-[3%]">
                <div className="shrink-0 leading-tight">
                  <p className="text-[clamp(15px,3.8vw,29px)] font-medium text-violet-500">
                    <LiveStudents />
                  </p>
                  <p className="text-[clamp(14px,3.6vw,27px)] text-[#1d2a52]">
                    Student
                  </p>
                </div>
                <div className="flex shrink-0 -space-x-[7%]">
                  {avatars.map((avatar, index) => (
                    <motion.div
                      key={avatar}
                      className="relative aspect-square w-[clamp(22px,5.2vw,46px)] shrink-0 hover:z-10"
                      animate={{
                        y: [0, -6 - index, 0],
                        rotate: [0, index % 2 ? 3 : -3, 0],
                      }}
                      transition={{
                        duration: 2.5 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <motion.img
                        src={avatar}
                        alt="Learner"
                        className="motion-avatar-smooth h-full w-full rounded-full border-2 border-white object-cover"
                        whileHover={{
                          y: -8,
                          scale: 1.09,
                          transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 21,
                            mass: 0.8,
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                  <motion.span
                    className="relative z-10 grid aspect-square w-[clamp(22px,5.2vw,46px)] place-items-center rounded-full border-2 border-white bg-[#0C529F] text-[clamp(12px,2.5vw,20px)] text-white"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    +
                  </motion.span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[12%] left-[26%] z-20 rounded-xl bg-[#1558a5] px-[4%] py-[2.4%] text-[clamp(9px,2.1vw,15px)] font-medium text-white shadow-[0_12px_30px_rgba(12,82,159,0.28)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ x: [0, 8, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                y: { duration: 0.6, delay: 0.4 },
                x: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              Which MBA program suits my 5-year goal?
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.div
            className="relative inline-flex overflow-hidden rounded-full p-[2px]"
            animate={{
              boxShadow: [
                "0 0 0 rgba(12,82,159,0)",
                "0 6px 22px rgba(12,82,159,.2)",
                "0 0 0 rgba(12,82,159,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span
              className="absolute -inset-[100%] bg-[conic-gradient(transparent,#61c4ff,#0C529F,transparent_45%)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900">
              <Folder size={15} fill="currentColor" /> About Us
            </span>
          </motion.div>

          <h2 className="mt-5 max-w-[680px] text-[30px] font-semibold leading-[1.15] tracking-[-0.045em] text-[#1c1c1d] md:text-[40px] lg:text-[45px] xl:text-[50px]">
            Your Trusted Partner in Higher Education
          </h2>
          <p className="mt-5 max-w-[680px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our mission is to connect ambitious learners with globally
            recognized universities and industry-relevant programs that prepare
            them for future success.
          </p>

          <motion.div
            className="mt-6 flex items-start gap-4"
            whileHover={{
              x: 6,
              transition: {
                type: "spring",
                stiffness: 160,
                damping: 23,
                mass: 0.8,
              },
            }}
          >
            <motion.span
              className="grid size-12 shrink-0 place-items-center rounded-full bg-[#1558a5] text-white"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(12,82,159,0)",
                  "0 0 22px rgba(12,82,159,.45)",
                  "0 0 0 rgba(12,82,159,0)",
                ],
              }}
              transition={{ duration: 2.6, repeat: Infinity }}
            >
              <BriefcaseBusiness size={23} />
            </motion.span>
            <div>
              <h3 className="text-lg font-bold text-[#252525]">
                Personal Growth
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
                From choosing the right course to completing your admission
                journey
              </p>
            </div>
          </motion.div>

          <motion.div
            className="motion-card-fill motion-card-smooth mt-7 rounded-2xl border-l-4 border-[#1558a5] bg-white px-6 py-5 font-semibold leading-6 text-[#292929] shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:px-9"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -4,
              boxShadow: "0 16px 35px rgba(12,82,159,.12)",
              transition: {
                type: "spring",
                stiffness: 155,
                damping: 23,
                mass: 0.85,
              },
            }}
          >
            With strong university partnerships and learner-focused support, we
            make higher education more accessible, flexible, and
            career-oriented.
          </motion.div>

          <ProjectDialog
            eyebrow="About Yangpoo"
            title="A trusted bridge between ambition and opportunity"
            description="Yangpoo University Partners helps learners discover recognized, career-relevant education while making every stage of the decision and admission journey easier to navigate."
            trigger={({ openDialog }) => (
              <AnimatedButton
                type="button"
                onClick={openDialog}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#1558a5] px-10 py-4 font-semibold text-white transition hover:bg-[#0C529F] hover:shadow-lg cursor-pointer"
              >
                More About Us{" "}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </AnimatedButton>
            )}
          >
            {({ closeDialog }) => (
              <div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    [
                      Target,
                      "Our mission",
                      "Make quality higher education more accessible and career focused.",
                    ],
                    [
                      Handshake,
                      "Our partnerships",
                      "Connect learners with trusted universities and relevant programs.",
                    ],
                    [
                      GraduationCap,
                      "Our support",
                      "Guide students from course discovery through the admission journey.",
                    ],
                  ].map(([Icon, title, copy]) => (
                    <div
                      key={title}
                      className="min-w-0 rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-sm"
                    >
                      <Icon className="size-5 text-[#0C529F]" />
                      <h3 className="mt-3 text-sm font-bold text-[#151d31]">
                        {title}
                      </h3>
                      <p className="mt-1 break-words text-xs leading-5 text-slate-600">
                        {copy}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-[#0C529F]/5 p-5">
                  <h3 className="font-bold text-[#151d31]">
                    What learners can expect
                  </h3>
                  <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    {[
                      "Personalized program guidance",
                      "Flexible learning options",
                      "Clear admissions assistance",
                      "Career-oriented course choices",
                    ].map((item) => (
                      <p key={item} className="flex min-w-0 items-center gap-2">
                        <CheckCircle2 className="size-4 shrink-0 text-[#0C529F]" />
                        <span className="break-words">{item}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <AnimatedButton
                  smooth
                  to="/#contact"
                  onClick={closeDialog}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0C529F] px-6 py-3 text-sm font-semibold text-white"
                >
                  Speak with our team <ArrowRight size={17} />
                </AnimatedButton>
              </div>
            )}
          </ProjectDialog>
        </motion.div>
      </div>
    </section>
  );
}
