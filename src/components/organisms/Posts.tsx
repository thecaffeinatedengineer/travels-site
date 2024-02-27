import Image from 'next/image';
import React from 'react';

const Posts = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Post */}
        <div className="relative mx-5 mt-40 max-w-[calc(100%-1rem)] md:ml-40 md:mr-20 md:w-[34.14%]">
          <div className="relative w-full h-418">
            <Image
              src="/assets/images/leftpost.jpg"
              alt="Left Post"
              className="object-cover w-full h-full"
              width={500}
              height={418}
            />
            <div className="absolute z-10 text-lg font-semibold leading-6 tracking-wider text-white bottom-9 left-8 font-fahkwang">
              <h2 className="font-fahkwang text-lg font-semibold leading-[23px] tracking-[1.636px] text-[#FFF] antialiased">
                Moose safari in <br />
                Central Sweden
              </h2>
            </div>
          </div>
          <div className="pl-5">
            <div className="mt-26">
              <ul>
                <li className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
                  – Exciting 5-hour tour
                </li>
                <li className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
                  – Track and find wild moose
                </li>
                <li className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
                  – Hike through boreal forest
                </li>
                <li className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
                  – Eat by a secluded forest lake
                </li>
                <li className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
                  – Chance to see wolves, foxes and lynx
                </li>
              </ul>
            </div>

            <div className="my-8">
              <p className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
                From £150 per person
              </p>
            </div>
            <button
              className="h-[55px] w-full shrink-0 bg-black py-3 text-center font-fahkwang text-sm font-semibold leading-[18px] tracking-[1.273px] text-white transition md:w-[201px] md:px-6"
              type="button"
            >
              Book Experience
            </button>
          </div>
        </div>

        {/* Right Post */}
        <div className="relative mx-5 my-40 max-w-[calc(100%-1rem)] md:mr-40 md:w-[58.04%]">
          <div className="relative w-full h-418">
            <Image
              src="/assets/images/rightpost.jpg"
              alt="Right Post"
              className="object-cover w-full h-full"
              width={500}
              height={418}
            />
            <div className="absolute z-10 text-lg font-semibold leading-6 tracking-wider text-white bottom-9 left-8 font-fahkwang">
              <h2 className="font-fahkwang text-lg font-semibold leading-[23px] tracking-[1.636px] text-[#FFF] antialiased">
                Brunch at the archipelagos
                <br /> of Gothenburg
              </h2>
            </div>
          </div>
          <div className="pl-5">
            <div className="mt-26">
              <p className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
                Join a guided boat tour in the archipelago. M/S S:t Erik departs
                from Lilla Bommen and takes you through the Gothenburg harbor,
                past the Älvsborg Fortress and down towards the islands of
                Gothenburg archipelago. Enjoy a lovely boat sightseeing tour in
                the beautiful archipelago of Gothenburg. During the summer you
                can can join the prestigious M/S S:t Erik on a guided cruise
                through the archipelago.
              </p>
            </div>
            <div className="my-8">
              <p className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
                From £150 per person
              </p>
            </div>
            <button
              className="h-[55px] w-full shrink-0 bg-black py-3 text-center font-fahkwang text-sm font-semibold leading-[18px] tracking-[1.273px] text-white transition md:w-[201px] md:px-6"
              type="button"
            >
              Book Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
