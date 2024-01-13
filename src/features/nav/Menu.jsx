import { ImBubble2, ImProfile, ImStarFull, ImTerminal } from 'react-icons/im';

export default function Menu() {
  const items =
    'flex flex-col items-center justify-center md:gap-y-1 md:border-b md:pb-3  md:last:border-b-0 md:border-slate-700';
  return (
    <div className=" h-20   w-full items-center justify-center px-5  py-6 md:px-0 ">
      <ul className="flex items-center justify-between text-sm capitalize md:flex-col md:gap-y-7   md:text-[0.975rem] ">
        <li className={items}>
          <span>
            <ImProfile />
          </span>
          <span>About</span>
        </li>
        <li className={items}>
          <span>
            <ImProfile />
          </span>
          <span> Resume</span>
        </li>
        <li className={items}>
          <span>
            <ImStarFull />
          </span>
          <span> Project</span>
        </li>

        <li className={items}>
          <span>
            <ImBubble2 />
          </span>
          <span> Contact</span>
        </li>

        <li className={items}>
          <span>
            <ImTerminal />
          </span>
          <span> Terminal</span>
        </li>
      </ul>
    </div>
  );
}
