import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactUs/ContactForm";

// ─── CHANGED: Updated contact option cards with correct phone + email ─────────
const contactOptions = [
  {
    icon: "☀️",
    title: "Interested in Solar?",
    desc: "Get a free quote and custom design for your home or business.",
    linkText: "Call 1300 686 595",
    href: "tel:1300686595",
  },
  {
    icon: "🔧",
    title: "Customer Support",
    desc: "Already an Ethical Solar customer? We are here to assist.",
    linkText: "nick@ethicalsolar.com.au",
    href: "mailto:nick@ethicalsolar.com.au",
  },
  {
    icon: "🤝",
    title: "Partnerships",
    desc: "Builders, architects, and roofers. Let's work together.",
    linkText: "nick@ethicalsolar.com.au",
    href: "mailto:nick@ethicalsolar.com.au",
  },
];

const LetsTalk: React.FC = () => {

  return (
    <>
      <PageHeader
        title="Let's Start a Conversation"
        subtitle="Whether you're curious about solar savings or need support for an existing system — we're here to help."
        backgroundImage="/assets/img/img (7).jpg"
      />

      {/* CONTACT OPTIONS (3 cards) */}
      <section className="relative">
        <div className="container-xl mx-auto px-4">
          <div className="-mt-16 md:-mt-20 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((opt) => (
              <div
                key={opt.title}
                className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.10)] p-8 text-center border-b-4 border-transparent hover:-translate-y-1 hover:border-[#2AF598] transition"
              >
                <div className="text-4xl mb-4">{opt.icon}</div>
                <h3 className="text-[#00305a] text-xl font-semibold mb-2">
                  {opt.title}
                </h3>
                <p className="text-[#666] mb-4">{opt.desc}</p>
                <a
                  href={opt.href}
                  className="text-[#005C97] font-semibold underline underline-offset-4"
                >
                  {opt.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-14 items-start">

            {/* LEFT: DETAILS */}
            <div>
              <div className="mb-6">
                <div className="text-[#005C97] font-semibold tracking-[0.2em] text-xs uppercase mb-3">
                  Get In Touch
                </div>
                <h3 className="text-[#00305a] text-2xl md:text-3xl font-semibold mb-3">
                  Visit Our Office
                </h3>
                {/* CHANGED: updated hours */}
                <p className="text-[#555]">
                  Our energy consultants are available Monday through Friday,
                  9:00 AM to 5:00 PM.
                </p>
              </div>

              <div className="space-y-5">
                {/* CHANGED: 3-line address format */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#00305a] mb-1">
                      Head Office
                    </div>
                    <div className="text-[#666] leading-relaxed">
                      Suite No. 1562, 17 Gould Road<br />
                      Herston 4006<br />
                      QLD, Australia
                    </div>
                  </div>
                </div>

                {/* CHANGED: email → nick@ethicalsolar.com.au */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#00305a] mb-1">
                      Email Us
                    </div>
                    <a
                      className="text-[#666] hover:text-[#00b09b] transition"
                      href="mailto:nick@ethicalsolar.com.au"
                    >
                      nick@ethicalsolar.com.au
                    </a>
                  </div>
                </div>

                {/* CHANGED: fixed phone href to actual number */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#00305a] mb-1">
                      Call Us
                    </div>
                    <a
                      className="text-[#666] hover:text-[#00b09b] transition"
                      href="tel:1300686595"
                    >
                      1300 686 595
                    </a>
                  </div>
                </div>

                {/* CHANGED: hours updated to 9am–5pm Mon–Fri, Saturday by appointment */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#f8fbfe] grid place-items-center text-[#005C97]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#00305a] mb-1">
                      Business Hours
                    </div>
                    <div className="text-[#666]">Mon–Fri, 9:00 AM – 5:00 PM</div>
                    <div className="text-[#666]">Saturday by appointment only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CHANGED: Map updated to Brisbane/Herston QLD location */}
      <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 h-[400px] md:max-w-7xl md:mx-auto mb-20 md:px-0 mx-4">
        <iframe
          title="Ethical Solar Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.877534867624!2d153.0253!3d-27.4552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9159b1e3a5a7af%3A0x6fe36c2870d2eb7a!2sHerston%20QLD%204006%2C%20Australia!5e0!3m2!1sen!2sau!4v1709225844039!5m2!1sen!2sau"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>

      {/* <WhatToExpect />
      <CallsAvailableNote /> */}
    </>
  );
};

export default LetsTalk;

// ─── OLD CODE — DISABLED (do not delete) ──────────────────────────────────────
//
// Removed: HelpOption type, HELP_OPTIONS array, upload state (id, inputRef,
//          fileName, handlePick, handleChange), bill upload JSX block.
//
// OLD contactOptions had wrong phone/email:
// { linkText: "Call 1-800-ETHICAL", href: "tel:18003844225" }
// { linkText: "support@ethicalsolar.com", href: "mailto:support@ethicalsolar.com" }
// { linkText: "partners@ethicalsolar.com", href: "mailto:partners@ethicalsolar.com" }
//
// OLD phone href: "tel:+911234567890" (India number — fixed to 1300686595)
// OLD phone placeholder: "(+91) 98765 43210" (fixed to "04XX XXX XXX")
// OLD postcode placeholder: "302020" (fixed to "e.g. 4000")
// OLD hours: Mon–Fri 9–6PM, Sat 9–1PM (fixed to 9–5PM, Sat by appointment only)
// OLD email: info@ethicalsolar.com.au (updated to nick@ethicalsolar.com.au)
// OLD map: Jaipur, Rajasthan (fixed to Herston, Brisbane QLD)
// OLD address format: not 3-line (fixed to 3 separate lines)
// ──────────────────────────────────────────────────────────────────────────────
