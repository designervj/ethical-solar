import LetsTalk from '@/components/sections/LetsTalkPages/LetsTalk'
import CTASection from '@/components/sections/CTASection'
import { PageHeader } from '@/components/ui/PageHeader'
import { Battery, CheckCircle, ShieldCheck, Sun, Zap } from 'lucide-react'
import React from 'react'
import { CommercialFAQ } from '@/components/sections/Commercial/CommercialFAQ'

const Commercial = () => {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <PageHeader
        title="Commercial Solar Solutions"
        subtitle="Powering Australian Businesses with Smart Energy"
        description="At Ethical Solar, we deliver high-performance commercial solar systems designed to reduce operating costs, improve sustainability outcomes, and protect businesses from rising electricity prices. From small enterprises to large industrial facilities, we provide tailored solar and battery solutions that deliver measurable financial returns. Future-proof your business with intelligent energy solutions."
        buttonText="Request a Commercial Energy Assessment"
        buttonLink="/contact-us"
        backgroundImage="/assets/img/img (3).jpg"
      />

      {/* ── Our Services: Tailored Commercial Solar Options ───────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container-xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored Commercial Solar Options — we design, supply, and install systems for
              all types of commercial properties across South East Queensland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Sun,
                color: "bg-yellow-100 text-yellow-600",
                title: "Rooftop Commercial Solar",
                desc: "Flat or pitched rooftop systems designed for offices, retail centres, schools, and industrial buildings. We maximise available roof space to deliver the highest energy output for your footprint.",
                bullets: ["Custom system design per roof type", "Tier-1 panels and commercial-grade inverters", "Grid-connected and hybrid options available"],
              },
              {
                icon: Zap,
                color: "bg-blue-100 text-blue-600",
                title: "Carport Solar Structures",
                desc: "Solar carports combine covered parking with energy generation — turning underused car parks into productive assets. Ideal for shopping centres, hospitals, councils, and large employers.",
                bullets: ["Dual function: shelter + solar generation", "Custom structural engineering included", "EV charging integration available"],
              },
              {
                icon: Battery,
                color: "bg-red-100 text-red-500",
                title: "Ground Mount Systems",
                desc: "For properties with available land, ground-mounted systems offer flexibility in orientation and scale. Suitable for farms, large industrial estates, and rural businesses.",
                bullets: ["No roof constraints — optimise for full sun", "Large-scale capacity available", "Suitable for rural and semi-rural properties"],
              },
              {
                icon: ShieldCheck,
                color: "bg-emerald-100 text-emerald-600",
                title: "Warehouse & Industrial Solar",
                desc: "Large roof areas on warehouses and industrial facilities are ideal for high-capacity solar. We design systems to match your operational load profile and energy usage patterns.",
                bullets: ["High-capacity systems from 30 kW to 1 MW+", "Designed around your operational load profile", "Reduce peak demand charges significantly"],
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commercial Solar Order Process ────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container-xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Commercial Solar Order Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A transparent, step-by-step process from initial inquiry through to system handover and ongoing monitoring.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Initial Consultation & Energy Audit",
                desc: "We review your electricity bills, operational hours, and energy goals to establish the right system size. A site walkthrough is arranged at no cost.",
              },
              {
                step: "02",
                title: "System Design & Proposal",
                desc: "Our engineers produce a custom system design with full financial modelling — including expected savings, payback period, and ROI projections. No obligations.",
              },
              {
                step: "03",
                title: "Approvals & Permitting",
                desc: "We manage all council approvals, network applications, and grid connection paperwork. You will not be chasing permits — we handle it completely.",
              },
              {
                step: "04",
                title: "Professional Installation",
                desc: "Our CEC-accredited installation teams complete the project with minimal disruption to your business operations. All work is inspected and signed off by a licensed electrician.",
              },
              {
                step: "05",
                title: "Commissioning & Monitoring Setup",
                desc: "Your system is commissioned, tested, and connected to our monitoring platform. You'll receive clear training on how to track production and savings in real time.",
              },
              {
                step: "06",
                title: "Ongoing Support & Maintenance",
                desc: "We provide scheduled maintenance checks, performance reviews, and reactive support throughout the life of your system. Long-term energy partners — not just installers.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Battery & Battery Integration ─────────────────────────────── */}
      <section className="bg-emerald-900 text-white py-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Battery & Battery Integration</h2>
              <p className="text-emerald-100 text-lg leading-relaxed mb-6">
                A commercial solar system paired with battery storage delivers maximum financial
                benefit. Store solar energy generated during the day and deploy it during peak
                tariff periods — reducing your demand charges and improving energy independence.
              </p>
              <div className="space-y-4">
                {[
                  "Reduce peak demand charges significantly",
                  "Store excess solar for after-hours use",
                  "Backup power for critical operations during outages",
                  "Compatible with all major commercial battery brands",
                  "Scalable capacity — expand storage as your needs grow",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-300 mt-0.5 shrink-0" size={20} />
                    <span className="text-emerald-100 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-700 rounded-full opacity-40 blur-3xl z-0"></div>
              <img
                src="/assets/Image/battery-solar-img.png"
                alt="Battery storage system"
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Commercial Solar Panels ───────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="container-xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Commercial Solar Panels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We exclusively source Tier-1 panels from manufacturers with proven 25-year track records,
              independent testing certifications, and strong Australian warranty support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                brand: "Q CELLS",
                detail: "Q.PEAK DUO BLK ML-G10+ series — high efficiency monocrystalline panels with anti-LID and anti-LeTID technology. German-engineered, proven in Australian conditions.",
              },
              {
                brand: "REC Group",
                detail: "REC Alpha series — twin peak solar cell design delivering up to 405 W output. Excellent low-light performance with a 25-year all-inclusive product warranty.",
              },
              {
                brand: "Jinko Solar",
                detail: "Tiger Neo series — n-type TOPCon technology with class-leading efficiency above 22%. Rigorous quality control and strong local warranty support in Australia.",
              },
            ].map((panel, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-5">
                  <Sun className="text-emerald-600" size={20} />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-3">{panel.brand}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{panel.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Finance Case for Commercial Solar ─────────────────────── */}
      <section className="bg-white py-20">
        <div className="container-xl">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-10 md:p-14 shadow">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                The Finance Case for Commercial Solar
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Commercial solar is one of the highest-returning capital investments available to
                Australian businesses today. With electricity prices continuing to rise, locking
                in your own generation cost provides long-term certainty in your operating expenses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 bg-white rounded-2xl border border-gray-100 mb-8">
                {[
                  { stat: "4–7 years", label: "Typical payback period for commercial systems" },
                  { stat: "25+ years", label: "Expected operational life of quality solar panels" },
                  { stat: "30–60%", label: "Average reduction in commercial electricity bills" },
                ].map((item, i) => (
                  <div key={i} className="text-center py-8 px-6">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{item.stat}</div>
                    <div className="text-gray-500 text-sm leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Government Small-scale Technology Certificates (STCs) and Large-scale Generation
                Certificates (LGCs) reduce upfront costs further. Commercial finance options —
                including chattel mortgage, operating leases, and power purchase agreements (PPAs) —
                are available to suit your business structure and cash flow requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ────────────────────────────────── */}
      <section className="bg-gray-100 py-20 md:px-0 px-6">
        <div className="md:max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="md:text-4xl text-3xl text-gray-800 font-serif mb-4 
">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Common questions from business owners considering commercial solar.
            </p>
          </div>
          <CommercialFAQ faqs={[
            {
              q: "How much can a commercial solar system save my business?",
              a: "Savings depend on your system size, energy usage, and feed-in tariff rates. Most commercial customers see a 30–60% reduction in electricity bills, with full payback typically achieved within 4–7 years.",
            },
            {
              q: "Do we need to shut operations down during installation?",
              a: "In most cases, no. Our installation teams are experienced in working around active business operations. We schedule work to minimise any disruption to your day-to-day activities.",
            },
            {
              q: "What size system does my business need?",
              a: "System size is determined by your energy consumption, roof or ground space available, and budget. We conduct a detailed energy audit and site assessment to recommend a correctly sized system.",
            },
            {
              q: "Are there government incentives available for commercial solar?",
              a: "Yes. The Small-scale Renewable Energy Scheme (SRES) and Large-scale Generation Certificates (LGCs) are available depending on system size. We assist with all applicable incentive applications.",
            },
            {
              q: "What warranties come with a commercial solar install?",
              a: "Our commercial systems include up to 25-year product and performance warranties on panels, 10-year inverter warranties, and a 10-year workmanship warranty on all installations carried out by Ethical Solar.",
            },
          ]} />
        </div>
      </section>

      {/* ── Let's Talk form ───────────────────────────────────────────── */}
      <LetsTalk />

      <CTASection />

      {/* ────────────────────────────────────────────────────────────────────
          OLD CONTENT — DISABLED (do not delete)
          ──────────────────────────────────────────────────────────────────

      OLD "How Solar Works" section (4 generic cards — Sun/Zap/Battery/ShieldCheck):
      <section className="bg-gray-50 py-20">
        <div className="container-xl">
          <div className="text-center mb-16">
            <h2>How Solar Works</h2>
            <p>Understanding your system is the first step to energy independence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            Card 1 — Solar Panels (Enphase/SolarEdge)
            Card 2 — Solar Inverters
            Card 3 — Power Outages?
            Card 4 — Solar + Battery
          </div>
        </div>
      </section>

      OLD "Our Residential Projects" gallery (8 unsplash images, photo grid):
      <section className="bg-gray-100">
        <div className="container-xl py-20">
          <h2>Our Residential Projects</h2>
          ... 8-image grid ...
        </div>
      </section>

      OLD blogPosts array and "Latest from the Blog" section (2 commented-out versions) removed.

      ──────────────────────────────────────────────────────────────────── */}
    </>
  )
}

export default Commercial
