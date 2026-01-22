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
  { label: "Home", href: "#" },
  { label: "Residentia", href: "#" },
  { label: "Residentia", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },

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
    href: "tel:+38591xxxxxxx",
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

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-[#cfd8dc] text-[0.95rem] transition hover:text-[#2AF598] hover:pl-1"
    >
      {children}
    </a>
  </li>
);

type FooterHeadingProps = {
  title: string;
};

const FooterHeading: React.FC<FooterHeadingProps> = ({ title }) => (
  <h4 className="text-white text-[1.1rem] font-bold mb-6 tracking-wide">
    {title}
  </h4>
);

const IconPillLink: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="h-10 w-10 rounded-full grid place-items-center bg-white/10 text-white
               transition hover:-translate-y-[3px] hover:bg-[#2AF598] hover:text-[#00305a]"
  >
    {children}
  </a>
);

/* ---------- FOOTER ---------- */

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#00305a] text-white border-t-4 border-[#2AF598] px-[5%] pt-20 pb-8 font-sans">
      {/* Arc */}
      <div className="pointer-events-none absolute -top-12 -right-[10%] h-[700px] w-[700px] opacity-[0.15] z-[1]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <linearGradient id="themeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#005C97" stopOpacity="1" />
              <stop offset="100%" stopColor="#2AF598" stopOpacity="1" />
            </linearGradient>
          </defs>

          <path
            d="M 50 0 A 50 50 0 0 1 100 50"
            fill="none"
            stroke="url(#themeGrad)"
            strokeWidth="2"
          />
          <path
            d="M 60 0 A 60 60 0 0 1 120 60"
            fill="none"
            stroke="url(#themeGrad)"
            strokeWidth="15"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* CTA Row */}
      <div className="relative z-[2] flex flex-col items-start gap-5 border-b border-white/10 pb-12 mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-semibold tracking-tight leading-[1.15] text-[2rem] md:text-[2.8rem]">
            Start Saving with <br />
            Ethical Solar
          </h2>
        </div>

        <div>
          <a
            href="#contact-section"
            className="inline-block rounded-full px-8 py-4 text-white font-semibold text-base
                       bg-[linear-gradient(90deg,_#00b09b_0%,_#0088cc_100%)]
                       shadow-[0_4px_15px_rgba(0,176,155,0.30)]
                       transition-transform hover:-translate-y-[3px]
                       hover:shadow-[0_6px_20px_rgba(0,176,155,0.50)]"
          >
            Get Commercial Quote
          </a>
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative z-[2] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-[1.8rem] font-semibold mb-5">
            Ethical <span className="text-[#2AF598]">Solar</span>
          </h3>

          <div className="space-y-3 text-[0.95rem] text-[#cfd8dc]">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[#00b09b]" />
              <span>123 Green St, Melbourne VIC 3000</span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-[#00b09b]" />
              <span>(03) 9000 1234</span>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-[#00b09b]" />
              <span>info@ethicalsolar.com.au</span>
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            {socialIcons.map(({ icon: Icon, href, name }) => (
              <IconPillLink key={name} href={href} label={name}>
                <Icon className="h-5 w-5" />
              </IconPillLink>
            ))}
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <FooterHeading title="Solutions" />
          <ul className="space-y-3">
            <FooterLink href="#">Residential Solar</FooterLink>
            <FooterLink href="#">Commercial Solar</FooterLink>
            <FooterLink href="#">Battery Storage</FooterLink>
            <FooterLink href="#">Virtual Power Plant</FooterLink>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <FooterHeading title="Company" />
          <ul className="space-y-3">
            {exploreLinks.slice(0, 4).map((l) => (
              <FooterLink key={l.label} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </ul>
        </div>

        {/* Connect / Accreditation */}
        <div>
          <FooterHeading title="Accreditation" />
          <div className="rounded-xl border border-[#2AF598]/30 bg-white/[0.03] p-5 text-center">
            <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-[#2AF598]/15 grid place-items-center">
              <span className="text-[#2AF598] text-xl font-black">✓</span>
            </div>
            <span className="block font-bold text-white mb-1">CEC Accredited</span>
            <span className="block text-[0.8rem] text-[#cfd8dc] leading-snug">
              Approved Solar Retailer
              <br />
              Australia Wide
            </span>
          </div>

          {/* Optional: show connect details list under badge */}
          {/* <ul className="mt-6 space-y-3 text-[#cfd8dc]">
            {connectDetails.map(({ icon: Icon, value, href }) => (
              <li key={value}>
                <a
                  href={href}
                  className="flex items-center gap-3 text-[0.95rem] hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5 text-[#00b09b]" />
                  <span>{value}</span>
                </a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-[2] mt-14 pt-5 border-t border-white/10 text-center text-[0.85rem] text-[#cfd8dc]">
        &copy; 2026 Ethical Solar Pty Ltd. All rights reserved. ABN: 12 345 678
        901.
        <br />
        <span className="mt-2 inline-block text-[13px]">
          <a href="#" className="text-[#cfd8dc] hover:text-[#2AF598]">
            Privacy Policy
          </a>
          &nbsp;|&nbsp;
          <a href="#" className="text-[#cfd8dc] hover:text-[#2AF598]">
            Terms of Service
          </a>
        </span>
      </div>
    </footer>
  );
};

/* ---------- PAGE / APP ---------- */

const App: React.FC = () => {
  return (
    <div
      className="relative  text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(2,24,20,0.15) 0%, rgba(2,24,20,0.75) 40%, rgba(1,10,8,0.98) 85%), url('https://static.vecteezy.com/system/resources/previews/007/359/627/non_2x/close-up-of-businessman-hands-pointing-at-turnover-graph-while-discussing-it-on-wooden-desk-with-pen-in-meeting-room-business-financial-working-concept-business-people-pointing-at-business-document-free-photo.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col ">
        {/* Hero */}
        {/* <header className="flex-1 flex items-center justify-center pt-20 pb-16">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl mx-auto">
              Creatives that keep your brand live and kicking.
            </h1>
            <button className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-[#6F00FF] text-white shadow-md hover:bg-[#5a00d1] transition-colors">
              Book a demo
            </button>
          </div>
        </header> */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
