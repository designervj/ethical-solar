"use client";

import React from "react";
import {
  FiSun,
  FiGrid,
  FiBriefcase,
  FiBatteryCharging,
  FiTool,
  FiCpu,
  FiArrowRight,
} from "react-icons/fi";

const iconMap: Record<string, any> = {
  FiSun,
  FiGrid,
  FiBriefcase,
  FiBatteryCharging,
  FiTool,
  FiCpu,
};

export default function OurServicesSection({ heading, services }: any) {
  const displayServices = services || [];

  return (
    <section className="py-20 md:py-24 md:px-12 px-4 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-[#0F0F3D]">{heading || "Our services"}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map(({ title, icon, description }: any) => {
            const Icon = iconMap[icon] || FiSun;
            return (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8F8F0] text-[#00875A] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-[20px] font-bold text-[#0F0F3D] mb-4">{title}</h3>
                
                <p className="text-[15px] leading-relaxed text-[#555555] font-medium mb-8">
                  {description}
                </p>

                <div className="mt-auto text-right">
                  <FiArrowRight className="inline-block text-[#00875A] w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
