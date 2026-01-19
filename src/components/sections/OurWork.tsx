"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

// Data for the 4 industry cards
const industries = [
  {
    title: "Tourism & Travel",
    description:
      "For brands that host the world. We help villas, boutique hotels and rental agencies boost bookings and visibility.",
    linkText: "See tourism projects",
  },
  {
    title: "Yacht & Charter",
    description:
      "For brands that sail above the noise. Booking-ready websites, AI videos and digital campaigns that stand out.",
    linkText: "Explore charter projects",
  },
  {
    title: "Health, Pharma & Beauty",
    description:
      "For brands that build trust through care. From clinics to pharma and beauty — clarity, empathy, credibility.",
    linkText: "See health & beauty work",
  },
  {
    title: "Local & Boutique Brands",
    description:
      "For makers, doers and dreamers. Authentic identities and digital presence for independent brands.",
    linkText: "Discover boutique projects",
  },
];

// Data for the stats block
const stats = [
  {
    value: "$52M+",
    label: "in revenue - helped achieved for clients in driving their portfolios",
  },
  {
    value: "12.000+",
    label: "digital products and services delivered",
  },
  {
    value: "2.300+",
    label: "hours of video materials edited, animated and postproduced",
  },
];

export default function WhoWeCreateFor() {
  return (
    <section className="bg-white py-16 md:py-18 px-4 md:px-10">
      <div className="container-xl mx-auto">
        
        {/* 1. Header Text */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-normal text-gray-color mb-4">
            Who We Create For
          </h2>
          <p className="text-gray-color text-base md:text-lg">
            We work with forward-thinking businesses across tourism, health, beauty,
            charter and boutique industries - keeping them visible, trustworthy and alive.
          </p>
        </div>

        {/* 2. Top Row: Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item) => (
            <div
              key={item.title}
              // h-[409px] REMOVED. Grid will auto-balance height.
              className="bg-[#3E0577] rounded-2xl p-8 flex flex-col"
            >
              <h4 className="text-white text-[24px] font-semibold mb-4">
                {item.title}
              </h4>

              {/* === EMPTY SPACE AS REQUESTED === */}
              <div className="h-16"></div> 
              {/* ================================ */}

              <p className="text-gray-300 text-sm">
                {item.description}
              </p>
              
              {/* This flex-grow div pushes the link to the bottom */ }
              {/* <div className="flex-grow"></div> */}

              {/* mt-auto REMOVED from here */ }
              <hr className="bg-[#6003BD] border-[#6003BD] my-3"/>
              <a
                href="#"
                className="pt-3 italic text-white text-sm font-light group flex items-center gap-1 transition-all"
              >
                {item.linkText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* 3. Bottom Row: Stats Block */}
        <div className="bg-[#3E0577] text-white rounded-2xl p-10 md:p-14 mt-6 text-center">
          <h3 className="md:text-[30px] text-[24px]  font-normal max-w-3xl mx-auto py-5 md:mb-12">
            Brands from different worlds - connected by one thing: 
            they all want their marketing to outlive the campaign.
          </h3>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className=" text-white mb-2">
                  <h3 className=" font-normal text-4xl lg:text-[50px]">{stat.value}</h3>
                </div>
                <p className="text-[#fff] font-light text-[14px] max-w-[250px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-[#8000FF] hover:bg-[#8000FF] text-white px-6 py-3 rounded-full text-md font-medium transition-all">
            Book a Free Demo
          </button>
        </div>

      </div>
    </section>
  );
}