import Menu from './Menu';

import { useState } from 'react';
import { ImMenu, ImSun } from 'react-icons/im';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className="sticky top-0 z-20 w-full bg-[var(--primary-color-900)]  md:mr-3 md:mt-5 md:flex  md:h-[32rem] md:w-16  md:flex-col md:rounded-lg md:shadow-md md:shadow-[var(--secondary-color-500)] md:float-left ">

      <div className=" h-18  flex w-full items-center justify-between px-5 py-2">
        <div className="flex items-start justify-between md:hidden ">
          <img
            className="h-12 w-12 rounded-full "
            src="/assets/img-2.png"
            alt=""
          />

          <div className="mx-3">
            <h2 className="capitalize">Hamid Mohammadi</h2>
            <p className="text-xs text-[var(--secondary-color-400)]">Front-End Developer</p>
          </div>
        </div>

        <div className="flex w-16  items-center justify-between md:my-2 md:flex-col md:gap-7 md:text-xl ">
          <div>
            <label>
              <input
                type="checkbox"
                className="  hidden"
                checked={isDarkMode}
                onChange={() => setIsDarkMode((pre) => !pre)}
              />
              <span>
                <ImSun />
              </span>
            </label>
          </div>
          <div>
            <span className="text-2xl">
              <ImMenu />
            </span>
          </div>
        </div>
      </div>
      <div className="h-[0.5em] border-b  border-[var(--primary-color-800)] md:border-b-8 md:border-[var(--primary-color-600)]"></div>

      <Menu />
    </div>
  );
}
