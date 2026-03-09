import React from 'react';
import { CheckCircle, Shield, Leaf, Users, Award, Clock } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';

// ─── OLD CONTENT DISABLED (do not delete) ────────────────────────────────────
// The old AboutUs sections (Not Just Another Solar Company, Our Core Values,
// Meet the Leadership) have been commented out below and replaced with the
// new content supplied by the client.
// ─────────────────────────────────────────────────────────────────────────────

export const AboutUs: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* ── Hero / Page Header ─────────────────────────────────────────── */}
      <PageHeader
        title="About Us"
        subtitle="Pioneering Australia with Integrity, Performance and Purpose"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
      />

      {/* ── Intro Section ──────────────────────────────────────────────── */}
      <section className="container-xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Pioneering Australia with Integrity, Performance and Purpose
            </h2>
            <p className="text-gray-600 md:text-lg text-base leading-relaxed">
              Ethical Solar was founded on a simple but powerful belief — that Australians deserve
              honest, high-quality solar solutions backed by real expertise and long-term support.
            </p>
            <p className="text-gray-600 md:text-lg text-base leading-relaxed">
              From day one, we have prioritised doing things the right way. That means recommending
              systems only when they make financial sense for the customer, using premium components
              that stand the test of time, and being transparent about pricing, performance, and
              expectations at every step.
            </p>
            <p className="text-gray-600 md:text-lg text-base leading-relaxed">
              We are not just installers — we are energy partners committed to helping homes and
              businesses across Australia transition to cleaner, more affordable power with
              confidence and clarity.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-100 rounded-full opacity-50 blur-3xl z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
              alt="Ethical Solar team"
              className="relative z-10 rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ── Our Commitments to Quality ─────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl text-3xl font-serif text-gray-900">
              Our Commitments to Quality
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg text-base max-w-2xl mx-auto leading-relaxed">
              Everything we do is built around delivering reliable, ethical, and long-lasting
              solar outcomes for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Premium Components Only",
                desc: "We exclusively install Tier-1 panels and inverters from manufacturers with proven track records — no budget shortcuts."
              },
              {
                icon: Award,
                title: "Certified & Experienced Installers",
                desc: "Every installation is completed by Clean Energy Council accredited professionals with extensive field experience."
              },
              {
                icon: CheckCircle,
                title: "Transparent Pricing",
                desc: "No hidden fees, no surprise add-ons. What we quote is what you pay — with full system breakdowns provided upfront."
              },
              {
                icon: Clock,
                title: "Long-Term Support",
                desc: "Our relationship doesn't end at installation. We provide ongoing monitoring, maintenance, and warranty support."
              },
              {
                icon: Leaf,
                title: "Sustainable Practices",
                desc: "We offset our operational footprint and prioritise environmentally responsible installation and disposal processes."
              },
              {
                icon: Users,
                title: "Customer-First Approach",
                desc: "We only recommend a solar system if it genuinely makes financial and practical sense for the customer's situation."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-5 text-emerald-600">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A Long-Term Energy Partner ─────────────────────────────────── */}
      <section className="container-xl py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-serif text-gray-900 mb-6">
            A Long-Term Energy Partner
          </h2>
          <p className="text-gray-600 md:text-lg text-base leading-relaxed mb-4">
            Unlike companies that disappear after the installation truck drives away, Ethical Solar
            is built for the long haul. We monitor system performance, address warranty claims
            promptly, and stay accessible when you have questions — years after your system goes live.
          </p>
          <p className="text-gray-600 md:text-lg text-base leading-relaxed">
            Whether your energy needs evolve, you want to add battery storage, or you simply want
            a system health check, our team is here. We grow with you.
          </p>
        </div>
      </section>

      {/* ── Sustainability and Transparency ────────────────────────────── */}
      <section className="bg-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="md:text-4xl text-3xl font-serif mb-6">
                Sustainability and Transparency
              </h2>
              <p className="text-emerald-100 md:text-lg text-base leading-relaxed mb-6">
                At Ethical Solar, our commitment to sustainability is not just about the energy
                we help generate — it extends to how we operate as a business every day.
              </p>
              <div className="space-y-4">
                {[
                  "Carbon-neutral operations with offset programs",
                  "50 trees planted for every system installed",
                  "Responsible recycling of all packaging and materials",
                  "Full pricing transparency — no commissions hidden in quotes",
                  "Honest performance projections modelled for your specific property",
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
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
                alt="Solar panels in the field"
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Clients Choose Ethical Solar ──────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl text-3xl font-serif text-gray-900">
              Why Clients Choose Ethical Solar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 max-w-4xl mx-auto">
            {[
              "No pushy sales tactics — ever",
              "Honest advice, even when it means recommending a smaller system",
              "Tier-1 panels and inverters with proven performance records",
              "Clean Energy Council accredited installers on every job",
              "Detailed written quotes with no hidden fees",
              "Post-installation monitoring and genuine long-term support",
              "Sustainability commitments built into operations, not just marketing",
              "Local teams who understand Australian conditions and incentives",
            ].map((reason, i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-200 last:border-0">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 text-sm md:text-base leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Team ──────────────────────────────────────────────────── */}
      <section className="container-xl py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-serif text-gray-900 mb-6">
            Our Team
          </h2>
          <p className="text-gray-600 md:text-lg text-base leading-relaxed mb-4">
            The Ethical Solar team brings together solar designers, accredited electricians,
            project managers, and customer support specialists all united by a shared commitment
            to doing solar the right way.
          </p>
          <p className="text-gray-600 md:text-lg text-base leading-relaxed">
            We hire locally, train rigorously, and hold every team member to the same standard
            of honesty and professionalism that defines our brand. When you work with Ethical Solar,
            you are working with people who genuinely care about the outcome — for you and for
            the planet.
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────
          OLD CONTENT — DISABLED (commented out, not deleted)
          ──────────────────────────────────────────────────────────────────

      OLD "Not Just Another Solar Company" section:
      <section className='container-xl py-20'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-6">
             <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Not Just Another Solar Company</h2>
             <p className="text-gray-600 md:text-lg text-base leading-relaxed">
               The solar industry has a reputation problem. Aggressive sales tactics, hidden fees, and fly-by-night installers have left many homeowners skeptical.
             </p>
             <p className="text-gray-600 md:text-lg text-base leading-relaxed">
               **Ethical Solar** was born from a desire to change that. We believe in educating our clients, not selling them.
             </p>
           </div>
           <div className="relative">
             <div className="absolute -inset-4 bg-emerald-100 rounded-full opacity-50 blur-3xl z-0"></div>
             <img
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
               alt="Team meeting"
               className="relative z-10 rounded-2xl shadow-xl"
             />
           </div>
        </div>
      </section>

      OLD "Our Core Values" section:
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl text-3xl font-serif text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-0">
            {[
              { icon: Heart, title: "Integrity First", desc: "We never recommend a system if it doesn't make financial sense for the customer." },
              { icon: Globe, title: "Sustainability", desc: "We are carbon neutral in our operations and plant 50 trees for every installation." },
              { icon: Users, title: "Community", desc: "We hire locally, train locally, and give back to local education programs." },
              { icon: Users, title: "Community", desc: "We hire locally, train locally, and give back to local education programs." }
            ].map((val, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 text-emerald-500">
                  <val.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      OLD "Meet the Leadership" section:
      <section className='md:py-20 py-10 container-xl'>
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-3xl font-serif text-gray-900">Meet the Leadership</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Sarah Jenkins", role: "CEO & Founder", img: "..." },
            { name: "David Chen", role: "Head of Engineering", img: "..." },
            { name: "Elena Rodriguez", role: "Customer Success", img: "..." },
            { name: "Michael Ross", role: "Lead Installer", img: "..." }
          ].map((person, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-xl aspect-[4/5] mx-auto max-w-[280px]">
                <img src={person.img} alt={person.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
              <p className="text-emerald-600 text-sm font-medium">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      ──────────────────────────────────────────────────────────────────── */}
    </div>
  );
};