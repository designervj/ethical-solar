"use client";

import React, { useId, useRef, useState } from "react";
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

  // -------- Upload (Choose file) state --------
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("No file chosen");

  const accept = undefined; // e.g. "application/pdf,image/*"
  const multiple = false;
  const label = "Upload your electric bill (optional)";

  const handlePick = () => inputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      setFileName("No file chosen");
      return;
    }

    if (multiple) {
      setFileName(`${files.length} file(s) selected`);
    } else {
      setFileName(files[0].name);
    }
  };

  return (
    <>
      <section className="w-full bg-white py-10 md:py-20">
        <div className="container-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
            {/* LEFT PURPLE PANEL */}
            <div className="bg-[linear-gradient(90deg,_#23469B_0%,_#26A187_100%)] text-white p-8 md:p-10 flex flex-col min-h-[520px] rounded-[20px] w-1/3">
              <div>
                <h4 className="text-xl font-semibold">
                  Get a free solar assessment
                </h4>
              </div>

              <p className="mt-8 text-sm md:text-lg font-regular leading-snug">
                We’ll create a custom model of your home, and show you how solar
                looks, what it will cost, and what solar incentives are
                available.
              </p>

              {/* contact list at bottom */}
              <div className="mt-auto pt-10 space-y-4 text-[14px] text-white/95">
                <div className="flex items-center gap-3">
                  <img
                    src="./assets/Image/mail.svg"
                    alt="mail"
                    className="w-8"
                  />
                  <span>support@coaching.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="./assets/Image/phone.svg"
                    alt="phone"
                    className="w-8"
                  />
                  <span>+1 415 228 6857</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="./assets/Image/iconstime.svg"
                    alt="time"
                    className="w-8"
                  />
                  <span>Hours of Operation: 6am ET - 7pm ET</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="./assets/Image/map.svg"
                    alt="map"
                    className="w-8"
                  />
                  <span>9800 Wilshire Blvd, Beverly Hills, CA 90212</span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="p-8 md:p-10 bg-white w-2/3">
              <form className="space-y-6">
                {/* First + Email */}
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

                  <label className="space-y-2 block">
                    <span className="text-[16px] font-semibold text-[#0F0F3D]">
                      Email*
                    </span>
                    <input
                      type="email"
                      className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                    />
                  </label>
                </div>

                {/* Zip */}
                <label className="space-y-2 block">
                  <span className="text-[16px] font-semibold text-[#0F0F3D]">
                    Zip*
                  </span>
                  <input
                    type="text"
                    className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                  />
                </label>

                {/* Message */}
                <div className="space-y-2">
                  <span className="text-[16px] font-semibold text-[#0F0F3D]">
                    Message
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

                {/* Upload (same UI as your image) */}
                <div className="w-full rounded-xl bg-slate-900 px-6 py-5" style={{marginTop:"10px"}}>
                  <label
                    htmlFor={id}
                    className="block text-white text-md font-medium mb-4"
                  >
                    {label}
                  </label>

                  <div className="flex items-center gap-6">
                    <input
                      id={id}
                      ref={inputRef}
                      type="file"
                      accept={accept}
                      multiple={multiple}
                      onChange={handleChange}
                      className="hidden"
                    />

                    <button
                      type="button"
                      onClick={handlePick}
                      className="inline-flex items-center justify-center px-8 py-2 rounded-full border border-white text-white font-medium text-md hover:bg-white/10 active:scale-[0.99] transition"
                    >
                      Choose file
                    </button>

                    <span className="text-white text-md font-medium">
                      {fileName}
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    inline-flex items-center gap-2 bg-[#3ccb7f] text-white  px-5 py-3 rounded-full
                    text-sm font-medium shadow-sm
                    hover:brightness-95 transition
                  "
                >
                  <img
                    src="./assets/Image/mail2-icon.svg"
                    alt="send"
                    className="w-5 h-5"
                  />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <WhatToExpect />
      <CallsAvailableNote /> */}
    </>
  );
};

export default LetsTalk;
