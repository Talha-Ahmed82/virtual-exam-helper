import Image from "next/image";

export default function OnlineClassSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[#0B2E6D] font-bold text-[34px] md:text-[42px] lg:text-[52px] leading-tight mb-6">
              Master Your
              <span className="text-[#D4AF37]"> Online Classes </span>
              With Virtual Exam Helper
            </h2>

            <p
              className="
text-base
md:text-lg
leading-8
text-slate-700
max-w-[650px]
"
            >
              Virtual Exam Helper recognizes the importance of exceptional
              support when it comes to online classes. That's why we have
              curated a remarkable team of subject matter experts from
              prestigious universities. When you choose our online class
              assistance service, you unlock access to tutors who possess
              advanced degrees and a wealth of experience in their fields. Our
              tutors are not only knowledgeable but also driven by their passion
              to help you excel in your online classes.
            </p>

            <p className="text-slate-700 text-base md:text-lg leading-8 mt-5 max-w-[700px]">
              Whether you require assistance with a particular assignment or
              continuous guidance, our team of subject matter experts is fully
              committed to providing the support you need to thrive.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 mt-12">
              <button
                className="
bg-[#123D84]
hover:bg-[#0B2E6D]
text-white
px-8
py-3
rounded-lg
font-medium
transition-all
duration-300
shadow-lg
hover:shadow-xl
"
              >
                Call Us
              </button>

              <button
                className="
bg-[#D4AF37]
hover:bg-[#c39f2d]
text-[#0B2E6D]
px-8
py-3
rounded-lg
font-semibold
transition-all
duration-300
shadow-lg
hover:shadow-xl
"
              >
                Chat Now
              </button>
            </div>
          </div>

          {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
  <div className="relative w-[520px] h-[520px] flex items-center justify-center">
    
    {/* Outer Gold Ring */}
    {/* <div
      className="
      absolute
      inset-0
      rounded-full
      border-[3px]
      border-[#D4AF37]
      "
    />

   
    <div
      className="
      absolute
      w-[470px]
      h-[470px]
      rounded-full
      border-[3px]
      border-[#123D84]
      "
    />

  
    <div
      className="
      absolute
      w-[420px]
      h-[420px]
      rounded-full
      bg-[#D4AF37]/20
      blur-3xl
      "
    /> */}

    {/* Image */}
    <Image
      src="/black-students.jpg"
      alt="Student"
      width={450}
      height={450}
      className="relative z-10  object-contain rounded-2xl"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
