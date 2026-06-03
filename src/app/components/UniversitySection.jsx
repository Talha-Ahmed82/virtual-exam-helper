"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const universities = [
  "/uni-pic-1.webp",
  "/uni-pic-2.webp",
  "/uni-pic-3.webp",
  "/uni-pic-4.webp",
  "/uni-pic-5.webp",
  "/uni-pic-6.webp",
];

export default function UniversitySection() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-[30%] bg-[#072554] px-8 md:px-12 py-10 lg:py-12">
            <h2 className="text-white leading-relaxed font-light text-3xl md:text-4xl">
              With Our Help, You Can
            </h2>

            <h2 className="text-white leading-relaxed font-light text-3xl md:text-4xl mt-2">
              Easily Get a Degree From
            </h2>

            <h2 className="text-white font-bold text-4xl md:text-5xl mt-4">
              Top Universities
            </h2>
          </div>

          {/* Right Slider */}
          <div className="w-full lg:w-[70%] py-8 lg:py-0">
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
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="universitySwiper"
            >
              {universities.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center h-[120px]">
                    <Image
                      src={logo}
                      alt="University Logo"
                      width={220}
                      height={100}
                      className="object-contain w-auto h-auto max-h-[90px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}