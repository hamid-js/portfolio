import WorkItem from './WorkItem';
import Title from '../ui/Title';

import { ImStarFull } from 'react-icons/im';
import { useState } from 'react';

const tabsStyle =
  'cursor-pointer  shadow-md:shadow-[--secondary-color-500] rounded-sm py-3 text-center  shadow-sm  transition-all duration-1000 hover:text-[--secondary-color-400] xl:text-sm ';
export default function Works() {
  const [showMainProjects, setShowMainProjects] = useState(true);

  return (
    <div
      id="projects"
      className=" mb-5 flex flex-col items-start justify-evenly gap-8 rounded-lg bg-[var(--primary-color-800)]  py-12  2xl:pt-[80rem] "
    >
     

      <div className=" m-auto  bg-[var(--primary-color-800)]">
        <div className="mx-auto  h-[32rem] max-w-[30rem]  ">
          <div className="mb-5 flex w-full items-center justify-around bg-[--primary-color-700] px-4  text-sm uppercase tracking-widest transition-all duration-500 ">
            <div
              className={`${tabsStyle} ${
                showMainProjects &&
                'w-1/2 scale-125 bg-[--primary-color-700] text-[--secondary-color-400]'
              }`}
              onClick={() => setShowMainProjects(true)}
            >
              porjects
            </div>

            <div
              className={` ${tabsStyle} ${
                !showMainProjects &&
                'w-1/2 scale-125  bg-[--primary-color-700] text-[--secondary-color-400]'
              }`}
              onClick={() => setShowMainProjects(false)}
            >
              mini Projects
            </div>
          </div>
          <div className="m-auto h-full w-full overflow-y-scroll">
            {showMainProjects ? (
              <WorkItem />
            ) : (
              <div className="h-full w-full">
                <WorkItem />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full px-7  text-[--color-white]"></div>
    </div>
  );
}
