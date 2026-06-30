"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactOptions({ options }: any) {
  return (
    <section className="relative">
      <div className="container-xl mx-auto px-4">
        <div className="-mt-16 md:-mt-20 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt: any) => (
            <div
              key={opt.title}
              className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.10)] p-8 text-center border-b-4 border-transparent hover:-translate-y-1 hover:border-[#2AF598] transition"
            >
              <div className="text-4xl mb-4">{opt.icon}</div>
              <h3 className="text-[#00305a] text-xl font-semibold mb-2">{opt.title}</h3>
              <p className="text-[#666] mb-4">{opt.desc}</p>
              <a href={opt.href} className="text-[#005C97] font-semibold underline underline-offset-4">
                {opt.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactForm({ addressInfo }: any) {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="mb-6">
              <div className="text-[#005C97] font-semibold tracking-[0.2em] text-xs uppercase mb-3">{addressInfo.subtitle}</div>
              <h3 className="text-[#00305a] text-2xl md:text-3xl font-semibold mb-3">{addressInfo.title}</h3>
              <p className="text-[#555]">{addressInfo.description}</p>
            </div>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#00305a] mb-1">Head Office</div>
                  <div className="text-[#666] leading-relaxed" dangerouslySetInnerHTML={{__html: addressInfo.address}} />
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#00305a] mb-1">Email Us</div>
                  <a className="text-[#666] hover:text-[#00b09b] transition" href={`mailto:${addressInfo.email}`}>{addressInfo.email}</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#00305a] mb-1">Call Us</div>
                  <a className="text-[#666] hover:text-[#00b09b] transition" href={`tel:${addressInfo.phone}`}>{addressInfo.phoneLabel || addressInfo.phone}</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#00305a] mb-1">Business Hours</div>
                  {addressInfo.hours.map((line: string, i: number) => (
                    <div key={i} className="text-[#666]">{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            id="contact-section"
            className="bg-white rounded-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,92,151,0.05)] p-7 md:p-10"
          >
            <h3 className="text-[#00305a] text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-[15px] font-semibold text-[#00305a]">First Name*</span>
                  <input required type="text" placeholder="John" className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40" />
                </label>
                <label className="space-y-2">
                  <span className="text-[15px] font-semibold text-[#00305a]">Last Name*</span>
                  <input required type="text" placeholder="Doe" className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40" />
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-[15px] font-semibold text-[#00305a]">Email*</span>
                  <input required type="email" placeholder="john@example.com" className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40" />
                </label>
                <label className="space-y-2">
                  <span className="text-[15px] font-semibold text-[#00305a]">Phone*</span>
                  <input required type="tel" placeholder="04XX XXX XXX" className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40" />
                </label>
              </div>
              <label className="space-y-2 block">
                <span className="text-[15px] font-semibold text-[#00305a]">Postcode</span>
                <input required type="text" placeholder="e.g. 4000" className="w-full border-b border-black/15 py-2 text-sm outline-none focus:border-black/40" />
              </label>
              <div className="space-y-2">
                <span className="text-[15px] font-semibold text-[#00305a]">How can we help?</span>
                <textarea
                  rows={5}
                  placeholder="Tell us about your energy needs..."
                  className="w-full rounded-xl border border-black/10 p-3 text-sm outline-none focus:ring-2 focus:ring-[#2AF598]/20 focus:border-[#2AF598]"
                />
              </div>
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
  );
}

export function ContactMap({ embedUrl }: any) {
  return (
    <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 h-[400px] md:max-w-7xl md:mx-auto mb-20 md:px-0 mx-4">
      <iframe
        src={embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
