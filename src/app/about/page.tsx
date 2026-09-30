import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Sparkles, Wrench } from "lucide-react";
import MotionFadeIn from "@/components/MotionFadeIn";
import { education, techStack } from "@/data/experience";

export const metadata = {
  title: "About — Joven Sanchez",
  description:
    "Learn about Joven Sanchez's journey, academic background, educational timeline, and tech stack.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-12 flex flex-col gap-20">
      {/* Intro Header */}
      <section className="pt-6 sm:pt-10">
        <MotionFadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-400 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            <span>About me</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-10 leading-tight">
            Building Functional Systems &amp; Modern Web Experiences.
          </h1>
        </MotionFadeIn>

        {/* Position 1: Split Editorial Layout (Photo + Narrative) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left: Portrait Card */}
          <div className="md:col-span-5">
            <MotionFadeIn delay={0.1}>
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
                <Image
                  src="/images/profile/AboutProfile.jpg"
                  alt="Joven Sanchez Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                />
              </div>
            </MotionFadeIn>
          </div>

          {/* Right: Narrative Story */}
          <div className="md:col-span-7 flex flex-col gap-6 text-neutral-400 text-sm sm:text-base leading-relaxed">
            <MotionFadeIn delay={0.15}>
              <p className="mb-4">
                Hi, I&apos;m <span className="text-white font-medium">Joven Sanchez</span>,
                a <span className="text-white">3rd Year BSIT student</span> at the{" "}
                <span className="text-white font-medium">National College of Science and Technology (NCST)</span>.{" "}
                I&apos;m passionate about web development, database systems, and
                crafting responsive, user-friendly digital solutions.
              </p>
              <p>
                Currently in my <span className="text-white">1st Semester</span> of third year,
                my coursework centers on Systems Integration &amp; Architecture (SIA),
                relational database management, and full-stack frameworks — bridging
                the gap between backend logic and intuitive frontend interfaces.
              </p>
            </MotionFadeIn>

            <MotionFadeIn delay={0.25}>
              <p className="mb-4">
                My journey started with a curiosity for how web systems and software
                power everyday processes. Through academic projects at NCST, group
                capstone work, and self-driven builds, I&apos;ve been sharpening my skills
                with modern technologies like Next.js, React, Tailwind CSS, PHP, and MySQL.
              </p>
              <p>
                Whether collaborating with classmates on coursework sprints or taking
                on freelance projects, I strive for clean architecture,
                well-structured databases, and maintainable code.
              </p>
            </MotionFadeIn>
          </div>
        </div>
      </section>

      {/* Educational Background Timeline */}
      <section className="flex flex-col gap-8">
        <MotionFadeIn>
          <div className="flex items-center gap-2 border-b border-white/5 pb-4">
            <GraduationCap className="w-4 h-4 text-neutral-400" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Educational Background
            </h2>
          </div>
        </MotionFadeIn>

        <div className="flex flex-col gap-4">
          {education.map((item, index) => (
            <MotionFadeIn key={index} delay={index * 0.08}>
              <div className="glass-card rounded-2xl p-6 group hover:border-white/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base font-semibold text-white group-hover:text-neutral-200 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                  <span className="text-neutral-300 font-medium">{item.company}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </MotionFadeIn>
          ))}
        </div>
      </section>

      {/* Tech & Tool Stack */}
      <section className="flex flex-col gap-8">
        <MotionFadeIn>
          <div className="flex items-center gap-2 border-b border-white/5 pb-4">
            <Wrench className="w-4 h-4 text-neutral-400" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              My Stack &amp; Tools
            </h2>
          </div>
        </MotionFadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {techStack.map((item, index) => (
            <MotionFadeIn key={item.name} delay={index * 0.06}>
              <div className="glass-card rounded-xl p-4 flex flex-col justify-between h-24 hover:border-white/20 transition-all">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                  {item.category}
                </span>
                <span className="text-base font-medium text-white">
                  {item.name}
                </span>
              </div>
            </MotionFadeIn>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section>
        <MotionFadeIn>
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Let&apos;s Get in Touch!
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
              Whether you need a website, a web-based system, or a fellow IT
              student to collaborate with — I&apos;d love to connect and build
              something great together.
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors shadow-lg"
              >
                <span>Reach out</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-medium text-xs sm:text-sm hover:text-white transition-colors"
              >
                <span>Browse Projects</span>
              </Link>
            </div>
          </div>
        </MotionFadeIn>
      </section>
    </div>
  );
}
