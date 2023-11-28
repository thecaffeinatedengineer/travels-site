import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full" style={{ height: '550px' }}>
      <Image
        src="/assets/images/hero.jpg"
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="absolute z-0"
      />
      <div className="relative z-10 ml-[70px] flex h-full flex-col items-start justify-center text-white">
        <h1 className="mb-4 font-fahkwang text-lg font-semibold leading-[23px] tracking-[1.636px] text-[#FFF] antialiased">
          Gothenburg winter guided tours
        </h1>
        <p className="mb-5 font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#FFF] antialiased">
          from £65 per person
        </p>
        <button
          style={{ width: '201px', height: '55px' }}
          className="shrink-0 bg-white px-6 py-3 text-center font-fahkwang text-sm font-semibold leading-[18px] tracking-[1.273px] text-[#000] transition"
          type="button"
        >
          Book Experience
        </button>
      </div>
    </div>
  );
};

export default Hero;
