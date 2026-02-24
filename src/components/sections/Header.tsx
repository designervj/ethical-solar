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
  { name: "Home ", href: "/", megaKey: "whatWeDo" },
  { name: "Residential", href: "/residential", megaKey: "whoWeCreateFor" },
  {
    name: "Commercial",
    href: "/commercial",
    megaKey: "brands",
  },
  // { name: "Blog", href: "/blog", megaKey: "ideas" },

  { name: "About Us", href: "/about-us", megaKey: "about" },

  { name: "Contact us", href: "/contact-us", megaKey: "contact" },
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


  // ====================================================================
  // REST OF THE MENU DATA (old 'items' structure)
  // ====================================================================

  







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
    <header className="sticky top-0 z-50 w-full  bg-[#050B2F] ">
      {/* bg-[linear-gradient(90deg,_#23469B_0%,_#26A187_100%)] */}
      <div
        className="relative "
        onMouseLeave={() => {
          setActiveMega(null);
        }}
      >
        <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center gap-2 text-3xl font-serif font-medium text-white "
              >
                <img
                  src="../assets/Image/ethicalsolar-logo.svg"
                  // src="../assets/Image/ethical-solar-logo.svg"
                  alt="Ethical Solar logo"
                  className="md:h-14 h-12 w-auto"
                />

                {/* <h3 className="text-white">ETHICAL SOLAR</h3> */}
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
                    className={`group text-[16px] font-medium transition-colors relative ${
                      isActive
                        ? "text-[#f4f4f4]"
                        : "text-[#fff] hover:text-[#fff]"
                    }`}
                  >
                    {item.name}
                    {hasMega && (
                      <span
                        className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-200 ${
                          isActive
                            ? "w-full bg-[#3ccb7f]"
                            : "w-0 bg-[#3ccb7f] group-hover:w-full"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}

              {/* CTA Button */}
              <Link
                to="/contact-us"
                className="bg-[#3ccb7f] hover:bg-[#23499b] text-white px-6 py-3 rounded-full text-sm font-medium transition-all"
              >

                Get a Quote
              </Link>

              {/* Language Selector */}
              {/* <select
                defaultValue={i18n.language}
                onChange={onChangeLang}
                className="text-sm font-medium text-gray-700 border-none border-gray-200 rounded-md px-2 py-1 bg-white focus:outline-none"
              >
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select> */}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white"
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
                                ? "bg-[#3ccb7f] text-white shadow-sm"
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
                              <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-transparent group-hover:bg-[#3ccb7f]" />

                              {/* Circular badge */}
                              <div className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-[11px] font-semibold text-gray-500 group-hover:border-[#0e7090] group-hover:text-[#0e7090]">
                                {badgeLetter}
                              </div>

                              {/* Text content */}
                              <div className="relative z-10">
                                <h4 className="text-[15px] font-semibold text-gray-900 group-hover:text-[#0e7090]">
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
                          <h3 className="text-sm font-semibold uppercase text-[#0e7090] mb-3">
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
                                  <h4 className="text-[15px] font-semibold text-gray-900 group-hover:text-[#0e7090]">
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
          <nav className="flex flex-col px-4 pt-4 pb-6 space-y-4">
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
              className="bg-[#3ccb7f] hover:bg-[#0e7090] text-white w-full py-3 rounded-full text-sm font-medium text-center transition-all"
            >
              Book a Free Demo
            </Link>
{/* 
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
            </select> */}
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;