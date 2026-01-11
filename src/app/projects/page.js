"use client";

import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/data/allProjects";
import ProjectCard from "@/components/projects/ProjectCard";
import { motion } from "framer-motion";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";

export default function AllProjects() {
  return (
    <section id="all-projects" className="relative min-h-screen py-28">

      {/* ================= FIXED UI ================= */}

      {/* BACK TO HOME */}
      <Link
        href="/"
        className="
          fixed top-6 left-6 z-50
          inline-flex items-center gap-2
          px-4 py-2 rounded-full
          bg-[#0B1220] border border-white/10
          text-gray-300 hover:text-emerald-400
          hover:border-emerald-400
          transition
        "
      >
        <FaArrowLeft />
        <span className="text-sm">Home</span>
      </Link>

      {/* PROFILE + CONTACT */}
      <div
        className="
          fixed top-6 right-6 z-50
          flex items-center gap-3
          bg-[#0B1220] border border-white/10
          rounded-full px-3 py-2
        "
      >
        {/* IMAGE */}
        <div className="relative w-10 h-10 rounded-lg overflow-hidden">
          <Image
            src="/me.jpg"   // 👈 replace with your actual image
            alt="Faisal Ahmed"
            fill
            className="object-cover"
          />
        </div>

        {/* NAME */}
        <span className="hidden sm:block text-sm text-white">
          Faisal Ahmed
        </span>

        {/* CONTACT */}
        <Link
          href="/#contact"
          className="
            inline-flex items-center gap-2
            px-3 py-2 rounded-full
            bg-emerald-400 text-black
            text-sm font-medium
            hover:shadow-[0_0_20px_rgba(52,211,153,0.6)]
            transition
          "
        >
          <FaEnvelope />
          <span className="hidden sm:inline">Contact</span>
        </Link>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 xl:px-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-300 mb-5">
            PORTFOLIO
          </span>

          <h1 className="text-white font-light text-[42px] sm:text-[52px] lg:text-[64px] leading-tight">
            All <span className="text-emerald-400">Projects</span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-400 leading-7">
            A complete collection of my work — including production systems,
            internship projects, hackathon builds, and experimental demos.
            Each project reflects real-world problem solving and clean
            engineering decisions.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          {allProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              span="col-span-12 md:col-span-6 xl:col-span-4"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
