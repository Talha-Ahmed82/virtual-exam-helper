import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F3F3F3] shadow-sm border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/virtual-logo.jpeg"
            alt="Virtual Exam Helper"
            width={85}
            height={65}
            priority
          />
        </div>

        {/* Menu Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="/"
            className="text-[16px] font-medium text-[#0F172A] hover:text-[#D4AF37] transition-all duration-300"
          >
            Home
          </a>

          <a
            href="/online-class"
            className="text-[16px] font-medium text-[#0F172A] hover:text-[#D4AF37] transition-all duration-300"
          >
            Online Class
          </a>

          <a
            href="/online-exam"
            className="text-[16px] font-medium text-[#0F172A] hover:text-[#D4AF37] transition-all duration-300"
          >
            Online Exam
          </a>

          <a
            href="/ged"
            className="text-[16px] font-medium text-[#0F172A] hover:text-[#D4AF37] transition-all duration-300"
          >
            GED
          </a>

          <a
            href="/hesi"
            className="text-[16px] font-medium text-[#0F172A] hover:text-[#D4AF37] transition-all duration-300"
          >
            HESI
          </a>

          <a
            href="/teas"
            className="text-[16px] font-medium text-[#0F172A] hover:text-[#D4AF37] transition-all duration-300"
          >
            TEAS
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="bg-[#123D84] hover:bg-[#0B2E6D] text-white px-8 py-2.5 rounded-lg font-medium text-[15px] transition-all duration-300 shadow-md hover:shadow-lg">
            Call Us
          </button>

          <button className="bg-[#D4AF37] hover:bg-[#c39f2d] text-[#0B2E6D] px-8 py-2.5 rounded-lg font-semibold text-[15px] transition-all duration-300 shadow-md hover:shadow-lg">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
