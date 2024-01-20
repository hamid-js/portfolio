import { ImMagicWand, ImProfile } from 'react-icons/im';
import Title from '../ui/Title';
import Typewriter from '../ui/Typewriter';
const text = `
 Hello, I'm Hamid Mohammadi, 
a seasoned Front End Developer with a
year of dedicated experience in web development.
My expertise spans HTML5, CSS3, and JavaScript,
with a focus onReact, Redux, Tailwind, and Git.
I bring a dynamic approach to creating
user-centric experiences, evident in my portfolio, where
each project showcases my problem-solving prowess and
coding finesse.From responsive designs to interactive
React applications, my commitment to excellence
shines through. I'm eager to contribute my skills and
passion to the ever-evolving landscape of web 
development.and updating hardware and software assets.
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

      <div className="text-[--primary-color-300]  pl-5 sm:pl-3 xl:px-10  ">
        <div className="font-extralightligh leading-relaxed  relative mb-72 sm:mb-96   pb-12 text-sm sm:text-lg   xl:mb-[25rem] 2xl:mb-[35rem] 2xl:text-2xl 2xl:leading-relaxed  ">
          <Typewriter text={text} wordDelay={30} />
        </div>

        <Title
          icon={<ImMagicWand />}
          firstPart="wordpress "
          secondPart="designer "
          className="text-lg 2xl:text-3xl"
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
