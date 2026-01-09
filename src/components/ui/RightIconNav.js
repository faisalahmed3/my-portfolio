"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const navItems = [
  { icon: FaHome, label: "Home" },
  { icon: FaUser, label: "About" },
  { icon: FaBriefcase, label: "Resume" },
  { icon: FaFolderOpen, label: "Portfolio" },
  { icon: FaEnvelope, label: "Contact" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/faisal.ahmed.58115",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/_faisal_ahmed132/",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/faisal-ahmed4417/",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/faisalahmed3",
    label: "GitHub",
  },
];

export default function RightIconNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HAMBURGER (ALL SCREENS) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-50 w-11 h-11 rounded-full
                   bg-[#0B1220] border border-white/10
                   flex items-center justify-center text-white"
      >
        <FaBars />
      </button>

      {/* DRAWER + BACKDROP */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <motion.aside
              className="fixed top-0 right-0 z-50 h-full w-[300px]
                         bg-[#0B1220] border-l border-white/10
                         px-6 py-6 flex flex-col"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-lg text-white">Menu</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-xl"
                >
                  <FaTimes />
                </button>
              </div>

              {/* NAV LINKS */}
              <nav className="flex flex-col gap-6">
                {navItems.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 text-gray-300
                               hover:text-emerald-400 transition cursor-pointer"
                  >
                    <Icon />
                    <span>{label}</span>
                  </div>
                ))}
              </nav>

              {/* FOOTER – SOCIAL LINKS */}
              <div className="mt-auto pt-10">
                <p className="text-sm text-gray-400 mb-4">Social</p>

                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="
                        w-10 h-10 rounded-full
                        border border-emerald-100/30
                        flex items-center justify-center
                        text-white
                        hover:text-emerald-400
                        hover:border-emerald-400
                        transition
                      "
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* DESKTOP ICON RAIL (xl+ AND ONLY WHEN CLOSED) */}
      {!open && (
        <nav
          className="hidden xl:flex fixed top-1/2 right-6 -translate-y-1/2
                     flex-col gap-6 bg-[#0B1220]
                     border border-white/10 rounded-full
                     px-3 py-4 z-30"
        >
          {navItems.map(({ icon: Icon, label }) => (
            <Icon
              key={label}
              className="w-5 h-5 text-gray-400
                         hover:text-emerald-400 transition"
            />
          ))}
        </nav>
      )}
    </>
  );
}
