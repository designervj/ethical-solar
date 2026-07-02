"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { fadeInUp, stagger } from "./anim";

export type Product = { id: string; name: string; priceEUR: number; image: string; size?: string };
type Category = { id: string; label: string; products: Product[] };

export default function ProductTabsGrid({ categories }: { categories: Category[] }) {
  const first = categories?.[0]?.id ?? "c1";
  return (
    <section className="container px-4 mx-auto">
      <Tabs defaultValue={first} className="w-full">
        <TabsList className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <TabsTrigger key={c.id} value={c.id} className="text-[16px] font-medium">{c.label}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((c) => (
          <TabsContent key={c.id} value={c.id} className="mt-6">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
            >
              {c.products.map((p) => (
                <motion.div key={p.id} variants={fadeInUp}>
                  <div className="group overflow-hidden rounded-xl border bg-white text-gray-900 shadow-sm">
                    <div className="aspect-[1/1] w-full overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 pb-2">
                      <div className="font-semibold">{p.name}</div>
                    </div>
                    <div className="border-b border-border mx-3" />
                    <div className="flex items-center p-4 pt-2">
                      <div className="text-[13px] font-semibold text-accent">EUR {p.priceEUR.toFixed(2)}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
