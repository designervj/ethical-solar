import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;   // NEW
  buttonText?: string;    // NEW
  buttonLink?: string;    // NEW
  backgroundImage: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  description,
  buttonText,
  buttonLink,
  backgroundImage 
}) => {
  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 animate-fade-in-up">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-100 font-light max-w-2xl mx-auto leading-relaxed mb-4">
          {subtitle}
        </p>

        {/* Description */}
        {description && (
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6">
            {description}
          </p>
        )}

        {/* CTA Button */}
        {buttonText && (
          <a
            href={buttonLink}
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-full font-semibold transition duration-300"
          >
            {buttonText}
          </a>
        )}

      </div>
    </div>
  );
};