"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-primary to-primary z-0" />

      {/* Subtle decorative element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-3 border-accent/60 shadow-lg shadow-accent/10"
        >
          <img
            src="/images/profile.jpg"
            alt="Baycarl"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Name / Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          <span className="text-accent">Bay</span>carl
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-text-secondary mb-3 font-medium"
        >
          CEO @Baycarl LLC &bull; Vendpost LLC
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-accent/80 text-sm md:text-base tracking-widest uppercase mb-8"
        >
          Innovative &bull; Ambitious &bull; Resilient &bull; Visionary
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-text-secondary/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Visionary entrepreneur and creative professional driven by impact,
          innovation, and purpose.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <a href="#about" aria-label="Scroll down">
            <FaChevronDown className="text-accent/60 text-xl" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
