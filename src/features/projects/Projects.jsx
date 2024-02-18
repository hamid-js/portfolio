import { useState } from 'react';

import ProjectItem from './ProjectItem';

import { mainProjectsData, miniProjectsData } from './projectsData';
const tabsStyle =
  'cursor-pointer text-xs sm:text-sm  shadow-md:shadow-[--secondary-color-500] rounded-sm py-3 text-center  shadow-sm  transition-all duration-1000 hover:text-[--secondary-color-600] xl:text-sm ';
export default function Projects() {
  const [showMainProjects, setShowMainProjects] = useState(true);

  return (
    <div
      id="projects"
      className=" flex flex-col items-start justify-evenly gap-8 rounded-lg bg-[var(--primary-color-800)] py-12  pb-20   "
    >
      <div className=" mx-auto  sm:my-10 bg-[var(--primary-color-800)]">
        <div className="mx-auto  h-[32rem]  ">
          <p className="px-4 sm:px-10 pb-5 sm:pb-10 text-xs text-[--primary-color-300] ">
            Note : Some of the projects were not my idea and I was inspired to
            design them.
          </p>
          <div className="mb-5 flex w-full items-center justify-around bg-[--primary-color-700] px-4  text-sm uppercase tracking-widest transition-all duration-500   ">
            <div
              className={`${tabsStyle} ${
                showMainProjects &&
                'w-1/2 scale-110  sm:scale-125 bg-[--primary-color-900] font-semibold text-[--secondary-color-500]'
              }`}
              onClick={() => setShowMainProjects(true)}
            >
              porjects
            </div>

            <div
              className={` ${tabsStyle} ${
                !showMainProjects &&
                'w-1/2 scale-110  sm:scale-125   bg-[--primary-color-900] font-semibold text-[--secondary-color-500]'
              }`}
              onClick={() => setShowMainProjects(false)}
            >
              mini Projects
            </div>
          </div>
          <div className="mx-auto mb-10 h-full w-11/12 overflow-y-scroll  rounded-lg bg-[--primary-color-900]  px-8 ">
            {showMainProjects ? (
              <>
                {mainProjectsData.map((project , index) => (
                  <div
                    key={project.id}
                    className="border-b-4  border-[--primary-color-700] pb-10 last:border-none"
                  >
                    <p className="py-10 pr-10  text-center  font-semibold tracking-wider text-[--secondary-color-500]">
                      Project {index + 1}
                    </p>
                    <ProjectItem
                      title={project.title}
                      image={project.image}
                      demoLink={project.demoLink}
                      codeLink={project.codeLink}
                      description={project.description}
                      tec={project.tec}
                    />
                  </div>
                ))}
              </>
            ) : (
              <>
                {miniProjectsData.map((project) => (
                  <div
                    key={project.id}
                    className="border-b-4  border-[--primary-color-700] pb-10 last:border-none"
                  >
                    <p className="py-10 pr-10  text-center font-semibold capitalize text-[--secondary-color-500]">
                      Mini project {project.id}
                    </p>
                    <ProjectItem
                      title={project.title}
                      image={project.image}
                      demoLink={project.demoLink}
                      codeLink={project.codeLink}
                      description={project.description}
                      tec={project.tec}
                    />
                  </div>
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
