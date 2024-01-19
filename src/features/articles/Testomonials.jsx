import { ImUsers } from 'react-icons/im';
import Title from '../ui/Title';

export default function Testomonials() {
  return (
    <div className=" my-5 flex flex-col items-start justify-evenly gap-8  rounded-lg bg-[var(--primary-color-800)] pb-20    ">

      <Title firstPart='Testo' secondPart='monials'  className=' 2xl:text-4xl p-5' />

      <div className="flex flex-col items-center justify-center px-7 ">
        <div className="relative text-[var(--primary-color-300)] before:absolute before:left-[-10px] before:top-0 before:text-7xl before:content-['\201C'] after:absolute  after:right-0 after:top-52  after:text-7xl after:content-['\201D'] ">
          <p className=" font-extralightligh text-wrap px-10 pb-7 pt-4 text-lg 2xl:text-3xl 2xl:leading-relaxed  ">
            A system administrator, or sysadmin, Data scientist, Systems
            engineer from USA, California.I have rich experience in managing
            scientist,troubleshooting, licensing, and updating hardware software
            asset.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly ">
          <button className="cursor-pointer border-none bg-none text-6xl 2xl:text-9xl ">
            &#8249;
          </button>

          <img
            className="h-28 w-28 rounded-full border-2 border-[var(--secondary-color-500)] 2xl:w-40  2xl:h-40  2xl:my-5 "
            src="/assets/img-2.png"
            alt=""
          />
          <button className="cursor-pointer border-none bg-none text-6xl  2xl:text-9xl ">
            &#8250;
          </button>
        </div>
        <span className="mt-5 font-medium capitalize 2xl:text-3xl 2xl:mt-10 ">
          Helen Floyd
        </span>
        <span className="--primary-color-300 text-sm 2xl:text-2xl 2xl:mt-3">
          {' '}
          Art Director{' '}
        </span>
        <ul className="mt-7 flex  2xl:mt-20">
          <li className="mx-2 2xl:h-5 2xl:w-5 h-3 w-3  cursor-pointer rounded-full bg-[--color-white] active:bg-[var(--secondary-color-500)]"></li>
          <li className="mx-2 2xl:h-5 2xl:w-5 h-3 w-3 cursor-pointer rounded-full bg-[var(--secondary-color-500)] active:bg-[var(--secondary-color-500)]"></li>
          <li className="mx-2 2xl:h-5 2xl:w-5 h-3 w-3  cursor-pointer rounded-full bg-[--color-white] active:bg-[var(--secondary-color-500)]"></li>
        </ul>
      </div>
    </div>
  );
}
