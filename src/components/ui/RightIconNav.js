"use client";

import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFolderOpen,
  FaEnvelope,
  FaBars
} from "react-icons/fa";

export default function RightIconNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE + TABLET + LAPTOP ( < xl ) */}
      <div className="xl:hidden fixed top-4 right-4 z-40">
        <button
          onClick={() => setOpen(!open)}
          className="w-11 h-11 rounded-full bg-[#0B1220] border border-white/10 flex items-center justify-center text-white"
        >
          <FaBars />
        </button>

        {open && (
          <div className="mt-3 flex flex-col gap-4 bg-[#0B1220] border border-white/10 rounded-xl p-4">
            {[FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope].map(
              (Icon, i) => (
                <Icon key={i} className="text-emerald-400 text-lg" />
              )
            )}
          </div>
        )}
      </div>

      {/* DESKTOP ( xl+ ) */}
      <nav
        className="
          hidden xl:flex
          fixed top-1/2 right-6
          -translate-y-1/2
          flex-col gap-6
          bg-[#0B1220]
          border border-white/10
          rounded-full
          px-3 py-4
          z-30
        "
      >
        {[FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope].map(
          (Icon, i) => (
            <Icon
              key={i}
              className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition"
            />
          )
        )}
      </nav>
    </>
  );
}
