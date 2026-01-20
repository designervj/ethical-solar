import React from 'react'
import HeroSection from './MarketingBlogCart'
import MarketingBlogCart from './MarketingBlogCart'
import FeaturedArticles from './FeaturedArticles'

const IdeasInsights = () => {
  return (
    <div>
   {/* <HeroSection/> */}
   <MarketingBlogCart/>
   <FeaturedArticles/>


   <section className="w-full pb-24 pt-16 md:pt-32 md:pb-40 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h4 className="text-[#2F2A4A] text-2xl md:text-[36px] font-semibold tracking-tight">
          Ready to turn ideas into real brand momentum?
        </h4>

        <div className="mt-7 flex md:flex-col sm:flex-row items-center justify-center md:gap-3 gap-2">
          {/* Primary button */}
          <button
            className="
              md:px-7 px-5 py-3 rounded-full
              bg-[#0e7090] text-white font-medium text-sm md:text-[16px]
              shadow-sm transition-all
              hover:brightness-95 hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-[#6C2CF5]/40
            "
          >
            Book a Free Demo
          </button>

          {/* Secondary button */}
          <button
            className="
             md:px-7 px-5 py-3 rounded-full
              bg-[#F3EEFF] text-[#3D0377] font-medium text-sm md:text-[16px]
              border border-[#834CF680]
              transition-all
              hover:bg-[#EEE6FF] hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-[#6C2CF5]/30
            "
          >
            Ask Us Anything
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default IdeasInsights
