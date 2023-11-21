import Image from 'next/image';
import React from 'react';

const Posts = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Post */}
        <div className="relative ml-40 mr-20 mt-40 h-694 w-[34.14%] md:mr-20">
          <div className="relative h-418 w-full">
            <Image
              src="/assets/images/leftpost.jpg"
              alt="Left Post"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-9 left-8 z-10 font-fahkwang text-lg font-semibold leading-6 tracking-wider text-white">
              <h2 className="text-xl">Moose safari in Central Sweden</h2>
            </div>
          </div>
          <div className="pl-5">
            <div className="mt-26">
              <ul>
                <li>– Exciting 5-hour tour</li>
                <li>– Track and find wild moose</li>
                <li>– Hike through boreal forest</li>
                <li>– Eat by a secluded forest lake</li>
                <li>– Chance to see wolves, foxes and lynx</li>
              </ul>
            </div>

            <div className="my-8">
              <p className="text-sm text-black">From £150 per person</p>
            </div>
            <button className="bg-black px-4 py-2 text-white" type="button">
              Book Experience
            </button>
          </div>
        </div>

        {/* Right Post */}
        <div className="relative my-40 mr-40 h-694 w-[58.04%]">
          <div className="relative h-418 w-full">
            <Image
              src="/assets/images/rightpost.jpg"
              alt="Right Post"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-9 left-8 z-10 font-fahkwang text-lg font-semibold leading-6 tracking-wider text-white">
              <h2 className="text-xl">
                Brunch at the archipelagos of Gothenburg
              </h2>
            </div>
          </div>
          <div className="pl-5">
            <div className="mt-26">
              <p>
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
              <p className="text-sm text-black">From £150 per person</p>
            </div>
            <button className="bg-black px-4 py-2 text-white" type="button">
              Book Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
