import { ImMagicWand, ImProfile } from 'react-icons/im';
import Title from '../ui/Title';
import Typewriter from '../ui/Typewriter';
const text = `
 Hello, I'm Hamid Mohammadi, 
a seasoned Web Developer with 4
years of experience in in web development,
including 2 years specializing in front-end development.
My expertise spans JavaScript (ES6, ES7, etc.), 
with a focus on Next.js, React, Redux, Tailwind, and Git.
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
      className=" flex flex-col items-start justify-evenly gap-5  overflow-x-hidden  bg-[var(--primary-color-800)]  2xl:px-16"
    >
      <Title
        icon={<ImProfile />}
        firstPart="About"
        secondPart="Me"
        className="text-lg 2xl:text-4xl "
      />
      <Title
        icon={<ImMagicWand />}
        firstPart="front-end "
        secondPart="developer "
        className="px-0 text-xs sm:text-lg 2xl:text-3xl"
      />

      <div className="pl-3 text-[--primary-color-300] sm:pl-3  ">
        <div className="font-extralightligh relative  mb-[80vw] w-5/6 pb-12   text-[3.5vw]  leading-relaxed sm:mx-auto  sm:mb-96  sm:text-lg lg:w-full lg:text-[1.6vw] xl:text-xl xl:mb-[25rem]  2xl:mb-[35rem] 2xl:text-2xl 2xl:leading-relaxed ">
          <Typewriter text={text} wordDelay={30} />
        </div>

        <Title
          icon={<ImMagicWand />}
          firstPart="wordpress & "
          secondPart="SEO "
          className="text-sm sm:text-lg 2xl:text-3xl"
        />

        <p className="font-extralightligh m-auto mt-5 w-11/12 pb-12 text-[3.5vw]sm:text-lg  text-[--primary-color-300] md:text-xl xl:text-lg  2xl:text-2xl leading-relaxed">
          With over 2 years of expertise in WordPress Developer and SEO Specialist, I
          seamlessly connect the realms of aesthetics and functionality. As a
          WordPress developer, I've crafted visually appealing and user-friendly
          websites, while my SEO proficiency ensures optimal online visibility.
          This unique blend of skills positions me as a versatile professional,
          ready to bridge the gap between design and development in
          collaborative front-end development projects.
        </p>
      </div>
    </div>
  );
}
