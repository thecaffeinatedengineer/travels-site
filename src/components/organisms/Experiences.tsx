import Image from 'next/image';
import React from 'react';

// Example data
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

      <div className="flex flex-wrap justify-center gap-7 md:justify-start">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex w-full flex-col items-start bg-black shadow-md md:w-[22%] ${
              index === 0 ? 'md:ml-10' : ''
            } ${index === experiences.length - 1 ? 'md:mr-10' : ''}`}
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
