"use client";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "./anim";

type Feature = { id: string; title: string; caption: string; image: string };

export default function FeatureTiles({ items }: { items: Feature[] }) {
  return (
    <section className="container-xl py-10">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {items.map((f) => (
          <motion.div key={f.id} variants={fadeInUp}>
            <div className="overflow-hidden rounded-xl border bg-white text-gray-900 shadow-sm">
              <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${f.image})` }} />
              <div className="p-4">
                <div className="text-[22px] font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-black/60 font-medium">{f.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
