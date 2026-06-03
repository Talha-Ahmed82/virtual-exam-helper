import {
  MonitorSmartphone,
  ClipboardCheck,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Online Class",
    description:
      "Get expert support for your online classes from qualified tutors. Whether it's a single subject or a complete course, we provide personalized assistance to help you stay ahead academically.",
  },
  {
    icon: ClipboardCheck,
    title: "Online Exam",
    description:
      "Reduce exam stress with professional online exam assistance. Our experienced experts help students achieve better grades while maintaining quality, accuracy, and timely support.",
  },
  {
    icon: BookOpen,
    title: "TEAS & Proctored Exams",
    description:
      "Receive expert guidance for TEAS, GED, GRE, ATI TEAS, NCLEX, and other proctored exams. Our specialists are committed to helping you reach your academic goals with confidence.",
  },
];

export default function OfferSection() {
  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/gpt-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E6D]/95 via-[#123D84]/90 to-[#0B2E6D]/95" />

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#123D84]/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="bg-[#D4AF37]/15 text-[#D4AF37] px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            OUR SERVICES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          What We Can
          <span className="text-[#D4AF37]"> Offer You</span>
        </h2>

        {/* Description */}
        <p className="text-center text-slate-300 text-base md:text-lg max-w-3xl mx-auto mb-14">
          We provide professional academic assistance designed to help
          students achieve success in online classes, exams, and proctored
          assessments with confidence.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  min-h-[420px]
                  flex
                  flex-col
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-[#D4AF37]/40
                  hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]
                "
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="
                      w-20
                      h-20
                      rounded-2xl
                      bg-[#D4AF37]/15
                      flex
                      items-center
                      justify-center
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      size={40}
                      className="text-[#D4AF37]"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* Small Gold Divider */}
                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-5"></div>

                {/* Description */}
                <p className="text-slate-300 text-[15px] leading-7 flex-1">
                  {service.description}
                </p>

                {/* Button */}
                <button
                  className="
                    mt-8
                    bg-[#D4AF37]
                    hover:bg-[#c39f2d]
                    text-[#0B2E6D]
                    font-semibold
                    py-3
                    rounded-xl
                    transition-all
                    duration-300
                    shadow-lg
                    hover:shadow-xl
                  "
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}