import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe } from "lucide-react";
import MotionFadeIn from "@/components/MotionFadeIn";
import ProjectImageViewer from "@/components/ProjectImageViewer";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 sm:px-12 flex flex-col gap-12">
      {/* Back button */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Header */}
      <section className="flex flex-col gap-4 border-b border-white/5 pb-8">
        <MotionFadeIn>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-neutral-300">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-500">•</span>
            <span className="text-xs font-mono text-neutral-500">{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            {project.title}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/5">
            <div>
              <span className="text-[11px] font-mono uppercase text-neutral-500 block mb-1">
                Role
              </span>
              <span className="text-xs text-neutral-200 font-medium">
                {project.role}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-neutral-500 block mb-1">
                Client / Context
              </span>
              <span className="text-xs text-neutral-200 font-medium">
                {project.client || "Academic / Personal"}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-neutral-500 block mb-1">
                Year
              </span>
              <span className="text-xs text-neutral-200 font-medium">
                {project.year}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-neutral-500 block mb-1">
                Status
              </span>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-white hover:underline font-medium"
                >
                  Visit site <ArrowUpRight className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs text-neutral-400">Project Completed</span>
              )}
            </div>
          </div>
        </MotionFadeIn>
      </section>

      {/* Interactive Project Image & Screenshots */}
      <ProjectImageViewer
        title={project.title}
        coverImage={project.coverImage}
        images={project.images}
      >
        {/* Overview & Key Highlights (kept in original position right below primary showcase!) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 flex flex-col gap-6">
            <MotionFadeIn delay={0.2}>
              <h2 className="text-xl font-semibold text-white mb-2">
                Project Overview
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </MotionFadeIn>
          </div>

          <div className="flex flex-col gap-6">
            <MotionFadeIn delay={0.3}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">
                  Key Highlights
                </h3>
                <ul className="flex flex-col gap-3">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-neutral-400 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionFadeIn>
          </div>
        </section>
      </ProjectImageViewer>

      {/* Live website link banner (if available) */}
      {project.liveUrl && (
        <MotionFadeIn delay={0.3}>
          <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/5">
                <Globe className="w-5 h-5 text-neutral-300" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Experience it live</h4>
                <p className="text-xs text-neutral-400">View the deployed project in action</p>
              </div>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors"
            >
              <span>See Live Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </MotionFadeIn>
      )}

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-white/5 flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Projects</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:underline"
        >
          <span>Start a project like this</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
