import React from 'react';

import { Heart, Globe, Users, Section, } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';

export const AboutUs: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="About Us " 
        subtitle="We founded Ethical Solar to bring transparency, quality, and integrity back to the renewable energy industry."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
      />

      <section className='container-xl py-20'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-6">
             <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Not Just Another Solar Company</h2>
             <p className="text-gray-600 md:text-lg text-base leading-relaxed">
               The solar industry has a reputation problem. Aggressive sales tactics, hidden fees, and fly-by-night installers have left many homeowners skeptical. 
             </p>
             <p className="text-gray-600 md:text-lg text-base leading-relaxed">
               **Ethical Solar** was born from a desire to change that. We believe in educating our clients, not selling them. We believe in high-quality components that last decades, not years. And we believe that renewable energy should be accessible, transparent, and truly beneficial for the planet.
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

      <section className="bg-gray-50  py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl  text-3xl font-serif text-gray-900">Our Core Values</h2>
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

      <section className='md:py-20 py-10 container-xl'>
        <div className="text-center mb-16">
          <h2 className="md:text-4xl  text-3xl font-serif text-gray-900">Meet the Leadership</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Sarah Jenkins", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" },
            { name: "David Chen", role: "Head of Engineering", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
            { name: "Elena Rodriguez", role: "Customer Success", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
            { name: "Michael Ross", role: "Lead Installer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" }
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
    </div>
  );
};