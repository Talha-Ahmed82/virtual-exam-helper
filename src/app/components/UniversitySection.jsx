// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// const universities = [
//   "/uni-pic-1.webp",
//   "/uni-pic-2.webp",
//   "/uni-pic-3.webp",
//   "/uni-pic-4.webp",
//   "/uni-pic-5.webp",
//   "/uni-pic-6.webp",
// ];

// export default function UniversitySection() {
//   return (
//     <section className="bg-white py-10 overflow-hidden">
//       <div className="max-w-[1920px] mx-auto">
//         <div className="flex flex-col lg:flex-row items-center">
          
//           {/* Left Content */}
//           <div className="w-full lg:w-[30%] bg-[#072554] px-8 md:px-12 py-10 lg:py-12">
//             <h2 className="text-white leading-relaxed font-light text-3xl md:text-4xl">
//               With Our Help, You Can
//             </h2>

//             <h2 className="text-white leading-relaxed font-light text-3xl md:text-4xl mt-2">
//               Easily Get a Degree From
//             </h2>

//             <h2 className="text-white font-bold text-4xl md:text-5xl mt-4">
//               Top Universities
//             </h2>
//           </div>

//           {/* Right Slider */}
//           <div className="w-full lg:w-[70%] py-8 lg:py-0">
//             <Swiper
//               modules={[Autoplay]}
//               slidesPerView={2}
//               spaceBetween={40}
//               loop={true}
//               speed={4000}
//               allowTouchMove={false}
//               autoplay={{
//                 delay: 0,
//                 disableOnInteraction: false,
//               }}
//               breakpoints={{
//                 640: {
//                   slidesPerView: 3,
//                 },
//                 1024: {
//                   slidesPerView: 5,
//                 },
//               }}
//               className="universitySwiper"
//             >
//               {universities.map((logo, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="flex justify-center items-center h-[120px]">
//                     <Image
//                       src={logo}
//                       alt="University Logo"
//                       width={220}
//                       height={100}
//                       className="object-contain w-auto h-auto max-h-[90px]"
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }






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
    <section className="bg-[#F8FAFC] py-14 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left Content */}
          <div
            className="
              w-full
              lg:w-[22%]
              bg-gradient-to-br
              from-[#0B2E6D]
              via-[#123D84]
              to-[#0B2E6D]
              rounded-3xl
              px-6
              py-8
              relative
              overflow-hidden
            "
          >
            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl"></div>

            {/* Badge */}
            <span
              className="
                inline-block
                bg-[#D4AF37]/15
                text-[#D4AF37]
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
                mb-4
              "
            >
              TOP UNIVERSITIES
            </span>

            <h3 className="text-white text-xl md:text-2xl font-medium leading-relaxed">
              With Our Help, You Can Earn Success From
            </h3>

            <h3 className="text-white text-xl md:text-2xl font-medium leading-relaxed">
             
            </h3>

            <h2 className="text-[#D4AF37] text-3xl md:text-4xl font-bold mt-2">
              Leading Universities
            </h2>
          </div>

          {/* Right Slider */}
          <div className="w-full lg:w-[78%]">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={30}
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
                1400: {
                  slidesPerView: 6,
                },
              }}
            >
              {universities.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="
                      bg-[#F8FAFC]
                    
                      transition-all
                      duration-300
                      h-[170px]
                      flex
                      items-center
                      justify-center
                      px-6
                    "
                  >
                    <Image
                      src={logo}
                      alt="University Logo"
                      width={260}
                      height={140}
                      className="
                        object-contain
                     
                        max-h-[130px]
                        transition-all
                        duration-300
                        hover:scale-110
                      "
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