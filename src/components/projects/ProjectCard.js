"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, span }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`${span}
        rounded-2xl sm:rounded-[28px]
        overflow-hidden
        border border-white/10
        bg-white/[0.04]
      `}
    >
      {/* IMAGE */}
      <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t
                        from-black/60 via-black/20 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl text-white mb-2 sm:mb-3">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-gray-400 mb-5 sm:mb-6 max-w-[720px]">
          {project.description}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
          {project.tech?.map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1 text-[11px] sm:text-xs
                         rounded-full bg-white text-black"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap gap-4 sm:gap-5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2
                         text-sm text-emerald-400 hover:underline"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2
                         text-sm text-gray-300 hover:text-white"
            >
              <FaGithub />
              Repository
            </a>
          )}

          {!project.repo && project.client && (
            <a
              href={project.client}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2
                         text-sm text-gray-300 hover:text-white"
            >
              <FaGithub />
              Client
            </a>
          )}

          {!project.repo && project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2
                         text-sm text-gray-300 hover:text-white"
            >
              <FaGithub />
              Server
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
