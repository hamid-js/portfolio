import { ImGithub, ImPlay2 } from 'react-icons/im';
import MiniSkill from '../ui/MiniSkill';

export default function ProjectItem({
  image = '',
  title = '',
  description = '',
  tec = '',
  codeLink="",
  demoLink=""
}) {
  const hover =
    'cursor-pointer hover:text-[var(--secondary-color-500)] duration-500 hover:scale-125';
  return (
    <>
      <div className=" mb-10 flex flex-col items-center justify-evenly gap-0  rounded-md bg-[var(--primary-color-700)] pt-5 2xl:gap-8  ">
        <img
          className=" rounded-lg lg:mx-auto lg:w-5/6   "
          src={image}
          alt={title}
        />

        <h3 className=" ml-[-3rem] flex items-center justify-center p-3   text-[--secondary-color-400]">
          {title}
        </h3>

        <p className="px-10 py-0 text-center capitalize  xl:text-sm 2xl:text-2xl 2xl:leading-relaxed ">
          {description}
        </p>
        <div className="my-3 flex  items-center justify-center flex-wrap">
          {
            tec.map((skilitem,index) => (
             <MiniSkill key={index} text={skilitem} />
          
            ))
          }
        </div>

        <div className=" flex w-full items-center justify-between text-lg capitalize 2xl:text-3xl  ">
          <a className={`${hover} mx-8 py-2 `} target='blank' href={codeLink}>
            <span>
              Code <ImGithub className="mb-1 inline " />
            </span>
          </a>

          <a className={`${hover}  mx-8  py-2`} target='blank' href={demoLink}>
            <span>
              Live Demo <ImPlay2 className="mb-1 inline  hover:scale-125" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}