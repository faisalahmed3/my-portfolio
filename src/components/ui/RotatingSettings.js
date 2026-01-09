"use client";

import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa";

export default function RotatingSettings() {
  return (
    <motion.div
      className="
        absolute
        top-0
        left-0
        -translate-x-3
        translate-y-2
        w-10
        h-10
        flex items-center justify-center
        text-emerald-400
        bg-[#0B1220]
        z-10
      "
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "linear",
      }}
    >
      <FaCog size={18} />
    </motion.div>
  );
}
