import React from 'react';

// --- Icon Components (Placeholders for unique SVG paths) ---
// You would replace these with specific icon imports from a library like Lucide/Shadcn.
const SubscriptionIcon = ({ children }) => (
  <div className="p-3 mb-6 bg-purple-100/50 text-[#0e7090] rounded-lg inline-flex">
    {children}
  </div>
);

// Placeholder SVG components based on the visual shape
const LiveExperiencesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm-2-4h6v2h-6zm-2-4h10v2H7z" opacity="0" /><path d="M10 8l4-4 4 4" /><path d="M10 20l4 4 4-4" opacity="0" /><path d="M12 2a10 10 0 0 0-8 4" /><path d="M12 2a10 10 0 0 1 8 4" /><path d="M4 12h16" />
  </svg>
);

const ResearchBackedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18" /><path d="M6 6l12 12" /><path d="M12 2v20" /><path d="M2 12h20" />
  </svg>
);

const LearningScalesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18v-8m-4 4h8" />
  </svg>
);

const DataUnlockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" /><path d="M12 10V4" />
  </svg>
);

// --- Feature Data Array ---
const subscriptionFeatures = [
  {
    title: "Solar for Home",
    description: "Take control of your power with custom-designed rooftop solar. We design a system around your roof and budget.",
    Icon: LiveExperiencesIcon,
  },
  {
    title: "Ground‑Mounted Solar",
    description: "If your roof is shaded or unsuitable, ground‑mounted solar gives you maximum performance.",
    Icon: LiveExperiencesIcon,
  },
  {
    title: "Solar for Small Business",
    description: "Lower operating costs and lock in predictable bills. Capture incentives while keeping operations running.",
    Icon: ResearchBackedIcon,
  },
  {
    title: "Solar Battery Backup",
    description: "Stay powered during outages. Store excess solar energy and use it when you need it most, day or night.",
    Icon: LearningScalesIcon,
  },
  {
    title: "Battery Installation",
    description: "Professional installation and seamless integration. Configured for safety, efficiency, and easy monitoring.",
    Icon: DataUnlockIcon,
  },
   {
    title: "Smart Panel Installation",
    description: "Upgrade to smart panels for control. Monitor usage, optimise loads, and make the most of your system.",
    Icon: DataUnlockIcon,
  },
];


const WorksSection = () => {
  return (
    <section className="bg-[#f7f7f7]">
        
      <div className="container-xl  mx-auto py-16 px-4 sm:px-6">
      {/* Red Header Title */}
      {/* <h2 className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-10">
        HOW OUR SUBSCRIPTION MODEL WORKS
      </h2> */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-800">
        Our services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
           Every plan includes a one-time setup that fixes your foundation and a monthly rhythm that keeps your brand consistent and performing.
          </p>
        </div>

      {/* Grid of Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptionFeatures.map((feature, index) => (
          
          <div 
            key={index} 
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 relative border border-gray-100"
          >
            {/* Icon */}
            <SubscriptionIcon>
              <feature.Icon />
            </SubscriptionIcon>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-base text-gray-600 mb-6">
              {feature.description}
            </p>

            {/* Arrow Link (Fixed to the bottom right) */}
            <a href="#" className="absolute bottom-8 right-8 text-[#0e7090] group-hover:text-purple-800 transition">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 12h-11M13.5 16l4-4-4-4" />
              </svg>
            </a>
          </div>
        ))}
      </div>
      </div>  
    </section>
  );
};

export default WorksSection;