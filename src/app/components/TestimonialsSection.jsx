// "use client";

// import Image from "next/image";
// import { FaQuoteLeft } from "react-icons/fa";

// const testimonials = [
//   {
//     id: "20092",
//     text: "I've always struggled with Calculus, Chemistry, and Math. Based on friends' recommendations, I chose Virtual Exam Helper for their online class services.",
//   },
//   {
//     id: "20346",
//     text: "Virtual Exam Helper has the best HESI exam helpers in the USA! Preparing for my respiratory therapy exam felt overwhelming, but their experts made it easy. They handled my exam perfectly with their in-depth knowledge.",
//   },
//   {
//     id: "42352",
//     text: "Studying for the TEAS exam was overwhelming, but their support gave me peace of mind. They managed everything efficiently, and I passed without any hassle. Highly recommended!",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="relative bg-[#f4f4f4] overflow-hidden">
//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 lg:pt-24">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
//           {/* Left Side */}
//           <div className="pt-6 lg:pt-32">
//             <h2 className="text-[#04285C] text-4xl md:text-5xl lg:text-[58px] font-semibold leading-tight">
//               Have Doubts? Hear From
//               <br />
//               Our Students!
//             </h2>

//             <p className="mt-8 text-lg md:text-xl text-black leading-relaxed max-w-xl">
//               Absolutely! Our online class assistance service is designed to
//               provide you with the utmost convenience and support in your online
//               learning journey.
//             </p>
//           </div>

//           {/* Right Side Testimonials */}
//           <div className="space-y-6 relative z-10">
//             {testimonials.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-[26px] p-6 md:p-8 shadow-sm"
//               >
//                 <FaQuoteLeft className="text-[52px] text-blue-700 mb-4" />

//                 <h4 className="font-bold text-xl mb-4">
//                   Student ID: {item.id}
//                 </h4>

//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Background Image */}
//       <div className="relative w-full h-[220px] lg:h-[280px] mt-[-50px] lg:mt-[-80px]">
//         <Image
//           src="/student-bg.webp"
//           alt="Background Design"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: "20092",
    text: "I've always struggled with Calculus, Chemistry, and Math. Based on friends' recommendations, I chose Virtual Exam Helper for their online class services.",
  },
  {
    id: "20346",
    text: "Virtual Exam Helper has the best HESI exam helpers in the USA! Preparing for my respiratory therapy exam felt overwhelming, but their experts made it easy.",
  },
  {
    id: "42352",
    text: "Studying for the TEAS exam was overwhelming, but their support gave me peace of mind. They managed everything efficiently, and I passed without any hassle.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden py-16 lg:py-24">
      {/* Decorative Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#123D84]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#D4AF37]/15 text-[#123D84] px-5 py-2 rounded-full text-sm font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2E6D]">
            What Our
            <span className="text-[#D4AF37]"> Students Say</span>
          </h2>

          <p className="mt-4 text-[#475569] text-base md:text-lg max-w-3xl mx-auto">
            Thousands of students trust Virtual Exam Helper for professional
            academic support, online classes, and exam assistance.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                border
                border-slate-100
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#D4AF37]/40
                hover:shadow-2xl
              "
            >
              {/* Quote */}
              <FaQuoteLeft className="text-4xl text-[#D4AF37] mb-5" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[#D4AF37]"
                    size={16}
                  />
                ))}
              </div>

              {/* Student ID */}
              <h4 className="font-semibold text-lg text-[#0B2E6D] mb-4">
                Student ID: {item.id}
              </h4>

              {/* Review */}
              <p className="text-[#475569] leading-8 text-[15px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E6D]/90 to-transparent z-10"></div>

        <div className="relative w-full h-[280px] lg:h-[380px]">
          <Image
            src="/building.jpg"
            alt="Student Success"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-6">
            <h3 className="text-white text-3xl md:text-4xl font-bold">
              Join Thousands Of Successful Students
            </h3>

            <p className="text-slate-200 mt-4 max-w-2xl">
              Experience expert academic assistance and achieve your goals
              with confidence.
            </p>

            <button
              className="
                mt-8
                bg-[#D4AF37]
                hover:bg-[#c39f2d]
                text-[#0B2E6D]
                px-8
                py-3
                rounded-xl
                font-semibold
                transition-all
                duration-300
              "
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}