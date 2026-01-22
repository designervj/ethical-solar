import React from "react";

const CTASection = () => {
  return (
    // Section ko vertical padding di hai
    <section className="py-20 bg-white">
      
      {/* Saare content ko center aur max-width di hai */}
      <div className="container mx-auto max-w-3xl text-center px-4">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-normal text-[#555555]">
         Interested in Going Solar?

        </h2>
        
        {/* Paragraph */}
        <p className="mt-6 md:text-lg text-base leading-relaxed text-[#555] max-w-3xl mx-auto">
        We’d be happy to provide you with information, a quote and site visit, all FREE of charge.
        </p>
        
        {/* Button */}
        <div className="mt-10">
          <button 
            className="bg-[#3ccb7f] text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
          Get a Free Quote
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;