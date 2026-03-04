"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Venture {
  name: string;
  description: string;
  logo: string;
  tags: string[];
  url: string;
}

const ventures: Venture[] = [
  {
    name: "Vendpost LLC",
    description:
      "A digital platform connecting businesses with customers, enabling seamless commerce and client engagement.",
    logo: "/vendpost.png",
    tags: ["Digital Platform", "Commerce"],
    url: "https://vendpost.com",
  },
  {
    name: "Baycarl Photography LLC",
    description:
      "Professional photography services capturing powerful stories through visual content, serving clients across the US.",
    logo: "/photography.png",
    tags: ["Photography", "Creative Services", "US"],
    url: "https://baycarlphotography.com",
  },
  {
    name: "Baycarl Editing Services",
    description:
      "Premium editing and post-production services delivering excellence across multiple markets globally.",
    logo: "/bes.png",
    tags: ["Editing", "Post-Production", "Global"],
    url: "https://www.baycarleditingservices.com",
  },
  {
    name: "Baycarl Pet Shop NG",
    description:
      "A pet shop built with deep appreciation for animal care, offering quality products and trusted services for pet owners.",
    logo: "/petshop.png",
    tags: ["Pet Care", "Retail", "Nigeria"],
    url: "https://baycarlpetshop.com",
  },
  {
    name: "Baycarl.com",
    description:
      "The central hub for the Baycarl brand — showcasing ventures, vision, and the story behind the name.",
    logo: "/baycarl.png",
    tags: ["Brand Hub", "Digital"],
    url: "https://www.baycarl.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Ventures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ventures" className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            My <span className="text-accent">Ventures</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {ventures.map((venture, index) => (
            <motion.a
              key={venture.name}
              variants={cardVariants}
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl bg-card-bg border border-white/5 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 cursor-pointer ${
                index === ventures.length - 1 && ventures.length % 2 !== 0
                  ? "md:col-span-2 md:max-w-md md:mx-auto"
                  : ""
              }`}
            >
              {/* Logo */}
              <img
                src={venture.logo}
                alt={`${venture.name} logo`}
                className="w-16 h-16 object-contain mb-4"
              />

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                {venture.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {venture.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {venture.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary/80 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
