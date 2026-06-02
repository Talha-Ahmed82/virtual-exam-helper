"use client";

import Image from "next/image";
import {
  FaPlus,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-[#091321] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/footer-bg.webp" // Add your footer background image here
          alt="Footer Background"
          fill
          className="object-cover opacity-70"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#091321]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logo-white.png"
                alt="Virtual Exam Helper"
                width={240}
                height={80}
                className="object-contain"
              />
            </div>

            <p className="text-[18px] leading-[1.8] text-white/95 max-w-[320px]">
              We offer online class, course, exam and all sort of homework and
              assignments services to the students.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-5 mt-10 flex-wrap">
              <Image
                src="/zelle.png"
                alt="Zelle"
                width={55}
                height={55}
              />
              <Image
                src="/cashapp.png"
                alt="Cash App"
                width={55}
                height={55}
              />
              <Image
                src="/usdt.png"
                alt="USDT"
                width={55}
                height={55}
              />
              <Image
                src="/bank.png"
                alt="Bank"
                width={55}
                height={55}
              />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[#ff1515] text-4xl font-medium mb-8">
              Services
            </h3>

            <ul className="space-y-5">
              {[
                "Online Class",
                "Online Exam",
                "GED",
                "Hesi",
                "Teas",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <FaPlus className="text-[#ff1515] text-lg" />
                  <span className="text-2xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#ff1515] text-4xl font-medium mb-8">
              Useful Links
            </h3>

            <ul className="space-y-5">
              {["Terms & Condition", "Privacy Policy"].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <FaPlus className="text-[#ff1515] text-lg" />
                  <span className="text-2xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[#ff1515] text-4xl font-medium mb-8">
              Contact Links
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <MdEmail className="text-[#ff1515] text-3xl mt-1 shrink-0" />
                <span className="text-xl break-all">
                  info@virtualexamhelper.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <FaPhoneAlt className="text-[#ff1515] text-3xl mt-1 shrink-0" />
                <span className="text-xl">+1 (727) 240-5228</span>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-[#ff1515] text-3xl mt-1 shrink-0" />
                <span className="text-xl leading-relaxed">
                  2600 NW 67TH ST
                  <br />
                  MIAMI FL 33147-7244 USA
                </span>
              </div>

              {/* Chat */}
              <div className="flex gap-4">
                <FaComments className="text-[#ff1515] text-3xl mt-1 shrink-0" />
                <a
                  href="#"
                  className="text-xl font-semibold underline hover:text-red-400 transition"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 bg-[#02004f] py-5">
        <div className="text-center text-xl md:text-2xl text-white">
          2025 © – Virtual Exam Helper – All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}