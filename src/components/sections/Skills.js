"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Figma", icon: FaFigma, color: "#A259FF" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10">
        {/* PILL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-200">
            MY SKILLS
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white font-light text-[36px] sm:text-[44px] lg:text-[52px] mb-16"
        >
          My <span className="text-emerald-400">Advantages</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {skills.map(({ name, icon: Icon, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: false, amount: 0.25 }}
              className="
                group
                flex flex-col items-center justify-center
                h-[140px]
                sm:h-[160px]
                lg:h-[180px]
                rounded-[100px]
                sm:rounded-[120px]
                border border-white/20
                bg-white/[0.02]
                transition
                hover:border-emerald-400/60
              "
            >
              {/* ICON */}
              <Icon
                className="text-3xl sm:text-4xl mb-3 sm:mb-4 transition"
                style={{ color }}
              />

              {/* LABEL */}
              <p className="text-[12px] sm:text-sm text-gray-300 tracking-wide">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
