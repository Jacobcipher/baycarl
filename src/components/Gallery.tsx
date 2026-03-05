"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="pt-6 pb-10 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            The <span className="text-accent">Vision</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Main large image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group rounded-2xl overflow-hidden aspect-[3/4] md:row-span-2"
          >
            <img
              src="/images/profile.jpg"
              alt="Baycarl - Professional Portrait"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm text-accent font-medium">The Leader</p>
              <p className="text-xs text-text-secondary mt-1">
                Purpose-driven. Faith-guided. Impact-focused.
              </p>
            </div>
          </motion.div>

          {/* Secondary image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative group rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src="/images/photo.jpg"
              alt="Baycarl - Casual"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm text-accent font-medium">The Visionary</p>
              <p className="text-xs text-text-secondary mt-1">
                Innovative. Ambitious. Resilient.
              </p>
            </div>
          </motion.div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-surface-light to-card-bg border border-accent/10 aspect-[4/3]"
          >
            <div className="text-center">
              <div className="text-accent text-4xl mb-4">&ldquo;</div>
              <p className="text-lg md:text-xl font-medium italic text-text-primary/90 leading-relaxed">
                Be the change you wish to see
              </p>
              <div className="mt-6 w-12 h-0.5 bg-accent/40 mx-auto" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
