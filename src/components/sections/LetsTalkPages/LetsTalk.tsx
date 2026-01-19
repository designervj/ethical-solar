import React, { useState } from "react";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import WhatToExpect from "./WhatToExpect";
import CallsAvailableNote from "./CallsAvailableNote";

type HelpOption =
  | "Brand"
  | "Website"
  | "Content"
  | "Video"
  | "Suscription"
  | "Other";

const HELP_OPTIONS: HelpOption[] = [
  "Brand",
  "Website",
  "Content",
  "Video",
  "Suscription",
  "Other",
];

const LetsTalk: React.FC = () => {
  const [selected, setSelected] = useState<HelpOption[]>([]);

  const toggleOption = (opt: HelpOption) => {
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  return (
    <>
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  overflow-hidden ">
          {/* LEFT PURPLE PANEL */}
          <div className="bg-[#300060] text-white p-8 md:p-10 flex flex-col min-h-[520px] rounded-[20px]">
            <div>
              <h4 className="text-xl font-semibold">Have Questions?</h4>
            </div>

            <h3 className="mt-8 text-2xl md:text-3xl font-serif leading-snug">
              Clear, fast and pressure-free.
            </h3>

            <h3 className="mt-8 text-2xl md:text-3xl font-serif leading-snug">
              Tell us what you need —
              <br />
              we’ll tell you exactly how
              <br />
              we can help.
            </h3>

            {/* contact list at bottom */}
            <div className="mt-auto pt-10 space-y-4 text-[14px] text-white/95">
              <div className="flex items-center gap-3">
                <img
                  src="./assets/Image/mail.svg"
                  alt="social icon"
                  className="w-8"
                />
                <span>support@coaching.com</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="./assets/Image/phone.svg"
                  alt="social icon"
                  className="w-8"
                />
                <span>+1 415 228 6857</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="./assets/Image/iconstime.svg"
                  alt="social icon"
                  className="w-8"
                />
                <span>Hours of Operation: 6am ET - 7pm ET</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="./assets/Image/map.svg"
                  alt="social icon"
                  className="w-8"
                />
                <span>9800 Wilshire Blvd, Beverly Hills, CA 90212</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="p-8 md:p-10 bg-white">
            <form className="space-y-6">
              {/* First + Last */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-[16px] font-semibold text-[#0F0F3D]">
                    First Name*
                  </span>
                  <input
                    type="text"
                    className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-[16px] font-semibold text-[#0F0F3D">
                    Last Name*
                  </span>
                  <input
                    type="text"
                    className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                  />
                </label>
              </div>

              {/* Email */}
              <label className="space-y-2 block">
                <span className="text-[16px] font-semibold text-[#0F0F3D">
                  Email*
                </span>
                <input
                  type="email"
                  className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                />
              </label>

              {/* Company */}
              <label className="space-y-2 block">
                <span className="text-[16px] font-semibold text-[#0F0F3D">
                  Company*
                </span>
                <input
                  type="text"
                  className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                />
              </label>

              {/* Website optional */}
              <label className="space-y-2 block">
                <span className="text-[16px] font-semibold text-[#0F0F3D">
                  Website{" "}
                  <span className="text-[11px] font-medium text-[#0F0F3D]">
                    (optional)
                  </span>
                </span>
                <input
                  type="url"
                  className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                />
              </label>

              {/* Textarea */}
              <div className="space-y-2">
                <span className="text-[16px] font-semibold text-[#0F0F3D">
                  What do you need help with?
                </span>
                <textarea
                  rows={5}
                  placeholder="Write your questions here..."
                  className="
                    w-full rounded-md border border-black/10
                    p-3 text-sm outline-none
                    focus:ring-2 focus:ring-black/5 focus:border-black/30
                  "
                />
              </div>

              {/* Multi-select list */}
              <div className="space-y-3">
                <div className="text-[16px] font-semibold text-[#0F0F3D">
                  Drop-down{" "}
                  <span className="text-[11px] font-normal text-[#0F0F3D]">
                    (Feel free to select multiple options):
                  </span>
                </div>

                <div className="space-y-2">
                  {HELP_OPTIONS.map((opt) => {
                    const active = selected.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleOption(opt)}
                        className="flex items-center gap-3 text-sm text-[#0F0F3D">
                        <span
                          className={`
                            h-4 w-4 rounded-full border
                            ${
                              active
                                ? "border-[#6C2CF5] bg-[#6C2CF5]"
                                : "border-black/25 bg-white"
                            }
                          `}
                        />
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Send button */}
              <button
                type="submit"
                className="
                  inline-flex items-center gap-2
                  bg-[#8000FF] text-white
                  px-5 py-1.5 rounded-full
                  text-sm font-medium shadow-sm
                  hover:brightness-95 transition
                ">
           
                <img src="./assets/Image/mail2-icon.svg"></img>
                Send Message
              </button>

              {/* Privacy note */}
              <p className="text-[14px] text-light text-[#0F0F3D] max-w-sm">
                All information you provide will be used in accordance with the
                terms of our{" "}
                <span className=" text-[#7844E6] text-[14px] te">
                  <a href="">privacy policy</a>
                </span>
                .
              </p>

              {/* reCAPTCHA placeholder */}
              <div className="w-[304px] h-[78px] border border-gray-300 rounded-sm flex items-center justify-between px-3 bg-[#F9F9F9] shadow-md">
              
                <label
                  htmlFor="not-a-robot"
                  className="flex items-center gap-3 text-base text-gray-800 font-normal cursor-pointer">
                  <div className="w-6 h-6 border border-gray-500 rounded-sm flex-shrink-0">
                    <input
                      type="checkbox"
                      id="not-a-robot"
                      className="appearance-none w-full h-full cursor-pointer"
                    />        
                  </div>
                  I’m not a robot
                </label>
                <div className="flex flex-col items-end text-gray-500 leading-none flex-shrink-0">
                  <img
                    src="./assets/Image/re.svg"
                    alt="reCAPTCHA logo"
                    className=" mb-[2px]"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
 <WhatToExpect/>
 <CallsAvailableNote/>
 </>
  );
};

export default LetsTalk;
