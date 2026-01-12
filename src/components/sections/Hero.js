"use client";

import { FaHome } from "react-icons/fa";

export default function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen">
      <div
        className="
          relative mx-auto w-full max-w-[1100px]
          px-5 sm:px-8 lg:px-10
          pt-16 sm:pt-20 pb-20
        "
      >
        {/* INTRODUCE PILL */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-200">
            <FaHome className="text-[12px]" />
            INTRODUCE
          </div>
        </div>

        {/* HEADLINE */}
        <h1
          className="
            text-white font-light leading-[1.05]
            text-[44px]
            sm:text-[56px]
            md:text-[64px]
            lg:text-[80px]
          "
        >
          Say Hi from{" "}
          <span className="text-emerald-400">Faisal Ahmed</span>, <br />
          MERN & Next.js <br />
          Developer
        </h1>

        {/* SUBTEXT */}
        <p className="mt-8 max-w-xl text-[15px] leading-7 text-gray-400">
          MERN Stack Developer with hands-on industry experience building
          production-ready full-stack applications, leading development teams,
          and delivering real-world projects.
        </p>

        {/* ROTATING PROJECTS BUTTON */}
        <div
          className="
            mt-12 flex justify-start
            sm:justify-end
            lg:mt-0 lg:block
            lg:absolute
            lg:right-[7%]
            lg:top-[62%]
            lg:-translate-y-1/2
            xl:right-[8%]
            xl:top-[60%]
          "
        >
          <button
            onClick={scrollToProjects}
            aria-label="Go to projects"
            className="relative w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] lg:w-[210px] lg:h-[210px]"
          >
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-white/20" />

            {/* Rotating text */}
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_14s_linear_infinite]"
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                />
              </defs>
              <text
                fill="rgba(255,255,255,0.75)"
                fontSize="12"
                letterSpacing="4"
              >
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  MY PROJECTS • MY PROJECTS • MY PROJECTS •
                </textPath>
              </text>
            </svg>

            {/* Center arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                  w-11 h-11 rounded-full
                  border border-white/25
                  flex items-center justify-center
                  text-white text-xl
                  transition
                  hover:bg-white/10
                "
              >
                ↓
              </div>
            </div>
          </button>
        </div>

        {/* STATS */}
        <div
          className="
            mt-16 sm:mt-20 lg:mt-28
            grid grid-cols-2 gap-x-16 gap-y-10
            max-w-[520px]
          "
        >
          <div>
            <div className="text-emerald-400 font-light text-[56px] sm:text-[64px]">
              18+
            </div>
            <div className="mt-2 text-[11px] tracking-widest text-gray-400 leading-5">
              PROJECTS <br /> COMPLETED
            </div>
          </div>

          <div>
            <div className="text-emerald-400 font-light text-[56px] sm:text-[64px]">
              10+
            </div>
            <div className="mt-2 text-[11px] tracking-widest text-gray-400 leading-5">
              REAL-WORLD <br /> TEAM PROJECTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
