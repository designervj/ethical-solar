"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

/** -------------------------------------------------------
 *  Helpers
 *  ----------------------------------------------------- */
type Tile = {
  id: number;
  imgSrc: string; // replace with your own images
  alt?: string;
};

type Slot = {
  slotId: string;
  className: string; // fixed masonry placement
  heightClass?: string;
};

const shuffle = <T,>(arr: T[]) => {
  const a = [...arr];
  let i = a.length;
  while (i) {
    const j = Math.floor(Math.random() * i--);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/** -------------------------------------------------------
 *  MASONRY SHUFFLE GRID (uneven slots)
 *  ----------------------------------------------------- */
const tileData: Tile[] = [
  {
    id: 1,
    imgSrc:
      "assets/img/img6.jpg",
    alt: "Solar panel install",
  },
  {
    id: 2,
    imgSrc:
    "assets/img/img6.jpg",
    alt: "Solar roof",
  },
  {
    id: 3,
    imgSrc:"assets/img/img1.jpg",
    alt: "Solar panels on home",
  },
  {
    id: 4,
    imgSrc:
      "assets/img/rec-img.webp",
    alt: "Technician working",

  },
  {
    id: 5,
    imgSrc:
      "assets/img/img (3).jpg",
    alt: "Solar farm",
  },
  {
    id: 6,
    imgSrc:
      "assets/img/img (4).jpg",

    alt: "Panels close-up",
  },
  {
    id: 7,
    imgSrc:
      "assets/img/img (5).jpg",
    alt: "Modern rooftop panels",
  },
  {
    id: 8,
    imgSrc:
       "assets/img/img1.jpg",
    alt: "Energy system",
  },
];

const slots: Slot[] = [
  {
    slotId: "slot-large",
    className: "col-span-3 row-span-2 col-start-2 row-start-1",
    heightClass: "h-[220px]",
  },
  {
    slotId: "slot-right-top",
    className: "col-span-1 row-span-1 col-start-5 row-start-1",
    heightClass: "h-[100px]",
  },
  {
    slotId: "slot-right-mid",
    className: "col-span-1 row-span-1 col-start-5 row-start-2",
    heightClass: "h-[110px]",
  },
  {
    slotId: "slot-bottom-left",
    className: "col-span-1 row-span-1 col-start-1 row-start-3",
    heightClass: "h-[100px]",
  },
  {
    slotId: "slot-bottom-wide",
    className: "col-span-3 row-span-1 col-start-2 row-start-3",
    heightClass: "h-[100px]",
  },
];

const MasonryShuffleBlocks: React.FC = () => {
  const intervalRef = useRef<number | null>(null);

  const generateTilesForSlots = () => {
    // take unique tiles for the number of slots (prevents duplicate keys)
    const shuffled = shuffle(tileData).slice(0, slots.length);
    return slots.map((slot, idx) => ({
      slot,
      tile: shuffled[idx],
    }));
  };

  const [assigned, setAssigned] = useState(generateTilesForSlots());

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setAssigned(generateTilesForSlots());
    }, 3000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative hidden md:grid grid-cols-5 grid-rows-3 gap-4 h-[350px] items-end">
      {assigned.map(({ slot, tile }) => (
        <motion.div
          key={tile.id} // key by TILE so tile elements animate between slots
          layout
          layoutId={`tile-${tile.id}`}
          transition={{ duration: 1.2, type: "spring", bounce: 0.15 }}
          className={[
            "relative overflow-hidden rounded-2xl border border-white/15",
            "shadow-[0_18px_60px_rgba(0,0,0,0.18)]",
            slot.className,
            slot.heightClass,
          ].join(" ")}
        >
          <img
            src={tile.imgSrc}
            alt={tile.alt ?? "Tile"}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {/* soft overlay for consistent look */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/35" />

          {/* Play icon only on large slot (optional like your screenshot style) */}
          {slot.slotId === "slot-large" && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <div className="h-16 w-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <FaPlay className="h-5 w-5 translate-x-[1px]" />
              </div> */}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

/** -------------------------------------------------------
 *  HERO
 *  ----------------------------------------------------- */
export default function Hero() {
  return (
    <section className="mx-auto relative w-full overflow-hidden  border border-white/15">
      <div
        className="relative mx-auto md:ps-16 px-4 py-20 grid md:grid-cols-[55%_45%] gap-10 items-center"
        style={{
          // ✅ IMPORTANT: use leading slash for Next public folder
          backgroundImage: "url(/assets/img/solar-panal4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay to improve text contrast */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Left Text Content */}
        <div className="relative max-w-xl px-2">
          <h1 className="text-white font-normal text-3xl sm:text-4xl lg:text-[50px] mb-6 font-serif leading-tight">
            Solar built to last, by a team you can trust.
          </h1>

          <p className="text-white/85 text-sm sm:text-base max-w-md mb-10">
            We install the highest-quality solar panel systems and back them up
            with a 30-year warranty.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-[#3ccb7f] hover:bg-[#23499b] text-white md:px-6 md:py-3 px-5 py-3 text-xs rounded-full md:text-sm font-medium transition-all">
              Book a Free Demo
            </button>
          </div>
        </div>

        {/* Right Side Animated Masonry Blocks */}
        <div className="relative">
          <MasonryShuffleBlocks />
        </div>
      </div>
    </section>
  );
}
