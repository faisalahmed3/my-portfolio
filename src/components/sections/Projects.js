"use client";

import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  const projects = featuredProjects.slice(0, 4);

  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-[1200px] mx-auto px-5 xl:px-10 relative">

        {/* HEADER */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-300 mb-4">
            PORTFOLIO
          </span>

          <h2 className="text-[40px] sm:text-[48px] text-white font-light">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
        </div>

        {/* GRID: 1 / 2 / 1 */}
        <div className="grid grid-cols-12 gap-10">
          <ProjectCard project={projects[0]} span="col-span-12" />
          <ProjectCard project={projects[1]} span="col-span-12 md:col-span-6" />
          <ProjectCard project={projects[2]} span="col-span-12 md:col-span-6" />
          <ProjectCard project={projects[3]} span="col-span-12" />
        </div>

        {/* VIEW ALL — BOTTOM RIGHT */}
        <div className="mt-16 flex justify-end">
          <a
            href="/projects"
            className="
              inline-flex items-center gap-3
              px-7 py-3 rounded-full
              font-medium text-black
              bg-[linear-gradient(110deg,#34d399,#22c55e,#4ade80)]
              shadow-[0_0_35px_rgba(52,211,153,0.55)]
              hover:shadow-[0_0_55px_rgba(52,211,153,0.9)]
              transition
            "
          >
            View All Projects
            <span className="text-lg">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
