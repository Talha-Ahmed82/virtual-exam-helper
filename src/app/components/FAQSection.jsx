"use client";

const faqs = [
  {
    question: "What subjects and courses do you cover?",
    answer:
      "We cover a wide range of subjects and courses, from mathematics and science to humanities and business. If you have a specific inquiry, feel free to reach out to us.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "We have a rigorous quality control process that includes proofreading, editing, and plagiarism checks to ensure the highest standard of work.",
  },
  {
    question: "What if I'm not satisfied with the assistance provided?",
    answer:
      "Customer satisfaction is our priority. If you are not satisfied with the assistance, please let us know, and we will work with you to address any concerns.",
  },
  {
    question:
      "Is your service limited to students, or can professionals also seek assistance?",
    answer:
      "Our services are available to both students and professionals seeking academic or research support.",
  },
  {
    question: "Can I communicate with the expert working on my task?",
    answer:
      "Yes, you will have the opportunity to communicate directly with the expert handling your assignment to provide clarifications and feedback.",
  },
  {
    question: "How do you ensure the quality of the academic work delivered?",
    answer:
      "We have a rigorous quality control process that includes proofreading, editing, and plagiarism checks to ensure the highest standard of work.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <h2 className="text-center text-[#06285A] text-3xl md:text-5xl lg:text-6xl font-semibold mb-12 lg:mb-16">
          Our Most Frequently Asked Questions
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white overflow-hidden"
            >
              {/* Question */}
              <div className="bg-[#072654] px-8 py-8 min-h-[120px] flex items-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                  {faq.question}
                </h3>
              </div>

              {/* Answer */}
              <div className="bg-[#F5F5F5] px-8 py-10 min-h-[200px] flex items-start">
                <p className="text-black text-lg md:text-xl leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}