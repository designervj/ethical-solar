"use client";

import React, { useState, useMemo } from "react";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";

// Services data based on the image
const services = [
  {
    title: "Branding & Strategy",
    description: "Build clarity, consistency and a voice people remember.",
    linkText: "Explore branding services",
    href: "#",
  },
  {
    title: "Web & Digital",
    description:
      "Websites and booking experiences designed to convert - not just exist.",
    linkText: "Explore web services",
    href: "#",
  },
  {
    title: "Content & Marketing",
    description:
      "Content that compounds: social, email, campaigns and analytics.",
    linkText: "Explore marketing services",
    href: "#",
  },
  {
    title: "AI Video Production",
    description:
      "Turn photos into cinematic stories. Faster, smarter, and finally affordable.",
    linkText: "See full services",
    href: "#",
  },
];

export default function WhatWeDo() {
  const [expanded, setExpanded] = useState(false);

  // YouTube video id from: https://www.youtube.com/watch?v=VCo6_Q0-mL0
  const videoId = "VCo6_Q0-mL0";

  const ytOpts: YouTubeProps["opts"] = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
        modestbranding: 1,
      },
    }),
    []
  );

  const handlePlay = (_e: YouTubeEvent<number>) => {
    setExpanded(true);
  };

  const handlePause = (_e: YouTubeEvent<number>) => {
    setExpanded(false);
  };

  const handleEnd = (_e: YouTubeEvent<number>) => {
    setExpanded(false);
  };

  return (
    <section className="py-16 md:py-10 px-4 md:px-10 bg-white">
      <div className="container-xl mx-auto">
        {/* Header */}
        <div className="max-w-lg mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-[#555555] mb-4">
            What We Do 
          </h2>
          <p className="text-lg text-[#555555] md:text-lg">
            We combine brand strategy, web design and content to build creative
            systems - not one-off campaigns. Pick what you need, or plug us in
            as your ongoing team.
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
            {/* Collapsed state overlay (logo + play button) */}
            {!expanded && (
              <>
                <h4 className="font-light text-white text-3xl">hrescic</h4>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setExpanded(true)}
                    className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    aria-label="Play showreel"
                  >
                    <Play className="w-8 h-8 fill-white" />
                  </button>
                </div>

                <span className="text-white text-sm">Showreel, 2026</span>
              </>
            )}

            {/* Expanded state: actual YouTube player */}
            {expanded && (
              <div className="absolute inset-0">
                <YouTube
                  videoId={videoId}
                  opts={ytOpts}
                  className="w-full h-full"
                  iframeClassName="w-full h-full"
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onEnd={handleEnd}
                />
              </div>
            )}
          </motion.div>

          {/* Cards Block */}
          <motion.div
            layout
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={
              expanded
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                : "grid grid-cols-1 sm:grid-cols-2 gap-6"
            }
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
                <p className="text-[#4B4B4B] text-md mb-4">
                  {service.description}
                </p>

                <hr className="mt-auto" />
                <a
                  href={service.href}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium pt-2 group flex items-center gap-1 transition-all"
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
