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
    <div className="bg-custom">
      <div className="p-5 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Adventure awaits out there
        </h3>
        <p className="text-gray-800">
          Get out and experience the Scandinavian way of living
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col align-left bg-black p-4 shadow-md"
          >
            <img
              src={experience.imageUrl}
              alt={experience.title}
              className="h-48 w-full object-cover"
            />
            <h4 className="my-2 text-lg font-semibold text-white">
              {experience.title}
            </h4>
            <p className="text-sm text-white">{experience.body}</p>
            <button className="mt-3 bg-white px-4 py-2 text-black">
              Book Experience
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
