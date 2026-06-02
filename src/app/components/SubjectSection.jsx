import Image from "next/image";
import { CheckCircle } from "lucide-react";

const subjects = [
  [
    "Mathematics",
    "Statistics",
    "Economics",
    "Business Administration",
    "Criminal Justice",
    "Accounting",
    "Law & Legal",
  ],
  [
    "Nursing",
    "Algebra",
    "Business Management",
    "Marketing Management",
    "Computer Sciences",
    "Bio Sciences",
    "Biology",
  ],
  [
    "Chemistry",
    "Physics",
    "English Literature",
    "Social Sciences",
    "Sociology",
    "Education",
    "Human Resources",
  ],
];

export default function SubjectSection() {
  return (
    <section className="py-16 bg-[#f4f4f4] overflow-hidden">
      <div className="max-w-[1900px] mx-auto">
        <div className="relative bg-[#082552] rounded-r-[40px] min-h-[530px] flex flex-col lg:flex-row items-center">
          
          {/* Left Image Area */}
          <div className="relative w-full lg:w-[38%] flex justify-center lg:justify-start">
            
            {/* Red Shape */}
            <div
              className="
                absolute
                left-10
                top-0
                bottom-0
                w-[70%]
                bg-[#d80d0d]
                skew-x-[-18deg]
                rounded-lg
              "
            />

            {/* Student Image */}
            <div className="relative z-10 -mt-14 lg:-mt-28">
              <Image
                src="/girl-image.png"
                alt="Student"
                width={600}
                height={700}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[62%] px-8 md:px-12 lg:px-16 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-8">
              {subjects.map((column, colIndex) => (
                <div key={colIndex} className="space-y-8">
                  {column.map((subject, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-white"
                    >
                      <CheckCircle
                        size={28}
                        className="text-white shrink-0"
                        strokeWidth={2.5}
                      />

                      <span className="text-xl md:text-2xl font-medium">
                        {subject}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}