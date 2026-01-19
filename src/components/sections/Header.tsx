"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { LANGUAGES } from "@/constants";
import i18n from "@/i18n";
import { Link } from "react-router-dom";

// Define the new types for the restructured data
type SubCategory = {
  title: string;
  description: string;
  href?: string;
};

type MegaSection = {
  title: string;
  href: string;
  subcategories: SubCategory[];
};

// Top-level nav (page urls added)
const navItems = [
  { name: "What We Do", href: "/what-we-do", megaKey: "whatWeDo" },
  { name: "Who We Create For", href: "/who-we-create-for", megaKey: "whoWeCreateFor" },
  {
    name: "Brands We Partner With",
    href: "/brands-we-partner-with",
    megaKey: "brands",
  },
  { name: "Ideas & Insights", href: "/ideas-insights", megaKey: "ideas" },
  { name: "Let's Talk", href: "/lets-talk", megaKey: "contact" },
];

// Re-defining the Mega-menu data structure
const megaMenuData: Record<
  string,
  {
    title: string;
    subtitle?: string;
    items?: {
      title: string;
      description?: string;
      cards: { title: string; description: string; href?: string }[];
    }[];
    sections?: MegaSection[]; // Used for custom layout like 'whatWeDo'
  }
> = {
  // ====================================================================
  // CUSTOM 'WHAT WE DO' MEGA MENU DATA
  // ====================================================================
  whatWeDo: {
    title: "What We Do",
    subtitle:
      "Pregled svih usluga i modela pretplate (branding, web, content, AI video). SEO: creative services, marketing subscription, branding agency Croatia.",
    sections: [
      {
        title: "Branding & Strategy",
        href: "/what-we-do/branding-strategy",
        subcategories: [
          {
            title: "Brand strategy & positioning",
            description: "Clear foundations, positioning, messaging.",
          },
          {
            title: "Visual identity",
            description: "Your brand’s visual language, modern & consistent.",
          },
          {
            title: "Packaging & Print design",
            description: "Physical brand experience design.",
          },
        ],
      },
      {
        title: "Web & Digital",
        href: "/what-we-do/web-design-development",
        subcategories: [
          {
            title: "UI/UX, web design",
            description: "Clear flows that turn visitors into clients.",
          },
          {
            title: "Web shop",
            description: "Custom e-commerce solutions.",
          },
          {
            title: "SEO & Technical structure",
            description: "Structure that helps clients (and Google) find you.",
          },
          {
            title: "Deployment",
            description: "Fast, reliable, and secure launching.",
          },
        ],
      },
      {
        title: "Content & Marketing",
        href: "/what-we-do/marketing",
        subcategories: [
          {
            title: "Content System",
            description: "Your monthly communication rhythm.",
          },
          {
            title: "Marketing strategy",
            description: "Targeted plans to drive demand.",
          },
          {
            title: "Social media, Ads, PPC",
            description: "Paid media campaigns for high conversion.",
          },
        ],
      },
      {
        title: "AI Video Production",
        href: "/what-we-do/ai-and-video",
        subcategories: [
          {
            title: "Video for Social media and Ads",
            description: "Scroll-stopping storytelling for your brand.",
          },
          {
            title: "Video for Web & Presentations",
            description: "Professional visual assets.",
          },
          {
            title: "AI powered Video production",
            description: "Efficient, scalable video creation using AI.",
          },
        ],
      },
    ],
  },

  // ====================================================================
  // REST OF THE MENU DATA (old 'items' structure)
  // ====================================================================

  

  whoWeCreateFor: {
    title: "Who We Create For",
    subtitle:
      "Niše u kojima imamo najviše iskustva – turizam, charter, zdravstvo i lokalni brendovi.",
    sections: [
      {
        title: "Tourism & Travel",
        href: "/what-we-do/branding-strategy",
        subcategories: [
          {
            title: "Core Challenges",
            description: "Clear foundations, positioning, messaging.",
          },
         
        ],
      },
      {
        title: "Yacht & Charter",
        href: "/what-we-do/web-design-development",
        subcategories: [
          {
            title: "What They Need",
            description: "Clear flows that turn visitors into clients.",
          },
          
        ],
      },
      {
        title: "Health & Beauty",
        href: "/what-we-do/marketing",
        subcategories: [
          {
            title: "Snapshot Results",
            description: "Your monthly communication rhythm.",
          },
          
        ],
      },
      {
        title: "Boutique Brands",
        href: "/what-we-do/ai-and-video",
        subcategories: [
          {
            title: "Best-Fit Plans",
            description: "Which subscription plan suits each industry.",
          },
        ],
      },
    ],
  },

  brands: {
    title: "Brands We Partner With",
    subtitle:
      "Case study sekcija; SEO: marketing results, case studies, agency portfolio.",
    items: [
      {
        title: "Case Studies",
        description:
          "Pregled suradnji i rezultata koje smo ostvarili za klijente.",
        cards: [
          {
            title: "Featured Projects",
            description:
              "Najzanimljiviji projekti – rezultati, brojke i konkretni primjeri rasta.",
            href: "/brands-we-partner-with/case-studies",
          },
        ],
      },
    ],
  },

  ideas: {
    title: "Ideas & Insights",
    subtitle:
      "Blog / resource center; SEO: marketing insights, creative strategy, content ideas.",
    items: [
      {
        title: "Insights Hub",
        description:
          "Blog i resursi: SEO, content marketing, kreativna strategija.",
        cards: [
          {
            title: "Articles",
            description:
              "Praktični vodiči i insighti o brandingu, marketingu i AI alatima.",
            href: "/ideas-insights/articles",
          },
          {
            title: "Resources",
            description:
              "Templatei, checkliste i materijali koji pomažu vašem marketing timu.",
            href: "/ideas-insights/resources",
          },
        ],
      },
    ],
  },

  contact: {
    title: "Let’s Talk",
    subtitle:
      "Kontakt / booking demo; SEO: marketing consultation, creative demo, contact agency.",
    items: [
      {
        title: "Contact & Demo",
        description:
          "Brzi kontakt, upit ili dogovor za prezentaciju rješenja i strategije.",
        cards: [
          {
            title: "Book a Free Demo",
            description:
              "Glavni poziv na akciju – kreativni demo, marketing konzultacije i free strategy call.",
            href: "/lets-talk/book-demo",
          },
        ],
      },
    ],
  },
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  // which section (Branding & Strategy, Web & Digital, etc.) is active
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    setActiveSectionIndex(0);
  }, [activeMega]);

  const currentMega = activeMega ? megaMenuData[activeMega] : null;

  const currentSections = currentMega?.sections;
  const currentActiveSection =
    currentSections && currentSections[activeSectionIndex]
      ? currentSections[activeSectionIndex]
      : null;

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div
        className="relative border-b border-gray-100"
        onMouseLeave={() => {
          setActiveMega(null);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center gap-2 text-3xl font-serif font-medium text-gray-900"
              >
                <img
                  src="../assets/Image/hrescic-logo.svg"
                  alt="Hrescic logo"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeMega === item.megaKey;
                const hasMega =
                  item.megaKey && megaMenuData[item.megaKey as string];

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onMouseEnter={() =>
                      hasMega ? setActiveMega(item.megaKey as string) : null
                    }
                    className={`group text-[14px] font-medium transition-colors relative ${
                      isActive
                        ? "text-gray-900"
                        : "text-[#555] hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                    {hasMega && (
                      <span
                        className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-200 ${
                          isActive
                            ? "w-full bg-[#6F00FF]"
                            : "w-0 bg-[#6F00FF] group-hover:w-full"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}

              {/* CTA Button */}
              <Link
                to="/lets-talk/book-demo"
                className="bg-[#6F00FF] hover:bg-[#5a00d1] text-white px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Book a Free Demo
              </Link>

              {/* Language Selector */}
              <select
                defaultValue={i18n.language}
                onChange={onChangeLang}
                className="text-sm font-medium text-gray-700 border-none border-gray-200 rounded-md px-2 py-1 bg-white focus:outline-none"
              >
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-700"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ===== Desktop Mega Menu ===== */}
        {currentMega && (
          <div className="hidden md:block absolute inset-x-0 top-full bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-10 py-8">
              {/* Heading + subtitle */}
              <div className="mb-4">
                <h2 className="text-[26px] font-semibold text-gray-900">
                  {currentMega.title}
                </h2>
                {currentMega.subtitle && (
                  <p className="mt-1 text-sm text-gray-500 max-w-xl">
                    {currentMega.subtitle}
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6" />

              {/* If this mega has 'sections', use the What-We-Do style layout (tabs left + cards right) */}
              {currentMega.sections ? (
                <div className="flex items-stretch gap-10">
                  {/* LEFT COLUMN: MAIN CATEGORIES */}
                  <div className="w-64 flex-shrink-0 pr-4">
                    <div className="flex flex-col space-y-1">
                      {currentMega.sections.map((section, idx) => {
                        const isSelected = idx === activeSectionIndex;
                        return (
                          <button
                            key={section.title}
                            type="button"
                            onMouseEnter={() => setActiveSectionIndex(idx)}
                            className={`w-full text-left text-base font-bold py-3 px-4 rounded-md transition-all ${
                              isSelected
                                ? "bg-[#6F00FF] text-white shadow-sm"
                                : "text-gray-900 hover:bg-gray-50"
                            }`}
                          >
                            {section.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Vertical divider */}
                  <div className="w-px bg-gray-200" />

                  {/* RIGHT COLUMN: SUBCATEGORIES */}
                  <div className="flex-1 pl-6">
                    {currentActiveSection ? (
                      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                        {currentActiveSection.subcategories.map((sub) => {
                          const href = sub.href ?? currentActiveSection.href;

                          // first letter for the circular badge (B / V / P etc.)
                          const badgeLetter = sub.title.charAt(0);

                          return (
                            <Link
                              key={sub.title}
                              to={href}
                              className="group relative flex items-start gap-3 p-4 rounded-lg transition-all duration-200 bg-transparent hover:bg-[#f6f7f9]"
                            >
                              {/* Left purple bar on hover */}
                              <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-transparent group-hover:bg-[#6F00FF]" />

                              {/* Circular badge */}
                              <div className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-[11px] font-semibold text-gray-500 group-hover:border-[#6F00FF] group-hover:text-[#6F00FF]">
                                {badgeLetter}
                              </div>

                              {/* Text content */}
                              <div className="relative z-10">
                                <h4 className="text-[15px] font-semibold text-gray-900 group-hover:text-[#6F00FF]">
                                  {sub.title}
                                </h4>
                                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        Select a core service on the left to see subcategories.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                // Default Menu structure for other items (cards grid)
                currentMega.items && (
                  <div className="flex items-stretch">
                    <div className="w-full">
                      {currentMega.items.map((section) => (
                        <div key={section.title} className="mb-6">
                          <h3 className="text-sm font-semibold uppercase text-[#6F00FF] mb-3">
                            {section.title}
                          </h3>
                          <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                            {section.cards.map((card) => {
                              const href = card.href ?? "#";
                              return (
                                <Link
                                  key={card.title}
                                  to={href}
                                  className="group flex flex-col p-3 rounded-md hover:bg-[#F4F5F7] transition-colors"
                                >
                                  <h4 className="text-[15px] font-semibold text-gray-900 group-hover:text-[#6F00FF]">
                                    {card.title}
                                  </h4>
                                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                                    {card.description}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* ===== Mobile Menu ===== */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white w-full absolute ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/lets-talk/book-demo"
              onClick={() => setMobileOpen(false)}
              className="bg-[#6F00FF] hover:bg-[#8000FF] text-white w-full py-3 rounded-full text-sm font-medium text-center transition-all"
            >
              Book a Free Demo
            </Link>

            <select
              defaultValue={i18n.language}
              onChange={onChangeLang}
              className="text-sm font-medium text-gray-700 border-none border-gray-200 rounded-md px-2 py-1 bg-white focus:outline-none"
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;