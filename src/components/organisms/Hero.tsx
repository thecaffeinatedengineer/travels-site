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
        <h1 className="mb-4 text-3xl font-bold">
          Gothenburg winter guided tours
        </h1>
        <p className="mb-6 text-xl">from £65 per person</p>
        <button
          className="bg-white px-6 py-3 text-222 transition"
          type="button"
        >
          Book Experience
        </button>
      </div>
    </div>
  );
};

export default Hero;
