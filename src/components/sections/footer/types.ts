import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export type SocialIcon = {
  icon: React.ElementType;
  href: string;
  name: string;
};

// Explore links
export const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  // { label: "Blog", href: "#" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

// Connect details
export const connectDetails = [
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

// Social icons — CHANGED: LinkedIn removed from whole website
export const socialIcons: SocialIcon[] = [
  // { icon: Linkedin, href: "#", name: "LinkedIn" }, // REMOVED per client request
  // { icon: Instagram, href: "#", name: "Instagram" },
  // { icon: Youtube, href: "#", name: "YouTube" },
];
