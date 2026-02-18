"use client";

import React, { useId, useRef, useState } from "react";
import CallsAvailableNote from "@/components/sections/LetsTalkPages/CallsAvailableNote";
import WhatToExpect from "@/components/sections/LetsTalkPages/WhatToExpect";
import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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

const contactOptions = [
  {
    icon: "☀️",
    title: "Interested in Solar?",
    desc: "Get a free quote and custom design for your home or business.",
    linkText: "Call 1-800-ETHICAL",
    href: "tel:18003844225",
  },
  {
    icon: "🔧",
    title: "Customer Support",
    desc: "Already an Ethical Solar customer? We are here to assist.",
    linkText: "support@ethicalsolar.com",
    href: "mailto:support@ethicalsolar.com",
  },
  {
    icon: "🤝",
    title: "Partnerships",
    desc: "Builders, architects, and roofers. Let's work together.",
    linkText: "partners@ethicalsolar.com",
    href: "mailto:partners@ethicalsolar.com",
  },
];

const LetsTalk: React.FC = () => {
  // Help options (chips)
  const [selected, setSelected] = useState<HelpOption[]>([]);
  const toggleOption = (opt: HelpOption) => {
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  // Upload
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("No file chosen");

  const accept = "application/pdf,image/*";
  const multiple = false;

  const handlePick = () => inputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setFileName("No file chosen");
      return;
    }
    setFileName(multiple ? `${files.length} file(s) selected` : files[0].name);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // hook your API here
  };

  return (
    <>
      <PageHeader
        title="Let's Start a Conversation"
        subtitle="Whether you’re curious about solar savings or need support for an existing system — we’re here to help."
        backgroundImage="/assets/img/img (7).jpg"
      />

      {/* CONTACT OPTIONS (3 cards) */}
      <section className="relative">
        <div className="container-xl mx-auto px-4">
          <div className="-mt-16 md:-mt-20 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((opt) => (
              <div
                key={opt.title}
                className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.10)] p-8 text-center border-b-4 border-transparent hover:-translate-y-1 hover:border-[#2AF598] transition"
              >
                <div className="text-4xl mb-4">{opt.icon}</div>
                <h3 className="text-[#00305a] text-xl font-semibold mb-2">
                  {opt.title}
                </h3>
                <p className="text-[#666] mb-4">{opt.desc}</p>
                <a
                  href={opt.href}
                  className="text-[#005C97] font-semibold underline underline-offset-4"
                >
                  {opt.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-14 items-start">
            {/* LEFT: DETAILS + MAP */}
            <div>
              <div className="mb-6">
                <div className="text-[#005C97] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
                  Get In Touch
                </div>
                <h3 className="text-[#00305a] text-2xl md:text-3xl font-semibold mb-3">
                  Visit Our HQ
                </h3>
                <p className="text-[#555]">
                  Our energy consultants are available Monday through Friday,
                  9:00 AM to 6:00 PM.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#00305a] mb-1">
                      Head Office
                    </div>
                    <div className="text-[#666]">
                      Suite No. 1562
                      ,17 Gould Road
                      <br />
                      Herston 4006
                      QLD, Australia
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#00305a] mb-1">
                      Email Us
                    </div>
                    <a
                      className="text-[#666] hover:text-[#00b09b] transition"
                      href="mailto:hello@ethicalsolar.com"
                    >
                      info@ethicalsolar.com.au
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#00305a] mb-1">
                      Call Us
                    </div>
                    <a
                      className="text-[#666] hover:text-[#00b09b] transition"
                      href="tel:+911234567890"
                    >
                      1300 686 595
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#00305a] mb-1">
                      Business Hours
                    </div>
                    <div className="text-[#666]">Mon–Fri, 9:00 AM – 5:00 PM</div>
                    <div className="text-[#666]">Sat, 9:00 AM – 1:00 PM</div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT: FORM (your design + upload) */}
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
                      placeholder="(+91) 98765 43210"
                      className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                    />
                  </label>
                </div>

                {/* Zip */}
                <label className="space-y-2 block">
                  <span className="text-[15px] font-semibold text-[#00305a]">
                    Postcode
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="302020"
                    className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40"
                  />
                </label>

                {/* Interested in */}
                {/* <label className="space-y-2 block">
                  <span className="text-[15px] font-semibold text-[#00305a]">
                    I'm interested in...
                  </span>
                  <select className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2AF598]/20 focus:border-[#2AF598]">
                    <option value="Residential">Residential Solar Quote</option>
                    <option value="commercial">Commercial/Business Solar</option>
                    <option value="support">Service & Support</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </label> */}

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

                {/* Upload */}
                <div className="w-full rounded-2xl bg-slate-900 px-6 py-5">
                  <label
                    htmlFor={id}
                    className="block text-white text-md font-medium mb-4"
                  >
                    Upload your electric bill (optional)
                  </label>

                  <div className="flex items-center gap-4 flex-wrap">
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
                      className="inline-flex items-center justify-center px-7 py-2 rounded-full border border-white text-white font-medium text-md hover:bg-white/10 active:scale-[0.99] transition"
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
                  className="inline-flex items-center gap-2 bg-[#3ccb7f] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:brightness-95 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>



              <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 h-[400px] md:max-w-7xl md:mx-auto mb-20 md:px-0 mx-4">
                <iframe
                  title="Ethical Solar Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.62634130436578!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1709225844039!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 "
                  allowFullScreen
                />
              </div>

      {/* <WhatToExpect />
      <CallsAvailableNote /> */}
    </>
  );
};

export default LetsTalk;
