export default function AcademicSuccessSection() {
  return (
    <section className="relative overflow-hidden bg-[#020B3F] min-h-screen">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/wave-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#01062E] via-[#020B3F]/90 to-[#032A61]/80" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-10">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start items-end h-full">
            <img
              src="/girl-image.png"
              alt="Student"
              className="w-full max-w-[500px] object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="text-white py-16 lg:py-0">
            <h1 className="text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-bold mb-10">
              Easily Achieve Academic Success
              <br />
              With Virtual Exam Helper Class
              <br />
              Assistance
            </h1>

            <p className="text-lg md:text-xl lg:text-[22px] leading-[1.9] text-gray-100">
              With Virtual Exam Helper online class support, you can achieve
              academic excellence without the pressure of attending classes.
              Our staff of knowledgeable tutors is committed to helping you
              through your schoolwork, offering individualised guidance, and
              making sure you meet your academic objectives.
            </p>

            <p className="mt-6 text-lg md:text-xl lg:text-[22px] leading-[1.9] text-gray-100">
              Our online class support is made to provide you with the tools and
              resources needed for success, whether you’re having trouble with a
              particular subject or want to enhance your overall performance.
              Achieving academic achievement is simple and hassle-free with
              flexible scheduling options and dedicated staff of experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}