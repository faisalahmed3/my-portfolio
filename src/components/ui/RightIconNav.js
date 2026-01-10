"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineCode } from "react-icons/hi";
import { MdOutlineLayers } from "react-icons/md";

/* ---------------- NAV ITEMS (MATCHES SECTION ORDER) ---------------- */

const navItems = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "resume", label: "Resume", icon: HiOutlineDocumentText },
  { id: "services", label: "Services", icon: MdOutlineLayers },
  { id: "skills", label: "Skills", icon: HiOutlineCode },
  { id: "projects", label: "Projects", icon: FaFolderOpen },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

/* ---------------- SOCIAL ---------------- */

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

/* ---------------- COMPONENT ---------------- */

export default function RightIconNav() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* HAMBURGER */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-50 w-11 h-11 rounded-full
                   bg-[#0B1220] border border-white/10
                   flex items-center justify-center text-white"
        aria-label="Open Menu"
      >
        <FaBars />
      </button>

      {/* DRAWER */}
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

            {/* PANEL */}
            <motion.aside
              className="fixed top-0 right-0 z-50 h-full w-[300px]
                         bg-[#0B1220] border-l border-white/10
                         px-6 py-6 flex flex-col"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-lg text-white">Menu</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-xl"
                  aria-label="Close Menu"
                >
                  <FaTimes />
                </button>
              </div>

              {/* NAV */}
              <nav className="flex flex-col gap-6">
                {navItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex items-center gap-4 text-gray-300
                               hover:text-emerald-400 transition text-left"
                  >
                    <Icon className="text-lg" />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>

              {/* SOCIAL */}
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
                      className="w-10 h-10 rounded-full
                                 border border-emerald-100/30
                                 flex items-center justify-center
                                 text-white
                                 hover:text-emerald-400
                                 hover:border-emerald-400
                                 transition"
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

      {/* DESKTOP ICON RAIL */}
      {!open && (
        <nav
          className="hidden xl:flex fixed top-1/2 right-6 -translate-y-1/2
                     flex-col gap-6 bg-[#0B1220]
                     border border-white/10 rounded-full
                     px-3 py-4 z-30"
        >
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              aria-label={label}
              className="text-gray-400 hover:text-emerald-400 transition"
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </nav>
      )}
    </>
  );
}
