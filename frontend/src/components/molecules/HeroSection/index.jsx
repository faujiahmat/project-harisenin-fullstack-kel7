import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className=" h-screen relative">
      <img
        src="/img/hero-section.webp"
        alt="hero"
        width={1000}
        height={1000}
        className="h-screen w-full object-cover object-top"
      />
      <div className="absolute gap-y-10 inset-0 bg-black bg-opacity-50  text-white uppercase items-center justify-center flex flex-col">
        <h1 className="text-xl px-2 text-center md:text-4xl lg:text-4xl font-bold ">
          Gaya Terbaik, Harga Terjangkau - Temukan Mode Impianmu!
        </h1>

        <a
          className="flex gap-4 bg-[#213875] text-white capitalize p-2 rounded-full px-8 text-xl items-center"
          href="#all-products"
        >
          Belanja sekarang <ChevronDown size={23} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
