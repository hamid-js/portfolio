import { useState } from 'react';
import { ImBubble2, ImProfile, ImStarFull, ImTerminal } from 'react-icons/im';



const itemsStyle =
  ' flex flex-col items-center justify-center md:gap-y-1 md:border-b md:pb-1  md:last:border-b-0 md:border-slate-700 cursor-pointer hover:text-[--secondary-color-500] duration-500 hover:scale-125  ';
const activeStyle =
  'scale-125 xl:scale-110 font-bold text-[--secondary-color-500]';

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

  return (
    <div className="w-full items-center justify-center px-5  py-6 md:px-0 ">
      <ul className="flex items-center justify-between text-sm capitalize md:flex-col md:gap-y-5  lg:gap-y-3   2xl:gap-y-5 2xl:text-lg ">
        <li
          onClick={(e) => scrollToSection(e, 'about')}
          className={`${itemsStyle} ${active === 'about' ? activeStyle : ''} `}
        >
          <span>
            <ImProfile />
          </span>
          <a>About</a>
        </li>
        <li
          onClick={(e) => scrollToSection(e, 'resume')}
          className={`${itemsStyle} ${active === 'resume' ? activeStyle : ''} `}
        >
          <span>
            <ImProfile />
          </span>
          <a className="tracking-widest"> Skills</a>
        </li>
        <li
          onClick={(e) => scrollToSection(e, 'projects')}
          className={`${itemsStyle} ${
            active === 'projects' ? activeStyle : ''
          } `}
        >
          <span>
            <ImStarFull />
          </span>
          <a> Projects</a>
        </li>
        <li
          onClick={(e) => scrollToSection(e, 'terminal')}
          className={`${itemsStyle} ${
            active === 'terminal' ? activeStyle : ''
          } `}
        >
          <span>
            <ImTerminal />
          </span>
          <a> Terminal</a>
        </li>

        <li
          onClick={(e) => scrollToSection(e, 'contact')}
          className={`${itemsStyle} ${
            active === 'contact' ? activeStyle : ''
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
