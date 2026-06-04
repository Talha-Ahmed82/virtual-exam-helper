// export default function SimpleOrderingProcess() {
//   return (
//     <section className="bg-[#f5f5f5] py-16">
//       <div className="mx-auto max-w-[1700px] px-6">
//         <div className="relative bg-white shadow-sm min-h-[380px] flex items-center">
          
//           {/* Left Border */}
//           <div className="absolute left-0 top-0 h-full w-[6px] bg-[#16284A]" />

//           <div className="w-full px-10 md:px-16 lg:px-24">
//             <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              
//               {/* Content */}
//               <div className="max-w-3xl">
//                 <h2 className="text-[42px] md:text-[56px] font-bold leading-tight tracking-tight">
//                   <span className="text-black">Simple Ordering </span>
//                   <span className="text-[#16284A]">Process</span>
//                 </h2>

//                 <p className="mt-10 text-[22px] md:text-[24px] text-[#2f2f2f] font-medium">
//                   Choose Virtual Exam Helper and Pave Your Way To Success!
//                 </p>
//               </div>

//               {/* Button */}
//               <div className="shrink-0">
//                 <button className="bg-[#d60d0d] hover:bg-[#bb0b0b] text-white font-bold text-[18px] px-20 py-6 rounded-lg transition-all duration-300">
//                   GET STARTED
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







export default function SimpleOrderingProcess() {
  return (
    <section className="bg-[#F8FAFC] py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="
            relative
            bg-gradient-to-r
            from-[#0B2E6D]
            via-[#123D84]
            to-[#0B2E6D]
            rounded-[32px]
            overflow-hidden
            shadow-2xl
          "
        >
          {/* Decorative Glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 px-8 md:px-12 lg:px-16 py-10 lg:py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Content */}
              <div className="max-w-2xl text-center lg:text-left">
                {/* Badge */}
                <span
                  className="
                    inline-block
                    bg-[#D4AF37]/15
                    text-[#D4AF37]
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                    mb-4
                  "
                >
                  ORDER PROCESS
                </span>

                {/* Heading */}
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Simple
                  <span className="text-[#D4AF37]">
                    {" "}
                    Ordering Process
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-4 text-slate-300 text-base md:text-lg leading-8">
                  Choose Virtual Exam Helper and achieve academic success
                  with professional guidance, reliable support, and
                  expert assistance.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                {/* Primary */}
                <button
                  className="
                    bg-[#D4AF37]
                    hover:bg-[#c39f2d]
                    text-[#0B2E6D]
                    font-semibold
                    px-8
                    py-3
                    rounded-xl
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  Get Started
                </button>

                {/* Secondary */}
                <button
                  className="
                    border
                    border-white/20
                    bg-white/10
                    hover:bg-white/20
                    text-white
                    font-semibold
                    px-8
                    py-3
                    rounded-xl
                    transition-all
                    duration-300
                  "
                >
                  Contact Us
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}