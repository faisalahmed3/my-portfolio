"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Aspire Internship Certificate",
    description: "Completed internship program with consistent performance and contributions.",
    image: "/certificates/loading.png",
  },
  {
    title: "Intern of the Month",
    description: "Recognized as top-performing intern for technical excellence and impact.",
    image: "/certificates/intern-of-the-month.png",
  },
  {
    title: "Full Stack Development Certificate",
    description: "Completed full-stack web development training with real-world projects.",
    image: "/certificates/programing-hero.jpg",
  },
  {
    title: "Hackathon Participation Certificate",
    description: "Participated in EDU Hackfest 2025 as a team member and developer.",
    image: "/certificates/hackathon.jpeg",
  },
  {
    title: "Aspire Leadership Certificate",
    description: "Completed leadership program focused on communication and impact. Founded at Harvard University",
    image: "/certificates/leadership.jpg",
  },
];

export default function Certificates() {
  return (
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
          <span
            className="inline-flex items-center gap-2 rounded-full
                       border border-white/15 bg-white/5
                       px-4 py-2 text-xs tracking-widest
                       text-gray-300 mb-4"
          >
            CERTIFICATES
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] text-white font-light">
            My <span className="text-emerald-400">Achievements</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                rounded-2xl overflow-hidden
                border border-white/10
                bg-white/[0.04]
                hover:border-emerald-400/50
                transition
              "
            >
              {/* IMAGE */}
              <div className="relative h-[220px] sm:h-[260px]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t
                                from-black/60 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-white text-base font-medium mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
