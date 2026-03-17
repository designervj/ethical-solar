"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  q: string;
  a: string;
}

const FAQItem: React.FC<FAQProps> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 bg-white px-6 shadow rounded-md mb-4">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group bg-white"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm md:text-lg font-medium text-gray-900 pr-8 group-hover:text-emerald-600 transition-colors">
          {q}
        </span>
        {open ? (
          <ChevronUp className="text-emerald-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

interface CommercialFAQProps {
  faqs: { q: string; a: string }[];
}

export const CommercialFAQ: React.FC<CommercialFAQProps> = ({ faqs }) => {
  return (
    <div className="divide-y divide-gray-100">
      {faqs.map((faq, i) => (
        <FAQItem key={i} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
};
