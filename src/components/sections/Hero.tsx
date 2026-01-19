"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

/** -------------------------------------------------------
 *  Helpers
 *  ----------------------------------------------------- */
type Tile = {
  id: number;
  // you can switch these to actual images later
  bgClass: string;
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
  { id: 1, bgClass: "bg-[#3E0577]" },
  { id: 2, bgClass: "bg-[#440A80]" },
  { id: 3, bgClass: "bg-[#4B0F8A]" },
  { id: 4, bgClass: "bg-[#3B0571]" },
  { id: 5, bgClass: "bg-[#4A0A8F]" },
  { id: 6, bgClass: "bg-[#3F0A7A]" },
  { id: 7, bgClass: "bg-[#45107F]" },
  { id: 8, bgClass: "bg-[#3A0A70]" },
];

type Slot = {
  slotId: string;
  className: string; // fixed masonry placement
  heightClass?: string;
};

const slots: Slot[] = [
  // Large rectangle top-middle
  {
    slotId: "slot-large",
    className: "col-span-3 row-span-2 col-start-2 row-start-1",
    heightClass: "h-[220px]",
  },
  // Small rectangle right-top
  {
    slotId: "slot-right-top",
    className: "col-span-1 row-span-1 col-start-5 row-start-1",
    heightClass: "h-[100px]",
  },
  // Small rectangle right-bottom
  {
    slotId: "slot-right-mid",
    className: "col-span-1 row-span-1 col-start-5 row-start-2",
    heightClass: "h-[110px]",
  },
  // Small square bottom-left
  {
    slotId: "slot-bottom-left",
    className: "col-span-1 row-span-1 col-start-1 row-start-3",
    heightClass: "h-[100px]",
  },
  // Long rectangle bottom-middle
  {
    slotId: "slot-bottom-wide",
    className: "col-span-3 row-span-1 col-start-2 row-start-3",
    heightClass: "h-[100px]",
  },
];

const MasonryShuffleBlocks: React.FC = () => {
  const timeoutRef = useRef<number | null>(null);

  const generateTilesForSlots = () => {
    const shuffled = shuffle(tileData);
    return slots.map((slot, idx) => ({
      slot,
      tile: shuffled[idx % shuffled.length],
    }));
  };

  const [assigned, setAssigned] = useState(generateTilesForSlots());

  useEffect(() => {
    const run = () => {
      setAssigned(generateTilesForSlots());
      timeoutRef.current = window.setTimeout(run, 3000);
    };
    run();
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative hidden md:grid grid-cols-5 grid-rows-3 gap-4 h-[350px] items-end">
      {assigned.map(({ slot, tile }) => (
        <motion.div
          key={tile.id}                 // key by TILE so tiles move between slots
          layout                        // enables smooth layout transitions
          transition={{ duration: 1.5, type: "spring" }}
          className={[
            tile.bgClass,
            "rounded-2xl shadow-inner/10",
            slot.className,
            slot.heightClass,
          ].join(" ")}
        />
      ))}
    </div>
  );
};

/** -------------------------------------------------------
 *  HERO (design from your first code)
 *  ----------------------------------------------------- */
export default function Hero() {
  return (
    <section className="md:container-xl sm:container-xl max-w-[90%] mt-2 mx-auto relative w-full bg-[#220052] rounded-2xl overflow-hidden border border-[#5A1AFF]/30">
      <div className="mx-auto md:ps-16 px-4 py-20 grid md:grid-cols-[55%_45%] gap-10 items-center">
        {/* Left Text Content */}
        <div className="max-w-xl px-2">
          <h1 className="text-white font-normal text-3xl sm:text-4xl lg:text-[50px] mb-6 font-serif">
            Marketing that goes on – even after campaign ends.
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-md mb-10">
            Creative systems built to keep your brand visible, trusted and
            growing — long after the ads stop running.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-[#9B00FF] hover:bg-[#8000FF] text-white md:px-6 md:py-3 px-5 py-3 text-xs rounded-full md:text-sm font-medium transition-all">
              Book a Free Demo
            </button>

            <button className="flex items-center gap-2 bg-[#3D0377] hover:bg-[#3B0080] text-white md:px-6 md:py-3 px-5 py-3 text-xs rounded-full md:text-sm transition-all">
              <FaPlay className="w-4 h-4" /> Play Showreel
            </button>
          </div>
        </div>

        {/* Right Side Animated Masonry Blocks */}
        <MasonryShuffleBlocks />
      </div>
    </section>
  );
}
