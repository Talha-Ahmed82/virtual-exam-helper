import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#02111d] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/hero-bg.png')", // your wave bg image
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02111d] via-[#02111d]/95 to-[#02111d]/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-block bg-red-600 text-white px-5 py-3 rounded-md font-semibold text-sm md:text-base mb-8">
              ORDER NOW & GET 50% DISCOUNT ON YOUR 1ST ORDER
            </div>

            {/* Heading */}
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Your Success Journey
              <br />
              Starts Here!
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Welcome to your one-stop solution! Having exam anxiety and
              needing help to cope with the challenges of online preparation?
              Don’t worry. We have the most eligible professionals on board who
              will advance your career by completing the exams and classes for
              you with utter perfection!
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-14 px-4 rounded-md bg-white outline-none text-gray-800"
                />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-14 px-4 rounded-md bg-white outline-none text-gray-800"
                />

                <input
                  type="tel"
                  placeholder="Phone No"
                  className="w-full h-14 px-4 rounded-md bg-white outline-none text-gray-800"
                />
              </div>

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full rounded-md p-4 bg-white outline-none text-gray-800 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-md transition duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px]">
              <Image
                src="/girl-image.png" // your student image
                alt="Student"
                width={550}
                height={700}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}