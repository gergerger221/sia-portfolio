import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import MotionFadeIn from "@/components/MotionFadeIn";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col gap-24 sm:gap-32">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-14">
        {/* Profile Avatar with Circle Border & Status Dot */}
        <MotionFadeIn delay={0.05}>
          <div className="relative inline-block mb-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-white/5 border border-white/10 ring-4 ring-white/[0.04] shadow-2xl overflow-hidden">
              <Image
                src="/images/profile/HomeProfile.png"
                alt="Profile Avatar"
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </MotionFadeIn>

        <MotionFadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-400 mb-6">
            BSIT Student &amp; Web Developer
          </div>
        </MotionFadeIn>

        <MotionFadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Joven Sanchez
          </h1>
        </MotionFadeIn>

        <MotionFadeIn delay={0.3}>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            I&apos;m an Information Technology (BSIT) student passionate about
            modern web development, systems architecture, and crafting clean,
            responsive user interfaces. Dedicated to building practical digital
            solutions, learning modern frameworks, and writing clean, efficient code.
          </p>
        </MotionFadeIn>

        <MotionFadeIn delay={0.4}>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 font-medium text-xs sm:text-sm hover:text-white hover:border-white/20 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionFadeIn>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="flex flex-col gap-8">
        <MotionFadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Selected Works
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
                Featured Projects
              </h2>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </MotionFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

        <MotionFadeIn>
          <div className="text-center pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white border border-white/10 px-5 py-2 rounded-full hover:bg-white/5 transition-all"
            >
              <span>View more work ({projects.length} case studies)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </MotionFadeIn>
      </section>

      {/* What I Do Section */}
      <section className="flex flex-col gap-8">
        <MotionFadeIn>
          <div className="border-b border-white/5 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Services &amp; Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
              What I Do
            </h2>
          </div>
        </MotionFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section>
        <MotionFadeIn>
          <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Collaborate
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                Let&apos;s talk about your next project.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Whether you&apos;re an entrepreneur, startup, or established brand,
                I&apos;m excited to build tailored, high-impact digital experiences
                together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors shadow-lg"
              >
                <span>Contact me</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-medium text-xs sm:text-sm hover:text-white hover:border-white/20 transition-colors"
              >
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        </MotionFadeIn>
      </section>
    </div>
  );
}
