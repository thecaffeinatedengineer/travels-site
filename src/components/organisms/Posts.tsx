import Image from 'next/image';
import React from 'react';

const Posts = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Post */}
        <div className="relative ml-40 mr-20 mt-40 h-694 w-[34.14%] md:mr-20">
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
              style={{ width: '201px', height: '55px' }}
              className="shrink-0 bg-black px-6 py-3 text-center font-fahkwang text-sm font-semibold leading-[18px] tracking-[1.273px] text-white transition"
              type="button"
            >
              Book Experience
            </button>
          </div>
        </div>

        {/* Right Post */}
        <div className="relative my-40 mr-40 h-694 w-[58.04%]">
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
                from Lilla Bommen <br /> and takes you through the Gothenburg
                harbor, past the Älvsborg Fortress and down <br /> towards the
                islands of Gothenburg archipelago. Enjoy a lovely boat
                sightseeing tour in <br /> the beautiful archipelago of
                Gothenburg. During the summer you can can join the <br />{' '}
                prestigious M/S S:t Erik on a guided cruise through the
                archipelago.
              </p>
            </div>
            <div className="my-8">
              <p className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
                From £150 per person
              </p>
            </div>
            <button
              style={{ width: '201px', height: '55px' }}
              className="shrink-0 bg-black px-6 py-3 text-center font-fahkwang text-sm font-semibold leading-[18px] tracking-[1.273px] text-white transition"
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
