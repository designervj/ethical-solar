"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 bg-white px-6 shadow rounded-md mb-4">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm md:text-lg font-medium text-gray-900 pr-8 group-hover:text-emerald-600 transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="text-emerald-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const ResidentialFAQ: React.FC = () => {
  return (
    <div className="divide-y divide-gray-100">
      <FAQItem
        question="How much does residential solar cost in Australia?"
        answer="System prices vary depending on size and equipment, but after government incentives, most systems are far more affordable than people expect."
      />
      <FAQItem
        question="How long do solar panels last?"
        answer="Most panels come with 25-year performance warranties and often last even longer."
      />
      <FAQItem
        question="What happens on cloudy days?"
        answer="Solar systems still generate electricity in cloudy weather — just at reduced output."
      />
      <FAQItem
        question="Is a battery worth it?"
        answer="Batteries are ideal for households wanting energy independence, blackout protection, and maximum savings from their solar system."
      />
      <FAQItem
        question="How long until I see savings?"
        answer="Most homeowners notice reduced electricity bills immediately after installation."
      />
    </div>
  );
};
