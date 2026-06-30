"use client";

import React from "react";
import {
  FiHome,
  FiBriefcase,
  FiBatteryCharging,
  FiActivity,
  FiArrowRight,
} from "react-icons/fi";

const iconMap: Record<string, any> = {
  FiHome,
  FiBriefcase,
  FiBatteryCharging,
  FiActivity,
};

export default function WhatWeDoSection({ heading, description, bottomText, services, linkText, linkHref }: any) {
  const displayServices = services || [];

  return (
    <section className="py-20 md:py-24 md:px-12 px-4 bg-[#F8F9FA] text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold mb-6 text-[#1A1A24]">{heading}</h2>
          <p className="text-[#555555] max-w-3xl mx-auto md:text-[17px] leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200/60 pb-3 mb-12">
          <h3 className="text-2xl font-bold text-[#0F0F3D]">Service Overview</h3>
          <a href={linkHref || "/contact-us"} className="group flex items-center gap-2 text-[#00875A] font-semibold mt-4 sm:mt-0 hover:text-emerald-800 transition text-[15px]">
            {linkText || "Get a free solar assessment"} <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {displayServices.map(({ service, icon, problem, get, savings }: any) => {
            const Icon = iconMap[icon] || FiHome;
            return (
              <div key={service} className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#E8F8F0] text-[#00875A] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-3">
                  <h4 className="text-[20px] font-bold text-[#0F0F3D]">{service}</h4>
                  <div className="space-y-2   text-[#555555] font-medium">
                    <p className="font-[14px]"> 
                      <strong className="text-[#374151] font-bold text-[15px]" >Problem It Solves:</strong> {problem}
                    </p>
                    <p className="font-[14px]">
                      <strong className="text-[#374151] font-bold text-[15px]">What You Get:</strong> {get}
                    </p>
                    <p className="font-[14px]">
                      <strong className="text-[#374151] font-bold text-[15px]">How It Supports Savings:</strong> {savings}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {bottomText && (
          <div className="mt-16 bg-white rounded-2xl p-8 text-center">
            <p className="text-[16px] font-bold text-[#0F0F3D]">
              {bottomText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
