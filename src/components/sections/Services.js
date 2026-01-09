"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-24"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10">
        
        {/* SERVICES PILL */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-200">
            SERVICES
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-white font-light leading-tight text-[36px] sm:text-[44px] lg:text-[52px]">
          My <span className="text-emerald-400">Specializations</span>
        </h2>

        {/* SERVICES LIST */}
        <div className="mt-14 space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative rounded-2xl border border-white/10
                  bg-white/[0.02] px-8 py-8
                  hover:border-emerald-400/30
                  transition
                "
              >
                {/* ICON */}
                <div className="absolute right-8 top-8 text-emerald-400 text-xl">
                  <Icon />
                </div>

                {/* CONTENT */}
                <h3 className="text-xl text-white font-medium">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-xl text-gray-400 text-sm leading-7">
                  {service.description}
                </p>

                <div className="mt-6 text-xs tracking-widest text-gray-300">
                  {service.projects.toUpperCase()}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
