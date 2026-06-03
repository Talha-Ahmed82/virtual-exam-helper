import Image from "next/image";

export default function RegistrationProcess() {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        {/* <h2 className="text-center text-[#0d234d] text-4xl md:text-5xl lg:text-[64px] font-semibold mb-12 lg:mb-16">
            
        </h2> */}

         <h2 className="text-[#0B2E6D] text-center font-bold text-[34px] md:text-[42px] lg:text-[52px] leading-tight mb-6">
              Our
              <span className="text-[#D4AF37]"> Registration </span>
              Process
            </h2>

        {/* Process Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[1600px]">
            <Image
              src="/rounds-pic.png"
              alt="Registration Process"
              width={1600}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}