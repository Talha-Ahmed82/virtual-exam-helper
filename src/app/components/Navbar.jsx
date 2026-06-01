import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#f3f3f3] shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/virtual-logo.jpeg"
            alt="Virtual Exam Helper"
            width={100}
            height={80}
            priority
          />
        </div>

        {/* Menu Links */}
        <div className="hidden lg:flex items-center gap-12">
          <a
            href="/"
            className="text-[18px] font-medium text-black hover:text-red-600 transition"
          >
            Home
          </a>

          <a
            href="/online-class"
            className="text-[18px] font-medium text-black hover:text-red-600 transition"
          >
            Online Class
          </a>

          <a
            href="/online-exam"
            className="text-[18px] font-medium text-black hover:text-red-600 transition"
          >
            Online Exam
          </a>

          <a
            href="/ged"
            className="text-[18px] font-medium text-black hover:text-red-600 transition"
          >
            GED
          </a>

          <a
            href="/hesi"
            className="text-[18px] font-medium text-black hover:text-red-600 transition"
          >
            HESI
          </a>

          <a
            href="/teas"
            className="text-[18px] font-medium text-black hover:text-red-600 transition"
          >
            TEAS
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="bg-[#d41111] hover:bg-[#b60f0f] text-white px-12 py-4 rounded font-medium text-lg transition">
            Call Us
          </button>

          <button className="bg-[#d41111] hover:bg-[#b60f0f] text-white px-12 py-4 rounded font-medium text-lg transition">
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
