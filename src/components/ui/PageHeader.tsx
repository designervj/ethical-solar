import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <div className="relative min-h-[50vh] lg:min-h-[500px] py-24 md:py-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-100 font-medium max-w-2xl mx-auto leading-relaxed mb-4">
          {subtitle}
        </p>
        {description && (
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6">
            {description}
          </p>
        )}
        {buttonText && (
          <a
            href={buttonLink}
            className="inline-block bg-primary-hover hover:bg-primary text-white px-7 py-3 rounded-full font-semibold transition duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};
