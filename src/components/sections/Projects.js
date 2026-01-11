"use client";

import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  const projects = featuredProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative lg:mx-12 xl:mx-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 xl:px-10">

        {/* HEADER */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full
                           border border-white/15 bg-white/5
                           px-4 py-2 text-xs tracking-widest
                           text-gray-300 mb-4">
            PORTFOLIO
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] text-white font-light">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid xl:mx-10 grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          <ProjectCard project={projects[0]} span="col-span-12" />

          <ProjectCard
            project={projects[1]}
            span="col-span-12 lg:col-span-6"
          />

          <ProjectCard
            project={projects[2]}
            span="col-span-12 lg:col-span-6"
          />

          <ProjectCard project={projects[3]} span="col-span-12" />
        </div>

        {/* VIEW ALL */}
        <div className="mt-12 sm:mt-14 lg:mt-16
                        flex justify-center lg:justify-end">
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
