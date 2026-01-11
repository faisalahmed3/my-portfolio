"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, span }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`${span}
        group relative
        rounded-2xl lg:rounded-[26px]
        overflow-hidden
        border border-white/10
        bg-white/[0.035]
        hover:border-emerald-400/30
        hover:shadow-[0_30px_80px_-20px_rgba(16,185,129,0.35)]
        transition-all duration-500
      `}
    >
      {/* IMAGE */}
      <div className="relative h-[200px] sm:h-[220px] lg:h-[260px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
            object-cover
            transition-transform duration-700
            group-hover:scale-[1.06]
          "
        />

        {/* Overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/75 via-black/30 to-transparent
        " />
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl text-white mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="
          text-sm text-gray-400 mb-4
          line-clamp-3
        ">
          {project.description}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="
                px-3 py-1 text-[11px]
                rounded-full
                bg-white/90 text-black
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap gap-5 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                text-emerald-400
                hover:underline
              "
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
              className="
                inline-flex items-center gap-2
                text-gray-300 hover:text-white
              "
            >
              <FaGithub />
              Repo
            </a>
          )}

          {!project.repo && project.client && (
            <a
              href={project.client}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                text-gray-300 hover:text-white
              "
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
              className="
                inline-flex items-center gap-2
                text-gray-300 hover:text-white
              "
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
