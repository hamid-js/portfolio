import { ImMagicWand, ImProfile } from 'react-icons/im';
import Title from '../ui/Title';
import Typewriter from '../ui/Typewriter';
const text = `
A system administrator, or sysadmin,
 Data scientist, Systems 
engineer from USA, California.
 I have rich experience
 in managing,troubleshooting,
  licensing, and updating
 hardware and software assets. 
 engineer A system administrator,
 or sysadmin,
  Data scientist, Systems engineer from USA,
   California. I have rich experience
    in managing,troubleshooting,licensing, 
 and updating  hardware and software assets.

`;
export default function About() {
  return (
    <div
      id="about"
      className=" flex flex-col items-start justify-evenly gap-5  overflow-x-hidden  bg-[var(--primary-color-800)]  2xl:px-16 "
    >
      <Title
        icon={<ImProfile />}
        firstPart="About "
        secondPart="Me"
        className="text-lg 2xl:text-4xl "
      />
      <Title
        icon={<ImMagicWand />}
        firstPart="front-end "
        secondPart="debeloper "
        className="text-lg 2xl:text-3xl "
      />

      <div className="text-[--primary-color-300]lg:px-10 px-7 xl:px-8  ">
        <div className="font-extralightligh  relative mb-60  pb-12 text-lg  md:text-xl xl:text-lg 2xl:mb-96 2xl:text-2xl 2xl:leading-relaxed  ">
          <Typewriter text={text} wordDelay={30} />
        </div>

        <Title
          icon={<ImMagicWand />}
          firstPart="wordpress "
          secondPart="designer "
          className="text-lg  2xl:text-3xl"
        />

        <p className="font-extralightligh  mt-5 pb-12 text-lg  text-[--primary-color-300] md:text-xl xl:text-lg  2xl:text-2xl 2xl:leading-relaxed">
          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
        </p>
      </div>
    </div>
  );
}
