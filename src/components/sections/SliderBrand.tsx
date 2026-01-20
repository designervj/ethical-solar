"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";

type Brand = {
  img: string;
  alt: string;
  href?: string;
};

/**
 * ✅ Replace these with your real solar partner logos in /public/assets/solar/
 * Example paths:
 *  - /assets/solar/sunpower.svg
 *  - /assets/solar/enphase.svg
 *  - /assets/solar/tesla-energy.svg
 */
const SOLAR_BRANDS: Brand[] = [
  { img: "/assets/img/Tesla_Energy_logo.png", alt: "SunPower" },
  { img: "/assets/img/Enphase_logo.svg.png", alt: "Enphase" },
  { img: "/assets/img/Tesla_Energy_logo.png", alt: "Tesla Energy" },
  { img: "/assets/img/SolarEdge_logo.svg.png", alt: "SolarEdge" },
  { img: "https://media.us.lg.com/transform/6c7ea0f8-5f94-4fc3-a8fe-18ad05ac2205/lg_logo", alt: "LG Solar" },
  { img: "/assets/img/CSIQ-logo.png", alt: "Canadian Solar" },
  { img: "/assets/img/jinko-solar.png", alt: "Jinko Solar" },
    { img: "/assets/img/Tesla_Energy_logo.png", alt: "SunPower" },
  { img: "/assets/img/Enphase_logo.svg.png", alt: "Enphase" },
  { img: "/assets/img/Tesla_Energy_logo.png", alt: "Tesla Energy" },
  { img: "/assets/img/SolarEdge_logo.svg.png", alt: "SolarEdge" },
  { img: "https://media.us.lg.com/transform/6c7ea0f8-5f94-4fc3-a8fe-18ad05ac2205/lg_logo", alt: "LG Solar" },
  { img: "/assets/img/CSIQ-logo.png", alt: "Canadian Solar" },
  { img: "/assets/img/jinko-solar.png", alt: "Jinko Solar" },

];

const SliderBrandSolar: React.FC = () => {
  const brands = useMemo(() => SOLAR_BRANDS, []);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm md:text-base italic font-medium text-[#555555]">
            Trusted by homeowners and installers — featuring leading solar
            brands:
          </p>
        </div>

        {/* Slider */}
        <div className="mt-8">
          <Swiper
            modules={[Autoplay, A11y]}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={700}
            spaceBetween={28}
            slidesPerView={6}
            breakpoints={{
              0: { slidesPerView: 2.5, spaceBetween: 18 },
              480: { slidesPerView: 3.5, spaceBetween: 22 },
              768: { slidesPerView: 5, spaceBetween: 26 },
              1024: { slidesPerView: 6, spaceBetween: 28 },
            }}
          >
            {brands.map((brand, i) => (
              <SwiperSlide key={`${brand.alt}-${i}`}>
                <div className="h-14 md:h-16 flex items-center justify-center">
                  {brand.href ? (
                    <a
                      href={brand.href}
                      className="opacity-80 hover:opacity-100 transition"
                      aria-label={brand.alt}
                    >
                      <img
                        src={brand.img}
                        alt={brand.alt}
                        className="h-8 md:h-9 w-auto object-contain"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img
                      src={brand.img}
                      alt={brand.alt}
                      className="h-8 md:h-9 w-auto object-contain opacity-80 hover:opacity-100 transition"
                      loading="lazy"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Small note */}
        {/* <div className="mt-6 text-center text-xs text-[#777]">
          Logos are trademarks of their respective owners.
        </div> */}
      </div>
    </section>
  );
};

export default SliderBrandSolar;
