"use client";

import React from "react";
import { DollarSign, ShieldCheck, Award, Home, Leaf, Sun, Zap, Battery, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeHero({ title, highlight, description, formTitle, formSubtitle }: any) {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
          alt="Home Solar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="text-xs font-bold tracking-widest uppercase">Home Solar</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              {title} <br /><span className="text-emerald-400">{highlight}</span>
            </h1>
            <p className="md:text-xl text-base text-gray-200 font-light max-w-xl leading-relaxed">
              {description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
              <div className="text-white mb-6">
                <h3 className="text-2xl font-serif">{formTitle}</h3>
                <p className="text-sm text-gray-300">{formSubtitle}</p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                </div>
                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                <input type="text" placeholder="Post Code" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 text-gray-500 appearance-none">
                    <option>Average Electric Bill</option>
                    <option>$100 - $150</option>
                    <option>$150 - $250</option>
                    <option>$250+</option>
                  </select>
                </div>
                <div className="pt-2">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/30">
                    Get a solar assessment
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const benefitIconMap: Record<string, any> = { DollarSign, ShieldCheck, Home, Leaf };

export function HomeBenefits({ heading, description, benefits, incentives }: any) {
  return (
    <section className="bg-white py-20 md:px-0 px-4">
      <div className="container-xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-2 block">Benefits</span>
          <h2 className="md:text-4xl text-3xl font-serif text-gray-900 mb-6">{heading}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.slice(0, 2).map((benefit: any, i: number) => {
            const Icon = benefitIconMap[benefit.icon] || Home;
            return (
              <div key={i} className="group bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-2xl p-8 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="text-emerald-700" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
          
          <div className="group md:col-span-2 bg-emerald-900 rounded-2xl p-8 md:p-10 transition-all duration-300 bg-[linear-gradient(90deg,_#23469B_0%,_#26A187_100%)]">
            <div className="flex flex-col md:flex-row md:gap-10 gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center mb-5">
                  <Award className="text-emerald-200" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{incentives.title}</h3>
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">{incentives.subtitle}</p>
              </div>
              <div className="space-y-4 md:border-l md:border-emerald-700 md:pl-10">
                {incentives.points.map((p: string, i: number) => (
                  <p key={i} className="text-white text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: p}} />
                ))}
              </div>
            </div>
          </div>

          {benefits.slice(2).map((benefit: any, i: number) => {
            const Icon = benefitIconMap[benefit.icon] || Home;
            return (
              <div key={i} className="group bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-2xl p-8 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="text-emerald-700" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const worksIconMap: Record<string, any> = { Sun, Zap, Battery, ShieldCheck };

export function HomeHowItWorks({ heading, description, steps }: any) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-xl">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-3xl font-serif text-gray-900 mb-4">{heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step: any, i: number) => {
            const Icon = worksIconMap[step.icon] || Sun;
            return (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeMaintenance({ heading, items }: any) {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="container-xl">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-3xl font-serif mb-6 text-gray-800">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {items.map((item: any, i: number) => {
            const Icon = item.icon === "Calendar" ? Calendar : Settings;
            return (
              <div key={i} className="flex md:gap-6 gap-4 items-start">
                <div className="bg-white p-3 rounded-xl shadow">
                  <Icon className="w-8 h-8 text-[#00305a]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ProcessStep = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="flex gap-6 relative group">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-serif font-bold text-xl z-10 relative group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
      {number}
    </div>
    <div className="pb-12 border-l-2 border-gray-100 -ml-[48px] pl-16 group-last:border-0 group-last:pb-0">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export function HomeProcess({ heading, description, steps }: any) {
  return (
    <section className="bg-white py-20 md:px-0 px-4">
      <div className="container-xl"></div>
      <div className="max-w-4xl mx-auto pe-8 md:px-0">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-3xl font-serif mb-4 text-gray-800">{heading}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="space-y-2 md:border-l-2 border-emerald-100 ml-6 md:pl-8 relative">
          {steps.map((step: any, i: number) => (
            <ProcessStep key={i} number={step.number} title={step.title} desc={step.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
