"use client";

import React, { useId, useRef, useState } from "react";
import WhatToExpect from "./WhatToExpect";
import CallsAvailableNote from "./CallsAvailableNote";
import CommericalForm from "./CommericalForm";

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
      <section className="w-full bg-white py-10 md:py-20">
        <div className="container-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
            {/* LEFT PURPLE PANEL */}
            <div className="bg-[linear-gradient(90deg,_#23469B_0%,_#26A187_100%)] text-white p-8 md:p-10 flex flex-col min-h-[520px] rounded-[20px] md:w-1/3">
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
                  <span>info@ethicalsolar.com.au</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="./assets/Image/phone.svg"
                    alt="phone"
                    className="w-8"
                  />
                  <span> 1300686595</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="./assets/Image/iconstime.svg"
                    alt="time"
                    className="w-8"
                  />
                  <div className="grid">
                  <span>Hours of Operation: </span>
                  <span>9 am - 5 pm  AEST Mon- Fri</span>
                  <span>9 am to 1 pm Sat</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="./assets/Image/map.svg"
                    alt="map"
                    className="w-8"
                  />
                  <span>Suite No. 1562,
                   17 Gould Road
                   Herston 4006 QLD AU
</span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM PANEL */}
            <CommericalForm/>
          </div>
        </div>
      </section>

      {/* <WhatToExpect />
      <CallsAvailableNote /> */}
    </>
  );
};

export default LetsTalk;
