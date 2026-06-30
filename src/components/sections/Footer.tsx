import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

type FooterLinkProps = { href: string; children: React.ReactNode };
const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-[#cfd8dc] text-[16px] transition hover:text-[#e5e7eb] hover:pl-1 font-medium"
    >
      {children}
    </Link>
  </li>
);

const FooterHeading: React.FC<{ title: string }> = ({ title }) => (
  <h4 className="text-white text-[1.1rem] font-bold mb-6 tracking-wide">{title}</h4>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(90deg,_var(--gradient-start)_0%,_var(--gradient-end)_100%)] text-white border-t-4 border-accent px-[5%] pt-20 pb-8 font-sans">
      <div className="pointer-events-none absolute -top-12 -right-[10%] h-[700px] w-[700px] opacity-[0.15] z-[1]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <linearGradient id="themeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#005C97" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--primary-hover)" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M 50 0 A 50 50 0 0 1 100 50" fill="none" stroke="url(#themeGrad)" strokeWidth="2" />
          <path d="M 60 0 A 60 60 0 0 1 120 60" fill="none" stroke="url(#themeGrad)" strokeWidth="15" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-[2] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="mb-5 md:flex lg:flex items-center gap-3 justify-center">
          <img src="../assets/Image/ethical-solor-logo.svg" alt="Ethical Solar logo" className="h-24 w-auto" />
        </div>

        <div className="md:ps-10">
          <FooterHeading title="Quick Links" />
          <ul className="space-y-3">
            {exploreLinks.slice(0, 4).map((l) => (
              <FooterLink key={l.label} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading title="Contact" />
          <div className="space-y-3 text-[0.95rem] text-[#fff]">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
              <span className="text-[#cfd8dc]">
                Suite No. 1562,<br /> 17 Gould Road<br />
                Herston 4006<br />
                QLD, Australia
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
              <a href="tel:+61-1300686595" className="text-[#cfd8dc] hover:text-accent">
                <span>(+61) 1300 686 595</span>
              </a>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
              <a href="mailto:info@ethicalsolar.com.au" className="text-[#cfd8dc] hover:text-accent">
                <span>info@ethicalsolar.com.au</span>
              </a>
            </p>
          </div>
        </div>

        <div>
          <div className="rounded-xl border border-accent/30 bg-white/[0.03] p-5 text-center">
            <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-accent/15 grid place-items-center">
              <span className="text-accent text-xl font-black">✓</span>
            </div>
            <span className="block font-bold text-white mb-1">SAA Accredited Installer</span>
            <span className="block text-[0.8rem] text-[#cfd8dc] leading-snug">
              Service area - South East Queensland (SEQ)
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-[2] mt-14 pt-5 border-t border-white/10 text-center text-[0.85rem] text-[#cfd8dc]">
        <span className="hidden md:block mt-2">
          &copy; 2026 Ethical Solar Pty Ltd. All rights reserved.
          ABN: 13 670 165 938
        </span>
        <span className="block md:hidden">
          &copy; 2026 Ethical Solar Pty Ltd. All rights reserved.
          <br/>ABN: 13 670 165 938
        </span>
        <span className="mt-2 inline-block text-[13px]">
          <a href="#" className="text-[#cfd8dc] hover:text-accent">Privacy Policy</a>
          &nbsp;|&nbsp;
          <a href="#" className="text-[#cfd8dc] hover:text-accent">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
