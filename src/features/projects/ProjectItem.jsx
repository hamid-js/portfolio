import { ImGithub, ImPlay2 } from 'react-icons/im';
import MiniSkill from '../ui/MiniSkill';
import Title from '../ui/Title';

export default function ProjectItem() {
  const hover =
    'cursor-pointer hover:text-[var(--secondary-color-500)] duration-500 hover:scale-125';
  return (
    <>
      <div className=" mb-10 flex flex-col items-center justify-evenly gap-0  rounded-md bg-[var(--primary-color-700)] pt-5 2xl:gap-8  ">
        <img
          className=" rounded-lg lg:mx-auto lg:w-5/6   "
          src="/assets/portfolio.png"
          alt=""
        />

        <Title
          firstPart="car "
          secondPart="wash"
          className=" ml-[-3rem] flex items-center justify-center  p-0"
        />

        <p className="px-10 py-0 text-center capitalize  xl:text-sm 2xl:text-2xl 2xl:leading-relaxed ">
          A car rental website is an online platform that allows users to rent
          cars for personal or business use. The website provides an interface
          for searching, comparing, and reserving cars.
        </p>
        <div className="my-3">
          <MiniSkill text="react" />
          <MiniSkill text="scss" />
        </div>

        <div className=" flex w-full items-center justify-between text-lg 2xl:text-3xl capitalize  ">
          <a className={`${hover} mx-8 py-2 `} href="#">
            <span>
              Code <ImGithub className="mb-1 inline " />
            </span>
          </a>

          <a className={`${hover}  mx-8  py-2`} href="#">
            <span>
              Live Demo <ImPlay2 className="mb-1 inline  hover:scale-125" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
