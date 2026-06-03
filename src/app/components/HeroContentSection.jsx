export default function HeroContentSection() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/chat-pic.png')",
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mx-auto max-w-6xl text-center text-white leading-tight font-bold text-[34px] md:text-[42px] lg:text-[52px] lg:leading-tight">
          Overcome A Busy Schedule With Virtual Exam Helper Online Class Help
        </h2>

          {/* <h2 className="text-[#0B2E6D] text-center font-bold text-[34px] md:text-[42px] lg:text-[52px] leading-tight mb-6">
              Our
              <span className="text-[#D4AF37]"> Registration </span>
              Process
            </h2> */}

        {/* Description */}
        <div className="mx-auto mt-10 max-w-6xl">
          <p className="text-center text-white text-lg md:text-xl lg:text-[24px] leading-[1.8]">
            Unlock Academic Success and Reach Your Full Potential with Virtual
            Exam Helper do my online class experts. Whether you struggle to
            keep up with coursework or aim to improve your grades, our highly
            qualified professionals are here to support you every step of the
            way. Hire someone to take my online class and bid farewell to
            stress and frustration. Say hello to high grades and confidence.
            Achieving your desired grades has never been easier with Exams
            Taker's help.
          </p>
        </div>

        {/* Search Tags */}
        <div className="mx-auto mt-14 max-w-6xl">
          <p className="text-center text-white text-lg md:text-xl lg:text-[24px] leading-[1.8]">
            <span className="font-medium">Our Search Tags:</span> Pay Someone
            To Do My Online Exam, Take My Exam For Me, Do My Proctored Exam for
            me, Best Online Exam Help, Hire Someone To Do My Exam, Can Someone
            Take My Exam For Me, Do My Math Exam For Me, Take My Exam For Me
            Online, Help With Exam Online
          </p>
        </div>
      </div>
    </section>
  );
}