import Image from "next/image";

export default function OnlineClassSection() {
  return (
    <section className="bg-[#f4f4f4] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[#102a57] font-bold text-4xl md:text-5xl lg:text-[72px] leading-[1.1] mb-8">
              Master Your Online
              <br />
              Classes With Virtual Exam
              <br />
              Helper Proven Expertise
            </h2>

            <p className="text-black text-lg md:text-xl leading-[2] max-w-[700px]">
              Virtual Exam Helper recognizes the importance of exceptional
              support when it comes to online classes. That's why we have
              curated a remarkable team of subject matter experts from
              prestigious universities. When you choose our online class
              assistance service, you unlock access to tutors who possess
              advanced degrees and a wealth of experience in their fields. Our
              tutors are not only knowledgeable but also driven by their passion
              to help you excel in your online classes.
            </p>

            <p className="text-black text-lg md:text-xl leading-[2] mt-5 max-w-[700px]">
              Whether you require assistance with a particular assignment or
              continuous guidance, our team of subject matter experts is fully
              committed to providing the support you need to thrive.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 mt-12">
              <button className="bg-[#d80d0d] text-white px-12 py-4 rounded hover:bg-red-700 transition">
                Call Us
              </button>

              <button className="bg-[#d80d0d] text-white px-12 py-4 rounded hover:bg-red-700 transition">
                Chat Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Border Shape */}
              <div className="absolute inset-0 border-[6px] border-[#3e44b8] rounded-[45%_55%_60%_40%/40%_35%_65%_60%]"></div>

              <Image
                src="/girl-image.png"
                alt="Students"
                width={650}
                height={500}
                className="rounded-[45%_55%_60%_40%/40%_35%_65%_60%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
