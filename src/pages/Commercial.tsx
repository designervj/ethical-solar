import CTASection from '@/components/sections/CTASection'
import LetsTalk from '@/components/sections/LetsTalkPages/LetsTalk'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/ui/PageHeader'
import { ArrowRight, Battery, ShieldCheck, Sun, Zap } from 'lucide-react'
import React from 'react'


const blogPosts = [
    {
        id: 1,
        title: "The Future of Solar Storage: What 2025 Holds",
        category: "Technology",
        date: "Mar 15, 2025",
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop",
        excerpt: "Battery technology is evolving rapidly. Here's how solid-state batteries might change home energy storage forever."
    },
    {
        id: 2,
        title: "Understanding NEM 3.0 in California",
        category: "Policy",
        date: "Feb 28, 2025",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
        excerpt: "Net Metering has changed. Learn how to maximize your savings under the new utility rules using load shifting."
    },
    {
        id: 3,
        title: "5 Maintenance Tips for Peak Solar Efficiency",
        category: "Guides",
        date: "Feb 10, 2025",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
        excerpt: "Dirty panels can lose up to 25% efficiency. Here is our simple guide to keeping your system running perfectly."
    },

];

const Commercial = () => {
    return (
        <>

            <PageHeader
                title="Commercial Solar"
                subtitle="Scalable solar solutions designed to cut operating costs, increase property value, and meet your ESG goals."
                backgroundImage="/assets/img/img (3).jpg"
            />



            <section className="bg-gray-50 py-20">
                <div className='container-xl'>
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
                                <p className="text-gray-600 text-base leading-relaxed mb-4">
                                    When sunlight hits your panels, they generate DC electricity. Even on cloudy days, your system produces power. Excess energy flows back to the grid for credits (Net Metering).
                                </p>
                             
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">2. Solar Inverters</h3>
                                <p className="text-gray-600 text-base leading-relaxed mb-4">
                                    The inverter is the heart of the system, converting DC power to usable AC power for your home. We use premium Enphase microinverters or SolarEdge optimizers for maximum efficiency.
                                </p>
                             
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-500">
                                <Battery size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">3. Power Outages?</h3>
                                <p className="text-gray-600 text-base leading-relaxed mb-4">
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
                                <p className="text-gray-600 text-base leading-relaxed mb-4">
                                    Batteries store excess solar energy for use at night or during outages. We design systems that power your essential appliances (fridges, lights, wifi) indefinitely.
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-gray-100'>
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

            <LetsTalk />
            
            {/* <section className='py-20 bg-[#f7f7f7]'>

                   <h2 className="text-3xl font-serif mb-12 text-center">Latest from the Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container-xl mx-auto  px-4 sm:px-6">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-gray-400 text-xs mb-3">{post.date}</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 flex-grow">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                                    Read Article <ArrowRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}





            {/* <section className="bg-gray-50 py-20">
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
            </section> */}






            <CTASection />


        </>
    )
}

export default Commercial