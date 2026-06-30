"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function BlogGrid({ posts }: any) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container-xl mx-auto py-20 px-4 sm:px-6">
        {posts.map((post: any) => (
          <div key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--gradient-start)] uppercase tracking-wide">
                {post.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-400 text-xs mb-3">{post.date}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{post.excerpt}</p>
              <a href="#" className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                Read Article <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
