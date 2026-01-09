"use client";

import { FaBriefcase } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-120px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0, y: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.28,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="resume" className="relative w-full py-24">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10"
      >
        {/* RESUME PILL */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-200">
            <FaBriefcase className="text-[12px]" />
            RESUME
          </div>
        </div>

        {/* TITLE */}
        <motion.h2
          variants={item}
          className="text-white font-light leading-tight text-[40px] sm:text-[48px] lg:text-[56px] mb-16"
        >
          Education &{" "}
          <span className="text-emerald-400">Internship</span>
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative grid grid-cols-[1fr_4fr] gap-x-10">
          {/* LINE */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-white/15" />
          </div>

          {/* CONTENT */}
          <div className="space-y-20">

            {/* INTERNSHIP */}
            <motion.div variants={item} className="relative">
              <span className="absolute -left-[52px] top-2 w-3 h-3 rounded-full bg-emerald-400 " />
              <p className="text-sm text-gray-400 mb-3 hover:text-emerald-400 ">
                Oct 2025 – Present
              </p>

              <h3 className="text-white text-lg">
                MERN Stack Developer Intern → Co-Lead, Development Team
              </h3>

              <p className="text-gray-400 mt-1">
                NexGenix — IT Business Incubator, CUET
              </p>

              <ul className="mt-4 text-gray-400 text-sm space-y-2 max-w-2xl">
                <li>• Promoted to Co-Lead within the first month</li>
                <li>• Worked on real-world MERN & Next.js applications</li>
                <li>• Collaborated with cross-functional teams in production environment</li>
                <li>
                  • Awarded{" "}
                  <span className="text-emerald-300">
                    Intern of the Month
                  </span>{" "}
                  for outstanding performance and dedication
                </li>
              </ul>
            </motion.div>

            {/* EDUCATION */}
            <motion.div variants={item} className="relative">
              <span className="absolute -left-[52px] top-2 w-3 h-3 rounded-full bg-emerald-400" />
              <p className="text-sm text-gray-400 mb-3 hover:text-emerald-400">
                2022 – Present
              </p>

              <h3 className="text-white text-lg">
                Bachelor of Science in Computer Science & Engineering
              </h3>

              <p className="text-gray-400 mt-1">
                East Delta University
              </p>

              <p className="mt-3 text-gray-400 text-sm max-w-2xl">
                Focused on software engineering fundamentals, data structures,
                web technologies, and practical application development.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
