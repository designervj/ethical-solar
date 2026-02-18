"use client";

import React from "react";
import { ArrowRight, Sun, Building2, BatteryCharging, Wrench } from "lucide-react";

// ✅ Industry cards
const industries = [
  {
    title: "Homeowners (Residential)",
    description:
      "For families who want lower power bills and long-term energy independence. We design clean, high-performance rooftop solar systems.",
    linkText: "Explore Residential solar",
    icon: Sun,
    href: "#Residential",
  },
  {
    title: "Commercial & Industrial",
    description:
      "For businesses that want to reduce operating costs and improve sustainability metrics with scalable solar solutions.",
    linkText: "See commercial solar",
    icon: Building2,
    href: "#commercial",
  },
  {
    title: "Battery & Backup",
    description:
      "For anyone who wants protection from outages and better savings by storing solar energy for night use and peak times.",
    linkText: "Explore battery storage",
    icon: BatteryCharging,
    href: "#battery",
  },
  {
    title: "Maintenance & Monitoring",
    description:
      "For existing systems that need peak performance. Monitoring, inspections, and support to maximize lifetime production.",
    linkText: "View maintenance plans",
    icon: Wrench,
    href: "#maintenance",
  },
];

// ✅ Updated stats block (as per new guidelines)
const stats = [
  {
    value: "30 Years",
    label:
      "Panel Performance Warranty with long-term reliability assurance.",
  },
  {
    value: "25 + 10 Years",
    label:
      "25 Years Product Warranty on Panels and 10 Years Product Warranty on Inverters & Batteries.",
  },
  {
    value: "70–90%",
    label:
      "Bill reduction is possible for most properties, depending on usage and system size.",
  },
];

export default function WhoWeCreateFor() {
  return (
    <section className="bg-[#f7f7f7] py-16 md:py-18 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 mb-4">
            Who We Build Solar For
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Ethical Solar partners with homeowners and businesses to design solar + storage systems
            that reduce costs, improve reliability, and deliver long-term savings.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-black/10 bg-white p-7 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 grid place-items-center">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-medium">
                      {item.linkText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Stats + CTA */}
        <div className="bg-[linear-gradient(90deg,_#23469B_0%,_#26A187_100%)] text-white rounded-2xl p-10 md:p-14 mt-6 text-center">
          <h3 className="md:text-[30px] text-[24px] font-normal max-w-3xl mx-auto py-5 md:mb-10">
            Different properties. One goal: reliable savings with a solar system designed to last.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="mb-2">
                  <h3 className="font-normal text-4xl lg:text-[50px]">
                    {stat.value}
                  </h3>
                </div>
                <p className="text-white/90 font-light text-[14px] max-w-[280px] mx-auto leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact-section"
            className="inline-flex items-center justify-center bg-[#3ccb7f] hover:bg-[#23499b] text-white px-7 py-3 rounded-full text-md font-medium transition-all"
          >
            Book a Free Solar Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
