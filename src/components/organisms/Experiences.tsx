import Image from 'next/image';
import React from 'react';

const experiences = [
  {
    id: 1,
    title: 'Stockholm archipelago',
    body: 'From £50 per person',
    imageUrl: '/assets/images/stockholm.jpg',
  },
  {
    id: 2,
    title: 'Destination Stockholm',
    body: 'Guided tours from £50 per person',
    imageUrl: '/assets/images/destination.jpg',
  },
  {
    id: 3,
    title: 'Southern Sweden',
    body: 'Guided tours from £50 per person',
    imageUrl: '/assets/images/southern.jpg',
  },
  {
    id: 4,
    title: 'Destination Gotland',
    body: 'From £120 per person',
    imageUrl: '/assets/images/gotland.jpg',
  },
];

const Experiences = () => {
  return (
    <div className="w-full pb-10 bg-custom">
      <div className="py-8 text-center">
        <h3 className="pb-[6px] font-mulish text-lg font-black leading-[18px] tracking-[1.273px] text-[#222]">
          Adventure awaits out there
        </h3>
        <p className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
          Get out and experience the Scandinavian way of living
        </p>
      </div>

      <div className="flex pl-10 overflow-x-auto no-scrollbar space-x-7">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex-none bg-black shadow-md w-[300px] lg:w-[22%]"
          >
            <Image
              src={experience.imageUrl}
              alt={experience.title}
              className="object-cover w-full h-48"
              width={500}
              height={418}
            />
            <div className="w-full px-8 py-6">
              <h4 className="my-2 font-fahkwang text-sm font-normal leading-[18px] tracking-[1.273px] text-white antialiased">
                {experience.title}
              </h4>
              <p className="text-[12px] font-light leading-[15px] tracking-[1.091px] text-white antialiased">
                {experience.body}
              </p>
              <button
                className="w-full px-4 py-2 mt-6 text-black bg-white"
                type="button"
              >
                Book Experience
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
