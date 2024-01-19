import { ImGithub, ImPlay2 } from 'react-icons/im';
import MiniSkill from '../ui/MiniSkill';
import Title from '../ui/Title';

export default function WorkItem() {
  const hover =
    'cursor-pointer hover:text-[var(--secondary-color-500)] duration-500 hover:scale-125';
  return (
    <>
      <div className=" mb-10 flex flex-col items-center justify-evenly gap-4 rounded-2xl bg-[var(--primary-color-700)] p-7 xl:mx-auto xl:w-5/6  ">
        <Title firstPart="car " secondPart="wash" className="text-center ml-28 text-2xl" />
        <img
          className=" rounded-lg lg:mx-auto lg:w-4/6   "
          src="/assets/img-8.jpg"
          alt=""
        />

        <span className="font-medium uppercase  text-[--color-white] lg:pt-10 xl:text-xl ">
          Car rental (
          <span className="text-sm text-[var(--primary-color-300)] xl:text-xl">
            febuary 2023
          </span>
          )
        </span>

        <p className="px-7 py-4 text-center capitalize  xl:px-10 xl:py-10  ">
          A car rental website is an online platform that allows users to rent
          cars for personal or business use. The website provides an interface
          for searching, comparing, and reserving cars.
        </p>
        <div>
          <MiniSkill text="react" />
          <MiniSkill text="scss" />
        </div>

        <div className="mt-10 flex w-full items-center justify-around border-y-2 border-[--color-white]   text-2xl capitalize xl:text-2xl ">
          <a className={`${hover} px-4 `} href="#">
            <span>
              Code <ImGithub className="mb-1 inline " />
            </span>
          </a>
          <span className="h-10 border-2 border-[--color-white]"></span>
          <a className={`${hover}  px-1 `} href="#">
            <span>
              Live Demo <ImPlay2 className="mb-1 inline  hover:scale-125" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
