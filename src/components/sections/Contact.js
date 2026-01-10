"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_a7aa5bn",
        "template_axfrsrv",
        formRef.current,
        "3UnAqnTft0Ru4JcK5"
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thanks for reaching out. I’ll get back to you soon.",
        background: "#0b0f14",
        color: "#e5e7eb",
        confirmButtonColor: "#34d399",
        iconColor: "#34d399",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later or contact me directly.",
        background: "#0b0f14",
        color: "#e5e7eb",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <motion.div
        className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, amount: 0.25 }}
      >
        {/* PILL */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-200">
            <FaEnvelope className="text-[12px]" />
            CONTACT
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-white font-light text-[36px] sm:text-[44px] lg:text-[52px] mb-4">
          Let’s Work{" "}
          <span className="text-emerald-400">Together!</span>
        </h2>

        <p className="text-gray-400 mb-14">
          faisalahmed4417@gmail.com
        </p>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              FULL NAME *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-emerald-400 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              EMAIL *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-emerald-400 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              PHONE (OPTIONAL)
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-emerald-400 transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              SUBJECT *
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-emerald-400 transition"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              MESSAGE *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message here..."
              className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-emerald-400 transition resize-none"
            />
          </div>

          {/* Submit */}
          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`
                mt-8 px-10 py-4 rounded-full font-medium text-black
                bg-[linear-gradient(110deg,#34d399,#22c55e,#4ade80)]
                shadow-[0_0_25px_rgba(52,211,153,0.5)]
                hover:shadow-[0_0_45px_rgba(52,211,153,0.8)]
                transition-all duration-300
                disabled:opacity-60
                disabled:cursor-not-allowed
                disabled:hover:shadow-[0_0_25px_rgba(52,211,153,0.5)]
              `}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>



        </form>
      </motion.div>
    </section>
  );
}
