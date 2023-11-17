// NavComponent.js
import Image from 'next/image';
import React, { useState } from 'react';

import emptyBasketIcon from './EmptyBasketIcon.svg';

export const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky h-20 text-white">
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <h1 className="px-10 py-7 font-fahkwang text-base font-semibold leading-23 tracking-[1.636px] text-222 ">
            Scandinavian Adventures
          </h1>

          <ul className="flex space-x-10 px-7 py-8 font-mulish text-222">
            <li>
              <a href="#home" className="text-222 ">
                Experiences
              </a>
            </li>
            <li>
              <a href="#about" className="text-222">
                Company
              </a>
            </li>
            <li>
              <a href="#contact" className="text-222">
                Support
              </a>
            </li>
            <li>
              <a href="#contact" className="text-222">
                <Image
                  src={emptyBasketIcon}
                  alt="Empty Basket Icon"
                  width={19}
                  height={23}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="p-4 text-222 md:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          Menu
        </button>
        {isMobileMenuOpen && (
          <ul className="mt-2">
            <li>
              <a
                href="#home"
                className="block py-2 text-222 hover:text-gray-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 text-222 hover:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 text-222 hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
