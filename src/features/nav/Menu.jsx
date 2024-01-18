import { useState } from 'react';
import { ImBubble2, ImProfile, ImStarFull, ImTerminal } from 'react-icons/im';

export default function Menu({ showActiveComponent }) {
  const [active, setActive] = useState('');

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    showActiveComponent(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      setActive(sectionId);
    }
  };

  const items =
    ' flex flex-col items-center justify-center md:gap-y-1 md:border-b md:pb-1  md:last:border-b-0 md:border-slate-700 cursor-pointer hover:text-[--secondary-color-500] duration-500 hover:scale-125 {active } ';
  return (
    <div className="w-full items-center justify-center px-5  py-6 md:px-0 ">
      <ul className="flex items-center justify-between text-sm capitalize md:flex-col md:gap-y-5  lg:gap-y-7  lg:text-[0.975rem] ">
        <li
          onClick={(e) => scrollToSection(e, 'about')}
          className={`${items} ${
            active === 'about' ? 'scale-125 font-bold' : ''
          } `}
        >
          <span>
            <ImProfile />
          </span>
          <a>About</a>
        </li>
        <li
          onClick={(e) => scrollToSection(e, 'resume')}
          className={`${items} ${
            active === 'resume' ? 'scale-125 font-bold' : ''
          } `}
        >
          <span>
            <ImProfile />
          </span>
          <a> Resume</a>
        </li>
        <li
          onClick={(e) => scrollToSection(e, 'projects')}
          className={`${items} ${
            active === 'projects' ? 'scale-125 font-bold' : ''
          } `}
        >
          <span>
            <ImStarFull />
          </span>
          <a> Projects</a>
        </li>
        <li
          onClick={(e) => scrollToSection(e, 'terminal')}
          className={`${items} ${
            active === 'terminal' ? 'scale-125 font-bold' : ''
          } `}
        >
          <span>
            <ImTerminal />
          </span>
          <a> Terminal</a>
        </li>

        <li
          onClick={(e) => scrollToSection(e, 'contact')}
          className={`${items} ${
            active === 'contact' ? 'scale-125 font-bold' : ''
          } `}
        >
          <span>
            <ImBubble2 />
          </span>
          <a> Contact</a>
        </li>
      </ul>
    </div>
  );
}
