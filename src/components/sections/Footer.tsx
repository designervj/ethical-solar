"use client";

import React from "react";
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

/* ---------- DATA ---------- */

// Explore links
const exploreLinks = [
  { label: "What We Do", href: "#" },
  { label: "Who We Create For", href: "#" },
  { label: "Brands We Partner With", href: "#" },
  { label: "Ideas & Insights", href: "#" },
  { label: "Let’s Talk", href: "#" },
];

// Connect details
const connectDetails = [
  {
    icon: Mail,
    value: "tea@hrescic.com",
    href: "mailto:tea@hrescic.com",
  },
  {
    icon: Phone,
    value: "+385 (0)91 xxx xxxx",
    href: "tel:+38591xxxxxxx", // update with real number when ready
  },
  {
    icon: MapPin,
    value: "Zagreb, Croatia",
    href: "#",
  },
];

// Social icons
const socialIcons = [
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Youtube, href: "#", name: "YouTube" },
];

/* ---------- REUSABLE COMPONENTS ---------- */

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="hover:text-white transition-colors duration-300 text-base"
    >
      {children}
    </a>
  </li>
);

interface FooterHeadingProps {
  title: string;
}

const FooterHeading: React.FC<FooterHeadingProps> = ({ title }) => (
  <h6 className="text-white mb-3 flex items-center text-lg font-semibold">
    {title}
  </h6>
);

/* ---------- FOOTER ---------- */

const Footer: React.FC = () => {
  return (
    <footer className="text-slate-200 pt-10 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        {/* Brand signature */}
        {/* <div className="mb-12 flex gap-2">
          <h5 className="text-xl font-bold text-white mb-1">hrescic.com</h5>
          <p className="text-slate-300/80 text-lg">
            — Creatives that keep your brand live&amp;kicking.
          </p>
        </div> */}

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Explore */}
          <div className="md:col-span-2">
            <FooterHeading title="Explore" />
            <ul className="space-y-1.5">
              {exploreLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <FooterHeading title="Connect" />
            <ul className="space-y-3">
              {connectDetails.map((item) => (
                <li key={item.value}>
                  <a
                    href={item.href}
                    className="flex items-start hover:text-white transition-colors text-base"
                  >
                    <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="md:col-span-1">
            <FooterHeading title="Follow" />
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-slate-300/80 hover:text-white transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-slate-300/80">
          <div className="flex flex-col gap-1">
            <p className="text-base">
              © 2025 Hreščić.com. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs md:text-sm">
            <p className="text-base italic">
              Made with strategy, storytelling &amp; strong coffee in Samobor. ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ---------- PAGE / APP ---------- */

const App: React.FC = () => {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(2,24,20,0.15) 0%, rgba(2,24,20,0.75) 40%, rgba(1,10,8,0.98) 85%), url('https://static.vecteezy.com/system/resources/previews/007/359/627/non_2x/close-up-of-businessman-hands-pointing-at-turnover-graph-while-discussing-it-on-wooden-desk-with-pen-in-meeting-room-business-financial-working-concept-business-people-pointing-at-business-document-free-photo.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col min-h-screen">
        {/* Hero */}
        <header className="flex-1 flex items-center justify-center pt-20 pb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl mx-auto">
              {/* <span>Your </span>
              <span className="italic font-serif">creative team’s</span>
              <br />
              <span>creative team™</span> */}
              Creatives that keep your brand live and kicking.
            </h1>
            <button className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-[#6F00FF] text-white shadow-md hover:bg-[#5a00d1] transition-colors">
              Book a demo
            </button>
          </div>
        </header>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
