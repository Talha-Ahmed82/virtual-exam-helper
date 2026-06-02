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
      "With Virtual Exam Helper online class support, simplicity is only a click away despite the intimidating nature of online education. Whether you need assistance with a single subject or a full online course, our service can meet all of your demands. Our committed topic tutors are ready to help you at every turn. Let us lighten your academic load.",
  },
  {
    icon: ClipboardCheck,
    title: "Online Exam",
    description:
      "Say goodbye to exam-related stress! Exams Takers offers top-notch online exam assistance provided by our proficient exam experts. Our team consists of Ph.D. qualified whizzes who excel in online exam help for all academic levels. Achieve your desired grades at affordable pricing with Virtual Exam Helper.",
  },
  {
    icon: BookOpen,
    title: "Teas & Proctored Exam Help",
    description:
      "Let your poor grades not hold you back! The team of highly skilled experts at Virtual Exam Helper is committed to assisting you in achieving success on your online proctored exam, GED, GRE, NCLEX ATI Teas Exam & many others. We promise your satisfaction with our services.",
  },
];

export default function OfferSection() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage: "url('/offer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#071738]/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-16">
          What We Can Offer You
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm border border-white/5 px-10 py-12 min-h-[640px] flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="mb-8">
                  <Icon
                    size={75}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl font-semibold mb-8">
                  {service.title}
                </h3>

                {/* Content Area */}
                <div className="relative flex-1 w-full">
                  {/* Red Line */}
                  <div className="absolute left-0 top-0 w-[3px] h-full bg-red-600"></div>

                  <div className="pl-8">
                    <p className="text-gray-200 leading-10 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-md transition duration-300">
                  Read More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}