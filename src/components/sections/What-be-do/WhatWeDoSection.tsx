"use client";

import React from "react";
import {
  FiHome,
  FiBriefcase,
  FiBatteryCharging,
  FiActivity,
} from "react-icons/fi";

// ✅ Ethical Solar service data (with proper icons per service)
const services = [
  {
    service: "Residential Solar",
    Icon: FiHome,
    problem: "High electricity bills and unpredictable rate increases.",
    get: "Site assessment, system design, premium panels + inverter, clean installation.",
    growth:
      "Cuts monthly bills and increases home value with long-term energy security.",
  },
  {
    service: "Commercial Solar",
    Icon: FiBriefcase,
    problem: "Rising operating costs are eating into profit margins.",
    get: "Energy audit, scalable design, performance modelling, compliant commercial install.",
    growth:
      "Reduces overhead, improves sustainability reporting, and stabilizes energy spend.",
  },
  {
    service: "Battery Storage",
    Icon: FiBatteryCharging,
    problem: "Grid outages and peak-hour costs reduce reliability and savings.",
    get: "Battery sizing, backup setup, smart load control, hybrid-ready configuration.",
    growth:
      "Stores solar for night use, improves resilience, and increases ROI over time.",
  },
  {
    service: "Maintenance & Monitoring",
    Icon: FiActivity,
    problem: "Systems underperform without anyone noticing.",
    get: "Production monitoring, health checks, cleaning guidance, warranty support.",
    growth:
      "Protects performance year-round and maximizes lifetime savings.",
  },
];

// ✅ Reusable Icon Component (same style like screenshot)
function ServiceIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="p-3 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 flex items-center justify-center">
      <Icon className="h-6 w-6" aria-hidden="true" />
    </div>
  );
}

const WhatWeDoSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
            What Ethical Solar Does
          </h2>
          <p className="mt-4 max-w-3xl mx-auto md:text-lg text-base text-gray-600">
            Solar is not just panels — it’s a complete system. We design,
            install, and support solar + storage solutions that reduce bills,
            improve reliability, and deliver long-term savings.
          </p>
        </div>

        {/* Section header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-black/10 pb-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Service Overview
          </h3>

          <a
            href="#contact-section"
            className="text-emerald-700 hover:text-emerald-900 inline-flex items-center group font-medium"
          >
            Get a free solar assessment
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.5 12h-11M13.5 16l4-4-4-4"
              />
            </svg>
          </a>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {services.map((item) => (
            <div key={item.service} className="flex items-start space-x-4">
              <ServiceIcon Icon={item.Icon} />

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.service}
                </h4>

                <p className="mt-2 text-sm text-gray-700">
                  <span className="font-semibold">Problem It Solves: </span>
                  {item.problem}
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  <span className="font-semibold">What You Get: </span>
                  {item.get}
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  <span className="font-semibold">
                    How It Supports Savings:{" "}
                  </span>
                  {item.growth}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional note */}
        <div className="mt-12 rounded-2xl bg-white border border-black/5 p-6 text-center">
          <p className="text-gray-700">
            Want a clear estimate for your property? We’ll model your roof, show
            expected production, and explain incentives available in your area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
