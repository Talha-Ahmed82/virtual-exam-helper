// import Image from "next/image";
// import { CheckCircle } from "lucide-react";

// const subjects = [
//   [
//     "Mathematics",
//     "Statistics",
//     "Economics",
//     "Business Administration",
//     "Criminal Justice",
//     "Accounting",
//     "Law & Legal",
//   ],
//   [
//     "Nursing",
//     "Algebra",
//     "Business Management",
//     "Marketing Management",
//     "Computer Sciences",
//     "Bio Sciences",
//     "Biology",
//   ],
//   [
//     "Chemistry",
//     "Physics",
//     "English Literature",
//     "Social Sciences",
//     "Sociology",
//     "Education",
//     "Human Resources",
//   ],
// ];

// export default function SubjectSection() {
//   return (
//     <section className="py-16 bg-[#f4f4f4] overflow-hidden">
//       <div className="max-w-[1900px] mx-auto">
//         <div className="relative bg-[#082552] rounded-r-[40px] min-h-[530px] flex flex-col lg:flex-row items-center">
          
//           {/* Left Image Area */}
//           <div className="relative w-full lg:w-[38%] flex justify-center lg:justify-start">
            
//             {/* Red Shape */}
//             <div
//               className="
//                 absolute
//                 left-10
//                 top-0
//                 bottom-0
//                 w-[70%]
//                 bg-[#d80d0d]
//                 skew-x-[-18deg]
//                 rounded-lg
//               "
//             />

//             {/* Student Image */}
//             <div className="relative z-10 -mt-14 lg:-mt-28">
//               <Image
//                 src="/girl-image.png"
//                 alt="Student"
//                 width={600}
//                 height={700}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="w-full lg:w-[62%] px-8 md:px-12 lg:px-16 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-8">
//               {subjects.map((column, colIndex) => (
//                 <div key={colIndex} className="space-y-8">
//                   {column.map((subject, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-4 text-white"
//                     >
//                       <CheckCircle
//                         size={18}
//                         className="text-white shrink-0"
//                         strokeWidth={2.5}
//                       />

//                       <span className="text-xl md:text-lg font-medium">
//                         {subject}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }






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
    <section className="py-16 lg:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#D4AF37]/15 text-[#123D84] px-5 py-2 rounded-full text-sm font-semibold">
            SUBJECT EXPERTISE
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2E6D]">
            Academic Subjects We
            <span className="text-[#D4AF37]"> Support</span>
          </h2>

          <p className="mt-4 text-[#475569] text-base md:text-lg max-w-3xl mx-auto">
            Our academic specialists provide professional assistance across
            a wide range of subjects, helping students achieve their goals
            with confidence and expert guidance.
          </p>
        </div>

        {/* Main Container */}
        <div
          className="
          relative
          bg-gradient-to-r
          from-[#0B2E6D]
          via-[#123D84]
          to-[#0B2E6D]
          rounded-[40px]
          overflow-hidden
          shadow-2xl
        "
        >
          {/* Decorative Glow */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-10 items-center p-8 lg:p-12">
            {/* Left Image */}
            <div className="relative flex justify-center">
              {/* Gold Glow */}
              <div className="absolute w-[350px] h-[350px] bg-[#D4AF37]/20 rounded-full blur-3xl"></div>

              {/* Decorative Circles */}
              <div className="absolute top-6 left-10 w-20 h-20 border-2 border-[#D4AF37]/40 rounded-full"></div>

              <div className="absolute bottom-10 right-10 w-28 h-28 border border-[#D4AF37]/30 rounded-full"></div>

              {/* Image Border */}
              <div className="relative p-3 border-4 border-[#D4AF37]/60 rounded-[40px]">
                <Image
                  src="/student-1.png"
                  alt="Student"
                  width={500}
                  height={600}
                  className="rounded-[30px] object-contain"
                />
              </div>
            </div>

            {/* Right Subject Grid */}
            <div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {subjects.flat().map((subject, index) => (
                  <div
                    key={index}
                    className="
                      group
                      bg-white/10
                      backdrop-blur-md
                      border
                      border-white/10
                      rounded-2xl
                      px-4
                      py-4
                      flex
                      items-center
                      gap-3
                      transition-all
                      duration-300
                      hover:bg-white/15
                      hover:border-[#D4AF37]/40
                      hover:-translate-y-1
                    "
                  >
                    <CheckCircle
                      size={20}
                      className="text-[#D4AF37] shrink-0"
                    />

                    <span
                      className="
                      text-white
                      text-sm
                      md:text-base
                      font-medium
                    "
                    >
                      {subject}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button
                  className="
                    bg-[#D4AF37]
                    hover:bg-[#c39f2d]
                    text-[#0B2E6D]
                    px-8
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}