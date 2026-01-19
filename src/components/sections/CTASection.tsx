import React from "react";

const CTASection = () => {
  return (
    // Section ko vertical padding di hai
    <section className="py-16 bg-white">
      
      {/* Saare content ko center aur max-width di hai */}
      <div className="container mx-auto max-w-3xl text-center px-4">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-normal text-[#555555]">
          Let's Talk About What Comes After the Campaign.
        </h2>
        
        {/* Paragraph */}
        <p className="mt-6 text-lg leading-relaxed text-[#555] max-w-3xl mx-auto">
          Because great marketing doesn't stop — it evolves. Whether you need a website that
          books guests, a video that tells your story, or a full creative system that scales with you
          — we're here to help your brand stay relevant, consistent and alive.
        </p>
        
        {/* Button */}
        <div className="mt-10">
          <button 
            className="bg-[#8000FF] text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Book a Free Demo
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;