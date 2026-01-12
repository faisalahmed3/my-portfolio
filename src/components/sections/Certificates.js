"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const certificates = [
  {
    title: "Aspire Internship Certificate",
    description:
      "Completed internship program with consistent performance and meaningful contributions.",
    image: "/certificates/loading.png",
  },
  {
    title: "Intern of the Month",
    description:
      "Recognized as top-performing intern for technical excellence and impact.",
    image: "/certificates/intern-of-the-month.png",
  },
  {
    title: "Dean’s List Recognition – East Delta University",
    description:
      "Awarded for achieving a GPA of 3.50+ while completing 15 credits in the Summer 2024 semester.",
    image: "/certificates/deans-list.jpg",
  },
  {
    title: "Full Stack Development Certificate",
    description:
      "Completed full-stack web development training with real-world projects.",
    image: "/certificates/programing-hero.jpg",
  },
  {
    title: "Hackathon Participation Certificate",
    description:
      "Participated in EDU Hackfest 2025 as a team member and developer.",
    image: "/certificates/hackathon.jpeg",
  },
  {
    title: "Aspire Leadership Certificate",
    description:
      "Completed leadership program focused on communication and impact. Founded at Harvard University.",
    image: "/certificates/leadership.jpg",
  },
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <section id="certificates" className="relative py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-300 mb-4">
              CERTIFICATES
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] text-white font-light">
              My <span className="text-emerald-400">Achievements</span>
            </h2>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                onClick={() => setActiveCert(cert)}
                className="
                  cursor-pointer
                  rounded-xl overflow-hidden
                  border border-white/10
                  bg-white/[0.035]
                  hover:border-emerald-400/60
                  hover:scale-[1.015]
                  transition
                "
              >
                {/* IMAGE */}
                {/* IMAGE */}
                <div className="relative h-[200px] sm:h-[220px] bg-white group">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />

                  {/* OVERLAY HINT */}
                  <div
                    className="
                      absolute inset-0
                      flex items-end justify-end
                      p-3
                      bg-black/0
                      group-hover:bg-black/20
                      transition
                    "
                  >
                    <div
                      className="
                        flex items-center gap-2
                        text-xs text-emerald-300
                        bg-black/60
                        px-3 py-1.5
                        rounded-full
                        opacity-0
                        group-hover:opacity-100
                        transition
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5
                            c4.478 0 8.268 2.943 9.542 7
                            -1.274 4.057-5.064 7-9.542 7
                            -4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Certificate
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="text-white text-sm font-medium mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeCert && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
            />

            {/* MODAL CONTENT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="
                fixed z-50
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[90vw] max-w-4xl
                bg-white rounded-2xl
                shadow-2xl overflow-hidden
              "
            >
              {/* CLOSE */}
              <button
                onClick={() => setActiveCert(null)}
                className="
                  absolute top-4 right-4 z-10
                  w-10 h-10 rounded-full
                  bg-black/70 text-white
                  flex items-center justify-center
                  hover:bg-black transition
                "
              >
                <FaTimes />
              </button>

              {/* IMAGE */}
              <div className="relative w-full h-[80vh] bg-white">
                <Image
                  src={activeCert.image}
                  alt={activeCert.title}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
