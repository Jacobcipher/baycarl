"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCross } from "react-icons/fa";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>

          <div className="space-y-6 text-text-secondary leading-relaxed text-base md:text-lg">
            <p>
              I&apos;m a visionary entrepreneur and creative professional driven
              by impact, innovation, and purpose. My journey spans multiple
              industries — from creative services and digital platforms to
              logistics, business development, and pet care — each built on the
              same foundation: turning ideas into meaningful, sustainable
              ventures.
            </p>

            <p>
              With hands-on experience in strategy, execution, and brand growth,
              I thrive at the intersection of creativity and structure. I&apos;ve
              built and managed businesses that serve people in different ways,
              including a pet shop created with a deep appreciation for animal
              care, quality products, and customer trust.
            </p>

            <p>
              Whether developing platforms that connect businesses and clients,
              telling powerful stories through visual content, or providing
              reliable products and services for pet owners — my focus remains
              the same: <span className="text-accent font-medium">value, excellence, and long-term growth</span>.
            </p>

            <p>
              I believe great brands are not just seen — they&apos;re felt. That
              belief, grounded in faith and purpose, guides everything I build,
              collaborate on, and put into the world.
            </p>
          </div>

          {/* Faith callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 p-6 rounded-2xl bg-surface-light/50 border border-accent/10 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                <FaCross className="text-accent text-sm" />
              </div>
              <div>
                <h3 className="text-accent font-semibold mb-2">
                  Grounded in Faith
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  My faith plays a central role in how I lead, create, and
                  build. It shapes my values, strengthens my integrity, and
                  guides the decisions behind every brand and project I&apos;m
                  involved in.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
