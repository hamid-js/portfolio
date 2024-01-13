import { ImGithub, ImPlay2 } from 'react-icons/im';

export default function WorkItem() {
  return (
    <div className=" mb-10 flex flex-col items-center justify-evenly gap-4 rounded-2xl bg-[var(--primary-color-3)] p-7 ">
      <img className=" rounded-lg" src="/assets/img-8.jpg" alt="" />

      <span className="font-medium uppercase  text-white ">
        Car rental (<span className="text-sm text-slate-300">febuary 2023</span>
        )
      </span>

      <p className="px-7 text-center capitalize">
        A car rental website is an online platform that allows users to rent
        cars for personal or business use. The website provides an interface for
        searching, comparing, and reserving cars.
      </p>
      <div className="text-sm uppercase">
        <span className="m-2 rounded-lg bg-black px-3 py-1">react</span>
        <span className="m-2 rounded-lg bg-black px-3 py-1">scss</span>
      </div>

      <div className="mt-10  flex w-full items-center justify-around gap-12  text-2xl capitalize">
        <a className="" href="#">
          <span className="cursor-pointer hover:text-green-500">
            Code <ImGithub className="mb-1 inline" />{' '}
          </span>
        </a>
        <a className="" href="#">
          <span className="cursor-pointer hover:text-green-500">
            Live Demo <ImPlay2 className="mb-1 inline" />{' '}
          </span>
        </a>
      </div>
    </div>
  );
}
