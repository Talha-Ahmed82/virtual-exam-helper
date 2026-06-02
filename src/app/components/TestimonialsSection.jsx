"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: "20092",
    text: "I've always struggled with Calculus, Chemistry, and Math. Based on friends' recommendations, I chose Virtual Exam Helper for their online class services.",
  },
  {
    id: "20346",
    text: "Virtual Exam Helper has the best HESI exam helpers in the USA! Preparing for my respiratory therapy exam felt overwhelming, but their experts made it easy. They handled my exam perfectly with their in-depth knowledge.",
  },
  {
    id: "42352",
    text: "Studying for the TEAS exam was overwhelming, but their support gave me peace of mind. They managed everything efficiently, and I passed without any hassle. Highly recommended!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#f4f4f4] overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side */}
          <div className="pt-6 lg:pt-32">
            <h2 className="text-[#04285C] text-4xl md:text-5xl lg:text-[58px] font-semibold leading-tight">
              Have Doubts? Hear From
              <br />
              Our Students!
            </h2>

            <p className="mt-8 text-lg md:text-xl text-black leading-relaxed max-w-xl">
              Absolutely! Our online class assistance service is designed to
              provide you with the utmost convenience and support in your online
              learning journey.
            </p>
          </div>

          {/* Right Side Testimonials */}
          <div className="space-y-6 relative z-10">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[26px] p-6 md:p-8 shadow-sm"
              >
                <FaQuoteLeft className="text-[52px] text-blue-700 mb-4" />

                <h4 className="font-bold text-xl mb-4">
                  Student ID: {item.id}
                </h4>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Background Image */}
      <div className="relative w-full h-[220px] lg:h-[280px] mt-[-50px] lg:mt-[-80px]">
        <Image
          src="/student-bg.webp"
          alt="Background Design"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}