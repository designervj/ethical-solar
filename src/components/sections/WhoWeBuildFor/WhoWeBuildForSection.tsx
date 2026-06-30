"use client";

import React from "react";
import { FiHome, FiBriefcase, FiBatteryCharging, FiTool, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, any> = {
  FiHome,
  FiBriefcase,
  FiBatteryCharging,
  FiTool,
};

export default function WhoWeBuildForSection({ heading, description, audiences, statsBlock }: any) {
  const displayAudiences = audiences || [];

  return (
    <section className="py-20 md:py-24 md:px-12 px-4 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F3D] mb-6">{heading || "Who We Build Solar For"}</h2>
          <p className="text-[#555555] max-w-3xl mx-auto md:text-[16px] leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {displayAudiences.map(({ title, icon, description, linkText, href }: any) => {
            const Icon = iconMap[icon] || FiHome;
            return (
              <div key={title} className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#E8F8F0] text-[#00875A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0F0F3D]">{title}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-[#555555] font-medium mb-6 flex-1">
                  {description}
                </p>
                <a href={href} className="group flex items-center gap-2 text-[14px] text-[#00875A] font-semibold hover:text-emerald-800 transition mt-auto">
                  {linkText} <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {statsBlock && (
          <div className="bg-[linear-gradient(90deg,_#23469B_0%,_#26A187_100%)] rounded-[20px] p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-12 max-w-2xl mx-auto leading-tight">
                {statsBlock.heading}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                {statsBlock.stats.map((stat: any, index: number) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-3xl md:text-4xl font-bold">{stat.value}</h4>
                    <p className="text-[13px] text-white/90 leading-relaxed max-w-xs mx-auto">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="bg-[#3ccb7f] hover:bg-[#2ba564] text-white px-8 py-6 rounded-full text-[15px] font-semibold border-0 shadow-lg transition-transform hover:scale-105">
                {statsBlock.buttonText || "Get a free Solar Assessment"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
