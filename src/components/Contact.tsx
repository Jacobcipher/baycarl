"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    icon: <FaFacebook className="text-xl" />,
    url: "https://www.facebook.com/ade.bamidel.3?mibextid=LQQJ4d",
    color: "hover:bg-[#1877f2]/10 hover:border-[#1877f2]/30",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-xl" />,
    url: "https://www.linkedin.com/in/victor-baycarl-adekola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    color: "hover:bg-[#0a66c2]/10 hover:border-[#0a66c2]/30",
  },
  {
    name: "Baycarl.com",
    icon: <FaGlobe className="text-xl" />,
    url: "https://baycarl.com",
    color: "hover:bg-accent/10 hover:border-accent/30",
  },
];

const contactVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="connect" className="pt-6 pb-10 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-text-secondary text-center mb-12 max-w-md mx-auto"
        >
          Find me across the web. Let&apos;s build something meaningful together.
        </motion.p>

        {/* Social links */}
        <motion.div
          variants={contactVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-3"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={itemVariants}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-4 rounded-xl bg-card-bg border border-white/5 transition-all duration-300 ${link.color}`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                {link.icon}
              </div>
              <span className="flex-1 font-medium text-text-primary/90">
                {link.name}
              </span>
              <FaArrowRight className="text-text-secondary/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 text-sm" />
            </motion.a>
          ))}
        </motion.div>

        {/* Business Card CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:admin@baycarl.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
          >
            <FaEnvelope className="text-sm" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
