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

const SliderBrandSolar: React.FC<any> = ({ heading, brands }) => {
  const displayBrands = brands || [];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        {heading && (
          <div className="text-center">
            <p className="text-sm md:text-base italic font-medium text-text-secondary">
              {heading}
            </p>
          </div>
        )}

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
            {displayBrands.map((brand: any, i: number) => (
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
      </div>
    </section>
  );
};

export default SliderBrandSolar;
