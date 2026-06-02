export default function SimpleOrderingProcess() {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="mx-auto max-w-[1700px] px-6">
        <div className="relative bg-white shadow-sm min-h-[380px] flex items-center">
          
          {/* Left Border */}
          <div className="absolute left-0 top-0 h-full w-[6px] bg-[#16284A]" />

          <div className="w-full px-10 md:px-16 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              
              {/* Content */}
              <div className="max-w-3xl">
                <h2 className="text-[42px] md:text-[56px] font-bold leading-tight tracking-tight">
                  <span className="text-black">Simple Ordering </span>
                  <span className="text-[#16284A]">Process</span>
                </h2>

                <p className="mt-10 text-[22px] md:text-[24px] text-[#2f2f2f] font-medium">
                  Choose Virtual Exam Helper and Pave Your Way To Success!
                </p>
              </div>

              {/* Button */}
              <div className="shrink-0">
                <button className="bg-[#d60d0d] hover:bg-[#bb0b0b] text-white font-bold text-[18px] px-20 py-6 rounded-lg transition-all duration-300">
                  GET STARTED
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}