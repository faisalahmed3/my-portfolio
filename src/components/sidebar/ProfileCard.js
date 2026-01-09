"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div
      className="
        w-full
        max-w-[380px]
        sm:max-w-[520px]
        md:max-w-[640px]
        lg:max-w-[720px]
        xl:max-w-[420px]
        rounded-[28px]
        px-6 py-8
        flex flex-col justify-between
        bg-gradient-to-b from-[#0B1220] via-[#0A1A2F] to-[#020617]
        border border-emerald-400/20
        shadow-[0_30px_60px_rgba(0,0,0,0.65)]
      "
    >
      {/* TOP */}
      <div className="text-center">
        <div className="flex items-center justify-between mb-6">
          <h2 className="flex flex-col text-3xl font-semibold text-white text-left">
            Faisal
            <span>
              Ahmed<span className="text-emerald-400 ml-1">.</span>
            </span>
          </h2>

          <p className="flex flex-col text-base text-right text-gray-300">
            Full Stack Developer
            <span className="text-emerald-200">(MERN)</span>
          </p>
        </div>

        <div
          className="
            mx-auto
            w-[230px]
            sm:w-[260px]
            md:w-[280px]
            h-[300px]
            relative
            rounded-[22px]
            overflow-hidden
          "
        >
          <Image
            src="/me.jpg"
            alt="MD. Faisal Ahmed"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-6 text-emerald-200 text-lg break-all">
          faisalahmed4417@gmail.com
        </p>
      </div>

      {/* BOTTOM */}
      <div>
        <p className="text-emerald-300/70 text-center mb-4">
          +8801876141732
        </p>

        <p className="text-xs text-emerald-300/70 text-center mb-6">
          © {new Date().getFullYear()} Faisal. All Rights Reserved
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.facebook.com/faisal.ahmed.58115"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="
              w-10 h-10 rounded-full
              border border-emerald-400/30
              flex items-center justify-center
              text-emerald-300
              hover:text-emerald-400
              hover:border-emerald-400
              transition
            "
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/in/faisal-ahmed4417/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
              w-10 h-10 rounded-full
              border border-emerald-400/30
              flex items-center justify-center
              text-emerald-300
              hover:text-emerald-400
              hover:border-emerald-400
              transition
            "
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.instagram.com/_faisal_ahmed132/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="
              w-10 h-10 rounded-full
              border border-emerald-400/30
              flex items-center justify-center
              text-emerald-300
              hover:text-emerald-400
              hover:border-emerald-400
              transition
            "
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/faisalahmed3"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              w-10 h-10 rounded-full
              border border-emerald-400/30
              flex items-center justify-center
              text-emerald-300
              hover:text-emerald-400
              hover:border-emerald-400
              transition
            "
          >
            <FaGithub />
          </a>
        </div>

        <button
          className="
            w-full py-3 rounded-full font-medium text-black
            bg-[linear-gradient(110deg,#34d399,#22c55e,#4ade80)]
            shadow-[0_0_25px_rgba(52,211,153,0.5)]
            hover:shadow-[0_0_45px_rgba(52,211,153,0.8)]
            transition
          "
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}
