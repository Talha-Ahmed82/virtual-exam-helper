"use client";

import Image from "next/image";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] border-t border-slate-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1 */}
          <div>
            <Image
              src="/virtual-logo.jpeg"
              alt="Virtual Exam Helper"
              width={180}
              height={60}
              className="object-contain"
            />

            <p className="mt-5 text-[#475569] text-sm md:text-base leading-7 max-w-[280px]">
              Professional online class, exam, coursework, and academic
              assistance services designed to help students achieve success.
            </p>

            <div className="mt-5">
              <Image
                src="/footer-icons.png"
                alt="Payment Methods"
                width={180}
                height={50}
                className="object-contain"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#0B2E6D] text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3">
              {[
                "Online Class",
                "Online Exam",
                "GED",
                "HESI",
                "TEAS",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#475569]
                    text-sm
                    md:text-base
                    hover:text-[#123D84]
                    transition
                    cursor-pointer
                  "
                >
                  <ChevronRight
                    size={16}
                    className="text-[#D4AF37]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-[#0B2E6D] text-xl font-semibold mb-5">
              Useful Links
            </h3>

            <ul className="space-y-3">
              {[
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#475569]
                    text-sm
                    md:text-base
                    hover:text-[#123D84]
                    transition
                    cursor-pointer
                  "
                >
                  <ChevronRight
                    size={16}
                    className="text-[#D4AF37]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#0B2E6D] text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MdEmail
                  className="text-[#D4AF37] mt-1 shrink-0"
                  size={18}
                />

                <span className="text-[#475569] text-sm md:text-base break-all">
                  info@virtualexamhelper.com
                </span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt
                  className="text-[#D4AF37] mt-1 shrink-0"
                  size={16}
                />

                <span className="text-[#475569] text-sm md:text-base">
                  +1 (727) 240-5228
                </span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt
                  className="text-[#D4AF37] mt-1 shrink-0"
                  size={18}
                />

                <span className="text-[#475569] text-sm md:text-base leading-6">
                  2600 NW 67TH ST
                  <br />
                  MIAMI FL 33147-7244 USA
                </span>
              </div>

              <div className="flex gap-3">
                <FaComments
                  className="text-[#D4AF37] mt-1 shrink-0"
                  size={18}
                />

                <a
                  href="#"
                  className="
                    text-[#123D84]
                    text-sm
                    md:text-base
                    font-medium
                    hover:text-[#0B2E6D]
                    transition
                  "
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0B2E6D] py-4">
        <div className="text-center text-white text-sm md:text-base">
          © 2025 Virtual Exam Helper. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}