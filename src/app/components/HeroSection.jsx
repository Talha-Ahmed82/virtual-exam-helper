import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative max-h-[150vh] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: "url('/c.jpg')", // your wave bg image
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E6D]/95 via-[#123D84]/90 to-[#0B2E6D]/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#E8C76A] text-[#0B2E6D] px-5 py-2 rounded-lg font-bold text-sm md:text-base mb-8 shadow-lg">
              ORDER NOW & GET 50% DISCOUNT ON YOUR 1ST ORDER
            </div>

            {/* Heading */}
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Your
              <span className="text-[#D4AF37]"> Success </span>
              Journey
              <br className="hidden md:hidden" />
              <span> Starts Here!</span> 
            </h1>

            {/* Description */}
            <p className="text-[#E2E8F0] text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Welcome to your one-stop solution! Having exam anxiety and needing
              help to cope with the challenges of online preparation? Don’t
              worry. We have the most eligible professionals on board who will
              advance your career by completing the exams and classes for you
              with utter perfection!
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-10 px-4 rounded-lg bg-white/95
border border-[#D4AF37]/30
focus:border-[#D4AF37] outline-none text-gray-800"
                />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-10 px-4 rounded-lg bg-white/95
border border-[#D4AF37]/30
focus:border-[#D4AF37] outline-none text-gray-800"
                />

                <input
                  type="tel"
                  placeholder="Phone No"
                  className="w-full h-10 px-4 rounded-lg bg-white/95
border border-[#D4AF37]/30
focus:border-[#D4AF37] outline-none text-gray-800"
                />
              </div>

              <textarea
                rows="4"
                placeholder="Message"
                className="
w-full
rounded-lg
p-4
bg-white/95
border
border-[#D4AF37]/30
outline-none
focus:border-[#D4AF37]
transition-all
text-gray-800
resize-none
"
              />

              <button
                type="submit"
                className="
  w-full
  bg-[#D4AF37]
  hover:bg-[#c39f2d]
  text-[#0B2E6D]
  font-bold
  py-3
  rounded-lg
  transition-all
  duration-300
  shadow-lg
  hover:shadow-xl
  "
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-[550px]">
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full"></div>

            <Image
              src="/student-2.png"
              alt="Student"
              width={550}
              height={700}
              priority
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
