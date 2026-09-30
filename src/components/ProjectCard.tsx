"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="group relative"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block rounded-2xl bg-[#141414] border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden shadow-xl"
      >
        {/* Project Image Preview — Edge-to-edge 4:3 Aspect Ratio */}
        <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
              <span className="text-xs text-neutral-600 font-mono">No Preview</span>
            </div>
          )}
        </div>

        {/* Card Info Details */}
        <div className="p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 capitalize">
            {project.tag || project.category}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
