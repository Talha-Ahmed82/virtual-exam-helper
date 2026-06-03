"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What subjects and courses do you cover?",
    answer:
      "We cover a wide range of subjects and courses, including mathematics, science, business, humanities, nursing, law, and many more.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Simply contact our team, discuss your requirements, and we will guide you through the process from start to finish.",
  },
  {
    question: "What if I'm not satisfied with the assistance provided?",
    answer:
      "Customer satisfaction is our priority. We work closely with clients and address concerns promptly to ensure the best possible experience.",
  },
  {
    question:
      "Is your service limited to students, or can professionals also seek assistance?",
    answer:
      "Our services are available to both students and professionals who need academic, certification, or research support.",
  },
  {
    question: "Can I communicate with the expert working on my task?",
    answer:
      "Yes. Direct communication is available to ensure your requirements are clearly understood and fulfilled.",
  },
  {
    question: "How do you ensure the quality of the academic work delivered?",
    answer:
      "Every task goes through quality checks, proofreading, editing, and plagiarism verification before delivery.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 lg:py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#123D84]/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-5">
        {/* Section Badge */}
        <div className="flex justify-center mb-5">
          <span className="bg-[#D4AF37]/15 text-[#123D84] px-5 py-2 rounded-full text-sm font-semibold">
            FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[#0B2E6D] text-3xl md:text-4xl lg:text-5xl font-bold">
          Frequently Asked
          <span className="text-[#D4AF37]"> Questions</span>
        </h2>

        {/* Description */}
        <p className="text-center text-[#475569] text-base md:text-lg max-w-3xl mx-auto mt-4 mb-12">
          Find answers to the most common questions about our online class,
          exam assistance, and academic support services.
        </p>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    px-6
                    py-5
                  "
                >
                  <h3 className="text-[#0B2E6D] text-lg md:text-xl font-semibold pr-4">
                    {faq.question}
                  </h3>

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-[#D4AF37]/15
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    {isOpen ? (
                      <Minus size={18} className="text-[#123D84]" />
                    ) : (
                      <Plus size={18} className="text-[#123D84]" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="px-6 pb-6">
                    <div className="w-16 h-[3px] bg-[#D4AF37] rounded-full mb-4"></div>

                    <p className="text-[#475569] text-[15px] md:text-base leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div
          className="
            mt-14
            bg-gradient-to-r
            from-[#0B2E6D]
            via-[#123D84]
            to-[#0B2E6D]
            rounded-3xl
            p-8
            text-center
          "
        >
          <h3 className="text-white text-2xl md:text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Our support team is available to answer your questions and help
            you choose the right academic assistance service.
          </p>

          <button
            className="
              mt-6
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
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}