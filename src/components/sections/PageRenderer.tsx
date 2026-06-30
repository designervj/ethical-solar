import React from "react";
import Hero from "@/components/sections/Hero";
import SliderBrand from "@/components/sections/SliderBrand";
import WhatWeDoSection from "@/components/sections/What-be-do/WhatWeDoSection";
import LetsTalk from "@/components/sections/LetsTalkPages/LetsTalk";
import OurServicesSection from "@/components/sections/OurServices/OurServicesSection";
import WhoWeBuildForSection from "@/components/sections/WhoWeBuildFor/WhoWeBuildForSection";
import OurWork from "@/components/sections/OurWork";
import AboutStrip from "@/views/about-us/sections/AboutStrip";
import CTASection from "@/components/sections/CTASection";

import { PageHeader } from "@/components/ui/PageHeader";
import { AboutHero, AboutCommitments, AboutLongTerm, AboutSustainability, AboutWhyChoose, AboutTeam } from "@/views/about-us/sections/AboutSections";
import { BlogGrid } from "@/views/blog/sections/BlogSections";
import { CommercialServices, CommercialProcess, CommercialBattery, CommercialPanels, CommercialFinance, FAQSection } from "@/views/commercial/sections/CommercialSections";
import { ResidentialHero, ResidentialBenefits, ResidentialHowItWorks, ResidentialMaintenance, ResidentialProcess } from "@/views/residential/sections/ResidentialSections";
import { ContactOptions, ContactForm, ContactMap } from "@/views/contact-us/sections/ContactSections";

import { PageBlock } from "@/lib/data/pageLoader";

interface PageRendererProps {
  sections: PageBlock[];
}

export default function PageRenderer({ sections }: PageRendererProps) {
  return (
    <>
      {sections.map((section) => {
        switch (section.type) {
          case "page-header":
            return <PageHeader key={section.id} {...(section.props as any)} />;
          case "hero":
            return <Hero key={section.id} {...(section.props as any)} />;
          case "slider-brand":
            return <SliderBrand key={section.id} {...(section.props as any)} />;
          case "what-we-do":
            return <WhatWeDoSection key={section.id} {...(section.props as any)} />;
          case "who-we-build-for":
            return <WhoWeBuildForSection key={section.id} {...(section.props as any)} />;
          case "lets-talk":
            return <LetsTalk key={section.id} {...(section.props as any)} />;
             case "our-work":
            return <OurWork key={section.id} {...(section.props as any)} />;
          case "our-services":
            return <OurServicesSection key={section.id} {...(section.props as any)} />;
         
          case "about-strip":
            return <AboutStrip key={section.id} {...(section.props as any)} />;
          case "cta-section":
            return <CTASection key={section.id} {...(section.props as any)} />;
          case "about-hero":
            return <AboutHero key={section.id} {...(section.props as any)} />;
          case "about-commitments":
            return <AboutCommitments key={section.id} {...(section.props as any)} />;
          case "about-long-term":
            return <AboutLongTerm key={section.id} {...(section.props as any)} />;
          case "about-sustainability":
            return <AboutSustainability key={section.id} {...(section.props as any)} />;
          case "about-why-choose":
            return <AboutWhyChoose key={section.id} {...(section.props as any)} />;
          case "blog-grid":
            return <BlogGrid key={section.id} {...(section.props as any)} />;
          case "about-team":
            return <AboutTeam key={section.id} {...(section.props as any)} />;

          case "commercial-services":
            return <CommercialServices key={section.id} {...(section.props as any)} />;
          case "commercial-process":
            return <CommercialProcess key={section.id} {...(section.props as any)} />;
          case "commercial-battery":
            return <CommercialBattery key={section.id} {...(section.props as any)} />;
          case "commercial-panels":
            return <CommercialPanels key={section.id} {...(section.props as any)} />;
          case "commercial-finance":
            return <CommercialFinance key={section.id} {...(section.props as any)} />;
          case "faq-section":
            return <FAQSection key={section.id} {...(section.props as any)} />;

          case "residential-hero":
            return <ResidentialHero key={section.id} {...(section.props as any)} />;
          case "residential-benefits":
            return <ResidentialBenefits key={section.id} {...(section.props as any)} />;
          case "residential-how-it-works":
            return <ResidentialHowItWorks key={section.id} {...(section.props as any)} />;
          case "residential-maintenance":
            return <ResidentialMaintenance key={section.id} {...(section.props as any)} />;
          case "residential-process":
            return <ResidentialProcess key={section.id} {...(section.props as any)} />;

          case "contact-options":
            return <ContactOptions key={section.id} {...(section.props as any)} />;
          case "contact-form":
            return <ContactForm key={section.id} {...(section.props as any)} />;
          case "contact-map":
            return <ContactMap key={section.id} {...(section.props as any)} />;

          default:
            return (
              <div key={section.id} style={{ color: 'red' }}>
                Unknown section type: {section.type}
              </div>
            );
        }
      })}
    </>
  );
}
