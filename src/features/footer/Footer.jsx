import Contact from './Contact';

import {
  SiReact,
  SiJavascript,
  SiCss3,
  SiCodecademy,
  SiVisualstudiocode,
  SiSass,
  SiHtml5,
  SiGithub,
} from 'react-icons/si';

export default function Footer() {
  return (
    <>
      <footer
       
        className=" rounded-lg bg-[var(--primary-color-700)] py-24"
      >
        <div className="flex flex-wrap items-center justify-center gap-10 p-10 text-6xl text-[var(--secondary-color-300)]">
          <SiReact />
          <SiJavascript />
          <SiCss3 />
          <SiHtml5 />

          <SiGithub />

          <SiCodecademy />
          <SiVisualstudiocode />
          <SiSass />
        </div>
        <Contact />
      </footer>
      <div className="capitalize mt-[-1rem] text-[--secondary-color-500] text-center py-3 w-full font-semibold rounded-sm bg-[--primary-color-900]">
        created by Hamid Mohamadi &copy;
      </div>
    </>
  );
}
