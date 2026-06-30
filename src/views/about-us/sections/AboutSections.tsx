"use client";

import React from "react";
import { CheckCircle, Shield, Leaf, Users, Award, Clock } from "lucide-react";

export function AboutHero({ heading, paragraphs, image }: any) {
  return (
    <section className="container-xl py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-xl md:text-3xl font-serif text-gray-900">{heading}</h2>
          {paragraphs.map((p: string, i: number) => (
            <p key={i} className="text-gray-600 md:text-md text-base leading-relaxed">{p}</p>
          ))}
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-100 rounded-full opacity-50 blur-3xl z-0"></div>
          <img src={image} alt="About Us" className="relative z-10 rounded-2xl shadow-xl" />
        </div>
      </div>
    </section>
  );
}

const iconMap: Record<string, any> = {
  Shield: Shield,
  Award: Award,
  CheckCircle: CheckCircle,
  Clock: Clock,
  Leaf: Leaf,
  Users: Users
};

export function AboutCommitments({ heading, subheading, items }: any) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-3xl font-serif text-gray-900">{heading}</h2>
          <p className="mt-4 text-gray-600 md:text-lg text-base max-w-2xl mx-auto leading-relaxed">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item: any, i: number) => {
            const Icon = iconMap[item.icon] || CheckCircle;
            return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-5 text-emerald-600">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutLongTerm({ heading, description }: any) {
  const paragraphs = Array.isArray(description) ? description : (description ? [description] : []);
  return (
    <section className="container-xl py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-serif text-gray-900 mb-6">{heading}</h2>
        {paragraphs.map((p: string, i: number) => (
          <p key={i} className="text-gray-600 md:text-lg text-base leading-relaxed mb-4">{p}</p>
        ))}
      </div>
    </section>
  );
}

export function AboutSustainability({ heading, description, points, image }: any) {
  return (
    <section className="bg-emerald-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="md:text-4xl text-3xl font-serif mb-6">{heading}</h2>
            <p className="text-emerald-100 md:text-lg text-base leading-relaxed mb-6">{description}</p>
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
            <img src={image} alt="Sustainability" className="relative z-10 rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutWhyChoose({ heading, reasons }: any) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-3xl font-serif text-gray-900">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 max-w-4xl mx-auto">
          {reasons.map((reason: string, i: number) => (
            <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-200 last:border-0">
              <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={20} />
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutTeam({ heading, description }: any) {
  const paragraphs = Array.isArray(description) ? description : (description ? [description] : []);
  return (
    <section className="container-xl py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-serif text-gray-900 mb-6">{heading}</h2>
        {paragraphs.map((p: string, i: number) => (
          <p key={i} className="text-gray-600 md:text-lg text-base leading-relaxed mb-4">{p}</p>
        ))}
      </div>
    </section>
  );
}
