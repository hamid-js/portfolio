import { useState } from 'react';

import ProjectItem from './ProjectItem';

import { mainProjectsData,miniProjectsData} from './projectsData';
const tabsStyle =
  'cursor-pointer  shadow-md:shadow-[--secondary-color-500] rounded-sm py-3 text-center  shadow-sm  transition-all duration-1000 hover:text-[--secondary-color-400] xl:text-sm ';
export default function Projects() {
  const [showMainProjects, setShowMainProjects] = useState(true);

  return (
    <div
      id="projects"
      className=" mb-5 flex flex-col items-start justify-evenly gap-8 rounded-lg bg-[var(--primary-color-800)]  py-12   "
    >
      <div className=" mx-auto  my-10 bg-[var(--primary-color-800)]">
        <div className="mx-auto  h-[32rem]  ">
          <div className="mb-5 flex w-full items-center justify-around bg-[--primary-color-700] px-4  text-sm uppercase tracking-widest transition-all duration-500   ">
            <div
              className={`${tabsStyle} ${
                showMainProjects &&
                'w-1/2 scale-125 bg-[--primary-color-600] text-[--secondary-color-400]'
              }`}
              onClick={() => setShowMainProjects(true)}
            >
              porjects
            </div>

            <div
              className={` ${tabsStyle} ${
                !showMainProjects &&
                'w-1/2 scale-125  bg-[--primary-color-600] text-[--secondary-color-400]'
              }`}
              onClick={() => setShowMainProjects(false)}
            >
              mini Projects
            </div>
          </div>
          <div className="mx-auto mb-10 h-full w-11/12 overflow-y-scroll  rounded-lg bg-[--primary-color-600] p-10 ">
            {showMainProjects ? (
              <>
                {mainProjectsData.map((project) => (
                  <ProjectItem
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    demoLink={project.demoLink}
                    codeLink={project.codeLink}
                    description={project.description}
                    tec={project.tec}
                  />
                ))}
              </>
            ) : (
              <>
               {miniProjectsData.map((project) => (
                  <ProjectItem
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    demoLink={project.demoLink}
                    codeLink={project.codeLink}
                    description={project.description}
                    tec={project.tec}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="w-full px-7  text-[--color-white]"></div>
    </div>
  );
}