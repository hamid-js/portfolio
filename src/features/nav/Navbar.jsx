import Menu from './Menu';

import { useState } from 'react';
import { ImMenu, ImSun } from 'react-icons/im';
import { FaMoon } from 'react-icons/fa';

export default function Navbar({ showActiveComponent }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  function darkModeHandler() {
    setIsDarkMode((mode) => !mode);

    const rootStyles = document.documentElement.style;

    // Default styles
    const lightModeStyles = {
      '--color-white': '#000',
      '--color-gray:': '#5b21b6',
      '--color-stone': '#540054',
      '--primary-color-300': '#000',
      '--color-black': '#b587EB',
      '--primary-color-900': '#a78bfa',
      '--primary-color-800': '#abb6c1',
      '--primary-color-700': '#cbd5e1',
      '--secondary-color-500': '#5b2576',
      '--secondary-color-400': '#5c21b6',
      '--secondary-color-300': '#5b21b6',
    };
    const defaultStyles = {
      '--color-black': ' black',
      '--color-white': ' white',
      '--color-gray:': 'black',
      '--color-stone': ' #f5f5f4',
      '--primary-color-900': '#0f172a',
      '--primary-color-800': '#1e293b',
      '--primary-color-700': '#334155',
      '--primary-color-600': '#475569',
      '--primary-color-300': '#cbd5e1',
      '--secondary-color-300': '#86efac',
      '--secondary-color-400': '#4ade80',
      '--secondary-color-500': '#22c55e',
      '--secondary-color-600': '#16a34a',
    };

    // Apply styles based on the dark mode state
    const stylesToApply = isDarkMode ? lightModeStyles : defaultStyles;

    // Clear existing styles
    Object.keys(defaultStyles).forEach((style) => {
      rootStyles.removeProperty(style);
    });

    // Apply new styles
    Object.entries(stylesToApply).forEach(([property, value]) => {
      rootStyles.setProperty(property, value);
    });
  }

  return (
    <div className="fixed  top-0 z-20 w-full   md:fixed md:float-left md:mr-3  md:mt-5 md:flex  md:h-[28rem] md:w-14 md:flex-col  lg:static lg:h-[30rem] lg:w-16  xl:w-16 2xl:w-20  ">
      <div
        className={`h-18 flex  w-full items-center justify-between bg-[var(--primary-color-900)] px-5 py-2 md:rounded-t-lg md:shadow-md md:shadow-[var(--secondary-color-500)] ${
          !isOpenMenu && 'md:rounded-lg'
        }`}
      >
        <div className="flex items-start justify-between md:hidden ">
          <img
            className="h-12 w-12 rounded-full "
            src="/assets/img-2.png"
            alt=""
          />

          <div className="mx-3">
            <h2 className="capitalize">Hamid Mohammadi</h2>
            <p className="text-xs font-semibold text-[var(--secondary-color-400)]">
              Front-End Developer
            </p>
          </div>
        </div>

        <div className="flex w-16  items-center  justify-between md:my-2 md:w-full md:flex-col md:justify-center md:gap-7  md:text-xl">
          <div>
            <label>
              <input
                type="checkbox"
                className="  hidden"
                checked={isDarkMode}
                onChange={darkModeHandler}
              />
              <span className="duration-500 hover:scale-125 hover:text-[--secondary-color-500]">
                {!isDarkMode ? <ImSun /> : <FaMoon />}
              </span>
            </label>
          </div>
          <div>
            <span
              onClick={() => setIsOpenMenu((open) => !open)}
              className="text-2xl  duration-500 hover:scale-125 hover:text-[--secondary-color-500]  "
            >
              <ImMenu
                className={`scale-125 transition-all duration-500   active:bg-[--secondary-color-500] ${
                  !isOpenMenu && 'rotate-90 scale-100  '
                }`}
              />
            </span>
          </div>
        </div>
      </div>

      {
        <div
          className={`bg-[var(--primary-color-900)]  transition-all duration-700 md:rounded-b-lg  md:shadow-md md:shadow-[var(--secondary-color-500)] ${
            !isOpenMenu && 'opacity-0  '
          } `}
        >
          <div className="h-[2px]    bg-[var(--primary-color-800)] md:h-[0.5rem]  "></div>
          <Menu showActiveComponent={showActiveComponent} />
        </div>
      }
    </div>
  );
}
