"use client";

import React, { useId, useRef, useState } from "react";

const LetsTalk: React.FC = () => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (opt: string) => {
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const handlePick = () => inputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setFileName("No file chosen");
      return;
    }
    setFileName(files[0].name);
  };

  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="container-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
          <div className="bg-gradient-to-r from-secondary to-primary-light text-white p-8 md:p-10 flex flex-col min-h-[520px] rounded-[20px] md:w-1/3">
            <div>
              <h4 className="text-xl font-semibold">Get a free solar assessment</h4>
            </div>
            <p className="mt-8 text-[13px] md:text-[14px] font-regular text-white leading-relaxed">
              We&apos;ll create a custom model of your home, and show you how solar looks, what it will cost, and what solar incentives are available.
            </p>
            <div className="mt-auto pt-10 space-y-4 text-[14px] text-white/95">
              <div className="flex items-center gap-3">
                <img src="/assets/Image/mail.svg" alt="mail" className="w-8 shrink-0" />
                <span>info@ethicalsolar.com.au</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/assets/Image/phone.svg" alt="phone" className="w-8 shrink-0" />
                <span>(+61) 1300686595</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/assets/Image/iconstime.svg" alt="time" className="w-8 shrink-0" />
                <div className="grid">
                  <span>Hours of Operation:</span>
                  <span className="font-semibold tracking-wide">Mon – Fri: <span className="font-normal">9:00 AM – 5:00 PM (AEST)</span></span>
                  <span className="font-semibold tracking-wide">Sat: <span className="font-normal">9:00 AM – 1:00 PM</span></span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="/assets/Image/map.svg" alt="map" className="w-8 shrink-0" />
                <span>Suite No. 1562,<br />17 Gould Road<br />Herston 4006<br />QLD, Australia</span>
              </div>
            </div>
          </div>

          <div className="px-0 py-8 md:p-10 bg-white md:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-[16px] font-semibold text-text">First Name*</span>
                  <input
                    type="text"
                    placeholder="Jhon"
                    className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                  />
                </label>
                <label className="space-y-2 block">
                  <span className="text-[16px] font-semibold text-text">Email*</span>
                  <input
                    type="email"
                    placeholder="Jhon@example.com"
                    className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                  />
                </label>
              </div>
              <label className="space-y-2 block">
                <span className="text-[16px] font-semibold text-text">Postcode</span>
                <input
                  type="text"
                  placeholder="e.g. 4000"
                  className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                />
              </label>
              <div className="space-y-2">
                <span className="text-[16px] font-semibold text-text">Message</span>
                <textarea
                  rows={5}
                  placeholder="Write your questions here..."
                  className="w-full rounded-md border border-black/10 p-3 text-sm outline-none focus:ring-2 focus:ring-black/5 focus:border-black/30"
                />
              </div>
              <div className="w-full rounded-xl bg-slate-900 px-6 py-5" style={{ marginTop: "10px" }}>
                <label htmlFor={id} className="block text-white md:text-md text-sm font-medium mb-4">
                  Upload your electric bill (optional)
                </label>
                <div className="flex items-center gap-6">
                  <input
                    id={id}
                    ref={inputRef}
                    type="file"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={handlePick}
                    className="inline-flex items-center justify-center md:px-8 px-4 py-2 rounded-full border border-white text-white font-medium md:text-md text-sm hover:bg-white/10 active:scale-[0.99] transition"
                  >
                    Choose file
                  </button>
                  <span className="text-white md:text-md text-sm font-medium">{fileName}</span>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-3 rounded-full text-sm font-medium shadow-sm hover:brightness-95 transition"
              >
                <img src="/assets/Image/mail2-icon.svg" alt="send" className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
