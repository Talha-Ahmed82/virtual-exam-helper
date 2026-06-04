import Image from "next/image";

export default function AcademicSuccessSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B2E6D] min-h-[85vh]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/building.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E6D]/95 via-[#123D84]/90 to-[#0B2E6D]/80" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Left Image */}
          {/* <div className="flex justify-center lg:justify-start items-end h-full">
            <img
              src="/girl-image.png"
              alt="Student"
              className="w-full max-w-[580px] object-contain"
            />
          </div> */}
        <div className="relative">
  <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full"></div>

  <Image
    src="/boy-pic.png"
    alt="Student"
    width={580}
    height={700}
    className="relative z-10 w-full max-w-[580px] h-auto object-contain"
    priority
  />
</div>

          {/* Right Content */}
          <div className="text-white py-16 lg:py-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-8">
              Easily Achieve
              <span className="text-[#D4AF37]"> Academic Success </span>
              With Virtual Exam Helper
            </h2>

            <p className="text-base md:text-lg lg:text-[18px] leading-8 text-slate-200">
              With Virtual Exam Helper online class support, you can achieve
              academic excellence without the pressure of attending classes. Our
              staff of knowledgeable tutors is committed to helping you through
              your schoolwork, offering individualised guidance, and making sure
              you meet your academic objectives.
            </p>

            <p className="mt-6 text-base md:text-lg lg:text-[18px] leading-8 text-slate-200">
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
