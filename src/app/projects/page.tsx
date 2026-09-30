"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import MotionFadeIn from "@/components/MotionFadeIn";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Web Application",
  "Desktop Application",
  "UI/UX Design",
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col gap-12">
      {/* Header */}
      <section className="pt-6 sm:pt-10 flex flex-col gap-4">
        <MotionFadeIn>
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
            Archive &amp; Case Studies
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-1">
            Project List
          </h1>
          <p className="text-sm text-neutral-400 max-w-xl mt-2 leading-relaxed">
            A collection of academic projects, full-stack web applications, and
            systems built throughout my BSIT journey at NCST.
          </p>
        </MotionFadeIn>

        {/* Filter Pills */}
        <MotionFadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 pt-4 border-b border-white/5 pb-6">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md"
                      : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </MotionFadeIn>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} />
        ))}
      </section>
    </div>
  );
}
