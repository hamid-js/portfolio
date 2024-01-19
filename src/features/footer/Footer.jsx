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
      <footer className=" rounded-lg bg-[var(--primary-color-700)] pt-10 ">
       
        <div className="flex flex-wrap items-center justify-around gap-x-14 gap-y-4  text-5xl text-[var(--secondary-color-300)] mx-16 ">
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
      
      <div className="mt-[-1rem] w-full rounded-sm bg-[--primary-color-900] py-3 text-center font-semibold capitalize text-[--secondary-color-500]">
        created by Hamid Mohamadi &copy;
      </div>
      </footer>
    </>
  );
}
