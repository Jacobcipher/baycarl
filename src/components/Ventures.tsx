"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaShoppingCart,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaChevronDown,
  FaExternalLinkAlt,
  FaYoutube,
  FaCamera,
  FaBook,
} from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

interface DropdownLink {
  label: string;
  url: string;
  icon: React.ReactNode;
}

interface Venture {
  name: string;
  description: string;
  logo: string;
  tags: string[];
  url: string;
  dropdownLinks?: DropdownLink[];
}

const ventures: Venture[] = [
  {
    name: "Vendpost LLC",
    description:
      "A digital platform connecting businesses with customers, enabling seamless commerce and client engagement.",
    logo: "/vendpost.png",
    tags: ["Digital Platform", "Commerce"],
    url: "#",
    dropdownLinks: [
      {
        label: "Vendpost Website",
        url: "https://vendpost.com",
        icon: <FaExternalLinkAlt />,
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/share/1NXHTHR93C/?mibextid=wwXIfr",
        icon: <FaFacebook />,
      },
      {
        label: "Instagram",
        url: "https://instagram.com/vendpost",
        icon: <FaInstagram />,
      },
      {
        label: "WhatsApp",
        url: "https://wa.me/12148814773",
        icon: <FaWhatsapp />,
      },
      {
        label: "X (Twitter)",
        url: "https://x.com/vendpost",
        icon: <FaXTwitter />,
      },
    ],
  },
  {
    name: "Baycarl Photography LLC",
    description:
      "Professional photography services capturing powerful stories through visual content, serving clients across the US.",
    logo: "/photography.png",
    tags: ["Photography", "Creative Services", "US"],
    url: "#",
    dropdownLinks: [
      {
        label: "Photography Website",
        url: "https://baycarlphotography.mypixieset.com/",
        icon: <FaExternalLinkAlt />,
      },
      {
        label: "Book Christmas Photoshoot",
        url: "https://baycarlphotography.mypixieset.com/christmas-photoshoot/",
        icon: <FaCamera />,
      },
      {
        label: "WhatsApp",
        url: "https://wa.me/message/DLTWIFCQZIPDC1",
        icon: <FaWhatsapp />,
      },
      {
        label: "Photography Portfolio",
        url: "https://baycarlphotography.pixieset.com/baycarlphotographyportfolio/",
        icon: <FaCamera />,
      },
      {
        label: "Baycarl LLC Catalogue",
        url: "https://wa.me/c/12145412614",
        icon: <FaBook />,
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/baycarl_photography?igsh=MWw5cmtpaXkyM2NmNQ%3D%3D&utm_source=qr",
        icon: <FaInstagram />,
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100085864657867&mibextid=LQQJ4d",
        icon: <FaFacebook />,
      },
      {
        label: "TikTok",
        url: "http://www.tiktok.com/@baycarl_official",
        icon: <FaTiktok />,
      },
    ],
  },
  {
    name: "Baycarl Editing Services",
    description:
      "Premium editing and post-production services delivering excellence across multiple markets globally.",
    logo: "/bes.png",
    tags: ["Editing", "Post-Production", "Global"],
    url: "#",
    dropdownLinks: [
      {
        label: "Baycarl Editing Services Website",
        url: "https://www.baycarleditingservices.com",
        icon: <FaExternalLinkAlt />,
      },
      {
        label: "Our Portfolio",
        url: "https://baycarleditingservices.com/portfolio",
        icon: <FaCamera />,
      },
      {
        label: "WhatsApp",
        url: "https://wa.me/12145412614",
        icon: <FaWhatsapp />,
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/share/1FSNDpLGbi/?mibextid=wwXIfr",
        icon: <FaFacebook />,
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/baycarleditingservices?igsh=MWJkeHcwOTJwZGtwYg==",
        icon: <FaInstagram />,
      },
      {
        label: "YouTube",
        url: "https://youtube.com/@baycarleditingservices?si=-MSzMlWEfzy2b1Mh",
        icon: <FaYoutube />,
      },
    ],
  },
  {
    name: "Baycarl Pet Shop NG",
    description:
      "A pet shop built with deep appreciation for animal care, offering quality products and trusted services for pet owners.",
    logo: "/petshop.png",
    tags: ["Pet Care", "Retail", "Nigeria"],
    url: "#",
    dropdownLinks: [
      {
        label: "Baycarl Petshop Shopping Website",
        url: "https://www.baycarlpetshop.com.ng/",
        icon: <FaShoppingCart />,
      },
      {
        label: "Baycarl Pet Shop WhatsApp Hotline",
        url: "https://wa.me/",
        icon: <FaWhatsapp />,
      },
      {
        label: "Google Address",
        url: "https://g.co/kgs/AB3GdHe",
        icon: <FaMapMarkerAlt />,
      },
      {
        label: "Facebook Page",
        url: "https://web.facebook.com/people/Baycarl-Enterprise/100063662885379/?mibextid=LQQJ4d",
        icon: <FaFacebook />,
      },
      {
        label: "Instagram Page",
        url: "https://www.instagram.com/baycarl_petshop?igsh=MXBubjYxeWR3eG5uMA%3D%3D",
        icon: <FaInstagram />,
      },
    ],
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <section id="ventures" className="pt-6 pb-10 px-6" ref={ref}>
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
          className="grid grid-cols-2 gap-5"
        >
          {ventures.map((venture, index) => {
            const isLast = index === ventures.length - 1 && ventures.length % 2 !== 0;
            const isOpen = openDropdown === venture.name;

            if (venture.dropdownLinks) {
              return (
                <motion.div
                  key={venture.name}
                  variants={cardVariants}
                  className={`relative rounded-2xl bg-card-bg border border-white/5 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 ${
                    isLast ? "md:col-span-2 md:max-w-md md:mx-auto" : ""
                  }`}
                >
                  {/* Card header — clickable toggle */}
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : venture.name)}
                    className="w-full text-left p-6 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <img
                          src={venture.logo}
                          alt={`${venture.name} logo`}
                          className="w-16 h-16 object-contain mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                          {venture.name}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                          {venture.description}
                        </p>
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
                      </div>
                      <div className="flex flex-col items-center gap-1 ml-4 flex-shrink-0 mt-1">
                        <span className="text-accent/70 text-[10px] font-medium tracking-wide uppercase">
                          {isOpen ? "Close" : "Links"}
                        </span>
                        <FaChevronDown
                          className={`text-accent/60 text-sm transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Dropdown links */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/5 px-4 pb-4 pt-2 space-y-2">
                          {venture.dropdownLinks.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-accent/10 border border-white/5 hover:border-accent/20 transition-all duration-200 group/link"
                            >
                              <span className="text-accent text-base flex-shrink-0">
                                {link.icon}
                              </span>
                              <span className="text-sm text-text-secondary group-hover/link:text-text-primary transition-colors duration-200">
                                {link.label}
                              </span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            }

            return (
              <motion.a
                key={venture.name}
                variants={cardVariants}
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl bg-card-bg border border-white/5 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 cursor-pointer ${
                  isLast ? "md:col-span-2 md:max-w-md md:mx-auto" : ""
                }`}
              >
                <img
                  src={venture.logo}
                  alt={`${venture.name} logo`}
                  className="w-16 h-16 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {venture.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {venture.description}
                </p>
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
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
