import React, { useState } from 'react';

import { 
  CheckCircle, DollarSign, Leaf, Sun, Battery, 
  Zap, ChevronDown, ChevronUp, ShieldCheck, 
  Settings, Calendar, FileText, Award,
  ArrowRight, Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/sections/CTASection';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 pr-8 group-hover:text-emerald-600 transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-emerald-500 flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const ProcessStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="flex gap-6 relative group">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-serif font-bold text-xl z-10 relative group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
      {number}
    </div>
    <div className="pb-12 border-l-2 border-gray-100 ml-[-2.25rem] pl-16 group-last:border-0 group-last:pb-0">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const Residential: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero section with Form */}
      <div className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" 
            alt="Residential Solar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-white space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                 <div className="flex text-yellow-400 gap-0.5">
                   {[1,2,3,4,5].map(i => <Sun key={i} size={14} fill="currentColor" />)}
                 </div>
                 <span className="text-xs font-bold tracking-widest uppercase">Top Rated Solar Installer</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                Let's put solar <br/><span className="text-emerald-400">on your home.</span>
              </h1>
              <p className="text-xl text-gray-200 font-light max-w-xl leading-relaxed">
                We've been designing, selling, and installing high-quality solar on homes in Virginia for over a decade. Experience the difference of ethical energy.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                 <div className="h-12 bg-white/90 px-4 flex items-center rounded-lg shadow-lg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Better_Business_Bureau_logo.svg/1200px-Better_Business_Bureau_logo.svg.png" className="h-6 w-auto" alt="BBB" />
                 </div>
                 <div className="h-12 bg-white/90 px-4 flex items-center rounded-lg shadow-lg gap-2">
                    <Award className="text-gray-800 w-5 h-5" />
                    <span className="font-bold text-gray-900 text-xs tracking-wide">NABCEP CERTIFIED</span>
                 </div>
              </div>
            </div>

            {/* Hero Form */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
                <div className="text-white mb-6">
                   <h3 className="text-2xl font-serif">Get a Free Assessment</h3>
                   <p className="text-sm text-gray-300">Custom design and savings estimate.</p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                  </div>
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                  <input type="text" placeholder="Zip Code" className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 text-gray-900" />
                  
                  <div className="relative">
                     <select className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 focus:ring-2 focus:ring-emerald-400 text-gray-500 appearance-none">
                        <option>Average Electric Bill</option>
                        <option>$100 - $150</option>
                        <option>$150 - $250</option>
                        <option>$250+</option>
                     </select>
                     <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/30">
                        Get a solar assessment
                    </Button>
                  </div>
                  <p className="text-center text-xs text-gray-300 mt-2">Your information is safe with us.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Go Solar */}
      <section className="bg-white py-20">
        <div  className='container-xl'>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-2 block">Benefits</span>
          <h2 className="text-4xl font-serif text-gray-900 mb-6">Why Go Solar?</h2>
          <p className="text-gray-600">Switching to solar isn't just about saving money; it's about investing in your home's future and the planet.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group text-center px-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto bg-emerald-50 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center text-emerald-600 mb-8 shadow-sm">
              <DollarSign size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4">Lower Your Electricity Bills</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Federal Investment Tax Credit (ITC) offers homeowners a 30% credit. Projects begin paying for themselves immediately through monthly savings.
            </p>
            <a href="#" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                See savings calculator <ArrowRight size={16} />
            </a>
          </div>
          <div className="group text-center px-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto bg-blue-50 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center text-brand-blue mb-8 shadow-sm">
              <Home size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4">Increase Your Home's Value</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Homes with solar sell faster and for more money. Studies show an increase in property value by up to 4.1% compared to non-solar homes.
            </p>
            <a href="#" className="text-brand-blue font-medium hover:text-blue-700 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                Read the study <ArrowRight size={16} />
            </a>
          </div>
          <div className="group text-center px-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto bg-yellow-50 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center text-yellow-600 mb-8 shadow-sm">
              <Leaf size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4">Help the Planet Out</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Reduce your carbon footprint immediately. Rooftop solar generates clean electricity without emissions, noise, or water use.
            </p>
            <a href="#" className="text-yellow-600 font-medium hover:text-yellow-700 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                Maximize impact <ArrowRight size={16} />
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* How Solar Works - 2x2 Grid */}
      <section className="bg-gray-50 py-20">
         <div  className='container-xl'>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">How Solar Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Understanding your system is the first step to energy independence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 text-yellow-600">
                    <Sun size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3">1. Solar Panels</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        When sunlight hits your panels, they generate DC electricity. Even on cloudy days, your system produces power. Excess energy flows back to the grid for credits (Net Metering).
                    </p>
                    <Button className="text-xs">Learn about Net Metering</Button>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Zap size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3">2. Solar Inverters</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        The inverter is the heart of the system, converting DC power to usable AC power for your home. We use premium Enphase microinverters or SolarEdge optimizers for maximum efficiency.
                    </p>
                    <Button className="text-xs">View Technology</Button>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-500">
                    <Battery size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3">3. Power Outages?</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Standard grid-tied systems shut off during outages for safety. To keep lights on during a blackout, you need a battery backup solution integrated with your solar.
                    </p>
                </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <ShieldCheck size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3">4. Solar + Battery</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Batteries store excess solar energy for use at night or during outages. We design systems that power your essential appliances (fridges, lights, wifi) indefinitely.
                    </p>
                    <Button className="text-xs">Explore Batteries</Button>
                </div>
            </div>
        </div>
        </div>
      </section>

      {/* Roof vs Ground */}
      <section className='py-20'>
         <div className='container-xl'>

        <div className="text-center mb-12">
           <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-2 block">Installation Options</span>
           <h2 className="text-4xl font-serif text-gray-900 mb-6">Roof-Mounted vs. Ground-Mounted</h2>
           <p className="max-w-3xl mx-auto text-gray-600">
             We optimize the installation based on your property's layout and sun exposure.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
            <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Roof Mount" />
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-serif mb-4">Roof-Mounted Solar</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                The most common choice. It uses existing unused space and is typically cheaper to install. Ideal for homes with good south/west exposure.
                </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
            <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=2073&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ground Mount" />
            </div>
             <div className="p-8">
                <h3 className="text-2xl font-serif mb-4">Ground-Mounted Solar</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                Perfect if your roof is shaded or old. Ground mounts can be oriented perfectly for maximum production and are easier to clean and maintain.
                </p>
             </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-gray-500">Feature</th>
                <th className="py-5 px-6 text-lg font-serif font-bold text-gray-900 border-l border-gray-200">Roof Mount</th>
                <th className="py-5 px-6 text-lg font-serif font-bold text-gray-900 border-l border-gray-200">Ground Mount</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-900">Cost</td>
                <td className="py-4 px-6 border-l border-gray-200">Lower upfront cost</td>
                <td className="py-4 px-6 border-l border-gray-200">Higher upfront cost (trenching etc.)</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-900">Esthetics</td>
                <td className="py-4 px-6 border-l border-gray-200">Integrated with home profile</td>
                <td className="py-4 px-6 border-l border-gray-200">Visible in yard/field</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-900">Efficiency</td>
                <td className="py-4 px-6 border-l border-gray-200">Limited by roof angle/direction</td>
                <td className="py-4 px-6 border-l border-gray-200">Perfectly optimized orientation</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-900">Maintenance</td>
                <td className="py-4 px-6 border-l border-gray-200">Harder to access</td>
                <td className="py-4 px-6 border-l border-gray-200">Easy access for cleaning</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </section>

      {/* Dark Quote section */}
      <div className="bg-brand-dark py-24 relative overflow-hidden">
         {/* Abstract BG */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/10 skew-x-12 transform origin-top-right"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Get a free solar quote</h2>
              <p className="text-gray-700 mb-10 text-lg leading-relaxed">
                Every home is unique. We build a 3D model of your property to give you an accurate production estimate, cost analysis, and shading report.
              </p>
              <ul className="space-y-5">
                {[
                    'Industry leading shade analysis', 
                    'Detailed financial breakdown', 
                    'Tax credit & incentive guidance', 
                    '3D Performance Modeling'
                ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-gray-600">
                     <div className="bg-emerald-500/20 p-1 rounded-full text-emerald-400">
                        <CheckCircle size={20} />
                     </div>
                     <span className="font-medium">{item}</span>
                   </li>
                ))}
              </ul>
            </div>
            <div>
               <div className="bg-white p-8 rounded-md shadow-2xl">
                 <form className="space-y-5">
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                        <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-emerald-500 bg-transparent" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                        <input type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-emerald-500 bg-transparent" />
                     </div>
                   </div>
                   <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                        <input type="tel" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-emerald-500 bg-transparent" />
                   </div>
                   
                   <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300 mt-2 text-center">
                      <FileText className="mx-auto text-gray-400 mb-2" />
                      <label className="block text-sm font-medium text-gray-700 mb-1">Upload Electric Bill (Optional)</label>
                      <span className="text-xs text-gray-500 block mb-3">Helps us size your system accurately</span>
                      <button type="button" className="text-xs bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">Choose file</button>
                   </div>

                   <Button className="w-full mt-2 px-4 py-3">Get My Proposal</Button>
                 </form>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section>
        <div className='container-xl py-20'>
        <div className="text-center mb-16">
           <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Residential Projects</h2>
           <p className="text-gray-600">Performance meets aesthetics. See how we install across the region.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
           "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974",
                            "https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?q=80&w=1742",
                            "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974",
                            "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058",
                            "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3264",
                            "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058",
                            "https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?q=80&w=1742",
                            "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974"  
           ].map((url, i) => (
             <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
               <img src={url + "&auto=format&fit=crop"} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Solar Project" />
             </div>
           ))}
        </div>
        </div>
      </section>

      {/* Cost Info */}
      <section className="bg-gray-50 py-20">
        <div className='container-xl'>
        <div className=" mx-auto space-y-12">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-serif text-gray-900">Understanding the Numbers</h2>
           </div>
         
<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
  <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex-shrink-0 w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
      <DollarSign size={32} />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-3">Average Solar Installation Costs</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        In our region, residential solar typically costs between{" "}
        <strong>$2.75 to $3.50 per watt</strong> before incentives.
      </p>
      <div className="bg-emerald-50 inline-block px-5 py-3 rounded-lg border border-emerald-100">
        <span className="text-emerald-800 font-medium">
          Typical 8 kW System: <strong>$22,000 - $28,000</strong>
        </span>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
      <FileText size={32} />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-3">Federal Solar Tax Credit (30%)</h3>
      <p className="text-gray-600 leading-relaxed mb-3">
        The Inflation Reduction Act guarantees a 30% tax credit on the total
        project cost, including batteries and labor.
      </p>
      <p className="text-sm text-gray-500 italic">
        Example: A $25,000 system yields a <strong>$7,500 tax credit</strong>.
      </p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex-shrink-0 w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
      <Award size={32} />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-3">
        Solar Renewable Energy Credits (SRECs)
      </h3>
      <p className="text-gray-600 leading-relaxed">
        For every 1,000 kWh your system produces, you earn 1 SREC. These can be
        sold on the market, creating a recurring income stream from your roof
        for years.
      </p>
    </div>
  </div>
</div>

        </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="bg-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
               <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-full border-2 border-emerald-400 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <Sun className="text-emerald-400 w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif  tracking-wide text-gray-700">ETHICAL SOLAR</h3>
                    <p className="text-emerald-400 text-sm tracking-[0.2em] uppercase font-bold mt-1">Established 2015</p>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                 {[
                   "30-Year Complete Warranty", "Locally Owned & Operated", "Over 3,500kW Installed", 
                   "BBB Accredited (A+ Rating)", "No Subcontractors", "In-House Engineering",
                   "NABCEP Certified Pros", "Class A Contractor"
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                     <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                     <span className="leading-tight">{item}</span>
                   </div>
                 ))}
               </div>
             </div>
             <div className="lg:pl-10 lg:border-l border-gray-800">
               <h2 className="text-4xl font-serif mb-8">Why you should choose us</h2>
               <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                 We started Ethical Solar as a one-man shop with a Subaru Outback and a borrowed trailer. Over the years, we've grown to become the region's most trusted solar partner.
               </p>
               <p className="text-gray-700 font-medium leading-relaxed mb-8 text-lg border-l-4 border-emerald-500 pl-6 italic">
                 "Our goal has always been to focus on doing the right thing. We don't chase every sale; we chase the right solution for the homeowner."
               </p>
               <p className="text-gray-700 leading-relaxed">
                 We believe we offer the highest-quality installation in the area, backed by our ironclad 30-year warranty.
               </p>
             </div>
           </div>
        </div>
      </div>

      {/* Maintenance & Warranty */}
      <section className='py-20 bg-[#f7f7f7]'>
        <div className='container-xl'>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-6">Solar Maintenance & Longevity</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
           <div className="flex gap-6 items-start">
              <div className="bg-blue-50 p-3 rounded-xl text-brand-blue">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">How long do solar panels last?</h3>
                <p className="text-gray-600 leading-relaxed">Modern solar panels are built to last, with most high-quality panels producing power for 30+ years. While efficiency slightly decreases over time (about 0.5% per year), reputable brands guarantee over 90% output even after 25 years.</p>
              </div>
           </div>
           <div className="flex gap-6 items-start">
              <div className="bg-blue-50 p-3 rounded-xl text-brand-blue">
                <Settings className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Maintenance Requirements</h3>
                <p className="text-gray-600 leading-relaxed">Solar panels require very minimal maintenance. In most climates, rain naturally cleans the panels. We recommend an occasional professional cleaning or inspection every few years to ensure peak performance.</p>
              </div>
           </div>
        </div>

        {/* <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden">
     
           <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

           <div className="lg:w-1/2 relative z-10">
             <h3 className="text-3xl font-serif mb-6 text-gray-900">30-Year Warranty for <br/>Complete Peace of Mind</h3>
             <ul className="space-y-4">
               {['We handle all repairs & service', 'Parts & labor fully covered', 'Covers panels, inverters, racking', 'Roof penetrations covered', '$0 Deductible - No hidden costs'].map((it, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-700">
                   <ShieldCheck className="text-emerald-500 w-5 h-5 flex-shrink-0" /> <span className="font-medium">{it}</span>
                 </li>
               ))}
             </ul>
             <Button className="mt-8 bg-gray-900 text-white hover:bg-gray-800">Read Warranty Details</Button>
           </div>
           <div className="lg:w-1/2 flex justify-center relative z-10">
             <div className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
               <div className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">SolarInsure</div>
               <div className="border-4 border-gray-900 p-8 rounded-full w-56 h-56 flex flex-col items-center justify-center mx-auto mb-2">
                  <span className="text-6xl font-black text-gray-900 leading-none">30</span>
                  <span className="text-sm font-bold uppercase tracking-widest mt-1">Year Warranty</span>
                  <div className="mt-3 flex gap-1 text-emerald-500">
                    {[1,2,3,4,5].map(i => <Sun key={i} size={12} fill="currentColor" />)}
                  </div>
               </div>
               <div className="text-xs font-bold bg-gray-100 py-1 px-3 rounded-full inline-block">CERTIFIED PARTNER</div>
             </div>
           </div>
        </div> */}
        </div>
      </section>

      {/* Installation Process */}
      <section className="bg-white py-20">
        <div className='container-xl'></div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Our Installation Process</h2>
            <p className="text-gray-600">We handle everything from the initial design to the final switch flip.</p>
          </div>
          <div className="space-y-2 border-l-2 border-emerald-100 ml-6 pl-8 relative">
             <ProcessStep number="1" title="Free Assessment & Proposal" desc="We start with a conversation to understand your goals. Using satellite data, we design a custom system and present a clear proposal with economics." />
             <ProcessStep number="2" title="Site Survey" desc="Our engineering team visits your home to inspect the roof condition, measure shading, and check your electrical panel capacity." />
             <ProcessStep number="3" title="Contract & Permitting" desc="Once you approve the design, we handle all the paperwork. We submit building permits to the city and interconnection applications to the utility." />
             <ProcessStep number="4" title="Installation" desc="Most residential installs take just 1-3 days. Our in-house crew works efficiently and respects your property, leaving the site cleaner than we found it." />
             <ProcessStep number="5" title="Inspection & Activation" desc="We schedule the final city inspection. Once approved, the utility grants 'Permission to Operate', and you can turn on your clean power plant!" />
          </div>
        </div>
        
      </section>

      {/* Blog Teaser */}
      <section className="bg-gray-50 py-20">
        <div className='container-xl'>
        <h2 className="text-3xl font-serif mb-12 text-center">Latest from the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Can an HOA prevent you from going solar?", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973" },
             { title: "I got door-knocked by a solar salesman - Is it a scam?", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070" },
             { title: "Understanding Utility Standby Fees", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070" }
           ].map((art, i) => (
             <div key={i} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
               <div className="overflow-hidden aspect-video">
                 <img src={art.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Blog" />
               </div>
               <div className="p-6">
                <h3 className="font-bold text-lg group-hover:text-emerald-600 transition-colors mb-4">{art.title}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
                    <span>Ethical Solar</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>5 Min Read</span>
                </div>
               </div>
             </div>
           ))}
        </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-20 ">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            <FAQItem question="How long does it take to get solar installed?" answer="While the physical installation only takes 1-3 days, the entire process (permitting, utility approval) typically takes 60-90 days from contract signing." />
            <FAQItem question="Can I install solar panels myself?" answer="It is not recommended. Solar involves high-voltage electrical work and structural roof attachments. Professional installation ensures safety, code compliance, and protects your roof warranty." />
            <FAQItem question="What happens if I sell my home?" answer="Owned solar systems increase home value. You can include the system in the sale price. If you have a loan, you can pay it off at closing or transfer it to the buyer." />
            <FAQItem question="Will my home insurance go up?" answer="Usually, yes, but only slightly to cover the replacement cost of the system. We recommend notifying your insurance provider once the system is installed." />
            <FAQItem question="Do solar panels work in winter?" answer="Yes. Panels run on light, not heat. In fact, they are more efficient in cooler temperatures. Production is lower in winter due to shorter days, but annual net metering balances this out." />
            <FAQItem question="What happens during a power outage?" answer="For safety, grid-tied systems shut down during an outage to prevent back-feeding the lines. To have power during a blackout, you must have a battery backup system." />
            <FAQItem question="Can my HOA stop me?" answer="In Virginia and many other states, 'Solar Access Rights' laws generally prevent HOAs from banning solar, though they can place reasonable restrictions on placement for aesthetics." />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      {/* <div className="bg-emerald-600 py-20 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/20 blur-[100px] rounded-full"></div>
         
         <div className="relative z-10 px-4 max-w-4xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to make the switch?</h2>
           <p className="text-emerald-100 mb-10 text-xl font-light">
             We'd be happy to provide you with a custom design, quote, and site assessment.<br/> All free of charge, with no pressure.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button  className="text-emerald-700 font-bold">Get a Free Quote</Button>
             <Button className="border-emerald-200 text-emerald-100 hover:bg-emerald-700 hover:text-white hover:border-transparent">Call (415) 228-6857</Button>
           </div>
         </div>
      </div> */}
         
           <CTASection />
         


    </div>
  );
};