import { ImBubble2, ImProfile, ImStarFull, ImTerminal } from 'react-icons/im';

export default function Menu({ showActiveComponent }) {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    showActiveComponent(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const items =
    'flex flex-col items-center justify-center md:gap-y-1 md:border-b md:pb-3  md:last:border-b-0 md:border-slate-700 cursor-pointer';
  return (
    <div className=" h-20   w-full items-center justify-center px-5  py-6 md:px-0 ">
      <ul className="flex items-center justify-between text-sm capitalize md:flex-col md:gap-y-7   md:text-[0.975rem] ">
        <li onClick={(e) => scrollToSection(e, 'about')} className={items}>
          <span>
            <ImProfile />
          </span>
          <a>About</a>
        </li>
        <li onClick={(e) => scrollToSection(e, 'resume')} className={items}>
          <span>
            <ImProfile />
          </span>
          <a> Resume</a>
        </li>
        <li onClick={(e) => scrollToSection(e, 'projects')} className={items}>
          <span>
            <ImStarFull />
          </span>
          <a> Projects</a>
        </li>

        <li onClick={(e) => scrollToSection(e, 'contact')} className={items}>
          <span>
            <ImBubble2 />
          </span>
          <a> Contact</a>
        </li>

        <li onClick={(e) => scrollToSection(e, 'terminal')} className={items}>
          <span>
            <ImTerminal />
          </span>
          <a> Terminal</a>
        </li>
      </ul>
    </div>
  );
}
