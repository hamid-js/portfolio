import Contact  from './Contact';


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
    <div className="mt-14 rounded-lg bg-[var(--primary-color-3)]">
      <div className="flex flex-wrap items-center justify-center gap-10 p-10 text-6xl text-green-300">
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
    </div>
  );
}
