import Image from 'next/image';
import React, { useState } from 'react';

import closeIcon from './images/close.svg';
import addIcon from './images/add.svg';
import subtractIcon from './images/subtract.svg';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => prev + 1);
  };

  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => Math.max(0, prev - 1));
  };

  const totalPrice = adultCount * 65 + childCount * 45;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-white">
      <div className="flex justify-between p-10">
        <h1 className="font-fahkwang text-base font-semibold leading-23 tracking-[1.636px] text-222 ">
          Scandinavian Adventures
        </h1>
        <button onClick={onClose} type="button">
          <Image
            src={closeIcon}
            alt="Close Modal Icon"
            width={15}
            height={16}
          />
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        <div
          className="bg-cover bg-center p-10 pl-0 md:ml-10 md:w-[69.92%]"
          style={{
            backgroundImage: 'url("/assets/images/hero.jpg")',
            height: '550px',
          }}
        />

        <div className="flex flex-col px-10 md:w-[30.08%]">
          <h3 className="font-mulish font-bold leading-[23px] tracking-[1.636px] text-[#222]">
            Gothenburg winter <br /> guided tours
          </h3>
          <p className="pt-[21px] font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222] antialiased">
            From £65 per person
          </p>

          <div className="mt-[55px]">
            <p className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
              Adults
            </p>
            <div className="flex items-center mt-2">
              <button
                className="mr-2"
                onClick={() => decrement(setAdultCount)}
                type="button"
              >
                <Image
                  src={subtractIcon}
                  alt="Subtract Icon"
                  height={40}
                  width={40}
                />
              </button>
              <div className="px-4 py-1 text-center border border-black h-[40px] w-[80px]">
                {adultCount}
              </div>
              <button
                className="ml-2"
                onClick={() => increment(setAdultCount)}
                type="button"
              >
                <Image src={addIcon} alt="Add Icon" height={40} width={40} />
              </button>
            </div>
          </div>

          <div className="mt-5">
            <p className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
              Children
            </p>
            <div className="flex items-center mt-2">
              <button
                className="mr-2"
                onClick={() => decrement(setChildCount)}
                type="button"
              >
                <Image
                  src={subtractIcon}
                  alt="Subtract Icon"
                  height={40}
                  width={40}
                />
              </button>
              <div className="px-4 py-1 text-center border border-black h-[40px] w-[80px]">
                {childCount}
              </div>
              <button
                className="ml-2"
                onClick={() => increment(setChildCount)}
                type="button"
              >
                <Image src={addIcon} alt="Add Icon" height={40} width={40} />
              </button>
            </div>
          </div>

          <p className="mt-[56px] font-mulish text-sm font-bold leading-[18px] tracking-[1.273px] text-[#222]">
            Total: £{totalPrice}
          </p>

          <button
            className="mt-[36px] h-[55px] w-full shrink-0 bg-black py-3 text-center font-fahkwang text-sm font-semibold leading-[18px] tracking-[1.273px] text-white transition md:w-[201px] md:px-6"
            type="button"
          >
            Book Experience
          </button>
        </div>
      </div>

      <div className="mt-5 px-10 md:mt-20 md:w-[741px]">
        <p className="font-mulish text-sm font-normal leading-[18px] tracking-[1.273px] text-[#222]">
          Join a guided boat tour in the archipelago. M/S S:t Erik departs from
          Lilla Bommen and takes you through the Gothenburg harbor, past the
          Älvsborg Fortress and down towards the islands of Gothenburg
          archipelago. Enjoy a lovely boat sightseeing tour in the beautiful
          archipelago of Gothenburg. During the summer you can can join the
          prestigious M/S S:t Erik on a guided cruise through the archipelago.
        </p>
      </div>

      <ul className="px-10 mt-5 list-none mb-11 md:mt-20">
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
  );
};

export default Modal;
