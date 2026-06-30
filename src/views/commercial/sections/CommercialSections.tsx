"use client";

import React, { useState } from "react";
import { CheckCircle, Sun, Zap, Battery, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

const iconMap: Record<string, any> = {
  Sun: Sun,
  Zap: Zap,
  Battery: Battery,
  ShieldCheck: ShieldCheck
};

export function CommercialServices({ heading, subheading, services }: any) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">{heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service: any, i: number) => {
            const Icon = iconMap[service.icon] || CheckCircle;
            return (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-emerald-100 text-emerald-600`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.bullets.map((b: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CommercialProcess({ heading, subheading, steps }: any) {
  return (
    <section className="bg-white py-20">
      <div className="container-xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">{heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step: any, i: number) => (
            <div key={i} className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">{step.step}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommercialBattery({ heading, description, points, image }: any) {
  return (
    <section className="bg-emerald-900 text-white py-20">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6">{heading}</h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-6">{description}</p>
            <div className="space-y-4">
              {points.map((point: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-300 mt-0.5 shrink-0" size={20} />
                  <span className="text-emerald-100 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-700 rounded-full opacity-40 blur-3xl z-0"></div>
            <img src={image} alt="Battery storage system" className="relative z-10 rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommercialPanels({ heading, subheading, panels }: any) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">{heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {panels.map((panel: any, i: number) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-5">
                <Sun className="text-emerald-600" size={20} />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">{panel.brand}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{panel.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommercialFinance({ heading, description, stats }: any) {
  return (
    <section className="bg-white py-20">
      <div className="container-xl">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-10 md:p-14 shadow">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">{heading}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 bg-white rounded-2xl border border-gray-100 mb-8">
              {stats.map((item: any, i: number) => (
                <div key={i} className="text-center py-8 px-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{item.stat}</div>
                  <div className="text-gray-500 text-sm leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQ: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 bg-white px-6 shadow rounded-md mb-4">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group bg-white"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm md:text-lg font-medium text-gray-900 pr-8 group-hover:text-emerald-600 transition-colors">{q}</span>
        {open ? <ChevronUp className="text-emerald-500 flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

export function FAQSection({ heading, subheading, faqs }: any) {
  return (
    <section className="bg-gray-100 py-20 md:px-0 px-6">
      <div className="md:max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-3xl text-gray-800 font-serif mb-4">{heading}</h2>
          <p className="text-gray-600">{subheading}</p>
        </div>
        <div className="divide-y divide-gray-100">
          {faqs.map((faq: any, i: number) => (
            <FAQ key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
