"use client";

import React from "react";

export const ContactForm: React.FC = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // hook your API here
  };

  return (
    <div
      id="contact-section"
      className="bg-white rounded-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,92,151,0.05)] p-7 md:p-10"
    >
      <h3 className="text-[#00305a] text-2xl font-semibold mb-6">
        Send us a Message
      </h3>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* First + Last */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <label className="space-y-2">
            <span className="text-[15px] font-semibold text-[#00305a]">
              First Name*
            </span>
            <input
              required
              type="text"
              placeholder="John"
              className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
            />
          </label>

          <label className="space-y-2">
            <span className="text-[15px] font-semibold text-[#00305a]">
              Last Name*
            </span>
            <input
              required
              type="text"
              placeholder="Doe"
              className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
            />
          </label>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <label className="space-y-2">
            <span className="text-[15px] font-semibold text-[#00305a]">
              Email*
            </span>
            <input
              required
              type="email"
              placeholder="john@example.com"
              className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
            />
          </label>

          <label className="space-y-2">
            <span className="text-[15px] font-semibold text-[#00305a]">
              Phone*
            </span>
            <input
              required
              type="tel"
              placeholder="04XX XXX XXX"
              className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
            />
          </label>
        </div>

        {/* Postcode */}
        <label className="space-y-2 block">
          <span className="text-[15px] font-semibold text-[#00305a]">
            Postcode
          </span>
          <input
            required
            type="text"
            placeholder="e.g. 4000"
            className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
          />
        </label>

        {/* Message */}
        <div className="space-y-2">
          <span className="text-[15px] font-semibold text-[#00305a]">
            How can we help?
          </span>
          <textarea
            rows={5}
            placeholder="Tell us about your energy needs..."
            className="w-full rounded-xl border border-black/10 p-3 text-sm outline-none focus:ring-2 focus:ring-[#2AF598]/20 focus:border-[#2AF598]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-[#3ccb7f] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:brightness-95 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
