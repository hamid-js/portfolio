import { ImUsers } from 'react-icons/im';

export default function Testomonials() {
  return (
    <div className=" my-5 flex flex-col items-start justify-evenly gap-8 rounded-lg bg-[var(--primary-color-800)] pb-20    ">
      <span className="flex w-5/6 items-center gap-5 border-b border-[var(--primary-color-700)] px-7 py-7 font-serif text-2xl  text-[var(--secondary-color-300)] ">
        <ImUsers />
        <span>
          <span className="text-[--color-white]"> Testo</span>
          <span>monials</span>
        </span>
      </span>

      <div className="flex flex-col items-center justify-center px-7 ">
        <div className="relative text-[var(--color-gray)] before:absolute before:left-[-10px] before:top-0 before:text-7xl before:content-['\201C'] after:absolute  after:right-0 after:top-52  after:text-7xl after:content-['\201D'] ">
          <p className=" font-extralightligh text-wrap px-10 pb-7 pt-4 text-lg  ">
            A system administrator, or sysadmin, Data scientist, Systems
            engineer from USA, California.I have rich experience in managing
            scientist,troubleshooting, licensing, and updating hardware software
            asset.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly">
          <button className="cursor-pointer border-none bg-none text-6xl ">
            &#8249;
          </button>

          <img
            className="h-28 w-28 rounded-full border-2 border-[var(--secondary-color-500)] "
            src="/assets/img-2.png"
            alt=""
          />
          <button className="cursor-pointer border-none bg-none text-6xl ">
            &#8250;
          </button>
        </div>
        <span className="mt-5 font-medium capitalize">Helen Floyd</span>
        <span className="text-sm text-gray-400"> Art Director </span>
        <ul className="mt-7 flex">
          <li className="mx-2 h-3 w-3  cursor-pointer rounded-full bg-[--color-white] active:bg-[var(--secondary-color-500)]"></li>
          <li className="mx-2 h-3 w-3 cursor-pointer rounded-full bg-[var(--secondary-color-500)] active:bg-[var(--secondary-color-500)]"></li>
          <li className="mx-2 h-3 w-3  cursor-pointer rounded-full bg-[--color-white] active:bg-[var(--secondary-color-500)]"></li>
        </ul>
      </div>
    </div>
  );
}
