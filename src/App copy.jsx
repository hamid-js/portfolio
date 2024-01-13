import { useState } from 'react';
import {
  ImBubble2,
  ImCloudDownload,
  ImCompass,
  ImEnter,
  ImGithub,
  ImInstagram,
  ImLinkedin,
  ImMagicWand,
  ImMenu,
  ImPlay2,
  ImProfile,
  ImStarFull,
  ImStatsBars2,
  ImSun,
  ImTelegram,
  ImTerminal,
  ImTrophy,
  ImUsers,
  ImXing2,
} from 'react-icons/im';

import {
  SiReact,
  SiGit,
  SiJavascript,
  SiCss3,
  SiCodecademy,
  SiVisualstudiocode,
  SiSass,
  SiHtml5,
  SiGithub,
  SiMinutemailer,
} from 'react-icons/si';

function App() {
  return (
    <main className="text-stone-200">
      <Navbar />
      <HeaderCard />
      <ResumeCard />
      <Skills />
      <Works />

      <Testomonials />

      <Footer />
    </main>
  );
}

export default App;

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className="sticky  top-0 z-20 w-full  bg-[var(--primary-color-1)]">
      <div className="   h-18 flex w-full items-center justify-between px-5  py-2  ">
        <div className="flex items-start justify-between ">
          <img
            className="h-12 w-12 rounded-full "
            src="/assets/img-2.png"
            alt=""
          />
          <div className="mx-3">
            <h2 className="capitalize">Hamid Mohammadi</h2>
            <p className="text-xs text-green-400">Front-End Developer</p>
          </div>
        </div>

        <div className="flex w-16  items-center justify-between">
          <div>
            <label>
              <input
                type="checkbox"
                className="  hidden"
                checked={isDarkMode}
                onChange={() => setIsDarkMode((pre) => !pre)}
              />
              <span>
                <ImSun />
              </span>
            </label>
          </div>
          <div>
            <span className="text-2xl">
              <ImMenu />
            </span>
          </div>
        </div>
      </div>
      <div className="h-[0.5em] border-b  border-slate-800 "></div>

      <Menu />
    </div>
  );
}
function Menu() {
  const items = 'flex flex-col  items-center justify-center ';
  return (
    <div className=" h-20   w-full items-center justify-center px-5  py-6  ">
      <ul className="flex items-center justify-between text-sm capitalize">
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
            <ImTerminal />
          </span>
          <span> Dev Mode</span>
        </li>
        <li className={items}>
          <span>
            <ImBubble2 />
          </span>
          <span> Contact</span>
        </li>
      </ul>
    </div>
  );
}
function HeaderCard() {
  return (
    <div className="mb-5 flex flex-col items-center justify-center rounded-b-xl bg-[var(--primary-color-2)] ">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="my-clip-path h-72 w-full   object-cover  "
      >
        <source src="/assets/card-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        className="z-10 mt-[-6rem] h-36 w-36 rounded-2xl border-black shadow-lg shadow-green-500"
        src="/assets/img-2.png"
        alt=""
      />
      <h1 className="mt-7 font-serif text-2xl capitalize ">Hamid Mohammadi</h1>
      <h2 className="text-l font-serif  capitalize text-green-400">
        Front-End Devloper
      </h2>
      <div className="my-3 flex w-full items-center justify-center gap-5 p-3 ">
        <span>
          <ImGithub />
        </span>
        <span>
          <ImLinkedin />
        </span>
        <span>
          <ImXing2 />
        </span>
        <span>
          <ImInstagram />
        </span>
        <span>
          <ImTelegram />
        </span>
      </div>
      <div className="flex w-full items-center justify-evenly border-t border-slate-700 uppercase text-white ">
        <div className="flex items-center justify-center gap-2">
          <a href="#">download cv</a>
          <span>
            <ImCloudDownload />
          </span>
        </div>
        <span className="h-20 border-r-[1px] border-slate-700 "></span>
        <div className="flex items-center justify-center gap-2">
          <a href="#">contact me</a>
          <span>
            <ImCompass />
          </span>
        </div>
      </div>
    </div>
  );
}

function ResumeCard() {
  return (
    <div className=" flex flex-col items-start justify-evenly  bg-[var(--primary-color-2)]    ">
      <Title
        icon={<ImProfile />}
        firstPart="About "
        secondPart="Me"
        border={500}
        size="2xl"
        padding={4}
      />
      <Title
        icon={<ImMagicWand />}
        firstPart="front-end "
        secondPart="debeloper "
        border={800}
        size="lg"
        padding={5}
        width="2/3"
      />

      <div className="px-7">
        <p className="font-extralightligh pb-12  text-lg text-gray-400 ">
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
        </p>
      </div>
    </div>
  );
}

function Testomonials() {
  return (
    <div className=" my-5 flex flex-col items-start justify-evenly gap-8 rounded-lg bg-[var(--primary-color-2)] pb-20    ">
      <span className="flex w-5/6 items-center gap-5 border-b border-slate-700 px-7 py-7 font-serif text-2xl  text-green-300 ">
        <ImUsers />
        <span>
          <span className="text-white"> Testo</span>
          <span>monials</span>
        </span>
      </span>

      <div className="flex flex-col items-center justify-center px-7 ">
        <div className="relative text-gray-500 before:absolute before:left-[-10px] before:top-0 before:text-7xl before:content-['\201C'] after:absolute  after:right-0 after:top-52  after:text-7xl after:content-['\201D'] ">
          <p className=" font-extralightligh text-wrap px-10 pb-7 pt-4 text-lg  ">
            A system administrator, or sysadmin, Data scientist, Systems
            engineer from USA, California.I have rich experience in managing
            scientist,troubleshooting, licensing, and updating hardware software
            asset.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly">
          <button className="cursor-pointer border-none bg-none text-6xl ">
            &#8249;
          </button>

          <img
            className="h-28 w-28 rounded-full border-2 border-green-500 "
            src="/assets/img-2.png"
            alt=""
          />
          <button className="cursor-pointer border-none bg-none text-6xl ">
            &#8250;
          </button>
        </div>
        <span className="mt-5 font-medium capitalize">Helen Floyd</span>
        <span className="text-sm text-gray-400"> Art Director </span>
        <ul className="mt-7 flex">
          <li className="mx-2 h-3 w-3  cursor-pointer rounded-full bg-white active:bg-green-500"></li>
          <li className="mx-2 h-3 w-3 cursor-pointer rounded-full bg-green-500 active:bg-green-500"></li>
          <li className="mx-2 h-3 w-3  cursor-pointer rounded-full bg-white active:bg-green-500"></li>{' '}
        </ul>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="mb-12 flex flex-col items-start justify-evenly bg-[var(--primary-color-2)]  px-5  pb-12    ">
      <Title
        icon={<ImStatsBars2 />}
        firstPart="Ski"
        secondPart="lls"
        border={600}
        size="4xl"
      />

      <div
        className="my-7 w-full rounded-lg bg-[var(--primary-color-3)]
py-5"
      >
        <Title
          icon={<ImTerminal />}
          firstPart="cod"
          secondPart="ing"
          border={600}
          width="1/2"
          size="2xl"
          padding={4}
        />

        <div className="  w-full p-7  text-white">
          <SkillItem title="HTML 5 , CSS 3" />
          <SkillItem title="Tailwind CSS" />
          <SkillItem title="java script" fill="4/5" percentage={80} />
          <SkillItem title="React js" fill="4/5" percentage={80} />
          <SkillItem title="git , github" />
          <SkillItem title="redux " fill="4/5" percentage={80} />
        </div>

        <Title
          icon={<ImTrophy />}
          firstPart="oth"
          secondPart="er"
          border={600}
          size="2xl"
          padding={4}
        />
        <div className="flex flex-wrap items-center justify-center gap-4 p-7 text-sm uppercase ">
          <span className=" rounded-lg bg-black  px-3 py-1">RESTful API </span>
          <span className=" rounded-lg bg-black px-3 py-1">context api</span>
          <span className=" rounded-lg bg-black px-3 py-1">scss</span>
          <span className=" rounded-lg bg-black px-3 py-1">mui</span>
          <span className=" rounded-lg bg-black px-3 py-1">
            react hook form
          </span>
          <span className=" rounded-lg bg-black px-3 py-1">react query</span>
          <span className=" rounded-lg bg-black px-3 py-1">bootstrap</span>
          <span className=" rounded-lg bg-black px-3 py-1">Responsive</span>
          <span className=" rounded-lg bg-black px-3 py-1">wordpress</span>
          <span className=" rounded-lg bg-black px-3 py-1">jquery </span>
          <span className=" rounded-lg bg-black px-3 py-1">seo</span>
        </div>
      </div>
    </div>
  );
}

function SkillItem({ title = 'skill', fill = '5/5', percentage = 100 }) {
  return (
    <div>
      <span className="font-serif capitalize ">{title}</span>
      <div className="mb-2 flex items-center  justify-start gap-4">
        <div className="my-2 h-2 w-5/6 overflow-hidden  border">
          <div className={`w-${fill} h-full bg-green-500 transition-all`}></div>
        </div>
        {<div>{percentage}%</div>}
      </div>
    </div>
  );
}

function Works() {
  return (
    <div className=" mb-5 flex flex-col items-start justify-evenly gap-8 rounded-lg bg-[var(--primary-color-2)]  pb-12    ">
      <Title
        icon={<ImStarFull />}
        firstPart="pro"
        secondPart="jects"
        border={500}
        width="full"
      />

      <div className="px-7 py-7">
        <WorkItem />
        <WorkItem />
      </div>

      <div className="w-full px-7  text-white"></div>
    </div>
  );
}

function WorkItem() {
  return (
    <div className=" mb-10 flex flex-col items-center justify-evenly gap-4 rounded-2xl bg-[var(--primary-color-3)] p-7 ">
      <img className=" rounded-lg" src="/assets/img-8.jpg" alt="" />

      <span className="font-medium uppercase  text-white ">
        Car rental (<span className="text-sm text-slate-300">febuary 2023</span>
        )
      </span>

      <p className="px-7 text-center capitalize">
        A car rental website is an online platform that allows users to rent
        cars for personal or business use. The website provides an interface for
        searching, comparing, and reserving cars.
      </p>
      <div className="text-sm uppercase">
        <span className="m-2 rounded-lg bg-black px-3 py-1">react</span>
        <span className="m-2 rounded-lg bg-black px-3 py-1">scss</span>
      </div>

      <div className="mt-10  flex w-full items-center justify-around gap-12  text-2xl capitalize">
        <a className="" href="#">
          <span className="cursor-pointer hover:text-green-500">
            Code <ImGithub className="mb-1 inline" />{' '}
          </span>
        </a>
        <a className="" href="#">
          <span className="cursor-pointer hover:text-green-500">
            Live Demo <ImPlay2 className="mb-1 inline" />{' '}
          </span>
        </a>
      </div>
    </div>
  );
}

function Contact() {
  const inputStyle =
    'bg-inherit border-b  border-slate-500 outline-none focus:border-b-green-500 focus:border-b-2 transition-all focus-within:placeholder:text-white w-full';
  return (
    <div className="bg-inherit ">
      <Title
        icon={<ImBubble2 />}
        firstPart="Contact "
        secondPart="Form"
        border={500}
        width="full"
      />

      <form
        className="flex flex-col items-start justify-center gap-5 p-7 "
        action=""
      >
        <input className={inputStyle} type="text" placeholder="Full Name" />
        <input className={inputStyle} type="text" placeholder="Email Address" />
        <input
          className={inputStyle}
          type="textarea"
          placeholder="Your Message"
        />
        <button className="my-4 ml-[-10px] rounded-2xl border border-dotted border-green-500 p-3 py-2 uppercase transition-all duration-500 hover:text-green-500">
          Send Message <SiMinutemailer className="mb-1 inline text-2xl " />
        </button>
      </form>
    </div>
  );
}

function Title({
  firstPart = 'first',
  secondPart = 'second',
  icon = '',
  border = 700,
  width = '5/6',
  size = '2xl',
  padding = 7,
  heading,
}) {
  if (heading === 'h2')
    return (
      <div
        className={`border-slate-${border} flex w-${width} items-center gap-5 border-b p-${padding} font-serif text-${size} capitalize tracking-widest `}
      >
        <span className="text-green-400">{icon}</span>
        <h2>
          <span className="text-white">{firstPart}</span>
          <span className="text-green-300">{secondPart}</span>
        </h2>
      </div>
    );
  if (heading === 'h3')
    return (
      <div
        className={`border-slate-${border} flex w-${width} items-center gap-5 border-b p-${padding} font-serif text-${size} capitalize tracking-widest `}
      >
        <span className="text-green-400">{icon}</span>
        <h3>
          <span className="text-white">{firstPart}</span>
          <span className="text-green-300">{secondPart}</span>
        </h3>
      </div>
    );
  return (
    <div
      className={`border-slate-${border} flex w-${width} items-center gap-5 border-b p-${padding} font-serif text-${size} capitalize tracking-widest `}
    >
      <span className="text-green-400">{icon}</span>
      <h4>
        <span className="text-white">{firstPart}</span>
        <span className="text-green-300">{secondPart}</span>
      </h4>
    </div>
  );
}
function Footer() {
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
