"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const portals = [
  {
    name: "HIA",
    logo: "/swiper-pic-1.jpg",
  },
  {
    name: "Blackboard",
    logo: "/swiper-pic-2.jpg",
  },
  {
    name: "ALEKS",
    logo: "/swiper-pic-3.jpg",
  },
  {
    name: "Cengage",
    logo: "/swiper-pic-4.jpg",
  },
  {
    name: "WebAssign",
    logo: "/swiper-pic-5.jpg",
  },
  {
    name: "Pearson",
    logo: "/swiper-pic-6.jpg",
  },
  {
    name: "Pearson",
    logo: "/swiper-pic-7.jpg",
  },
];

export default function CoursePortalsSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-[#112B55] font-bold leading-tight text-4xl md:text-5xl lg:text-6xl max-w-6xl mx-auto mb-16">
          Explore The Course Portals We Collaborate With At Virtual Exam
          Helper
        </h2>

        {/* Logo Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          loop={true}
          speed={4000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="portalSwiper"
        >
          {portals.map((portal, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-[120px]">
                <img
                  src={portal.logo}
                  alt={portal.name}
                  className="max-h-[80px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}