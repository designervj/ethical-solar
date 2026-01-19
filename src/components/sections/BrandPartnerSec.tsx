import React from 'react';

const partners = [
  {
    id: 1,
    name: "Villa Lovelos",
    category: "Tourism & Travel",
    deliverables: "Branding, Website, AI Video, SEO",
    highlight: {
      text: "Listings with video receive up to 403% more inquiries",
      value: "403%",
    },
    gridCols: "lg:col-span-2",
    gridRows: "lg:row-span-1",
  },
  {
    id: 2,
    name: "Cassa Horizontes",
    category: "Tourism & Travel",
    deliverables: "Branding, Website",
    gridCols: "lg:col-span-1",
    gridRows: "lg:row-span-1",
  },
  {
    id: 3,
    name: "Tamburatorij",
    category: "Tourism & Travel",
    deliverables: "Branding, Photography, Print Design",
    gridCols: "lg:col-span-1",
    gridRows: "lg:row-span-1",
  },
  {
    id: 4,
    name: "Adriatiat Fleet",
    category: "Yacht & Charter",
    deliverables: "Booking website, Video campaign, PPC",
    gridCols: "lg:col-span-1",
    gridRows: "lg:row-span-1",
  },
  {
    id: 5,
    name: "Poliderma Polyclinic",
    category: "Health & Beauty",
    deliverables: "Branding, Identity, Website, Social",
    highlight: {
      text: "Listings with video receive up to 403% more inquiries",
      value: "403%",
    },
    gridCols: "lg:col-span-2",
    gridRows: "lg:row-span-1",
  },
  {
    id: 6,
    name: "Karlo Ban",
    category: "Boutique",
    deliverables: "Branding, Website, AI Video, SEO",
    gridCols: "lg:col-span-1",
    gridRows: "lg:row-span-1",
  },
  {
    id: 7,
    name: "TIS Grupa",
    category: "Other",
    deliverables: "Branding, Website, Illustration, AI Video",
    gridCols: "lg:col-span-2",
    gridRows: "lg:row-span-1",
  },
  {
    id: 8,
    name: "Coaching.com",
    category: "Other",
    deliverables: "Branding, Website, Illustration, Social media assets, Video production, AI Video post-production",
    highlight: {
      text: "Our professionals have helped reach $52M+ in revenue for coaching clients in driving their portfolios",
      value: "+52M",
    },
    gridCols: "lg:col-span-2",
    gridRows: "lg:row-span-1",
  },
];

const getResponsiveCols = (partner) => {
  if (partner.gridCols === 'lg:col-span-2') {
    return 'md:col-span-2 lg:col-span-2';
  }
  return 'md:col-span-1 lg:col-span-1';
};

const BrandPartnerSec = () => {
  return (
    <section className="bg-white py-16 md:py-10 px-4 md:px-10">
      <div className="container-xl mx-auto">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 mb-4">
            Brands We Partner With
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            From luxury tourism to local craftsmanship - we work with brands
            that value strategy, creativity and measurable outcomes.
          </p>
        </div>

        {/* GRID UPDATED HERE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[320px]">
  {partners.map((partner) => {
    const responsiveCols = getResponsiveCols(partner);

    return (
      <div
        key={partner.id}
        className={`bg-[#330066] rounded-2xl p-6 ${responsiveCols} ${partner.gridRows} relative overflow-hidden flex flex-col`}
      >
        {/* Top Content */}
        <div className="flex items-center gap-2">
          <span className="text-white text-[16px] font-semibold">
            {partner.name}
          </span>
          <span className="text-gray-300 text-sm italic">
            {partner.category}
          </span>
        </div>

        {/* Deliverables — same for mobile & desktop */}
  {partner.highlight && (
         <p className="text-gray-300 text-xs italic mb-1 max-w-xl mt-4 ml-auto md:hidden block">
              {partner.highlight.text}
            </p>
     )}
        <div className="absolute bottom-6 md:bottom-6 left-6 right-6 md:w-auto w-48">
          <span className="text-white text-[14px] italic leading-tight block">
            Deliverables: {partner.deliverables}
          </span>
        </div>


        {/* If highlight exists */}
        {partner.highlight && (
          <div className="absolute bottom-6 md:bottom-6 right-6 text-right">
            <p className="text-gray-300 hidden md:block text-xs italic mb-1 max-w-[140px] ml-auto ">
              {partner.highlight.text}
            </p>
            <span className="text-white text-4xl font-medium">
              {partner.highlight.value}
            </span>
          </div>
        )}
      </div>
    );
  })}
</div>


      </div>
    </section>
  );
};

export default BrandPartnerSec;
