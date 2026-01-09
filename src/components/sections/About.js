"use client";

import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full">
      <motion.div
        className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10"
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1], 
        }}
        viewport={{
          once: false,
          amount: 0.25,
        }}
      >

        {/* ABOUT PILL */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-200">
            <FaUser className="text-[12px]" />
            ABOUT
          </div>
        </div>

        {/* HEADLINE */}
        <h2
          className="
            text-white font-light leading-[1.15]
            text-[36px]
            sm:text-[44px]
            md:text-[44px]
            lg:text-[52px]
            max-w-3xl
          "
        >
          Every great product begins with
          <br />
          an even{" "}
          <span className="text-emerald-400">
            better engineering story
          </span>
        </h2>

        {/* DESCRIPTION */}
        <div className="mt-8 max-w-2xl text-[15px] leading-7 text-gray-400 space-y-4">
          <p>
            I’m a MERN Stack Developer with hands-on industry experience building
            scalable, production-ready web applications using React, Next.js,
            Node.js, Express, and MongoDB.
          </p>

          <p>
            I started my journey as a developer through real-world projects and
            internships, where I quickly grew into leadership responsibilities.
            Currently, I serve as a{" "}
            <span className="text-gray-300">
              Co-Lead of the Development Team
            </span>{" "}
            at NexGenix (IT Business Incubator, CUET), contributing to and leading
            multiple full-stack projects.
          </p>

          <p>
            I enjoy working on clean architectures, collaborative team workflows,
            and solving practical problems through well-structured code. Beyond
            development, I actively share technical knowledge through webinars
            and mentoring students preparing for industry-level work.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
