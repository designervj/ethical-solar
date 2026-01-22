"use client";

import React, { useMemo, useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ CONTENT UPDATED FOR ETHICAL SOLAR (NO ICONS ADDED, SAME STRUCTURE)
const services = [
  {
    title: "Residential Solar",
    description:
      "Custom rooftop solar systems designed for your home, usage, and budget — built to maximize long-term savings.",
    linkText: "Explore residential solar",
    href: "#residential",
  },
  {
    title: "Commercial Solar",
    description:
      "Scalable solar solutions for businesses to reduce operating costs and improve sustainability performance.",
    linkText: "Explore commercial solar",
    href: "#commercial",
  },
  {
    title: "Battery Storage",
    description:
      "Store energy for nights and outages. Add backup power and smarter savings with modern battery systems.",
    linkText: "Explore battery options",
    href: "#battery",
  },
  {
    title: "Maintenance & Monitoring",
    description:
      "Ongoing monitoring, performance checks, and maintenance support to keep your system running at its best.",
    linkText: "View support plans",
    href: "#support",
  },
];

type VideoState = "idle" | "ready" | "playing" | "error";

export default function WhatWeDo() {
  const [expanded, setExpanded] = useState(false);
  const [videoState, setVideoState] = useState<VideoState>("idle");

  // ✅ If these files are in /public, use leading "/"
  // /public/assets/img/solar-panal4.jpg
  // /public/assets/video/showreel.mp4
  const posterSrc = "/assets/img/solar-panal4.jpg";
  const videoSrc = "assets/img/showreel.mp4";

  const cardGridClass = useMemo(
    () =>
      expanded
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        : "grid grid-cols-1 sm:grid-cols-2 gap-6",
    [expanded]
  );

  const onOpen = () => {
    setExpanded(true);
    setVideoState("ready");
  };

  const onClose = () => {
    setExpanded(false);
    setVideoState("idle");
  };

  return (
    <section className="py-16 md:py-10 md:px-4 md:px-10 bg-white">
      <div className="container-xl mx-auto">
        {/* Header */}
        <div className="max-w-lg mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-[#555555] mb-4">
            What We Do
          </h2>
          <p className="md:text-lg text-base text-[#555555] md:text-lg">
            We design and install reliable solar + storage systems for homes and
            businesses — with clear pricing, quality components, and long-term
            support.
          </p>
        </div>

        {/* Main Layout Wrapper */}
        <motion.div
          layout
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={
            expanded
              ? "grid grid-cols-1 gap-8 items-start"
              : "grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-start"
          }
        >
          {/* Video Block */}
          <motion.div
            layout
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={
              expanded
                ? "relative w-full bg-[#3E0577] rounded-2xl overflow-hidden h-[400px] md:h-[560px]"
                : "relative w-full bg-[#3E0577] rounded-2xl overflow-hidden h-[400px] md:h-[450px] p-6 flex flex-col justify-between"
            }
          >
            {/* Collapsed state (placeholder image + play) */}
            {!expanded && (
              <>
                <h4 className="font-light text-white text-3xl relative z-10">
                  ETHICAL SOLAR
                </h4>

                {/* Poster background */}
                <div className="absolute inset-0">
                  <img
                    src={posterSrc}
                    alt="Project preview"
                    className="w-full h-full object-cover opacity-70"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={onOpen}
                    className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 fill-white" />
                  </button>
                </div>

                <span className="text-white text-sm relative z-10">
                  Solar Installation Overview
                </span>
              </>
            )}

            {/* Expanded state: video player */}
            {expanded && (
              <div className="absolute inset-0">
                <video
                  src={videoSrc}
                  poster={posterSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                  onCanPlay={() => setVideoState("ready")}
                  onPlay={() => setVideoState("playing")}
                  onPause={() => setVideoState("ready")}
                  onEnded={onClose}
                  onError={() => setVideoState("error")}
                />

                {/* Close */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white rounded-full px-3 py-1 text-sm"
                >
                  Close
                </button>

                {/* Error overlay */}
                <AnimatePresence>
                  {videoState === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center p-6"
                    >
                      <div className="max-w-md text-center text-white">
                        <p className="font-semibold text-lg mb-2">
                          Video load nahi hua.
                        </p>
                        <p className="text-sm text-white/80 mb-4">
                          Ensure video exists at:{" "}
                          <span className="font-mono">{videoSrc}</span>
                          <br />
                          Recommended: keep mp4 inside{" "}
                          <b>/public/assets/video/</b>
                        </p>
                        <button
                          onClick={onClose}
                          className="px-4 py-2 rounded-lg bg-white text-black font-semibold"
                        >
                          Back
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>

          {/* Cards Block */}
          <motion.div
            layout
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={cardGridClass}
          >
            {services.map((service) => (
              <motion.div
                layout
                key={service.title}
                className="bg-[#F3F3F3] border border-none rounded-2xl p-6 h-full flex flex-col"
              >
                <h4 className="font-bold text-lg text-[#1F1F1F] mb-2">
                  {service.title}
                </h4>
                <p className="text-[#4B4B4B] text-sm mb-4">
                  {service.description}
                </p>

                <hr className="mt-auto" />
                <a
                  href={service.href}
                  className="text-[#047857] hover:text-[#047857] text-sm font-medium pt-2 group flex items-center gap-1 transition-all"
                >
                  {service.linkText}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
